const Order = require('../models/order');
const Transaction = require('../models/transaction');
const log = require('log')();
const escapeHtml = require('escape-html');

/**
 * high-level order status & transaction which caused it & messages to show
 * success -- order success: paid, processed
 * paid -- order paid, but not yet success
 * error -- server-side error
 * fail -- payment failed
 * pending -- waiting for payment
 * cancel -- order canceled
 * @param order
 * @returns {*}
 */
module.exports = function*(order) {
  var info = yield* getOrderInfo(order);

  var linkToProfile = '';
  if (order.user && require(order.module).formatOrderForProfile) {
    linkToProfile = `<p>Информацию о заказе вы также можете найти <a href="${order.user.getProfileUrl()}/orders">в своём профиле</a>.</p>`;
  }

  info.linkToProfile = linkToProfile;

  return info;
};

function* getOrderInfo(order) {
  // get transaction which defines current status

  var mailUrl = '<a href="mailto:orders@javascript.ru?subject=' + encodeURIComponent('Заказ ' + order.number) + '">orders@javascript.ru</a>';
  var transaction;

  if (order.status == Order.STATUS_SUCCESS) {
    // may not be the last transaction by modified
    // because theoretically it's possible to have 2 transactions:
    // pending (1tx) -> fail, pending (2nx tx came) -> success, pending (1st tx got money)
    transaction = yield Transaction.findOne({
      order:  order._id,
      status: Transaction.STATUS_SUCCESS
    }).exec();

    // it is possible that there is no transaction at all
    // (if order status is set manually)
    return {
      number:      order.number,
      status:      "success",
      statusText:  "Оплата получена",
      transaction: transaction
      // no title/accent/description, because the action on success is order-module-dependant
    };
  }

  if (order.status == Order.STATUS_PAID) {
    transaction = yield Transaction.findOne({
      order:  order._id,
      status: Transaction.STATUS_SUCCESS
    }).exec();

    return {
      number:      order.number,
      status:      "paid",
      statusText:  "Ожидает обработки",
      transaction: transaction,
      title:       "Спасибо за заказ!",
      accent:      "Оплата получена, заказ обрабатывается.",
      description: `<p>По окончании вам будет отправлено письмо на электронный адрес <b>${order.email}</b>.</p>
        <p>Если у вас возникли какие-нибудь вопросы, присылайте их на ${mailUrl}.</p>`
    };

  }

  if (order.status == Order.STATUS_PENDING) {
    // PENDING order, but Transaction.STATUS_SUCCESS?
    // impossible!
    transaction = yield Transaction.findOne({
      order:  order._id,
      status: Transaction.STATUS_SUCCESS
    }).exec();

    if (transaction) {
      log.error("Transaction success, but order pending?!? Impossible! Must be paid", transaction, order);
      return {
        // our error, the visitor can do nothing
        status:      "error",
        statusText:  "Произошла ошибка",
        transaction: transaction,
        title:       "Произошла ошибка.",
        accent:      "При обработке платежа произошла ошибка.",
        description: `<p>Пожалуйста, напишите в поддержку ${mailUrl}.</p>`,
        number:      order.number
      };
    }

    // NO CALLBACK from online-system yet
    // probably he just pressed the "back" button
    // OR
    // selected the offline method of payment
    // OR
    // callback will come later
    transaction = yield Transaction.findOne({
      order:  order._id,
      status: Transaction.STATUS_PENDING // there may be only 1 pending tx at time
    }).exec();

    log.debug("findOne pending transaction: ", transaction && transaction.toObject());

    if (transaction) {

      // Waiting for payment

      if (transaction.paymentMethod == 'banksimple') {
        return {
          number:             order.number,
          status:             "pending",
          statusText:         "Ожидается оплата",
          transaction:        transaction,
          title:              "Спасибо за заказ!",
          accent:             `Для завершения заказа скачайте квитанцию и оплатите ее через банк.`,
          description:        `<div><button class="submit-button" onclick="location.href='/payments/banksimple/${transaction.number}/invoice.docx'" type="button"><span class="submit-button__text">Скачать квитанцию</span></button></div>
            <p>Квитанция действительна три дня. Оплатить можно в Сбербанке (3% комиссия) или любом банке, где у вас есть счёт.</p>
            <p>После оплаты в течение двух рабочих дней мы вышлем вам всю необходимую информацию на адрес <b>${order.email}</b>.</p>
            <p>Если у вас возникли какие-либо вопросы, присылайте их на ${mailUrl}.</p>
            `,
          descriptionProfile: `<div>Вы можете повторно <a href="/payments/banksimple/${transaction.number}/invoice.docx">скачать квитанцию</a>. Изменить метод оплаты можно нажатием на кнопку ниже.</div>`
        };
      } else if (transaction.paymentMethod == 'invoice') {
        var invoiceButton = `<button class="submit-button" onclick="location.href='/payments/invoice/${transaction.number}/invoice.docx'" type="button"><span class="submit-button__text">Скачать счёт</span></button>`;
        var agreementButton = transaction.paymentDetails.agreementRequired ?
          `<button class="submit-button" onclick="location.href='/payments/invoice/${transaction.number}/agreement.docx'" type="button"><span class="submit-button__text">Скачать договор и акт</span></button>` :
          '';

        return {
          number:             order.number,
          status:             "pending",
          statusText:         "Ожидается оплата",
          transaction:        transaction,
          title:              "Спасибо за заказ!",
          accent:             `Для завершения заказа произведите оплату по счёту.`,
          description:        `
            <div>${invoiceButton} ${agreementButton}</div>
            <p>Счёт действителен пять рабочих дней.</p>
            <p>После оплаты мы вышлем вам всю необходимую информацию на адрес <b>${order.email}</b>.</p>
            <p>Если у вас возникли какие-либо вопросы, присылайте их на ${mailUrl}.</p>
            `,
          descriptionProfile: `<div>Вы можете повторно <a href="/payments/invoice/${transaction.number}/invoice.docx">скачать счёт</a>` +
                              (transaction.paymentDetails.agreementRequired ? ` и <a href="/payments/invoice/${transaction.number}/agreement.docx">договор с актом</a>` : '') +
                              `. Изменить детали и метод оплаты можно нажатием на кнопку ниже.</div>`
        };
      } else {
        return {
          number:      order.number,
          status:      "pending",
          statusText:  "Ожидается оплата",
          transaction: transaction,
          title:       "Спасибо за заказ!",
          accent:      `Как только мы получим подтверждение от платёжной системы, мы вышлем вам всю необходимую информацию на адрес <b>${order.email}</b>.`,
          description: `
          <p>Если у вас возникли проблемы при работе с платежной системой, и вы не оплатили заказ,
          вы можете <a href="?changePayment=1" data-order-payment-change>выбрать другой метод оплаты</a> и оплатить заново.</p>
          <p>Если у вас возникли какие-либо вопросы, присылайте их на ${mailUrl}.</p>`
        };
      }
    }

    // Failed?
    // Show the latest error and let him pay
    transaction = yield Transaction.findOne({
      order:  order._id,
      status: Transaction.STATUS_FAIL
    }).sort({created: -1}).exec();

    log.debug("findOne failed transaction: ", transaction && transaction.toObject());

    return {
      number:      order.number,
      status:      "fail",
      statusText:  "Оплата не прошла",
      title:       "Оплата не прошла.",
      transaction: transaction,
      accent:      "Оплата не прошла, попробуйте ещё раз.",
      description: (transaction.statusMessage ? `<div>Причина:&nbsp;<em>${escapeHtml(transaction.statusMessage)}</em></div>` : '') +
                   `<p>По вопросам, касающимся оплаты, пишите на ${mailUrl}.</p>`
    };


  }


  if (order.status == Order.STATUS_CANCEL) {
    return {
      number:      order.number,
      status:      "cancel",
      statusText:  "Заказ отменён",
      title:       "Заказ отменён.",
      description: `<p>По вопросам, касающимся заказа, пишите на ${mailUrl}.</p>.`
    };
  }

  log.error("order", order);
  throw new Error("Must never reach this point. No transaction?");

}

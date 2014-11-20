var webdriver = require('selenium-webdriver');
const path = require('path');
const app = require('app');
const db = require('lib/dataUtil');
const config = require('config');
var By = require('selenium-webdriver').By;
var until = require('selenium-webdriver').until;

describe('facebook', function() {

  var driver, server;

  before(function*() {
    driver = new webdriver.Builder().
      withCapabilities(webdriver.Capabilities.firefox()).
      build();

    server = app.listen(config.server.port);
  });

  it('logs in', function*() {

    driver.get('http://stage.javascript.ru/intro');
    driver.findElement(By.css('button.sitetoolbar__login')).click();

    var btn = By.css('button[data-provider="facebook"]');
    driver.wait(until.elementLocated(btn));
    driver.findElement(btn).click();

    driver.getAllWindowHandles().then(function(handles) {
      driver.switchTo().window(handles[1]); // new window
    });

    driver.wait(until.elementLocated(By.id('pass')));

    driver.findElement(By.id('email')).sendKeys(config.authProviders.facebook.testCredentials.email);
    driver.findElement(By.id('pass')).sendKeys(config.authProviders.facebook.testCredentials.pass);
    driver.findElement(By.id('pass')).sendKeys(webdriver.Key.RETURN);

    // after login there are 2 possibilities
    // 1) First time login to facebook => need to click __CONFIRM__
    // 2) Already authorized app => will proceed (usually this is the case)

    // if 1) is correct, the window will close,
    // driver.wait(until.elementLocated(By.name('__CONFIRM__')) will not work

    driver.wait(function() {
      return driver.getAllWindowHandles().then(function(handles) {
        return handles.length == 1; // wait to see if only 1 window left (works)
      });
    }, 5000).then(function() {
      // only 1 window means we're done w/ logging in
      return webdriver.promise.fulfilled();

    }, function() {
      // 2 windows means we need to press __CONFIRM__ (or something went wrong?)

      // if 2 windows => confirm and wait again
      driver.findElement(By.name('__CONFIRM__')).click();

      return driver.wait(function() {
        return driver.getAllWindowHandles().then(function(handles) {
          return handles.length == 1; // wait to see if only 1 window left (works)
        });
      }, 5000);

    });

    driver.getAllWindowHandles().then(function(handles) {
      driver.switchTo().window(handles[0]); // main window
    });


    driver.wait(until.elementLocated(By.css('.sitetoolbar__user')));

    // success!

  });

  after(function() {
    driver.quit();
    server.close();
  });

});

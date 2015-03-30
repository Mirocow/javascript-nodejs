webpackJsonp_name_([ 6 ], {
    28: function(t, e, n) {
        "use strict";
        function r(t) {
            function e(t) {
                window.metrika.reachGoal("XHR-" + t.toUpperCase(), {
                    time: Date.now() - a.timeStart,
                    method: a.method,
                    url: a.url,
                    status: a.status + ""
                });
            }
            function n(t, e) {
                var n = new CustomEvent(t);
                return n.originalEvent = e, n;
            }
            function r(t, e) {
                var r = n("fail", e);
                r.reason = t, a.dispatchEvent(r);
            }
            function i(t, e) {
                var r = n("success", e);
                r.result = t, a.dispatchEvent(r);
            }
            var a = new XMLHttpRequest(), s = t.method || "GET", u = t.body, c = t.url;
            a.open(s, c, t.sync ? !1 : !0), a.method = s;
            var l = o();
            l && !t.skipCsrf && a.setRequestHeader("X-XSRF-TOKEN", l), "[object Object]" == {}.toString.call(u) && (a.setRequestHeader("Content-Type", "application/json;charset=UTF-8"), 
            u = JSON.stringify(u)), a.addEventListener("loadstart", function(t) {
                a.timeStart = Date.now(), e(t.type);
                var r = n("xhrstart", t);
                document.dispatchEvent(r);
            }), a.addEventListener("loadend", function(t) {
                e(t.type);
                var r = n("xhrend", t);
                document.dispatchEvent(r);
            }), a.addEventListener("success", function(t) {
                e(t.type);
                var r = n("xhrsuccess", t);
                r.result = t.result, document.dispatchEvent(r);
            }), a.addEventListener("fail", function(t) {
                e(t.type);
                var r = n("xhrfail", t);
                r.reason = t.reason, document.dispatchEvent(r);
            }), t.raw || a.setRequestHeader("Accept", "application/json"), a.setRequestHeader("X-Requested-With", "XMLHttpRequest");
            var f = t.normalStatuses || [ 200 ];
            return a.addEventListener("error", function(t) {
                r("Ошибка связи с сервером.", t);
            }), a.addEventListener("timeout", function(t) {
                r("Превышено максимально допустимое время ожидания ответа от сервера.", t);
            }), a.addEventListener("abort", function(t) {
                r("Запрос был прерван.", t);
            }), a.addEventListener("load", function(e) {
                if (!a.status) return void r("Не получен ответ от сервера.", e);
                if (-1 == f.indexOf(a.status)) return void r("Ошибка на стороне сервера (код " + a.status + "), попытайтесь позднее", e);
                var n = a.responseText, o = a.getResponseHeader("Content-Type");
                if (o.match(/^application\/json/) || t.json) try {
                    n = JSON.parse(n);
                } catch (e) {
                    return void r("Некорректный формат ответа от сервера", e);
                }
                i(n, e);
            }), setTimeout(function() {
                a.send(u);
            }, 0), a;
        }
        var i = n(23), o = n(38);
        document.addEventListener("xhrfail", function(t) {
            new i.Error(t.reason);
        }), t.exports = r;
    },
    38: function(t) {
        "use strict";
        t.exports = function() {
            var t = document.cookie.match(/XSRF-TOKEN=([\w-]+)/);
            return t ? t[1] : null;
        };
    },
    42: function(t, e, n) {
        "use strict";
        e.AuthModal = n(56);
    },
    52: function(t, e) {
        "use strict";
        e.thumb = function(t, e, n) {
            if (!t) return t;
            var r = window.devicePixelRatio;
            e *= r, n *= r;
            var i = 160 >= e && 160 >= n ? "t" : 320 >= e && 320 >= n ? "m" : 640 >= e && 640 >= n ? "i" : 1024 >= e && 1024 >= n ? "h" : "";
            return t.slice(0, t.lastIndexOf(".")) + i + t.slice(t.lastIndexOf("."));
        };
    },
    56: function(t, e, n) {
        "use strict";
        function r(t) {
            a.apply(this, arguments), t = t || {}, t.successRedirect || (t.successRedirect = window.location.href);
            var e = this;
            t.callback || (t.callback = function() {
                e.successRedirect();
            }), this.options = t, this.setContent(f(u)), t.message && this.showFormMessage(t.message, "info"), 
            this.initEventHandlers();
        }
        var i = n(28), o = n(27), a = n(9), s = n(37), u = n(83), c = n(84), l = n(85), f = n(81);
        r.prototype = Object.create(a.prototype), o.delegateMixin(r.prototype), r.prototype.successRedirect = function() {
            window.location.href == this.options.successRedirect ? window.location.reload() : window.location.href = this.options.successRedirect;
        }, r.prototype.clearFormMessages = function() {
            [].forEach.call(this.elem.querySelectorAll(".text-input_invalid"), function(t) {
                t.classList.remove("text-input_invalid");
            }), [].forEach.call(this.elem.querySelectorAll(".text-input__err"), function(t) {
                t.remove();
            }), this.elem.querySelector("[data-notification]").innerHTML = "";
        }, r.prototype.request = function(t) {
            var e = i(t);
            return e.addEventListener("loadstart", function() {
                var t = this.startRequestIndication();
                e.addEventListener("loadend", t);
            }.bind(this)), e;
        }, r.prototype.startRequestIndication = function() {
            this.showOverlay();
            var t = this, e = this.elem.querySelector('[type="submit"]');
            if (e) {
                var n = new s({
                    elem: e,
                    size: "small",
                    "class": "submit-button__spinner",
                    elemClass: "submit-button_progress"
                });
                n.start();
            }
            return function() {
                t.hideOverlay(), n && n.stop();
            };
        }, r.prototype.initEventHandlers = function() {
            this.delegate('[data-switch="register-form"]', "click", function(t) {
                t.preventDefault(), this.setContent(f(c));
            }), this.delegate('[data-switch="login-form"]', "click", function(t) {
                t.preventDefault(), this.setContent(f(u));
            }), this.delegate('[data-switch="forgot-form"]', "click", function(t) {
                t.preventDefault();
                var e = this.elem.querySelector('[type="email"]');
                this.setContent(f(l));
                var n = this.elem.querySelector('[type="email"]');
                n.value = e.value;
            }), this.delegate('[data-form="login"]', "submit", function(t) {
                t.preventDefault(), this.submitLoginForm(t.target);
            }), this.delegate('[data-form="register"]', "submit", function(t) {
                t.preventDefault(), this.submitRegisterForm(t.target);
            }), this.delegate('[data-form="forgot"]', "submit", function(t) {
                t.preventDefault(), this.submitForgotForm(t.target);
            }), this.delegate("[data-provider]", "click", function(t) {
                t.preventDefault(), this.openAuthPopup("/auth/login/" + t.delegateTarget.dataset.provider);
            }), this.delegate("[data-action-verify-email]", "click", function(t) {
                t.preventDefault();
                var e = new FormData(), n = t.delegateTarget.dataset.actionVerifyEmail;
                e.append("email", n);
                var r = this.request({
                    method: "POST",
                    url: "/auth/reverify",
                    body: e
                }), i = this;
                r.addEventListener("success", function(t) {
                    200 == this.status ? i.showFormMessage("\n        <p>Письмо-подтверждение отправлено ещё раз.</p>\n        <p><a href='#' data-action-verify-email='" + n + "'>перезапросить подтверждение.</a></p>\n        ", "success") : i.showFormMessage(t.result, "error");
                });
            });
        }, r.prototype.submitRegisterForm = function(t) {
            this.clearFormMessages();
            var e = !1;
            if (t.elements.email.value || (e = !0, this.showInputError(t.elements.email, "Введите, пожалуста, email.")), 
            t.elements.displayName.value || (e = !0, this.showInputError(t.elements.displayName, "Введите, пожалуста, имя пользователя.")), 
            t.elements.password.value || (e = !0, this.showInputError(t.elements.password, "Введите, пожалуста, пароль.")), 
            !e) {
                var n = new FormData(t);
                n.append("successRedirect", this.options.successRedirect);
                var r = this.request({
                    method: "POST",
                    url: "/auth/register",
                    normalStatuses: [ 201, 400 ],
                    body: n
                }), i = this;
                r.addEventListener("success", function(e) {
                    if (201 == this.status) return i.setContent(f(u)), void i.showFormMessage("<p>С адреса notify@javascript.ru отправлено письмо со ссылкой-подтверждением.</p><p><a href='#' data-action-verify-email='" + t.elements.email.value + "'>перезапросить подтверждение.</a></p>", "success");
                    if (400 != this.status) i.showFormMessage("Неизвестный статус ответа сервера", "error"); else for (var n in e.result.errors) i.showInputError(t.elements[n], e.result.errors[n]);
                });
            }
        }, r.prototype.submitForgotForm = function(t) {
            this.clearFormMessages();
            var e = !1;
            if (t.elements.email.value || (e = !0, this.showInputError(t.elements.email, "Введите, пожалуста, email.")), 
            !e) {
                var n = new FormData(t);
                n.append("successRedirect", this.options.successRedirect);
                var r = this.request({
                    method: "POST",
                    url: "/auth/forgot",
                    normalStatuses: [ 200, 404 ],
                    body: n
                }), i = this;
                r.addEventListener("success", function(t) {
                    200 == this.status ? (i.setContent(f(u)), i.showFormMessage(t.result, "success")) : 404 == this.status && i.showFormMessage(t.result, "error");
                });
            }
        }, r.prototype.showInputError = function(t, e) {
            t.parentNode.classList.add("text-input_invalid");
            var n = document.createElement("span");
            n.className = "text-input__err", n.innerHTML = e, t.parentNode.appendChild(n);
        }, r.prototype.showFormMessage = function(t, e) {
            if (0 !== t.indexOf("<p>") && (t = "<p>" + t + "</p>"), -1 == [ "info", "error", "warning", "success" ].indexOf(e)) throw Error("Unsupported type: " + e);
            var n = document.createElement("div");
            n.className = "login-form__" + e, n.innerHTML = t, this.elem.querySelector("[data-notification]").innerHTML = "", 
            this.elem.querySelector("[data-notification]").appendChild(n);
        }, r.prototype.submitLoginForm = function(t) {
            this.clearFormMessages();
            var e = !1;
            if (t.elements.login.value || (e = !0, this.showInputError(t.elements.login, "Введите, пожалуста, имя или email.")), 
            t.elements.password.value || (e = !0, this.showInputError(t.elements.password, "Введите, пожалуста, пароль.")), 
            !e) {
                var n = this.request({
                    method: "POST",
                    url: "/auth/login/local",
                    normalStatuses: [ 200, 401 ],
                    body: new FormData(t)
                }), r = this;
                n.addEventListener("success", function(t) {
                    return 200 != this.status ? void r.onAuthFailure(t.result.message) : void r.onAuthSuccess(t.result.user);
                });
            }
        }, r.prototype.openAuthPopup = function(t) {
            this.authPopup && !this.authPopup.closed && this.authPopup.close();
            var e = 800, n = 600, r = (window.outerHeight - n) / 2, i = (window.outerWidth - e) / 2;
            window.authModal = this, this.authPopup = window.open(t, "authModal", "width=" + e + ",height=" + n + ",scrollbars=0,top=" + r + ",left=" + i);
        }, r.prototype.onAuthSuccess = function(t) {
            window.currentUser = t, this.options.callback();
        }, r.prototype.onAuthFailure = function(t) {
            this.showFormMessage(t || "Отказ в авторизации.", "error");
        }, t.exports = r;
    },
    81: function(t, e, n) {
        "use strict";
        function r(t) {
            t.bem = i, t.thumb = o;
        }
        var i = n(87)(), o = n(52).thumb;
        t.exports = function(t, e) {
            return e = e ? Object.create(e) : {}, r(e), t(e);
        };
    },
    83: function(t, e, n) {
        var r = n(89);
        t.exports = function(t) {
            var e = [], n = {}, i = t || {};
            return function(t) {
                e.push("");
                var i = [], o = [ "block" ];
                n.b = function(n, r, a) {
                    this && this.block, this && this.attributes || {};
                    t.call(this, e, i, o, n, r, a);
                }, n.e = function(t) {
                    var e = this && this.block, i = this && this.attributes || {};
                    n.b.call({
                        block: function() {
                            e && e();
                        },
                        attributes: r.merge([ i ])
                    }, t, !0);
                }, n.b.call({
                    block: function() {
                        n.e.call({
                            block: function() {
                                n.b.call({
                                    attributes: {
                                        type: "button",
                                        title: "закрыть",
                                        "class": "close-button __close"
                                    }
                                }, "button"), n.e.call({
                                    block: function() {
                                        n.e.call({
                                            block: function() {
                                                e.push("Вход в систему");
                                            },
                                            attributes: {
                                                "class": "title"
                                            }
                                        }, "h4"), n.e.call({
                                            block: function() {
                                                n.e.call({
                                                    block: function() {
                                                        e.push("регистрация");
                                                    },
                                                    attributes: {
                                                        type: "button",
                                                        "data-switch": "register-form",
                                                        "class": "button-link __register"
                                                    }
                                                }, "button");
                                            },
                                            attributes: {
                                                "class": "header-aside"
                                            }
                                        });
                                    },
                                    attributes: {
                                        "class": "line __header"
                                    }
                                }), n.e.call({
                                    attributes: {
                                        "data-notification": !0,
                                        "class": "line __notification"
                                    }
                                }), n.e.call({
                                    block: function() {
                                        n.e.call({
                                            block: function() {
                                                e.push("Email:");
                                            },
                                            attributes: {
                                                "for": "login",
                                                "class": "label"
                                            }
                                        }, "label"), n.b.call({
                                            block: function() {
                                                n.e.call({
                                                    attributes: {
                                                        id: "login",
                                                        name: "login",
                                                        type: "email",
                                                        autofocus: !0,
                                                        "class": "control"
                                                    }
                                                }, "input");
                                            },
                                            attributes: {
                                                "class": "text-input __input"
                                            }
                                        }, "span");
                                    },
                                    attributes: {
                                        "class": "line"
                                    }
                                }), n.e.call({
                                    block: function() {
                                        n.e.call({
                                            block: function() {
                                                e.push("Пароль:");
                                            },
                                            attributes: {
                                                "for": "password",
                                                "class": "label"
                                            }
                                        }, "label"), n.b.call({
                                            block: function() {
                                                n.e.call({
                                                    attributes: {
                                                        id: "password",
                                                        type: "password",
                                                        name: "password",
                                                        "class": "control"
                                                    }
                                                }, "input"), n.e.call({
                                                    block: function() {
                                                        e.push("Забыли?");
                                                    },
                                                    attributes: {
                                                        type: "button",
                                                        "data-switch": "forgot-form",
                                                        "class": "aside __forgot __button-link"
                                                    }
                                                }, "button");
                                            },
                                            attributes: {
                                                "class": "text-input _with-aside __input"
                                            }
                                        }, "span");
                                    },
                                    attributes: {
                                        "class": "line"
                                    }
                                }), n.e.call({
                                    block: function() {
                                        n.b.call({
                                            block: function() {
                                                n.e.call({
                                                    block: function() {
                                                        e.push("Войти");
                                                    },
                                                    attributes: {
                                                        "class": "text"
                                                    }
                                                }, "span");
                                            },
                                            attributes: {
                                                type: "submit",
                                                "class": "submit-button _small __submit"
                                            }
                                        }, "button");
                                    },
                                    attributes: {
                                        "class": "line __footer"
                                    }
                                }), n.e.call({
                                    block: function() {
                                        n.e.call({
                                            block: function() {
                                                e.push("Вход через социальные сети");
                                            },
                                            attributes: {
                                                "class": "social-logins-title"
                                            }
                                        }, "h5"), e.push(" "), n.b.call({
                                            block: function() {
                                                e.push("Facebook");
                                            },
                                            attributes: {
                                                "data-provider": "facebook",
                                                "class": "social-login _facebook __social-login"
                                            }
                                        }, "button"), e.push(" "), n.b.call({
                                            block: function() {
                                                e.push("Google+");
                                            },
                                            attributes: {
                                                "data-provider": "google",
                                                "class": "social-login _google __social-login"
                                            }
                                        }, "button"), e.push(" "), n.b.call({
                                            block: function() {
                                                e.push("Вконтакте");
                                            },
                                            attributes: {
                                                "data-provider": "vkontakte",
                                                "class": "social-login _vkontakte __social-login"
                                            }
                                        }, "button"), e.push(" "), n.b.call({
                                            block: function() {
                                                e.push("Github");
                                            },
                                            attributes: {
                                                "data-provider": "github",
                                                "class": "social-login _github __social-login"
                                            }
                                        }, "button"), e.push(" "), n.b.call({
                                            block: function() {
                                                e.push("Яндекс");
                                            },
                                            attributes: {
                                                "data-provider": "yandex",
                                                "class": "social-login _yandex __social-login"
                                            }
                                        }, "button");
                                    },
                                    attributes: {
                                        "class": "line __social-logins"
                                    }
                                });
                            },
                            attributes: {
                                action: "#",
                                "class": "form"
                            }
                        }, "form");
                    },
                    attributes: {
                        "data-form": "login",
                        "class": "login-form"
                    }
                });
            }.call(this, "bem" in i ? i.bem : "undefined" != typeof bem ? bem : void 0), e.join("");
        };
    },
    84: function(t, e, n) {
        var r = n(89);
        t.exports = function(t) {
            var e = [], n = {}, i = t || {};
            return function(t) {
                e.push("");
                var i = [], o = [ "block" ];
                n.b = function(n, r, a) {
                    this && this.block, this && this.attributes || {};
                    t.call(this, e, i, o, n, r, a);
                }, n.e = function(t) {
                    var e = this && this.block, i = this && this.attributes || {};
                    n.b.call({
                        block: function() {
                            e && e();
                        },
                        attributes: r.merge([ i ])
                    }, t, !0);
                }, n.b.call({
                    block: function() {
                        n.e.call({
                            block: function() {
                                n.b.call({
                                    attributes: {
                                        type: "button",
                                        title: "закрыть",
                                        "class": "close-button __close"
                                    }
                                }, "button"), n.e.call({
                                    block: function() {
                                        n.e.call({
                                            block: function() {
                                                e.push("Регистрация");
                                            },
                                            attributes: {
                                                "class": "title"
                                            }
                                        }, "h4"), n.e.call({
                                            block: function() {
                                                n.e.call({
                                                    block: function() {
                                                        e.push("вход");
                                                    },
                                                    attributes: {
                                                        type: "button",
                                                        "data-switch": "login-form",
                                                        "class": "button-link"
                                                    }
                                                }, "button");
                                            },
                                            attributes: {
                                                "class": "header-aside"
                                            }
                                        });
                                    },
                                    attributes: {
                                        "class": "line __header"
                                    }
                                }), n.e.call({
                                    attributes: {
                                        "data-notification": !0,
                                        "class": "line __notification"
                                    }
                                }), n.e.call({
                                    block: function() {
                                        n.e.call({
                                            block: function() {
                                                e.push("Email:");
                                            },
                                            attributes: {
                                                "for": "register-email",
                                                "class": "label"
                                            }
                                        }, "label"), n.b.call({
                                            block: function() {
                                                n.e.call({
                                                    attributes: {
                                                        id: "register-email",
                                                        name: "email",
                                                        type: "email",
                                                        required: !0,
                                                        autofocus: !0,
                                                        "class": "control"
                                                    }
                                                }, "input");
                                            },
                                            attributes: {
                                                "class": "text-input __input"
                                            }
                                        }, "span");
                                    },
                                    attributes: {
                                        "class": "line"
                                    }
                                }), n.e.call({
                                    block: function() {
                                        n.e.call({
                                            block: function() {
                                                e.push("Имя пользователя:");
                                            },
                                            attributes: {
                                                "for": "register-displayName",
                                                "class": "label"
                                            }
                                        }, "label"), n.b.call({
                                            block: function() {
                                                n.e.call({
                                                    attributes: {
                                                        id: "register-displayName",
                                                        name: "displayName",
                                                        required: !0,
                                                        "class": "control"
                                                    }
                                                }, "input");
                                            },
                                            attributes: {
                                                "class": "text-input __input"
                                            }
                                        }, "span");
                                    },
                                    attributes: {
                                        "class": "line"
                                    }
                                }), n.e.call({
                                    block: function() {
                                        n.e.call({
                                            block: function() {
                                                e.push("Пароль:");
                                            },
                                            attributes: {
                                                "for": "register-password",
                                                "class": "label"
                                            }
                                        }, "label"), n.b.call({
                                            block: function() {
                                                n.e.call({
                                                    attributes: {
                                                        id: "register-password",
                                                        type: "password",
                                                        name: "password",
                                                        required: !0,
                                                        "class": "control"
                                                    }
                                                }, "input");
                                            },
                                            attributes: {
                                                "class": "text-input __input"
                                            }
                                        }, "span");
                                    },
                                    attributes: {
                                        "class": "line"
                                    }
                                }), n.e.call({
                                    block: function() {
                                        n.b.call({
                                            block: function() {
                                                n.e.call({
                                                    block: function() {
                                                        e.push("Зарегистрироваться");
                                                    },
                                                    attributes: {
                                                        "class": "text"
                                                    }
                                                }, "span");
                                            },
                                            attributes: {
                                                type: "submit",
                                                "class": "submit-button _small submit"
                                            }
                                        }, "button");
                                    },
                                    attributes: {
                                        "class": "line __footer"
                                    }
                                }), n.e.call({
                                    block: function() {
                                        n.e.call({
                                            block: function() {
                                                e.push("Вход через социальные сети");
                                            },
                                            attributes: {
                                                "class": "social-logins-title"
                                            }
                                        }, "h5"), e.push(" "), n.b.call({
                                            block: function() {
                                                e.push("Facebook");
                                            },
                                            attributes: {
                                                "data-provider": "facebook",
                                                "class": "social-login _facebook __social-login"
                                            }
                                        }, "button"), e.push(" "), n.b.call({
                                            block: function() {
                                                e.push("Google+");
                                            },
                                            attributes: {
                                                "data-provider": "google",
                                                "class": "social-login _google __social-login"
                                            }
                                        }, "button"), e.push(" "), n.b.call({
                                            block: function() {
                                                e.push("Вконтакте");
                                            },
                                            attributes: {
                                                "data-provider": "vkontakte",
                                                "class": "social-login _vkontakte __social-login"
                                            }
                                        }, "button"), e.push(" "), n.b.call({
                                            block: function() {
                                                e.push("Github");
                                            },
                                            attributes: {
                                                "data-provider": "github",
                                                "class": "social-login _github __social-login"
                                            }
                                        }, "button"), e.push(" "), n.b.call({
                                            block: function() {
                                                e.push("Яндекс");
                                            },
                                            attributes: {
                                                "data-provider": "yandex",
                                                "class": "social-login _yandex __social-login"
                                            }
                                        }, "button");
                                    },
                                    attributes: {
                                        "class": "line __social-logins"
                                    }
                                });
                            },
                            attributes: {
                                action: "#",
                                "data-form": "register",
                                "class": "form"
                            }
                        }, "form");
                    },
                    attributes: {
                        "class": "login-form"
                    }
                });
            }.call(this, "bem" in i ? i.bem : "undefined" != typeof bem ? bem : void 0), e.join("");
        };
    },
    85: function(t, e, n) {
        var r = n(89);
        t.exports = function(t) {
            var e = [], n = {}, i = t || {};
            return function(t) {
                e.push("");
                var i = [], o = [ "block" ];
                n.b = function(n, r, a) {
                    this && this.block, this && this.attributes || {};
                    t.call(this, e, i, o, n, r, a);
                }, n.e = function(t) {
                    var e = this && this.block, i = this && this.attributes || {};
                    n.b.call({
                        block: function() {
                            e && e();
                        },
                        attributes: r.merge([ i ])
                    }, t, !0);
                }, n.b.call({
                    block: function() {
                        n.e.call({
                            block: function() {
                                n.b.call({
                                    attributes: {
                                        type: "button",
                                        title: "закрыть",
                                        "class": "close-button __close"
                                    }
                                }, "button"), n.e.call({
                                    block: function() {
                                        n.e.call({
                                            block: function() {
                                                e.push("Восстановление пароля");
                                            },
                                            attributes: {
                                                "class": "title"
                                            }
                                        }, "h4");
                                    },
                                    attributes: {
                                        "class": "line __header"
                                    }
                                }), n.e.call({
                                    attributes: {
                                        "data-notification": !0,
                                        "class": "line __notification"
                                    }
                                }), n.e.call({
                                    block: function() {
                                        n.e.call({
                                            block: function() {
                                                e.push("Email:");
                                            },
                                            attributes: {
                                                "for": "forgot-email",
                                                "class": "label"
                                            }
                                        }, "label"), n.b.call({
                                            block: function() {
                                                n.e.call({
                                                    attributes: {
                                                        id: "forgot-email",
                                                        name: "email",
                                                        type: "email",
                                                        autofocus: !0,
                                                        "class": "control"
                                                    }
                                                }, "input");
                                            },
                                            attributes: {
                                                "class": "text-input __input"
                                            }
                                        }, "span");
                                    },
                                    attributes: {
                                        "class": "line"
                                    }
                                }), n.e.call({
                                    block: function() {
                                        n.b.call({
                                            block: function() {
                                                n.e.call({
                                                    block: function() {
                                                        e.push("Восстановить пароль");
                                                    },
                                                    attributes: {
                                                        "class": "text"
                                                    }
                                                }, "span");
                                            },
                                            attributes: {
                                                type: "submit",
                                                "class": "submit-button _small __submit"
                                            }
                                        }, "button");
                                    },
                                    attributes: {
                                        "class": "line"
                                    }
                                }), n.e.call({
                                    block: function() {
                                        n.e.call({
                                            block: function() {
                                                e.push("Вход");
                                            },
                                            attributes: {
                                                type: "button",
                                                "data-switch": "login-form",
                                                "class": "button-link"
                                            }
                                        }, "button"), e.push(" "), n.e.call({
                                            block: function() {
                                                e.push("/");
                                            },
                                            attributes: {
                                                "class": "separator"
                                            }
                                        }, "span"), e.push(" "), n.e.call({
                                            block: function() {
                                                e.push("Регистрация");
                                            },
                                            attributes: {
                                                "data-switch": "register-form",
                                                "class": "button-link"
                                            }
                                        }, "button");
                                    },
                                    attributes: {
                                        "class": "line __footer"
                                    }
                                }), n.e.call({
                                    block: function() {
                                        n.e.call({
                                            block: function() {
                                                e.push("Вход через социальные сети");
                                            },
                                            attributes: {
                                                "class": "social-logins-title"
                                            }
                                        }, "h5"), e.push(" "), n.b.call({
                                            block: function() {
                                                e.push("Facebook");
                                            },
                                            attributes: {
                                                "data-provider": "facebook",
                                                "class": "social-login _facebook __social-login"
                                            }
                                        }, "button"), e.push(" "), n.b.call({
                                            block: function() {
                                                e.push("Google+");
                                            },
                                            attributes: {
                                                "data-provider": "google",
                                                "class": "social-login _google __social-login"
                                            }
                                        }, "button"), e.push(" "), n.b.call({
                                            block: function() {
                                                e.push("Вконтакте");
                                            },
                                            attributes: {
                                                "data-provider": "vkontakte",
                                                "class": "social-login _vkontakte __social-login"
                                            }
                                        }, "button"), e.push(" "), n.b.call({
                                            block: function() {
                                                e.push("Github");
                                            },
                                            attributes: {
                                                "data-provider": "github",
                                                "class": "social-login _github __social-login"
                                            }
                                        }, "button"), e.push(" "), n.b.call({
                                            block: function() {
                                                e.push("Яндекс");
                                            },
                                            attributes: {
                                                "data-provider": "yandex",
                                                "class": "social-login _yandex __social-login"
                                            }
                                        }, "button");
                                    },
                                    attributes: {
                                        "class": "line __social-logins"
                                    }
                                });
                            },
                            attributes: {
                                action: "#",
                                "data-form": "forgot",
                                "class": "form"
                            }
                        }, "form");
                    },
                    attributes: {
                        "class": "login-form"
                    }
                });
            }.call(this, "bem" in i ? i.bem : "undefined" != typeof bem ? bem : void 0), e.join("");
        };
    },
    87: function(t, e, n) {
        "use strict";
        var r = n(89);
        t.exports = function(t) {
            function e(e, n, i, o, a, s) {
                var u = s || t.default_tag, c = a.length;
                switch (s || ("inline" === a[c - 1] ? u = "span" : "list" === a[c - 1] && (u = "li"), 
                i.href ? u = "a" : i.for ? u = "label" : i.src && (u = "img")), "list" === a[c - 1] && "li" !== u ? e.push("<li>") : "list" !== a[c - 1] && "pseudo-list" !== a[c - 1] && "li" === u ? (e.push("<ul>"), 
                a[a.length] = "pseudo-list") : "pseudo-list" === a[c - 1] && "li" !== u && (e.push("</ul>"), 
                a.pop()), a[a.length] = -1 !== [ "a", "abbr", "acronym", "b", "br", "code", "em", "font", "i", "img", "ins", "kbd", "map", "samp", "small", "span", "strong", "sub", "sup", "label", "p", "h1", "h2", "h3", "h4", "h5", "h6" ].indexOf(u) ? "inline" : -1 !== [ "ul", "ol" ].indexOf(u) ? "list" : "block", 
                u) {
                  case "img":
                    i.alt && !i.title && (i.title = ""), i.title && !i.alt && (i.alt = i.title), i.alt || (i.alt = "");
                    break;

                  case "input":
                    i.type || (i.type = "text");
                    break;

                  case "html":
                    e.push("<!DOCTYPE HTML>");
                    break;

                  case "a":
                    i.href || (i.href = "#");
                }
                e.push("<" + u + r.attrs(r.merge([ i ]), !0) + ">"), n && n(), -1 == [ "area", "base", "br", "col", "embed", "hr", "img", "input", "keygen", "link", "menuitem", "meta", "param", "source", "track", "wbr" ].indexOf(u) && e.push("</" + u + ">"), 
                "list" === a[c - 1] && "li" != u && e.push("</li>");
            }
            return t = t || {}, t.prefix = t.prefix || "", t.element = t.element || "__", t.modifier = t.modifier || "_", 
            t.default_tag = t.default_tag || "div", function(n, r, i, o, a) {
                var s = this.block, u = this.attributes || {};
                if (u.class) {
                    var c = u.class;
                    c instanceof Array && (c = c.join(" ")), c = c.split(" ");
                    var l;
                    try {
                        l = c[0].match(RegExp("^(((?!" + t.element + "|" + t.modifier + ").)+)"))[1];
                    } catch (f) {
                        throw Error("Incorrect bem class: " + c[0]);
                    }
                    a ? c[0] = r[r.length - 1] + t.element + c[0] : (r[r.length] = l, c[0] = c[0]);
                    var d = (a ? r[r.length - 1] + t.element : "") + l;
                    -1 === c.indexOf(d) && (c[c.length] = d);
                    for (var h = 0; h < c.length; h++) {
                        var p = c[h];
                        p.match(RegExp("^(?!" + t.element + ")" + t.modifier)) ? c[h] = d + p : p.match(RegExp("^" + t.element)) && (c[h] = r[r.length - 2] ? r[r.length - 2] + p : r[r.length - 1] + p), 
                        c[h].match(RegExp("^" + d + "($|(?=" + t.element + "|" + t.modifier + "))")) && (c[h] = t.prefix + c[h]);
                    }
                    u.class = c.sort().join(" ");
                }
                e(n, s, u, r, i, o), a || r.pop(), i.pop();
            };
        };
    },
    89: function(t, e, n) {
        "use strict";
        function r(t) {
            return null != t && "" !== t;
        }
        function i(t) {
            return (Array.isArray(t) ? t.map(i) : t && "object" == typeof t ? Object.keys(t).filter(function(e) {
                return t[e];
            }) : [ t ]).filter(r).join(" ");
        }
        e.merge = function o(t, e) {
            if (1 === arguments.length) {
                for (var n = t[0], i = 1; i < t.length; i++) n = o(n, t[i]);
                return n;
            }
            var a = t.class, s = e.class;
            (a || s) && (a = a || [], s = s || [], Array.isArray(a) || (a = [ a ]), Array.isArray(s) || (s = [ s ]), 
            t.class = a.concat(s).filter(r));
            for (var u in e) "class" != u && (t[u] = e[u]);
            return t;
        }, e.joinClasses = i, e.cls = function(t, n) {
            for (var r = [], o = 0; o < t.length; o++) r.push(n && n[o] ? e.escape(i([ t[o] ])) : i(t[o]));
            var a = i(r);
            return a.length ? ' class="' + a + '"' : "";
        }, e.style = function(t) {
            return t && "object" == typeof t ? Object.keys(t).map(function(e) {
                return e + ":" + t[e];
            }).join(";") : t;
        }, e.attr = function(t, n, r, i) {
            return "style" === t && (n = e.style(n)), "boolean" == typeof n || null == n ? n ? " " + (i ? t : t + '="' + t + '"') : "" : 0 == t.indexOf("data") && "string" != typeof n ? (-1 !== JSON.stringify(n).indexOf("&"), 
            n && "function" == typeof n.toISOString, " " + t + "='" + JSON.stringify(n).replace(/'/g, "&apos;") + "'") : r ? (n && "function" == typeof n.toISOString, 
            " " + t + '="' + e.escape(n) + '"') : (n && "function" == typeof n.toISOString, 
            " " + t + '="' + n + '"');
        }, e.attrs = function(t, n) {
            var r = [], o = Object.keys(t);
            if (o.length) for (var a = 0; a < o.length; ++a) {
                var s = o[a], u = t[s];
                "class" == s ? (u = i(u)) && r.push(" " + s + '="' + u + '"') : r.push(e.attr(s, u, !1, n));
            }
            return r.join("");
        }, e.escape = function(t) {
            var e = (t + "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
            return e === "" + t ? t : e;
        }, e.rethrow = function a(t, e, r, i) {
            if (!(t instanceof Error)) throw t;
            if (!("undefined" == typeof window && e || i)) throw t.message += " on line " + r, 
            t;
            try {
                i = i || n(91).readFileSync(e, "utf8");
            } catch (o) {
                a(t, null, r);
            }
            var s = 3, u = i.split("\n"), c = Math.max(r - s, 0), l = Math.min(u.length, r + s), s = u.slice(c, l).map(function(t, e) {
                var n = e + c + 1;
                return (n == r ? "  > " : "    ") + n + "| " + t;
            }).join("\n");
            throw t.path = e, t.message = (e || "Jade") + ":" + r + "\n" + s + "\n\n" + t.message, 
            t;
        };
    },
    91: function() {}
});
//# sourceMappingURL=6.a20337eb47c2fcdeeb80.js.map
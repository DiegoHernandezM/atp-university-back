/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**************************************!*\
  !*** ./resources/js/contact-form.js ***!
  \**************************************/
__webpack_require__.r(__webpack_exports__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
(function (root, factory) {
  "use strict";

  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object') {
    module.exports = factory();
  } else {
    root.ContactForm = factory();
  }
})(undefined, function () {
  "use strict";

  var _ContactForm = function ContactForm(form, options) {
    if (!this || !(this instanceof _ContactForm)) {
      return new _ContactForm(form, options);
    }
    if (!form || !options) {
      return;
    }
    this.form = form instanceof Node ? form : document.querySelector(form);
    this.endpoint = options.endpoint;
    this.send();
  };
  _ContactForm.prototype = {
    hasClass: function hasClass(el, name) {
      return new RegExp('(\\s|^)' + name + '(\\s|$)').test(el.className);
    },
    addClass: function addClass(el, name) {
      if (!this.hasClass(el, name)) {
        el.className += (el.className ? ' ' : '') + name;
      }
    },
    removeClass: function removeClass(el, name) {
      if (this.hasClass(el, name)) {
        el.className = el.className.replace(new RegExp('(\\s|^)' + name + '(\\s|$)'), ' ').replace(/^\s+|\s+$/g, '');
      }
    },
    each: function each(collection, iterator) {
      var i, len;
      for (i = 0, len = collection.length; i < len; i += 1) {
        iterator(collection[i], i, collection);
      }
    },
    template: function template(string, data) {
      var piece;
      for (piece in data) {
        if (Object.prototype.hasOwnProperty.call(data, piece)) {
          string = string.replace(new RegExp('{' + piece + '}', 'g'), data[piece]);
        }
      }
      return string;
    },
    empty: function empty(el) {
      while (el.firstChild) {
        el.removeChild(el.firstChild);
      }
    },
    removeElementsByClass: function removeElementsByClass(className) {
      var elements = document.getElementsByClassName(className);
      while (elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0]);
      }
    },
    post: function post(path, data, success, fail) {
      var xhttp = new XMLHttpRequest();
      xhttp.open('POST', path, true);
      xhttp.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
      xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
      xhttp.onreadystatechange = function () {
        if (this.readyState === 4) {
          if (this.status === 200) {
            var response = '';
            try {
              response = JSON.parse(this.responseText);
            } catch (err) {
              response = this.responseText;
            }
            success.call(this, response);
          } else {
            fail.call(this, this.responseText);
          }
        }
      };
      xhttp.send(data);
      xhttp = null;
    },
    param: function param(data) {
      var params = typeof data === 'string' ? data : Object.keys(data).map(function (k) {
        return encodeURIComponent(k) + '=' + encodeURIComponent(data[k]);
      }).join('&');
      return params;
    },
    send: function send() {
      this.form.addEventListener('submit', function (e) {
        e.preventDefault();
        var elements = document.querySelectorAll('.form-control'),
          formData;
        this.each(elements, function (el, i) {
          if (this.hasClass(el.parentNode, 'has-error')) {
            this.removeClass(el.parentNode, 'has-error');
            this.removeElementsByClass('help-block');
          }
        }.bind(this));
        formData = {
          'name': document.querySelector('input[name="form-name"]').value,
          'email': document.querySelector('input[name="form-email"]').value,
          'number': document.querySelector('input[name="form-number"]').value,
          'subject': document.querySelector('input[name="form-subject"]').value,
          'message': document.querySelector('textarea[name="form-message"]').value
        };
        this.post(this.endpoint, this.param(formData), this.feedback.bind(this), this.fail.bind(this));
      }.bind(this), false);
    },
    feedback: function feedback(data) {
      if (!data.success) {
        if (data.errors.name) {
          var name = document.querySelector('input[name="form-name"]').parentNode,
            error;
          this.addClass(name, 'has-error');
          error = this.template('<span class="help-block">{report}</span>', {
            report: data.errors.name
          });
          name.insertAdjacentHTML('beforeend', error);
        }
        if (data.errors.email) {
          var email = document.querySelector('input[name="form-email"]').parentNode,
            error;
          this.addClass(email, 'has-error');
          error = this.template('<span class="help-block">{report}</span>', {
            report: data.errors.email
          });
          email.insertAdjacentHTML('beforeend', error);
        }
        if (data.errors.subject) {
          var subject = document.querySelector('input[name="form-subject"]').parentNode,
            error;
          this.addClass(subject, 'has-error');
          error = this.template('<span class="help-block">{report}</span>', {
            report: data.errors.subject
          });
          subject.insertAdjacentHTML('beforeend', error);
        }
        if (data.errors.message) {
          var message = document.querySelector('textarea[name="form-message"]').parentNode,
            error;
          this.addClass(message, 'has-error');
          error = this.template('<span class="help-block">{report}</span>', {
            report: data.errors.message
          });
          message.insertAdjacentHTML('beforeend', error);
        }
      } else {
        var success = this.template('<div class="alert alert-success">{report}</div>', {
          report: data.message
        });
        this.empty(this.form);
        this.form.insertAdjacentHTML('beforeend', success);
      }
    },
    fail: function fail(data) {
      console.log(data);
    }
  };
  return _ContactForm;
});
/******/ })()
;
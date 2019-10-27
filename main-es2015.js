(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-area\">\n  <nav class=\"nav\">\n    <ul class=\"ul-class\">\n      <li>\n        <a href=\"#\">\n          <p>Home</p>\n        </a>\n      </li>\n      <li>\n        <a href=\"#\">\n          <p>Products</p>\n        </a>\n      </li>\n      <li>\n        <a href=\"#\">\n          <p>About</p>\n        </a>\n      </li>\n    </ul>\n  </nav>\n  <aside class=\"div1\"><p>LeftRow</p></aside>\n  <main class=\"div2 container\">\n    <h1 class=\"header-class\">\n      <img src=\"../assets/images/open-book.png\" alt=\"\" class=\"header-image\" />\n      My<span class=\"text-primary\">Book</span>List\n    </h1>\n    <form action=\"\" id=\"book-form\">\n      <div class=\"form-group\">\n        <label for=\"title\" class=\"title\">Title</label>\n        <input type=\"text\" name=\"\" id=\"title\" class=\"form-control\" />\n      </div>\n      <div class=\"form-group\">\n        <label for=\"author\" class=\"title\">Author</label>\n        <input type=\"text\" name=\"\" id=\"author\" class=\"form-control\" />\n      </div>\n      <div class=\"form-group\">\n        <label for=\"isbn\" class=\"title\">ISBN</label>\n        <input type=\"text\" name=\"\" id=\"title\" class=\"form-control\" />\n      </div>\n      <input type=\"submit\" value=\"Add Book\" class=\"primary-button\" />\n    </form>\n  </main>\n  <aside class=\"div3\"><p>RightRow</p></aside>\n  <footer id=\"footer\">\n    <div class=\"div-inner-footer\">\n      <div class=\"div1-footer\">\n        <ul class=\"ul-footer\">\n          <li class=\"li-footer\">list1</li>\n          <li class=\"li-footer\">list2</li>\n          <li class=\"li-footer\">list3</li>\n        </ul>\n      </div>\n      <div class=\"div2-footer\">\n        <ul class=\"ul-footer\">\n          <li class=\"li-footer\">list4</li>\n          <li class=\"li-footer\">list5</li>\n          <li class=\"li-footer\">list6</li>\n        </ul>\n      </div>\n      <div class=\"div3-footer\">\n        <ul class=\"ul-footer\">\n          <li class=\"li-footer\">list7</li>\n          <li class=\"li-footer\">list8</li>\n          <li class=\"li-footer\">list9</li>\n        </ul>\n      </div>\n    </div>\n  </footer>\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main-area {\n  display: grid;\n  grid-template-columns: 1fr 3fr 1fr;\n  grid-auto-rows: minmax(100px, auto);\n}\n\n.nav {\n  display: flex;\n  grid-column: 1/4;\n  align-items: center;\n  justify-content: flex-end;\n  background-color: black;\n  font-size: 2em;\n}\n\n.div1 {\n  background: #eee;\n  grid-column: 1;\n  margin-right: 0.5em;\n}\n\n.div2 {\n  background-color: aqua;\n  padding-bottom: 100vh;\n}\n\n.div3 {\n  background-color: #eee;\n  color: black;\n  margin-left: 0.5em;\n}\n\n#footer {\n  background-color: cadetblue;\n  grid-column: 1/4;\n}\n\n#footer .div-inner-footer {\n  display: grid;\n  grid-template-columns: 1fr 3fr 1fr;\n  padding-top: 1em;\n}\n\n#footer .div-inner-footer .div1-footer,\n#footer .div-inner-footer .div2-footer,\n#footer .div-inner-footer .div3-footer {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n#footer .div-inner-footer .div1-footer ul,\n#footer .div-inner-footer .div2-footer ul,\n#footer .div-inner-footer .div3-footer ul {\n  list-style: none;\n}\n\n#footer .div-inner-footer .div2-footer {\n  background-color: cadetblue;\n}\n\n.ul-class {\n  display: flex;\n  list-style: none;\n}\n\n.ul-class li {\n  margin-left: 1em;\n  padding: 1em;\n}\n\n.ul-class li a {\n  text-decoration: none;\n  color: orange;\n}\n\n.ul-class li a:hover {\n  color: greenyellow;\n}\n\n.container {\n  background-color: aliceblue;\n}\n\n.header-class {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.header-class .text-primary {\n  color: blue;\n}\n\n#book-form {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n#book-form .title {\n  margin-top: 1em;\n  display: flex;\n}\n\n#book-form #author,\n#book-form #title,\n#book-form #isbn {\n  width: 400px;\n}\n\n#book-form .button-div {\n  display: flex;\n}\n\n#book-form .primary-button {\n  background-color: #4b4be9;\n  border-radius: 10%;\n  border: none;\n  margin: 1em 0 1em 25em;\n  padding: 0.5em;\n  color: white;\n}\n\n@media (max-width: 700px) {\n  .nav {\n    font-size: 1em;\n  }\n\n  #book-form #author,\n#book-form #title,\n#book-form #isbn {\n    width: 200px;\n  }\n  #book-form .primary-button {\n    margin: 1em 0 1em 9em;\n  }\n\n  .main-area {\n    grid-auto-rows: minmax(50px, auto);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxUdXJrYXlUdW5jXFxEZXNrdG9wXFxhbmd1bGFyXFxqc1N0dWR5XFxCb29rTGlzdEFwcC9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQ0FBQTtBQ0NKOztBREdBO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQ0FKOztBRElBO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUNESjs7QURLQTtFQUNJLHNCQUFBO0VBQ0EscUJBQUE7QUNGSjs7QURPQTtFQUNJLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDSko7O0FET0E7RUFDSSwyQkFBQTtFQUNBLGdCQUFBO0FDSko7O0FETUk7RUFDSSxhQUFBO0VBQ0Esa0NBQUE7RUFDQSxnQkFBQTtBQ0pSOztBRE1ROzs7RUFHSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0paOztBRE1ZOzs7RUFDSSxnQkFBQTtBQ0ZoQjs7QURNUTtFQUVJLDJCQUFBO0FDTFo7O0FEYUE7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7QUNWSjs7QURhSTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtBQ1hSOztBRGFRO0VBQ0kscUJBQUE7RUFDQSxhQUFBO0FDWFo7O0FEYVk7RUFDSSxrQkFBQTtBQ1hoQjs7QURrQkE7RUFDSSwyQkFBQTtBQ2ZKOztBRGtCQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDZko7O0FEbUJJO0VBQ0ksV0FBQTtBQ2pCUjs7QURxQkE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDbEJKOztBRHFCSTtFQUNJLGVBQUE7RUFDQSxhQUFBO0FDbkJSOztBRHVCSTs7O0VBR0ksWUFBQTtBQ3JCUjs7QUR5Qkk7RUFDSSxhQUFBO0FDdkJSOztBRDRCSTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQzFCUjs7QUQ4QkE7RUFDSTtJQUNJLGNBQUE7RUMzQk47O0VEZ0NNOzs7SUFHSSxZQUFBO0VDN0JWO0VEZ0NNO0lBQ0kscUJBQUE7RUM5QlY7O0VEa0NFO0lBQ0ksa0NBQUE7RUMvQk47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWFyZWEge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmciAxZnI7XHJcbiAgICBncmlkLWF1dG8tcm93czogbWlubWF4KDEwMHB4LCBhdXRvKTtcclxuXHJcbn1cclxuXHJcbi5uYXYge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGdyaWQtY29sdW1uOiAxLzQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1zaXplOiAyZW07XHJcbn1cclxuXHJcblxyXG4uZGl2MSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWVlO1xyXG4gICAgZ3JpZC1jb2x1bW46IDE7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC41ZW07XHJcblxyXG59XHJcblxyXG4uZGl2MiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwMHZoO1xyXG5cclxuXHJcbn1cclxuXHJcbi5kaXYzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogLjVlbTtcclxufVxyXG5cclxuI2Zvb3RlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjYWRldGJsdWU7XHJcbiAgICBncmlkLWNvbHVtbjogMS80O1xyXG5cclxuICAgIC5kaXYtaW5uZXItZm9vdGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmciAxZnI7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDFlbTtcclxuXHJcbiAgICAgICAgLmRpdjEtZm9vdGVyLFxyXG4gICAgICAgIC5kaXYyLWZvb3RlcixcclxuICAgICAgICAuZGl2My1mb290ZXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgIHVsIHtcclxuICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5kaXYyLWZvb3RlciB7XHJcblxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjYWRldGJsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG59XHJcblxyXG4udWwtY2xhc3Mge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcblxyXG5cclxuICAgIGxpIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMWVtO1xyXG4gICAgICAgIHBhZGRpbmc6IDFlbTtcclxuXHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgY29sb3I6IG9yYW5nZTtcclxuXHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IGdyZWVueWVsbG93O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XHJcbn1cclxuXHJcbi5oZWFkZXItY2xhc3Mge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAuaGVhZGVyLWltYWdlIHt9XHJcblxyXG4gICAgLnRleHQtcHJpbWFyeSB7XHJcbiAgICAgICAgY29sb3I6IGJsdWU7XHJcbiAgICB9XHJcbn1cclxuXHJcbiNib29rLWZvcm0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG5cclxuICAgIC50aXRsZSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMWVtO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgfVxyXG5cclxuICAgICNhdXRob3IsXHJcbiAgICAjdGl0bGUsXHJcbiAgICAjaXNibiB7XHJcbiAgICAgICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAuYnV0dG9uLWRpdiB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIC5wcmltYXJ5LWJ1dHRvbiB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDc1LCA3NSwgMjMzKTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMCU7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIG1hcmdpbjogMWVtIDAgMWVtIDI1ZW07XHJcbiAgICAgICAgcGFkZGluZzogLjVlbTtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xyXG4gICAgLm5hdiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICB9XHJcblxyXG4gICAgI2Jvb2stZm9ybSB7XHJcblxyXG4gICAgICAgICNhdXRob3IsXHJcbiAgICAgICAgI3RpdGxlLFxyXG4gICAgICAgICNpc2JuIHtcclxuICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnByaW1hcnktYnV0dG9uIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAxZW0gMCAxZW0gOWVtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAubWFpbi1hcmVhIHtcclxuICAgICAgICBncmlkLWF1dG8tcm93czogbWlubWF4KDUwcHgsIGF1dG8pO1xyXG4gICAgfVxyXG59IiwiLm1haW4tYXJlYSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmciAxZnI7XG4gIGdyaWQtYXV0by1yb3dzOiBtaW5tYXgoMTAwcHgsIGF1dG8pO1xufVxuXG4ubmF2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ3JpZC1jb2x1bW46IDEvNDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMmVtO1xufVxuXG4uZGl2MSB7XG4gIGJhY2tncm91bmQ6ICNlZWU7XG4gIGdyaWQtY29sdW1uOiAxO1xuICBtYXJnaW4tcmlnaHQ6IDAuNWVtO1xufVxuXG4uZGl2MiB7XG4gIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XG4gIHBhZGRpbmctYm90dG9tOiAxMDB2aDtcbn1cblxuLmRpdjMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICBjb2xvcjogYmxhY2s7XG4gIG1hcmdpbi1sZWZ0OiAwLjVlbTtcbn1cblxuI2Zvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGNhZGV0Ymx1ZTtcbiAgZ3JpZC1jb2x1bW46IDEvNDtcbn1cbiNmb290ZXIgLmRpdi1pbm5lci1mb290ZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnIgMWZyO1xuICBwYWRkaW5nLXRvcDogMWVtO1xufVxuI2Zvb3RlciAuZGl2LWlubmVyLWZvb3RlciAuZGl2MS1mb290ZXIsXG4jZm9vdGVyIC5kaXYtaW5uZXItZm9vdGVyIC5kaXYyLWZvb3RlcixcbiNmb290ZXIgLmRpdi1pbm5lci1mb290ZXIgLmRpdjMtZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4jZm9vdGVyIC5kaXYtaW5uZXItZm9vdGVyIC5kaXYxLWZvb3RlciB1bCxcbiNmb290ZXIgLmRpdi1pbm5lci1mb290ZXIgLmRpdjItZm9vdGVyIHVsLFxuI2Zvb3RlciAuZGl2LWlubmVyLWZvb3RlciAuZGl2My1mb290ZXIgdWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuI2Zvb3RlciAuZGl2LWlubmVyLWZvb3RlciAuZGl2Mi1mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBjYWRldGJsdWU7XG59XG5cbi51bC1jbGFzcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG4udWwtY2xhc3MgbGkge1xuICBtYXJnaW4tbGVmdDogMWVtO1xuICBwYWRkaW5nOiAxZW07XG59XG4udWwtY2xhc3MgbGkgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IG9yYW5nZTtcbn1cbi51bC1jbGFzcyBsaSBhOmhvdmVyIHtcbiAgY29sb3I6IGdyZWVueWVsbG93O1xufVxuXG4uY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xufVxuXG4uaGVhZGVyLWNsYXNzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uaGVhZGVyLWNsYXNzIC50ZXh0LXByaW1hcnkge1xuICBjb2xvcjogYmx1ZTtcbn1cblxuI2Jvb2stZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuI2Jvb2stZm9ybSAudGl0bGUge1xuICBtYXJnaW4tdG9wOiAxZW07XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4jYm9vay1mb3JtICNhdXRob3IsXG4jYm9vay1mb3JtICN0aXRsZSxcbiNib29rLWZvcm0gI2lzYm4ge1xuICB3aWR0aDogNDAwcHg7XG59XG4jYm9vay1mb3JtIC5idXR0b24tZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbiNib29rLWZvcm0gLnByaW1hcnktYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRiNGJlOTtcbiAgYm9yZGVyLXJhZGl1czogMTAlO1xuICBib3JkZXI6IG5vbmU7XG4gIG1hcmdpbjogMWVtIDAgMWVtIDI1ZW07XG4gIHBhZGRpbmc6IDAuNWVtO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xuICAubmF2IHtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgfVxuXG4gICNib29rLWZvcm0gI2F1dGhvcixcbiNib29rLWZvcm0gI3RpdGxlLFxuI2Jvb2stZm9ybSAjaXNibiB7XG4gICAgd2lkdGg6IDIwMHB4O1xuICB9XG4gICNib29rLWZvcm0gLnByaW1hcnktYnV0dG9uIHtcbiAgICBtYXJnaW46IDFlbSAwIDFlbSA5ZW07XG4gIH1cblxuICAubWFpbi1hcmVhIHtcbiAgICBncmlkLWF1dG8tcm93czogbWlubWF4KDUwcHgsIGF1dG8pO1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = "BookListApp";
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-root",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);

let doc = document.getElementsByClassName("div1");


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");





let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\TurkayTunc\Desktop\angular\jsStudy\BookListApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
/*!
{
  "author": "Graham Fairweather",
  "copywrite": "Copyright (c) 2017",
  "date": "2019-07-27T22:24:29.382Z",
  "describe": "",
  "description": "A cross-environment fix for missing methods.",
  "file": "cross-console-x.js",
  "hash": "42d6bc18a3a1b1427173",
  "license": "MIT",
  "version": "4.0.21"
}
*/
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["crossConsoleX"] = factory();
	else
		root["crossConsoleX"] = factory();
})((function () {
  'use strict';

  if (typeof self !== 'undefined') {
    return self;
  }

  if (typeof window !== 'undefined') {
    return window;
  }

  if (typeof global !== 'undefined') {
    return global;
  }

  return Function('return this')();
}()), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 99);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * This method attempts to invoke the function, returning either the result or
 * the caught error object. Any additional arguments are provided to the
 * function when it's invoked.
 *
 * @param {Function} [fn] - The function to attempt.
 * @param {...*} [args] - The arguments to invoke the function with.
 * @returns {object} Returns an object of the result.
 */
var attempt = function attempt(fn) {
  try {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return {
      threw: false,

      /* eslint-disable-next-line babel/no-invalid-this */
      value: fn.apply(this, args)
    };
  } catch (e) {
    return {
      threw: true,
      value: e
    };
  }
};

/* harmony default export */ __webpack_exports__["a"] = (attempt);



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var require_object_coercible_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

var castObject = {}.constructor;
/**
 * The abstract operation ToObject converts argument to a value of
 * type Object.
 *
 * @param {*} value - The `value` to convert.
 * @throws {TypeError} If `value` is a `null` or `undefined`.
 * @returns {!object} The `value` converted to an object.
 */

var toObject = function toObject(value) {
  return castObject(Object(require_object_coercible_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(value));
};

/* harmony default export */ __webpack_exports__["a"] = (toObject);



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/attempt-x/dist/attempt-x.esm.js
var attempt_x_esm = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/to-boolean-x/dist/to-boolean-x.esm.js
/**
 * The abstract operation ToBoolean converts argument to a value of type Boolean.
 *
 * @param {*} [value] - The value to be converted.
 * @returns {boolean} 'true' if value is truthy; otherwise 'false'.
 */
var toBoolean = function toBoolean(value) {
  return !!value;
};

/* harmony default export */ var to_boolean_x_esm = (toBoolean);


// EXTERNAL MODULE: ./node_modules/to-string-tag-x/dist/to-string-tag-x.esm.js
var to_string_tag_x_esm = __webpack_require__(20);

// EXTERNAL MODULE: ./node_modules/has-to-string-tag-x/dist/has-to-string-tag-x.esm.js
var has_to_string_tag_x_esm = __webpack_require__(32);

// EXTERNAL MODULE: ./node_modules/is-primitive/index.js
var is_primitive = __webpack_require__(8);
var is_primitive_default = /*#__PURE__*/__webpack_require__.n(is_primitive);

// EXTERNAL MODULE: ./node_modules/normalize-space-x/dist/normalize-space-x.esm.js
var normalize_space_x_esm = __webpack_require__(60);

// EXTERNAL MODULE: ./node_modules/replace-comments-x/dist/replace-comments-x.esm.js
var replace_comments_x_esm = __webpack_require__(62);

// CONCATENATED MODULE: ./node_modules/is-function-x/dist/is-function-x.esm.js
var _this = undefined;

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }








var FunctionCtr = attempt_x_esm["a" /* default */].constructor;
var castBoolean = true.constructor;
var SPACE = ' ';
var fToString = attempt_x_esm["a" /* default */].toString;
var funcTag = '[object Function]';
var genTag = '[object GeneratorFunction]';
var asyncTag = '[object AsyncFunction]';
var ctrRx = /^class /;
var test = ctrRx.test;
var hasNativeClass = Object(attempt_x_esm["a" /* default */])(function () {
  _newArrowCheck(this, _this);

  /* eslint-disable-next-line babel/new-cap */
  return FunctionCtr('"use strict"; return class My {};')();
}.bind(undefined)).threw === false;

var testClassstring = function _testClassstring(value) {
  return test.call(ctrRx, Object(normalize_space_x_esm["a" /* default */])(Object(replace_comments_x_esm["a" /* default */])(fToString.call(value), SPACE)));
};

var isES6ClassFn = function isES6ClassFunc(value) {
  var result = Object(attempt_x_esm["a" /* default */])(testClassstring, value);
  return result.threw === false && result.value;
};
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @private
 * @param {*} value - The value to check.
 * @param {boolean} allowClass - Whether to filter ES6 classes.
 * @returns {boolean} Returns `true` if `value` is correctly classified,
 * else `false`.
 */


var tryFuncToString = function funcToString(value, allowClass) {
  if (hasNativeClass && allowClass === false && isES6ClassFn(value)) {
    return false;
  }

  return attempt_x_esm["a" /* default */].call(value, fToString).threw === false;
};
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @param {*} value - The value to check.
 * @param {boolean} [allowClass=false] - Whether to filter ES6 classes.
 * @returns {boolean} Returns `true` if `value` is correctly classified,
 * else `false`.
 */


var is_function_x_esm_isFunction = function isFunction(value, allowClass) {
  if (is_primitive_default()(value)) {
    return false;
  }

  if (has_to_string_tag_x_esm["a" /* default */]) {
    return tryFuncToString(value, to_boolean_x_esm(allowClass));
  }

  if (hasNativeClass && castBoolean(allowClass) === false && isES6ClassFn(value)) {
    return false;
  }

  var strTag = Object(to_string_tag_x_esm["a" /* default */])(value);
  return strTag === funcTag || strTag === genTag || strTag === asyncTag;
};

/* harmony default export */ var is_function_x_esm = __webpack_exports__["a"] = (is_function_x_esm_isFunction);



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var to_object_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var to_property_key_x__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33);


var hop = {}.hasOwnProperty;
/**
 * The `hasOwnProperty` method returns a boolean indicating whether
 * the `object` has the specified `property`. Does not attempt to fix known
 * issues in older browsers, but does ES6ify the method.
 *
 * @param {!object} object - The object to test.
 * @throws {TypeError} If object is null or undefined.
 * @param {string|number|Symbol} property - The name or Symbol of the property to test.
 * @returns {boolean} `true` if the property is set on `object`, else `false`.
 */

var hasOwnProperty = function hasOwnProperty(object, property) {
  return hop.call(Object(to_object_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(object), Object(to_property_key_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(property));
};

/* harmony default export */ __webpack_exports__["a"] = (hasOwnProperty);



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var to_integer_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);

var MAX_SAFE_INTEGER = 9007199254740991;
/**
 * Converts `value` to an integer suitable for use as the length of an
 * array-like object. (ES2019).
 *
 * @param {*} value - The value to convert.
 * @returns {number} Returns the converted integer.
 */

var toLength = function toLength(value) {
  var len = Object(to_integer_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(value); // includes converting -0 to +0

  if (len <= 0) {
    return 0;
  }

  if (len > MAX_SAFE_INTEGER) {
    return MAX_SAFE_INTEGER;
  }

  return len;
};

/* harmony default export */ __webpack_exports__["a"] = (toLength);



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var is_nil_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);

/**
 * The abstract operation RequireObjectCoercible throws an error if argument
 * is a value that cannot be converted to an Object using ToObject.
 *
 * @param {*} [value] - The `value` to check.
 * @throws {TypeError} If `value` is a `null` or `undefined`.
 * @returns {string} The `value`.
 */

var requireObjectCoercible = function requireObjectCoercible(value) {
  if (Object(is_nil_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(value)) {
    throw new TypeError("Cannot call method on ".concat(value));
  }

  return value;
};

/* harmony default export */ __webpack_exports__["a"] = (requireObjectCoercible);



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var is_function_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var to_string_symbols_supported_x__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var is_primitive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var is_primitive__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(is_primitive__WEBPACK_IMPORTED_MODULE_2__);



/**
 * Tests `callback` to see if it is a function, throws a `TypeError` if it is
 * not. Otherwise returns the `callback`.
 *
 * @param {*} callback - The argument to be tested.
 * @throws {TypeError} Throws if `callback` is not a function.
 * @returns {*} Returns `callback` if it is function.
 */

var assertIsFunction = function assertIsFunction(callback) {
  if (Object(is_function_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(callback) === false) {
    var msg = is_primitive__WEBPACK_IMPORTED_MODULE_2___default()(callback) ? Object(to_string_symbols_supported_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(callback) : '#<Object>';
    throw new TypeError("".concat(msg, " is not a function"));
  }

  return callback;
};

/* harmony default export */ __webpack_exports__["a"] = (assertIsFunction);



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var is_function_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var is_primitive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var is_primitive__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(is_primitive__WEBPACK_IMPORTED_MODULE_1__);


/**
 * Checks if `value` is object-like. A value is object-like if it's not a
 * primitive and not a function.
 *
 * @param {*} [value] - The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 */

var isObjectLike = function isObjectLike(value) {
  return is_primitive__WEBPACK_IMPORTED_MODULE_1___default()(value) === false && Object(is_function_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(value, true) === false;
};

/* harmony default export */ __webpack_exports__["a"] = (isObjectLike);



/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * is-primitive <https://github.com/jonschlinkert/is-primitive>
 *
 * Copyright (c) 2014-present, Jon Schlinkert.
 * Released under the MIT License.
 */



module.exports = function isPrimitive(val) {
  if (typeof val === 'object') {
    return val === null;
  }
  return typeof val !== 'function';
};


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var is_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* harmony import */ var is_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(is_symbol__WEBPACK_IMPORTED_MODULE_0__);

var ERROR_MESSAGE = 'Cannot convert a Symbol value to a string';
var castString = ERROR_MESSAGE.constructor;
/**
 * The abstract operation ToString converts argument to a value of type String.
 *
 * @param {*} [value] - The value to convert to a string.
 * @throws {TypeError} If `value` is a Symbol.
 * @returns {string} The converted value.
 */

var ToString = function ToString(value) {
  if (is_symbol__WEBPACK_IMPORTED_MODULE_0___default()(value)) {
    throw new TypeError(ERROR_MESSAGE);
  }

  return castString(value);
};

/* harmony default export */ __webpack_exports__["a"] = (ToString);



/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/array-for-each-x/dist/array-for-each-x.esm.js
var array_for_each_x_esm = __webpack_require__(64);

// EXTERNAL MODULE: ./node_modules/object-define-property-x/dist/object-define-property-x.esm.js
var object_define_property_x_esm = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/to-object-x/dist/to-object-x.esm.js
var to_object_x_esm = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/assert-is-object-x/dist/assert-is-object-x.esm.js
var assert_is_object_x_esm = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/object-keys-x/dist/object-keys-x.esm.js
var object_keys_x_esm = __webpack_require__(18);

// EXTERNAL MODULE: ./node_modules/get-own-enumerable-property-symbols-x/dist/get-own-enumerable-property-symbols-x.esm.js
var get_own_enumerable_property_symbols_x_esm = __webpack_require__(76);

// CONCATENATED MODULE: ./node_modules/get-own-enumerable-keys-x/dist/get-own-enumerable-keys-x.esm.js



var concat = [].concat;
/**
 * This method returns only the enumerable own keys of an object.
 *
 * @param {object} target - The target.
 * @throws {TypeError} - If target is null or undefined.
 * @returns {Array} The enumerable own keys.
 */

var get_own_enumerable_keys_x_esm_getOwnNonEnumerableKeys = function getOwnNonEnumerableKeys(target) {
  var object = Object(to_object_x_esm["a" /* default */])(target);
  return concat.call(Object(object_keys_x_esm["a" /* default */])(object), Object(get_own_enumerable_property_symbols_x_esm["a" /* default */])(object));
};

/* harmony default export */ var get_own_enumerable_keys_x_esm = (get_own_enumerable_keys_x_esm_getOwnNonEnumerableKeys);


// CONCATENATED MODULE: ./node_modules/object-define-properties-x/dist/object-define-properties-x.esm.js
/* unused harmony export defineProperty */





var defineProperty = object_define_property_x_esm["a" /* default */];
/**
 * This method defines new or modifies existing properties directly on an
 * object, returning the object.
 *
 * @param {object} object - The object on which to define or modify properties.
 * @param {object} properties - An object whose own enumerable properties
 *  constitute descriptors for the
 * properties to be defined or modified.
 * @returns {object} The object that was passed to the function.
 */

var object_define_properties_x_esm_defineProperties = function defineProperties(object, properties) {
  Object(assert_is_object_x_esm["a" /* default */])(object);
  var props = Object(to_object_x_esm["a" /* default */])(properties);
  Object(array_for_each_x_esm["a" /* default */])(get_own_enumerable_keys_x_esm(props), function defineProp(property) {
    if (property !== '__proto__') {
      Object(object_define_property_x_esm["a" /* default */])(object, property, props[property]);
    }
  });
  return object;
};

/* harmony default export */ var object_define_properties_x_esm = __webpack_exports__["a"] = (object_define_properties_x_esm_defineProperties);



/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/has-boxed-string-x/dist/has-boxed-string-x.esm.js
var string = 'a';
var boxedString = {}.constructor(string);
/**
 * Check failure of by-index access of string characters (IE < 9)
 * and failure of `0 in boxedString` (Rhino).
 *
 * `true` if no failure; otherwise `false`.
 *
 * @type boolean
 */

var hasBoxed = boxedString[0] === string && 0 in boxedString;
/* harmony default export */ var has_boxed_string_x_esm = (hasBoxed);


// EXTERNAL MODULE: ./node_modules/is-string/index.js
var is_string = __webpack_require__(12);
var is_string_default = /*#__PURE__*/__webpack_require__.n(is_string);

// CONCATENATED MODULE: ./node_modules/split-if-boxed-bug-x/dist/split-if-boxed-bug-x.esm.js


var EMPTY_STRING = '';
var strSplit = EMPTY_STRING.split;
var isStringFn = has_boxed_string_x_esm === false && typeof strSplit === 'function' && is_string_default.a;
/**
 * This method tests if a value is a string with the boxed bug; splits to an
 * array for iteration; otherwise returns the original value.
 *
 * @param {*} [value] - The value to be tested.
 * @returns {*} An array or characters if value was a string with the boxed bug;
 *  otherwise the value.
 */

var splitIfBoxedBug = function splitIfBoxedBug(value) {
  return isStringFn && isStringFn(value) ? strSplit.call(value, EMPTY_STRING) : value;
};

/* harmony default export */ var split_if_boxed_bug_x_esm = __webpack_exports__["a"] = (splitIfBoxedBug);



/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var strValue = String.prototype.valueOf;
var tryStringObject = function tryStringObject(value) {
	try {
		strValue.call(value);
		return true;
	} catch (e) {
		return false;
	}
};
var toStr = Object.prototype.toString;
var strClass = '[object String]';
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

module.exports = function isString(value) {
	if (typeof value === 'string') { return true; }
	if (typeof value !== 'object') { return false; }
	return hasToStringTag ? tryStringObject(value) : toStr.call(value) === strClass;
};


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var attempt_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var is_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);
/* harmony import */ var is_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(is_symbol__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined;

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }



var hasSymbolSupport = Object(attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function () {
  _newArrowCheck(this, _this);

  /* eslint-disable-next-line compat/compat */
  return typeof Symbol === 'function' && is_symbol__WEBPACK_IMPORTED_MODULE_1___default()(Symbol(''));
}.bind(undefined));
/**
 * Indicates if `Symbol`exists and creates the correct type.
 * `true`, if it exists and creates the correct type, otherwise `false`.
 *
 * @type boolean
 */

/* harmony default export */ __webpack_exports__["a"] = (hasSymbolSupport.threw === false && hasSymbolSupport.value === true);



/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var to_object_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var is_arguments__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74);
/* harmony import */ var is_arguments__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(is_arguments__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var is_array_x__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22);
/* harmony import */ var array_like_slice_x__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(53);
/* harmony import */ var attempt_x__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(0);
/* harmony import */ var is_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(12);
/* harmony import */ var is_string__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(is_string__WEBPACK_IMPORTED_MODULE_5__);






var nativeSlice = [].slice;
var resultArray = nativeSlice ? attempt_x__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].call([1, 2, 3], nativeSlice, 1, 2) : null;
var failArray = resultArray ? resultArray.threw || Object(is_array_x__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(resultArray.value) === false || resultArray.value.length !== 1 || resultArray.value[0] !== 2 : false;
var resultString = nativeSlice ? attempt_x__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].call('abc', nativeSlice, 1, 2) : null;
var failString = resultString ? resultString.threw || Object(is_array_x__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(resultString.value) === false || resultString.value.length !== 1 || resultString.value[0] !== 'b' : false;
var doc = typeof document !== 'undefined' && document;
var resultDocElement = nativeSlice && doc ? attempt_x__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].call(doc.documentElement, nativeSlice).threw : null;
var failDOM = resultDocElement ? resultDocElement.threw : false;
/**
 * The slice() method returns a shallow copy of a portion of an array into a new
 * array object selected from begin to end (end not included). The original
 * array will not be modified.
 *
 * @param {Array|object} array - The array to slice.
 * @param {number} [start] - Zero-based index at which to begin extraction.
 *  A negative index can be used, indicating an offset from the end of the
 *  sequence. Running slice(-2) extracts the last two elements in the sequence.
 *  If begin is undefined, slice begins from index 0.
 * @param {number} [end] - Zero-based index before which to end extraction.
 *  Slice extracts up to but not including end. For example, slice(1,4)
 *  extracts the second element through the fourth element (elements indexed
 *  1, 2, and 3).
 *  A negative index can be used, indicating an offset from the end of the
 *  sequence. Running slice(2,-1) extracts the third element through the second-to-last
 *  element in the sequence.
 *  If end is omitted, slice extracts through the end of the
 *  sequence (arr.length).
 *  If end is greater than the length of the sequence, slice extracts through
 *  the end of the sequence (arr.length).
 * @returns {Array} A new array containing the extracted elements.
 */

var slice = function slice(array, start, end) {
  var object = Object(to_object_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(array);

  if (failArray || failDOM && Object(is_array_x__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(object) === false || failString && is_string__WEBPACK_IMPORTED_MODULE_5___default()(object) || is_arguments__WEBPACK_IMPORTED_MODULE_1___default()(object)) {
    return Object(array_like_slice_x__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(object, start, end);
  }
  /* eslint-disable-next-line prefer-rest-params */


  return nativeSlice.apply(object, Object(array_like_slice_x__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(arguments, 1));
};

/* harmony default export */ __webpack_exports__["a"] = (slice);



/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var attempt_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var to_object_x__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var to_property_key_x__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(33);
/* harmony import */ var has_own_property_x__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var is_function_x__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);
/* harmony import */ var assert_is_object_x__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19);






var ObjectCtr = {}.constructor;
var castBoolean = true.constructor;
var nd = ObjectCtr.defineProperty;
var nativeDefProp = typeof nd === 'function' && nd;
var definePropertyFallback;

var toPropertyDescriptor = function _toPropertyDescriptor(desc) {
  var object = Object(to_object_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(desc);
  var descriptor = {};

  if (Object(has_own_property_x__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(object, 'enumerable')) {
    descriptor.enumerable = castBoolean(object.enumerable);
  }

  if (Object(has_own_property_x__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(object, 'configurable')) {
    descriptor.configurable = castBoolean(object.configurable);
  }

  if (Object(has_own_property_x__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(object, 'value')) {
    descriptor.value = object.value;
  }

  if (Object(has_own_property_x__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(object, 'writable')) {
    descriptor.writable = castBoolean(object.writable);
  }

  if (Object(has_own_property_x__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(object, 'get')) {
    var getter = object.get;

    if (typeof getter !== 'undefined' && Object(is_function_x__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(getter) === false) {
      throw new TypeError('getter must be a function');
    }

    descriptor.get = getter;
  }

  if (Object(has_own_property_x__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(object, 'set')) {
    var setter = object.set;

    if (typeof setter !== 'undefined' && Object(is_function_x__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(setter) === false) {
      throw new TypeError('setter must be a function');
    }

    descriptor.set = setter;
  }

  if ((Object(has_own_property_x__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(descriptor, 'get') || Object(has_own_property_x__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(descriptor, 'set')) && (Object(has_own_property_x__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(descriptor, 'value') || Object(has_own_property_x__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(descriptor, 'writable'))) {
    throw new TypeError('Invalid property descriptor. Cannot both specify accessors and a value or writable attribute');
  }

  return descriptor;
}; // ES5 15.2.3.6
// http://es5.github.com/#x15.2.3.6
// Patch for WebKit and IE8 standard mode
// Designed by hax <hax.github.com>
// related issue: https://github.com/es-shims/es5-shim/issues#issue/5
// IE8 Reference:
//     http://msdn.microsoft.com/en-us/library/dd282900.aspx
//     http://msdn.microsoft.com/en-us/library/dd229916.aspx
// WebKit Bugs:
//     https://bugs.webkit.org/show_bug.cgi?id=36423

/**
 * This method defines a new property directly on an object, or modifies an
 * existing property on an object, and returns the object.
 *
 * @param {object} object - The object on which to define the property.
 * @param {string} property - The name of the property to be defined or modified.
 * @param {object} descriptor - The descriptor for the property being defined or modified.
 * @returns {object} The object that was passed to the function.
 * });.
 */


var $defineProperty; // check whether defineProperty works if it's given. Otherwise, shim partially.

if (nativeDefProp) {
  var testWorksWith = function _testWorksWith(object) {
    var testResult = Object(attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(nativeDefProp, object, 'sentinel', {});
    return testResult.threw === false && testResult.value === object && 'sentinel' in object;
  };

  var doc = typeof document !== 'undefined' && document;

  if (testWorksWith({}) && (castBoolean(doc) === false || testWorksWith(doc.createElement('div')))) {
    $defineProperty = function defineProperty(object, property, descriptor) {
      return nativeDefProp(Object(assert_is_object_x__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(object), Object(to_property_key_x__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(property), toPropertyDescriptor(descriptor));
    };
  } else {
    definePropertyFallback = nativeDefProp;
  }
}

if (castBoolean(nativeDefProp) === false || definePropertyFallback) {
  var prototypeOfObject = ObjectCtr.prototype; // If JS engine supports accessors creating shortcuts.

  var supportsAccessors = Object(has_own_property_x__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(prototypeOfObject, '__defineGetter__');
  /* eslint-disable-next-line no-underscore-dangle */

  var defineGetter = supportsAccessors && prototypeOfObject.__defineGetter_;
  /* eslint-disable-next-line no-underscore-dangle,no-restricted-properties */

  var defineSetter = supportsAccessors && prototypeOfObject.__defineSetter__;
  /* eslint-disable-next-line no-underscore-dangle */

  var lookupGetter = supportsAccessors && prototypeOfObject.__lookupGetter__;
  /* eslint-disable-next-line no-underscore-dangle */

  var lookupSetter = supportsAccessors && prototypeOfObject.__lookupSetter__;

  $defineProperty = function defineProperty(object, property, descriptor) {
    Object(assert_is_object_x__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(object);
    var propKey = Object(to_property_key_x__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(property);
    var propDesc = toPropertyDescriptor(descriptor); // make a valiant attempt to use the real defineProperty for IE8's DOM elements.

    if (definePropertyFallback) {
      var result = attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].call(ObjectCtr, definePropertyFallback, object, propKey, propDesc);

      if (result.threw === false) {
        return result.value;
      } // try the shim if the real one doesn't work

    } // If it's a data property.


    if (Object(has_own_property_x__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(propDesc, 'value')) {
      // fail silently if 'writable', 'enumerable', or 'configurable' are requested but not supported
      if (supportsAccessors && (lookupGetter.call(object, propKey) || lookupSetter.call(object, propKey))) {
        // As accessors are supported only on engines implementing
        // `__proto__` we can safely override `__proto__` while defining
        // a property to make sure that we don't hit an inherited accessor.

        /* eslint-disable-next-line no-proto */
        var prototype = object.__proto__;
        /* eslint-disable-next-line no-proto */

        object.__proto__ = prototypeOfObject; // Deleting a property anyway since getter / setter may be defined on object itself.

        delete object[propKey];
        object[propKey] = propDesc.value; // Setting original `__proto__` back now.

        /* eslint-disable-next-line no-proto */

        object.__proto__ = prototype;
      } else {
        object[propKey] = propDesc.value;
      }
    } else {
      if (supportsAccessors === false && (propDesc.get || propDesc.set)) {
        throw new TypeError('getters & setters can not be defined on this javascript engine');
      } // If we got that far then getters and setters can be defined !!


      if (propDesc.get) {
        defineGetter.call(object, propKey, propDesc.get);
      }

      if (propDesc.set) {
        defineSetter.call(object, propKey, propDesc.set);
      }
    }

    return object;
  };
}

var defProp = $defineProperty;
/* harmony default export */ __webpack_exports__["a"] = (defProp);



/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toStr = Object.prototype.toString;
var hasSymbols = __webpack_require__(100)();

if (hasSymbols) {
	var symToStr = Symbol.prototype.toString;
	var symStringRegex = /^Symbol\(.*\)$/;
	var isSymbolObject = function isRealSymbolObject(value) {
		if (typeof value.valueOf() !== 'symbol') {
			return false;
		}
		return symStringRegex.test(symToStr.call(value));
	};

	module.exports = function isSymbol(value) {
		if (typeof value === 'symbol') {
			return true;
		}
		if (toStr.call(value) !== '[object Symbol]') {
			return false;
		}
		try {
			return isSymbolObject(value);
		} catch (e) {
			return false;
		}
	};
} else {

	module.exports = function isSymbol(value) {
		// this environment does not support Symbols.
		return  false && false;
	};
}


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Checks if `value` is `null` or `undefined`.
 *
 * @param {*} [value] - The value to check.
 * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
 */
var isNil = function isNil(value) {
  /* eslint-disable-next-line lodash/prefer-is-nil */
  return value === null || typeof value === 'undefined';
};

/* harmony default export */ __webpack_exports__["a"] = (isNil);



/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var to_object_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var attempt_x__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var is_array_x__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22);
/* harmony import */ var is_arguments__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(74);
/* harmony import */ var is_arguments__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(is_arguments__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var array_like_slice_x__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(53);
/* harmony import */ var split_if_boxed_bug_x__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11);
/* harmony import */ var is_string__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12);
/* harmony import */ var is_string__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(is_string__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var is_regexp_x__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(28);
/* harmony import */ var has_own_property_x__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3);
/* harmony import */ var object_keys__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(83);
/* harmony import */ var object_keys__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(object_keys__WEBPACK_IMPORTED_MODULE_9__);










var ObjectCtr = {}.constructor;
var nativeKeys = typeof ObjectCtr.keys === 'function' && ObjectCtr.keys;
var isWorking;
var throwsWithNull;
var worksWithPrim;
var worksWithRegex;
var worksWithArgs;
var worksWithStr;

if (nativeKeys) {
  var isCorrectRes = function _isCorrectRes(r, length) {
    return r.threw === false && Object(is_array_x__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(r.value) && r.value.length === length;
  };

  var either = function _either(r, a, b) {
    var x = r.value[0];
    var y = r.value[1];
    return x === a && y === b || x === b && y === a;
  };

  var testObj = {
    a: 1,
    b: 2
  };
  var res = Object(attempt_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(nativeKeys, testObj);
  isWorking = isCorrectRes(res, 2) && either(res, 'a', 'b');

  if (isWorking) {
    testObj = Object('a');
    testObj.y = 1;
    res = Object(attempt_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(nativeKeys, testObj);
    isWorking = isCorrectRes(res, 2) && either(res, '0', 'y');
  }

  if (isWorking) {
    throwsWithNull = Object(attempt_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(nativeKeys, null).threw;
    worksWithPrim = isCorrectRes(Object(attempt_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(nativeKeys, 42), 0);
    worksWithRegex = Object(attempt_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(nativeKeys, /a/g).threw === false;
    res = Object(attempt_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(nativeKeys, function getArgs() {
      /* eslint-disable-next-line prefer-rest-params */
      return arguments;
    }(1, 2));
    worksWithArgs = isCorrectRes(res, 2) && either(res, '0', '1');
    res = Object(attempt_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(nativeKeys, Object('ab'));
    worksWithStr = isCorrectRes(res, 2) && either(res, '0', '1');
  }
}
/**
 * This method returns an array of a given object's own enumerable properties,
 * in the same order as that provided by a for...in loop (the difference being
 * that a for-in loop enumerates properties in the prototype chain as well).
 *
 * @param {*} obj - The object of which the enumerable own properties are to be returned.
 * @returns {Array} An array of strings that represent all the enumerable properties of the given object.
 */


var objectKeys;

if (isWorking) {
  if (throwsWithNull && worksWithPrim && worksWithRegex && worksWithArgs && worksWithStr) {
    objectKeys = nativeKeys;
  } else {
    objectKeys = function keys(object) {
      var obj = to_object_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"] ? Object(to_object_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(object) : object;

      if (worksWithArgs !== true && is_arguments__WEBPACK_IMPORTED_MODULE_3___default()(obj)) {
        obj = Object(array_like_slice_x__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(obj);
      } else if (worksWithStr !== true && is_string__WEBPACK_IMPORTED_MODULE_6___default()(obj)) {
        obj = Object(split_if_boxed_bug_x__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(obj);
      } else if (worksWithRegex !== true && Object(is_regexp_x__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(obj)) {
        var regexKeys = [];
        /* eslint-disable-next-line no-restricted-syntax */

        for (var key in obj) {
          // noinspection JSUnfilteredForInLoop
          if (Object(has_own_property_x__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(obj, key)) {
            regexKeys[regexKeys.length] = key;
          }
        }

        return regexKeys;
      }

      return nativeKeys(obj);
    };
  }
} else {
  objectKeys = function keys(object) {
    return object_keys__WEBPACK_IMPORTED_MODULE_9___default()(Object(to_object_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(object));
  };
}

var ok = objectKeys;
/* harmony default export */ __webpack_exports__["a"] = (ok);



/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var to_string_symbols_supported_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);
/* harmony import */ var is_primitive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var is_primitive__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(is_primitive__WEBPACK_IMPORTED_MODULE_1__);


/**
 * Tests `value` to see if it is an object, throws a `TypeError` if it is
 * not. Otherwise returns the `value`.
 *
 * @param {*} value - The argument to be tested.
 * @throws {TypeError} Throws if `value` is not an object.
 * @returns {*} Returns `value` if it is an object.
 */

var assertIsObject = function assertIsObject(value) {
  if (is_primitive__WEBPACK_IMPORTED_MODULE_1___default()(value)) {
    throw new TypeError("".concat(Object(to_string_symbols_supported_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(value), " is not an object"));
  }

  return value;
};

/* harmony default export */ __webpack_exports__["a"] = (assertIsObject);



/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var nativeObjectToString = {}.toString;
/**
 * The `toStringTag` method returns "[object type]", where type is the
 * object type.
 *
 * @param {*} [value] - The object of which to get the object type string.
 * @returns {string} The object type string.
 */

var toStringTag = function toStringTag(value) {
  if (value === null) {
    return '[object Null]';
  }

  if (typeof value === 'undefined') {
    return '[object Undefined]';
  }

  return nativeObjectToString.call(value);
};

/* harmony default export */ __webpack_exports__["a"] = (toStringTag);



/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * This method determines whether the passed value is NaN and its type is
 * `Number`. It is a more robust version of the original, global isNaN().
 *
 * @param {*} [value] - The value to be tested for NaN.
 * @returns {boolean} `true` if the given value is NaN and its type is Number;
 *  otherwise, `false`.
 */
var isNaN = function isNaN(value) {
  /* eslint-disable-next-line no-self-compare */
  return value !== value;
};

/* harmony default export */ __webpack_exports__["a"] = (isNaN);



/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var attempt_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var to_string_tag_x__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20);
var _this = undefined;

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }



var nativeIsArray = [].isArray;
var isArrayNative = typeof nativeIsArray === 'function' && nativeIsArray;
var testRes = isArrayNative && Object(attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function () {
  _newArrowCheck(this, _this);

  return isArrayNative([]) === true && isArrayNative({
    length: 0
  }) === false;
}.bind(undefined));

var isArrayFn = function iife() {
  if (testRes && testRes.threw === false && testRes.value === true) {
    return isArrayNative;
  }
  /**
   * The isArray() function determines whether the passed value is an Array.
   *
   * @function isArray
   * @param {*} [value] - The object to be checked..
   * @returns {boolean} `true` if the object is an Array; otherwise, `false`.
   */


  return function isArray(value) {
    return Object(to_string_tag_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(value) === '[object Array]';
  };
}();

/* harmony default export */ __webpack_exports__["a"] = (isArrayFn);



/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var attempt_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var split_if_boxed_bug_x__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var to_length_x__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var to_object_x__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var assert_is_function_x__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var require_object_coercible_x__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5);






var nf = [].filter;
var nativeFilter = typeof nf === 'function' && nf;

var test1 = function test1() {
  var spy = 0;
  var res = attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].call([1, 2], nativeFilter, function spyAdd1(item) {
    spy += item;
    return false;
  });
  return res.threw === false && res.value && res.value.length === 0 && spy === 3;
};

var test2 = function test2() {
  var spy = '';
  var res = attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].call({}.constructor('abc'), nativeFilter, function spyAdd2(item, index) {
    spy += item;
    return index === 1;
  });
  return res.threw === false && res.value && res.value.length === 1 && res.value[0] === 'b' && spy === 'abc';
};

var test3 = function test3() {
  var spy = 0;
  var res = attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].call(function getArgs() {
    /* eslint-disable-next-line prefer-rest-params */
    return arguments;
  }(1, 2, 3), nativeFilter, function spyAdd3(item, index) {
    spy += item;
    return index === 2;
  });
  return res.threw === false && res.value && res.value.length === 1 && res.value[0] === 3 && spy === 6;
};

var test4 = function test4() {
  var spy = 0;
  var res = attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].call({
    0: 1,
    1: 2,
    3: 3,
    4: 4,
    length: 4
  }, nativeFilter, function spyAdd4(item) {
    spy += item;
    return false;
  });
  return res.threw === false && res.value && res.value.length === 0 && spy === 6;
};

var test5 = function test5() {
  var doc = typeof document !== 'undefined' && document;

  if (doc) {
    var spy = null;
    var fragment = doc.createDocumentFragment();
    var div = doc.createElement('div');
    fragment.appendChild(div);
    var res = attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].call(fragment.childNodes, nativeFilter, function spyAssign(item) {
      spy = item;
      return item;
    });
    return res.threw === false && res.value && res.value.length === 1 && res.value[0] === div && spy === div;
  }

  return true;
};

var test6 = function test6() {
  var isStrict = function returnIsStrict() {
    /* eslint-disable-next-line babel/no-invalid-this */
    return true.constructor(this) === false;
  }();

  if (isStrict) {
    var spy = null;
    var res = attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].call([1], nativeFilter, function testThis() {
      /* eslint-disable-next-line babel/no-invalid-this */
      spy = typeof this === 'string';
    }, 'x');
    return res.threw === false && res.value && res.value.length === 0 && spy === true;
  }

  return true;
};

var test7 = function test7() {
  var spy = {};
  var fn = 'return nativeFilter.call("foo", function (_, __, context) {' + 'if (castBoolean(context) === false || typeof context !== "object") {' + 'spy.value = true;}});';
  /* eslint-disable-next-line no-new-func */

  var res = Object(attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Function('nativeFilter', 'spy', 'castBoolean', fn), nativeFilter, spy, true.constructor);
  return res.threw === false && res.value && res.value.length === 0 && spy.value !== true;
};

var isWorking = true.constructor(nativeFilter) && test1() && test2() && test3() && test4() && test5() && test6() && test7();

var patchedFilter = function patchedFilter() {
  return function filter(array, callBack
  /* , thisArg */
  ) {
    Object(require_object_coercible_x__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(array);
    var args = [Object(assert_is_function_x__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(callBack)];

    if (arguments.length > 2) {
      /* eslint-disable-next-line prefer-rest-params,prefer-destructuring */
      args[1] = arguments[2];
    }

    return nativeFilter.apply(array, args);
  };
};

var implementation = function implementation() {
  return function filter(array, callBack
  /* , thisArg */
  ) {
    var object = Object(to_object_x__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(array); // If no callback function or if callback is not a callable function

    Object(assert_is_function_x__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(callBack);
    var iterable = Object(split_if_boxed_bug_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(object);
    var length = Object(to_length_x__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(iterable.length);
    /* eslint-disable-next-line prefer-rest-params,no-void */

    var thisArg = arguments.length > 2 ? arguments[2] : void 0;
    var noThis = typeof thisArg === 'undefined';
    var result = [];

    for (var i = 0; i < length; i += 1) {
      if (i in iterable) {
        var item = iterable[i];

        if (noThis ? callBack(item, i, object) : callBack.call(thisArg, item, i, object)) {
          result[result.length] = item;
        }
      }
    }

    return result;
  };
};
/**
 * This method creates a new array with all elements that pass the test
 * implemented by the provided function.
 *
 * @param {Array} array - The array to iterate over.
 * @param {Function} callBack - Function is a predicate, to test each element.
 * @param {*} [thisArg] - Value to use as this when executing callback.
 * @throws {TypeError} If array is null or undefined.
 * @throws {TypeError} If callBack is not a function.
 * @returns {Array} A new array with the elements that pass the test.
 */


var $filter = isWorking ? patchedFilter() : implementation();
/* harmony default export */ __webpack_exports__["a"] = ($filter);



/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var attempt_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var to_object_x__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var to_length_x__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var same_value_zero_x__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(68);
/* harmony import */ var find_index_x__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(55);
/* harmony import */ var split_if_boxed_bug_x__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11);
/* harmony import */ var index_of_x__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(41);
/* harmony import */ var calculate_from_index_x__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(69);
function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }









var nativeIncludes = typeof Array.prototype.includes === 'function' && Array.prototype.includes;
var isWorking;

if (nativeIncludes) {
  var arr;
  var res = attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].call(null, nativeIncludes, 'a');
  isWorking = res.threw;

  if (isWorking) {
    arr = {
      1: 'a',
      2: NaN,
      3: -0,
      length: 5
    };
    /* eslint-disable-next-line no-void */

    res = attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].call(arr, nativeIncludes, void 0, -1);
    isWorking = res.threw === false && res.value === true;
  }

  if (isWorking) {
    res = attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].call(arr, nativeIncludes, NaN);
    isWorking = res.threw === false && res.value === true;
  }

  if (isWorking) {
    res = attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].call(arr, nativeIncludes, 0);
    isWorking = res.threw === false && res.value === true;
  }

  if (isWorking) {
    var testArr = [];
    testArr.length = 2;
    testArr[1] = null;
    /* eslint-disable-next-line no-void */

    res = attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].call(testArr, nativeIncludes, void 0);
    isWorking = res.threw === false && res.value === true;
  }

  if (isWorking) {
    res = attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].call('abc', nativeIncludes, 'c');
    isWorking = res.threw === false && res.value === true;
  }

  if (isWorking) {
    res = attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].call(function getArgs() {
      /* eslint-disable-next-line prefer-rest-params */
      return arguments;
    }('a', 'b', 'c'), nativeIncludes, 'c');
    isWorking = res.threw === false && res.value === true;
  }
}
/**
 * This method determines whether an array includes a certain element,
 * returning true or false as appropriate.
 *
 * @param {Array} array - The array to search.
 * @throws {TypeError} If `array` is `null` or `undefined`.
 * @param {*} searchElement - Element to locate in the `array`.
 * @param {number} [fromIndex] - The position in this array at which to begin
 *  searching for searchElement. A negative value searches from the index of
 *  array.length + fromIndex by asc. Defaults to 0.
 * @returns {boolean} `true` if searched element is included; otherwise `false`.
 */


var $includes;

if (isWorking) {
  $includes = function includes(array, searchElement) {
    var args = [searchElement];

    if (arguments.length > 2) {
      /* eslint-disable-next-line prefer-rest-params,prefer-destructuring */
      args[1] = arguments[2];
    }

    return nativeIncludes.apply(array, args);
  };
} else {
  /*
   * This method returns an index in the array, if an element in the array
   * satisfies the provided testing function. Otherwise -1 is returned.
   *
   * @private
   * @param {Array} object - The array to search.
   * @param {*} searchElement - Element to locate in the array.
   * @param {number} fromIndex - The index to start the search at.
   * @returns {number} Returns index of found element, otherwise -1.
   */
  var findIdxFrom = function findIndexFrom(object, searchElement, fromIndex) {
    var fIdx = fromIndex;
    var length = Object(to_length_x__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(object.length);

    while (fIdx < length) {
      if (Object(same_value_zero_x__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(object[fIdx], searchElement)) {
        return fIdx;
      }

      fIdx += 1;
    }

    return -1;
  };

  $includes = function includes(array, searchElement) {
    var _this = this;

    var object = Object(to_object_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(array);
    var iterable = Object(split_if_boxed_bug_x__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(object);
    var length = Object(to_length_x__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(iterable.length);

    if (length < 1) {
      return -1;
    }

    if (typeof searchElement === 'undefined') {
      /* eslint-disable-next-line prefer-rest-params */
      var fromIndex = Object(calculate_from_index_x__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(iterable, arguments[2]);

      if (fromIndex >= length) {
        return -1;
      }

      if (fromIndex < 0) {
        fromIndex = 0;
      }

      if (fromIndex > 0) {
        return findIdxFrom(iterable, searchElement, fromIndex) > -1;
      }

      return Object(find_index_x__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(iterable, function (element) {
        _newArrowCheck(this, _this);

        return Object(same_value_zero_x__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(searchElement, element);
      }.bind(this)) > -1;
    }
    /* eslint-disable-next-line prefer-rest-params */


    return Object(index_of_x__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(iterable, searchElement, arguments[2], 'samevaluezero') > -1;
  };
}

var inc = $includes;
/* harmony default export */ __webpack_exports__["a"] = (inc);



/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/to-number-x/dist/to-number-x.esm.js
var to_number_x_esm = __webpack_require__(39);

// EXTERNAL MODULE: ./node_modules/is-nan-x/dist/is-nan-x.esm.js
var is_nan_x_esm = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/is-finite-x/dist/is-finite-x.esm.js + 1 modules
var is_finite_x_esm = __webpack_require__(35);

// CONCATENATED MODULE: ./node_modules/math-sign-x/dist/math-sign-x.esm.js


/**
 * This method returns the sign of a number, indicating whether the number is positive,
 * negative or zero. (ES2019).
 *
 * @param {*} x - A number.
 * @returns {number} A number representing the sign of the given argument. If the argument
 * is a positive number, negative number, positive zero or negative zero, the function will
 * return 1, -1, 0 or -0 respectively. Otherwise, NaN is returned.
 */

var math_sign_x_esm_sign = function sign(x) {
  var n = Object(to_number_x_esm["a" /* default */])(x);

  if (n === 0 || Object(is_nan_x_esm["a" /* default */])(n)) {
    return n;
  }

  return n > 0 ? 1 : -1;
};

/* harmony default export */ var math_sign_x_esm = (math_sign_x_esm_sign);


// CONCATENATED MODULE: ./node_modules/to-integer-x/dist/to-integer-x.esm.js




var abs = Math.abs,
    floor = Math.floor;
/**
 * Converts `value` to an integer. (ES2019).
 *
 * @param {*} value - The value to convert.
 * @returns {number} Returns the converted integer.
 */

var to_integer_x_esm_toInteger = function toInteger(value) {
  var number = Object(to_number_x_esm["a" /* default */])(value);

  if (Object(is_nan_x_esm["a" /* default */])(number)) {
    return 0;
  }

  if (number === 0 || Object(is_finite_x_esm["a" /* default */])(number) === false) {
    return number;
  }

  return math_sign_x_esm(number) * floor(abs(number));
};

/* harmony default export */ var to_integer_x_esm = __webpack_exports__["a"] = (to_integer_x_esm_toInteger);



/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var attempt_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var split_if_boxed_bug_x__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var to_length_x__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var to_object_x__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var assert_is_function_x__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
var _this = undefined;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }






var natRed = [].reduce;
var castObject = {}.constructor;
var nativeReduce = typeof natRed === 'function' && natRed; // ES5 15.4.4.21
// http://es5.github.com/#x15.4.4.21
// https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/reduce

var isWorking;

if (nativeReduce) {
  isWorking = attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].call([], nativeReduce, function (acc) {
    _newArrowCheck(this, _this);

    return acc;
  }.bind(undefined)).threw;
  var res;

  if (isWorking) {
    res = attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].call(castObject('abc'), nativeReduce, function (acc, c) {
      _newArrowCheck(this, _this);

      return acc + c;
    }.bind(undefined), 'x');
    isWorking = res.threw === false && res.value === 'xabc';
  }

  if (isWorking) {
    res = attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].call(function getArgs() {
      /* eslint-disable-next-line prefer-rest-params */
      return arguments;
    }(1, 2, 3), nativeReduce, function (acc, arg) {
      _newArrowCheck(this, _this);

      return acc + arg;
    }.bind(undefined), 1);
    isWorking = res.threw === false && res.value === 7;
  }

  if (isWorking) {
    res = attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].call({
      0: 1,
      1: 2,
      3: 3,
      4: 4,
      length: 4
    }, nativeReduce, function (acc, arg) {
      _newArrowCheck(this, _this);

      return acc + arg;
    }.bind(undefined), 2);
    isWorking = res.threw === false && res.value === 8;
  }

  if (isWorking) {
    var doc = typeof document !== 'undefined' && document;

    if (doc) {
      var fragment = doc.createDocumentFragment();
      var div = doc.createElement('div');
      fragment.appendChild(div);
      res = attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].call(fragment.childNodes, nativeReduce, function (acc, node) {
        _newArrowCheck(this, _this);

        acc[acc.length] = node;
        return acc;
      }.bind(undefined), []);
      isWorking = res.threw === false && res.value.length === 1 && res.value[0] === div;
    }
  }

  if (isWorking) {
    res = attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].call('ab', nativeReduce, function (_, __, ___, list) {
      _newArrowCheck(this, _this);

      return list;
    }.bind(undefined));
    isWorking = res.threw === false && _typeof(res.value) === 'object';
  }
}
/**
 * This method applies a function against an accumulator and each element in the
 * array (from left to right) to reduce it to a single value.
 *
 * @param {Array} array - The array to iterate over.
 * @param {Function} callBack - Function to execute for each element.
 * @param {*} [initialValue] - Value to use as the first argument to the first
 *  call of the callback. If no initial value is supplied, the first element in
 *  the array will be used. Calling reduce on an empty array without an initial
 *  value is an error.
 * @throws {TypeError} If array is null or undefined.
 * @throws {TypeError} If callBack is not a function.
 * @throws {TypeError} If called on an empty array without an initial value.
 * @returns {*} The value that results from the reduction.
 */


var $reduce;

if (nativeReduce && isWorking) {
  $reduce = function reduce(array, callBack
  /* , initialValue */
  ) {
    var args = [callBack];

    if (arguments.length > 2) {
      /* eslint-disable-next-line prefer-rest-params,prefer-destructuring */
      args[1] = arguments[2];
    }

    return nativeReduce.apply(array, args);
  };
} else {
  $reduce = function reduce(array, callBack
  /* , initialValue */
  ) {
    var object = Object(to_object_x__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(array); // If no callback function or if callback is not a callable function

    Object(assert_is_function_x__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(callBack);
    var iterable = Object(split_if_boxed_bug_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(object);
    var length = Object(to_length_x__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(iterable.length);
    var argsLength = arguments.length; // no value to return if no initial value and an empty array

    if (length === 0 && argsLength < 3) {
      throw new TypeError('reduce of empty array with no initial value');
    }

    var i = 0;
    var result;

    if (argsLength > 2) {
      /* eslint-disable-next-line prefer-rest-params,prefer-destructuring */
      result = arguments[2];
    } else {
      do {
        if (i in iterable) {
          result = iterable[i];
          i += 1;
          break;
        } // if array contains no values, no initial value to return


        i += 1;

        if (i >= length) {
          throw new TypeError('reduce of empty array with no initial value');
        }
      } while (true);
      /* eslint-disable-line no-constant-condition */

    }

    while (i < length) {
      if (i in iterable) {
        result = callBack(result, iterable[i], i, object);
      }

      i += 1;
    }

    return result;
  };
}

var red = $reduce;
/* harmony default export */ __webpack_exports__["a"] = (red);



/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var has_symbol_support_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
/* harmony import */ var is_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);
/* harmony import */ var is_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(is_symbol__WEBPACK_IMPORTED_MODULE_1__);


/* eslint-disable-next-line compat/compat */

var pToString = has_symbol_support_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"] && Symbol.prototype.toString;
var isSymbolFn = typeof pToString === 'function' && is_symbol__WEBPACK_IMPORTED_MODULE_1___default.a;
/** @type {Function} */

var castString = ''.constructor;
/**
 * The abstract operation ToString converts argument to a value of type String,
 * however the specification states that if the argument is a Symbol then a
 * 'TypeError' is thrown. This version also allows Symbols be converted to
 * a string. Other uncoercible exotics will still throw though.
 *
 * @param {*} [value] - The value to convert to a string.
 * @returns {string} The converted value.
 */

var toStringSymbolsSupported = function toStringSymbolsSupported(value) {
  return isSymbolFn && isSymbolFn(value) ? pToString.call(value) : castString(value);
};

/* harmony default export */ __webpack_exports__["a"] = (toStringSymbolsSupported);



/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var is_object_like_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var has_to_string_tag_x__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32);
/* harmony import */ var has_own_property_x__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var object_get_own_property_descriptor_x__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29);
/* harmony import */ var object_define_property_x__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15);
/* harmony import */ var to_string_tag_x__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20);






var regexExec = /none/.exec;
var regexClass = '[object RegExp]';

var tryRegexExecCall = function tryRegexExec(value, descriptor) {
  try {
    value.lastIndex = 0;
    regexExec.call(value);
    return true;
  } catch (e) {
    return false;
  } finally {
    Object(object_define_property_x__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(value, 'lastIndex', descriptor);
  }
};
/**
 * This method tests if a value is a regex.
 *
 * @param {*} value - The value to test.
 * @returns {boolean} `true` if value is a regex; otherwise `false`.
 */


var isRegex = function isRegex(value) {
  if (Object(is_object_like_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(value) === false) {
    return false;
  }

  if (has_to_string_tag_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"] === false) {
    return Object(to_string_tag_x__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(value) === regexClass;
  }

  var descriptor = Object(object_get_own_property_descriptor_x__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(value, 'lastIndex');
  var hasLastIndexDataProperty = descriptor && Object(has_own_property_x__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(descriptor, 'value');

  if (hasLastIndexDataProperty !== true) {
    return false;
  }

  return tryRegexExecCall(value, descriptor);
};

/* harmony default export */ __webpack_exports__["a"] = (isRegex);



/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var to_object_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var to_property_key_x__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33);
/* harmony import */ var attempt_x__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var has_symbol_support_x__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13);
/* harmony import */ var has_own_property_x__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3);
/* harmony import */ var is_primitive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8);
/* harmony import */ var is_primitive__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(is_primitive__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var is_string__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12);
/* harmony import */ var is_string__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(is_string__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var is_index_x__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(75);
/* harmony import */ var property_is_enumerable_x__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(44);









/** @type {ObjectConstructor} */

var castObject = {}.constructor;
/** @type {BooleanConstructor} */

var castBoolean = true.constructor;
var nativeGOPD = typeof castObject.getOwnPropertyDescriptor === 'function' && castObject.getOwnPropertyDescriptor;
var getOPDFallback1;
var getOPDFallback2; // ES5 15.2.3.3
// http://es5.github.com/#x15.2.3.3

var doesGOPDWork = function doesGOPDWork(object, prop) {
  object[Object(to_property_key_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(prop)] = 0;
  var testResult = Object(attempt_x__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(nativeGOPD, object, prop);
  return testResult.threw === false && testResult.value.value === 0;
}; // check whether getOwnPropertyDescriptor works if it's given. Otherwise, shim partially.

/**
 * This method returns a property descriptor for an own property (that is,
 * one directly present on an object and not in the object's prototype chain)
 * of a given object.
 *
 * @param {*} object - The object in which to look for the property.
 * @param {*} property - The name of the property whose description is to be retrieved.
 * @returns {object} A property descriptor of the given property if it exists on the object, undefined otherwise.
 */


var $getOwnPropertyDescriptor;

if (nativeGOPD) {
  var doc = typeof document !== 'undefined' && document;
  var getOPDWorksOnDom = doc ? doesGOPDWork(doc.createElement('div'), 'sentinel') : true;

  if (getOPDWorksOnDom) {
    var res = Object(attempt_x__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(nativeGOPD, castObject('abc'), 1);
    var worksWithStr = res.threw === false && res.value && res.value.value === 'b';

    if (worksWithStr) {
      var getOPDWorksOnObject = doesGOPDWork({}, 'sentinel');

      if (getOPDWorksOnObject) {
        var worksWithPrim = Object(attempt_x__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(nativeGOPD, 42, 'name').threw === false;
        /* eslint-disable-next-line compat/compat */

        var worksWithObjSym = has_symbol_support_x__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"] && doesGOPDWork({}, castObject(Symbol('')));

        if (worksWithObjSym) {
          if (worksWithPrim) {
            $getOwnPropertyDescriptor = nativeGOPD;
          } else {
            $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(object, property) {
              return nativeGOPD(Object(to_object_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(object), property);
            };
          }
        } else if (worksWithPrim) {
          $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(object, property) {
            return nativeGOPD(object, Object(to_property_key_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(property));
          };
        } else {
          $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(object, property) {
            return nativeGOPD(Object(to_object_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(object), Object(to_property_key_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(property));
          };
        }
      } else {
        getOPDFallback1 = nativeGOPD;
      }
    } else {
      getOPDFallback2 = nativeGOPD;
    }
  }
}

if (castBoolean($getOwnPropertyDescriptor) === false || getOPDFallback1 || getOPDFallback2) {
  var prototypeOfObject = castObject.prototype; // If JS engine supports accessors creating shortcuts.

  var lookupGetter;
  var lookupSetter;
  var supportsAccessors = Object(has_own_property_x__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(prototypeOfObject, '__defineGetter__');

  if (supportsAccessors) {
    /* eslint-disable-next-line no-underscore-dangle */
    var lg = prototypeOfObject.__lookupGetter__;
    /* eslint-disable-next-line no-underscore-dangle */

    var ls = prototypeOfObject.__lookupSetter__;

    lookupGetter = function $lookupGetter(object, property) {
      return lg.call(object, property);
    };

    lookupSetter = function $lookupSetter(object, property) {
      return ls.call(object, property);
    };
  }

  $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(object, property) {
    var obj = Object(to_object_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(object);
    var propKey = Object(to_property_key_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(property);
    var result; // make a valiant attempt to use the real getOwnPropertyDescriptor for I8's DOM elements.

    if (getOPDFallback1) {
      result = attempt_x__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].call(castObject, getOPDFallback1, obj, propKey);

      if (result.threw === false) {
        return result.value;
      } // try the shim if the real one doesn't work

    }

    var isStringIndex = is_string__WEBPACK_IMPORTED_MODULE_6___default()(obj) && Object(is_index_x__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(propKey, obj.length);

    if (getOPDFallback2 && isStringIndex === false) {
      result = attempt_x__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].call(castObject, getOPDFallback2, obj, propKey);

      if (result.threw === false) {
        return result.value;
      } // try the shim if the real one doesn't work

    }
    /* eslint-disable-next-line no-void */


    var descriptor = void 0; // If object does not owns property return undefined immediately.

    if (isStringIndex === false && Object(has_own_property_x__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(obj, propKey) === false) {
      return descriptor;
    } // If object has a property then it's for sure `configurable`, and
    // probably `enumerable`. Detect enumerability though.


    descriptor = {
      configurable: is_primitive__WEBPACK_IMPORTED_MODULE_5___default()(object) === false && isStringIndex === false,
      enumerable: Object(property_is_enumerable_x__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(obj, propKey)
    }; // If JS engine supports accessor properties then property may be a
    // getter or setter.

    if (supportsAccessors) {
      // Unfortunately `__lookupGetter__` will return a getter even
      // if object has own non getter property along with a same named
      // inherited getter. To avoid misbehavior we temporary remove
      // `__proto__` so that `__lookupGetter__` will return getter only
      // if it's owned by an object.

      /* eslint-disable-next-line no-proto */
      var prototype = obj.__proto__;
      var notPrototypeOfObject = obj !== prototypeOfObject; // avoid recursion problem, breaking in Opera Mini when
      // Object.getOwnPropertyDescriptor(Object.prototype, 'toString')
      // or any other Object.prototype accessor

      if (notPrototypeOfObject) {
        /* eslint-disable-next-line no-proto */
        obj.__proto__ = prototypeOfObject;
      }

      var getter = lookupGetter(obj, propKey);
      var setter = lookupSetter(obj, propKey);

      if (notPrototypeOfObject) {
        // Once we have getter and setter we can put values back.

        /* eslint-disable-next-line no-proto */
        obj.__proto__ = prototype;
      }

      if (getter || setter) {
        if (getter) {
          descriptor.get = getter;
        }

        if (setter) {
          descriptor.set = setter;
        } // If it was accessor property we're done and return here
        // in order to avoid adding `value` to the descriptor.


        return descriptor;
      }
    } // If we got this far we know that object has an own property that is
    // not an accessor so we set it as a value and return descriptor.


    if (isStringIndex) {
      descriptor.value = obj.charAt(propKey);
      descriptor.writable = false;
    } else {
      descriptor.value = obj[propKey];
      descriptor.writable = true;
    }

    return descriptor;
  };
}

var gOPS = $getOwnPropertyDescriptor;
/* harmony default export */ __webpack_exports__["a"] = (gOPS);



/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var is_function_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var to_object_x__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);


/**
 * This method returns the prototype (i.e. The value of the internal [[Prototype]] property)
 * of the specified object.
 *
 * @function getPrototypeOf
 * @param {*} obj - The object whose prototype is to be returned.
 * @returns {object} The prototype of the given object. If there are no inherited properties, null is returned.
 */

var gpo;
gpo = {}.getPrototypeOf;

if (gpo) {
  try {
    gpo = gpo(Object) === {}.prototype && gpo;
  } catch (ignore) {
    gpo = null;
  }
}

if (gpo) {
  try {
    gpo(1);
  } catch (ignore) {
    /** @type {Function} */
    var $getPrototypeOf = gpo;

    gpo = function getPrototypeOf(obj) {
      return $getPrototypeOf(Object(to_object_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(obj));
    };
  }
} else {
  gpo = function getPrototypeOf(obj) {
    var object = Object(to_object_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(obj);
    /* eslint-disable-next-line no-proto */

    var proto = object.__proto__;

    if (proto || proto === null) {
      return proto;
    }

    if (Object(is_function_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(object.constructor)) {
      return object.constructor.prototype;
    }

    if (object instanceof Object) {
      return Object.prototype;
    }

    return null;
  };
}

var getPO = gpo;
/* harmony default export */ __webpack_exports__["a"] = (getPO);



/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/has-own-property-x/dist/has-own-property-x.esm.js
var has_own_property_x_esm = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/is-function-x/dist/is-function-x.esm.js + 1 modules
var is_function_x_esm = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/object-define-property-x/dist/object-define-property-x.esm.js
var object_define_property_x_esm = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/object-define-properties-x/dist/object-define-properties-x.esm.js + 1 modules
var object_define_properties_x_esm = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/is-string/index.js
var is_string = __webpack_require__(12);
var is_string_default = /*#__PURE__*/__webpack_require__.n(is_string);

// EXTERNAL MODULE: ./node_modules/is-array-like-x/dist/is-array-like-x.esm.js
var is_array_like_x_esm = __webpack_require__(57);

// EXTERNAL MODULE: ./node_modules/is-primitive/index.js
var is_primitive = __webpack_require__(8);
var is_primitive_default = /*#__PURE__*/__webpack_require__.n(is_primitive);

// CONCATENATED MODULE: ./node_modules/is-surrogate-pair-x/dist/is-surrogate-pair-x.esm.js

var _ref = '',
    charCodeAt = _ref.charCodeAt;
/**
 * Tests if the two character arguments combined are a valid UTF-16
 * surrogate pair.
 *
 * @param {*} char1 - The character combination, or if `char2` is supplied then
 *  the first character of a suspected surrogate pair.
 * @param {*} [char2] - The second character of a suspected surrogate pair.
 * @returns {boolean} Returns true if the two characters create a valid
 *  'UTF-16' surrogate pair; otherwise false.
 */

var is_surrogate_pair_x_esm_isSurrogatePair = function isSurrogatePair(char1, char2) {
  var argsLength = arguments.length;

  if (argsLength < 1) {
    return false;
  }

  var first;
  var second;

  if (argsLength === 1) {
    if (is_string_default()(char1) && char1.length === 2) {
      first = charCodeAt.call(char1, 0);
      second = charCodeAt.call(char1, 1);
    } else {
      return false;
    }
  } else if (argsLength > 1) {
    if (is_string_default()(char1) === false || char1.length !== 1 || is_string_default()(char2) === false || char2.length !== 1) {
      return false;
    }

    first = charCodeAt.call(char1, 0);
    second = charCodeAt.call(char2, 0);
  }

  return first >= 0xd800 && first <= 0xdbff && second >= 0xdc00 && second <= 0xdfff;
};

/* harmony default export */ var is_surrogate_pair_x_esm = (is_surrogate_pair_x_esm_isSurrogatePair);


// EXTERNAL MODULE: ./node_modules/index-of-x/dist/index-of-x.esm.js
var index_of_x_esm = __webpack_require__(41);

// EXTERNAL MODULE: ./node_modules/assert-is-function-x/dist/assert-is-function-x.esm.js
var assert_is_function_x_esm = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/assert-is-object-x/dist/assert-is-object-x.esm.js
var assert_is_object_x_esm = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/array-slice-x/dist/array-slice-x.esm.js
var array_slice_x_esm = __webpack_require__(14);

// EXTERNAL MODULE: ./node_modules/attempt-x/dist/attempt-x.esm.js
var attempt_x_esm = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/split-if-boxed-bug-x/dist/split-if-boxed-bug-x.esm.js + 1 modules
var split_if_boxed_bug_x_esm = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/to-length-x/dist/to-length-x.esm.js
var to_length_x_esm = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/to-object-x/dist/to-object-x.esm.js
var to_object_x_esm = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/array-reduce-right-x/dist/array-reduce-right-x.esm.js
var _this = undefined;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }






var ArrayCtr = [].constructor;
var castObject = {}.constructor;
var nativeReduceR = typeof ArrayCtr.prototype.reduceRight === 'function' && ArrayCtr.prototype.reduceRight; // ES5 15.4.4.22
// http://es5.github.com/#x15.4.4.22
// https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/reduceRight

var isWorking;

if (nativeReduceR) {
  isWorking = attempt_x_esm["a" /* default */].call([], nativeReduceR, function (acc) {
    _newArrowCheck(this, _this);

    return acc;
  }.bind(undefined)).threw;
  var res;

  if (isWorking) {
    res = attempt_x_esm["a" /* default */].call(castObject('abc'), nativeReduceR, function (acc, c) {
      _newArrowCheck(this, _this);

      return acc + c;
    }.bind(undefined), 'x');
    isWorking = res.threw === false && res.value === 'xcba';
  }

  if (isWorking) {
    res = attempt_x_esm["a" /* default */].call(function getArgs() {
      /* eslint-disable-next-line prefer-rest-params */
      return arguments;
    }(1, 2, 3), nativeReduceR, function (acc, arg) {
      _newArrowCheck(this, _this);

      return acc + arg;
    }.bind(undefined), 1);
    isWorking = res.threw === false && res.value === 7;
  }

  if (isWorking) {
    res = attempt_x_esm["a" /* default */].call({
      0: 1,
      1: 2,
      3: 3,
      4: 4,
      length: 4
    }, nativeReduceR, function (acc, arg) {
      _newArrowCheck(this, _this);

      return acc + arg;
    }.bind(undefined), 2);
    isWorking = res.threw === false && res.value === 8;
  }

  if (isWorking) {
    var doc = typeof document !== 'undefined' && document;

    if (doc) {
      var fragment = doc.createDocumentFragment();
      var div = doc.createElement('div');
      fragment.appendChild(div);
      res = attempt_x_esm["a" /* default */].call(fragment.childNodes, nativeReduceR, function (acc, node) {
        _newArrowCheck(this, _this);

        acc[acc.length] = node;
        return acc;
      }.bind(undefined), []);
      isWorking = res.threw === false && res.value.length === 1 && res.value[0] === div;
    }
  }

  if (isWorking) {
    res = attempt_x_esm["a" /* default */].call('ab', nativeReduceR, function (_, __, ___, list) {
      _newArrowCheck(this, _this);

      return list;
    }.bind(undefined));
    isWorking = res.threw === false && _typeof(res.value) === 'object';
  }
}
/**
 * This method applies a function against an accumulator and each value of the
 * array (from right-to-left) to reduce it to a single value..
 *
 * @param {Array} array - The array to iterate over.
 * @param {Function} callBack - Function to execute for each element.
 * @param {*} [initialValue] - Value to use as the first argument to the first
 *  call of the callback. If no initial value is supplied, the first element in
 *  the array will be used. Calling reduceRight on an empty array without an initial
 *  value is an error.
 * @throws {TypeError} If array is null or undefined.
 * @throws {TypeError} If callBack is not a function.
 * @throws {TypeError} If called on an empty array without an initial value.
 * @returns {*} The value that results from the reduction.
 */


var $reduceRight;

if (nativeReduceR && isWorking) {
  $reduceRight = function reduceRight(array, callBack
  /* , initialValue */
  ) {
    var args = [callBack];

    if (arguments.length > 2) {
      /* eslint-disable-next-line prefer-rest-params,prefer-destructuring */
      args[1] = arguments[2];
    }

    return nativeReduceR.apply(array, args);
  };
} else {
  $reduceRight = function reduceRight(array, callBack
  /* , initialValue */
  ) {
    var object = Object(to_object_x_esm["a" /* default */])(array); // If no callback function or if callback is not a callable function

    Object(assert_is_function_x_esm["a" /* default */])(callBack);
    var iterable = Object(split_if_boxed_bug_x_esm["a" /* default */])(object);
    var length = Object(to_length_x_esm["a" /* default */])(iterable.length);
    var argsLength = arguments.length; // no value to return if no initial value, empty array

    if (length === 0 && argsLength < 3) {
      throw new TypeError('reduceRight of empty array with no initial value');
    }

    var result;
    var i = length - 1;

    if (argsLength > 2) {
      /* eslint-disable-next-line prefer-rest-params,prefer-destructuring */
      result = arguments[2];
    } else {
      do {
        if (i in iterable) {
          result = iterable[i];
          i -= 1;
          break;
        } // if array contains no values, no initial value to return


        i -= 1;

        if (i < 0) {
          throw new TypeError('reduceRight of empty array with no initial value');
        }
      } while (true);
      /* eslint-disable-line no-constant-condition */

    }

    while (i >= 0) {
      if (i in iterable) {
        result = callBack(result, iterable[i], i, object);
      }

      i -= 1;
    }

    return result;
  };
}

var rr = $reduceRight;
/* harmony default export */ var array_reduce_right_x_esm = (rr);


// CONCATENATED MODULE: ./node_modules/big-counter-x/dist/big-counter-x.esm.js



/** @type {BooleanConstructor} */

var castBoolean = true.constructor;

var reducer = function _reducer(acc, digit) {
  return acc + digit;
};
/**
 * Serialise the counter´s current value.
 *
 * @private
 * @this BigCounter
 * @returns {string} A string representation of an integer.
 */


var counterToString = function ToString() {
  return array_reduce_right_x_esm(this.count, reducer, '');
};
/**
 * Incremental integer counter. Counts from `0` to very big integers.
 * Javascript´s number type allows you to count in integer steps
 * from `0` to `9007199254740991`. As of ES5, Strings can contain
 * approximately 65000 characters and ES6 is supposed to handle
 * the `MAX_SAFE_INTEGER` (though I don´t believe any environments supports
 * this). This counter represents integer values as strings and can therefore
 * count in integer steps from `0` to the maximum string length (that´s some
 * 65000 digits). In the lower range, upto `9007199254740991`, the strings can
 * be converted to safe Javascript integers `Number(value)` or `+value`. This
 * counter is great for any applications that need a really big count
 * represented as a string, (an ID string).
 *
 * @class
 * @property {Array<number>} count - A representation of a big number.
 */


var big_counter_x_esm_BigCounter = function BigCounter() {
  if (castBoolean(this) === false || this instanceof BigCounter === false) {
    throw new TypeError('Constructor BigCounter requires "new"');
  }

  Object(object_define_properties_x_esm["a" /* default */])(this, {
    count: {
      value: [0]
    }
  });
};

Object(object_define_properties_x_esm["a" /* default */])(big_counter_x_esm_BigCounter.prototype, {
  /**
   * Gets the counter´s current value.
   *
   * @function
   * @returns {string} A string representation of an integer.
   */
  get: {
    value: counterToString
  },

  /**
   * Increments the counter´s value by `1`.
   *
   * @function
   * @returns {object} The counter object.
   */
  next: {
    value: function next() {
      var clone = Object(array_slice_x_esm["a" /* default */])(this.count);
      this.count.length = 0;
      var length = clone.length;
      var howMany = length > 0 ? length : 1;
      var carry = 0;
      var index = 0;

      while (index < howMany || carry) {
        var zi = carry + (clone[index] || 0) + (index === 0);
        this.count[this.count.length] = zi % 10;
        /* eslint-disable-next-line no-bitwise */

        carry = zi / 10 >> 0; // floor

        index += 1;
      }

      return this;
    }
  },

  /**
   * Resets the counter back to `0`.
   *
   * @function
   * @returns {object} The counter object.
   */
  reset: {
    value: function reset() {
      this.count.length = 1;
      this.count[0] = 0;
      return this;
    }
  },

  /**
   * Gets the counter´s current value.
   *
   * @function
   * @returns {string} A string representation of an integer.
   */
  toJSON: {
    value: counterToString
  },

  /**
   * Gets the counter´s current value.
   *
   * @function
   * @returns {string} A string representation of an integer.
   */
  toString: {
    value: counterToString
  },

  /**
   * Gets the counter´s current value.
   *
   * @function
   * @returns {string} A string representation of an integer.
   */
  valueOf: {
    value: counterToString
  }
});
/* harmony default export */ var big_counter_x_esm = (big_counter_x_esm_BigCounter);


// EXTERNAL MODULE: ./node_modules/is-nil-x/dist/is-nil-x.esm.js
var is_nil_x_esm = __webpack_require__(17);

// EXTERNAL MODULE: ./node_modules/is-map-x/dist/is-map-x.esm.js
var is_map_x_esm = __webpack_require__(46);

// EXTERNAL MODULE: ./node_modules/is-set-x/dist/is-set-x.esm.js
var is_set_x_esm = __webpack_require__(50);

// EXTERNAL MODULE: ./node_modules/is-object-like-x/dist/is-object-like-x.esm.js
var is_object_like_x_esm = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/is-array-x/dist/is-array-x.esm.js
var is_array_x_esm = __webpack_require__(22);

// EXTERNAL MODULE: ./node_modules/is-boolean-object/index.js
var is_boolean_object = __webpack_require__(40);
var is_boolean_object_default = /*#__PURE__*/__webpack_require__.n(is_boolean_object);

// EXTERNAL MODULE: ./node_modules/array-some-x/dist/array-some-x.esm.js
var array_some_x_esm = __webpack_require__(34);

// EXTERNAL MODULE: ./node_modules/get-prototype-of-x/dist/get-prototype-of-x.esm.js
var get_prototype_of_x_esm = __webpack_require__(30);

// EXTERNAL MODULE: ./node_modules/has-symbol-support-x/dist/has-symbol-support-x.esm.js
var has_symbol_support_x_esm = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/object-create-x/dist/object-create-x.esm.js
var object_create_x_esm = __webpack_require__(70);

// CONCATENATED MODULE: ./node_modules/collections-x/dist/collections-x.esm.js
/* unused harmony export symIt */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapConstructor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SetConstructor; });
/* unused harmony export isMap */
/* unused harmony export isSet */
var collections_x_esm_this = undefined;

function collections_x_esm_newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

function collections_x_esm_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { collections_x_esm_typeof = function _typeof(obj) { return typeof obj; }; } else { collections_x_esm_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return collections_x_esm_typeof(obj); }























/** @type {BooleanConstructor} */

var collections_x_esm_castBoolean = true.constructor;
/** @type {Function} */

var setPrototypeOf = {}.constructor.setPrototypeOf;
/* eslint-disable-next-line compat/compat */

var hasRealSymbolIterator = has_symbol_support_x_esm["a" /* default */] && collections_x_esm_typeof(Symbol.iterator) === 'symbol';
/* eslint-disable-next-line compat/compat */

var hasFakeSymbolIterator = (typeof Symbol === "undefined" ? "undefined" : collections_x_esm_typeof(Symbol)) === 'object' && typeof Symbol.iterator === 'string';
/**
 * The iterator identifier that is in use.
 *
 * Type {Symbol|string}.
 */

var $symIt;

if (hasRealSymbolIterator || hasFakeSymbolIterator) {
  /* eslint-disable-next-line compat/compat */
  $symIt = Symbol.iterator;
  /* eslint-disable-next-line no-use-extend-native/no-use-extend-native */
} else if (Object(is_function_x_esm["a" /* default */])([]['_es6-shim iterator_'])) {
  $symIt = '_es6-shim iterator_';
} else {
  $symIt = '@@iterator';
}

var symIt = $symIt;

var isNumberType = function isNumberType(value) {
  return typeof value === 'number';
};
/**
 * Detect an iterator function.
 *
 * @private
 * @param {*} iterable - Value to detect iterator function.
 * @returns {Symbol|string|undefined} The iterator property identifier.
 */


var collections_x_esm_getSymbolIterator = function getSymbolIterator(iterable) {
  if (Object(is_nil_x_esm["a" /* default */])(iterable) === false) {
    if ((hasRealSymbolIterator || hasFakeSymbolIterator) && iterable[$symIt]) {
      return $symIt;
    }

    if (iterable['_es6-shim iterator_']) {
      return '_es6-shim iterator_';
    }

    if (iterable['@@iterator']) {
      return '@@iterator';
    }
  }
  /* eslint-disable-next-line no-void */


  return void 0;
};
/**
 * If an iterable object is passed, all of its elements will be added to the
 * new Map/Set, null is treated as undefined.
 *
 * @private
 * @param {string} kind - Either 'map' or 'set'.
 * @param {object} context - The Map/Set object.
 * @param {*} iterable - Value to parsed.
 */


var collections_x_esm_parseIterable = function parseIterable(kind, context, iterable) {
  var symbolIterator = collections_x_esm_getSymbolIterator(iterable);

  if (kind === 'map') {
    Object(object_define_property_x_esm["a" /* default */])(context, '[[value]]', {
      value: []
    });
  }

  Object(object_define_properties_x_esm["a" /* default */])(context, {
    '[[changed]]': {
      value: false
    },
    '[[id]]': {
      value: new big_counter_x_esm()
    },
    '[[key]]': {
      value: []
    },
    '[[order]]': {
      value: []
    }
  });
  var next;
  var key;
  var indexof;

  if (iterable && Object(is_function_x_esm["a" /* default */])(iterable[symbolIterator])) {
    var iterator = iterable[symbolIterator]();
    next = iterator.next();

    if (kind === 'map') {
      if (Object(is_array_like_x_esm["a" /* default */])(next.value) === false || next.value.length < 2) {
        throw new TypeError("Iterator value ".concat(Object(is_array_like_x_esm["a" /* default */])(next.value), " is not an entry object"));
      }
    }

    while (next.done === false) {
      key = kind === 'map' ? next.value[0] : next.value;
      indexof = Object(index_of_x_esm["a" /* default */])(Object(assert_is_object_x_esm["a" /* default */])(context)['[[key]]'], key, 'SameValueZero');

      if (indexof < 0) {
        if (kind === 'map') {
          context['[[value]]'].push(next.value[1]);
        }

        context['[[key]]'].push(key);
        context['[[order]]'].push(context['[[id]]'].get());
        context['[[id]]'].next();
      } else if (kind === 'map') {
        /* eslint-disable-next-line prefer-destructuring */
        context['[[value]]'][indexof] = next.value[1];
      }

      next = iterator.next();
    }
  }

  if (is_string_default()(iterable)) {
    if (kind === 'map') {
      throw new TypeError("Iterator value ".concat(iterable.charAt(0), " is not an entry object"));
    }

    next = 0;

    while (next < iterable.length) {
      var char1 = iterable.charAt(next);
      var char2 = iterable.charAt(next + 1);

      if (is_surrogate_pair_x_esm(char1, char2)) {
        key = char1 + char2;
        next += 1;
      } else {
        key = char1;
      }

      indexof = Object(index_of_x_esm["a" /* default */])(Object(assert_is_object_x_esm["a" /* default */])(context)['[[key]]'], key, 'SameValueZero');

      if (indexof < 0) {
        context['[[key]]'].push(key);
        context['[[order]]'].push(context['[[id]]'].get());
        context['[[id]]'].next();
      }

      next += 1;
    }
  } else if (Object(is_array_like_x_esm["a" /* default */])(iterable)) {
    next = 0;

    while (next < iterable.length) {
      if (kind === 'map') {
        if (is_primitive_default()(iterable[next])) {
          throw new TypeError("Iterator value ".concat(Object(is_array_like_x_esm["a" /* default */])(next.value), " is not an entry object"));
        }
        /* eslint-disable-next-line prefer-destructuring */


        key = iterable[next][0];
      } else {
        key = iterable[next];
      }

      key = kind === 'map' ? iterable[next][0] : iterable[next];
      indexof = Object(index_of_x_esm["a" /* default */])(Object(assert_is_object_x_esm["a" /* default */])(context)['[[key]]'], key, 'SameValueZero');

      if (indexof < 0) {
        if (kind === 'map') {
          context['[[value]]'].push(iterable[next][1]);
        }

        context['[[key]]'].push(key);
        context['[[order]]'].push(context['[[id]]'].get());
        context['[[id]]'].next();
      } else if (kind === 'map') {
        /* eslint-disable-next-line prefer-destructuring */
        context['[[value]]'][indexof] = iterable[next][1];
      }

      next += 1;
    }
  }

  Object(object_define_property_x_esm["a" /* default */])(context, 'size', {
    value: context['[[key]]'].length,
    writable: true
  });
};
/**
 * The base forEach method executes a provided function once per each value
 * in the Map/Set object, in insertion order.
 *
 * @private
 * @param {string} kind - Either 'map' or 'set'.
 * @param {object} context - The Map/Set object.
 * @param {Function} callback - Function to execute for each element.
 * @param {*} [thisArg] - Value to use as this when executing callback.
 * @returns {object} The Map/Set object.
 */


var collections_x_esm_baseForEach = function baseForEach(kind, context, callback, thisArg) {
  Object(assert_is_object_x_esm["a" /* default */])(context);
  Object(assert_is_function_x_esm["a" /* default */])(callback);
  var pointers = {
    index: 0,
    order: context['[[order]]'][0]
  };
  context['[[change]]'] = false;
  var length = context['[[key]]'].length;

  while (pointers.index < length) {
    if (Object(has_own_property_x_esm["a" /* default */])(context['[[key]]'], pointers.index)) {
      var key = context['[[key]]'][pointers.index];
      var value = kind === 'map' ? context['[[value]]'][pointers.index] : key;
      callback.call(thisArg, value, key, context);
    }

    if (context['[[change]]']) {
      /* eslint-disable-next-line prefer-destructuring */
      length = context['[[key]]'].length;
      Object(array_some_x_esm["a" /* default */])(context['[[order]]'], function _some1(id, count) {
        pointers.index = count;
        return id > pointers.order;
      });
      context['[[change]]'] = false;
    } else {
      pointers.index += 1;
    }

    pointers.order = context['[[order]]'][pointers.index];
  }

  return context;
};
/**
 * The base has method returns a boolean indicating whether an element with
 * the specified key/value exists in a Map/Set object or not.
 *
 * @private
 * @param {*} key - The key/value to test for presence in the Map/Set object.
 * @returns {boolean} Returns true if an element with the specified key/value
 *  exists in the Map/Set object; otherwise false.
 */


var baseHas = function has(key) {
  /* eslint-disable-next-line babel/no-invalid-this */
  return Object(index_of_x_esm["a" /* default */])(Object(assert_is_object_x_esm["a" /* default */])(this)['[[key]]'], key, 'SameValueZero') > -1;
};
/**
 * The base clear method removes all elements from a Map/Set object.
 *
 * @private
 * @param {string} kind - Either 'map' or 'set'.
 * @param {object} context - The Map/Set object.
 * @returns {object} The Map/Set object.
 */


var collections_x_esm_baseClear = function baseClear(kind, context) {
  Object(assert_is_object_x_esm["a" /* default */])(context);
  context['[[id]]'].reset();
  context['[[change]]'] = true;
  context.size = 0;
  context['[[order]]'].length = 0;
  context['[[key]]'].length = 0;

  if (kind === 'map') {
    context['[[value]]'].length = 0;
  }

  return context;
};
/**
 * The base delete method removes the specified element from a Map/Set object.
 *
 * @private
 * @param {string} kind - Either 'map' or 'set'.
 * @param {object} context - The Map/Set object.
 * @param {*} key - The key/value of the element to remove from Map/Set object.
 * @returns {object} The Map/Set object.
 */


var collections_x_esm_baseDelete = function baseDelete(kind, context, key) {
  var indexof = Object(index_of_x_esm["a" /* default */])(Object(assert_is_object_x_esm["a" /* default */])(context)['[[key]]'], key, 'SameValueZero');
  var result = false;

  if (indexof > -1) {
    if (kind === 'map') {
      context['[[value]]'].splice(indexof, 1);
    }

    context['[[key]]'].splice(indexof, 1);
    context['[[order]]'].splice(indexof, 1);
    context['[[change]]'] = true;
    context.size = context['[[key]]'].length;
    result = true;
  }

  return result;
};
/**
 * The base set and add method.
 *
 * @private
 * @param {string} kind - Either 'map' or 'set'.
 * @param {object} context - The Map/Set object.
 * @param {*} key - The key or value of the element to add/set on the object.
 * @param {*} [value] - The value of the element to add to the Map object.
 * @returns {object} The Map/Set object.
 */


var baseAddSet = function _baseAddSet(kind, context, key, value) {
  var index = Object(index_of_x_esm["a" /* default */])(Object(assert_is_object_x_esm["a" /* default */])(context)['[[key]]'], key, 'SameValueZero');

  if (index > -1) {
    if (kind === 'map') {
      context['[[value]]'][index] = value;
    }
  } else {
    if (kind === 'map') {
      context['[[value]]'].push(value);
    }

    context['[[key]]'].push(key);
    context['[[order]]'].push(context['[[id]]'].get());
    context['[[id]]'].next();
    context['[[change]]'] = true;
    context.size = context['[[key]]'].length;
  }

  return context;
};
/**
 * An object is an iterator when it knows how to access items from a
 * collection one at a time, while keeping track of its current position
 * within that sequence. In JavaScript an iterator is an object that provides
 * a next() method which returns the next item in the sequence. This method
 * returns an object with two properties: done and value. Once created,
 * an iterator object can be used explicitly by repeatedly calling next().
 *
 * @private
 * @class
 * @param {object} context - The Set object.
 * @param {string} [iteratorKind] - Values are `value`, `key` or `key+value`.
 */


var SetIt = function SetIterator(context, iteratorKind) {
  Object(object_define_properties_x_esm["a" /* default */])(this, {
    '[[IteratorHasMore]]': {
      value: true,
      writable: true
    },
    '[[Set]]': {
      value: Object(assert_is_object_x_esm["a" /* default */])(context)
    },
    '[[SetIterationKind]]': {
      value: iteratorKind || 'value'
    },
    '[[SetNextIndex]]': {
      value: 0,
      writable: true
    }
  });
};
/**
 * Once initialized, the next() method can be called to access key-value
 * pairs from the object in turn.
 *
 * @private
 * @function next
 * @returns {object} Returns an object with two properties: done and value.
 */


Object(object_define_property_x_esm["a" /* default */])(SetIt.prototype, 'next', {
  value: function next() {
    var context = Object(assert_is_object_x_esm["a" /* default */])(this['[[Set]]']);
    var index = this['[[SetNextIndex]]'];
    var iteratorKind = this['[[SetIterationKind]]'];
    var more = this['[[IteratorHasMore]]'];
    var object;

    if (index < context['[[key]]'].length && more) {
      object = {
        done: false
      };

      if (iteratorKind === 'key+value') {
        object.value = [context['[[key]]'][index], context['[[key]]'][index]];
      } else {
        object.value = context['[[key]]'][index];
      }

      this['[[SetNextIndex]]'] += 1;
    } else {
      this['[[IteratorHasMore]]'] = false;
      object = {
        done: true,

        /* eslint-disable-next-line no-void */
        value: void 0
      };
    }

    return object;
  }
});
/**
 * The @@iterator property is the same Iterator object.
 *
 * @private
 * @function symIt
 * @memberof SetIterator.prototype
 * @returns {object} This Iterator object.
 */

Object(object_define_property_x_esm["a" /* default */])(SetIt.prototype, $symIt, {
  value: function iterator() {
    return this;
  }
});
/**
 * This method returns a new Iterator object that contains the
 * values for each element in the Set object in insertion order.
 *
 * @private
 * @this Set
 * @returns {object} A new Iterator object.
 */

var setValuesIterator = function values() {
  return new SetIt(this);
}; // eslint-disable jsdoc/check-param-names
// noinspection JSCommentMatchesSignature

/**
 * The Set object lets you store unique values of any type, whether primitive
 * values or object references.
 *
 * @class Set
 * @private
 * @param {*} [iterable] - If an iterable object is passed, all of its elements
 * will be added to the new Set. A null is treated as undefined.
 */
// eslint-enable jsdoc/check-param-names


var $SetObject = function Set() {
  if (collections_x_esm_castBoolean(this) === false || this instanceof $SetObject === false) {
    throw new TypeError("Constructor Set requires 'new'");
  }
  /* eslint-disable-next-line prefer-rest-params,no-void */


  collections_x_esm_parseIterable('set', this, arguments.length ? arguments[0] : void 0);
}; // noinspection JSValidateTypes


Object(object_define_properties_x_esm["a" /* default */])($SetObject.prototype,
/** @lends $SetObject.prototype */
{
  /**
   * The add() method appends a new element with a specified value to the end
   * of a Set object.
   *
   * @param {*} value - Required. The value of the element to add to the Set
   *  object.
   * @returns {object} The Set object.
   */
  add: {
    value: function add(value) {
      return baseAddSet('set', this, value);
    }
  },

  /**
   * The clear() method removes all elements from a Set object.
   *
   * @returns {object} The Set object.
   */
  clear: {
    value: function clear() {
      return collections_x_esm_baseClear('set', this);
    }
  },

  /**
   * The delete() method removes the specified element from a Set object.
   *
   * @param {*} value - The value of the element to remove from the Set object.
   * @returns {boolean} Returns true if an element in the Set object has been
   *  removed successfully; otherwise false.
   */
  delete: {
    value: function de1ete(value) {
      return collections_x_esm_baseDelete('set', this, value);
    }
  },

  /**
   * The entries() method returns a new Iterator object that contains an
   * array of [value, value] for each element in the Set object, in
   * insertion order. For Set objects there is no key like in Map objects.
   * However, to keep the API similar to the Map object, each entry has the
   * same value for its key and value here, so that an array [value, value]
   * is returned.
   *
   * @function
   * @returns {object} A new Iterator object.
   */
  entries: {
    value: function entries() {
      return new SetIt(this, 'key+value');
    }
  },

  /**
   * The forEach() method executes a provided function once per each value
   * in the Set object, in insertion order.
   *
   * @param {Function} callback - Function to execute for each element.
   * @param {*} [thisArg] - Value to use as this when executing callback.
   * @returns {object} The Set object.
   */
  forEach: {
    value: function forEach(callback, thisArg) {
      return collections_x_esm_baseForEach('set', this, callback, thisArg);
    }
  },

  /**
   * The has() method returns a boolean indicating whether an element with the
   * specified value exists in a Set object or not.
   *
   * @function
   * @param {*} value - The value to test for presence in the Set object.
   * @returns {boolean} Returns true if an element with the specified value
   *  exists in the Set object; otherwise false.
   */
  has: {
    value: baseHas
  },

  /**
   * The keys() method is an alias for the `values` method (for similarity
   * with Map objects); it behaves exactly the same and returns values of Set elements.
   *
   * @function
   * @returns {object} A new Iterator object.
   */
  keys: {
    value: setValuesIterator
  },

  /**
   * The value of size is an integer representing how many entries the Set
   * object has.
   *
   * @name size
   * @memberof $SetObject
   * @instance
   * @type {number}
   */
  size: {
    value: 0,
    writable: true
  },

  /**
   * The values() method returns a new Iterator object that contains the
   * values for each element in the Set object in insertion order.
   *
   * @function
   * @returns {object} A new Iterator object.
   */
  values: {
    value: setValuesIterator
  }
});
/**
 * The initial value of the @@iterator property is the same function object
 * as the initial value of the values property.
 *
 * @function symIt
 * @memberof $SetObject.prototype
 * @returns {object} A new Iterator object.
 */

Object(object_define_property_x_esm["a" /* default */])($SetObject.prototype, $symIt, {
  value: setValuesIterator
});
/**
 * An object is an iterator when it knows how to access items from a
 * collection one at a time, while keeping track of its current position
 * within that sequence. In JavaScript an iterator is an object that provides
 * a next() method which returns the next item in the sequence. This method
 * returns an object with two properties: done and value. Once created,
 * an iterator object can be used explicitly by repeatedly calling next().
 *
 * @private
 * @class
 * @param {object} context - The Map object.
 * @param {string} iteratorKind - Values are `value`, `key` or `key+value`.
 */

var MapIt = function MapIterator(context, iteratorKind) {
  Object(object_define_properties_x_esm["a" /* default */])(this, {
    '[[IteratorHasMore]]': {
      value: true,
      writable: true
    },
    '[[Map]]': {
      value: Object(assert_is_object_x_esm["a" /* default */])(context)
    },
    '[[MapIterationKind]]': {
      value: iteratorKind
    },
    '[[MapNextIndex]]': {
      value: 0,
      writable: true
    }
  });
};
/**
 * Once initialized, the next() method can be called to access key-value
 * pairs from the object in turn.
 *
 * @private
 * @function next
 * @returns {object} Returns an object with two properties: done and value.
 */


Object(object_define_property_x_esm["a" /* default */])(MapIt.prototype, 'next', {
  value: function next() {
    var context = Object(assert_is_object_x_esm["a" /* default */])(this['[[Map]]']);
    var index = this['[[MapNextIndex]]'];
    var iteratorKind = this['[[MapIterationKind]]'];
    var more = this['[[IteratorHasMore]]'];
    var object;
    Object(assert_is_object_x_esm["a" /* default */])(context);

    if (index < context['[[key]]'].length && more) {
      object = {
        done: false
      };

      if (iteratorKind === 'key+value') {
        object.value = [context['[[key]]'][index], context['[[value]]'][index]];
      } else {
        object.value = context["[[".concat(iteratorKind, "]]")][index];
      }

      this['[[MapNextIndex]]'] += 1;
    } else {
      this['[[IteratorHasMore]]'] = false;
      object = {
        done: true,

        /* eslint-disable-next-line no-void */
        value: void 0
      };
    }

    return object;
  }
});
/**
 * The @@iterator property is the same Iterator object.
 *
 * @private
 * @function symIt
 * @memberof MapIterator.prototype
 * @returns {object} This Iterator object.
 */

Object(object_define_property_x_esm["a" /* default */])(MapIt.prototype, $symIt, {
  value: function iterator() {
    return this;
  }
}); // eslint-disable jsdoc/check-param-names
// noinspection JSCommentMatchesSignature

/**
 * The Map object is a simple key/value map. Any value (both objects and
 * primitive values) may be used as either a key or a value.
 *
 * @class Map
 * @private
 * @param {*} [iterable] - Iterable is an Array or other iterable object whose
 *  elements are key-value pairs (2-element Arrays). Each key-value pair is
 *  added to the new Map. A null is treated as undefined.
 */
// eslint-enable jsdoc/check-param-names

var $MapObject = function Map() {
  if (collections_x_esm_castBoolean(this) === false || this instanceof $MapObject === false) {
    throw new TypeError("Constructor Map requires 'new'");
  }
  /* eslint-disable-next-line prefer-rest-params,no-void */


  collections_x_esm_parseIterable('map', this, arguments.length ? arguments[0] : void 0);
}; // noinspection JSValidateTypes


Object(object_define_properties_x_esm["a" /* default */])($MapObject.prototype,
/** @lends $MapObject.prototype */
{
  /**
   * The clear() method removes all elements from a Map object.
   *
   * @returns {object} The Map object.
   */
  clear: {
    value: function clear() {
      return collections_x_esm_baseClear('map', this);
    }
  },

  /**
   * The delete() method removes the specified element from a Map object.
   *
   * @param {*} key - The key of the element to remove from the Map object.
   * @returns {boolean} Returns true if an element in the Map object has been
   *  removed successfully.
   */
  delete: {
    value: function de1ete(key) {
      return collections_x_esm_baseDelete('map', this, key);
    }
  },

  /**
   * The entries() method returns a new Iterator object that contains the
   * [key, value] pairs for each element in the Map object in insertion order.
   *
   * @returns {object} A new Iterator object.
   */
  entries: {
    value: function entries() {
      return new MapIt(this, 'key+value');
    }
  },

  /**
   * The forEach() method executes a provided function once per each
   * key/value pair in the Map object, in insertion order.
   *
   * @param {Function} callback - Function to execute for each element..
   * @param {*} [thisArg] - Value to use as this when executing callback.
   * @returns {object} The Map object.
   */
  forEach: {
    value: function forEach(callback, thisArg) {
      return collections_x_esm_baseForEach('map', this, callback, thisArg);
    }
  },

  /**
   * The get() method returns a specified element from a Map object.
   *
   * @param {*} key - The key of the element to return from the Map object.
   * @returns {*} Returns the element associated with the specified key or
   *  undefined if the key can't be found in the Map object.
   */
  get: {
    value: function get(key) {
      var index = Object(index_of_x_esm["a" /* default */])(Object(assert_is_object_x_esm["a" /* default */])(this)['[[key]]'], key, 'SameValueZero');
      /* eslint-disable-next-line no-void */

      return index > -1 ? this['[[value]]'][index] : void 0;
    }
  },

  /**
   * The has() method returns a boolean indicating whether an element with
   * the specified key exists or not.
   *
   * @function
   * @param {*} key - The key of the element to test for presence in the Map object.
   * @returns {boolean} Returns true if an element with the specified key
   *  exists in the Map object; otherwise false.
   */
  has: {
    value: baseHas
  },

  /**
   * The keys() method returns a new Iterator object that contains the keys
   * for each element in the Map object in insertion order.
   *
   * @returns {object} A new Iterator object.
   */
  keys: {
    value: function keys() {
      return new MapIt(this, 'key');
    }
  },

  /**
   * The set() method adds a new element with a specified key and value to
   * a Map object.
   *
   * @param {*} key - The key of the element to add to the Map object.
   * @param {*} value - The value of the element to add to the Map object.
   * @returns {object} The Map object.
   */
  set: {
    value: function set(key, value) {
      return baseAddSet('map', this, key, value);
    }
  },

  /**
   * The value of size is an integer representing how many entries the Map
   * object has.
   *
   * @name size
   * @memberof $MapObject
   * @instance
   * @type {number}
   */
  size: {
    value: 0,
    writable: true
  },

  /**
   * The values() method returns a new Iterator object that contains the
   * values for each element in the Map object in insertion order.
   *
   * @returns {object} A new Iterator object.
   */
  values: {
    value: function values() {
      return new MapIt(this, 'value');
    }
  }
});
/**
 * The initial value of the @@iterator property is the same function object
 * as the initial value of the entries property.
 *
 * @function symIt
 * @memberof module:collections-x.Map.prototype
 * @returns {object} A new Iterator object.
 */

Object(object_define_property_x_esm["a" /* default */])($MapObject.prototype, $symIt, {
  value: $MapObject.prototype.entries
});
/*
 * Determine whether to use shim or native.
 */

var ExportMap = $MapObject;

try {
  /* eslint-disable-next-line compat/compat */
  ExportMap = new Map() ? Map : $MapObject;
} catch (ignore) {// empty
}

var MapConstructor = ExportMap;
var ExportSet = $SetObject;

try {
  /* eslint-disable-next-line compat/compat */
  ExportSet = new Set() ? Set : $SetObject;
} catch (ignore) {// empty
}

var SetConstructor = ExportSet;
var testMap;

if (ExportMap !== $MapObject) {
  testMap = new ExportMap();

  if (isNumberType(testMap.size) === false || testMap.size !== 0) {
    ExportMap = $MapObject;
  } else {
    var propsMap = ['has', 'set', 'clear', 'delete', 'forEach', 'values', 'entries', 'keys', $symIt];
    var failedMap = Object(array_some_x_esm["a" /* default */])(propsMap, function (method) {
      collections_x_esm_newArrowCheck(this, collections_x_esm_this);

      return Object(is_function_x_esm["a" /* default */])(testMap[method]) === false;
    }.bind(undefined));

    if (failedMap) {
      ExportMap = $MapObject;
    }
  }
}

if (ExportMap !== $MapObject) {
  // Safari 8, for example, doesn't accept an iterable.
  var mapAcceptsArguments = false;

  try {
    mapAcceptsArguments = new ExportMap([[1, 2]]).get(1) === 2;
  } catch (ignore) {// empty
  }

  if (mapAcceptsArguments === false) {
    ExportMap = $MapObject;
  }
}

if (ExportMap !== $MapObject) {
  testMap = new ExportMap();
  var mapSupportsChaining = testMap.set(1, 2) === testMap;

  if (mapSupportsChaining === false) {
    ExportMap = $MapObject;
  }
}

if (ExportMap !== $MapObject) {
  // Chrome 38-42, node 0.11/0.12, iojs 1/2 also have a bug when the Map has a size > 4
  testMap = new ExportMap([[1, 0], [2, 0], [3, 0], [4, 0]]);
  testMap.set(-0, testMap);
  var gets = testMap.get(0) === testMap && testMap.get(-0) === testMap;
  var mapUsesSameValueZero = gets && testMap.has(0) && testMap.has(-0);

  if (mapUsesSameValueZero === false) {
    ExportMap = $MapObject;
  }
}

if (ExportMap !== $MapObject) {
  if (setPrototypeOf) {
    var MyMap = function MyMap(arg) {
      testMap = new ExportMap(arg);
      setPrototypeOf(testMap, MyMap.prototype);
      return testMap;
    };

    setPrototypeOf(MyMap, ExportMap);
    MyMap.prototype = Object(object_create_x_esm["a" /* default */])(ExportMap.prototype, {
      constructor: {
        value: MyMap
      }
    });
    var mapSupportsSubclassing = false;

    try {
      testMap = new MyMap([]); // Firefox 32 is ok with the instantiating the subclass but will
      // throw when the map is used.

      testMap.set(42, 42);
      mapSupportsSubclassing = testMap instanceof MyMap;
    } catch (ignore) {// empty
    }

    if (mapSupportsSubclassing === false) {
      ExportMap = $MapObject;
    }
  }
}

if (ExportMap !== $MapObject) {
  var mapRequiresNew;

  try {
    /* eslint-disable-next-line babel/new-cap */
    mapRequiresNew = ExportMap() instanceof ExportMap === false;
  } catch (e) {
    mapRequiresNew = e instanceof TypeError;
  }

  if (mapRequiresNew === false) {
    ExportMap = $MapObject;
  }
}

if (ExportMap !== $MapObject) {
  testMap = new ExportMap();
  var mapIterationThrowsStopIterator;

  try {
    mapIterationThrowsStopIterator = testMap.keys().next().done === false;
  } catch (ignore) {
    mapIterationThrowsStopIterator = true;
  }

  if (mapIterationThrowsStopIterator) {
    ExportMap = $MapObject;
  }
} // Safari 8


if (ExportMap !== $MapObject && Object(is_function_x_esm["a" /* default */])(new ExportMap().keys().next) === false) {
  ExportMap = $MapObject;
}

if (hasRealSymbolIterator && ExportMap !== $MapObject) {
  var testMapProto = Object(get_prototype_of_x_esm["a" /* default */])(new ExportMap().keys());
  var hasBuggyMapIterator = true;

  if (testMapProto) {
    hasBuggyMapIterator = Object(is_function_x_esm["a" /* default */])(testMapProto[$symIt]) === false;
  }

  if (hasBuggyMapIterator) {
    ExportMap = $MapObject;
  }
}

var testSet;

if (ExportSet !== $SetObject) {
  testSet = new ExportSet();

  if (isNumberType(testSet.size) === false || testSet.size !== 0) {
    ExportMap = $MapObject;
  } else {
    var propsSet = ['has', 'add', 'clear', 'delete', 'forEach', 'values', 'entries', 'keys', $symIt];
    var failedSet = Object(array_some_x_esm["a" /* default */])(propsSet, function (method) {
      collections_x_esm_newArrowCheck(this, collections_x_esm_this);

      return Object(is_function_x_esm["a" /* default */])(testSet[method]) === false;
    }.bind(undefined));

    if (failedSet) {
      ExportSet = $SetObject;
    }
  }
}

if (ExportSet !== $SetObject) {
  testSet = new ExportSet();
  testSet.delete(0);
  testSet.add(-0);
  var setUsesSameValueZero = testSet.has(0) && testSet.has(-0);

  if (setUsesSameValueZero === false) {
    ExportSet = $SetObject;
  }
}

if (ExportSet !== $SetObject) {
  testSet = new ExportSet();
  var setSupportsChaining = testSet.add(1) === testSet;

  if (setSupportsChaining === false) {
    ExportSet = $SetObject;
  }
}

if (ExportSet !== $SetObject) {
  if (setPrototypeOf) {
    var MySet = function MySet(arg) {
      testSet = new ExportSet(arg);
      setPrototypeOf(testSet, MySet.prototype);
      return testSet;
    };

    setPrototypeOf(MySet, ExportSet);
    MySet.prototype = Object(object_create_x_esm["a" /* default */])(ExportSet.prototype, {
      constructor: {
        value: MySet
      }
    });
    var setSupportsSubclassing = false;

    try {
      testSet = new MySet([]);
      testSet.add(42, 42);
      setSupportsSubclassing = testSet instanceof MySet;
    } catch (ignore) {// empty
    }

    if (setSupportsSubclassing === false) {
      ExportSet = $SetObject;
    }
  }
}

if (ExportSet !== $SetObject) {
  var setRequiresNew;

  try {
    /* eslint-disable-next-line babel/new-cap */
    setRequiresNew = ExportSet() instanceof ExportSet === false;
  } catch (e) {
    setRequiresNew = e instanceof TypeError;
  }

  if (setRequiresNew === false) {
    ExportSet = $SetObject;
  }
}

if (ExportSet !== $SetObject) {
  testSet = new ExportSet();
  var setIterationThrowsStopIterator;

  try {
    setIterationThrowsStopIterator = testSet.keys().next().done === false;
  } catch (ignore) {
    setIterationThrowsStopIterator = true;
  }

  if (setIterationThrowsStopIterator) {
    ExportSet = $SetObject;
  }
} // Safari 8


if (ExportSet !== $SetObject && Object(is_function_x_esm["a" /* default */])(new ExportSet().keys().next) === false) {
  ExportSet = $SetObject;
}

if (hasRealSymbolIterator && ExportSet !== $SetObject) {
  var testSetProto = Object(get_prototype_of_x_esm["a" /* default */])(new ExportSet().keys());
  var hasBuggySetIterator = true;

  if (testSetProto) {
    hasBuggySetIterator = Object(is_function_x_esm["a" /* default */])(testSetProto[$symIt]) === false;
  }

  if (hasBuggySetIterator) {
    ExportSet = $SetObject;
  }
}

var collections_x_esm_hasCommon = function hasCommon(object) {
  return Object(is_object_like_x_esm["a" /* default */])(object) && Object(is_function_x_esm["a" /* default */])(object[$symIt]) && is_boolean_object_default()(object['[[changed]]']) && Object(is_object_like_x_esm["a" /* default */])(object['[[id]]']) && Object(is_array_x_esm["a" /* default */])(object['[[key]]']) && Object(is_array_x_esm["a" /* default */])(object['[[order]]']) && isNumberType(object.size);
};
/**
 * Determine if an `object` is a `Map`.
 *
 * @param {*} object - The object to test.
 * @returns {boolean} `true` if the `object` is a `Map`,
 *  else `false`.
 */


var $$isMap;

if (ExportMap === $MapObject) {
  $$isMap = function isMap(object) {
    if (Object(is_map_x_esm["a" /* default */])(object)) {
      return true;
    }

    return collections_x_esm_hasCommon(object) && Object(is_array_x_esm["a" /* default */])(object['[[value]]']);
  };
} else {
  $$isMap = is_map_x_esm["a" /* default */];
}

var collections_x_esm_isMap = $$isMap;
/**
 * Determine if an `object` is a `Set`.
 *
 * @param {*} object - The object to test.
 * @returns {boolean} `true` if the `object` is a `Set`,
 *  else `false`.
 */

var $$isSet;

if (ExportSet === $SetObject) {
  $$isSet = function isSet(object) {
    if (isSet(object)) {
      return true;
    }

    return collections_x_esm_hasCommon(object) && typeof object['[[value]]'] === 'undefined';
  };
} else {
  $$isSet = is_set_x_esm["a" /* default */];
}

var isSet = $$isSet;



/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var has_symbol_support_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
/* harmony import */ var is_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);
/* harmony import */ var is_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(is_symbol__WEBPACK_IMPORTED_MODULE_1__);


/**
 * Indicates if `Symbol.toStringTag`exists and is the correct type.
 * `true`, if it exists and is the correct type, otherwise `false`.
 *
 * @type boolean
 */

/* harmony default export */ __webpack_exports__["a"] = (has_symbol_support_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"] &&
/* eslint-disable-next-line compat/compat */
is_symbol__WEBPACK_IMPORTED_MODULE_1___default()(Symbol.toStringTag));



/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var has_symbol_support_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
/* harmony import */ var to_primitive_x__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71);
/* harmony import */ var to_string_x__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }




/**
 * This method Converts argument to a value that can be used as a property key.
 *
 * @param {*} argument - The argument to convert to a property key.
 * @throws {TypeError} If argument is not a symbol and is not coercible to a string.
 * @returns {string|Symbol} The converted argument.
 */

var toPropertyKey = function toPropertyKey(argument) {
  var key = Object(to_primitive_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(argument, String);
  return has_symbol_support_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"] && _typeof(key) === 'symbol' ? key : Object(to_string_x__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(key);
};

/* harmony default export */ __webpack_exports__["a"] = (toPropertyKey);



/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var attempt_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var split_if_boxed_bug_x__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var to_length_x__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var to_object_x__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var assert_is_function_x__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var require_object_coercible_x__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5);






var ns = [].some;
var nativeSome = typeof ns === 'function' && ns;

var test1 = function test1() {
  var spy = 0;
  var res = attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].call([1, 2], nativeSome, function spyAdd1(item) {
    spy += item;
    return false;
  });
  return res.threw === false && res.value === false && spy === 3;
};

var test2 = function test2() {
  var spy = '';
  var res = attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].call({}.constructor('abc'), nativeSome, function spyAdd2(item, index) {
    spy += item;
    return index === 1;
  });
  return res.threw === false && res.value === true && spy === 'ab';
};

var test3 = function test3() {
  var spy = 0;
  var res = attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].call(function getArgs() {
    /* eslint-disable-next-line prefer-rest-params */
    return arguments;
  }(1, 2, 3), nativeSome, function spyAdd3(item, index) {
    spy += item;
    return index === 2;
  });
  return res.threw === false && res.value === true && spy === 6;
};

var test4 = function test4() {
  var spy = 0;
  var res = attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].call({
    0: 1,
    1: 2,
    3: 3,
    4: 4,
    length: 4
  }, nativeSome, function spyAdd4(item) {
    spy += item;
    return false;
  });
  return res.threw === false && res.value === false && spy === 6;
};

var test5 = function test5() {
  var doc = typeof document !== 'undefined' && document;

  if (doc) {
    var spy = null;
    var fragment = doc.createDocumentFragment();
    var div = doc.createElement('div');
    fragment.appendChild(div);
    var res = attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].call(fragment.childNodes, nativeSome, function spyAssign(item) {
      spy = item;
      return item;
    });
    return res.threw === false && res.value === true && spy === div;
  }

  return true;
};

var test6 = function test6() {
  var isStrict = function getIsStrict() {
    /* eslint-disable-next-line babel/no-invalid-this */
    return true.constructor(this) === false;
  }();

  if (isStrict) {
    var spy = null;
    var res = attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].call([1], nativeSome, function thisTest() {
      /* eslint-disable-next-line babel/no-invalid-this */
      spy = typeof this === 'string';
    }, 'x');
    return res.threw === false && res.value === false && spy === true;
  }

  return true;
};

var test7 = function test7() {
  var spy = {};
  var fn = 'return nativeSome.call("foo", function (_, __, context) {' + 'if (castBoolean(context) === false || typeof context !== "object") {' + 'spy.value = true;}});';
  /* eslint-disable-next-line no-new-func */

  var res = Object(attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Function('nativeSome', 'spy', 'castBoolean', fn), nativeSome, spy, true.constructor);
  return res.threw === false && res.value === false && spy.value !== true;
};

var isWorking = true.constructor(nativeSome) && test1() && test2() && test3() && test4() && test5() && test6() && test7();

var patchedSome = function patchedSome() {
  return function some(array, callBack
  /* , thisArg */
  ) {
    Object(require_object_coercible_x__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(array);
    var args = [Object(assert_is_function_x__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(callBack)];

    if (arguments.length > 2) {
      /* eslint-disable-next-line prefer-rest-params,prefer-destructuring */
      args[1] = arguments[2];
    }

    return nativeSome.apply(array, args);
  };
}; // ES5 15.4.4.17
// http://es5.github.com/#x15.4.4.17
// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/some


var implementation = function implementation() {
  return function some(array, callBack
  /* , thisArg */
  ) {
    var object = Object(to_object_x__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(array); // If no callback function or if callback is not a callable function

    Object(assert_is_function_x__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(callBack);
    var iterable = Object(split_if_boxed_bug_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(object);
    var length = Object(to_length_x__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(iterable.length);
    /* eslint-disable-next-line prefer-rest-params,no-void */

    var thisArg = arguments.length > 2 ? arguments[2] : void 0;
    var noThis = typeof thisArg === 'undefined';

    for (var i = 0; i < length; i += 1) {
      if (i in iterable) {
        var item = iterable[i];

        if (noThis ? callBack(item, i, object) : callBack.call(thisArg, item, i, object)) {
          return true;
        }
      }
    }

    return false;
  };
};
/**
 * This method tests whether some element in the array passes the test
 * implemented by the provided function.
 *
 * @param {Array} array - The array to iterate over.
 * @param {Function} callBack - Function to test for each element.
 * @param {*} [thisArg] - Value to use as this when executing callback.
 * @throws {TypeError} If array is null or undefined.
 * @throws {TypeError} If callBack is not a function.
 * @returns {boolean} `true` if the callback function returns a truthy value for
 *  any array element; otherwise, `false`.
 */


var $some = isWorking ? patchedSome() : implementation();
/* harmony default export */ __webpack_exports__["a"] = ($some);



/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/is-nan-x/dist/is-nan-x.esm.js
var is_nan_x_esm = __webpack_require__(21);

// CONCATENATED MODULE: ./node_modules/infinity-x/dist/infinity-x.esm.js
/**
 * The constant value Infinity derived mathematically by 1 / 0.
 *
 * @type number
 */
/* harmony default export */ var infinity_x_esm = (1 / 0);


// CONCATENATED MODULE: ./node_modules/is-finite-x/dist/is-finite-x.esm.js


/**
 * This method determines whether the passed value is a finite number.
 *
 * @param {*} [number] - The value to be tested for finiteness.
 * @returns {boolean} A Boolean indicating whether or not the given value is a finite number.
 */

var is_finite_x_esm_isFinite = function isFinite(number) {
  return typeof number === 'number' && Object(is_nan_x_esm["a" /* default */])(number) === false && number !== infinity_x_esm && number !== -infinity_x_esm;
};

/* harmony default export */ var is_finite_x_esm = __webpack_exports__["a"] = (is_finite_x_esm_isFinite);



/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getDay = Date.prototype.getDay;
var tryDateObject = function tryDateObject(value) {
	try {
		getDay.call(value);
		return true;
	} catch (e) {
		return false;
	}
};

var toStr = Object.prototype.toString;
var dateClass = '[object Date]';
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

module.exports = function isDateObject(value) {
	if (typeof value !== 'object' || value === null) { return false; }
	return hasToStringTag ? tryDateObject(value) : toStr.call(value) === dateClass;
};


/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var to_object_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var has_symbol_support_x__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var attempt_x__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);



var nativeGOPS = {}.constructor.getOwnPropertySymbols;
var isWorking;

if (has_symbol_support_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"] && nativeGOPS && typeof nativeGOPS === 'function') {
  /* eslint-disable-next-line compat/compat */
  var symbol = Symbol('');
  var testObj = {
    a: 1
  };
  testObj[symbol] = 2;
  var r = Object(attempt_x__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(nativeGOPS, testObj);
  isWorking = r.threw === false && r.value && r.value.length === 1 && r.value[0] === symbol;
}
/**
 * This method creates an array of all symbol properties found directly upon a
 * given object.
 *
 * @param {object} obj - The object whose symbol properties are to be returned.
 * @throws {TypeError} If target is null or undefined.
 * @returns {Array} An array of all symbol properties found directly upon the
 *  given object.
 */


var getOwnPropertySymbols = function getOwnPropertySymbols(obj) {
  var object = Object(to_object_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(obj);
  return isWorking ? nativeGOPS(object) : [];
};

/* harmony default export */ __webpack_exports__["a"] = (getOwnPropertySymbols);



/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var attempt_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var split_if_boxed_bug_x__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var to_length_x__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var to_object_x__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var assert_is_function_x__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var require_object_coercible_x__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5);






var nm = [].map;
var nativeMap = typeof nm === 'function' && nm;

var identity = function identity(item) {
  return item;
};

var test1 = function test1() {
  var res = attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].call([1, 2], nativeMap, identity);
  return res.threw === false && res.value && res.value.length === 2 && res.value[0] === 1 && res.value[1] === 2;
};

var test2 = function test2() {
  var res = attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].call({}.constructor('ab'), nativeMap, identity);
  return res.threw === false && res.value && res.value.length === 2 && res.value[0] === 'a' && res.value[1] === 'b';
};

var test3 = function test3() {
  var res = attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].call(function returnArgs() {
    /* eslint-disable-next-line prefer-rest-params */
    return arguments;
  }(1, 2), nativeMap, identity);
  return res.threw === false && res.value && res.value.length === 2 && res.value[0] === 1 && res.value[1] === 2;
};

var test4 = function test4() {
  var res = attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].call({
    0: 1,
    2: 2,
    length: 3
  }, nativeMap, identity);
  return res.threw === false && res.value && res.value.length === 3 && !(1 in res.value);
};

var test5 = function test5() {
  var doc = typeof document !== 'undefined' && document;

  if (doc) {
    var fragment = doc.createDocumentFragment();
    var div = doc.createElement('div');
    fragment.appendChild(div);
    var res = attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].call(fragment.childNodes, nativeMap, identity);
    return res.threw === false && res.value && res.value.length === 1 && res.value[0] === div;
  }

  return true;
};

var test6 = function test6() {
  var isStrict = function returnIsStrict() {
    /* eslint-disable-next-line babel/no-invalid-this */
    return true.constructor(this) === false;
  }();

  if (isStrict) {
    var spy = null;
    var res = attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].call([1], nativeMap, function testThis() {
      /* eslint-disable-next-line babel/no-invalid-this */
      spy = typeof this === 'string';
    }, 'x');
    return res.threw === false && res.value && res.value.length === 1 && spy === true;
  }

  return true;
};

var test7 = function test7() {
  var spy = {};
  var fn = 'return nativeMap.call("foo", function (_, __, context) {' + 'if (castBoolean(context) === false || typeof context !== "object") {' + 'spy.value = true;}});';
  /* eslint-disable-next-line no-new-func */

  var res = Object(attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Function('nativeMap', 'spy', 'castBoolean', fn), nativeMap, spy, true.constructor);
  return res.threw === false && res.value && res.value.length === 3 && spy.value !== true;
};

var isWorking = true.constructor(nativeMap) && test1() && test2() && test3() && test4() && test5() && test6() && test7();

var patchedMap = function patchedMap() {
  return function map(array, callBack
  /* , thisArg */
  ) {
    Object(require_object_coercible_x__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(array);
    var args = [Object(assert_is_function_x__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(callBack)];

    if (arguments.length > 2) {
      /* eslint-disable-next-line prefer-rest-params,prefer-destructuring */
      args[1] = arguments[2];
    }

    return nativeMap.apply(array, args);
  };
};

var implementation = function implementation() {
  return function map(array, callBack
  /* , thisArg */
  ) {
    var object = Object(to_object_x__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(array); // If no callback function or if callback is not a callable function

    Object(assert_is_function_x__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(callBack);
    var iterable = Object(split_if_boxed_bug_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(object);
    var length = Object(to_length_x__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(iterable.length);
    /* eslint-disable-next-line prefer-rest-params,no-void */

    var thisArg = arguments.length > 2 ? arguments[2] : void 0;
    var noThis = typeof thisArg === 'undefined';
    var result = [];
    result.length = length;

    for (var i = 0; i < length; i += 1) {
      if (i in iterable) {
        var item = iterable[i];
        result[i] = noThis ? callBack(item, i, object) : callBack.call(thisArg, item, i, object);
      }
    }

    return result;
  };
};
/**
 * This method creates a new array with the results of calling a provided
 * function on every element in the calling array.
 *
 * @param {Array} array - The array to iterate over.
 * @param {Function} callBack - Function that produces an element of the Array.
 * @param {*} [thisArg] - Value to use as this when executing callback.
 * @throws {TypeError} If array is null or undefined.
 * @throws {TypeError} If callBack is not a function.
 * @returns {Array} A new array with each element being the result of the
 * callback function.
 */


var $map = isWorking ? patchedMap() : implementation();
/* harmony default export */ __webpack_exports__["a"] = ($map);



/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var is_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* harmony import */ var is_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(is_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var to_primitive_x__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71);
/* harmony import */ var trim_x__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(63);
/* harmony import */ var parse_int_x__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67);
/* harmony import */ var nan_x__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(73);





var binaryRadix = 2;
var octalRadix = 8;
var testCharsCount = 2;
var ERROR_MESSAGE = 'Cannot convert a Symbol value to a number';
var castNumber = testCharsCount.constructor;
var pStrSlice = ERROR_MESSAGE.slice;
var binaryRegex = /^0b[01]+$/i;
var RegExpConstructor = binaryRegex.constructor; // Note that in IE 8, RegExp.prototype.test doesn't seem to exist: ie, "test" is
// an own property of regexes. wtf.

var test = binaryRegex.test;

var isBinary = function _isBinary(value) {
  return test.call(binaryRegex, value);
};

var octalRegex = /^0o[0-7]+$/i;

var isOctal = function _isOctal(value) {
  return test.call(octalRegex, value);
};

var nonWSregex2018 = new RegExpConstructor("[\x85\u180E\u200B\uFFFE]", 'g');

var hasNonWS2018 = function _hasNonWS(value) {
  return test.call(nonWSregex2018, value);
};

var invalidHexLiteral = /^[-+]0x[0-9a-f]+$/i;

var isInvalidHexLiteral = function _isInvalidHexLiteral(value) {
  return test.call(invalidHexLiteral, value);
};
/**
 * This method converts argument to a value of type Number. (ES2018).
 *
 * @param {*} [argument] - The argument to convert to a number.
 * @throws {TypeError} - If argument is a Symbol or not coercible.
 * @returns {*} The argument converted to a number.
 */


var toNumber = function toNumber(argument) {
  var value = Object(to_primitive_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(argument, castNumber);

  if (is_symbol__WEBPACK_IMPORTED_MODULE_0___default()(value)) {
    throw new TypeError(ERROR_MESSAGE);
  }

  if (typeof value === 'string') {
    if (isBinary(value)) {
      return toNumber(Object(parse_int_x__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(pStrSlice.call(value, testCharsCount), binaryRadix));
    }

    if (isOctal(value)) {
      return toNumber(Object(parse_int_x__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(pStrSlice.call(value, testCharsCount), octalRadix));
    }

    if (hasNonWS2018(value) || isInvalidHexLiteral(value)) {
      return nan_x__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"];
    }

    var trimmed = Object(trim_x__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(value);

    if (trimmed !== value) {
      return toNumber(trimmed);
    }
  }

  return castNumber(value);
};

/* harmony default export */ __webpack_exports__["a"] = (toNumber);



/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var boolToStr = Boolean.prototype.toString;

var tryBooleanObject = function tryBooleanObject(value) {
	try {
		boolToStr.call(value);
		return true;
	} catch (e) {
		return false;
	}
};
var toStr = Object.prototype.toString;
var boolClass = '[object Boolean]';
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

module.exports = function isBoolean(value) {
	if (typeof value === 'boolean') { return true; }
	if (typeof value !== 'object') { return false; }
	return hasToStringTag ? tryBooleanObject(value) : toStr.call(value) === boolClass;
};


/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var is_nan_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);
/* harmony import */ var is_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var is_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(is_string__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var to_object_x__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var to_length_x__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var same_value_zero_x__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(68);
/* harmony import */ var same_value_x__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(43);
/* harmony import */ var find_index_x__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(55);
/* harmony import */ var calculate_from_index_x__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(69);
/* harmony import */ var split_if_boxed_bug_x__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(11);
/* harmony import */ var attempt_x__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(0);
function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }











/** @type {BooleanConstructor} */

var castBoolean = true.constructor;
var pIndexOf = typeof Array.prototype.indexOf === 'function' && Array.prototype.indexOf;
var isWorking;

if (pIndexOf) {
  var res = attempt_x__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"].call([0, 1], pIndexOf, 1, 2);
  isWorking = res.threw === false && res.value === -1;

  if (isWorking) {
    res = attempt_x__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"].call([0, 1], pIndexOf, 1);
    isWorking = res.threw === false && res.value === 1;
  }

  if (isWorking) {
    res = attempt_x__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"].call([0, -0], pIndexOf, -0);
    isWorking = res.threw === false && res.value === 0;
  }

  if (isWorking) {
    var testArr = [];
    testArr.length = 2;
    /* eslint-disable-next-line no-void */

    testArr[1] = void 0;
    /* eslint-disable-next-line no-void */

    res = attempt_x__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"].call(testArr, pIndexOf, void 0);
    isWorking = res.threw === false && res.value === 1;
  }

  if (isWorking) {
    res = attempt_x__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"].call('abc', pIndexOf, 'c');
    isWorking = res.threw === false && res.value === 2;
  }

  if (isWorking) {
    res = attempt_x__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"].call(function getArgs() {
      /* eslint-disable-next-line prefer-rest-params */
      return arguments;
    }('a', 'b', 'c'), pIndexOf, 'c');
    isWorking = res.threw === false && res.value === 2;
  }
}

if (isWorking !== true) {
  pIndexOf = function $pIndexOf(searchElement) {
    /* eslint-disable-next-line babel/no-invalid-this */
    var length = Object(to_length_x__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(this.length);

    if (length < 1) {
      return -1;
    }
    /* eslint-disable-next-line prefer-rest-params */


    var i = arguments[1];

    while (i < length) {
      /* eslint-disable-next-line babel/no-invalid-this */
      if (i in this && this[i] === searchElement) {
        return i;
      }

      i += 1;
    }

    return -1;
  };
}
/**
 * This method returns an index in the array, if an element in the array
 * satisfies the provided testing function. Otherwise -1 is returned.
 *
 * @private
 * @param {Array} array - The array to search.
 * @param {*} searchElement - Element to locate in the array.
 * @param {number} fromIndex - The index to start the search at.
 * @param {Function} extendFn - The comparison function to use.
 * @returns {number} Returns index of found element, otherwise -1.
 */


var findIdxFrom = function findIndexFrom(array, searchElement, fromIndex, extendFn) {
  var fIdx = fromIndex;
  var length = Object(to_length_x__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(array.length);

  while (fIdx < length) {
    if (fIdx in array && extendFn(array[fIdx], searchElement)) {
      return fIdx;
    }

    fIdx += 1;
  }

  return -1;
}; // eslint-disable jsdoc/check-param-names
// noinspection JSCommentMatchesSignature

/**
 * This method returns the first index at which a given element can be found
 * in the array, or -1 if it is not present.
 *
 * @param {Array} array - The array to search.
 * @throws {TypeError} If `array` is `null` or `undefined`.
 * @param {*} searchElement - Element to locate in the `array`.
 * @param {number} [fromIndex] - The index to start the search at. If the
 *  index is greater than or equal to the array's length, -1 is returned,
 *  which means the array will not be searched. If the provided index value is
 *  a negative number, it is taken as the offset from the end of the array.
 *  Note: if the provided index is negative, the array is still searched from
 *  front to back. If the calculated index is less than 0, then the whole
 *  array will be searched. Default: 0 (entire array is searched).
 * @param {string} [extend] - Extension type: `SameValue` or `SameValueZero`.
 * @returns {number} Returns index of found element, otherwise -1.
 */
// eslint-enable jsdoc/check-param-names


var indexOf = function indexOf(array, searchElement) {
  var _this = this;

  var object = Object(to_object_x__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(array);
  var iterable = Object(split_if_boxed_bug_x__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(object);
  var length = Object(to_length_x__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(iterable.length);

  if (length < 1) {
    return -1;
  }

  var argLength = arguments.length;
  /* eslint-disable-next-line prefer-rest-params */

  var extend = argLength > 2 && argLength > 3 ? arguments[3] : arguments[2];
  var extendFn;

  if (is_string__WEBPACK_IMPORTED_MODULE_1___default()(extend)) {
    extend = extend.toLowerCase();

    if (extend === 'samevalue') {
      extendFn = same_value_x__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"];
    } else if (extend === 'samevaluezero') {
      extendFn = same_value_zero_x__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"];
    }
  }

  var fromIndex = 0;

  if (extendFn && (searchElement === 0 || Object(is_nan_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(searchElement))) {
    if (argLength > 3) {
      /* eslint-disable-next-line prefer-rest-params */
      fromIndex = Object(calculate_from_index_x__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(iterable, arguments[2]);

      if (fromIndex >= length) {
        return -1;
      }

      if (fromIndex < 0) {
        fromIndex = 0;
      }
    }

    if (fromIndex > 0) {
      return findIdxFrom(iterable, searchElement, fromIndex, extendFn);
    }

    return Object(find_index_x__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(iterable, function (element, index) {
      _newArrowCheck(this, _this);

      return index in iterable && extendFn(searchElement, element);
    }.bind(this));
  }

  if (argLength > 3 || argLength > 2 && castBoolean(extendFn) === false) {
    /* eslint-disable-next-line prefer-rest-params */
    fromIndex = Object(calculate_from_index_x__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(iterable, arguments[2]);

    if (fromIndex >= length) {
      return -1;
    }

    if (fromIndex < 0) {
      fromIndex = 0;
    }
  }

  return pIndexOf.call(iterable, searchElement, fromIndex);
};

/* harmony default export */ __webpack_exports__["a"] = (indexOf);



/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var to_object_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var attempt_x__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var is_array_x__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22);
/* harmony import */ var to_string_tag_x__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20);
/* harmony import */ var array_slice_x__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14);
/* harmony import */ var object_keys_x__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(18);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }







var ObjectCtr = {}.constructor;
var nGOPN = ObjectCtr.getOwnPropertyNames;
var nativeGOPN = typeof nGOPN === 'function' && nGOPN;
/**
 * This method creates an array of all properties (enumerable or not) found
 * directly upon a given object.
 *
 * @param {object} obj - The object whose enumerable and non-enumerable own
 *  properties are to be returned.
 * @throws {TypeError} If target is null or undefined.
 * @returns {Array} An array of strings that correspond to the properties found
 *  directly upon the given object.
 */

var getOPN;

if (nativeGOPN) {
  var isCorrectRes = function isCorrectRes(r, length) {
    return r.threw === false && Object(is_array_x__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(r.value) && r.value.length === length;
  };

  var either = function either(r, a, b) {
    var x = r.value[0];
    var y = r.value[1];
    return x === a && y === b || x === b && y === a;
  };

  var res = Object(attempt_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(nativeGOPN, 'fo');

  if (isCorrectRes(res, 3) && either(res, '0', '1') && res.value[2] === 'length') {
    getOPN = nativeGOPN;
  } else {
    res = Object(attempt_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(nativeGOPN, {
      a: 1,
      b: 2
    });

    if (isCorrectRes(res, 2) && either(res, 'a', 'b')) {
      var win = (typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object' && window;
      var cachedWindowNames = win ? nativeGOPN(win) : [];

      getOPN = function getOwnPropertyNames(obj) {
        var val = Object(to_object_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(obj); // IE bug where layout engine calls userland gOPN for cross-domain `window` objects

        if (win && win !== window && Object(to_string_tag_x__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(val) === '[object Window]') {
          var result = Object(attempt_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(nativeGOPN, val);
          return result.threw ? Object(array_slice_x__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(cachedWindowNames) : result.value;
        }

        return nativeGOPN(val);
      };
    }
  }
}

if (typeof getOPN !== 'function') {
  getOPN = function getOwnPropertyNames(obj) {
    return Object(object_keys_x__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(obj);
  };
}

var gopn = getOPN;
/* harmony default export */ __webpack_exports__["a"] = (gopn);



/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var is_nan_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);

/**
 * This method is the comparison abstract operation SameValue(x, y), where x
 * and y are ECMAScript language values, produces true or false.
 *
 * @param {*} [value1] - The first value to compare.
 * @param {*} [value2] - The second value to compare.
 * @returns {boolean} A Boolean indicating whether or not the two arguments are
 *  the same value.
 */

var sameValue = function sameValue(value1, value2) {
  if (value1 === 0 && value2 === 0) {
    return 1 / value1 === 1 / value2;
  }

  if (value1 === value2) {
    return true;
  }

  return Object(is_nan_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(value1) && Object(is_nan_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(value2);
};

/* harmony default export */ __webpack_exports__["a"] = (sameValue);



/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var to_property_key_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33);
/* harmony import */ var to_object_x__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);


var propIsEnumerable = {}.propertyIsEnumerable;
/**
 * This method returns a Boolean indicating whether the specified property is
 * enumerable. Does not attempt to fix bugs in IE<9 or old Opera, otherwise it
 * does ES6ify the method.
 *
 * @param {!object} object - The object on which to test the property.
 * @param {string|Symbol} property - The name of the property to test.
 * @throws {TypeError} If target is null or undefined.
 * @returns {boolean} A Boolean indicating whether the specified property is
 *  enumerable.
 */

var propertyIsEnumerable = function propertyIsEnumerable(object, property) {
  return propIsEnumerable.call(Object(to_object_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(object), Object(to_property_key_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(property));
};

/* harmony default export */ __webpack_exports__["a"] = (propertyIsEnumerable);



/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var attempt_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var is_object_like_x__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var has_to_string_tag_x__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32);
/* harmony import */ var object_get_own_property_descriptor_x__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29);
/* harmony import */ var to_string_tag_x__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20);
var _this = undefined;

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }






var hasABuf = typeof ArrayBuffer === 'function';
var aBufTag = '[object ArrayBuffer]';
var bLength = false;

if (hasABuf) {
  if (has_to_string_tag_x__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]) {
    /* eslint-disable-next-line compat/compat */
    var descriptor = Object(object_get_own_property_descriptor_x__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(ArrayBuffer.prototype, 'byteLength');

    if (descriptor && typeof descriptor.get === 'function') {
      var res = Object(attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function () {
        _newArrowCheck(this, _this);

        /* eslint-disable-next-line compat/compat */
        return new ArrayBuffer(4);
      }.bind(undefined));

      if (res.threw === false && Object(is_object_like_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(res.value)) {
        res = attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].call(res.value, descriptor.get);
        bLength = res.threw === false && typeof res.value === 'number' && descriptor.get;
      }
    }
  }
}
/**
 * Determine if an `object` is an `ArrayBuffer`.
 *
 * @param {*} object - The object to test.
 * @returns {boolean} `true` if the `object` is an `ArrayBuffer`,
 *  else false`.
 */


var isArrayBuffer = function isArrayBuffer(object) {
  if (hasABuf === false || Object(is_object_like_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(object) === false) {
    return false;
  }

  if (bLength === false) {
    return Object(to_string_tag_x__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(object) === aBufTag;
  }

  var result = attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].call(object, bLength);
  return result.threw === false && typeof result.value === 'number';
};

/* harmony default export */ __webpack_exports__["a"] = (isArrayBuffer);



/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var object_get_own_property_descriptor_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29);
/* harmony import */ var attempt_x__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var is_object_like_x__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var is_length_x__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52);





var test1 = function test1() {
  return Object(attempt_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(function createMap() {
    /* eslint-disable-next-line compat/compat */
    return new Map();
  });
};

var getGetter = function getGetter() {
  if (typeof Map === 'function') {
    /* eslint-disable-next-line compat/compat */
    var descriptor = Object(object_get_own_property_descriptor_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Map.prototype, 'size');

    if (descriptor && typeof descriptor.get === 'function') {
      var resTest1 = test1();

      if (resTest1.threw === false && Object(is_object_like_x__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(resTest1.value)) {
        var res = attempt_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].call(resTest1.value, descriptor.get);

        if (res.threw === false && Object(is_length_x__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(res.value)) {
          return descriptor.get;
        }
      }
    }
  }
  /* eslint-disable-next-line no-void */


  return void 0;
};

var getSize = getGetter();
/**
 * Determine if an `object` is a `Map`.
 *
 * @param {*} object - The object to test.
 * @returns {boolean} `true` if the `object` is a `Map`,
 *  else `false`.
 */

var isMap = function isMap(object) {
  if (!getSize || Object(is_object_like_x__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(object) === false) {
    return false;
  }

  var result = attempt_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].call(object, getSize);
  return result.threw === false && Object(is_length_x__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(result.value);
};

/* harmony default export */ __webpack_exports__["a"] = (isMap);



/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var to_string_tag_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);
/* harmony import */ var is_object_like_x__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var get_prototype_of_x__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(30);




var errorCheck = function checkIfError(value) {
  return Object(to_string_tag_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(value) === '[object Error]';
};

if (errorCheck(Error.prototype) === false) {
  var errorProto = Error.prototype;
  var testStringTag = errorCheck;

  errorCheck = function checkIfError(value) {
    return value === errorProto || testStringTag(value);
  };
}
/**
 * Determine whether or not a given `value` is an `Error` type.
 *
 * @param {*} value - The object to be tested.
 * @returns {boolean} Returns `true` if `value` is an `Error` type,
 *  else `false`.
 */


var isError = function isError(value) {
  if (Object(is_object_like_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(value) === false) {
    return false;
  }

  var object = value;
  var maxLoop = 100;

  while (object && maxLoop > -1) {
    if (errorCheck(object)) {
      return true;
    }

    object = Object(get_prototype_of_x__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(object);
    maxLoop -= 1;
  }

  return false;
};

/* harmony default export */ __webpack_exports__["a"] = (isError);



/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/assert-is-function-x/dist/assert-is-function-x.esm.js
var assert_is_function_x_esm = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/array-slice-x/dist/array-slice-x.esm.js
var array_slice_x_esm = __webpack_require__(14);

// EXTERNAL MODULE: ./node_modules/attempt-x/dist/attempt-x.esm.js
var attempt_x_esm = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/is-primitive/index.js
var is_primitive = __webpack_require__(8);
var is_primitive_default = /*#__PURE__*/__webpack_require__.n(is_primitive);

// CONCATENATED MODULE: ./node_modules/bind-x/dist/bind-x.esm.js
var bind_x_esm_this = undefined;

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }





var nb = assert_is_function_x_esm["a" /* default */].bind;
var nativeBind = typeof nb === 'function' && nb;
var isWorking;

if (nativeBind) {
  /* eslint-disable-next-line no-void */
  var gra = void 0;
  /* eslint-disable-next-line no-void */

  var context = void 0;
  /* eslint-disable-next-line no-unused-vars */

  var bind_x_esm_fn = function fn(arg1, arg2) {
    /* eslint-disable-next-line babel/no-invalid-this */
    context = this;
    gra = arg1;
    /* eslint-disable-next-line prefer-rest-params */

    return arguments;
  };

  var testThis = [];
  var bind_x_esm_res = attempt_x_esm["a" /* default */].call(bind_x_esm_fn, nativeBind, testThis, 1);
  isWorking = bind_x_esm_res.threw === false && typeof bind_x_esm_res.value === 'function';

  if (isWorking) {
    bind_x_esm_res = Object(attempt_x_esm["a" /* default */])(bind_x_esm_res.value, 2, 3);
    isWorking = bind_x_esm_res.threw === false && gra === 1 && context === testThis && bind_x_esm_res.value.length === 3;
  }

  if (isWorking) {
    var oracle = [1, 2, 3];

    var Ctr = function Ctr() {
      isWorking = this !== oracle;
      return oracle;
    };

    bind_x_esm_res = attempt_x_esm["a" /* default */].call(Ctr, nativeBind, null);
    isWorking = bind_x_esm_res.threw === false && typeof bind_x_esm_res.value === 'function';

    if (isWorking) {
      bind_x_esm_res = Object(attempt_x_esm["a" /* default */])(function () {
        _newArrowCheck(this, bind_x_esm_this);

        /* eslint-disable-next-line babel/new-cap,new-cap */
        return new bind_x_esm_res.value();
      }.bind(undefined));

      if (isWorking) {
        isWorking = bind_x_esm_res.threw === false && bind_x_esm_res.value === oracle;
      }
    }
  }
}
/**
 * The bind() method creates a new function that, when called, has its this
 * keyword set to the provided value, with a given sequence of arguments
 * preceding any provided when the new function is called.
 *
 * @param {Function} target - The target function.
 * @param {*} thisArg - The value to be passed as the this parameter to the target
 *  function when the bound function is called. The value is ignored if the
 *  bound function is constructed using the new operator.
 * @param {*} [args] - Arguments to prepend to arguments provided to the bouund
 *  function when invoking the target function.
 * @throws {TypeError} If target is not a function.
 * @returns {Function} The bound function.
 */


var $bind;

if (isWorking) {
  /* eslint-disable-next-line no-unused-vars */
  $bind = function bind(target, thisArg) {
    /* eslint-disable-next-line prefer-rest-params */
    return nativeBind.apply(Object(assert_is_function_x_esm["a" /* default */])(target), Object(array_slice_x_esm["a" /* default */])(arguments, 1));
  };
} else {
  var bind_x_esm_concat = function concat(a, b) {
    var aLength = a.length;
    var bLength = b.length;
    var result = Object(array_slice_x_esm["a" /* default */])(a);
    result.length += bLength;

    for (var index = 0; index < bLength; index += 1) {
      result[aLength + index] = b[index];
    }

    return result;
  };
  /* eslint-disable-next-line lodash/prefer-noop */


  var Empty = function Empty() {};

  $bind = function bind(target, thisArg) {
    Object(assert_is_function_x_esm["a" /* default */])(target);
    /* eslint-disable-next-line prefer-rest-params */

    var args = Object(array_slice_x_esm["a" /* default */])(arguments, 2);
    var bound;

    var binder = function _binder() {
      /* eslint-disable-next-line babel/no-invalid-this */
      if (this instanceof bound) {
        /* eslint-disable-next-line babel/no-invalid-this,prefer-rest-params */
        var result = target.apply(this, bind_x_esm_concat(args, arguments));
        /* eslint-disable-next-line babel/no-invalid-this */

        return is_primitive_default()(result) ? this : result;
      }
      /* eslint-disable-next-line prefer-rest-params */


      return target.apply(thisArg, bind_x_esm_concat(args, arguments));
    };

    var boundLength = target.length - args.length;

    if (boundLength < 0) {
      boundLength = 0;
    }

    var lastIndex = boundLength - 1;
    var boundArgs = '';

    for (var index = 0; index < boundLength; index += 1) {
      boundArgs += "$_".concat(index, "_$").concat(index < lastIndex ? ',' : '');
    }
    /* eslint-disable-next-line no-new-func */


    bound = Function('binder', 'slice', "return function (".concat(boundArgs, "){ return binder.apply(this,slice(arguments)); }"))(binder, array_slice_x_esm["a" /* default */]);

    if (target.prototype) {
      Empty.prototype = target.prototype;
      bound.prototype = new Empty();
      Empty.prototype = null;
    }

    return bound;
  };
}

var libBind = $bind;
/* harmony default export */ var bind_x_esm = (libBind);


// EXTERNAL MODULE: ./node_modules/is-function-x/dist/is-function-x.esm.js + 1 modules
var is_function_x_esm = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/is-generator-function/index.js
var is_generator_function = __webpack_require__(94);
var is_generator_function_default = /*#__PURE__*/__webpack_require__.n(is_generator_function);

// EXTERNAL MODULE: ./node_modules/to-string-tag-x/dist/to-string-tag-x.esm.js
var to_string_tag_x_esm = __webpack_require__(20);

// EXTERNAL MODULE: ./node_modules/has-to-string-tag-x/dist/has-to-string-tag-x.esm.js
var has_to_string_tag_x_esm = __webpack_require__(32);

// EXTERNAL MODULE: ./node_modules/normalize-space-x/dist/normalize-space-x.esm.js
var normalize_space_x_esm = __webpack_require__(60);

// EXTERNAL MODULE: ./node_modules/replace-comments-x/dist/replace-comments-x.esm.js
var replace_comments_x_esm = __webpack_require__(62);

// EXTERNAL MODULE: ./node_modules/get-prototype-of-x/dist/get-prototype-of-x.esm.js
var get_prototype_of_x_esm = __webpack_require__(30);

// CONCATENATED MODULE: ./node_modules/is-async-function-x/dist/is-async-function-x.esm.js
var is_async_function_x_esm_this = undefined;

function is_async_function_x_esm_newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }







var isFnRegex = /^async function/;
var test = isFnRegex.test;
var functionCtr = attempt_x_esm["a" /* default */].constructor;
var fToString = functionCtr.prototype.toString;
var testRes = Object(attempt_x_esm["a" /* default */])(function () {
  is_async_function_x_esm_newArrowCheck(this, is_async_function_x_esm_this);

  return Object(get_prototype_of_x_esm["a" /* default */])(functionCtr('return async function() {}')());
}.bind(undefined));
var supportsAsync = testRes.threw === false;
var asyncProto = testRes.value;
/**
 * Checks if `value` is classified as an `Async Function` object.
 *
 * @param {*} fn - The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified,
 * else `false`.
 */

var is_async_function_x_esm_isAsyncFunction = function isAsyncFunction(fn) {
  if (supportsAsync === false || typeof fn !== 'function') {
    return false;
  }

  var str;

  try {
    str = Object(normalize_space_x_esm["a" /* default */])(Object(replace_comments_x_esm["a" /* default */])(fToString.call(fn), ' '));
  } catch (ignore) {
    return false;
  }

  if (test.call(isFnRegex, str)) {
    return true;
  }

  if (has_to_string_tag_x_esm["a" /* default */] === false) {
    return Object(to_string_tag_x_esm["a" /* default */])(fn) === '[object AsyncFunction]';
  }

  return Object(get_prototype_of_x_esm["a" /* default */])(fn) === asyncProto;
};

/* harmony default export */ var is_async_function_x_esm = (is_async_function_x_esm_isAsyncFunction);


// EXTERNAL MODULE: ./node_modules/is-regex/index.js
var is_regex = __webpack_require__(80);
var is_regex_default = /*#__PURE__*/__webpack_require__.n(is_regex);

// EXTERNAL MODULE: ./node_modules/object-define-properties-x/dist/object-define-properties-x.esm.js + 1 modules
var object_define_properties_x_esm = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/is-date-object/index.js
var is_date_object = __webpack_require__(36);
var is_date_object_default = /*#__PURE__*/__webpack_require__.n(is_date_object);

// EXTERNAL MODULE: ./node_modules/is-array-buffer-x/dist/is-array-buffer-x.esm.js
var is_array_buffer_x_esm = __webpack_require__(45);

// EXTERNAL MODULE: ./node_modules/is-set-x/dist/is-set-x.esm.js
var is_set_x_esm = __webpack_require__(50);

// EXTERNAL MODULE: ./node_modules/is-map-x/dist/is-map-x.esm.js
var is_map_x_esm = __webpack_require__(46);

// EXTERNAL MODULE: ./node_modules/is-typed-array/index.js
var is_typed_array = __webpack_require__(77);
var is_typed_array_default = /*#__PURE__*/__webpack_require__.n(is_typed_array);

// EXTERNAL MODULE: ./node_modules/is-data-view-x/dist/is-data-view-x.esm.js
var is_data_view_x_esm = __webpack_require__(78);

// EXTERNAL MODULE: ./node_modules/is-nil-x/dist/is-nil-x.esm.js
var is_nil_x_esm = __webpack_require__(17);

// EXTERNAL MODULE: ./node_modules/is-error-x/dist/is-error-x.esm.js
var is_error_x_esm = __webpack_require__(47);

// EXTERNAL MODULE: ./node_modules/is-object-like-x/dist/is-object-like-x.esm.js
var is_object_like_x_esm = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/is-promise/index.js
var is_promise = __webpack_require__(85);
var is_promise_default = /*#__PURE__*/__webpack_require__.n(is_promise);

// EXTERNAL MODULE: ./node_modules/is-string/index.js
var is_string = __webpack_require__(12);
var is_string_default = /*#__PURE__*/__webpack_require__.n(is_string);

// EXTERNAL MODULE: ./node_modules/is-number-object/index.js
var is_number_object = __webpack_require__(56);
var is_number_object_default = /*#__PURE__*/__webpack_require__.n(is_number_object);

// EXTERNAL MODULE: ./node_modules/is-boolean-object/index.js
var is_boolean_object = __webpack_require__(40);
var is_boolean_object_default = /*#__PURE__*/__webpack_require__.n(is_boolean_object);

// EXTERNAL MODULE: ./node_modules/object-is/index.js
var object_is = __webpack_require__(95);
var object_is_default = /*#__PURE__*/__webpack_require__.n(object_is);

// EXTERNAL MODULE: ./node_modules/is-symbol/index.js
var is_symbol = __webpack_require__(16);
var is_symbol_default = /*#__PURE__*/__webpack_require__.n(is_symbol);

// EXTERNAL MODULE: ./node_modules/is-array-x/dist/is-array-x.esm.js
var is_array_x_esm = __webpack_require__(22);

// EXTERNAL MODULE: ./node_modules/is-nan/index.js
var is_nan = __webpack_require__(96);
var is_nan_default = /*#__PURE__*/__webpack_require__.n(is_nan);

// EXTERNAL MODULE: ./node_modules/to-string-x/dist/to-string-x.esm.js
var to_string_x_esm = __webpack_require__(9);

// CONCATENATED MODULE: ./node_modules/get-function-name-x/dist/get-function-name-x.esm.js



var get_function_name_x_esm_functionCtr = is_function_x_esm["a" /* default */].constructor;
var $getName;
/* eslint-disable-next-line lodash/prefer-noop */

var t = function test1() {};

if (t.name === 'test1') {
  var createsAnonymous = get_function_name_x_esm_functionCtr().name === 'anonymous';

  $getName = function getName(fn) {
    return createsAnonymous && fn.name === 'anonymous' ? '' : fn.name;
  };
} else {
  var get_function_name_x_esm_fToString = get_function_name_x_esm_functionCtr.toString;
  var reName = /^(?:async )?(?:function|class) ?(?:\* )?([\w$]+)/i;
  var stringMatch = ''.match;

  $getName = function getName(fn) {
    var match;

    try {
      match = stringMatch.call(Object(normalize_space_x_esm["a" /* default */])(Object(replace_comments_x_esm["a" /* default */])(get_function_name_x_esm_fToString.call(fn), ' ')), reName);

      if (match) {
        var name = match[1];
        return name === 'anonymous' ? '' : name;
      }
    } catch (ignore) {// empty
    }

    return '';
  };
}
/**
 * This method returns the name of the function, or `undefined` if not
 * a function.
 *
 * @param {Function} fn - The function to get the name of.
 * @returns {undefined|string} The name of the function,  or `undefined` if
 *  not a function.
 */


var get_function_name_x_esm_getFunctionName = function getFunctionName(fn) {
  /* eslint-disable-next-line no-void */
  return Object(is_function_x_esm["a" /* default */])(fn, true) ? $getName(fn) : void 0;
};

/* harmony default export */ var get_function_name_x_esm = (get_function_name_x_esm_getFunctionName);


// EXTERNAL MODULE: ./node_modules/has-symbol-support-x/dist/has-symbol-support-x.esm.js
var has_symbol_support_x_esm = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/white-space-x/dist/white-space-x.esm.js
var white_space_x_esm = __webpack_require__(49);

// EXTERNAL MODULE: ./node_modules/array-reduce-x/dist/array-reduce-x.esm.js
var array_reduce_x_esm = __webpack_require__(26);

// EXTERNAL MODULE: ./node_modules/array-filter-x/dist/array-filter-x.esm.js
var array_filter_x_esm = __webpack_require__(23);

// EXTERNAL MODULE: ./node_modules/array-some-x/dist/array-some-x.esm.js
var array_some_x_esm = __webpack_require__(34);

// EXTERNAL MODULE: ./node_modules/split-if-boxed-bug-x/dist/split-if-boxed-bug-x.esm.js + 1 modules
var split_if_boxed_bug_x_esm = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/to-length-x/dist/to-length-x.esm.js
var to_length_x_esm = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/to-object-x/dist/to-object-x.esm.js
var to_object_x_esm = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/require-object-coercible-x/dist/require-object-coercible-x.esm.js
var require_object_coercible_x_esm = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/array-every-x/dist/array-every-x.esm.js






var ne = [].every;
var nativeEvery = typeof ne === 'function' && ne;

var array_every_x_esm_test1 = function test1() {
  var spy = 0;
  var res = attempt_x_esm["a" /* default */].call([1, 2], nativeEvery, function spyAdd1(item) {
    spy += item;
    return true;
  });
  return res.threw === false && res.value === true && spy === 3;
};

var array_every_x_esm_test2 = function test2() {
  var spy = '';
  var res = attempt_x_esm["a" /* default */].call({}.constructor('abc'), nativeEvery, function spyAdd2(item, index) {
    spy += item;
    return index !== 2;
  });
  return res.threw === false && res.value === false && spy === 'abc';
};

var array_every_x_esm_test3 = function test3() {
  var spy = 0;
  var res = attempt_x_esm["a" /* default */].call(function getArgs() {
    /* eslint-disable-next-line prefer-rest-params */
    return arguments;
  }(1, 2, 3), nativeEvery, function spyAdd3(item, index) {
    spy += item;
    return index !== 1;
  });
  return res.threw === false && res.value === false && spy === 3;
};

var array_every_x_esm_test4 = function test4() {
  var spy = 0;
  var res = attempt_x_esm["a" /* default */].call({
    0: 1,
    1: 2,
    3: 3,
    4: 4,
    length: 4
  }, nativeEvery, function spyAdd4(item) {
    spy += item;
    return true;
  });
  return res.threw === false && res.value === true && spy === 6;
};

var array_every_x_esm_test5 = function test5() {
  var doc = typeof document !== 'undefined' && document;

  if (doc) {
    var spy = null;
    var fragment = doc.createDocumentFragment();
    var div = doc.createElement('div');
    fragment.appendChild(div);
    var res = attempt_x_esm["a" /* default */].call(fragment.childNodes, nativeEvery, function spyAssign(item) {
      spy = item;
    });
    return res.threw === false && res.value === false && spy === div;
  }

  return true;
};

var array_every_x_esm_test6 = function test6() {
  var isStrict = function returnIsStrict() {
    /* eslint-disable-next-line babel/no-invalid-this */
    return true.constructor(this) === false;
  }();

  if (isStrict) {
    var spy = null;
    var res = attempt_x_esm["a" /* default */].call([1], nativeEvery, function testThis() {
      /* eslint-disable-next-line babel/no-invalid-this */
      spy = typeof this === 'string';
    }, 'x');
    return res.threw === false && res.value === false && spy === true;
  }

  return true;
};

var array_every_x_esm_test7 = function test7() {
  var spy = {};
  var fn = 'return nativeEvery.call("foo", function (_, __, context) {' + 'if (castBoolean(context) === false || typeof context !== "object") {' + 'spy.value = true;}});';
  /* eslint-disable-next-line no-new-func */

  var res = Object(attempt_x_esm["a" /* default */])(Function('nativeEvery', 'spy', 'castBoolean', fn), nativeEvery, spy, true.constructor);
  return res.threw === false && res.value === false && spy.value !== true;
};

var array_every_x_esm_isWorking = true.constructor(nativeEvery) && array_every_x_esm_test1() && array_every_x_esm_test2() && array_every_x_esm_test3() && array_every_x_esm_test4() && array_every_x_esm_test5() && array_every_x_esm_test6() && array_every_x_esm_test7();

var array_every_x_esm_patchedEvery = function patchedEvery() {
  return function every(array, callBack
  /* , thisArg */
  ) {
    Object(require_object_coercible_x_esm["a" /* default */])(array);
    var args = [Object(assert_is_function_x_esm["a" /* default */])(callBack)];

    if (arguments.length > 2) {
      /* eslint-disable-next-line prefer-rest-params,prefer-destructuring */
      args[1] = arguments[2];
    }

    return nativeEvery.apply(array, args);
  };
};

var array_every_x_esm_implementation = function implementation() {
  return function every(array, callBack
  /* , thisArg */
  ) {
    var object = Object(to_object_x_esm["a" /* default */])(array); // If no callback function or if callback is not a callable function

    Object(assert_is_function_x_esm["a" /* default */])(callBack);
    var iterable = Object(split_if_boxed_bug_x_esm["a" /* default */])(object);
    var length = Object(to_length_x_esm["a" /* default */])(iterable.length);
    /* eslint-disable-next-line prefer-rest-params,no-void */

    var thisArg = arguments.length > 2 ? arguments[2] : void 0;
    var noThis = typeof thisArg === 'undefined';

    for (var i = 0; i < length; i += 1) {
      if (i in iterable) {
        var item = iterable[i];

        if ((noThis ? callBack(item, i, object) : callBack.call(thisArg, item, i, object)) === false) {
          return false;
        }
      }
    }

    return true;
  };
};
/**
 * This method tests whether all elements in the array pass the test implemented
 * by the provided function.
 *
 * @param {Array} array - The array to iterate over.
 * @param {Function} callBack - Function to test for each element.
 * @param {*} [thisArg] - Value to use as this when executing callback.
 * @throws {TypeError} If array is null or undefined.
 * @throws {TypeError} If callBack is not a function.
 * @returns {boolean} `true` if the callback function returns a truthy value for
 *  every array element; otherwise, `false`.
 */


var $every = array_every_x_esm_isWorking ? array_every_x_esm_patchedEvery() : array_every_x_esm_implementation();
/* harmony default export */ var array_every_x_esm = ($every);


// EXTERNAL MODULE: ./node_modules/array-map-x/dist/array-map-x.esm.js
var array_map_x_esm = __webpack_require__(38);

// CONCATENATED MODULE: ./node_modules/has-reflect-support-x/dist/has-reflect-support-x.esm.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Indicates if `Reflect`exists.
 * `true`, if it exists and creates the correct type, otherwise `false`.
 *
 * @type boolean
 */
/* harmony default export */ var has_reflect_support_x_esm = ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === 'object' && Reflect !== null);


// EXTERNAL MODULE: ./node_modules/assert-is-object-x/dist/assert-is-object-x.esm.js
var assert_is_object_x_esm = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/get-own-property-names-x/dist/get-own-property-names-x.esm.js
var get_own_property_names_x_esm = __webpack_require__(42);

// EXTERNAL MODULE: ./node_modules/get-own-property-symbols-x/dist/get-own-property-symbols-x.esm.js
var get_own_property_symbols_x_esm = __webpack_require__(37);

// CONCATENATED MODULE: ./node_modules/reflect-own-keys-x/dist/reflect-own-keys-x.esm.js







/* eslint-disable-next-line compat/compat */

var nativeOwnKeys = has_symbol_support_x_esm["a" /* default */] && typeof Reflect.ownKeys === 'function' && Reflect.ownKeys;
var reflect_own_keys_x_esm_isWorking;

if (nativeOwnKeys) {
  var reflect_own_keys_x_esm_isCorrectRes = function isCorrectRes(r, length) {
    return r.threw === false && Object(is_array_x_esm["a" /* default */])(r.value) && r.value.length === length;
  };

  var either = function either(r, a, b) {
    var x = r.value[0];
    var y = r.value[1];
    return x === a && y === b || x === b && y === a;
  };

  var reflect_own_keys_x_esm_res = Object(attempt_x_esm["a" /* default */])(nativeOwnKeys, 1);
  reflect_own_keys_x_esm_isWorking = reflect_own_keys_x_esm_res.threw;

  if (reflect_own_keys_x_esm_isWorking) {
    reflect_own_keys_x_esm_res = Object(attempt_x_esm["a" /* default */])(nativeOwnKeys, {
      a: 1,
      b: 2
    });
    reflect_own_keys_x_esm_isWorking = reflect_own_keys_x_esm_isCorrectRes(reflect_own_keys_x_esm_res, 2) && either(reflect_own_keys_x_esm_res, 'a', 'b');
  }

  if (reflect_own_keys_x_esm_isWorking && has_reflect_support_x_esm) {
    /* eslint-disable-next-line compat/compat */
    var symbol = Symbol('');
    var testObj = {
      a: 1
    };
    testObj[symbol] = 2;
    reflect_own_keys_x_esm_res = Object(attempt_x_esm["a" /* default */])(nativeOwnKeys, testObj);
    reflect_own_keys_x_esm_isWorking = reflect_own_keys_x_esm_isCorrectRes(reflect_own_keys_x_esm_res, 2) && either(reflect_own_keys_x_esm_res, 'a', symbol);
  }
}
/**
 * This method returns an array of the target object's own property keys.
 * Its return value is equivalent to Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target)).
 *
 * @param {*} target - The target object from which to get the own keys.
 * @throws {TypeError} If target is not an Object.
 * @returns {object} An Array of the target object's own property keys.
 */


var reflectOwnKeys;

if (reflect_own_keys_x_esm_isWorking) {
  reflectOwnKeys = nativeOwnKeys;
} else {
  var reflect_own_keys_x_esm_concat = [].concat;

  reflectOwnKeys = function ownKeys(target) {
    Object(assert_is_object_x_esm["a" /* default */])(target);
    return reflect_own_keys_x_esm_concat.call(Object(get_own_property_names_x_esm["a" /* default */])(target), Object(get_own_property_symbols_x_esm["a" /* default */])(target));
  };
}

var rok = reflectOwnKeys;
/* harmony default export */ var reflect_own_keys_x_esm = (rok);


// EXTERNAL MODULE: ./node_modules/json3/lib/json3.js
var json3 = __webpack_require__(65);

// EXTERNAL MODULE: ./node_modules/object-keys-x/dist/object-keys-x.esm.js
var object_keys_x_esm = __webpack_require__(18);

// EXTERNAL MODULE: ./node_modules/object-get-own-property-descriptor-x/dist/object-get-own-property-descriptor-x.esm.js
var object_get_own_property_descriptor_x_esm = __webpack_require__(29);

// EXTERNAL MODULE: ./node_modules/array-includes-x/dist/array-includes-x.esm.js
var array_includes_x_esm = __webpack_require__(24);

// EXTERNAL MODULE: ./node_modules/object-assign-x/dist/object-assign-x.esm.js
var object_assign_x_esm = __webpack_require__(58);

// EXTERNAL MODULE: ./node_modules/to-iso-string-x/dist/to-iso-string-x.esm.js + 1 modules
var to_iso_string_x_esm = __webpack_require__(79);

// EXTERNAL MODULE: ./node_modules/collections-x/dist/collections-x.esm.js + 3 modules
var collections_x_esm = __webpack_require__(31);

// EXTERNAL MODULE: ./node_modules/object-define-property-x/dist/object-define-property-x.esm.js
var object_define_property_x_esm = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/to-integer-x/dist/to-integer-x.esm.js + 1 modules
var to_integer_x_esm = __webpack_require__(25);

// EXTERNAL MODULE: ./node_modules/is-regexp-x/dist/is-regexp-x.esm.js
var is_regexp_x_esm = __webpack_require__(28);

// CONCATENATED MODULE: ./node_modules/string-starts-with-x/dist/string-starts-with-x.esm.js





var ERR_MSG = 'Cannot call method "startsWith" with a regex';
var sw = ERR_MSG.startsWith;
var nativeStartsWith = typeof sw === 'function' && sw;
var string_starts_with_x_esm_isWorking;

if (nativeStartsWith) {
  var string_starts_with_x_esm_res = attempt_x_esm["a" /* default */].call('/a/', nativeStartsWith, /a/);
  string_starts_with_x_esm_isWorking = string_starts_with_x_esm_res.threw;

  if (string_starts_with_x_esm_isWorking) {
    string_starts_with_x_esm_res = attempt_x_esm["a" /* default */].call('abc', nativeStartsWith, 'a', 1 / 0);
    string_starts_with_x_esm_isWorking = string_starts_with_x_esm_res.threw === false && string_starts_with_x_esm_res.value === false;
  }

  if (string_starts_with_x_esm_isWorking) {
    string_starts_with_x_esm_res = attempt_x_esm["a" /* default */].call(123, nativeStartsWith, '1');
    string_starts_with_x_esm_isWorking = string_starts_with_x_esm_res.threw === false && string_starts_with_x_esm_res.value === true;
  }

  if (string_starts_with_x_esm_isWorking) {
    string_starts_with_x_esm_res = attempt_x_esm["a" /* default */].call(null, nativeStartsWith, 'n');
    string_starts_with_x_esm_isWorking = string_starts_with_x_esm_res.threw;
  }
}
/**
 * This method determines whether a string begins with the characters of a
 * specified string, returning true or false as appropriate.
 *
 * @param {string} string - The string to be search.
 * @throws {TypeError} If string is null or undefined.
 * @param {string} searchString - The characters to be searched for at the start of this string.
 * @throws {TypeError} If searchString is a RegExp.
 * @param {number} [position] -The position in this string at which to begin searching for searchString; defaults to 0.
 * @returns {boolean} `true` if the given characters are found at the beginning of the string; otherwise, `false`.
 */


var $startsWith;

if (string_starts_with_x_esm_isWorking) {
  $startsWith = function startsWith(string, searchString) {
    var str = Object(require_object_coercible_x_esm["a" /* default */])(string);

    if (Object(is_regexp_x_esm["a" /* default */])(searchString)) {
      throw new TypeError(ERR_MSG);
    }

    var args = [searchString];

    if (arguments.length > 2) {
      /* eslint-disable-next-line prefer-rest-params,prefer-destructuring */
      args[1] = arguments[2];
    }

    return nativeStartsWith.apply(str, args);
  };
} else {
  // Firefox (< 37?) and IE 11 TP have a noncompliant startsWith implementation
  $startsWith = function startsWith(string, searchString) {
    var str = Object(to_string_x_esm["a" /* default */])(Object(require_object_coercible_x_esm["a" /* default */])(string));

    if (Object(is_regexp_x_esm["a" /* default */])(searchString)) {
      throw new TypeError(ERR_MSG);
    }

    var searchStr = Object(to_string_x_esm["a" /* default */])(searchString);
    /* eslint-disable-next-line prefer-rest-params */

    var position = arguments.length > 2 ? Object(to_integer_x_esm["a" /* default */])(arguments[2]) : 0;
    var start = position > 0 ? position : 0;
    return str.slice(start, start + searchStr.length) === searchStr;
  };
}

var ssw = $startsWith;
/* harmony default export */ var string_starts_with_x_esm = (ssw);


// CONCATENATED MODULE: ./node_modules/string-includes-x/dist/string-includes-x.esm.js




var ni = ''.includes;
var nativeIncludes = typeof ni === 'function' && ni;
var string_includes_x_esm_isWorking;

if (nativeIncludes) {
  var string_includes_x_esm_res = attempt_x_esm["a" /* default */].call('/a/', nativeIncludes, /a/);
  string_includes_x_esm_isWorking = string_includes_x_esm_res.threw;

  if (string_includes_x_esm_isWorking) {
    string_includes_x_esm_res = attempt_x_esm["a" /* default */].call('abc', nativeIncludes, 'a', Infinity);
    string_includes_x_esm_isWorking = string_includes_x_esm_res.threw === false && string_includes_x_esm_res.value === false;
  }

  if (string_includes_x_esm_isWorking) {
    string_includes_x_esm_res = attempt_x_esm["a" /* default */].call(123, nativeIncludes, '2');
    string_includes_x_esm_isWorking = string_includes_x_esm_res.threw === false && string_includes_x_esm_res.value === true;
  }

  if (string_includes_x_esm_isWorking) {
    string_includes_x_esm_res = attempt_x_esm["a" /* default */].call(null, nativeIncludes, 'u');
    string_includes_x_esm_isWorking = string_includes_x_esm_res.threw;
  }
}
/**
 * This method determines whether one string may be found within another string,
 * returning true or false as appropriate.
 *
 * @param {string} string - The target string.
 * @throws {TypeError} If target is null or undefined.
 * @param {string} searchString - A string to be searched for within the
 *  target string.
 * @throws {TypeError} If searchString is a RegExp.
 * @param {number} [position] -The position within the string at which to begin
 *  searching for searchString.(defaults to 0).
 * @returns {boolean} `true` if the given string is found anywhere within the
 *  search string; otherwise, `false` if not.
 */


var $includes;

if (string_includes_x_esm_isWorking) {
  $includes = function includes(string, searchString) {
    var args = [searchString];

    if (arguments.length > 2) {
      /* eslint-disable-next-line prefer-rest-params,prefer-destructuring */
      args[1] = arguments[2];
    }

    return nativeIncludes.apply(string, args);
  };
} else {
  var indexOf = String.prototype.indexOf;

  $includes = function includes(string, searchString) {
    var str = Object(to_string_x_esm["a" /* default */])(Object(require_object_coercible_x_esm["a" /* default */])(string));

    if (Object(is_regexp_x_esm["a" /* default */])(searchString)) {
      throw new TypeError('"includes" does not accept a RegExp');
    }

    var args = [Object(to_string_x_esm["a" /* default */])(searchString)];

    if (arguments.length > 2) {
      /* eslint-disable-next-line prefer-rest-params,prefer-destructuring */
      args[1] = arguments[2];
    } // Somehow this trick makes method 100% compat with the spec.


    return indexOf.apply(str, args) !== -1;
  };
}

var inc = $includes;
/* harmony default export */ var string_includes_x_esm = (inc);


// EXTERNAL MODULE: ./node_modules/math-clamp-x/dist/math-clamp-x.esm.js
var math_clamp_x_esm = __webpack_require__(54);

// EXTERNAL MODULE: ./node_modules/array-like-slice-x/dist/array-like-slice-x.esm.js
var array_like_slice_x_esm = __webpack_require__(53);

// CONCATENATED MODULE: ./node_modules/array-difference-x/dist/array-difference-x.esm.js
function array_difference_x_esm_newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }





 // eslint-disable jsdoc/check-param-names
// noinspection JSCommentMatchesSignature

/**
 * This method creates an array of array values not included in the other given
 * arrays using SameValueZero for equality comparisons. The order and references
 * of result values are determined by the first array.
 *
 * @param {Array} array - The array to inspect.
 * @throws {TypeError} If array is null or undefined.
 * @param {...Array} [exclude] - The values to exclude.
 * @returns {Array} Returns the new array of filtered values.
 */
// eslint-enable jsdoc/check-param-names

var array_difference_x_esm_difference = function difference(array) {
  var _this = this;

  if (Object(is_nil_x_esm["a" /* default */])(array)) {
    return [];
  }
  /* eslint-disable-next-line prefer-rest-params */


  var excludes = Object(array_like_slice_x_esm["a" /* default */])(arguments, 1);
  return Object(array_filter_x_esm["a" /* default */])(array, function (value) {
    var _this2 = this;

    array_difference_x_esm_newArrowCheck(this, _this);

    return Object(array_some_x_esm["a" /* default */])(excludes, function (exclude) {
      array_difference_x_esm_newArrowCheck(this, _this2);

      return Object(is_nil_x_esm["a" /* default */])(exclude) === false && Object(array_includes_x_esm["a" /* default */])(exclude, value);
    }.bind(this)) === false;
  }.bind(this));
};

/* harmony default export */ var array_difference_x_esm = (array_difference_x_esm_difference);


// CONCATENATED MODULE: ./node_modules/array-intersection-x/dist/array-intersection-x.esm.js
function array_intersection_x_esm_newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }






var shift = Array.prototype.shift;

var notNill = function notNil(value) {
  return Object(is_nil_x_esm["a" /* default */])(value) === false;
}; // eslint-disable jsdoc/check-param-names
// noinspection JSCommentMatchesSignature

/**
 * This method creates an array of unique values that are included in all given
 * arrays using SameValueZero for equality comparisons. The order and references
 * of result values are determined by the first array.
 *
 * @param {...Array} [array] - The arrays to inspect.
 * @returns {Array} Returns the new array of intersecting values.
 */
// eslint-enable jsdoc/check-param-names


var array_intersection_x_esm_intersection = function intersection() {
  var _this = this;

  /* eslint-disable-next-line prefer-rest-params */
  var arrays = Object(array_filter_x_esm["a" /* default */])(arguments, notNill);

  if (arrays.length < 1) {
    return [];
  }

  return Object(array_reduce_x_esm["a" /* default */])(shift.call(arrays), function (acc, value) {
    var _this2 = this;

    array_intersection_x_esm_newArrowCheck(this, _this);

    var isExcluded = Object(array_some_x_esm["a" /* default */])(arrays, function (array) {
      array_intersection_x_esm_newArrowCheck(this, _this2);

      return Object(array_includes_x_esm["a" /* default */])(array, value) === false;
    }.bind(this)) === false;

    if (isExcluded && Object(array_includes_x_esm["a" /* default */])(acc, value) === false) {
      acc[acc.length] = value;
    }

    return acc;
  }.bind(this), []);
};

/* harmony default export */ var array_intersection_x_esm = (array_intersection_x_esm_intersection);


// CONCATENATED MODULE: ./node_modules/array-union-x/dist/array-union-x.esm.js




var array_union_x_esm_addNotIncluded = function addNotIncluded(acc, value) {
  if (Object(array_includes_x_esm["a" /* default */])(acc, value) === false) {
    acc[acc.length] = value;
  }

  return acc;
};

var array_union_x_esm_reduceArgs = function reduceArgs(acc, arg) {
  return Object(is_nil_x_esm["a" /* default */])(arg) ? acc : Object(array_reduce_x_esm["a" /* default */])(arg, array_union_x_esm_addNotIncluded, acc);
};
/**
 * This method creates an array of unique values, in order, from all given
 * arrays using SameValueZero for equality comparisons.
 *
 * @param {...Array} [args] - The arrays to inspect.
 * @returns {Array} Returns the new array of combined values.
 */


var array_union_x_esm_union = function union() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return Object(array_reduce_x_esm["a" /* default */])(args, array_union_x_esm_reduceArgs, []);
};

/* harmony default export */ var array_union_x_esm = (array_union_x_esm_union);


// CONCATENATED MODULE: ./node_modules/inspect-x/dist/inspect-x.esm.js
var inspect_x_esm_this = undefined;

function inspect_x_esm_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { inspect_x_esm_typeof = function _typeof(obj) { return typeof obj; }; } else { inspect_x_esm_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return inspect_x_esm_typeof(obj); }

function inspect_x_esm_newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }




















































/** @type {RegExpConstructor} */

var RegExpCtr = /none/.constructor;
/** @type {BooleanConstructor} */

var NumberCtr = 0 .constructor;
/** @type {ArrayConstructor} */

var ArrayCtr = [].constructor;
/** @type {StringConstructor} */

var StringCtr = ''.constructor;
/** @type {ObjectConstructor} */

var castObject = {}.constructor;
/** @type {BooleanConstructor} */

var castBoolean = true.constructor;
var call = is_function_x_esm["a" /* default */].call;
/* eslint-disable-next-line compat/compat */

var hasSet = typeof Set === 'function' && Object(is_set_x_esm["a" /* default */])(new Set());
/* eslint-disable-next-line compat/compat */

var testSet = hasSet && new Set(['SetSentinel']);
/* eslint-disable-next-line compat/compat */

var setForEach = hasSet && bind_x_esm(call, Set.prototype.forEach);
/* eslint-disable-next-line compat/compat */

var setValues = hasSet && bind_x_esm(call, Set.prototype.values);
/* eslint-disable-next-line compat/compat */

var hasMap = typeof Map === 'function' && Object(is_map_x_esm["a" /* default */])(new Map());
/* eslint-disable-next-line compat/compat */

var testMap = hasMap && new Map([[1, 'MapSentinel']]);
/* eslint-disable-next-line compat/compat */

var mapForEach = hasMap && bind_x_esm(call, Map.prototype.forEach);
/* eslint-disable-next-line compat/compat */

var mapValues = hasMap && bind_x_esm(call, Map.prototype.values);
/* eslint-disable-next-line compat/compat */

var symbolToString = has_symbol_support_x_esm["a" /* default */] && bind_x_esm(call, Symbol.prototype.toString);
/* eslint-disable-next-line compat/compat */

var symbolValueOf = has_symbol_support_x_esm["a" /* default */] && bind_x_esm(call, Symbol.prototype.valueOf);
var objectSeal = Object(is_function_x_esm["a" /* default */])(castObject.seal) ? castObject.seal : function seal(value) {
  return value;
};
var regexpToString = bind_x_esm(call, RegExpCtr.prototype.toString);
var regexpTest = bind_x_esm(call, RegExpCtr.prototype.test);
var errorToString = bind_x_esm(call, Error.prototype.toString);
var numberToString = bind_x_esm(call, NumberCtr.prototype.toString);
var booleanToString = bind_x_esm(call, castBoolean.prototype.toString);
var inspect_x_esm_concat = bind_x_esm(call, ArrayCtr.prototype.concat, []);
var join = bind_x_esm(call, ArrayCtr.prototype.join);
var push = bind_x_esm(call, ArrayCtr.prototype.push);
var getTime = bind_x_esm(call, Date.prototype.getTime);
var replace = bind_x_esm(call, StringCtr.prototype.replace);
var strSlice = bind_x_esm(call, StringCtr.prototype.slice);
var propertyIsEnumerable = bind_x_esm(call, castObject.prototype.propertyIsEnumerable);
/* eslint-disable-next-line compat/compat */

var customInspectSymbol = has_symbol_support_x_esm["a" /* default */] ? Symbol('inspect.custom') : '_inspect.custom_';
/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 * Values may supply their own custom `inspect(depth, opts)` functions,
 * when called they receive the current depth in the recursive inspection,
 * as well as the options object passed to `inspect`.
 *
 * @param {object} obj - The object to print out.
 * @param {object} [opts] - Options object that alters the out.
 * @returns {string} The string representation.
 */

var inspect;
var fmtValue;

var isFalsey = function _isFalsey(value) {
  return castBoolean(value) === false;
};

var supportsClasses;

try {
  /* eslint-disable-next-line no-new-func */
  Function('return class My {}')();
  supportsClasses = true;
} catch (ignore) {// empty
}

var isClass = function _isClass(value) {
  return supportsClasses ? Object(is_function_x_esm["a" /* default */])(value, true) && Object(is_function_x_esm["a" /* default */])(value) === false : false;
};

var supportsGetSet;

try {
  /* eslint-disable-next-line no-void */
  var testVar = void 0;
  var testObject = Object(object_define_property_x_esm["a" /* default */])({}, 'defaultOptions', {
    get: function get() {
      return testVar;
    },
    set: function set(val) {
      testVar = val;
      return testVar;
    }
  });
  testObject.defaultOptions = 'test';
  supportsGetSet = testVar === 'test' && testObject.defaultOptions === 'test';
} catch (ignore) {// empty
}

var pluralEnding = function _pluralEnding(number) {
  return number > 1 ? 's' : '';
};

var isDigits = function _isDigits(key) {
  return regexpTest(/^\d+$/, key);
};

var appendMissing = function _appendMissing(array, values) {
  return inspect_x_esm_concat(array, array_difference_x_esm(values, array));
};

var promote = function _promote(array, values) {
  return inspect_x_esm_concat(values, array_difference_x_esm(array, values));
};

var missingError;
var errProps;

try {
  // noinspection ExceptionCaughtLocallyJS
  throw new Error('test');
} catch (e) {
  errProps = array_union_x_esm(Object(object_keys_x_esm["a" /* default */])(new Error()), Object(object_keys_x_esm["a" /* default */])(e));
  var errorString = errorToString(e);
  var errorStack = e.stack;

  if (errorStack) {
    var errorRx = new RegExpCtr("^".concat(errorString));

    if (regexpTest(errorRx, errorStack) === false) {
      missingError = true;
    }
  }
}

if (is_date_object_default()(Date.prototype)) {
  isDate = function _isDate(value) {
    try {
      getTime(value);
      return true;
    } catch (ignore) {
      return false;
    }
  };
}

var shimmedDate;
var dateProps = Object(object_keys_x_esm["a" /* default */])(Date);

if (dateProps.length > 0) {
  var datePropsCheck = ['now', 'UTC', 'parse'];
  shimmedDate = array_every_x_esm(datePropsCheck, function (prop) {
    inspect_x_esm_newArrowCheck(this, inspect_x_esm_this);

    return Object(array_includes_x_esm["a" /* default */])(dateProps, prop);
  }.bind(undefined)) && Object(array_includes_x_esm["a" /* default */])(Object(object_keys_x_esm["a" /* default */])(new Date()), 'constructor');
}
/* eslint-disable-next-line lodash/prefer-noop */


var testFunc1 = function test1() {};

var fnSupportsName = testFunc1.name === 'test1';
var hiddenFuncCtr = Object(array_includes_x_esm["a" /* default */])(reflect_own_keys_x_esm(testFunc1.prototype), 'constructor') === false;
var wantedFnProps = ['length', 'name', 'prototype'];
var fnPropsCheck = fnSupportsName ? Object(array_slice_x_esm["a" /* default */])(wantedFnProps) : Object(array_filter_x_esm["a" /* default */])(wantedFnProps, function (prop) {
  inspect_x_esm_newArrowCheck(this, inspect_x_esm_this);

  return prop !== 'name';
}.bind(undefined));
var funcKeys = reflect_own_keys_x_esm(testFunc1);
var unwantedFnProps = array_intersection_x_esm(['arguments', 'caller'], funcKeys);
var mustFilterFnProps = array_difference_x_esm(fnPropsCheck, funcKeys).length > 0;

if (mustFilterFnProps === false) {
  mustFilterFnProps = Object(array_some_x_esm["a" /* default */])(array_intersection_x_esm(funcKeys, wantedFnProps), function (key, index) {
    inspect_x_esm_newArrowCheck(this, inspect_x_esm_this);

    return wantedFnProps[index] !== key;
  }.bind(undefined));
}

var inspectDefaultOptions = objectSeal({
  breakLength: 60,
  colors: false,
  customInspect: true,
  depth: 2,
  maxArrayLength: 100,
  showHidden: false,
  showProxy: false
});

var isBooleanType = function _isBooleanType(arg) {
  return typeof arg === 'boolean';
};

var isNumberType = function _isNumberType(arg) {
  return typeof arg === 'number';
};

var isStringType = function _isStringType(arg) {
  return typeof arg === 'string';
};

var isSymbolType = function _isSymbolType(arg) {
  return inspect_x_esm_typeof(arg) === 'symbol';
};

var isMapIterator = function _isMapIterator(value) {
  if (hasMap === false || Object(is_object_like_x_esm["a" /* default */])(value) === false) {
    return false;
  }

  try {
    return value.next.call(mapValues(testMap)).value === 'MapSentinel';
  } catch (ignore) {// empty
  }

  return false;
};

var isSetIterator = function _isSetIterator(value) {
  if (hasSet === false || Object(is_object_like_x_esm["a" /* default */])(value) === false) {
    return false;
  }

  try {
    return value.next.call(setValues(testSet)).value === 'SetSentinel';
  } catch (ignore) {// empty
  }

  return false;
};

var filterIndexes = function _filterIndexes(keys, length) {
  var _this2 = this;

  return Object(array_filter_x_esm["a" /* default */])(keys, function (key) {
    inspect_x_esm_newArrowCheck(this, _this2);

    return isSymbolType(key) || key < 0 || key > length || key % 1 !== 0;
  }.bind(this));
};

var stylizeWithColor = function _stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    var colors = inspect.colors[style];
    return "\x1B[".concat(colors[0], "m").concat(str, "\x1B[").concat(colors[1], "m");
  }

  return str;
};

var stylizeNoColor = function _stylizeNoColor(str) {
  return str;
};

var getNameSep = function _getNameSep(obj) {
  var name = get_function_name_x_esm(obj);
  return name ? ": ".concat(name) : name;
};

var getConstructorOf = function _getConstructorOf(obj) {
  var o = obj;
  var maxLoop = 100;

  while (Object(is_nil_x_esm["a" /* default */])(o) === false && maxLoop >= 0) {
    o = castObject(o);
    var descriptor = Object(object_get_own_property_descriptor_x_esm["a" /* default */])(o, 'constructor');

    if (descriptor && descriptor.value) {
      return descriptor.value;
    }

    o = Object(get_prototype_of_x_esm["a" /* default */])(o);
    maxLoop -= 1;
  }

  return null;
};

var isSub = function _isSub(value) {
  if (supportsClasses !== true || is_primitive_default()(value)) {
    return false;
  }

  var constructor = getConstructorOf(value);
  return Object(is_function_x_esm["a" /* default */])(constructor) === false && Object(is_function_x_esm["a" /* default */])(constructor, true);
};

var getSubName = function _getSubName(value, name) {
  if (isSub(value)) {
    var subName = get_function_name_x_esm(getConstructorOf(value));

    if (subName && subName !== name) {
      return subName;
    }
  }

  return name || get_function_name_x_esm(getConstructorOf(value));
};

var fmtNumber = function _fmtNumber(ctx, value) {
  // Format -0 as '-0'.
  return ctx.stylize(object_is_default()(value, -0) ? '-0' : numberToString(value), 'number');
};

var fmtPrimitiveReplacers = [[/^"|"$/g, ''], [/'/g, "\\'"], [/\\"/g, '"']];

var fmtPrimitiveReplace = function _fmtPrimitiveReplace(acc, pair) {
  return replace(acc, pair[0], pair[1]);
};

var fmtPrimitive = function _fmtPrimitive(ctx, value) {
  if (Object(is_nil_x_esm["a" /* default */])(value)) {
    var str = Object(to_string_x_esm["a" /* default */])(value);
    return ctx.stylize(str, str);
  }

  if (isStringType(value)) {
    return ctx.stylize("'".concat(Object(array_reduce_x_esm["a" /* default */])(fmtPrimitiveReplacers, fmtPrimitiveReplace, Object(json3["stringify"])(value)), "'"), 'string');
  }

  if (isNumberType(value)) {
    return fmtNumber(ctx, value);
  }

  if (isBooleanType(value)) {
    return ctx.stylize(booleanToString(value), 'boolean');
  } // es6 symbol primitive


  if (isSymbolType(value)) {
    return ctx.stylize(symbolToString(value), 'symbol');
  }
  /* eslint-disable-next-line no-void */


  return void 0;
};

var fmtPrimNoColor = function _fmtPrimNoColor(ctx, value) {
  var stylize = ctx.stylize;
  ctx.stylize = stylizeNoColor;
  var str = fmtPrimitive(ctx, value);
  ctx.stylize = stylize;
  return str;
};

var recurse = function _recurse(depth) {
  return depth === null ? null : depth - 1;
};

var fmtPropReplacers = [[/'/g, "\\'"], [/\\"/g, '"'], [/(^"|"$)/g, "'"], [/\\\\/g, '\\']];

var fmtPropReplace = function _fmtPropReplace(acc, pair) {
  return replace(acc, pair[0], pair[1]);
};

var fmtPropReplacer1 = [/\n/g, '\n  '];
var fmtPropReplacer2 = [/(^|\n)/g, '\n   '];
var fmtPropTestRx = /^"[\w$]+"$/;

var fmtProp = function _fmtProp(ctx, value, depth, visibleKeys, key, arr) {
  var desc = Object(object_get_own_property_descriptor_x_esm["a" /* default */])(value, key) || {
    value: value[key]
  };
  /*
  // this is a fix for broken FireFox, should not be needed with es6-shim
  if (key === 'size' && (isSet(value) || isMap(value) && isFunction(value.size)) {
    desc.value = value.size();
  }
  */

  var name;

  if (Object(array_includes_x_esm["a" /* default */])(visibleKeys, key) === false) {
    if (key === 'BYTES_PER_ELEMENT' && isFalsey(value.BYTES_PER_ELEMENT) && is_typed_array_default()(value)) {
      var _constructor = getConstructorOf(value);

      if (_constructor) {
        desc.value = _constructor.BYTES_PER_ELEMENT;
      }
    } else if (isSymbolType(key)) {
      name = "[".concat(ctx.stylize(symbolToString(key), 'symbol'), "]");
    } else {
      name = "[".concat(key, "]");
    }
  }

  var str;

  if (desc.get) {
    str = ctx.stylize(desc.set ? '[Getter/Setter]' : '[Getter]', 'special');
  } else if (desc.set) {
    str = ctx.stylize('[Setter]', 'special');
  } else {
    var formattedStr = fmtValue(ctx, desc.value, recurse(depth), key === 'prototype');

    if (string_includes_x_esm(formattedStr, '\n')) {
      var replacer = arr ? fmtPropReplacer1 : fmtPropReplacer2;
      str = replace(formattedStr, replacer[0], replacer[1]);
    } else {
      str = formattedStr;
    }
  }

  if (typeof name === 'undefined') {
    if (arr && isDigits(key)) {
      return str;
    }

    var serialisedKey = Object(json3["stringify"])(key);

    if (regexpTest(fmtPropTestRx, serialisedKey)) {
      name = ctx.stylize(strSlice(serialisedKey, 1, -1), 'name');
    } else {
      name = ctx.stylize(Object(array_reduce_x_esm["a" /* default */])(fmtPropReplacers, fmtPropReplace, serialisedKey), 'string');
    }
  }

  return "".concat(name, ": ").concat(str);
};

var fmtObject = function _fmtObject(ctx, value, depth, visibleKeys, keys) {
  return Object(array_map_x_esm["a" /* default */])(keys, function _mapFmObject(key) {
    return fmtProp(ctx, value, depth, visibleKeys, key, false);
  });
};

var getMoreItemText = function _getMoreItemText(remaining) {
  return "... ".concat(remaining, " more item").concat(pluralEnding(remaining));
};

var getEmptyItemText = function _getEmptyItemText(emptyItems) {
  return "<".concat(emptyItems, " empty item").concat(pluralEnding(emptyItems), ">");
};

var filterOutIndexes = function _filterOutIndexes(keys) {
  var _this3 = this;

  return Object(array_filter_x_esm["a" /* default */])(keys, function (key) {
    inspect_x_esm_newArrowCheck(this, _this3);

    return isSymbolType(key) || isDigits(key) === false;
  }.bind(this));
};

var fmtArray = function _fmtArray(ctx, value, depth, visibleKeys, keys) {
  var _this4 = this;

  var length = value.length;
  var maxLength = Object(math_clamp_x_esm["a" /* default */])(length, 0, ctx.maxArrayLength);
  var lastIndex = 0;
  var nextIndex = 0;
  var output = [];
  var moreItems = Object(array_some_x_esm["a" /* default */])(value, function (item, index) {
    inspect_x_esm_newArrowCheck(this, _this4);

    if (index !== nextIndex) {
      push(output, ctx.stylize(getEmptyItemText(index - lastIndex - 1), 'undefined'));
    }

    push(output, fmtProp(ctx, value, depth, visibleKeys, numberToString(index), true));
    lastIndex = index;
    nextIndex = index + 1;
    return nextIndex >= maxLength;
  }.bind(this));
  var remaining = length - nextIndex;

  if (remaining > 0) {
    if (moreItems) {
      push(output, getMoreItemText(remaining));
    } else {
      push(output, ctx.stylize(getEmptyItemText(remaining), 'undefined'));
    }
  }

  var fmtdProps = Object(array_map_x_esm["a" /* default */])(filterOutIndexes(keys), function (key) {
    inspect_x_esm_newArrowCheck(this, _this4);

    return fmtProp(ctx, value, depth, visibleKeys, key, true);
  }.bind(this));
  return inspect_x_esm_concat(output, fmtdProps);
};

var fmtTypedArray = function _fmtTypedArray(ctx, value, depth, visibleKeys, keys) {
  var _this5 = this;

  var length = value.length;
  var maxLength = Object(math_clamp_x_esm["a" /* default */])(length, 0, ctx.maxArrayLength);
  var output = [];
  output.length = maxLength;
  var moreItems = Object(array_some_x_esm["a" /* default */])(value, function (item, index) {
    inspect_x_esm_newArrowCheck(this, _this5);

    if (index >= maxLength) {
      return true;
    }

    output[index] = fmtNumber(ctx, value[index]);
    return false;
  }.bind(this));

  if (moreItems) {
    push(output, getMoreItemText(length - maxLength));
  }

  var fmtdProps = Object(array_map_x_esm["a" /* default */])(filterOutIndexes(keys), function (key) {
    inspect_x_esm_newArrowCheck(this, _this5);

    return fmtProp(ctx, value, depth, visibleKeys, key, true);
  }.bind(this));
  return inspect_x_esm_concat(output, fmtdProps);
};

var fmtSet = function _fmtSet(ctx, value, depth, visibleKeys, keys) {
  var _this6 = this;

  var output = [];
  setForEach(value, function (v) {
    inspect_x_esm_newArrowCheck(this, _this6);

    push(output, fmtValue(ctx, v, recurse(depth)));
  }.bind(this));
  var fmtdProps = Object(array_map_x_esm["a" /* default */])(keys, function (key) {
    inspect_x_esm_newArrowCheck(this, _this6);

    return fmtProp(ctx, value, depth, visibleKeys, key, false);
  }.bind(this));
  return inspect_x_esm_concat(output, fmtdProps);
};

var fmtMap = function _fmtMap(ctx, value, depth, visibleKeys, keys) {
  var _this7 = this;

  var r = recurse(depth);
  var output = [];
  mapForEach(value, function (v, k) {
    inspect_x_esm_newArrowCheck(this, _this7);

    push(output, "".concat(fmtValue(ctx, k, r), " => ").concat(fmtValue(ctx, v, r)));
  }.bind(this));
  var fmtdProps = Object(array_map_x_esm["a" /* default */])(keys, function (key) {
    inspect_x_esm_newArrowCheck(this, _this7);

    return fmtProp(ctx, value, depth, visibleKeys, key, false);
  }.bind(this));
  return inspect_x_esm_concat(output, fmtdProps);
};

var reSingle = new RegExpCtr("\\{[".concat(white_space_x_esm["a" /* default */], "]+\\}"));
/* eslint-disable-next-line no-control-regex */

var lengthReduceRx = /\u001b\[\d\d?m/g;

var lengthReduce = function _lengthReduce(prev, cur) {
  return prev + replace(cur, lengthReduceRx, '').length + 1;
};

var reduceToSingleString = function _reduceToSingleString(out, base, braces, breakLength) {
  var result;

  if (Object(array_reduce_x_esm["a" /* default */])(out, lengthReduce, 0) > breakLength) {
    // If the opening "brace" is too large, like in the case of "Set {",
    // we need to force the first item to be on the next line or the
    // items will not line up correctly.
    var layoutBase = base === '' && braces[0].length === 1 ? '' : "".concat(base, "\n ");
    result = "".concat(braces[0] + layoutBase, " ").concat(join(out, ',\n  '), " ").concat(braces[1]);
  } else {
    result = "".concat(braces[0] + base, " ").concat(join(out, ', '), " ").concat(braces[1]);
  }

  return replace(result, reSingle, '{}');
};

var fmtDate = function _fmtDate(value) {
  return is_nan_default()(getTime(value)) ? 'Invalid Date' : Object(to_iso_string_x_esm["a" /* default */])(value);
};

var fmtError = function _fmtError(value) {
  var stack = value.stack;

  if (stack) {
    if (supportsClasses) {
      var subName = getSubName(value);

      if (subName && string_starts_with_x_esm(stack, subName) === false) {
        var msg = value.message;
        return replace(stack, errorToString(value), subName + (msg ? ": ".concat(msg) : ''));
      }
    } else if (missingError) {
      return "".concat(errorToString(value), "\n").concat(stack);
    }
  }

  return stack || "[".concat(errorToString(value), "]");
};

var typedArrayKeys = ['BYTES_PER_ELEMENT', 'length', 'byteLength', 'byteOffset', 'buffer'];
var dataViewKeys = ['byteLength', 'byteOffset', 'buffer'];
var arrayBufferKeys = ['byteLength'];
var collectionKeys = ['size'];
var arrayKeys = ['length'];
var errorKeys = ['message'];

fmtValue = function _fmtValue(ctx, value, depth, isProto) {
  var _this8 = this;

  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect && value) {
    var maybeCustomInspect = value[customInspectSymbol] || value.inspect;

    if (Object(is_function_x_esm["a" /* default */])(maybeCustomInspect)) {
      // Filter out the util module, its inspect function is special
      if (maybeCustomInspect !== inspect) {
        var _constructor2 = getConstructorOf(value); // Also filter out any prototype objects using the circular check.


        var isCircular = _constructor2 && _constructor2.prototype === value;

        if (isCircular === false) {
          var ret = maybeCustomInspect.call(value, depth, ctx); // If the custom inspection method returned `this`, don't go into
          // infinite recursion.

          if (ret !== value) {
            return isStringType(ret) ? ret : fmtValue(ctx, ret, depth);
          }
        }
      }
    }
  } // Primitive types cannot have properties


  var primitive = fmtPrimitive(ctx, value);

  if (primitive) {
    return primitive;
  } // Look up the keys of the object.


  var visibleKeys = Object(object_keys_x_esm["a" /* default */])(value);

  if (visibleKeys.length > 0) {
    if (shimmedDate && is_date_object_default()(value)) {
      visibleKeys = Object(array_filter_x_esm["a" /* default */])(visibleKeys, function (key) {
        inspect_x_esm_newArrowCheck(this, _this8);

        return key !== 'constructor';
      }.bind(this));
    } else if (errProps.length > 0 && Object(is_error_x_esm["a" /* default */])(value)) {
      visibleKeys = Object(array_filter_x_esm["a" /* default */])(visibleKeys, function (key) {
        inspect_x_esm_newArrowCheck(this, _this8);

        return Object(array_includes_x_esm["a" /* default */])(errProps, key) === false;
      }.bind(this));
    }
  }

  var keys;

  if (ctx.showHidden) {
    keys = reflect_own_keys_x_esm(value);

    if (Object(is_error_x_esm["a" /* default */])(value)) {
      if (Object(array_includes_x_esm["a" /* default */])(keys, 'message') === false) {
        keys = promote(keys, errorKeys);
      }
    } else if ((unwantedFnProps.length > 0 || mustFilterFnProps) && Object(is_function_x_esm["a" /* default */])(value)) {
      if (unwantedFnProps.length > 0) {
        keys = array_difference_x_esm(keys, unwantedFnProps);
      }

      if (mustFilterFnProps) {
        var keysDiff = array_difference_x_esm(keys, fnPropsCheck);
        var missingFnProps = array_difference_x_esm(fnPropsCheck, visibleKeys, keysDiff);
        keys = inspect_x_esm_concat(missingFnProps, keysDiff);
      }
    } else if (hiddenFuncCtr && isProto && Object(is_function_x_esm["a" /* default */])(getConstructorOf(value))) {
      if (Object(array_includes_x_esm["a" /* default */])(visibleKeys, 'constructor') === false && Object(array_includes_x_esm["a" /* default */])(keys, 'constructor') === false) {
        keys = promote(keys, 'constructor');
      }
    }
  } else {
    var enumSymbols = Object(array_filter_x_esm["a" /* default */])(Object(get_own_property_symbols_x_esm["a" /* default */])(value), function (key) {
      inspect_x_esm_newArrowCheck(this, _this8);

      return propertyIsEnumerable(value, key);
    }.bind(this));
    keys = inspect_x_esm_concat(visibleKeys, enumSymbols);
  }

  if (is_string_default()(value)) {
    // for boxed Strings, we have to remove the 0-n indexed entries,
    // since they just noisy up the out and are redundant
    keys = filterIndexes(keys, value.length);
    visibleKeys = filterIndexes(visibleKeys, value.length);
  } else if (Object(is_array_buffer_x_esm["a" /* default */])(value)) {
    keys = filterIndexes(keys, value.byteLength);
    visibleKeys = filterIndexes(visibleKeys, value.byteLength);
  }

  var name;
  var formatted; // Some type of object without properties can be shortcutted.

  if (keys.length < 1) {
    // This could be a boxed primitive (new String(), etc.)
    if (is_string_default()(value)) {
      return ctx.stylize("[".concat(getSubName(value, 'String'), ": ").concat(fmtPrimNoColor(ctx, value.valueOf()), "]"), 'string');
    }

    if (is_number_object_default()(value)) {
      return ctx.stylize("[".concat(getSubName(value, 'Number'), ": ").concat(fmtPrimNoColor(ctx, value.valueOf()), "]"), 'number');
    }

    if (is_boolean_object_default()(value)) {
      return ctx.stylize("[".concat(getSubName(value, 'Boolean'), ": ").concat(fmtPrimNoColor(ctx, value.valueOf()), "]"), 'boolean');
    }

    if (is_symbol_default()(value)) {
      return ctx.stylize("[Symbol: ".concat(fmtPrimNoColor(ctx, symbolValueOf(value)), "]"), 'symbol');
    }

    if (is_async_function_x_esm(value)) {
      return ctx.stylize("[AsyncFunction".concat(getNameSep(value), "]"), 'special');
    }

    if (is_generator_function_default()(value)) {
      return ctx.stylize("[GeneratorFunction".concat(getNameSep(value), "]"), 'special');
    }

    if (Object(is_function_x_esm["a" /* default */])(value)) {
      return ctx.stylize("[".concat(getSubName(value, 'Function')).concat(getNameSep(value), "]"), 'special');
    }

    if (isClass(value)) {
      return ctx.stylize("[Class".concat(getNameSep(value), "]"), 'special');
    }

    if (is_regex_default()(value)) {
      return ctx.stylize(regexpToString(value), 'regexp');
    }

    if (is_date_object_default()(value)) {
      name = getSubName(value);
      formatted = ctx.stylize(fmtDate(value), 'date');

      if (name === 'Date') {
        return formatted;
      }

      return ctx.stylize("[".concat(name, ": ").concat(formatted, "]"), 'date');
    }

    if (Object(is_error_x_esm["a" /* default */])(value)) {
      return fmtError(value);
    } // Fast path for ArrayBuffer. Can't do the same for DataView because it
    // has a non-primitive buffer property that we need to recurse for.


    if (Object(is_array_buffer_x_esm["a" /* default */])(value)) {
      return "".concat(getSubName(value, 'ArrayBuffer'), " { byteLength: ").concat(fmtNumber(ctx, value.byteLength), " }");
    }

    if (isMapIterator(value)) {
      return "".concat(getSubName(value, 'MapIterator'), " {}");
    }

    if (isSetIterator(value)) {
      return "".concat(getSubName(value, 'SetIterator'), " {}");
    }

    if (is_promise_default()(value)) {
      return "".concat(getSubName(value, 'Promise'), " {}");
    }
  }

  var base = '';
  var empty = false;
  var braces = ['{', '}'];
  var fmtter = fmtObject; // We can't compare constructors for various objects using a comparison
  // like `constructor === Array` because the object could have come from a
  // different context and thus the constructor won't match. Instead we check
  // the constructor names (including those up the prototype chain where
  // needed) to determine object types.

  if (is_string_default()(value)) {
    // Make boxed primitive Strings look like such
    base = "[".concat(getSubName(value, 'String'), ": ").concat(fmtPrimNoColor(ctx, value.valueOf()), "]");
  } else if (is_number_object_default()(value)) {
    // Make boxed primitive Numbers look like such
    base = "[".concat(getSubName(value, 'Number'), ": ").concat(fmtPrimNoColor(ctx, value.valueOf()), "]");
  } else if (is_boolean_object_default()(value)) {
    // Make boxed primitive Booleans look like such
    base = "[".concat(getSubName(value, 'Boolean'), ": ").concat(fmtPrimNoColor(ctx, value.valueOf()), "]");
  } else if (Object(is_function_x_esm["a" /* default */])(value)) {
    // Make functions say that they are functions
    base = "[".concat(getSubName(value, 'Function')).concat(getNameSep(value), "]");
  } else if (isClass(value)) {
    // Make functions say that they are functions
    base = "[Class".concat(getNameSep(value), "]");
  } else if (is_regex_default()(value)) {
    // Make RegExps say that they are RegExps
    // name = getSubName(value, 'RegExp');
    base = regexpToString(value);
  } else if (is_date_object_default()(value)) {
    // Make dates with properties first say the date
    name = getSubName(value);
    formatted = fmtDate(value);

    if (name === 'Date') {
      base = formatted;
    } else {
      base = "[".concat(name, ": ").concat(formatted, "]");
    }
  } else if (Object(is_error_x_esm["a" /* default */])(value)) {
    name = getSubName(value); // Make error with message first say the error

    base = fmtError(value);
  } else if (Object(is_array_x_esm["a" /* default */])(value)) {
    name = getSubName(value); // Unset the constructor to prevent "Array [...]" for ordinary arrays.

    name = name === 'Array' ? '' : name;
    braces = ['[', ']'];

    if (ctx.showHidden) {
      keys = promote(keys, arrayKeys);
    }

    empty = value.length < 1;
    fmtter = fmtArray;
  } else if (Object(is_set_x_esm["a" /* default */])(value)) {
    name = getSubName(value, 'Set');
    fmtter = fmtSet; // With `showHidden`, `length` will display as a hidden property for
    // arrays. For consistency's sake, do the same for `size`, even though
    // this property isn't selected by Object.getOwnPropertyNames().

    if (ctx.showHidden) {
      keys = promote(keys, collectionKeys);
    }

    empty = value.size < 1;
  } else if (Object(is_map_x_esm["a" /* default */])(value)) {
    name = getSubName(value, 'Map');
    fmtter = fmtMap; // With `showHidden`, `length` will display as a hidden property for
    // arrays. For consistency's sake, do the same for `size`, even though
    // this property isn't selected by Object.getOwnPropertyNames().

    if (ctx.showHidden) {
      keys = promote(keys, collectionKeys);
    }

    empty = value.size < 1;
  } else if (Object(is_array_buffer_x_esm["a" /* default */])(value)) {
    name = getSubName(value, 'ArrayBuffer');
    keys = promote(keys, arrayBufferKeys);
    visibleKeys = appendMissing(visibleKeys, arrayBufferKeys);
  } else if (Object(is_data_view_x_esm["a" /* default */])(value)) {
    name = getSubName(value, 'DataView');
    keys = promote(keys, dataViewKeys);
    visibleKeys = appendMissing(visibleKeys, dataViewKeys);
  } else if (is_typed_array_default()(value)) {
    name = getSubName(value);
    braces = ['[', ']'];
    fmtter = fmtTypedArray;

    if (ctx.showHidden) {
      keys = promote(keys, typedArrayKeys);
    }
  } else if (is_promise_default()(value)) {
    name = getSubName(value, 'Promise');
  } else if (isMapIterator(value)) {
    name = getSubName(value, 'MapIterator');
    empty = true;
  } else if (isSetIterator(value)) {
    name = getSubName(value, 'SetIterator');
    empty = true;
  } else {
    name = getSubName(value); // Unset the constructor to prevent "Object {...}" for ordinary objects.

    name = name === 'Object' ? '' : name;
    empty = true; // No other data than keys.
  }

  if (base) {
    base = " ".concat(base);
  } else if (name) {
    // Add constructor name if available
    braces[0] = "".concat(name, " ").concat(braces[0]);
  }

  empty = empty === true && keys.length < 1;

  if (empty) {
    return braces[0] + base + braces[1];
  }

  if (depth < 0) {
    if (is_regex_default()(value)) {
      return ctx.stylize(regexpToString(value), 'regexp');
    }

    if (Object(is_array_x_esm["a" /* default */])(value)) {
      return ctx.stylize('[Array]', 'special');
    }

    return ctx.stylize('[Object]', 'special');
  }

  if (ctx.seen.has(value)) {
    return ctx.stylize('[Circular]', 'special');
  }

  ctx.seen.add(value);
  var out = fmtter(ctx, value, depth, visibleKeys, keys);
  ctx.seen.delete(value);
  return reduceToSingleString(out, base, braces, ctx.breakLength);
};

inspect = function _inspect(obj, opts) {
  // default options
  var ctx = {
    seen: new collections_x_esm["b" /* SetConstructor */](),
    stylize: stylizeNoColor
  }; // legacy...

  /* eslint-disable-next-line prefer-rest-params */

  if (arguments.length >= 3 && typeof arguments[2] !== 'undefined') {
    /* eslint-disable-next-line prefer-rest-params,prefer-destructuring */
    ctx.depth = arguments[2];
  }
  /* eslint-disable-next-line prefer-rest-params */


  if (arguments.length >= 4 && typeof arguments[3] !== 'undefined') {
    /* eslint-disable-next-line prefer-rest-params,prefer-destructuring */
    ctx.colors = arguments[3];
  }

  if (is_boolean_object_default()(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } // Set default and user-specified options


  if (supportsGetSet) {
    ctx = Object(object_assign_x_esm["a" /* default */])({}, inspect.defaultOptions, ctx, opts);
  } else {
    ctx = Object(object_assign_x_esm["a" /* default */])({}, inspectDefaultOptions, inspect.defaultOptions, ctx, opts);
  }

  if (ctx.colors) {
    ctx.stylize = stylizeWithColor;
  }

  if (ctx.maxArrayLength === null) {
    ctx.maxArrayLength = Infinity;
  }

  return fmtValue(ctx, obj, ctx.depth);
};

if (supportsGetSet) {
  Object(object_define_property_x_esm["a" /* default */])(inspect, 'defaultOptions', {
    get: function _get() {
      return inspectDefaultOptions;
    },
    set: function _set(options) {
      if (Object(is_object_like_x_esm["a" /* default */])(options) === false) {
        throw new TypeError('"options" must be an object');
      }

      return Object(object_assign_x_esm["a" /* default */])(inspectDefaultOptions, options);
    }
  });
} else {
  Object(object_define_properties_x_esm["a" /* default */])(inspect, {
    defaultOptions: {
      value: Object(object_assign_x_esm["a" /* default */])({}, inspectDefaultOptions),
      writable: true
    }
  });
}

Object(object_define_properties_x_esm["a" /* default */])(inspect, {
  // http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
  colors: {
    value: {
      black: [30, 39],
      blue: [34, 39],
      bold: [1, 22],
      cyan: [36, 39],
      green: [32, 39],
      grey: [90, 39],
      inverse: [7, 27],
      italic: [3, 23],
      magenta: [35, 39],
      red: [31, 39],
      underline: [4, 24],
      white: [37, 39],
      yellow: [33, 39]
    }
  },
  custom: {
    value: customInspectSymbol
  },
  // Don't use 'blue' not visible on cmd.exe
  styles: {
    value: {
      boolean: 'yellow',
      date: 'magenta',
      // name: intentionally not styling
      null: 'bold',
      number: 'yellow',
      regexp: 'red',
      special: 'cyan',
      string: 'green',
      symbol: 'green',
      undefined: 'grey'
    }
  }
});
var ins = inspect;
/* harmony default export */ var inspect_x_esm = __webpack_exports__["a"] = (ins);



/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export list */
/* unused harmony export string2016 */
/**
 * A record of a white space character.
 *
 * @typedef {object} CharRecord
 * @property {number} code - The character code.
 * @property {string} description - A description of the character.
 * @property {boolean} es5 - Whether the spec lists this as a white space.
 * @property {boolean} es2015 - Whether the spec lists this as a white space.
 * @property {boolean} es2016 - Whether the spec lists this as a white space.
 * @property {boolean} es2017 - Whether the spec lists this as a white space.
 * @property {boolean} es2018 - Whether the spec lists this as a white space.
 * @property {string} string - The character string.
 */

/**
 * An array of the whitespace char codes, string, descriptions and language
 * presence in the specifications.
 *
 * @type Array.<CharRecord>
 */
var list = [{
  code: 0x0009,
  description: 'Tab',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\t"
}, {
  code: 0x000a,
  description: 'Line Feed',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\n"
}, {
  code: 0x000b,
  description: 'Vertical Tab',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\x0B"
}, {
  code: 0x000c,
  description: 'Form Feed',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\f"
}, {
  code: 0x000d,
  description: 'Carriage Return',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\r"
}, {
  code: 0x0020,
  description: 'Space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: " "
},
/*
{
  code: 0x0085,
  description: 'Next line',
  es5: false,
  es2015: false,
  es2016: false,
  es2017: false,
  es2018: false,
  string: '\u0085'
}
*/
{
  code: 0x00a0,
  description: 'No-break space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\xA0"
}, {
  code: 0x1680,
  description: 'Ogham space mark',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u1680"
}, {
  code: 0x180e,
  description: 'Mongolian vowel separator',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: false,
  es2018: false,
  string: "\u180E"
}, {
  code: 0x2000,
  description: 'En quad',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2000"
}, {
  code: 0x2001,
  description: 'Em quad',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2001"
}, {
  code: 0x2002,
  description: 'En space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2002"
}, {
  code: 0x2003,
  description: 'Em space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2003"
}, {
  code: 0x2004,
  description: 'Three-per-em space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2004"
}, {
  code: 0x2005,
  description: 'Four-per-em space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2005"
}, {
  code: 0x2006,
  description: 'Six-per-em space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2006"
}, {
  code: 0x2007,
  description: 'Figure space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2007"
}, {
  code: 0x2008,
  description: 'Punctuation space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2008"
}, {
  code: 0x2009,
  description: 'Thin space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2009"
}, {
  code: 0x200a,
  description: 'Hair space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u200A"
},
/*
{
  code: 0x200b,
  description: 'Zero width space',
  es5: false,
  es2015: false,
  es2016: false,
  es2017: false,
  es2018: false,
  string: '\u200b'
},
*/
{
  code: 0x2028,
  description: 'Line separator',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2028"
}, {
  code: 0x2029,
  description: 'Paragraph separator',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2029"
}, {
  code: 0x202f,
  description: 'Narrow no-break space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u202F"
}, {
  code: 0x205f,
  description: 'Medium mathematical space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u205F"
}, {
  code: 0x3000,
  description: 'Ideographic space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u3000"
}, {
  code: 0xfeff,
  description: 'Byte Order Mark',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\uFEFF"
}];
/**
 * A string of the ES5 to ES2016 whitespace characters.
 *
 * @type string
 */

var stringES2016 = '';
/**
 * A string of the ES2017 to ES2018 whitespace characters.
 *
 * @type string
 */

var stringES2018 = '';
var length = list.length;

for (var i = 0; i < length; i += 1) {
  if (list[i].es2016) {
    stringES2016 += list[i].string;
  }

  if (list[i].es2018) {
    stringES2018 += list[i].string;
  }
}

var string2018 = stringES2018;
/* harmony default export */ __webpack_exports__["a"] = (string2018);
var string2016 = stringES2016;



/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var object_get_own_property_descriptor_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29);
/* harmony import */ var attempt_x__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var is_object_like_x__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var is_length_x__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52);





var test1 = function test1() {
  return Object(attempt_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(function createSet() {
    /* eslint-disable-next-line compat/compat */
    return new Set();
  });
};

var getGetter = function getGetter() {
  if (typeof Set === 'function') {
    /* eslint-disable-next-line compat/compat */
    var descriptor = Object(object_get_own_property_descriptor_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Set.prototype, 'size');

    if (descriptor && typeof descriptor.get === 'function') {
      var resTest1 = test1();

      if (resTest1.threw === false && Object(is_object_like_x__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(resTest1.value)) {
        var res = attempt_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].call(resTest1.value, descriptor.get);

        if (res.threw === false && Object(is_length_x__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(res.value)) {
          return descriptor.get;
        }
      }
    }
  }
  /* eslint-disable-next-line no-void */


  return void 0;
};

var getSize = getGetter();
/**
 * Determine if an `object` is a `Set`.
 *
 * @param {*} object - The object to test.
 * @returns {boolean} `true` if the `object` is a `Set`,
 *  else `false`.
 */

var isSet = function isSet(object) {
  if (!getSize || Object(is_object_like_x__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(object) === false) {
    return false;
  }

  var result = attempt_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].call(object, getSize);
  return result.threw === false && Object(is_length_x__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(result.value);
};

/* harmony default export */ __webpack_exports__["a"] = (isSet);



/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (typeof BigInt === 'function') {
	var bigIntValueOf = BigInt.prototype.valueOf;
	var tryBigInt = function tryBigIntObject(value) {
		try {
			bigIntValueOf.call(value);
			return true;
		} catch (e) {
		}
		return false;
	};

	module.exports = function isBigInt(value) {
		if (
			value === null
			|| typeof value === 'undefined'
			|| typeof value === 'boolean'
			|| typeof value === 'string'
			|| typeof value === 'number'
			|| typeof value === 'symbol'
			|| typeof value === 'function'
		) {
			return false;
		}
		if (typeof value === 'bigint') { // eslint-disable-line valid-typeof
			return true;
		}

		return tryBigInt(value);
	};
} else {
	module.exports = function isBigInt(value) {
		return  false && false;
	};
}


/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/is-finite-x/dist/is-finite-x.esm.js + 1 modules
var is_finite_x_esm = __webpack_require__(35);

// EXTERNAL MODULE: ./node_modules/to-integer-x/dist/to-integer-x.esm.js + 1 modules
var to_integer_x_esm = __webpack_require__(25);

// CONCATENATED MODULE: ./node_modules/is-integer-x/dist/is-integer-x.esm.js


/**
 * This method determines whether the passed value is an integer.
 *
 * @param {*} value - The value to be tested for being an integer.
 * @returns {boolean} A Boolean indicating whether or not the given value is an integer.
 */

var is_integer_x_esm_isInteger = function isInteger(value) {
  return Object(is_finite_x_esm["a" /* default */])(value) && Object(to_integer_x_esm["a" /* default */])(value) === value;
};

/* harmony default export */ var is_integer_x_esm = (is_integer_x_esm_isInteger);


// CONCATENATED MODULE: ./node_modules/is-safe-integer-x/dist/is-safe-integer-x.esm.js

var MAX_SAFE_INTEGER = 9007199254740991;
var MIN_SAFE_INTEGER = -MAX_SAFE_INTEGER;
/**
 * This method determines whether the passed value is a safe integer.
 *
 * Can be exactly represented as an IEEE-754 double precision number, and
 * whose IEEE-754 representation cannot be the result of rounding any other
 * integer to fit the IEEE-754 representation.
 *
 * @param {*} value - The value to be tested for being a safe integer.
 * @returns {boolean} A Boolean indicating whether or not the given value is a
 *  safe integer.
 */

var is_safe_integer_x_esm_isSafeInteger = function isSafeInteger(value) {
  return is_integer_x_esm(value) && value >= MIN_SAFE_INTEGER && value <= MAX_SAFE_INTEGER;
};

/* harmony default export */ var is_safe_integer_x_esm = (is_safe_integer_x_esm_isSafeInteger);


// CONCATENATED MODULE: ./node_modules/is-length-x/dist/is-length-x.esm.js

/**
 * This method checks if `value` is a valid array-like length.
 *
 * @param {*} value - The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 */

var is_length_x_esm_isLength = function isLength(value) {
  return is_safe_integer_x_esm(value) && value >= 0;
};

/* harmony default export */ var is_length_x_esm = __webpack_exports__["a"] = (is_length_x_esm_isLength);



/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var to_object_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var to_integer_x__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25);
/* harmony import */ var to_length_x__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var split_if_boxed_bug_x__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11);





var getMax = function _getMax(a, b) {
  return a >= b ? a : b;
};

var getMin = function _getMin(a, b) {
  return a <= b ? a : b;
};

var setRelative = function _setRelative(value, length) {
  return value < 0 ? getMax(length + value, 0) : getMin(value, length);
};
/**
 * The slice() method returns a shallow copy of a portion of an array into a new
 * array object selected from begin to end (end not included). The original
 * array will not be modified.
 *
 * @param {!object} arrayLike - The array like object to slice.
 * @param {number} [start] - Zero-based index at which to begin extraction.
 *  A negative index can be used, indicating an offset from the end of the
 *  sequence. Running slice(-2) extracts the last two elements in the sequence.
 *  If begin is undefined, slice begins from index 0.
 * @param {number} [end] - Zero-based index before which to end extraction.
 *  Slice extracts up to but not including end. For example, slice([0,1,2,3,4],1,4)
 *  extracts the second element through the fourth element (elements indexed
 *  1, 2, and 3).
 *  A negative index can be used, indicating an offset from the end of the
 *  sequence. Running slice(2,-1) extracts the third element through the second-to-last
 *  element in the sequence.
 *  If end is omitted, slice extracts through the end of the sequence (arr.length).
 *  If end is greater than the length of the sequence, slice extracts through
 *  the end of the sequence (arr.length).
 * @returns {Array} A new array containing the extracted elements.
 */


var slice = function slice(arrayLike, start, end) {
  var iterable = Object(split_if_boxed_bug_x__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Object(to_object_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(arrayLike));
  var length = Object(to_length_x__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(iterable.length);
  var k = setRelative(Object(to_integer_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(start), length);
  var relativeEnd = typeof end === 'undefined' ? length : Object(to_integer_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(end);
  var finalEnd = setRelative(relativeEnd, length);
  var val = [];
  val.length = getMax(finalEnd - k, 0);
  var next = 0;

  while (k < finalEnd) {
    if (k in iterable) {
      val[next] = iterable[k];
    }

    next += 1;
    k += 1;
  }

  return val;
};

/* harmony default export */ __webpack_exports__["a"] = (slice);



/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var to_number_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39);
 // eslint-disable jsdoc/check-param-names
// noinspection JSCommentMatchesSignature

/**
 * This method clamp a number to min and max limits inclusive.
 *
 * @param {number} value - The number to be clamped.
 * @param {number} [min=0] - The minimum number.
 * @param {number} max - The maximum number.
 * @throws {RangeError} If min > max.
 * @returns {number} The clamped number.
 */
// eslint-enable jsdoc/check-param-names

var clamp = function clamp(value) {
  var number = Object(to_number_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(value);
  var argsLength = arguments.length;

  if (argsLength < 2) {
    return number;
  }
  /* eslint-disable-next-line prefer-rest-params */


  var min = Object(to_number_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(arguments[1]);
  var max;

  if (argsLength < 3) {
    max = min;
    min = 0;
  } else {
    /* eslint-disable-next-line prefer-rest-params */
    max = Object(to_number_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(arguments[2]);
  }

  if (min > max) {
    throw new RangeError('"min" must be less than "max"');
  }

  if (number < min) {
    return min;
  }

  if (number > max) {
    return max;
  }

  return number;
};

/* harmony default export */ __webpack_exports__["a"] = (clamp);



/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var attempt_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var to_length_x__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var to_object_x__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var assert_is_function_x__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var split_if_boxed_bug_x__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11);
var _this = undefined;

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }






var pFindIndex = typeof Array.prototype.findIndex === 'function' && Array.prototype.findIndex;
var isWorking;

if (pFindIndex) {
  var testArr = [];
  testArr.length = 2;
  testArr[1] = 1;
  var res = attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].call(testArr, pFindIndex, function (item, idx) {
    _newArrowCheck(this, _this);

    return idx === 0;
  }.bind(undefined));
  isWorking = res.threw === false && res.value === 0;

  if (isWorking) {
    res = attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].call(1, pFindIndex, function (item, idx) {
      _newArrowCheck(this, _this);

      return idx === 0;
    }.bind(undefined));
    isWorking = res.threw === false && res.value === -1;
  }

  if (isWorking) {
    isWorking = attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].call([], pFindIndex).threw;
  }

  if (isWorking) {
    res = attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].call('abc', pFindIndex, function (item) {
      _newArrowCheck(this, _this);

      return item === 'c';
    }.bind(undefined));
    isWorking = res.threw === false && res.value === 2;
  }

  if (isWorking) {
    res = attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].call(function getArgs() {
      /* eslint-disable-next-line prefer-rest-params */
      return arguments;
    }('a', 'b', 'c'), pFindIndex, function (item) {
      _newArrowCheck(this, _this);

      return item === 'c';
    }.bind(undefined));
    isWorking = res.threw === false && res.value === 2;
  }
}
/**
 * Like `findIndex`, this method returns an index in the array, if an element
 * in the array satisfies the provided testing function. Otherwise -1 is returned.
 *
 * @param {Array} array - The array to search.
 * @throws {TypeError} If array is `null` or `undefined`-.
 * @param {Function} callback - Function to execute on each value in the array,
 *  taking three arguments: `element`, `index` and `array`.
 * @throws {TypeError} If `callback` is not a function.
 * @param {*} [thisArg] - Object to use as `this` when executing `callback`.
 * @returns {number} Returns index of positively tested element, otherwise -1.
 */


var findIdx;

if (isWorking) {
  findIdx = function findIndex(array, callback) {
    var args = [callback];

    if (arguments.length > 2) {
      /* eslint-disable-next-line prefer-rest-params,prefer-destructuring */
      args[1] = arguments[2];
    }

    return pFindIndex.apply(array, args);
  };
} else {
  findIdx = function findIndex(array, callback) {
    var object = Object(to_object_x__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(array);
    Object(assert_is_function_x__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(callback);
    var iterable = Object(split_if_boxed_bug_x__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(object);
    var length = Object(to_length_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(iterable.length);

    if (length < 1) {
      return -1;
    }

    var thisArg;

    if (arguments.length > 2) {
      /* eslint-disable-next-line prefer-rest-params,prefer-destructuring */
      thisArg = arguments[2];
    }

    var index = 0;

    while (index < length) {
      if (callback.call(thisArg, iterable[index], index, object)) {
        return index;
      }

      index += 1;
    }

    return -1;
  };
}

var fi = findIdx;
/* harmony default export */ __webpack_exports__["a"] = (fi);



/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var numToStr = Number.prototype.toString;
var tryNumberObject = function tryNumberObject(value) {
	try {
		numToStr.call(value);
		return true;
	} catch (e) {
		return false;
	}
};
var toStr = Object.prototype.toString;
var numClass = '[object Number]';
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

module.exports = function isNumberObject(value) {
	if (typeof value === 'number') { return true; }
	if (typeof value !== 'object') { return false; }
	return hasToStringTag ? tryNumberObject(value) : toStr.call(value) === numClass;
};


/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var is_nil_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
/* harmony import */ var is_function_x__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var is_length_x__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52);



/**
 * Checks if value is array-like. A value is considered array-like if it's
 * not a function and has a `length` that's an integer greater than or
 * equal to 0 and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @param {*} value - The object to be tested.
 */

var isArrayLike = function isArrayLike(value) {
  return Object(is_nil_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(value) === false && Object(is_function_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(value, true) === false && Object(is_length_x__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(value.length);
};

/* harmony default export */ __webpack_exports__["a"] = (isArrayLike);



/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var attempt_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var object_keys_x__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18);
/* harmony import */ var is_function_x__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var array_reduce_x__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26);
/* harmony import */ var get_own_property_names_x__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(42);
/* harmony import */ var is_object_like_x__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var to_object_x__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1);
/* harmony import */ var array_slice_x__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(14);
/* harmony import */ var is_nil_x__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(17);
/* harmony import */ var get_own_enumerable_property_symbols_x__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(76);
function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }











var EMPTY_STRING = '';
var StringCtr = EMPTY_STRING.constructor;
var fromCharCode = StringCtr.fromCharCode;
var castObject = {}.constructor;
var nAssign = castObject.assign;
var nativeAssign = Object(is_function_x__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(nAssign) && nAssign;

var workingNativeAssign = function nativeWorks() {
  var obj = {};
  var res = Object(attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(nativeAssign, obj, {
    0: 1
  }, {
    1: 2
  });
  return res.threw === false && res.value === obj && Object(object_keys_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(obj).length === 2 && obj[0] === 1 && obj[1] === 2;
};

var lacksProperEnumerationOrder = function enumOrder() {
  var _this = this;

  // https://bugs.chromium.org/p/v8/issues/detail?id=4118
  var test1 = castObject('abc');
  test1[5] = 'de';

  if (Object(get_own_property_names_x__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(test1)[0] === '5') {
    return true;
  }

  var strNums = '0123456789'; // https://bugs.chromium.org/p/v8/issues/detail?id=3056

  var test2 = Object(array_reduce_x__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(strNums.split(EMPTY_STRING), function (acc, ignore, index) {
    _newArrowCheck(this, _this);

    acc["_".concat(fromCharCode(index))] = index;
    return acc;
  }.bind(this), {});
  var order = Object(array_reduce_x__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Object(get_own_property_names_x__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(test2), function (acc, name) {
    _newArrowCheck(this, _this);

    return acc + test2[name];
  }.bind(this), EMPTY_STRING);

  if (order !== strNums) {
    return true;
  } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


  var letters = 'abcdefghijklmnopqrst';
  var test3 = Object(array_reduce_x__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(letters.split(EMPTY_STRING), function (acc, letter) {
    _newArrowCheck(this, _this);

    acc[letter] = letter;
    return acc;
  }.bind(this), {});
  var result = Object(attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(nativeAssign, {}, test3);
  return result.threw === false && Object(object_keys_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(result.value).join(EMPTY_STRING) !== letters;
};

var assignHasPendingExceptions = function exceptions() {
  if (Object(is_function_x__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(castObject.preventExtensions) === false) {
    return false;
  } // Firefox 37 still has "pending exception" logic in its Object.assign implementation,
  // which is 72% slower than our shim, and Firefox 40's native implementation.


  var result = Object(attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(castObject.preventExtensions, {
    1: 2
  });

  if (result.threw || Object(is_object_like_x__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(result.value) === false) {
    return false;
  }

  var thrower = result.value;
  result = Object(attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(nativeAssign, thrower, 'xy');
  return result.threw ? thrower[1] === 'y' : false;
};

var shouldImplement = function getShouldImplement() {
  if (nativeAssign === false) {
    return true;
  }

  if (workingNativeAssign() === false) {
    return true;
  }

  if (lacksProperEnumerationOrder()) {
    return true;
  }

  return assignHasPendingExceptions();
}();
/**
 * This method is used to copy the values of all enumerable own properties from
 * one or more source objects to a target object. It will return the target object.
 *
 * @param {*} target - The target object.
 * @param {*} [...source] - The source object(s).
 * @throws {TypeError} If target is null or undefined.
 * @returns {object} The target object.
 */


var $assign;

if (shouldImplement) {
  var concat = [].concat; // 19.1.3.1

  $assign = function assign(target) {
    var _this2 = this;

    return Object(array_reduce_x__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
    /* eslint-disable-next-line prefer-rest-params */
    Object(array_slice_x__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(arguments, 1), function (tgt, source) {
      var _this3 = this;

      _newArrowCheck(this, _this2);

      if (Object(is_nil_x__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(source)) {
        return tgt;
      }

      var object = castObject(source);
      return Object(array_reduce_x__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(concat.call(Object(object_keys_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(object), Object(get_own_enumerable_property_symbols_x__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(object)), function (tar, key) {
        _newArrowCheck(this, _this3);

        tar[key] = object[key];
        return tar;
      }.bind(this), tgt);
    }.bind(this), Object(to_object_x__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(target));
  };
} else {
  $assign = nativeAssign;
}

var assign = $assign;
/* harmony default export */ __webpack_exports__["a"] = (assign);



/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/has-to-string-tag-x/dist/has-to-string-tag-x.esm.js
var has_to_string_tag_x_esm = __webpack_require__(32);

// EXTERNAL MODULE: ./node_modules/trim-x/dist/trim-x.esm.js + 1 modules
var trim_x_esm = __webpack_require__(63);

// EXTERNAL MODULE: ./node_modules/to-string-symbols-supported-x/dist/to-string-symbols-supported-x.esm.js
var to_string_symbols_supported_x_esm = __webpack_require__(27);

// EXTERNAL MODULE: ./node_modules/stackframe/stackframe.js
var stackframe = __webpack_require__(84);
var stackframe_default = /*#__PURE__*/__webpack_require__.n(stackframe);

// EXTERNAL MODULE: ./node_modules/error-stack-parser/error-stack-parser.js
var error_stack_parser = __webpack_require__(93);
var error_stack_parser_default = /*#__PURE__*/__webpack_require__.n(error_stack_parser);

// EXTERNAL MODULE: ./node_modules/object-define-property-x/dist/object-define-property-x.esm.js
var object_define_property_x_esm = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/object-define-properties-x/dist/object-define-properties-x.esm.js + 1 modules
var object_define_properties_x_esm = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/find-index-x/dist/find-index-x.esm.js
var find_index_x_esm = __webpack_require__(55);

// EXTERNAL MODULE: ./node_modules/is-function-x/dist/is-function-x.esm.js + 1 modules
var is_function_x_esm = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/inspect-x/dist/inspect-x.esm.js + 11 modules
var inspect_x_esm = __webpack_require__(48);

// EXTERNAL MODULE: ./node_modules/is-error-x/dist/is-error-x.esm.js
var is_error_x_esm = __webpack_require__(47);

// EXTERNAL MODULE: ./node_modules/is-nil-x/dist/is-nil-x.esm.js
var is_nil_x_esm = __webpack_require__(17);

// EXTERNAL MODULE: ./node_modules/object-create-x/dist/object-create-x.esm.js
var object_create_x_esm = __webpack_require__(70);

// EXTERNAL MODULE: ./node_modules/is-object-like-x/dist/is-object-like-x.esm.js
var is_object_like_x_esm = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/array-map-x/dist/array-map-x.esm.js
var array_map_x_esm = __webpack_require__(38);

// EXTERNAL MODULE: ./node_modules/is-nan-x/dist/is-nan-x.esm.js
var is_nan_x_esm = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/is-finite-x/dist/is-finite-x.esm.js + 1 modules
var is_finite_x_esm = __webpack_require__(35);

// CONCATENATED MODULE: ./node_modules/is-var-name/index.mjs
/*!
 * is-var-name | ISC (c) Shinnosuke Watanabe
 * https://github.com/shinnn/is-var-name
*/
function isVarName(str) {
	if (typeof str !== 'string') {
		return false;
	}

	if (str.trim() !== str) {
		return false;
	}

	try {
		new Function(str, 'var ' + str);
	} catch (e) {
		return false;
	}

	return true;
}

// EXTERNAL MODULE: ./node_modules/to-integer-x/dist/to-integer-x.esm.js + 1 modules
var to_integer_x_esm = __webpack_require__(25);

// EXTERNAL MODULE: ./node_modules/require-object-coercible-x/dist/require-object-coercible-x.esm.js
var require_object_coercible_x_esm = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/to-string-x/dist/to-string-x.esm.js
var to_string_x_esm = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/attempt-x/dist/attempt-x.esm.js
var attempt_x_esm = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/string-repeat-x/dist/string-repeat-x.esm.js
var string_repeat_x_esm_this = undefined;

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }






var EMPTY_STRING = '';
var nativeRepeat = EMPTY_STRING.repeat;
var hasNative = Object(attempt_x_esm["a" /* default */])(function () {
  _newArrowCheck(this, string_repeat_x_esm_this);

  return nativeRepeat.call('a', 5);
}.bind(undefined)).value === 'aaaaa';
/**
 * Repeat the given string the specified number of times.
 *
 * @param {string} value - The string to repeat.
 * @param {(number|string)} count - The number of times to repeat the string.
 * @returns {string} Repeated string.
 */

var $repeat;

if (hasNative) {
  $repeat = function repeat(value, count) {
    return nativeRepeat.call(Object(require_object_coercible_x_esm["a" /* default */])(value), count) || EMPTY_STRING;
  };
} else {
  $repeat = function repeat(value, count) {
    var string = Object(to_string_x_esm["a" /* default */])(Object(require_object_coercible_x_esm["a" /* default */])(value));
    var n = Object(to_integer_x_esm["a" /* default */])(count); // Account for out-of-bounds indices

    if (n < 0 || !Object(is_finite_x_esm["a" /* default */])(n)) {
      throw new RangeError('Invalid count value');
    }

    var result = EMPTY_STRING;

    while (n) {
      if (n % 2 === 1) {
        result += string;
      }

      if (n > 1) {
        string += string;
      }
      /* eslint-disable-next-line no-bitwise */


      n >>= 1;
    }

    return result;
  };
}

var r = $repeat;
/* harmony default export */ var string_repeat_x_esm = (r);


// EXTERNAL MODULE: ./node_modules/is-regexp-x/dist/is-regexp-x.esm.js
var is_regexp_x_esm = __webpack_require__(28);

// EXTERNAL MODULE: ./node_modules/math-clamp-x/dist/math-clamp-x.esm.js
var math_clamp_x_esm = __webpack_require__(54);

// CONCATENATED MODULE: ./node_modules/string-ends-with-x/dist/string-ends-with-x.esm.js







var ERR_MSG = 'Cannot call method "endsWith" with a regex';
var ew = ERR_MSG.endsWith,
    charCodeAt = ERR_MSG.charCodeAt;
var nativeEndsWith = typeof ew === 'function' && ew;
var isWorking;

if (nativeEndsWith) {
  var string_ends_with_x_esm_res = attempt_x_esm["a" /* default */].call('/a/', nativeEndsWith, /a/);
  isWorking = string_ends_with_x_esm_res.threw;

  if (isWorking) {
    string_ends_with_x_esm_res = attempt_x_esm["a" /* default */].call('abc', nativeEndsWith, 'c', -1 / 0);
    isWorking = string_ends_with_x_esm_res.threw === false && string_ends_with_x_esm_res.value === false;
  }

  if (isWorking) {
    string_ends_with_x_esm_res = attempt_x_esm["a" /* default */].call(123, nativeEndsWith, '3');
    isWorking = string_ends_with_x_esm_res.threw === false && string_ends_with_x_esm_res.value === true;
  }

  if (isWorking) {
    string_ends_with_x_esm_res = attempt_x_esm["a" /* default */].call(null, nativeEndsWith, 'n');
    isWorking = string_ends_with_x_esm_res.threw;
  }
}
/**
 * The endsWith method determines whether a string ends with the characters of a specified string, returning true or
 * false as appropriate.
 *
 * @param {string} string - The string to search.
 * @throws {TypeError} If string is null or undefined.
 * @param {string} searchString - The characters to be searched for at the end of this string.
 * @throws {TypeError} If searchString is a RegExp.
 * @param {number} [length] - If provided it is used as the length of string. If omitted, the default value is the string length.
 * @returns {boolean} - `true` if the given characters are found at the end of the string; otherwise, `false`.
 */


var $endsWith;

if (isWorking) {
  $endsWith = function endsWith(string, searchString) {
    var str = Object(to_string_x_esm["a" /* default */])(Object(require_object_coercible_x_esm["a" /* default */])(string));

    if (Object(is_regexp_x_esm["a" /* default */])(searchString)) {
      throw new TypeError(ERR_MSG);
    }

    var args = [searchString];

    if (arguments.length > 2) {
      /* eslint-disable-next-line prefer-rest-params,prefer-destructuring */
      args[1] = arguments[2];
    }

    return nativeEndsWith.apply(str, args);
  };
} else {
  // Firefox (< 37?) and IE 11 TP have a noncompliant startsWith implementation
  $endsWith = function endsWith(string, searchString) {
    var str = Object(to_string_x_esm["a" /* default */])(Object(require_object_coercible_x_esm["a" /* default */])(string));

    if (Object(is_regexp_x_esm["a" /* default */])(searchString)) {
      throw new TypeError(ERR_MSG);
    }

    var stringLength = str.length;
    var searchStr = Object(to_string_x_esm["a" /* default */])(searchString);
    var searchLength = searchStr.length;
    var length = stringLength;

    if (arguments.length > 2) {
      /* eslint-disable-next-line prefer-rest-params */
      var position = arguments[2];

      if (typeof position !== 'undefined') {
        length = Object(to_integer_x_esm["a" /* default */])(position);

        if (Object(is_nan_x_esm["a" /* default */])(length)) {
          length = 0;
        }
      }
    }

    var end = Object(math_clamp_x_esm["a" /* default */])(length, 0, stringLength);
    var start = end - searchLength;

    if (start < 0) {
      return false;
    }

    var index = 0;

    while (index < searchLength) {
      if (charCodeAt.call(str, start + index) !== charCodeAt.call(searchStr, index)) {
        return false;
      }

      index += 1;
    }

    return true;
  };
}

var sew = $endsWith;
/* harmony default export */ var string_ends_with_x_esm = (sew);


// CONCATENATED MODULE: ./node_modules/error-x/dist/error-x.esm.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssertionErrorConstructor; });
/* unused harmony export ErrorConstructor */
/* unused harmony export EvalErrorConstructor */
/* unused harmony export InternalErrorConstructor */
/* unused harmony export RangeErrorConstructor */
/* unused harmony export ReferenceErrorConstructor */
/* unused harmony export supportsAllConstructors */
/* unused harmony export SyntaxErrorConstructor */
/* unused harmony export TypeErrorConstructor */
/* unused harmony export URIErrorConstructor */
function error_x_esm_newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
 * Want to create your own Error objects, this module will allow you to do
 * just that. It ships with all the standard Error objects already created
 * for you. Why? Well, these offer some improvements over the native versions.
 * - They have a `toJSON` method and so they can be serialised.
 * - They have a standardised `stack` property, using
 * [`error-stack-parser`](https://github.com/stacktracejs/error-stack-parser)
 * messages and stacks are parsed and then re-formatted.
 * - They have a `frames` property which is an array of the parsed `stack`
 * message, so you have easy access to the information.
 */




















var isError = is_error_x_esm["a" /* default */];
var mathMax = Math.max;
/**
 * @typedef {ErrorConstructor|TypeErrorConstructor|SyntaxErrorConstructor|URIErrorConstructor|ReferenceErrorConstructor|EvalErrorConstructor|RangeErrorConstructor} OfErrorConstructor
 */

var error_x_esm_EMPTY_STRING = '';
var stringSplit = error_x_esm_EMPTY_STRING.split,
    stringIndexOf = error_x_esm_EMPTY_STRING.indexOf,
    stringSlice = error_x_esm_EMPTY_STRING.slice;
var _ref = [],
    pop = _ref.pop,
    join = _ref.join,
    arraySlice = _ref.slice;
/** @type {BooleanConstructor} */

var castBoolean = true.constructor;
/* eslint-disable-next-line compat/compat */

var $toStringTag = has_to_string_tag_x_esm["a" /* default */] && Symbol.toStringTag;
/** @type {ErrorConstructor} */

var $Error = Error; // Capture the function (if any).

var captureStackTrace = $Error.captureStackTrace,
    prepareStackTrace = $Error.prepareStackTrace;
var kReadableOperator = {
  deepStrictEqual: 'Expected values to be strictly deep-equal:',
  strictEqual: 'Expected values to be strictly equal:',
  strictEqualObject: 'Expected "actual" to be reference-equal to "expected":',
  deepEqual: 'Expected values to be loosely deep-equal:',
  notDeepStrictEqual: 'Expected "actual" not to be strictly deep-equal to:',
  notStrictEqual: 'Expected "actual" to be strictly unequal to:',
  notStrictEqualObject: 'Expected "actual" not to be reference-equal to "expected":',
  notDeepEqual: 'Expected "actual" not to be loosely deep-equal to:',
  notIdentical: 'Values identical but not reference-equal:',
  notDeepEqualUnequal: 'Expected values not to be loosely deep-equal:'
};
/* Comparing short primitives should just show === / !== instead of using the diff. */

var kMaxShortLength = 12;

function inspectValue(val) {
  /*
   *The util.inspect default values could be changed. This makes sure the
   * error messages contain the necessary information nevertheless.
   */
  return Object(inspect_x_esm["a" /* default */])(val, {
    compact: false,
    customInspect: false,
    depth: 1000,
    maxArrayLength: Infinity,

    /* Assert compares only enumerable properties (with a few exceptions). */
    showHidden: false,

    /* Assert does not detect proxies currently. */
    showProxy: false,
    sorted: true,

    /* Inspect getters as we also check them when comparing entries. */
    getters: true
  });
}

function createErrDiff(actual, expected, $operator) {
  var operator = $operator;
  var other = error_x_esm_EMPTY_STRING;
  var res = error_x_esm_EMPTY_STRING;
  var end = error_x_esm_EMPTY_STRING;
  var skipped = false;
  var actualInspected = inspectValue(actual);
  var actualLines = stringSplit.call(actualInspected, '\n');
  var expectedLines = stringSplit.call(inspectValue(expected), '\n');
  var i = 0;
  var indicator = error_x_esm_EMPTY_STRING;
  /*
   * In case both values are objects or functions explicitly mark them as not
   * reference equal for the `strictEqual` operator.
   */

  if (operator === 'strictEqual' && (_typeof(actual) === 'object' && actual !== null && _typeof(expected) === 'object' && expected !== null || typeof actual === 'function' && typeof expected === 'function')) {
    operator = 'strictEqualObject';
  }
  /*
   * If "actual" and "expected" fit on a single line and they are not strictly
   * equal, check further special handling.
   */


  if (actualLines.length === 1 && expectedLines.length === 1 && actualLines[0] !== expectedLines[0]) {
    var inputLength = actualLines[0].length + expectedLines[0].length;
    /*
     * If the character length of "actual" and "expected" together is less than
     * kMaxShortLength and if neither is an object and at least one of them is
     *not `zero`, use the strict equal comparison to visualize the output.
     */

    if (inputLength <= kMaxShortLength) {
      if ((_typeof(actual) !== 'object' || actual === null) && (_typeof(expected) !== 'object' || expected === null) && (actual !== 0 || expected !== 0)) {
        /* -0 === +0 */
        return "".concat(kReadableOperator[operator], "\n\n").concat(actualLines[0], " !== ").concat(expectedLines[0], "\n");
      }
    } else if (operator !== 'strictEqualObject') {
      /*
       * If the stderr is a tty and the input length is lower than the current
       * columns per line, add a mismatch indicator below the output. If it is
       * not a tty, use a default value of 80 characters.
       */
      var _maxLength = 80;

      if (inputLength < _maxLength) {
        while (actualLines[0][i] === expectedLines[0][i]) {
          i += 1;
        }
        /* Ignore the first characters. */


        if (i > 2) {
          /*
           * Add position indicator for the first mismatch in case it is a
           * single line and the input length is less than the column length.
           */
          indicator = "\n  ".concat(string_repeat_x_esm(' ', i), "^");
          i = 0;
        }
      }
    }
  }
  /*
   * Remove all ending lines that match (this optimizes the output for
   * readability by reducing the number of total changed lines).
   */


  var a = actualLines[actualLines.length - 1];
  var b = expectedLines[expectedLines.length - 1];

  while (a === b) {
    if (i < 3) {
      end = "\n  ".concat(a).concat(end);
    } else {
      other = a;
    }

    i += 1;
    pop.call(actualLines);
    pop.call(expectedLines);

    if (actualLines.length === 0 || expectedLines.length === 0) {
      break;
    }

    a = actualLines[actualLines.length - 1];
    b = expectedLines[expectedLines.length - 1];
  }

  var maxLines = mathMax(actualLines.length, expectedLines.length);
  /*
   * Strict equal with identical objects that are not identical by reference.
   * E.g., assert.deepStrictEqual({ a: Symbol() }, { a: Symbol() })
   */

  if (maxLines === 0) {
    /* We have to get the result again. The lines were all removed before. */
    var aLines = actualInspected.split('\n');
    /* Only remove lines in case it makes sense to collapse those. */

    /* TODO: Accept env to always show the full error. */

    if (aLines.length > 50) {
      aLines[46] = '...';

      while (aLines.length > 47) {
        pop.call(aLines);
      }
    }

    return "".concat(kReadableOperator.notIdentical, "\n\n").concat(join.call(aLines, '\n'), "\n");
  }
  /* There were at least five identical lines at the end. Mark a couple of skipped. */


  if (i >= 5) {
    end = "\n...".concat(end);
    skipped = true;
  }

  if (other !== error_x_esm_EMPTY_STRING) {
    end = "\n  ".concat(other).concat(end);
    other = error_x_esm_EMPTY_STRING;
  }

  var printedLines = 0;
  var identical = 0;
  var msg = "".concat(kReadableOperator[operator], "\n+ actual - expected");
  var skippedMsg = ' ... Lines skipped';
  var lines = actualLines;
  var plusMinus = '+';
  var maxLength = expectedLines.length;

  if (actualLines.length < maxLines) {
    lines = expectedLines;
    plusMinus = '-';
    maxLength = actualLines.length;
  }

  for (i = 0; i < maxLines; i += 1) {
    if (maxLength < i + 1) {
      /*
       * If more than two former lines are identical, print them. Collapse them
       * in case more than five lines were identical.
       */
      if (identical > 2) {
        if (identical > 3) {
          if (identical > 4) {
            if (identical === 5) {
              res += "\n  ".concat(lines[i - 3]);
              printedLines += 1;
            } else {
              res += '\n...';
              skipped = true;
            }
          }

          res += "\n  ".concat(lines[i - 2]);
          printedLines += 1;
        }

        res += "\n  ".concat(lines[i - 1]);
        printedLines += 1;
      }
      /* No identical lines before. */


      identical = 0;
      /* Add the expected line to the cache. */

      if (lines === actualLines) {
        res += "\n".concat(plusMinus, " ").concat(lines[i]);
      } else {
        other += "\n".concat(plusMinus, " ").concat(lines[i]);
      }

      printedLines += 1;
      /* Only extra actual lines exist */

      /* Lines diverge */
    } else {
      var expectedLine = expectedLines[i];
      var actualLine = actualLines[i];
      /*
       * If the lines diverge, specifically check for lines that only diverge by
       * a trailing comma. In that case it is actually identical and we should
       * mark it as such.
       */

      var divergingLines = actualLine !== expectedLine && (!string_ends_with_x_esm(actualLine, ',') || stringSlice.call(actualLine, 0, -1) !== expectedLine);
      /*
       * If the expected line has a trailing comma but is otherwise identical,
       * add a comma at the end of the actual line. Otherwise the output could
       * look weird as in:
       *
       * [
       *   1         // No comma at the end!
       * +   2
       * ]
       */

      if (divergingLines && string_ends_with_x_esm(expectedLine, ',') && stringSlice.call(expectedLine, 0, -1) === actualLine) {
        divergingLines = false;
        actualLine += ',';
      }

      if (divergingLines) {
        /*
         * If more than two former lines are identical, print them. Collapse
         * them in case more than five lines were identical.
         */
        if (identical > 2) {
          if (identical > 3) {
            if (identical > 4) {
              if (identical === 5) {
                res += "\n  ".concat(actualLines[i - 3]);
                printedLines += 1;
              } else {
                res += '\n...';
                skipped = true;
              }
            }

            res += "\n  ".concat(actualLines[i - 2]);
            printedLines += 1;
          }

          res += "\n  ".concat(actualLines[i - 1]);
          printedLines += 1;
        }
        /* No identical lines before. */


        identical = 0;
        /*
         * Add the actual line to the result and cache the expected diverging
         * line so consecutive diverging lines show up as +++--- and not +-+-+-.
         */

        res += "\n+ ".concat(actualLine);
        other += "\n- ".concat(expectedLine);
        printedLines += 2;
        /* Lines are identical */
      } else {
        /* Add all cached information to the result before adding other things and reset the cache. */
        res += other;
        other = error_x_esm_EMPTY_STRING;
        identical += 1;
        /* The very first identical line since the last diverging line is be added to the result. */

        if (identical <= 2) {
          res += "\n  ".concat(actualLine);
          printedLines += 1;
        }
      }
    }
    /* Inspected object to big (Show ~50 rows max) */


    if (printedLines > 50 && i < maxLines - 2) {
      return "".concat(msg).concat(skippedMsg, "\n").concat(res, "\n...").concat(other, "\n...");
    }
  }

  return "".concat(msg).concat(skipped ? skippedMsg : error_x_esm_EMPTY_STRING, "\n").concat(res).concat(other).concat(end).concat(indicator);
}
/**
 * Tests for number as specified in StackTrace library.
 *
 * @private
 * @param {*} n - The value to test.
 * @returns {boolean} True if parsable, otherwise false.
 */


var error_x_esm_isNumber = function isNumber(n) {
  return Object(is_nan_x_esm["a" /* default */])(parseFloat(n)) === false && Object(is_finite_x_esm["a" /* default */])(n);
};
/**
 * The stack preparation function for the V8 stack.
 *
 * @private
 * @param {*} ignore - Unused argument.
 * @param {!object} thisStack - The V8 stack.
 * @returns {!object} The V8 stack.
 */


var tempPrepareStackTrace = function _prepareStackTrace(ignore, thisStack) {
  return thisStack;
};

var cV8 = castBoolean(captureStackTrace) && function getCV8() {
  // Test to see if the function works.
  try {
    captureStackTrace(new $Error(), captureStackTrace);
  } catch (ignore) {
    return false;
  }
  /**
   * Captures the V8 stack and converts it to an array of Stackframes.
   *
   * @private
   * @function captureV8
   * @param {!object} context - The Custom Error this object.
   * @returns {!Array.<!object>} Array of StackFrames.
   */


  return function captureV8(context) {
    var _this = this;

    $Error.prepareStackTrace = tempPrepareStackTrace;
    /** @type {object} */

    var error = new $Error();
    captureStackTrace(error, context.constructor);
    var frames = Object(array_map_x_esm["a" /* default */])(error.stack, function (frame) {
      error_x_esm_newArrowCheck(this, _this);

      var opts = {
        // args: void 0,
        functionName: frame.getFunctionName(),
        isConstructor: frame.isConstructor(),
        isEval: frame.isEval(),
        isNative: frame.isNative(),
        isToplevel: frame.isToplevel(),
        source: frame.toString()
      };
      var getFileName = Object(is_function_x_esm["a" /* default */])(frame.getFileName) && frame.getFileName();

      if (getFileName) {
        opts.getFileName = getFileName;
      }

      var columnNumber = Object(is_function_x_esm["a" /* default */])(frame.getColumnNumber) && frame.getColumnNumber();

      if (error_x_esm_isNumber(columnNumber)) {
        opts.columnNumber = columnNumber;
      }

      var lineNumber = Object(is_function_x_esm["a" /* default */])(frame.getLineNumber) && frame.getLineNumber();

      if (error_x_esm_isNumber(lineNumber)) {
        opts.lineNumber = lineNumber;
      }

      var evalOrigin = Object(is_function_x_esm["a" /* default */])(frame.getEvalOrigin) && frame.getEvalOrigin();

      if (Object(is_object_like_x_esm["a" /* default */])(evalOrigin)) {
        opts.evalOrigin = evalOrigin;
      }

      return new stackframe_default.a(opts);
    }.bind(this));

    if (typeof prepareStackTrace === 'undefined') {
      delete $Error.prepareStackTrace;
    } else {
      $Error.prepareStackTrace = prepareStackTrace;
    }

    return frames;
  };
}();

var allCtrs = true;
var STACK_NEWLINE = '\n    ';
/**
 * Defines frames and stack on the Custom Error this object.
 *
 * @private
 * @param {!object} context - The Custom Error this object.
 * @param {!Array.<!object>} frames - Array of StackFrames.
 * @param {string} name - The name of the constructor.
 */

var error_x_esm_defContext = function defContext(context, frames, name) {
  var _this2 = this;

  Object(object_define_properties_x_esm["a" /* default */])(context, {
    frames: {
      value: frames
    },
    stack: {
      value: "".concat(name).concat(STACK_NEWLINE).concat(join.call(Object(array_map_x_esm["a" /* default */])(frames, function (frame) {
        error_x_esm_newArrowCheck(this, _this2);

        return frame.toString();
      }.bind(this)), STACK_NEWLINE))
    }
  });
};
/**
 * Captures the other stacks and converts them to an array of Stackframes.
 *
 * @private
 * @param {!object} context - The Custom Error this object.
 * @param {!Error} err - The Error object to be parsed.
 * @param {string} name - The name of the constructor.
 * @returns {boolean} True if the Error object was parsed, otherwise false.
 */


var error_x_esm_errParse = function errParse(context, err, name) {
  var _this3 = this;

  var frames;

  try {
    frames = error_stack_parser_default.a.parse(err);
  } catch (ignore) {
    return false;
  }

  var start = Object(find_index_x_esm["a" /* default */])(frames, function (frame) {
    error_x_esm_newArrowCheck(this, _this3);

    var fName = typeof frame.functionName === 'string' ? frame.functionName : error_x_esm_EMPTY_STRING;
    return stringIndexOf.call(fName, name) > -1;
  }.bind(this));

  if (start > -1) {
    var item = frames[start];
    frames = arraySlice.call(frames, start + 1);
    var end = Object(find_index_x_esm["a" /* default */])(frames, function (frame) {
      error_x_esm_newArrowCheck(this, _this3);

      return item.source === frame.source;
    }.bind(this));

    if (end > -1) {
      frames = arraySlice.call(frames, 0, end);
    }
  }

  error_x_esm_defContext(context, frames, name);
  return true;
};
/**
 * The main function for capturing and parsing stacks and setting properties
 * on Custom Error.
 *
 * @private
 * @param {!object} context - The Custom Error this object.
 * @param {string} name - The name of the constructor.
 */


var error_x_esm_parseStack = function parseStack(context, name) {
  if (cV8) {
    error_x_esm_defContext(context, cV8(context), name);
  } else {
    /** @type {Error} */
    var err;

    try {
      // Error must be thrown to get stack in IE
      // noinspection ExceptionCaughtLocallyJS,JSValidateTypes
      throw $Error();
    } catch (e) {
      err = e;
    }

    if (error_x_esm_errParse(context, err, name) === false) {
      var stack = error_x_esm_EMPTY_STRING; // If `Error` has a non-standard `stack`, `stacktrace` or
      // `opera#sourceloc` property that offers a trace of which functions
      // were called, in what order, from which line and  file, and with what
      // argument, then we will set it.

      if (typeof err.stack !== 'undefined') {
        /* eslint-disable-next-line prefer-destructuring */
        stack = err.stack;
      } else {
        // noinspection JSUnresolvedVariable
        if (
        /* eslint-disable-line no-lonely-if */
        typeof err.stacktrace !== 'undefined') {
          // noinspection JSUnresolvedVariable
          stack = err.stacktrace;
        } else {
          var sourceloc = err['opera#sourceloc'];

          if (typeof sourceloc !== 'undefined') {
            stack = sourceloc;
          }
        }
      }

      Object(object_define_properties_x_esm["a" /* default */])(context, {
        frames: {
          value: []
        },
        stack: {
          value: stack
        }
      });
    }
  }
};
/**
 * Test whether we have a valid Error constructor.
 *
 * @private
 * @param {*} ErrorCtr - Constructor to test it creates an Error.
 * @returns {boolean} True if ErrorCtr creates an Error, otherwise false.
 */


var error_x_esm_isErrorCtr = function isErrorCtr(ErrorCtr) {
  if (Object(is_function_x_esm["a" /* default */])(ErrorCtr)) {
    try {
      return isError(new ErrorCtr({}));
    } catch (ignore) {// empty
    }
  }

  return false;
};
/**
 * Detect whether we are creating an 'AssertionError' constructor.
 *
 * @private
 * @param {string} name - Name to test if it is 'AssertionError'.
 * @param {OfErrorConstructor} ErrorCtr - Constructor to test it creates ASSERTION$Error.
 * @returns {boolean} True if either arguments asserts, otherwise false.
 */


var asAssertionError = function asAssertionError(name, ErrorCtr) {
  if (name === 'AssertionError') {
    return true;
  }

  if (error_x_esm_isErrorCtr(ErrorCtr)) {
    var err = new ErrorCtr({
      actual: 'b',
      expected: 'c',
      message: 'a',
      operator: 'd'
    });
    return typeof err.name === 'string' && err.message === 'a' && err.actual === 'b' && err.expected === 'c' && err.operator === 'd';
  }

  return false;
};
/**
 * Message generator for AssertionError.
 *
 * @private
 * @param {!object} message - The message object.
 * @returns {string} The generated message.
 */


var getMessage = function getMessage(message) {
  if (message.operator === 'deepStrictEqual' || message.operator === 'strictEqual') {
    return createErrDiff(message.actual, message.expected, message.operator);
  }

  if (message.operator === 'notDeepStrictEqual' || message.operator === 'notStrictEqual') {
    // In case the objects are equal but the operator requires unequal, show
    // the first object and say A equals B
    var base = kReadableOperator[message.operator];

    var _res = inspectValue(message.actual).split('\n'); // In case "actual" is an object or a function, it should not be
    // reference equal.


    if (message.operator === 'notStrictEqual' && (_typeof(message.actual) === 'object' && message.actual !== null || typeof actual === 'function')) {
      base = kReadableOperator.notStrictEqualObject;
    } // Only remove lines in case it makes sense to collapse those.
    // TODO: Accept env to always show the full error.


    if (_res.length > 50) {
      _res[46] = '...';

      while (_res.length > 47) {
        pop.call(_res);
      }
    } // Only print a single input.


    if (_res.length === 1) {
      return "".concat(base).concat(_res[0].length > 5 ? '\n\n' : ' ').concat(_res[0]);
    }

    return "".concat(base, "\n\n").concat(join.call(_res, '\n'), "\n");
  }

  var res = inspectValue(message.actual);
  var other = inspectValue(message.expected);
  var knownOperator = kReadableOperator[message.operator];

  if (message.operator === 'notDeepEqual' && res === other) {
    res = "".concat(knownOperator, "\n\n").concat(res);

    if (res.length > 1024) {
      res = "".concat(stringSlice.call(res, 0, 1021), "...");
    }

    return res;
  }

  if (res.length > 512) {
    res = "".concat(stringSlice.call(res, 0, 509), "...");
  }

  if (other.length > 512) {
    other = "".concat(stringSlice.call(other, 0, 509), "...");
  }

  if (message.operator === 'deepEqual') {
    res = "".concat(knownOperator, "\n\n").concat(res, "\n\nshould loosely deep-equal\n\n");
  } else {
    var newOp = kReadableOperator["".concat(message.operator, "Unequal")];

    if (newOp) {
      res = "".concat(newOp, "\n\n").concat(res, "\n\nshould not loosely deep-equal\n\n");
    } else {
      other = " ".concat(message.operator, " ").concat(other);
    }
  }

  return "".concat(res).concat(other);
};
/**
 * The toJSON method returns an object representation of the Error object.
 *
 * @private
 * @this {!Object} A custom error instance.
 * @returns {object} An object representation.
 */


var toJSON = function toJSON() {
  return {
    frames: this.frames,
    message: this.message,
    name: this.name,
    stack: this.stack
  };
};
/**
 * Initialise a new instance of a custom error.
 *
 * @private
 * @param {!object} context - The Custom Error this object.
 * @param {object} message - Human-readable description of the error.
 * @param {string} name - The name for the custom Error.
 * @param {OfErrorConstructor} [ErrorCtr=Error] - Error constructor to be used.
 */


var error_x_esm_init = function init(context, message, name, ErrorCtr) {
  if (asAssertionError(name, ErrorCtr)) {
    if (_typeof(message) !== 'object' || message === null) {
      throw new TypeError("The \"options\" argument must be of type Object. Received type ".concat(_typeof(message)));
    }

    Object(object_define_properties_x_esm["a" /* default */])(context, {
      actual: {
        value: message.actual
      },
      code: {
        value: 'ERR_ASSERTION'
      },
      expected: {
        value: message.expected
      },
      generatedMessage: {
        value: castBoolean(message.message) === false
      },
      message: {
        value: message.message || getMessage(message)
      },
      operator: {
        value: message.operator
      }
    });
  } else if (typeof message !== 'undefined') {
    // Standard Errors. Only set `this.message` if the argument `message`
    // was not `undefined`.
    Object(object_define_properties_x_esm["a" /* default */])(context, {
      message: {
        value: Object(to_string_symbols_supported_x_esm["a" /* default */])(message)
      }
    });
  } // Parse and set the 'this' properties.


  error_x_esm_parseStack(context, name);
}; // `init` is used in `eval`, don't delete.


error_x_esm_init({}, 'message', 'name', $Error);
/* eslint-disable-next-line no-void */

var AssertionError = void 0;
var CUSTOM_NAME = 'CustomError';
/**
 * Creates a custom Error constructor. Will use `Error` if argument is not
 * a valid constructor.
 *
 * @function
 * @param {string} [name='Error'] - The name for the custom Error.
 * @param {OfErrorConstructor} [ErrorCtr=Error] - Error constructor to be used.
 * @returns {Function} The custom Error constructor.
 */

var error_x_esm_createErrorCtr = function createErrorCtr(name, ErrorCtr) {
  var ECTR = allCtrs === false || error_x_esm_isErrorCtr(ErrorCtr) === false ? $Error : ErrorCtr;
  var initialName = Object(is_nil_x_esm["a" /* default */])(name) ? CUSTOM_NAME : Object(trim_x_esm["a" /* default */])(Object(to_string_symbols_supported_x_esm["a" /* default */])(name));
  var customName = initialName === CUSTOM_NAME || isVarName(initialName) ? initialName : CUSTOM_NAME;
  var nativeToString = ECTR.prototype.toString;
  /**
   * Create a new object, that prototypically inherits from the `Error`
   * constructor.
   *
   * @private
   * @class CstmCtr
   * @param {string} [message] - Human-readable description of the error.
   */

  var CstmCtr; // noinspection JSUnusedLocalSymbols

  var f = function f(context, message) {
    var isInstCtr = context instanceof CstmCtr;

    if (isInstCtr === false) {
      return new CstmCtr(message);
    }

    error_x_esm_init(context, message, customName, ErrorCtr);
    return context;
  };
  /* eslint-disable-next-line no-new-func */


  CstmCtr = Function('f', "return function ".concat(customName, "(message){return f(this,message)}"))(f); // Inherit the prototype methods from `ECTR`.

  CstmCtr.prototype = Object(object_create_x_esm["a" /* default */])(ECTR.prototype); // noinspection JSValidateTypes

  Object(object_define_properties_x_esm["a" /* default */])(CstmCtr.prototype,
  /** @lends CstmCtr.prototype */
  {
    /**
     * Specifies the function that created an instance's prototype.
     *
     * @class
     */
    constructor: {
      value: CstmCtr
    },

    /**
     * The name property represents a name for the type of error.
     *
     * @default 'Error'
     * @type {string}
     */
    name: {
      value: customName
    },

    /**
     * The toJSON method returns a string representation of the Error object.
     *
     * @returns {string} A JSON stringified representation.
     */
    toJSON: {
      value: toJSON
    },
    toString: {
      value: function $toString() {
        return this instanceof AssertionError ? "".concat(this.name, " [").concat(this.code, "]: ").concat(this.message) : nativeToString.call(this);
      }
    }
  });

  if ($toStringTag) {
    /**
     * Name Symbol.toStringTag.
     *
     * @memberof CstmCtr.prototype
     * @type {string}
     */
    Object(object_define_property_x_esm["a" /* default */])(CstmCtr.prototype, $toStringTag, {
      value: '[object Error]'
    });
  }

  return CstmCtr;
};

var create = error_x_esm_createErrorCtr; // Test if we can use more than just the Error constructor.

try {
  allCtrs = error_x_esm_createErrorCtr('X', SyntaxError)('x') instanceof SyntaxError;
} catch (ignore) {
  allCtrs = false;
}
/**
 * Error constructor for test and validation frameworks that implement the
 * standardized AssertionError specification.
 *
 * @class
 * @param {object} [message] - Need to document the properties.
 */


var AssertionErrorConstructor = error_x_esm_createErrorCtr('AssertionError', Error);
AssertionError = AssertionErrorConstructor;
/**
 * The Error constructor creates an error object.
 *
 * @class
 * @param {string} [message] - Human-readable description of the error.
 */

var ErrorConstructor = error_x_esm_createErrorCtr('Error', Error);
/**
 * Creates an instance representing an error that occurs regarding the
 * global function eval().
 *
 * @class
 * @param {string} [message] - Human-readable description of the error.
 */

var EvalErrorConstructor = error_x_esm_createErrorCtr('EvalError', EvalError); // noinspection JSUnusedGlobalSymbols

/**
 * The InternalError object indicates an error that occurred internally in
 * the JavaScript engine. For example: "InternalError: too much recursion".
 *
 * @class
 * @param {string} [message] - Human-readable description of the error.
 */

var InternalErrorConstructor = error_x_esm_createErrorCtr('InternalError', Error);
/**
 * Creates an instance representing an error that occurs when a numeric
 * variable or parameter is outside of its valid range.
 *
 * @class
 * @param {string} - - [message] Human-readable description of the error.
 */

var RangeErrorConstructor = error_x_esm_createErrorCtr('RangeError', RangeError);
/**
 * Creates an instance representing an error that occurs when de-referencing
 * an invalid reference.
 *
 * @class
 * @param {string} [message] - Human-readable description of the error.
 */

var ReferenceErrorConstructor = error_x_esm_createErrorCtr('ReferenceError', ReferenceError); // noinspection JSUnusedGlobalSymbols

/**
 * Indicates if the Javascript engine supports subclassing of all Error
 * types. If `true` then all are supported, if `false` (only very old
 * browsers IE6) then only `Error` is supported.
 *
 * @type boolean
 * */

var supportsAllConstructors = allCtrs;
/**
 * Creates an instance representing a syntax error that occurs while parsing
 * code in eval().
 *
 * @class
 * @param {string} [message] - Human-readable description of the error.
 */

var SyntaxErrorConstructor = error_x_esm_createErrorCtr('SyntaxError', SyntaxError);
/**
 * Creates an instance representing an error that occurs when a variable or
 * parameter is not of a valid type.
 *
 * @class
 * @param {string} [message] - Human-readable description of the error.
 */

var TypeErrorConstructor = error_x_esm_createErrorCtr('TypeError', TypeError);
/**
 * Creates an instance representing an error that occurs when encodeURI() or
 * decodeURI() are passed invalid parameters.
 *
 * @class
 * @param {string} [message] - Human-readable description of the error.
 */

var URIErrorConstructor = error_x_esm_createErrorCtr('URIError', URIError);



/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var trim_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63);
/* harmony import */ var white_space_x__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49);


var SPACE = ' ';
var RegExpCtr = /none/.constructor;
var reNormalize2018 = new RegExpCtr("[".concat(white_space_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], "]+"), 'g');
var replace = SPACE.replace;
/**
 * This method strips leading and trailing white-space from a string,
 * replaces sequences of whitespace characters by a single space,
 * and returns the resulting string. (ES2019).
 *
 * @param {string} [string] - The string to be normalized.
 * @throws {TypeError} If string is null or undefined or not coercible.
 */

var normalizeSpace = function normalizeSpace(string) {
  return replace.call(Object(trim_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(string), reNormalize2018, SPACE);
};

/* harmony default export */ __webpack_exports__["a"] = (normalizeSpace);



/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var require_object_coercible_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var to_string_x__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);


/**
 * This method requires an argument is corecible then converts using ToString.
 *
 * @param {*} [value] - The value to converted to a string.
 * @throws {TypeError} If value is null or undefined.
 * @returns {string} The value as a string.
 */

var requireCoercibleToString = function requireCoercibleToString(value) {
  return Object(to_string_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Object(require_object_coercible_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(value));
};

/* harmony default export */ __webpack_exports__["a"] = (requireCoercibleToString);



/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var to_string_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var require_coercible_to_string_x__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61);


var EMPTY_STRING = '';
var STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm;
var replace = EMPTY_STRING.replace;
/**
 * This method replaces comments in a string.
 *
 * @param {string} [string] - The string to be stripped.
 * @param {string} [replacement=''] - The string to be used as a replacement.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @throws {TypeError} If replacement is not coercible.
 * @returns {string} The new string with the comments replaced.
 */

var replaceComments = function replaceComments(string, replacement) {
  return replace.call(Object(require_coercible_to_string_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(string), STRIP_COMMENTS, arguments.length > 1 ? Object(to_string_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(replacement) : EMPTY_STRING);
};

/* harmony default export */ __webpack_exports__["a"] = (replaceComments);



/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/trim-left-x/dist/trim-left-x.esm.js
var trim_left_x_esm = __webpack_require__(72);

// EXTERNAL MODULE: ./node_modules/require-coercible-to-string-x/dist/require-coercible-to-string-x.esm.js
var require_coercible_to_string_x_esm = __webpack_require__(61);

// EXTERNAL MODULE: ./node_modules/white-space-x/dist/white-space-x.esm.js
var white_space_x_esm = __webpack_require__(49);

// CONCATENATED MODULE: ./node_modules/trim-right-x/dist/trim-right-x.esm.js


var EMPTY_STRING = '';
var RegExpCtr = /none/.constructor;
var reRight2018 = new RegExpCtr("[".concat(white_space_x_esm["a" /* default */], "]+$"));
var replace = EMPTY_STRING.replace;
/**
 * This method removes whitespace from the end of a string. (ES2019).
 *
 * @param {string} [string] - The string to trim the right end whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The right trimmed string.
 */

var trim_right_x_esm_trimEnd = function trimEnd(string) {
  return replace.call(Object(require_coercible_to_string_x_esm["a" /* default */])(string), reRight2018, EMPTY_STRING);
};

/* harmony default export */ var trim_right_x_esm = (trim_right_x_esm_trimEnd);


// CONCATENATED MODULE: ./node_modules/trim-x/dist/trim-x.esm.js


/**
 * This method removes whitespace from the start and end of a string.
 * (ES2019).
 *
 * @param {string} [string] - The string to trim the whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The trimmed string.
 */

var trim_x_esm_trim = function trim(string) {
  return Object(trim_left_x_esm["a" /* default */])(trim_right_x_esm(string));
};

/* harmony default export */ var trim_x_esm = __webpack_exports__["a"] = (trim_x_esm_trim);



/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var attempt_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var split_if_boxed_bug_x__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var to_length_x__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var to_object_x__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var assert_is_function_x__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var require_object_coercible_x__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5);
function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }







var nfe = [].forEach;
var nativeForEach = typeof nfe === 'function' && nfe;

var test1 = function test1() {
  var _this = this;

  var spy = 0;
  var res = attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].call([1, 2], nativeForEach, function (item) {
    _newArrowCheck(this, _this);

    spy += item;
  }.bind(this));
  return res.threw === false && typeof res.value === 'undefined' && spy === 3;
};

var test2 = function test2() {
  var _this2 = this;

  var spy = '';
  var res = attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].call({}.constructor('abc'), nativeForEach, function (item) {
    _newArrowCheck(this, _this2);

    spy += item;
  }.bind(this));
  return res.threw === false && typeof res.value === 'undefined' && spy === 'abc';
};

var test3 = function test3() {
  var spy = 0;
  var res = attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].call(function getArgs() {
    /* eslint-disable-next-line prefer-rest-params */
    return arguments;
  }(1, 2, 3), nativeForEach, function spyAdd1(item) {
    spy += item;
  });
  return res.threw === false && typeof res.value === 'undefined' && spy === 6;
};

var test4 = function test4() {
  var spy = 0;
  var res = attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].call({
    0: 1,
    1: 2,
    3: 3,
    4: 4,
    length: 4
  }, nativeForEach, function spyAdd2(item) {
    spy += item;
  });
  return res.threw === false && typeof res.value === 'undefined' && spy === 6;
};

var test5 = function test5() {
  var doc = typeof document !== 'undefined' && document;

  if (doc) {
    var spy = null;
    var fragment = doc.createDocumentFragment();
    var div = doc.createElement('div');
    fragment.appendChild(div);
    var res = attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].call(fragment.childNodes, nativeForEach, function spyAssign(item) {
      spy = item;
    });
    return res.threw === false && typeof res.value === 'undefined' && spy === div;
  }

  return true;
};

var test6 = function test6() {
  var isStrict = function returnIsStrict() {
    /* eslint-disable-next-line babel/no-invalid-this */
    return true.constructor(this) === false;
  }();

  if (isStrict) {
    var spy = null;
    var res = attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].call([1], nativeForEach, function thisTest() {
      /* eslint-disable-next-line babel/no-invalid-this */
      spy = typeof this === 'string';
    }, 'x');
    return res.threw === false && typeof res.value === 'undefined' && spy === true;
  }

  return true;
};

var test7 = function test7() {
  var spy = {};
  var fn = 'return nativeForEach.call("foo", function (_, __, context) {' + 'if (castBoolean(context) === false || typeof context !== "object") {' + 'spy.value = true;}});';
  /* eslint-disable-next-line no-new-func */

  var res = Object(attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Function('nativeForEach', 'spy', 'castBoolean', fn), nativeForEach, spy, true.constructor);
  return res.threw === false && typeof res.value === 'undefined' && spy.value !== true;
};

var isWorking = true.constructor(nativeForEach) && test1() && test2() && test3() && test4() && test5() && test6() && test7();

var patchedNative = function patchedNative() {
  return function forEach(array, callBack
  /* , thisArg */
  ) {
    Object(require_object_coercible_x__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(array);
    var args = [Object(assert_is_function_x__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(callBack)];

    if (arguments.length > 2) {
      /* eslint-disable-next-line prefer-rest-params,prefer-destructuring */
      args[1] = arguments[2];
    }

    return nativeForEach.apply(array, args);
  };
};

var implementation = function implementation() {
  return function forEach(array, callBack
  /* , thisArg */
  ) {
    var object = Object(to_object_x__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(array); // If no callback function or if callback is not a callable function

    Object(assert_is_function_x__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(callBack);
    var iterable = Object(split_if_boxed_bug_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(object);
    var length = Object(to_length_x__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(iterable.length);
    /* eslint-disable-next-line no-void,prefer-rest-params */

    var thisArg = arguments.length > 2 ? arguments[2] : void 0;
    var noThis = typeof thisArg === 'undefined';

    for (var i = 0; i < length; i += 1) {
      if (i in iterable) {
        if (noThis) {
          callBack(iterable[i], i, object);
        } else {
          callBack.call(thisArg, iterable[i], i, object);
        }
      }
    }
  };
};
/**
 * This method executes a provided function once for each array element.
 *
 * @param {Array} array - The array to iterate over.
 * @param {Function} callBack - Function to execute for each element.
 * @param {*} [thisArg] - Value to use as this when executing callback.
 * @throws {TypeError} If array is null or undefined.
 * @throws {TypeError} If callBack is not a function.
 */


var $forEach = isWorking ? patchedNative() : implementation();
/* harmony default export */ __webpack_exports__["a"] = ($forEach);



/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, global) {var __WEBPACK_AMD_DEFINE_RESULT__;/*! JSON v3.3.2 | https://bestiejs.github.io/json3 | Copyright 2012-2015, Kit Cambridge, Benjamin Tan | http://kit.mit-license.org */
;(function () {
  // Detect the `define` function exposed by asynchronous module loaders. The
  // strict `define` check is necessary for compatibility with `r.js`.
  var isLoader =  true && __webpack_require__(107);

  // A set of types used to distinguish objects from primitives.
  var objectTypes = {
    "function": true,
    "object": true
  };

  // Detect the `exports` object exposed by CommonJS implementations.
  var freeExports = objectTypes[typeof exports] && exports && !exports.nodeType && exports;

  // Use the `global` object exposed by Node (including Browserify via
  // `insert-module-globals`), Narwhal, and Ringo as the default context,
  // and the `window` object in browsers. Rhino exports a `global` function
  // instead.
  var root = objectTypes[typeof window] && window || this,
      freeGlobal = freeExports && objectTypes[typeof module] && module && !module.nodeType && typeof global == "object" && global;

  if (freeGlobal && (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal || freeGlobal.self === freeGlobal)) {
    root = freeGlobal;
  }

  // Public: Initializes JSON 3 using the given `context` object, attaching the
  // `stringify` and `parse` functions to the specified `exports` object.
  function runInContext(context, exports) {
    context || (context = root.Object());
    exports || (exports = root.Object());

    // Native constructor aliases.
    var Number = context.Number || root.Number,
        String = context.String || root.String,
        Object = context.Object || root.Object,
        Date = context.Date || root.Date,
        SyntaxError = context.SyntaxError || root.SyntaxError,
        TypeError = context.TypeError || root.TypeError,
        Math = context.Math || root.Math,
        nativeJSON = context.JSON || root.JSON;

    // Delegate to the native `stringify` and `parse` implementations.
    if (typeof nativeJSON == "object" && nativeJSON) {
      exports.stringify = nativeJSON.stringify;
      exports.parse = nativeJSON.parse;
    }

    // Convenience aliases.
    var objectProto = Object.prototype,
        getClass = objectProto.toString,
        isProperty = objectProto.hasOwnProperty,
        undefined;

    // Internal: Contains `try...catch` logic used by other functions.
    // This prevents other functions from being deoptimized.
    function attempt(func, errorFunc) {
      try {
        func();
      } catch (exception) {
        if (errorFunc) {
          errorFunc();
        }
      }
    }

    // Test the `Date#getUTC*` methods. Based on work by @Yaffle.
    var isExtended = new Date(-3509827334573292);
    attempt(function () {
      // The `getUTCFullYear`, `Month`, and `Date` methods return nonsensical
      // results for certain dates in Opera >= 10.53.
      isExtended = isExtended.getUTCFullYear() == -109252 && isExtended.getUTCMonth() === 0 && isExtended.getUTCDate() === 1 &&
        isExtended.getUTCHours() == 10 && isExtended.getUTCMinutes() == 37 && isExtended.getUTCSeconds() == 6 && isExtended.getUTCMilliseconds() == 708;
    });

    // Internal: Determines whether the native `JSON.stringify` and `parse`
    // implementations are spec-compliant. Based on work by Ken Snyder.
    function has(name) {
      if (has[name] != null) {
        // Return cached feature test result.
        return has[name];
      }
      var isSupported;
      if (name == "bug-string-char-index") {
        // IE <= 7 doesn't support accessing string characters using square
        // bracket notation. IE 8 only supports this for primitives.
        isSupported = "a"[0] != "a";
      } else if (name == "json") {
        // Indicates whether both `JSON.stringify` and `JSON.parse` are
        // supported.
        isSupported = has("json-stringify") && has("date-serialization") && has("json-parse");
      } else if (name == "date-serialization") {
        // Indicates whether `Date`s can be serialized accurately by `JSON.stringify`.
        isSupported = has("json-stringify") && isExtended;
        if (isSupported) {
          var stringify = exports.stringify;
          attempt(function () {
            isSupported =
              // JSON 2, Prototype <= 1.7, and older WebKit builds incorrectly
              // serialize extended years.
              stringify(new Date(-8.64e15)) == '"-271821-04-20T00:00:00.000Z"' &&
              // The milliseconds are optional in ES 5, but required in 5.1.
              stringify(new Date(8.64e15)) == '"+275760-09-13T00:00:00.000Z"' &&
              // Firefox <= 11.0 incorrectly serializes years prior to 0 as negative
              // four-digit years instead of six-digit years. Credits: @Yaffle.
              stringify(new Date(-621987552e5)) == '"-000001-01-01T00:00:00.000Z"' &&
              // Safari <= 5.1.5 and Opera >= 10.53 incorrectly serialize millisecond
              // values less than 1000. Credits: @Yaffle.
              stringify(new Date(-1)) == '"1969-12-31T23:59:59.999Z"';
          });
        }
      } else {
        var value, serialized = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
        // Test `JSON.stringify`.
        if (name == "json-stringify") {
          var stringify = exports.stringify, stringifySupported = typeof stringify == "function";
          if (stringifySupported) {
            // A test function object with a custom `toJSON` method.
            (value = function () {
              return 1;
            }).toJSON = value;
            attempt(function () {
              stringifySupported =
                // Firefox 3.1b1 and b2 serialize string, number, and boolean
                // primitives as object literals.
                stringify(0) === "0" &&
                // FF 3.1b1, b2, and JSON 2 serialize wrapped primitives as object
                // literals.
                stringify(new Number()) === "0" &&
                stringify(new String()) == '""' &&
                // FF 3.1b1, 2 throw an error if the value is `null`, `undefined`, or
                // does not define a canonical JSON representation (this applies to
                // objects with `toJSON` properties as well, *unless* they are nested
                // within an object or array).
                stringify(getClass) === undefined &&
                // IE 8 serializes `undefined` as `"undefined"`. Safari <= 5.1.7 and
                // FF 3.1b3 pass this test.
                stringify(undefined) === undefined &&
                // Safari <= 5.1.7 and FF 3.1b3 throw `Error`s and `TypeError`s,
                // respectively, if the value is omitted entirely.
                stringify() === undefined &&
                // FF 3.1b1, 2 throw an error if the given value is not a number,
                // string, array, object, Boolean, or `null` literal. This applies to
                // objects with custom `toJSON` methods as well, unless they are nested
                // inside object or array literals. YUI 3.0.0b1 ignores custom `toJSON`
                // methods entirely.
                stringify(value) === "1" &&
                stringify([value]) == "[1]" &&
                // Prototype <= 1.6.1 serializes `[undefined]` as `"[]"` instead of
                // `"[null]"`.
                stringify([undefined]) == "[null]" &&
                // YUI 3.0.0b1 fails to serialize `null` literals.
                stringify(null) == "null" &&
                // FF 3.1b1, 2 halts serialization if an array contains a function:
                // `[1, true, getClass, 1]` serializes as "[1,true,],". FF 3.1b3
                // elides non-JSON values from objects and arrays, unless they
                // define custom `toJSON` methods.
                stringify([undefined, getClass, null]) == "[null,null,null]" &&
                // Simple serialization test. FF 3.1b1 uses Unicode escape sequences
                // where character escape codes are expected (e.g., `\b` => `\u0008`).
                stringify({ "a": [value, true, false, null, "\x00\b\n\f\r\t"] }) == serialized &&
                // FF 3.1b1 and b2 ignore the `filter` and `width` arguments.
                stringify(null, value) === "1" &&
                stringify([1, 2], null, 1) == "[\n 1,\n 2\n]";
            }, function () {
              stringifySupported = false;
            });
          }
          isSupported = stringifySupported;
        }
        // Test `JSON.parse`.
        if (name == "json-parse") {
          var parse = exports.parse, parseSupported;
          if (typeof parse == "function") {
            attempt(function () {
              // FF 3.1b1, b2 will throw an exception if a bare literal is provided.
              // Conforming implementations should also coerce the initial argument to
              // a string prior to parsing.
              if (parse("0") === 0 && !parse(false)) {
                // Simple parsing test.
                value = parse(serialized);
                parseSupported = value["a"].length == 5 && value["a"][0] === 1;
                if (parseSupported) {
                  attempt(function () {
                    // Safari <= 5.1.2 and FF 3.1b1 allow unescaped tabs in strings.
                    parseSupported = !parse('"\t"');
                  });
                  if (parseSupported) {
                    attempt(function () {
                      // FF 4.0 and 4.0.1 allow leading `+` signs and leading
                      // decimal points. FF 4.0, 4.0.1, and IE 9-10 also allow
                      // certain octal literals.
                      parseSupported = parse("01") !== 1;
                    });
                  }
                  if (parseSupported) {
                    attempt(function () {
                      // FF 4.0, 4.0.1, and Rhino 1.7R3-R4 allow trailing decimal
                      // points. These environments, along with FF 3.1b1 and 2,
                      // also allow trailing commas in JSON objects and arrays.
                      parseSupported = parse("1.") !== 1;
                    });
                  }
                }
              }
            }, function () {
              parseSupported = false;
            });
          }
          isSupported = parseSupported;
        }
      }
      return has[name] = !!isSupported;
    }
    has["bug-string-char-index"] = has["date-serialization"] = has["json"] = has["json-stringify"] = has["json-parse"] = null;

    if (!has("json")) {
      // Common `[[Class]]` name aliases.
      var functionClass = "[object Function]",
          dateClass = "[object Date]",
          numberClass = "[object Number]",
          stringClass = "[object String]",
          arrayClass = "[object Array]",
          booleanClass = "[object Boolean]";

      // Detect incomplete support for accessing string characters by index.
      var charIndexBuggy = has("bug-string-char-index");

      // Internal: Normalizes the `for...in` iteration algorithm across
      // environments. Each enumerated key is yielded to a `callback` function.
      var forOwn = function (object, callback) {
        var size = 0, Properties, dontEnums, property;

        // Tests for bugs in the current environment's `for...in` algorithm. The
        // `valueOf` property inherits the non-enumerable flag from
        // `Object.prototype` in older versions of IE, Netscape, and Mozilla.
        (Properties = function () {
          this.valueOf = 0;
        }).prototype.valueOf = 0;

        // Iterate over a new instance of the `Properties` class.
        dontEnums = new Properties();
        for (property in dontEnums) {
          // Ignore all properties inherited from `Object.prototype`.
          if (isProperty.call(dontEnums, property)) {
            size++;
          }
        }
        Properties = dontEnums = null;

        // Normalize the iteration algorithm.
        if (!size) {
          // A list of non-enumerable properties inherited from `Object.prototype`.
          dontEnums = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"];
          // IE <= 8, Mozilla 1.0, and Netscape 6.2 ignore shadowed non-enumerable
          // properties.
          forOwn = function (object, callback) {
            var isFunction = getClass.call(object) == functionClass, property, length;
            var hasProperty = !isFunction && typeof object.constructor != "function" && objectTypes[typeof object.hasOwnProperty] && object.hasOwnProperty || isProperty;
            for (property in object) {
              // Gecko <= 1.0 enumerates the `prototype` property of functions under
              // certain conditions; IE does not.
              if (!(isFunction && property == "prototype") && hasProperty.call(object, property)) {
                callback(property);
              }
            }
            // Manually invoke the callback for each non-enumerable property.
            for (length = dontEnums.length; property = dontEnums[--length];) {
              if (hasProperty.call(object, property)) {
                callback(property);
              }
            }
          };
        } else {
          // No bugs detected; use the standard `for...in` algorithm.
          forOwn = function (object, callback) {
            var isFunction = getClass.call(object) == functionClass, property, isConstructor;
            for (property in object) {
              if (!(isFunction && property == "prototype") && isProperty.call(object, property) && !(isConstructor = property === "constructor")) {
                callback(property);
              }
            }
            // Manually invoke the callback for the `constructor` property due to
            // cross-environment inconsistencies.
            if (isConstructor || isProperty.call(object, (property = "constructor"))) {
              callback(property);
            }
          };
        }
        return forOwn(object, callback);
      };

      // Public: Serializes a JavaScript `value` as a JSON string. The optional
      // `filter` argument may specify either a function that alters how object and
      // array members are serialized, or an array of strings and numbers that
      // indicates which properties should be serialized. The optional `width`
      // argument may be either a string or number that specifies the indentation
      // level of the output.
      if (!has("json-stringify") && !has("date-serialization")) {
        // Internal: A map of control characters and their escaped equivalents.
        var Escapes = {
          92: "\\\\",
          34: '\\"',
          8: "\\b",
          12: "\\f",
          10: "\\n",
          13: "\\r",
          9: "\\t"
        };

        // Internal: Converts `value` into a zero-padded string such that its
        // length is at least equal to `width`. The `width` must be <= 6.
        var leadingZeroes = "000000";
        var toPaddedString = function (width, value) {
          // The `|| 0` expression is necessary to work around a bug in
          // Opera <= 7.54u2 where `0 == -0`, but `String(-0) !== "0"`.
          return (leadingZeroes + (value || 0)).slice(-width);
        };

        // Internal: Serializes a date object.
        var serializeDate = function (value) {
          var getData, year, month, date, time, hours, minutes, seconds, milliseconds;
          // Define additional utility methods if the `Date` methods are buggy.
          if (!isExtended) {
            var floor = Math.floor;
            // A mapping between the months of the year and the number of days between
            // January 1st and the first of the respective month.
            var Months = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
            // Internal: Calculates the number of days between the Unix epoch and the
            // first day of the given month.
            var getDay = function (year, month) {
              return Months[month] + 365 * (year - 1970) + floor((year - 1969 + (month = +(month > 1))) / 4) - floor((year - 1901 + month) / 100) + floor((year - 1601 + month) / 400);
            };
            getData = function (value) {
              // Manually compute the year, month, date, hours, minutes,
              // seconds, and milliseconds if the `getUTC*` methods are
              // buggy. Adapted from @Yaffle's `date-shim` project.
              date = floor(value / 864e5);
              for (year = floor(date / 365.2425) + 1970 - 1; getDay(year + 1, 0) <= date; year++);
              for (month = floor((date - getDay(year, 0)) / 30.42); getDay(year, month + 1) <= date; month++);
              date = 1 + date - getDay(year, month);
              // The `time` value specifies the time within the day (see ES
              // 5.1 section 15.9.1.2). The formula `(A % B + B) % B` is used
              // to compute `A modulo B`, as the `%` operator does not
              // correspond to the `modulo` operation for negative numbers.
              time = (value % 864e5 + 864e5) % 864e5;
              // The hours, minutes, seconds, and milliseconds are obtained by
              // decomposing the time within the day. See section 15.9.1.10.
              hours = floor(time / 36e5) % 24;
              minutes = floor(time / 6e4) % 60;
              seconds = floor(time / 1e3) % 60;
              milliseconds = time % 1e3;
            };
          } else {
            getData = function (value) {
              year = value.getUTCFullYear();
              month = value.getUTCMonth();
              date = value.getUTCDate();
              hours = value.getUTCHours();
              minutes = value.getUTCMinutes();
              seconds = value.getUTCSeconds();
              milliseconds = value.getUTCMilliseconds();
            };
          }
          serializeDate = function (value) {
            if (value > -1 / 0 && value < 1 / 0) {
              // Dates are serialized according to the `Date#toJSON` method
              // specified in ES 5.1 section 15.9.5.44. See section 15.9.1.15
              // for the ISO 8601 date time string format.
              getData(value);
              // Serialize extended years correctly.
              value = (year <= 0 || year >= 1e4 ? (year < 0 ? "-" : "+") + toPaddedString(6, year < 0 ? -year : year) : toPaddedString(4, year)) +
              "-" + toPaddedString(2, month + 1) + "-" + toPaddedString(2, date) +
              // Months, dates, hours, minutes, and seconds should have two
              // digits; milliseconds should have three.
              "T" + toPaddedString(2, hours) + ":" + toPaddedString(2, minutes) + ":" + toPaddedString(2, seconds) +
              // Milliseconds are optional in ES 5.0, but required in 5.1.
              "." + toPaddedString(3, milliseconds) + "Z";
              year = month = date = hours = minutes = seconds = milliseconds = null;
            } else {
              value = null;
            }
            return value;
          };
          return serializeDate(value);
        };

        // For environments with `JSON.stringify` but buggy date serialization,
        // we override the native `Date#toJSON` implementation with a
        // spec-compliant one.
        if (has("json-stringify") && !has("date-serialization")) {
          // Internal: the `Date#toJSON` implementation used to override the native one.
          function dateToJSON (key) {
            return serializeDate(this);
          }

          // Public: `JSON.stringify`. See ES 5.1 section 15.12.3.
          var nativeStringify = exports.stringify;
          exports.stringify = function (source, filter, width) {
            var nativeToJSON = Date.prototype.toJSON;
            Date.prototype.toJSON = dateToJSON;
            var result = nativeStringify(source, filter, width);
            Date.prototype.toJSON = nativeToJSON;
            return result;
          }
        } else {
          // Internal: Double-quotes a string `value`, replacing all ASCII control
          // characters (characters with code unit values between 0 and 31) with
          // their escaped equivalents. This is an implementation of the
          // `Quote(value)` operation defined in ES 5.1 section 15.12.3.
          var unicodePrefix = "\\u00";
          var escapeChar = function (character) {
            var charCode = character.charCodeAt(0), escaped = Escapes[charCode];
            if (escaped) {
              return escaped;
            }
            return unicodePrefix + toPaddedString(2, charCode.toString(16));
          };
          var reEscape = /[\x00-\x1f\x22\x5c]/g;
          var quote = function (value) {
            reEscape.lastIndex = 0;
            return '"' +
              (
                reEscape.test(value)
                  ? value.replace(reEscape, escapeChar)
                  : value
              ) +
              '"';
          };

          // Internal: Recursively serializes an object. Implements the
          // `Str(key, holder)`, `JO(value)`, and `JA(value)` operations.
          var serialize = function (property, object, callback, properties, whitespace, indentation, stack) {
            var value, type, className, results, element, index, length, prefix, result;
            attempt(function () {
              // Necessary for host object support.
              value = object[property];
            });
            if (typeof value == "object" && value) {
              if (value.getUTCFullYear && getClass.call(value) == dateClass && value.toJSON === Date.prototype.toJSON) {
                value = serializeDate(value);
              } else if (typeof value.toJSON == "function") {
                value = value.toJSON(property);
              }
            }
            if (callback) {
              // If a replacement function was provided, call it to obtain the value
              // for serialization.
              value = callback.call(object, property, value);
            }
            // Exit early if value is `undefined` or `null`.
            if (value == undefined) {
              return value === undefined ? value : "null";
            }
            type = typeof value;
            // Only call `getClass` if the value is an object.
            if (type == "object") {
              className = getClass.call(value);
            }
            switch (className || type) {
              case "boolean":
              case booleanClass:
                // Booleans are represented literally.
                return "" + value;
              case "number":
              case numberClass:
                // JSON numbers must be finite. `Infinity` and `NaN` are serialized as
                // `"null"`.
                return value > -1 / 0 && value < 1 / 0 ? "" + value : "null";
              case "string":
              case stringClass:
                // Strings are double-quoted and escaped.
                return quote("" + value);
            }
            // Recursively serialize objects and arrays.
            if (typeof value == "object") {
              // Check for cyclic structures. This is a linear search; performance
              // is inversely proportional to the number of unique nested objects.
              for (length = stack.length; length--;) {
                if (stack[length] === value) {
                  // Cyclic structures cannot be serialized by `JSON.stringify`.
                  throw TypeError();
                }
              }
              // Add the object to the stack of traversed objects.
              stack.push(value);
              results = [];
              // Save the current indentation level and indent one additional level.
              prefix = indentation;
              indentation += whitespace;
              if (className == arrayClass) {
                // Recursively serialize array elements.
                for (index = 0, length = value.length; index < length; index++) {
                  element = serialize(index, value, callback, properties, whitespace, indentation, stack);
                  results.push(element === undefined ? "null" : element);
                }
                result = results.length ? (whitespace ? "[\n" + indentation + results.join(",\n" + indentation) + "\n" + prefix + "]" : ("[" + results.join(",") + "]")) : "[]";
              } else {
                // Recursively serialize object members. Members are selected from
                // either a user-specified list of property names, or the object
                // itself.
                forOwn(properties || value, function (property) {
                  var element = serialize(property, value, callback, properties, whitespace, indentation, stack);
                  if (element !== undefined) {
                    // According to ES 5.1 section 15.12.3: "If `gap` {whitespace}
                    // is not the empty string, let `member` {quote(property) + ":"}
                    // be the concatenation of `member` and the `space` character."
                    // The "`space` character" refers to the literal space
                    // character, not the `space` {width} argument provided to
                    // `JSON.stringify`.
                    results.push(quote(property) + ":" + (whitespace ? " " : "") + element);
                  }
                });
                result = results.length ? (whitespace ? "{\n" + indentation + results.join(",\n" + indentation) + "\n" + prefix + "}" : ("{" + results.join(",") + "}")) : "{}";
              }
              // Remove the object from the traversed object stack.
              stack.pop();
              return result;
            }
          };

          // Public: `JSON.stringify`. See ES 5.1 section 15.12.3.
          exports.stringify = function (source, filter, width) {
            var whitespace, callback, properties, className;
            if (objectTypes[typeof filter] && filter) {
              className = getClass.call(filter);
              if (className == functionClass) {
                callback = filter;
              } else if (className == arrayClass) {
                // Convert the property names array into a makeshift set.
                properties = {};
                for (var index = 0, length = filter.length, value; index < length;) {
                  value = filter[index++];
                  className = getClass.call(value);
                  if (className == "[object String]" || className == "[object Number]") {
                    properties[value] = 1;
                  }
                }
              }
            }
            if (width) {
              className = getClass.call(width);
              if (className == numberClass) {
                // Convert the `width` to an integer and create a string containing
                // `width` number of space characters.
                if ((width -= width % 1) > 0) {
                  if (width > 10) {
                    width = 10;
                  }
                  for (whitespace = ""; whitespace.length < width;) {
                    whitespace += " ";
                  }
                }
              } else if (className == stringClass) {
                whitespace = width.length <= 10 ? width : width.slice(0, 10);
              }
            }
            // Opera <= 7.54u2 discards the values associated with empty string keys
            // (`""`) only if they are used directly within an object member list
            // (e.g., `!("" in { "": 1})`).
            return serialize("", (value = {}, value[""] = source, value), callback, properties, whitespace, "", []);
          };
        }
      }

      // Public: Parses a JSON source string.
      if (!has("json-parse")) {
        var fromCharCode = String.fromCharCode;

        // Internal: A map of escaped control characters and their unescaped
        // equivalents.
        var Unescapes = {
          92: "\\",
          34: '"',
          47: "/",
          98: "\b",
          116: "\t",
          110: "\n",
          102: "\f",
          114: "\r"
        };

        // Internal: Stores the parser state.
        var Index, Source;

        // Internal: Resets the parser state and throws a `SyntaxError`.
        var abort = function () {
          Index = Source = null;
          throw SyntaxError();
        };

        // Internal: Returns the next token, or `"$"` if the parser has reached
        // the end of the source string. A token may be a string, number, `null`
        // literal, or Boolean literal.
        var lex = function () {
          var source = Source, length = source.length, value, begin, position, isSigned, charCode;
          while (Index < length) {
            charCode = source.charCodeAt(Index);
            switch (charCode) {
              case 9: case 10: case 13: case 32:
                // Skip whitespace tokens, including tabs, carriage returns, line
                // feeds, and space characters.
                Index++;
                break;
              case 123: case 125: case 91: case 93: case 58: case 44:
                // Parse a punctuator token (`{`, `}`, `[`, `]`, `:`, or `,`) at
                // the current position.
                value = charIndexBuggy ? source.charAt(Index) : source[Index];
                Index++;
                return value;
              case 34:
                // `"` delimits a JSON string; advance to the next character and
                // begin parsing the string. String tokens are prefixed with the
                // sentinel `@` character to distinguish them from punctuators and
                // end-of-string tokens.
                for (value = "@", Index++; Index < length;) {
                  charCode = source.charCodeAt(Index);
                  if (charCode < 32) {
                    // Unescaped ASCII control characters (those with a code unit
                    // less than the space character) are not permitted.
                    abort();
                  } else if (charCode == 92) {
                    // A reverse solidus (`\`) marks the beginning of an escaped
                    // control character (including `"`, `\`, and `/`) or Unicode
                    // escape sequence.
                    charCode = source.charCodeAt(++Index);
                    switch (charCode) {
                      case 92: case 34: case 47: case 98: case 116: case 110: case 102: case 114:
                        // Revive escaped control characters.
                        value += Unescapes[charCode];
                        Index++;
                        break;
                      case 117:
                        // `\u` marks the beginning of a Unicode escape sequence.
                        // Advance to the first character and validate the
                        // four-digit code point.
                        begin = ++Index;
                        for (position = Index + 4; Index < position; Index++) {
                          charCode = source.charCodeAt(Index);
                          // A valid sequence comprises four hexdigits (case-
                          // insensitive) that form a single hexadecimal value.
                          if (!(charCode >= 48 && charCode <= 57 || charCode >= 97 && charCode <= 102 || charCode >= 65 && charCode <= 70)) {
                            // Invalid Unicode escape sequence.
                            abort();
                          }
                        }
                        // Revive the escaped character.
                        value += fromCharCode("0x" + source.slice(begin, Index));
                        break;
                      default:
                        // Invalid escape sequence.
                        abort();
                    }
                  } else {
                    if (charCode == 34) {
                      // An unescaped double-quote character marks the end of the
                      // string.
                      break;
                    }
                    charCode = source.charCodeAt(Index);
                    begin = Index;
                    // Optimize for the common case where a string is valid.
                    while (charCode >= 32 && charCode != 92 && charCode != 34) {
                      charCode = source.charCodeAt(++Index);
                    }
                    // Append the string as-is.
                    value += source.slice(begin, Index);
                  }
                }
                if (source.charCodeAt(Index) == 34) {
                  // Advance to the next character and return the revived string.
                  Index++;
                  return value;
                }
                // Unterminated string.
                abort();
              default:
                // Parse numbers and literals.
                begin = Index;
                // Advance past the negative sign, if one is specified.
                if (charCode == 45) {
                  isSigned = true;
                  charCode = source.charCodeAt(++Index);
                }
                // Parse an integer or floating-point value.
                if (charCode >= 48 && charCode <= 57) {
                  // Leading zeroes are interpreted as octal literals.
                  if (charCode == 48 && ((charCode = source.charCodeAt(Index + 1)), charCode >= 48 && charCode <= 57)) {
                    // Illegal octal literal.
                    abort();
                  }
                  isSigned = false;
                  // Parse the integer component.
                  for (; Index < length && ((charCode = source.charCodeAt(Index)), charCode >= 48 && charCode <= 57); Index++);
                  // Floats cannot contain a leading decimal point; however, this
                  // case is already accounted for by the parser.
                  if (source.charCodeAt(Index) == 46) {
                    position = ++Index;
                    // Parse the decimal component.
                    for (; position < length; position++) {
                      charCode = source.charCodeAt(position);
                      if (charCode < 48 || charCode > 57) {
                        break;
                      }
                    }
                    if (position == Index) {
                      // Illegal trailing decimal.
                      abort();
                    }
                    Index = position;
                  }
                  // Parse exponents. The `e` denoting the exponent is
                  // case-insensitive.
                  charCode = source.charCodeAt(Index);
                  if (charCode == 101 || charCode == 69) {
                    charCode = source.charCodeAt(++Index);
                    // Skip past the sign following the exponent, if one is
                    // specified.
                    if (charCode == 43 || charCode == 45) {
                      Index++;
                    }
                    // Parse the exponential component.
                    for (position = Index; position < length; position++) {
                      charCode = source.charCodeAt(position);
                      if (charCode < 48 || charCode > 57) {
                        break;
                      }
                    }
                    if (position == Index) {
                      // Illegal empty exponent.
                      abort();
                    }
                    Index = position;
                  }
                  // Coerce the parsed value to a JavaScript number.
                  return +source.slice(begin, Index);
                }
                // A negative sign may only precede numbers.
                if (isSigned) {
                  abort();
                }
                // `true`, `false`, and `null` literals.
                var temp = source.slice(Index, Index + 4);
                if (temp == "true") {
                  Index += 4;
                  return true;
                } else if (temp == "fals" && source.charCodeAt(Index + 4 ) == 101) {
                  Index += 5;
                  return false;
                } else if (temp == "null") {
                  Index += 4;
                  return null;
                }
                // Unrecognized token.
                abort();
            }
          }
          // Return the sentinel `$` character if the parser has reached the end
          // of the source string.
          return "$";
        };

        // Internal: Parses a JSON `value` token.
        var get = function (value) {
          var results, hasMembers;
          if (value == "$") {
            // Unexpected end of input.
            abort();
          }
          if (typeof value == "string") {
            if ((charIndexBuggy ? value.charAt(0) : value[0]) == "@") {
              // Remove the sentinel `@` character.
              return value.slice(1);
            }
            // Parse object and array literals.
            if (value == "[") {
              // Parses a JSON array, returning a new JavaScript array.
              results = [];
              for (;;) {
                value = lex();
                // A closing square bracket marks the end of the array literal.
                if (value == "]") {
                  break;
                }
                // If the array literal contains elements, the current token
                // should be a comma separating the previous element from the
                // next.
                if (hasMembers) {
                  if (value == ",") {
                    value = lex();
                    if (value == "]") {
                      // Unexpected trailing `,` in array literal.
                      abort();
                    }
                  } else {
                    // A `,` must separate each array element.
                    abort();
                  }
                } else {
                  hasMembers = true;
                }
                // Elisions and leading commas are not permitted.
                if (value == ",") {
                  abort();
                }
                results.push(get(value));
              }
              return results;
            } else if (value == "{") {
              // Parses a JSON object, returning a new JavaScript object.
              results = {};
              for (;;) {
                value = lex();
                // A closing curly brace marks the end of the object literal.
                if (value == "}") {
                  break;
                }
                // If the object literal contains members, the current token
                // should be a comma separator.
                if (hasMembers) {
                  if (value == ",") {
                    value = lex();
                    if (value == "}") {
                      // Unexpected trailing `,` in object literal.
                      abort();
                    }
                  } else {
                    // A `,` must separate each object member.
                    abort();
                  }
                } else {
                  hasMembers = true;
                }
                // Leading commas are not permitted, object property names must be
                // double-quoted strings, and a `:` must separate each property
                // name and value.
                if (value == "," || typeof value != "string" || (charIndexBuggy ? value.charAt(0) : value[0]) != "@" || lex() != ":") {
                  abort();
                }
                results[value.slice(1)] = get(lex());
              }
              return results;
            }
            // Unexpected token encountered.
            abort();
          }
          return value;
        };

        // Internal: Updates a traversed object member.
        var update = function (source, property, callback) {
          var element = walk(source, property, callback);
          if (element === undefined) {
            delete source[property];
          } else {
            source[property] = element;
          }
        };

        // Internal: Recursively traverses a parsed JSON object, invoking the
        // `callback` function for each value. This is an implementation of the
        // `Walk(holder, name)` operation defined in ES 5.1 section 15.12.2.
        var walk = function (source, property, callback) {
          var value = source[property], length;
          if (typeof value == "object" && value) {
            // `forOwn` can't be used to traverse an array in Opera <= 8.54
            // because its `Object#hasOwnProperty` implementation returns `false`
            // for array indices (e.g., `![1, 2, 3].hasOwnProperty("0")`).
            if (getClass.call(value) == arrayClass) {
              for (length = value.length; length--;) {
                update(getClass, forOwn, value, length, callback);
              }
            } else {
              forOwn(value, function (property) {
                update(value, property, callback);
              });
            }
          }
          return callback.call(source, property, value);
        };

        // Public: `JSON.parse`. See ES 5.1 section 15.12.2.
        exports.parse = function (source, callback) {
          var result, value;
          Index = 0;
          Source = "" + source;
          result = get(lex());
          // If a JSON string contains multiple tokens, it is invalid.
          if (lex() != "$") {
            abort();
          }
          // Reset the parser state.
          Index = Source = null;
          return callback && getClass.call(callback) == functionClass ? walk((value = {}, value[""] = result, value), "", callback) : result;
        };
      }
    }

    exports.runInContext = runInContext;
    return exports;
  }

  if (freeExports && !isLoader) {
    // Export for CommonJS environments.
    runInContext(root, freeExports);
  } else {
    // Export for web browsers and JavaScript engines.
    var nativeJSON = root.JSON,
        previousJSON = root.JSON3,
        isRestored = false;

    var JSON3 = runInContext(root, (root.JSON3 = {
      // Public: Restores the original value of the global `JSON` object and
      // returns a reference to the `JSON3` object.
      "noConflict": function () {
        if (!isRestored) {
          isRestored = true;
          root.JSON = nativeJSON;
          root.JSON3 = previousJSON;
          nativeJSON = previousJSON = null;
        }
        return JSON3;
      }
    }));

    root.JSON = {
      "parse": JSON3.parse,
      "stringify": JSON3.stringify
    };
  }

  // Export for asynchronous module loaders.
  if (isLoader) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return JSON3;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }
}).call(this);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(106)(module), __webpack_require__(66)))

/***/ }),
/* 66 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var nan_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73);
/* harmony import */ var to_string_x__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var trim_left_x__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72);



var nativeParseInt = parseInt;
/**  @type {Function} */

var castNumber = 0 .constructor; // noinspection JSPotentiallyInvalidConstructorUsage

var _ref = '',
    charAt = _ref.charAt;
var hexRegex = /^[-+]?0[xX]/;
var test = hexRegex.test;
/**
 * This method parses a string argument and returns an integer of the specified
 * radix (the base in mathematical numeral systems). (ES2019).
 *
 * @param {string} [string] - The value to parse. If the string argument is not a
 *  string, then it is converted to a string (using the ToString abstract
 *  operation). Leading whitespace in the string argument is ignored.
 * @param {number} [radix] - An integer between 2 and 36 that represents the radix
 *  (the base in mathematical numeral systems) of the above mentioned string.
 *  Specify 10 for the decimal numeral system commonly used by humans. Always
 *  specify this parameter to eliminate reader confusion and to guarantee
 *  predictable behavior. Different implementations produce different results
 *  when a radix is not specified, usually defaulting the value to 10.
 * @throws {TypeError} If target is a Symbol or is not coercible.
 * @returns {number} An integer number parsed from the given string. If the first
 *  character cannot be converted to a number, NaN is returned.
 */

var $parseInt = function $parseInt(string, radix) {
  var str = Object(trim_left_x__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Object(to_string_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(string));

  if (charAt.call(str, 0) === "\u180E") {
    return nan_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"];
  }

  return nativeParseInt(str, castNumber(radix) || (test.call(hexRegex, str) ? 16 : 10));
};

/* harmony default export */ __webpack_exports__["a"] = ($parseInt);



/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var same_value_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43);

/**
 * This method determines whether two values are the same value.
 * SameValueZero differs from SameValue (`Object.is`) only in its treatment
 * of +0 and -0.
 *
 * @param {*} [x] - The first value to compare.
 * @param {*} [y] - The second value to compare.
 * @returns {boolean} A Boolean indicating whether or not the two arguments
 * are the same value.
 */

var sameValueZero = function sameValueZero(x, y) {
  return x === y || Object(same_value_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(x, y);
};

/* harmony default export */ __webpack_exports__["a"] = (sameValueZero);



/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var to_object_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var to_length_x__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var to_integer_x__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25);
/* harmony import */ var is_array_like_x__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57);





var getMax = function getMax(a, b) {
  return a >= b ? a : b;
};
/**
 * This method calculates a fromIndex of a given value for an array.
 *
 * @param {Array} array - * The array on which to calculate the starting index.
 * @throws {TypeError} If array is null or undefined.
 * @param {number} fromIndex - * The position in this array at which to begin. A
 *  negative value gives the index of array.length + fromIndex by asc.
 * @returns {number} The calculated fromIndex. Default is 0.
 */


var calcFromIndex = function calcFromIndex(array, fromIndex) {
  var object = Object(to_object_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(array);

  if (Object(is_array_like_x__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(object) === false) {
    return 0;
  }

  var index = Object(to_integer_x__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(fromIndex);
  return index >= 0 ? index : getMax(0, Object(to_length_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(object.length) + index);
};

/* harmony default export */ __webpack_exports__["a"] = (calcFromIndex);



/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var attempt_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var is_primitive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var is_primitive__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(is_primitive__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var object_define_properties_x__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }




/** @type {BooleanConstructor} */

var castBoolean = true.constructor;
var nativeCreate = typeof Object.create === 'function' && Object.create;
var isWorking;

if (nativeCreate) {
  var res = Object(attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(nativeCreate, null);
  isWorking = res.threw === false && res.value && _typeof(res.value) === 'object';

  if (isWorking) {
    /* eslint-disable-next-line guard-for-in,no-restricted-syntax,no-unused-vars */
    // noinspection LoopStatementThatDoesntLoopJS
    for (var _ in res.value) {
      isWorking = false;
      break;
    }
  }

  if (isWorking) {
    res = Object(attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(nativeCreate, null, {
      test: {
        value: true
      }
    });
    isWorking = res.threw === false && res.value && _typeof(res.value) === 'object' && res.value.test === true;
  }

  if (isWorking) {
    // Shape - superclass
    var Shape = function Shape() {
      // noinspection JSUnusedGlobalSymbols
      this.x = 0; // noinspection JSUnusedGlobalSymbols

      this.y = 0;
    }; // superclass method


    Shape.prototype.move = function move(x, y) {
      // noinspection JSUnusedGlobalSymbols
      this.x += x; // noinspection JSUnusedGlobalSymbols

      this.y += y;
      return 'Shape moved.';
    }; // Rectangle - subclass


    var Rectangle = function Rectangle() {
      Shape.call(this); // call super constructor.
    };

    res = Object(attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(nativeCreate, Shape.prototype);
    isWorking = res.threw === false && res.value && _typeof(res.value) === 'object';

    if (isWorking) {
      // subclass extends superclass
      Rectangle.prototype = res.value;
      Rectangle.prototype.constructor = Rectangle;
      var rect = new Rectangle();
      isWorking = rect instanceof Rectangle;

      if (isWorking) {
        isWorking = rect instanceof Shape;
      }

      if (isWorking) {
        isWorking = rect.move(1, 1) === 'Shape moved.';
      }
    }
  }
}
/**
 * This method method creates a new object with the specified prototype object and properties.
 *
 * @param {*} prototype - The object which should be the prototype of the newly-created object.
 * @param {*} [properties] - If specified and not undefined, an object whose enumerable own properties
 * (that is, those properties defined upon itself and not enumerable properties along its prototype chain)
 * specify property descriptors to be added to the newly-created object, with the corresponding property names.
 * @throws {TypeError} If the properties parameter isn't null or an object.
 * @returns {boolean} A new object with the specified prototype object and properties.
 */


var $create;

if (isWorking) {
  $create = nativeCreate;
} else {
  var doc = typeof document !== 'undefined' && document; // Contributed by Brandon Benvie, October, 2012

  var createEmpty;
  var supportsProto = {
    __proto__: null
  } instanceof Object === false; // the following produces false positives
  // in Opera Mini => not a reliable check
  // Object.prototype.__proto__ === null

  if (supportsProto || castBoolean(doc) === false) {
    createEmpty = function $createEmpty() {
      return {
        __proto__: null
      };
    };
  } else {
    // Check for document.domain and active x support
    // No need to use active x approach when document.domain is not set
    // see https://github.com/es-shims/es5-shim/issues/150
    // variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
    var shouldUseActiveX = function _shouldUseActiveX() {
      var _this = this;

      // return early if document.domain not set
      if (castBoolean(doc.domain) === false) {
        return false;
      }

      var result = Object(attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function () {
        _newArrowCheck(this, _this);

        /* eslint-disable-next-line no-undef */
        return new ActiveXObject('htmlfile');
      }.bind(this));
      return result.threw === false && Boolean(result.value);
    }; // This supports IE8 when document.domain is used
    // see https://github.com/es-shims/es5-shim/issues/150
    // variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346


    var getEmptyViaActiveX = function _getEmptyViaActiveX() {
      /* eslint-disable-next-line no-undef */
      var xDoc = new ActiveXObject('htmlfile');
      /* eslint-disable-next-line no-useless-escape,prettier/prettier */

      xDoc.write('<script><\/script>');
      xDoc.close(); // noinspection JSUnresolvedVariable

      var empty = xDoc.parentWindow.Object.prototype;
      xDoc = null;
      return empty;
    }; // The original implementation using an iframe
    // before the activex approach was added
    // see https://github.com/es-shims/es5-shim/issues/150


    var getEmptyViaIFrame = function _getEmptyViaIFrame() {
      var iframe = doc.createElement('iframe');
      iframe.style.display = 'none';
      /* eslint-disable-next-line no-script-url */

      iframe.src = 'javascript:';
      var parent = doc.body || doc.documentElement;
      parent.appendChild(iframe);
      var empty = iframe.contentWindow.Object.prototype;
      parent.removeChild(iframe);
      iframe = null;
      return empty;
    }; // In old IE __proto__ can't be used to manually set `null`, nor does
    // any other method exist to make an object that inherits from nothing,
    // aside from Object.prototype itself. Instead, create a new global
    // object and *steal* its Object.prototype and strip it bare. This is
    // used as the prototype to create nullary objects.


    createEmpty = function $createEmpty() {
      // Determine which approach to use
      // see https://github.com/es-shims/es5-shim/issues/150
      var empty = shouldUseActiveX() ? getEmptyViaActiveX() : getEmptyViaIFrame();
      delete empty.constructor;
      delete empty.hasOwnProperty;
      delete empty.propertyIsEnumerable;
      delete empty.isPrototypeOf;
      delete empty.toLocaleString;
      delete empty.toString;
      delete empty.valueOf;
      /* eslint-disable-next-line lodash/prefer-noop */

      var E = function Empty() {};

      E.prototype = empty; // short-circuit future calls

      createEmpty = function $$createEmpty() {
        return new E();
      };

      return new E();
    };
  }

  $create = function create(prototype, properties) {
    var object;
    /* eslint-disable-next-line lodash/prefer-noop */

    var T = function Type() {}; // An empty constructor.


    if (prototype === null) {
      object = createEmpty();
    } else {
      if (is_primitive__WEBPACK_IMPORTED_MODULE_1___default()(prototype)) {
        // In the native implementation `parent` can be `null`
        // OR *any* `instanceof Object`  (Object|Function|Array|RegExp|etc)
        // Use `typeof` tho, b/c in old IE, DOM elements are not `instanceof Object`
        // like they are in modern browsers. Using `Object.create` on DOM elements
        // is...err...probably inappropriate, but the native version allows for it.
        throw new TypeError('Object prototype may only be an Object or null'); // same msg as Chrome
      }

      T.prototype = prototype;
      object = new T(); // IE has no built-in implementation of `Object.getPrototypeOf`
      // neither `__proto__`, but this manually setting `__proto__` will
      // guarantee that `Object.getPrototypeOf` will work as expected with
      // objects created using `Object.create`

      /* eslint-disable-next-line no-proto */

      object.__proto__ = prototype;
    }

    if (typeof properties !== 'undefined') {
      Object(object_define_properties_x__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(object, properties);
    }

    return object;
  };
}

var create = $create;
/* harmony default export */ __webpack_exports__["a"] = (create);



/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var has_symbol_support_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
/* harmony import */ var is_primitive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var is_primitive__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(is_primitive__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var is_date_object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36);
/* harmony import */ var is_date_object__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(is_date_object__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var is_symbol__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16);
/* harmony import */ var is_symbol__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(is_symbol__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var is_function_x__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);
/* harmony import */ var require_object_coercible_x__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5);
/* harmony import */ var is_nil_x__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(17);







var ZERO = 0;
var ONE = 1;
/* eslint-disable-next-line no-void */

var UNDEFINED = void ZERO;
var NUMBER = 'number';
var STRING = 'string';
var DEFAULT = 'default';
/** @type {StringConstructor} */

var StringCtr = STRING.constructor;
/** @type {NumberConstructor} */

var NumberCtr = ZERO.constructor;
/* eslint-disable-next-line compat/compat */

var symToPrimitive = has_symbol_support_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"] && Symbol.toPrimitive;
/* eslint-disable-next-line compat/compat */

var symValueOf = has_symbol_support_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"] && Symbol.prototype.valueOf;
var toStringOrder = ['toString', 'valueOf'];
var toNumberOrder = ['valueOf', 'toString'];
var orderLength = 2;
/**
 * @param {*} ordinary - The ordinary to convert.
 * @param {*} hint - The hint.
 * @returns {*} - The primitive.
 */

var ordinaryToPrimitive = function _ordinaryToPrimitive(ordinary, hint) {
  Object(require_object_coercible_x__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(ordinary);

  if (typeof hint !== 'string' || hint !== NUMBER && hint !== STRING) {
    throw new TypeError('hint must be "string" or "number"');
  }

  var methodNames = hint === STRING ? toStringOrder : toNumberOrder;
  var method;
  var result;

  for (var i = ZERO; i < orderLength; i += ONE) {
    method = ordinary[methodNames[i]];

    if (Object(is_function_x__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(method)) {
      result = method.call(ordinary);

      if (is_primitive__WEBPACK_IMPORTED_MODULE_1___default()(result)) {
        return result;
      }
    }
  }

  throw new TypeError('No default value');
};
/**
 * @param {*} object - The object.
 * @param {*} property - The property.
 * @returns {undefined|Function} - The method.
 */


var getMethod = function _getMethod(object, property) {
  var func = object[property];

  if (Object(is_nil_x__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(func) === false) {
    if (Object(is_function_x__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(func) === false) {
      throw new TypeError("".concat(func, " returned for property ").concat(property, " of object ").concat(object, " is not a function"));
    }

    return func;
  }

  return UNDEFINED;
};
/**
 * Get the hint.
 *
 * @param {*} value - The value to compare.
 * @param {boolean} supplied - Was a value supplied.
 * @returns {string} - The hint string.
 */


var getHint = function getHint(value, supplied) {
  if (supplied) {
    if (value === StringCtr) {
      return STRING;
    }

    if (value === NumberCtr) {
      return NUMBER;
    }
  }

  return DEFAULT;
};
/**
 * Get the primitive from the exotic.
 *
 * @param {*} value - The exotic.
 * @returns {*} - The primitive.
 */


var getExoticToPrim = function getExoticToPrim(value) {
  if (has_symbol_support_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]) {
    if (symToPrimitive) {
      return getMethod(value, symToPrimitive);
    }

    if (is_symbol__WEBPACK_IMPORTED_MODULE_3___default()(value)) {
      return symValueOf;
    }
  }

  return UNDEFINED;
};
/**
 * This method converts a JavaScript object to a primitive value.
 * Note: When toPrimitive is called with no hint, then it generally behaves as
 * if the hint were Number. However, objects may over-ride this behaviour by
 * defining a @@toPrimitive method. Of the objects defined in this specification
 * only Date objects (see 20.3.4.45) and Symbol objects (see 19.4.3.4) over-ride
 * the default ToPrimitive behaviour. Date objects treat no hint as if the hint
 * were String.
 *
 * @param {*} input - The input to convert.
 * @param {NumberConstructor|StringConstructor} [preferredType] - The preferred type (String or Number).
 * @throws {TypeError} If unable to convert input to a primitive.
 * @returns {string|number} The converted input as a primitive.
 * @see {http://www.ecma-international.org/ecma-262/6.0/#sec-toprimitive}
 */


var toPrimitive = function toPrimitive(input, preferredType) {
  if (is_primitive__WEBPACK_IMPORTED_MODULE_1___default()(input)) {
    return input;
  }

  var hint = getHint(preferredType, arguments.length > ONE);
  var exoticToPrim = getExoticToPrim(input);

  if (typeof exoticToPrim !== 'undefined') {
    var result = exoticToPrim.call(input, hint);

    if (is_primitive__WEBPACK_IMPORTED_MODULE_1___default()(result)) {
      return result;
    }

    throw new TypeError('unable to convert exotic object to primitive');
  }

  var newHint = hint === DEFAULT && (is_date_object__WEBPACK_IMPORTED_MODULE_2___default()(input) || is_symbol__WEBPACK_IMPORTED_MODULE_3___default()(input)) ? STRING : hint;
  return ordinaryToPrimitive(input, newHint === DEFAULT ? NUMBER : newHint);
};

/* harmony default export */ __webpack_exports__["a"] = (toPrimitive);



/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var require_coercible_to_string_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61);
/* harmony import */ var white_space_x__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49);


var EMPTY_STRING = '';
var RegExpCtr = /none/.constructor;
var reLeft = new RegExpCtr("^[".concat(white_space_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], "]+"));
var replace = EMPTY_STRING.replace;
/**
 * This method removes whitespace from the start of a string. (ES2019).
 *
 * @param {string} [string] - The string to trim the left end whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The left trimmed string.
 */

var trimStart = function trimStart(string) {
  return replace.call(Object(require_coercible_to_string_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(string), reLeft, EMPTY_STRING);
};

/* harmony default export */ __webpack_exports__["a"] = (trimStart);



/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * The constant NaN derived mathematically by 0 / 0.
 *
 * @type number
 */
/* harmony default export */ __webpack_exports__["a"] = (0 / 0);



/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';
var toStr = Object.prototype.toString;

var isStandardArguments = function isArguments(value) {
	if (hasToStringTag && value && typeof value === 'object' && Symbol.toStringTag in value) {
		return false;
	}
	return toStr.call(value) === '[object Arguments]';
};

var isLegacyArguments = function isArguments(value) {
	if (isStandardArguments(value)) {
		return true;
	}
	return value !== null &&
		typeof value === 'object' &&
		typeof value.length === 'number' &&
		value.length >= 0 &&
		toStr.call(value) !== '[object Array]' &&
		toStr.call(value.callee) === '[object Function]';
};

var supportsStandardArguments = (function () {
	return isStandardArguments(arguments);
}());

isStandardArguments.isLegacyArguments = isLegacyArguments; // for tests

module.exports = supportsStandardArguments ? isStandardArguments : isLegacyArguments;


/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var to_string_symbols_supported_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);
/* harmony import */ var to_integer_x__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25);
/* harmony import */ var to_number_x__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39);
/* harmony import */ var math_clamp_x__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(54);




var MAX_SAFE_INTEGER = 9007199254740991;
var reIsUint = /^(?:0|[1-9]\d*)$/;
var rxTest = reIsUint.test;
/**
 * This method determines whether the passed value is a zero based index.
 * JavaScript arrays are zero-indexed: the first element of an array is at
 * index 0, and the last element is at the index equal to the value of the
 * array's length property minus 1.
 *
 * @param {number|string} value - The value to be tested for being a zero based index.
 * @param {number} [length=MAX_SAFE_INTEGER] - The length that sets the upper bound.
 * @returns {boolean} A Boolean indicating whether or not the given value is a
 * zero based index within bounds.
 */

var isIndex = function isIndex(value, length) {
  var string = Object(to_string_symbols_supported_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(value);

  if (rxTest.call(reIsUint, string) === false) {
    return false;
  }

  var number = Object(to_number_x__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(string);

  if (arguments.length > 1) {
    return number < Object(math_clamp_x__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Object(to_integer_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(length), MAX_SAFE_INTEGER);
  }

  return number < MAX_SAFE_INTEGER;
};

/* harmony default export */ __webpack_exports__["a"] = (isIndex);



/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var to_object_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var array_filter_x__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23);
/* harmony import */ var get_own_property_symbols_x__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37);
/* harmony import */ var property_is_enumerable_x__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44);
function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }





/**
 * This method returns only the enumerable own property symbols of an object.
 *
 * @param {object} target - The target.
 * @throws {TypeError} - If target is null or undefined.
 * @returns {Array} The enumerable own property symbols.
 */

var getOwnEnumerablePropertySymbols = function getOwnEnumerablePropertySymbols(target) {
  var _this = this;

  var object = Object(to_object_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(target);
  return Object(array_filter_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Object(get_own_property_symbols_x__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(object), function (symbol) {
    _newArrowCheck(this, _this);

    return Object(property_is_enumerable_x__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(object, symbol);
  }.bind(this));
};

/* harmony default export */ __webpack_exports__["a"] = (getOwnEnumerablePropertySymbols);



/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var forEach = __webpack_require__(89);

var toStr = Object.prototype.toString;
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

var typedArrays = [
	'Float32Array',
	'Float64Array',
	'Int8Array',
	'Int16Array',
	'Int32Array',
	'Uint8Array',
	'Uint8ClampedArray',
	'Uint16Array',
	'Uint32Array',
	'BigInt64Array',
	'BigUint64Array'
];

var slice = String.prototype.slice;
var toStrTags = {};
var gOPD = Object.getOwnPropertyDescriptor;
if (hasToStringTag && gOPD && Object.getPrototypeOf) {
	forEach(typedArrays, function (typedArray) {
		if (typeof global[typedArray] === 'function') {
			var arr = new global[typedArray]();
			if (!(Symbol.toStringTag in arr)) {
				throw new EvalError('this engine has support for Symbol.toStringTag, but ' + typedArray + ' does not have the property! Please report this.');
			}
			var proto = Object.getPrototypeOf(arr);
			var descriptor = gOPD(proto, Symbol.toStringTag);
			if (!descriptor) {
				var superProto = Object.getPrototypeOf(proto);
				descriptor = gOPD(superProto, Symbol.toStringTag);
			}
			toStrTags[typedArray] = descriptor.get;
		}
	});
}

var tryTypedArrays = function tryAllTypedArrays(value) {
	var anyTrue = false;
	forEach(toStrTags, function (getter, typedArray) {
		if (!anyTrue) {
			try {
				anyTrue = getter.call(value) === typedArray;
			} catch (e) { /**/ }
		}
	});
	return anyTrue;
};

module.exports = function isTypedArray(value) {
	if (!value || typeof value !== 'object') { return false; }
	if (!hasToStringTag) { return typedArrays.indexOf(slice.call(toStr.call(value), 8, -1)) > -1; }
	if (!gOPD) { return false; }
	return tryTypedArrays(value);
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(66)))

/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var attempt_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var is_object_like_x__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var has_to_string_tag_x__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32);
/* harmony import */ var object_get_own_property_descriptor_x__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29);
/* harmony import */ var to_string_tag_x__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20);
/* harmony import */ var is_array_buffer_x__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(45);
var _this = undefined;

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }







var hasDView = typeof DataView === 'function';
var getByteLength = false;
var legacyCheck;

if (hasDView) {
  var res = Object(attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function () {
    _newArrowCheck(this, _this);

    /* eslint-disable-next-line compat/compat */
    return new DataView(new ArrayBuffer(4));
  }.bind(undefined));
  var dataView = res.threw === false && Object(is_object_like_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(res.value) && res.value;

  if (dataView && has_to_string_tag_x__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]) {
    /* eslint-disable-next-line compat/compat */
    var descriptor = Object(object_get_own_property_descriptor_x__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(DataView.prototype, 'byteLength');

    if (descriptor && typeof descriptor.get === 'function') {
      res = attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].call(dataView, descriptor.get);
      getByteLength = res.threw === false && typeof res.value === 'number' && descriptor.get;
    }
  }

  if (getByteLength === false) {
    var dViewTag = '[object DataView]';

    if (Object(to_string_tag_x__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(dataView) === dViewTag) {
      legacyCheck = function _legacyCheck(object) {
        return Object(to_string_tag_x__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(object) === dViewTag;
      };
    } else {
      legacyCheck = function _legacyCheck(object) {
        var isByteLength = typeof object.byteLength === 'number';
        var isByteOffset = typeof object.byteOffset === 'number';
        var isGetFloat32 = typeof object.getFloat32 === 'function';
        var isSetFloat64 = typeof object.setFloat64 === 'function';
        return isByteLength && isByteOffset && isGetFloat32 && isSetFloat64 && Object(is_array_buffer_x__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(object.buffer);
      };
    }
  }
}
/**
 * Determine if an `object` is an `DataView`.
 *
 * @param {*} object - The object to test.
 * @returns {boolean} `true` if the `object` is a `DataView`, else `false`.
 */


var isDataView = function isDataView(object) {
  if (hasDView === false || Object(is_object_like_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(object) === false) {
    return false;
  }

  if (legacyCheck) {
    return legacyCheck(object);
  }

  var result = attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].call(object, getByteLength);
  return result.threw === false && typeof result.value === 'number';
};

/* harmony default export */ __webpack_exports__["a"] = (isDataView);



/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/attempt-x/dist/attempt-x.esm.js
var attempt_x_esm = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/is-date-object/index.js
var is_date_object = __webpack_require__(36);
var is_date_object_default = /*#__PURE__*/__webpack_require__.n(is_date_object);

// EXTERNAL MODULE: ./node_modules/require-object-coercible-x/dist/require-object-coercible-x.esm.js
var require_object_coercible_x_esm = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/to-string-x/dist/to-string-x.esm.js
var to_string_x_esm = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/to-length-x/dist/to-length-x.esm.js
var to_length_x_esm = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/string-pad-start-x/dist/string-pad-start-x.esm.js



var EMPTY_STRING = '';
var slice = EMPTY_STRING.slice;
var SPACE = ' '; // eslint-disable jsdoc/check-param-names
// noinspection JSCommentMatchesSignature

/**
 * This method pads the current string with another string (repeated, if needed)
 * so that the resulting string reaches the given length. The padding is applied
 * from the start (left) of the current string.
 *
 * @param {string} string - The string to pad.
 * @throws {TypeError} If target is null or undefined.
 * @param {number} targetLength - The length of the resulting string once the
 *  current string has been padded. If the value is lower than the current
 *  string's length, the current string will be returned as is.
 * @param {string} [padString] - The string to pad the current string with. If
 *  this string is too long to stay within the target length, it will be
 *  truncated and the left-most part will be applied. The default value for this
 *  parameter is " " (U+0020).
 * @returns {string} A String of the specified length with the pad string
 *  applied from the start.
 */
// eslint-enable jsdoc/check-param-names

var string_pad_start_x_esm_padStart = function padStart(string, targetLength) {
  var str = Object(to_string_x_esm["a" /* default */])(Object(require_object_coercible_x_esm["a" /* default */])(string));
  var stringLength = Object(to_length_x_esm["a" /* default */])(str.length);
  /* eslint-disable-next-line prefer-rest-params,no-void */

  var fillString = arguments.length > 2 ? arguments[2] : void 0;
  var filler = typeof fillString === 'undefined' ? EMPTY_STRING : Object(to_string_x_esm["a" /* default */])(fillString);

  if (filler === EMPTY_STRING) {
    filler = SPACE;
  }

  var intMaxLength = Object(to_length_x_esm["a" /* default */])(targetLength);

  if (intMaxLength <= stringLength) {
    return str;
  }

  var fillLen = intMaxLength - stringLength;

  while (filler.length < fillLen) {
    var fLen = filler.length;
    var remainingCodeUnits = fillLen - fLen;
    filler += fLen > remainingCodeUnits ? slice.call(filler, 0, remainingCodeUnits) : filler;
  }

  var truncatedStringFiller = filler.length > fillLen ? slice.call(filler, 0, fillLen) : filler;
  return truncatedStringFiller + str;
};

/* harmony default export */ var string_pad_start_x_esm = (string_pad_start_x_esm_padStart);


// EXTERNAL MODULE: ./node_modules/array-map-x/dist/array-map-x.esm.js
var array_map_x_esm = __webpack_require__(38);

// EXTERNAL MODULE: ./node_modules/array-slice-x/dist/array-slice-x.esm.js
var array_slice_x_esm = __webpack_require__(14);

// EXTERNAL MODULE: ./node_modules/is-finite-x/dist/is-finite-x.esm.js + 1 modules
var is_finite_x_esm = __webpack_require__(35);

// CONCATENATED MODULE: ./node_modules/to-iso-string-x/dist/to-iso-string-x.esm.js






var nativeToISOString = typeof Date.prototype.toISOString === 'function' && Date.prototype.toISOString;
var isWorking;

if (nativeToISOString) {
  var res = attempt_x_esm["a" /* default */].call(new Date(0), nativeToISOString);
  isWorking = res.threw === false && res.value === '1970-01-01T00:00:00.000Z';

  if (isWorking) {
    res = attempt_x_esm["a" /* default */].call(new Date(-62198755200000), nativeToISOString);
    isWorking = res.threw === false && res.value.indexOf('-000001') > -1;
  }

  if (isWorking) {
    res = attempt_x_esm["a" /* default */].call(new Date(-1), nativeToISOString);
    isWorking = res.threw === false && res.value === '1969-12-31T23:59:59.999Z';
  }
}
/**
 * This method returns a string in simplified extended ISO format (ISO 8601),
 * which is always 24 or 27 characters long (YYYY-MM-DDTHH:mm:ss.sssZ or
 * ±YYYYYY-MM-DDTHH:mm:ss.sssZ, respectively). The timezone is always zero UTC
 * offset, as denoted by the suffix "Z".
 *
 * @param {object} date - A Date object.
 * @throws {TypeError} If date is not a Date object.
 * @throws {RangeError} If date is invalid.
 * @returns {string} Given date in the ISO 8601 format according to universal time.
 */


var $toISOString;

if (isWorking) {
  $toISOString = function toISOString(date) {
    return nativeToISOString.call(date);
  };
} else {
  var join = Array.prototype.join;

  $toISOString = function toISOString(date) {
    if (is_date_object_default()(date) === false) {
      throw new TypeError('toISOString called on incompatible receiver.');
    }

    if (Object(is_finite_x_esm["a" /* default */])(date) === false || Object(is_finite_x_esm["a" /* default */])(date.getTime()) === false) {
      // Adope Photoshop requires the second check.
      throw new RangeError('toISOString called on non-finite value.');
    }

    var year = date.getUTCFullYear();
    var month = date.getUTCMonth(); // see https://github.com/es-shims/es5-shim/issues/111

    /* eslint-disable-next-line no-bitwise */

    year += month / 12 >> 0; // floor

    month = (month % 12 + 12) % 12; // the date time string format is specified in 15.9.1.15.

    var parts = [month + 1, date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds()];
    var sign;

    if (year < 0) {
      sign = '-';
    } else if (year > 9999) {
      sign = '+';
    } else {
      sign = '';
    }

    year = sign + string_pad_start_x_esm(Math.abs(year), sign ? 6 : 4, '0');
    var result = Object(array_map_x_esm["a" /* default */])(parts, function _mapper(item) {
      // pad months, days, hours, minutes, and seconds to have two digits.
      return string_pad_start_x_esm(item, 2, '0');
    });
    var dateStr = "".concat(year, "-").concat(join.call(Object(array_slice_x_esm["a" /* default */])(result, 0, 2), '-')); // pad milliseconds to have three digits.

    var msStr = string_pad_start_x_esm(date.getUTCMilliseconds(), 3, '0');
    var timeStr = "".concat(join.call(Object(array_slice_x_esm["a" /* default */])(result, 2), ':'), ".").concat(msStr);
    return "".concat(dateStr, "T").concat(timeStr, "Z");
  };
}

var tis = $toISOString;
/* harmony default export */ var to_iso_string_x_esm = __webpack_exports__["a"] = (tis);



/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = __webpack_require__(103);
var regexExec = RegExp.prototype.exec;
var gOPD = Object.getOwnPropertyDescriptor;

var tryRegexExecCall = function tryRegexExec(value) {
	try {
		var lastIndex = value.lastIndex;
		value.lastIndex = 0;

		regexExec.call(value);
		return true;
	} catch (e) {
		return false;
	} finally {
		value.lastIndex = lastIndex;
	}
};
var toStr = Object.prototype.toString;
var regexClass = '[object RegExp]';
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

module.exports = function isRegex(value) {
	if (!value || typeof value !== 'object') {
		return false;
	}
	if (!hasToStringTag) {
		return toStr.call(value) === regexClass;
	}

	var descriptor = gOPD(value, 'lastIndex');
	var hasLastIndexDataProperty = descriptor && has(descriptor, 'value');
	if (!hasLastIndexDataProperty) {
		return false;
	}

	return tryRegexExecCall(value);
};


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var forEach = __webpack_require__(89);
var bind = __webpack_require__(88);

var toStr = bind.call(Function.call, Object.prototype.toString);
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

var typedArrays = [
	'Float32Array',
	'Float64Array',
	'Int8Array',
	'Int16Array',
	'Int32Array',
	'Uint8Array',
	'Uint8ClampedArray',
	'Uint16Array',
	'Uint32Array',
	'BigInt64Array',
	'BigUint64Array'
];

var slice = bind.call(Function.call, String.prototype.slice);
var toStrTags = {};
var gOPD = Object.getOwnPropertyDescriptor;
if (hasToStringTag && gOPD && Object.getPrototypeOf) {
	forEach(typedArrays, function (typedArray) {
		if (typeof global[typedArray] === 'function') {
			var arr = new global[typedArray]();
			if (!(Symbol.toStringTag in arr)) {
				throw new EvalError('this engine has support for Symbol.toStringTag, but ' + typedArray + ' does not have the property! Please report this.');
			}
			var proto = Object.getPrototypeOf(arr);
			var descriptor = gOPD(proto, Symbol.toStringTag);
			if (!descriptor) {
				var superProto = Object.getPrototypeOf(proto);
				descriptor = gOPD(superProto, Symbol.toStringTag);
			}
			toStrTags[typedArray] = descriptor.get;
		}
	});
}

var tryTypedArrays = function tryAllTypedArrays(value) {
	var foundName = false;
	forEach(toStrTags, function (getter, typedArray) {
		if (!foundName) {
			try {
				var name = getter.call(value);
				if (name === typedArray) {
					foundName = name;
				}
			} catch (e) {}
		}
	});
	return foundName;
};

var isTypedArray = __webpack_require__(77);

module.exports = function whichTypedArray(value) {
	if (!isTypedArray(value)) { return false; }
	if (!hasToStringTag) { return slice(toStr(value), 8, -1); }
	return tryTypedArrays(value);
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(66)))

/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* unused harmony export formatWithOptions */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return format; });
/* harmony import */ var inspect_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48);
/* harmony import */ var same_value_x__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43);
/* harmony import */ var has_own_property_x__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var parse_int_x__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67);
/* harmony import */ var json3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(65);
/* harmony import */ var json3__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(json3__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var collections_x__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(31);
/* harmony import */ var array_filter_x__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(23);
/* harmony import */ var get_own_property_names_x__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(42);
/* harmony import */ var is_symbol__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(16);
/* harmony import */ var is_symbol__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(is_symbol__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var is_bigint__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(51);
/* harmony import */ var is_bigint__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(is_bigint__WEBPACK_IMPORTED_MODULE_9__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }











/** @type {NumberConstructor} */

var castNumber = 0 .constructor;
var RX_NAMES = /^([A-Z][a-z]+)+$/;
var rxTest = RX_NAMES.test;
var EMPTY_STRING = '';
var stringSplit = EMPTY_STRING.split;
var stringSlice = EMPTY_STRING.slice;
var charCodeAt = EMPTY_STRING.charCodeAt;

var firstErrorLine = function firstErrorLine(error) {
  return stringSplit.call(error.message, '\n')[0];
};

var CIRCULAR_ERROR_MESSAGE;

var tryStringify = function tryStringify(arg) {
  try {
    return Object(json3__WEBPACK_IMPORTED_MODULE_4__["stringify"])(arg);
  } catch (err) {
    // Populate the circular error message lazily
    if (!CIRCULAR_ERROR_MESSAGE) {
      try {
        var a = {};
        a.a = a;
        Object(json3__WEBPACK_IMPORTED_MODULE_4__["stringify"])(a);
      } catch (e) {
        CIRCULAR_ERROR_MESSAGE = e.message;
      }
    }

    if (err.name === 'TypeError' && firstErrorLine(err) === CIRCULAR_ERROR_MESSAGE) {
      return '[Circular]';
    }

    throw err;
  }
};

var matchNames = function matchNames(e) {
  return rxTest.call(RX_NAMES, e);
};

var builtInObjects = new collections_x__WEBPACK_IMPORTED_MODULE_5__[/* SetConstructor */ "b"](Object(array_filter_x__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(get_own_property_names_x__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(global), matchNames));

var formatNumber = function formatNumber(fn, value) {
  // Format -0 as '-0'. Checking `value === -0` won't distinguish 0 from -0.
  return fn(Object(same_value_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(value, -0) ? '-0' : "".concat(value), 'number');
};

var stylizeNoColor = function stylizeNoColor(str) {
  return str;
};

var formatWithOptions = function formatWithOptions(inspectOptions) {
  var first = arguments.length <= 1 ? undefined : arguments[1];
  var a = 0;
  var str = EMPTY_STRING;
  var join = EMPTY_STRING;

  if (typeof first === 'string') {
    if ((arguments.length <= 1 ? 0 : arguments.length - 1) === 1) {
      return first;
    }

    var tempStr;
    var lastPos = 0;

    for (var i = 0; i < first.length - 1; i += 1) {
      if (charCodeAt.call(first, i) === 37) {
        // '%'
        i += 1;
        var nextChar = charCodeAt.call(first, i);

        if (a + 1 !== (arguments.length <= 1 ? 0 : arguments.length - 1)) {
          switch (nextChar) {
            case 115:
              // 's'
              a += 1;
              {
                var tempArg = a + 1 < 1 || arguments.length <= a + 1 ? undefined : arguments[a + 1];

                if (typeof tempArg === 'number') {
                  tempStr = formatNumber(stylizeNoColor, tempArg);
                } else {
                  /* eslint-disable-next-line valid-typeof,no-lonely-if */
                  if (typeof tempArg === 'bigint') {
                    tempStr = "".concat(tempArg, "n");
                  } else {
                    /* eslint-disable-next-line no-void */
                    var constr = _typeof(tempArg) === 'object' && tempArg !== null ? tempArg.constructor : void 0; // noinspection JSObjectNullOrUndefined

                    if (!constr || typeof tempArg.toString === 'function' && ( // A direct own property.
                    Object(has_own_property_x__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(tempArg, 'toString') || // A direct own property on the constructor prototype in
                    // case the constructor is not an built-in object.
                    !builtInObjects.has(constr.name) && constr.prototype && Object(has_own_property_x__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(constr.prototype, 'toString'))) {
                      tempStr = String(tempArg);
                    } else {
                      tempStr = Object(inspect_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(tempArg, _objectSpread({}, inspectOptions, {
                        compact: 3,
                        colors: false,
                        depth: 0
                      }));
                    }
                  }
                }
              }
              break;

            case 106:
              // 'j'
              a += 1;
              tempStr = tryStringify(a + 1 < 1 || arguments.length <= a + 1 ? undefined : arguments[a + 1]);
              break;

            case 100:
              // 'd'
              a += 1;
              {
                var tempNum = a + 1 < 1 || arguments.length <= a + 1 ? undefined : arguments[a + 1];

                if (is_bigint__WEBPACK_IMPORTED_MODULE_9___default()(tempNum)) {
                  tempStr = "".concat(tempNum, "n");
                } else if (is_symbol__WEBPACK_IMPORTED_MODULE_8___default()(tempNum)) {
                  tempStr = 'NaN';
                } else {
                  tempStr = formatNumber(stylizeNoColor, castNumber(tempNum));
                }
              }
              break;

            case 79:
              // 'O'
              a += 1;
              tempStr = Object(inspect_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(a + 1 < 1 || arguments.length <= a + 1 ? undefined : arguments[a + 1], inspectOptions);
              break;

            case 111:
              // 'o'
              a += 1;
              tempStr = Object(inspect_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(a + 1 < 1 || arguments.length <= a + 1 ? undefined : arguments[a + 1], _objectSpread({}, inspectOptions, {
                showHidden: true,
                showProxy: true,
                depth: 4
              }));
              break;

            case 105:
              // 'i'
              a += 1;
              {
                var tempInteger = a + 1 < 1 || arguments.length <= a + 1 ? undefined : arguments[a + 1];

                if (is_bigint__WEBPACK_IMPORTED_MODULE_9___default()(tempInteger)) {
                  tempStr = "".concat(tempInteger, "n");
                } else if (is_symbol__WEBPACK_IMPORTED_MODULE_8___default()(tempInteger)) {
                  tempStr = 'NaN';
                } else {
                  tempStr = formatNumber(stylizeNoColor, Object(parse_int_x__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(tempInteger));
                }
              }
              break;

            case 102:
              // 'f'
              a += 1;
              {
                var tempFloat = a + 1 < 1 || arguments.length <= a + 1 ? undefined : arguments[a + 1];

                if (is_symbol__WEBPACK_IMPORTED_MODULE_8___default()(tempFloat)) {
                  tempStr = 'NaN';
                } else {
                  tempStr = formatNumber(stylizeNoColor, parseFloat(tempFloat));
                }
              }
              break;

            case 37:
              // '%'
              str += stringSlice.call(first, lastPos, i);
              lastPos = i + 1;
              /* eslint-disable-next-line no-continue */

              continue;

            default:
              // Any other character is not a correct placeholder

              /* eslint-disable-next-line no-continue */
              continue;
          }

          if (lastPos !== i - 1) {
            str += stringSlice.call(first, lastPos, i - 1);
          }

          str += tempStr;
          lastPos = i + 1;
        } else if (nextChar === 37) {
          str += stringSlice.call(first, lastPos, i);
          lastPos = i + 1;
        }
      }
    }

    if (lastPos !== 0) {
      a += 1;
      join = ' ';

      if (lastPos < first.length) {
        str += stringSlice.call(first, lastPos);
      }
    }
  }

  while (a < (arguments.length <= 1 ? 0 : arguments.length - 1)) {
    var value = a + 1 < 1 || arguments.length <= a + 1 ? undefined : arguments[a + 1];
    str += join;
    str += typeof value !== 'string' ? Object(inspect_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(value, inspectOptions) : value;
    join = ' ';
    a += 1;
  }

  return str;
}; // eslint-disable jsdoc/check-param-names
// noinspection JSCommentMatchesSignature

/**
 * The format() method returns a formatted string using the first argument as a
 * printf-like format.
 *
 * The first argument is a string containing zero or more placeholder tokens.
 * Each placeholder token is replaced with the converted value from the
 * corresponding argument.
 *
 * @param {string} f - Template.
 * @param {*} [...args] - Values.
 * @returns {*} The target.
 */
// eslint-enable jsdoc/check-param-names

var format = function format() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  /* eslint-disable-next-line no-void */
  return formatWithOptions.apply(void 0, [void 0].concat(args));
};


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(66)))

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var slice = Array.prototype.slice;
var isArgs = __webpack_require__(87);

var origKeys = Object.keys;
var keysShim = origKeys ? function keys(o) { return origKeys(o); } : __webpack_require__(102);

var originalKeys = Object.keys;

keysShim.shim = function shimObjectKeys() {
	if (Object.keys) {
		var keysWorksWithArguments = (function () {
			// Safari 5.0 bug
			var args = Object.keys(arguments);
			return args && args.length === arguments.length;
		}(1, 2));
		if (!keysWorksWithArguments) {
			Object.keys = function keys(object) { // eslint-disable-line func-name-matching
				if (isArgs(object)) {
					return originalKeys(slice.call(object));
				}
				return originalKeys(object);
			};
		}
	} else {
		Object.keys = keysShim;
	}
	return Object.keys || keysShim;
};

module.exports = keysShim;


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(root, factory) {
    'use strict';
    // Universal Module Definition (UMD) to support AMD, CommonJS/Node.js, Rhino, and browsers.

    /* istanbul ignore next */
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}
}(this, function() {
    'use strict';
    function _isNumber(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }

    function _capitalize(str) {
        return str.charAt(0).toUpperCase() + str.substring(1);
    }

    function _getter(p) {
        return function() {
            return this[p];
        };
    }

    var booleanProps = ['isConstructor', 'isEval', 'isNative', 'isToplevel'];
    var numericProps = ['columnNumber', 'lineNumber'];
    var stringProps = ['fileName', 'functionName', 'source'];
    var arrayProps = ['args'];

    var props = booleanProps.concat(numericProps, stringProps, arrayProps);

    function StackFrame(obj) {
        if (obj instanceof Object) {
            for (var i = 0; i < props.length; i++) {
                if (obj.hasOwnProperty(props[i]) && obj[props[i]] !== undefined) {
                    this['set' + _capitalize(props[i])](obj[props[i]]);
                }
            }
        }
    }

    StackFrame.prototype = {
        getArgs: function() {
            return this.args;
        },
        setArgs: function(v) {
            if (Object.prototype.toString.call(v) !== '[object Array]') {
                throw new TypeError('Args must be an Array');
            }
            this.args = v;
        },

        getEvalOrigin: function() {
            return this.evalOrigin;
        },
        setEvalOrigin: function(v) {
            if (v instanceof StackFrame) {
                this.evalOrigin = v;
            } else if (v instanceof Object) {
                this.evalOrigin = new StackFrame(v);
            } else {
                throw new TypeError('Eval Origin must be an Object or StackFrame');
            }
        },

        toString: function() {
            var functionName = this.getFunctionName() || '{anonymous}';
            var args = '(' + (this.getArgs() || []).join(',') + ')';
            var fileName = this.getFileName() ? ('@' + this.getFileName()) : '';
            var lineNumber = _isNumber(this.getLineNumber()) ? (':' + this.getLineNumber()) : '';
            var columnNumber = _isNumber(this.getColumnNumber()) ? (':' + this.getColumnNumber()) : '';
            return functionName + args + fileName + lineNumber + columnNumber;
        }
    };

    for (var i = 0; i < booleanProps.length; i++) {
        StackFrame.prototype['get' + _capitalize(booleanProps[i])] = _getter(booleanProps[i]);
        StackFrame.prototype['set' + _capitalize(booleanProps[i])] = (function(p) {
            return function(v) {
                this[p] = Boolean(v);
            };
        })(booleanProps[i]);
    }

    for (var j = 0; j < numericProps.length; j++) {
        StackFrame.prototype['get' + _capitalize(numericProps[j])] = _getter(numericProps[j]);
        StackFrame.prototype['set' + _capitalize(numericProps[j])] = (function(p) {
            return function(v) {
                if (!_isNumber(v)) {
                    throw new TypeError(p + ' must be a Number');
                }
                this[p] = Number(v);
            };
        })(numericProps[j]);
    }

    for (var k = 0; k < stringProps.length; k++) {
        StackFrame.prototype['get' + _capitalize(stringProps[k])] = _getter(stringProps[k]);
        StackFrame.prototype['set' + _capitalize(stringProps[k])] = (function(p) {
            return function(v) {
                this[p] = String(v);
            };
        })(stringProps[k]);
    }

    return StackFrame;
}));


/***/ }),
/* 85 */
/***/ (function(module, exports) {

module.exports = isPromise;

function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}


/***/ }),
/* 86 */
/***/ (function(module, exports) {

module.exports = function arraybufferEqual (buf1, buf2) {
  if (buf1 === buf2) {
    return true;
  }

  if (buf1.byteLength !== buf2.byteLength) {
    return false;
  }

  var view1 = new DataView(buf1);
  var view2 = new DataView(buf2);

  var i = buf1.byteLength;
  while (i--) {
    if (view1.getUint8(i) !== view2.getUint8(i)) {
      return false;
    }
  }

  return true;
};


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toStr = Object.prototype.toString;

module.exports = function isArguments(value) {
	var str = toStr.call(value);
	var isArgs = str === '[object Arguments]';
	if (!isArgs) {
		isArgs = str !== '[object Array]' &&
			value !== null &&
			typeof value === 'object' &&
			typeof value.length === 'number' &&
			value.length >= 0 &&
			toStr.call(value.callee) === '[object Function]';
	}
	return isArgs;
};


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__(104);

module.exports = Function.prototype.bind || implementation;


/***/ }),
/* 89 */
/***/ (function(module, exports) {


var hasOwn = Object.prototype.hasOwnProperty;
var toString = Object.prototype.toString;

module.exports = function forEach (obj, fn, ctx) {
    if (toString.call(fn) !== '[object Function]') {
        throw new TypeError('iterator must be a function');
    }
    var l = obj.length;
    if (l === +l) {
        for (var i = 0; i < l; i++) {
            fn.call(ctx, obj[i], i, obj);
        }
    } else {
        for (var k in obj) {
            if (hasOwn.call(obj, k)) {
                fn.call(ctx, obj[k], k, obj);
            }
        }
    }
};



/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var keys = __webpack_require__(83);
var hasSymbols = typeof Symbol === 'function' && typeof Symbol('foo') === 'symbol';

var toStr = Object.prototype.toString;
var concat = Array.prototype.concat;
var origDefineProperty = Object.defineProperty;

var isFunction = function (fn) {
	return typeof fn === 'function' && toStr.call(fn) === '[object Function]';
};

var arePropertyDescriptorsSupported = function () {
	var obj = {};
	try {
		origDefineProperty(obj, 'x', { enumerable: false, value: obj });
		// eslint-disable-next-line no-unused-vars, no-restricted-syntax
		for (var _ in obj) { // jscs:ignore disallowUnusedVariables
			return false;
		}
		return obj.x === obj;
	} catch (e) { /* this is IE 8. */
		return false;
	}
};
var supportsDescriptors = origDefineProperty && arePropertyDescriptorsSupported();

var defineProperty = function (object, name, value, predicate) {
	if (name in object && (!isFunction(predicate) || !predicate())) {
		return;
	}
	if (supportsDescriptors) {
		origDefineProperty(object, name, {
			configurable: true,
			enumerable: false,
			value: value,
			writable: true
		});
	} else {
		object[name] = value;
	}
};

var defineProperties = function (object, map) {
	var predicates = arguments.length > 2 ? arguments[2] : {};
	var props = keys(map);
	if (hasSymbols) {
		props = concat.call(props, Object.getOwnPropertySymbols(map));
	}
	for (var i = 0; i < props.length; i += 1) {
		defineProperty(object, props[i], map[props[i]], predicates[props[i]]);
	}
};

defineProperties.supportsDescriptors = !!supportsDescriptors;

module.exports = defineProperties;


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* http://www.ecma-international.org/ecma-262/6.0/#sec-number.isnan */

module.exports = function isNaN(value) {
	return value !== value;
};


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__(91);

module.exports = function getPolyfill() {
	if (Number.isNaN && Number.isNaN(NaN) && !Number.isNaN('a')) {
		return Number.isNaN;
	}
	return implementation;
};


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(root, factory) {
    'use strict';
    // Universal Module Definition (UMD) to support AMD, CommonJS/Node.js, Rhino, and browsers.

    /* istanbul ignore next */
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(84)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}
}(this, function ErrorStackParser(StackFrame) {
    'use strict';

    var FIREFOX_SAFARI_STACK_REGEXP = /(^|@)\S+\:\d+/;
    var CHROME_IE_STACK_REGEXP = /^\s*at .*(\S+\:\d+|\(native\))/m;
    var SAFARI_NATIVE_CODE_REGEXP = /^(eval@)?(\[native code\])?$/;

    return {
        /**
         * Given an Error object, extract the most information from it.
         *
         * @param {Error} error object
         * @return {Array} of StackFrames
         */
        parse: function ErrorStackParser$$parse(error) {
            if (typeof error.stacktrace !== 'undefined' || typeof error['opera#sourceloc'] !== 'undefined') {
                return this.parseOpera(error);
            } else if (error.stack && error.stack.match(CHROME_IE_STACK_REGEXP)) {
                return this.parseV8OrIE(error);
            } else if (error.stack) {
                return this.parseFFOrSafari(error);
            } else {
                throw new Error('Cannot parse given Error object');
            }
        },

        // Separate line and column numbers from a string of the form: (URI:Line:Column)
        extractLocation: function ErrorStackParser$$extractLocation(urlLike) {
            // Fail-fast but return locations like "(native)"
            if (urlLike.indexOf(':') === -1) {
                return [urlLike];
            }

            var regExp = /(.+?)(?:\:(\d+))?(?:\:(\d+))?$/;
            var parts = regExp.exec(urlLike.replace(/[\(\)]/g, ''));
            return [parts[1], parts[2] || undefined, parts[3] || undefined];
        },

        parseV8OrIE: function ErrorStackParser$$parseV8OrIE(error) {
            var filtered = error.stack.split('\n').filter(function(line) {
                return !!line.match(CHROME_IE_STACK_REGEXP);
            }, this);

            return filtered.map(function(line) {
                if (line.indexOf('(eval ') > -1) {
                    // Throw away eval information until we implement stacktrace.js/stackframe#8
                    line = line.replace(/eval code/g, 'eval').replace(/(\(eval at [^\()]*)|(\)\,.*$)/g, '');
                }
                var tokens = line.replace(/^\s+/, '').replace(/\(eval code/g, '(').split(/\s+/).slice(1);
                var locationParts = this.extractLocation(tokens.pop());
                var functionName = tokens.join(' ') || undefined;
                var fileName = ['eval', '<anonymous>'].indexOf(locationParts[0]) > -1 ? undefined : locationParts[0];

                return new StackFrame({
                    functionName: functionName,
                    fileName: fileName,
                    lineNumber: locationParts[1],
                    columnNumber: locationParts[2],
                    source: line
                });
            }, this);
        },

        parseFFOrSafari: function ErrorStackParser$$parseFFOrSafari(error) {
            var filtered = error.stack.split('\n').filter(function(line) {
                return !line.match(SAFARI_NATIVE_CODE_REGEXP);
            }, this);

            return filtered.map(function(line) {
                // Throw away eval information until we implement stacktrace.js/stackframe#8
                if (line.indexOf(' > eval') > -1) {
                    line = line.replace(/ line (\d+)(?: > eval line \d+)* > eval\:\d+\:\d+/g, ':$1');
                }

                if (line.indexOf('@') === -1 && line.indexOf(':') === -1) {
                    // Safari eval frames only have function names and nothing else
                    return new StackFrame({
                        functionName: line
                    });
                } else {
                    var functionNameRegex = /((.*".+"[^@]*)?[^@]*)(?:@)/;
                    var matches = line.match(functionNameRegex);
                    var functionName = matches && matches[1] ? matches[1] : undefined;
                    var locationParts = this.extractLocation(line.replace(functionNameRegex, ''));

                    return new StackFrame({
                        functionName: functionName,
                        fileName: locationParts[0],
                        lineNumber: locationParts[1],
                        columnNumber: locationParts[2],
                        source: line
                    });
                }
            }, this);
        },

        parseOpera: function ErrorStackParser$$parseOpera(e) {
            if (!e.stacktrace || (e.message.indexOf('\n') > -1 &&
                e.message.split('\n').length > e.stacktrace.split('\n').length)) {
                return this.parseOpera9(e);
            } else if (!e.stack) {
                return this.parseOpera10(e);
            } else {
                return this.parseOpera11(e);
            }
        },

        parseOpera9: function ErrorStackParser$$parseOpera9(e) {
            var lineRE = /Line (\d+).*script (?:in )?(\S+)/i;
            var lines = e.message.split('\n');
            var result = [];

            for (var i = 2, len = lines.length; i < len; i += 2) {
                var match = lineRE.exec(lines[i]);
                if (match) {
                    result.push(new StackFrame({
                        fileName: match[2],
                        lineNumber: match[1],
                        source: lines[i]
                    }));
                }
            }

            return result;
        },

        parseOpera10: function ErrorStackParser$$parseOpera10(e) {
            var lineRE = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i;
            var lines = e.stacktrace.split('\n');
            var result = [];

            for (var i = 0, len = lines.length; i < len; i += 2) {
                var match = lineRE.exec(lines[i]);
                if (match) {
                    result.push(
                        new StackFrame({
                            functionName: match[3] || undefined,
                            fileName: match[2],
                            lineNumber: match[1],
                            source: lines[i]
                        })
                    );
                }
            }

            return result;
        },

        // Opera 10.65+ Error.stack very similar to FF/Safari
        parseOpera11: function ErrorStackParser$$parseOpera11(error) {
            var filtered = error.stack.split('\n').filter(function(line) {
                return !!line.match(FIREFOX_SAFARI_STACK_REGEXP) && !line.match(/^Error created at/);
            }, this);

            return filtered.map(function(line) {
                var tokens = line.split('@');
                var locationParts = this.extractLocation(tokens.pop());
                var functionCall = (tokens.shift() || '');
                var functionName = functionCall
                        .replace(/<anonymous function(: (\w+))?>/, '$2')
                        .replace(/\([^\)]*\)/g, '') || undefined;
                var argsRaw;
                if (functionCall.match(/\(([^\)]*)\)/)) {
                    argsRaw = functionCall.replace(/^[^\(]+\(([^\)]*)\)$/, '$1');
                }
                var args = (argsRaw === undefined || argsRaw === '[arguments not available]') ?
                    undefined : argsRaw.split(',');

                return new StackFrame({
                    functionName: functionName,
                    args: args,
                    fileName: locationParts[0],
                    lineNumber: locationParts[1],
                    columnNumber: locationParts[2],
                    source: line
                });
            }, this);
        }
    };
}));


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toStr = Object.prototype.toString;
var fnToStr = Function.prototype.toString;
var isFnRegex = /^\s*(?:function)?\*/;
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';
var getProto = Object.getPrototypeOf;
var getGeneratorFunc = function () { // eslint-disable-line consistent-return
	if (!hasToStringTag) {
		return false;
	}
	try {
		return Function('return function*() {}')();
	} catch (e) {
	}
};
var generatorFunc = getGeneratorFunc();
var GeneratorFunction = generatorFunc ? getProto(generatorFunc) : {};

module.exports = function isGeneratorFunction(fn) {
	if (typeof fn !== 'function') {
		return false;
	}
	if (isFnRegex.test(fnToStr.call(fn))) {
		return true;
	}
	if (!hasToStringTag) {
		var str = toStr.call(fn);
		return str === '[object GeneratorFunction]';
	}
	return getProto(fn) === GeneratorFunction;
};


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.is */

var NumberIsNaN = function (value) {
	return value !== value;
};

module.exports = function is(a, b) {
	if (a === 0 && b === 0) {
		return 1 / a === 1 / b;
	} else if (a === b) {
		return true;
	} else if (NumberIsNaN(a) && NumberIsNaN(b)) {
		return true;
	}
	return false;
};



/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var define = __webpack_require__(90);

var implementation = __webpack_require__(91);
var getPolyfill = __webpack_require__(92);
var shim = __webpack_require__(105);

/* http://www.ecma-international.org/ecma-262/6.0/#sec-number.isnan */

define(implementation, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = implementation;


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isString = __webpack_require__(12);
var isNumber = __webpack_require__(56);
var isBoolean = __webpack_require__(40);
var isSymbol = __webpack_require__(16);
var isBigInt = __webpack_require__(51);

module.exports = function isBoxedPrimitive(value) {
	if (!value || typeof value !== 'object') {
		return false;
	}

	return isString(value) || isNumber(value) || isBoolean(value) || isSymbol(value) || isBigInt(value);
};


/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/error-x/dist/error-x.esm.js + 3 modules
var error_x_esm = __webpack_require__(59);

// EXTERNAL MODULE: ./node_modules/is-regexp-x/dist/is-regexp-x.esm.js
var is_regexp_x_esm = __webpack_require__(28);

// EXTERNAL MODULE: ./node_modules/to-string-symbols-supported-x/dist/to-string-symbols-supported-x.esm.js
var to_string_symbols_supported_x_esm = __webpack_require__(27);

// EXTERNAL MODULE: ./node_modules/is-function-x/dist/is-function-x.esm.js + 1 modules
var is_function_x_esm = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/object-define-properties-x/dist/object-define-properties-x.esm.js + 1 modules
var object_define_properties_x_esm = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/has-own-property-x/dist/has-own-property-x.esm.js
var has_own_property_x_esm = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/property-is-enumerable-x/dist/property-is-enumerable-x.esm.js
var property_is_enumerable_x_esm = __webpack_require__(44);

// EXTERNAL MODULE: ./node_modules/to-string-tag-x/dist/to-string-tag-x.esm.js
var to_string_tag_x_esm = __webpack_require__(20);

// EXTERNAL MODULE: ./node_modules/is-date-object/index.js
var is_date_object = __webpack_require__(36);
var is_date_object_default = /*#__PURE__*/__webpack_require__.n(is_date_object);

// EXTERNAL MODULE: ./node_modules/is-map-x/dist/is-map-x.esm.js
var is_map_x_esm = __webpack_require__(46);

// EXTERNAL MODULE: ./node_modules/is-set-x/dist/is-set-x.esm.js
var is_set_x_esm = __webpack_require__(50);

// EXTERNAL MODULE: ./node_modules/is-number-object/index.js
var is_number_object = __webpack_require__(56);
var is_number_object_default = /*#__PURE__*/__webpack_require__.n(is_number_object);

// EXTERNAL MODULE: ./node_modules/is-string/index.js
var is_string = __webpack_require__(12);
var is_string_default = /*#__PURE__*/__webpack_require__.n(is_string);

// EXTERNAL MODULE: ./node_modules/is-boolean-object/index.js
var is_boolean_object = __webpack_require__(40);
var is_boolean_object_default = /*#__PURE__*/__webpack_require__.n(is_boolean_object);

// EXTERNAL MODULE: ./node_modules/is-symbol/index.js
var is_symbol = __webpack_require__(16);
var is_symbol_default = /*#__PURE__*/__webpack_require__.n(is_symbol);

// EXTERNAL MODULE: ./node_modules/is-array-buffer-x/dist/is-array-buffer-x.esm.js
var is_array_buffer_x_esm = __webpack_require__(45);

// EXTERNAL MODULE: ./node_modules/is-error-x/dist/is-error-x.esm.js
var is_error_x_esm = __webpack_require__(47);

// EXTERNAL MODULE: ./node_modules/is-boxed-primitive/implementation.js
var implementation = __webpack_require__(97);
var implementation_default = /*#__PURE__*/__webpack_require__.n(implementation);

// EXTERNAL MODULE: ./node_modules/is-bigint/index.js
var is_bigint = __webpack_require__(51);
var is_bigint_default = /*#__PURE__*/__webpack_require__.n(is_bigint);

// EXTERNAL MODULE: ./node_modules/which-typed-array/index.js
var which_typed_array = __webpack_require__(81);
var which_typed_array_default = /*#__PURE__*/__webpack_require__.n(which_typed_array);

// EXTERNAL MODULE: ./node_modules/has-symbol-support-x/dist/has-symbol-support-x.esm.js
var has_symbol_support_x_esm = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/same-value-x/dist/same-value-x.esm.js
var same_value_x_esm = __webpack_require__(43);

// EXTERNAL MODULE: ./node_modules/object-keys-x/dist/object-keys-x.esm.js
var object_keys_x_esm = __webpack_require__(18);

// EXTERNAL MODULE: ./node_modules/is-nan-x/dist/is-nan-x.esm.js
var is_nan_x_esm = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/get-prototype-of-x/dist/get-prototype-of-x.esm.js
var get_prototype_of_x_esm = __webpack_require__(30);

// EXTERNAL MODULE: ./node_modules/is-array-x/dist/is-array-x.esm.js
var is_array_x_esm = __webpack_require__(22);

// EXTERNAL MODULE: ./node_modules/get-own-property-symbols-x/dist/get-own-property-symbols-x.esm.js
var get_own_property_symbols_x_esm = __webpack_require__(37);

// EXTERNAL MODULE: ./node_modules/get-own-property-names-x/dist/get-own-property-names-x.esm.js
var get_own_property_names_x_esm = __webpack_require__(42);

// EXTERNAL MODULE: ./node_modules/array-filter-x/dist/array-filter-x.esm.js
var array_filter_x_esm = __webpack_require__(23);

// EXTERNAL MODULE: ./node_modules/is-index-x/dist/is-index-x.esm.js
var is_index_x_esm = __webpack_require__(75);

// EXTERNAL MODULE: ./node_modules/collections-x/dist/collections-x.esm.js + 3 modules
var collections_x_esm = __webpack_require__(31);

// EXTERNAL MODULE: ./node_modules/arraybuffer-equal/index.js
var arraybuffer_equal = __webpack_require__(86);
var arraybuffer_equal_default = /*#__PURE__*/__webpack_require__.n(arraybuffer_equal);

// EXTERNAL MODULE: ./node_modules/is-data-view-x/dist/is-data-view-x.esm.js
var is_data_view_x_esm = __webpack_require__(78);

// CONCATENATED MODULE: ./node_modules/is-deep-strict-equal-x/dist/is-deep-strict-equal-x.esm.js
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }






























/* eslint-disable-next-line no-void */

var UNDEFINED = void 0;
var EMPTY_STRING = '';
var innerDeepEqual;

var bigInt48 = function getBigInt48() {
  if (typeof BigInt === 'function') {
    try {
      /* eslint-disable-next-line babel/new-cap,no-undef,compat/compat */
      return BigInt(48);
    } catch (ignore) {// empty
    }
  }

  return UNDEFINED;
}();

var hasBigInt = is_bigint_default()(bigInt48);
var BigIntValueOf = hasBigInt ? bigInt48.valueOf : UNDEFINED;
var BooleanValueOf = true.valueOf;
var DateGetTime = new Date().getTime;
var NumberValueOf = 0 .valueOf; // const ObjectPrototype = Object.prototype;

var StringValueOf = EMPTY_STRING.valueOf;
/* eslint-disable-next-line compat/compat */

var SymbolValueOf = has_symbol_support_x_esm["a" /* default */] ? Symbol(EMPTY_STRING).valueOf : UNDEFINED;

var hasArrayBuffer = typeof ArrayBuffer === 'function' && function testArrayBuffer() {
  try {
    /* eslint-disable-next-line compat/compat */
    return Object(is_array_buffer_x_esm["a" /* default */])(new ArrayBuffer(4));
  } catch (ignore) {
    return false;
  }
}();
/* eslint-disable-next-line compat/compat */


var hasIsView = hasArrayBuffer && typeof ArrayBuffer.isView === 'function';
var is_deep_strict_equal_x_esm_isArrayBufferView = hasIsView ? ArrayBuffer.isView
/* eslint-disable-line compat/compat */
: function isArrayBufferView(value) {
  return which_typed_array_default()(value) !== false || Object(is_data_view_x_esm["a" /* default */])(value);
};

var is_deep_strict_equal_x_esm_isFloat32Array = function isFloat32Array(value) {
  // noinspection JSIncompatibleTypesComparison
  return which_typed_array_default()(value) === 'Float32Array';
};

var is_deep_strict_equal_x_esm_isFloat64Array = function isFloat64Array(value) {
  // noinspection JSIncompatibleTypesComparison
  return which_typed_array_default()(value) === 'Float64Array';
}; // const ALL_PROPERTIES = 0;
// const ONLY_WRITABLE = 1;


var ONLY_ENUMERABLE = 2; // const ONLY_CONFIGURABLE = 4;
// const SKIP_STRINGS = 8;

var SKIP_SYMBOLS = 16;

var is_deep_strict_equal_x_esm_getOwnNonIndexProperties = function getOwnNonIndexProperties(value, filter) {
  var _this = this;

  // noinspection JSBitwiseOperatorUsage
  var names = filter & ONLY_ENUMERABLE
  /* eslint-disable-line no-bitwise */
  ? Object(object_keys_x_esm["a" /* default */])(value) : Object(get_own_property_names_x_esm["a" /* default */])(value); // noinspection JSBitwiseOperatorUsage

  var symbols = filter & SKIP_SYMBOLS
  /* eslint-disable-line no-bitwise */
  ? [] : Object(get_own_property_symbols_x_esm["a" /* default */])(value);
  return Object(array_filter_x_esm["a" /* default */])([].concat(_toConsumableArray(names), _toConsumableArray(symbols)), function (key) {
    _newArrowCheck(this, _this);

    return !Object(is_index_x_esm["a" /* default */])(key);
  }.bind(this));
};

var kStrict = true;
var kLoose = false;
var kNoIterator = 0;
var kIsArray = 1;
var kIsSet = 2;
var kIsMap = 3; // Check if they have the same source and flags

function areSimilarRegExps(a, b) {
  return a.source === b.source && a.flags === b.flags;
}

function areSimilarFloatArrays(a, b) {
  if (a.byteLength !== b.byteLength) {
    return false;
  }

  for (var offset = 0; offset < a.byteLength; offset += 1) {
    if (a[offset] !== b[offset]) {
      return false;
    }
  }

  return true;
}

function areSimilarTypedArrays(a, b) {
  if (a.byteLength !== b.byteLength) {
    return false;
  }
  /* eslint-disable-next-line compat/compat */


  return arraybuffer_equal_default()(a.buffer, new Uint8Array(b.buffer, b.byteOffset, b.byteLength).buffer);
}

function areEqualArrayBuffers(buf1, buf2) {
  /* eslint-disable-next-line compat/compat */
  return buf1.byteLength === buf2.byteLength && arraybuffer_equal_default()(new Uint8Array(buf1).buffer, new Uint8Array(buf2).buffer);
}

function setHasEqualElement(set, val1, strict, memo) {
  // Go looking.
  var setIter = set.values();
  var next = setIter.next();

  while (!next.done) {
    var val2 = next.value;

    if (innerDeepEqual(val1, val2, strict, memo)) {
      // Remove the matching element to make sure we do not check that again.
      set.delete(val2);
      return true;
    }

    next = setIter.next();
  }

  return false;
}

function getEnumerables(val, keys) {
  var _this2 = this;

  return Object(array_filter_x_esm["a" /* default */])(keys, function (k) {
    _newArrowCheck(this, _this2);

    return Object(property_is_enumerable_x_esm["a" /* default */])(val, k);
  }.bind(this));
} // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#Loose_equality_using
// Sadly it is not possible to detect corresponding values properly in case the
// type is a string, number, bigint or boolean. The reason is that those values
// can match lots of different string values (e.g., 1n == '+00001').


function findLooseMatchingPrimitives(prim) {
  var $prim = prim;

  switch (_typeof($prim)) {
    case 'undefined':
      return null;

    case 'object':
      // Only pass in null as object!
      return UNDEFINED;

    case 'symbol':
      return false;

    case 'string':
      $prim = +$prim;
    // Loose equal entries exist only if the string is possible to convert to
    // a regular number and not NaN.
    // Fall through

    case 'number':
      if (Object(is_nan_x_esm["a" /* default */])($prim)) {
        return false;
      }

      break;

    default:
  }

  return true;
}

function setMightHaveLoosePrim(a, b, prim) {
  var altValue = findLooseMatchingPrimitives(prim);

  if (altValue != null) {
    return altValue;
  }

  return b.has(altValue) && !a.has(altValue);
}

function mapMightHaveLoosePrim(a, b, prim, item, memo) {
  var altValue = findLooseMatchingPrimitives(prim);

  if (altValue != null) {
    return altValue;
  }

  var curB = b.get(altValue);

  if (typeof curB === 'undefined' && !b.has(altValue) || !innerDeepEqual(item, curB, false, memo)) {
    return false;
  }

  return !a.has(altValue) && innerDeepEqual(item, curB, false, memo);
}

function setEquiv(a, b, strict, memo) {
  // This is a lazily initiated Set of entries which have to be compared
  // pairwise.

  /** @type {Set} */
  var set = null;
  var setIterA = a.values();
  var nextA = setIterA.next();

  while (!nextA.done) {
    var val = nextA.value; // Note: Checking for the objects first improves the performance for object
    // heavy sets but it is a minor slow down for primitives. As they are fast
    // to check this improves the worst case scenario instead.

    if (_typeof(val) === 'object' && val !== null) {
      if (set === null) {
        set = new collections_x_esm["b" /* SetConstructor */]();
      } // If the specified value doesn't exist in the second set its an not null
      // object (or non strict only: a not matching primitive) we'll need to go
      // hunting for something that's deep-(strict-)equal to it. To make this
      // O(n log n) complexity we have to copy these values in a new set first.


      set.add(val);
    } else if (!b.has(val)) {
      if (strict) {
        return false;
      } // Fast path to detect missing string, symbol, undefined and null values.


      if (!setMightHaveLoosePrim(a, b, val)) {
        return false;
      }

      if (set === null) {
        set = new collections_x_esm["b" /* SetConstructor */]();
      }

      set.add(val);
    }

    nextA = setIterA.next();
  }

  if (set !== null) {
    var setIterB = b.values();
    var nextB = setIterB.next();

    while (!nextB.done) {
      var _val = nextB.value; // We have to check if a primitive value is already
      // matching and only if it's not, go hunting for it.

      if (_typeof(_val) === 'object' && _val !== null) {
        if (!setHasEqualElement(set, _val, strict, memo)) {
          return false;
        }
      } else if (!strict && !a.has(_val) && !setHasEqualElement(set, _val, strict, memo)) {
        return false;
      }

      nextB = setIterB.next();
    }

    return set.size === 0;
  }

  return true;
}

function mapHasEqualEntry(set, map, key1, item1, strict, memo) {
  // To be able to handle cases like:
  //   Map([[{}, 'a'], [{}, 'b']]) vs Map([[{}, 'b'], [{}, 'a']])
  // ... we need to consider *all* matching keys, not just the first we find.
  var setIter = set.values();
  var next = setIter.next();

  while (!next.done) {
    var key2 = next.value;

    if (innerDeepEqual(key1, key2, strict, memo) && innerDeepEqual(item1, map.get(key2), strict, memo)) {
      set.delete(key2);
      return true;
    }

    next = setIter.next();
  }

  return false;
}

function mapEquiv(a, b, strict, memo) {
  /** @type {Set} */
  var set = null;
  var setIterA = a.entries();
  var nextA = setIterA.next();

  while (!nextA.done) {
    var _nextA$value = _slicedToArray(nextA.value, 2),
        key = _nextA$value[0],
        item1 = _nextA$value[1];

    if (_typeof(key) === 'object' && key !== null) {
      if (set === null) {
        set = new collections_x_esm["b" /* SetConstructor */]();
      }

      set.add(key);
    } else {
      // By directly retrieving the value we prevent another b.has(key) check in
      // almost all possible cases.
      var item2 = b.get(key);

      if (typeof item2 === 'undefined' && !b.has(key) || !innerDeepEqual(item1, item2, strict, memo)) {
        if (strict) {
          return false;
        } // Fast path to detect missing string, symbol, undefined and null
        // keys.


        if (!mapMightHaveLoosePrim(a, b, key, item1, memo)) {
          return false;
        }

        if (set === null) {
          set = new collections_x_esm["b" /* SetConstructor */]();
        }

        set.add(key);
      }
    }

    nextA = setIterA.next();
  }

  if (set !== null) {
    var setIterB = b.entries();
    var nextB = setIterB.next();

    while (!nextB.done) {
      var _nextB$value = _slicedToArray(nextB.value, 2),
          key = _nextB$value[0],
          item = _nextB$value[1];

      if (_typeof(key) === 'object' && key !== null) {
        if (!mapHasEqualEntry(set, a, key, item, strict, memo)) {
          return false;
        }
      } else if (!strict && (!a.has(key) || !innerDeepEqual(a.get(key), item, false, memo)) && !mapHasEqualEntry(set, a, key, item, false, memo)) {
        return false;
      }

      nextB = setIterB.next();
    }

    return set.size === 0;
  }

  return true;
}

function isEqualBoxedPrimitive(val1, val2) {
  if (is_number_object_default()(val1)) {
    return is_number_object_default()(val2) && Object(same_value_x_esm["a" /* default */])(NumberValueOf.call(val1), NumberValueOf.call(val2));
  }

  if (is_string_default()(val1)) {
    return is_string_default()(val2) && StringValueOf.call(val1) === StringValueOf.call(val2);
  }

  if (is_boolean_object_default()(val1)) {
    return is_boolean_object_default()(val2) && BooleanValueOf.call(val1) === BooleanValueOf.call(val2);
  }

  if (is_bigint_default()(val1)) {
    return is_bigint_default()(val2) && BigIntValueOf.call(val1) === BigIntValueOf.call(val2);
  }

  return is_symbol_default()(val2) && SymbolValueOf.call(val1) === SymbolValueOf.call(val2);
}

function objEquiv(a, b, strict, keys, memos, iterationType) {
  // Sets and maps don't have their entries accessible via normal object
  // properties.
  var i = 0;

  if (iterationType === kIsSet) {
    if (!setEquiv(a, b, strict, memos)) {
      return false;
    }
  } else if (iterationType === kIsMap) {
    if (!mapEquiv(a, b, strict, memos)) {
      return false;
    }
  } else if (iterationType === kIsArray) {
    for (; i < a.length; i += 1) {
      if (Object(has_own_property_x_esm["a" /* default */])(a, i)) {
        if (!Object(has_own_property_x_esm["a" /* default */])(b, i) || !innerDeepEqual(a[i], b[i], strict, memos)) {
          return false;
        }
      } else if (Object(has_own_property_x_esm["a" /* default */])(b, i)) {
        return false;
      } else {
        // Array is sparse.
        var keysA = Object(object_keys_x_esm["a" /* default */])(a);

        for (; i < keysA.length; i += 1) {
          var key = keysA[i];

          if (!Object(has_own_property_x_esm["a" /* default */])(b, key) || !innerDeepEqual(a[key], b[key], strict, memos)) {
            return false;
          }
        }

        return keysA.length === Object(object_keys_x_esm["a" /* default */])(b).length;
      }
    }
  } // The pair must have equivalent values for every corresponding key.
  // Possibly expensive deep test:


  for (i = 0; i < keys.length; i += 1) {
    var _key = keys[i];

    if (!innerDeepEqual(a[_key], b[_key], strict, memos)) {
      return false;
    }
  }

  return true;
}

function keyCheck(val1, val2, strict, memos, iterationType, aKeys) {
  var $memos = memos;
  var $aKeys = aKeys; // For all remaining Object pairs, including Array, objects and Maps,
  // equivalence is determined by having:
  // a) The same number of owned enumerable properties
  // b) The same set of keys/indexes (although not necessarily the same order)
  // c) Equivalent values for every corresponding key/index
  // d) For Sets and Maps, equal contents
  // Note: this accounts for both named and indexed properties on Arrays.

  if (arguments.length === 5) {
    $aKeys = Object(object_keys_x_esm["a" /* default */])(val1);
    var bKeys = Object(object_keys_x_esm["a" /* default */])(val2); // The pair must have the same number of owned properties.

    if ($aKeys.length !== bKeys.length) {
      return false;
    }
  } // Cheap key test


  var i = 0;

  for (; i < $aKeys.length; i += 1) {
    if (!Object(has_own_property_x_esm["a" /* default */])(val2, $aKeys[i])) {
      return false;
    }
  }

  if (strict && arguments.length === 5) {
    var symbolKeysA = Object(get_own_property_symbols_x_esm["a" /* default */])(val1);

    if (symbolKeysA.length !== 0) {
      var count = 0;

      for (i = 0; i < symbolKeysA.length; i += 1) {
        var key = symbolKeysA[i];

        if (Object(property_is_enumerable_x_esm["a" /* default */])(val1, key)) {
          if (!Object(property_is_enumerable_x_esm["a" /* default */])(val2, key)) {
            return false;
          }

          $aKeys.push(key);
          count += 1;
        } else if (Object(property_is_enumerable_x_esm["a" /* default */])(val2, key)) {
          return false;
        }
      }

      var symbolKeysB = Object(get_own_property_symbols_x_esm["a" /* default */])(val2);

      if (symbolKeysA.length !== symbolKeysB.length && getEnumerables(val2, symbolKeysB).length !== count) {
        return false;
      }
    } else {
      var _symbolKeysB = Object(get_own_property_symbols_x_esm["a" /* default */])(val2);

      if (_symbolKeysB.length !== 0 && getEnumerables(val2, _symbolKeysB).length !== 0) {
        return false;
      }
    }
  }

  if ($aKeys.length === 0 && (iterationType === kNoIterator || iterationType === kIsArray && val1.length === 0 || val1.size === 0)) {
    return true;
  } // Use $memos to handle cycles.


  if (typeof $memos === 'undefined') {
    $memos = {
      val1: new collections_x_esm["a" /* MapConstructor */](),
      val2: new collections_x_esm["a" /* MapConstructor */](),
      position: 0
    };
  } else {
    // We prevent up to two map.has(x) calls by directly retrieving the value
    // and checking for undefined. The map can only contain numbers, so it is
    // safe to check for undefined only.
    var val2MemoA = $memos.val1.get(val1);

    if (typeof val2MemoA !== 'undefined') {
      var val2MemoB = $memos.val2.get(val2);

      if (typeof val2MemoB !== 'undefined') {
        return val2MemoA === val2MemoB;
      }
    }

    $memos.position += 1;
  }

  $memos.val1.set(val1, $memos.position);
  $memos.val2.set(val2, $memos.position);
  var areEq = objEquiv(val1, val2, strict, $aKeys, $memos, iterationType);
  $memos.val1.delete(val1);
  $memos.val2.delete(val2);
  return areEq;
} // Notes: Type tags are historical [[Class]] properties that can be set by
// FunctionTemplate::SetClassName() in C++ or Symbol.toStringTag in JS
// and retrieved using Object.prototype.toString.call(obj) in JS
// See https://tc39.github.io/ecma262/#sec-object.prototype.tostring
// for a list of tags pre-defined in the spec.
// There are some unspecified tags in the wild too (e.g. typed array tags).
// Since tags can be altered, they only serve fast failures
//
// Typed arrays and buffers are checked by comparing the content in their
// underlying ArrayBuffer. This optimization requires that it's
// reasonable to interpret their underlying memory in the same way,
// which is checked by comparing their type tags.
// (e.g. a Uint8Array and a Uint16Array with the same memory content
// could still be different because they will be interpreted differently).
//
// For strict comparison, objects should have
// a) The same built-in type tags
// b) The same prototypes.


innerDeepEqual = function _innerDeepEqual(val1, val2, strict, memos) {
  // All identical values are equivalent, as determined by ===.
  if (val1 === val2) {
    if (val1 !== 0) {
      return true;
    }

    return strict ? Object(same_value_x_esm["a" /* default */])(val1, val2) : true;
  } // Check more closely if val1 and val2 are equal.


  if (strict) {
    if (_typeof(val1) !== 'object') {
      return typeof val1 === 'number' && Object(is_nan_x_esm["a" /* default */])(val1) && Object(is_nan_x_esm["a" /* default */])(val2);
    }

    if (_typeof(val2) !== 'object' || val1 === null || val2 === null) {
      return false;
    }

    if (Object(get_prototype_of_x_esm["a" /* default */])(val1) !== Object(get_prototype_of_x_esm["a" /* default */])(val2)) {
      return false;
    }
  } else {
    if (val1 === null || _typeof(val1) !== 'object') {
      if (val2 === null || _typeof(val2) !== 'object') {
        // noinspection EqualityComparisonWithCoercionJS
        return val1 == val2;
        /* eslint-disable-line eqeqeq */
      }

      return false;
    }

    if (val2 === null || _typeof(val2) !== 'object') {
      return false;
    }
  }

  var val1Tag = Object(to_string_tag_x_esm["a" /* default */])(val1);
  var val2Tag = Object(to_string_tag_x_esm["a" /* default */])(val2);

  if (val1Tag !== val2Tag) {
    return false;
  }

  if (Object(is_array_x_esm["a" /* default */])(val1)) {
    // Check for sparse arrays and general fast path
    if (val1.length !== val2.length) {
      return false;
    }
    /* eslint-disable-next-line no-bitwise */


    var filter = strict ? ONLY_ENUMERABLE : ONLY_ENUMERABLE | SKIP_SYMBOLS;
    var keys1 = is_deep_strict_equal_x_esm_getOwnNonIndexProperties(val1, filter);
    var keys2 = is_deep_strict_equal_x_esm_getOwnNonIndexProperties(val2, filter);

    if (keys1.length !== keys2.length) {
      return false;
    }

    return keyCheck(val1, val2, strict, memos, kIsArray, keys1);
  }

  if (val1Tag === '[object Object]') {
    return keyCheck(val1, val2, strict, memos, kNoIterator);
  }

  if (is_date_object_default()(val1)) {
    if (DateGetTime.call(val1) !== DateGetTime.call(val2)) {
      return false;
    }
  } else if (Object(is_regexp_x_esm["a" /* default */])(val1)) {
    if (!areSimilarRegExps(val1, val2)) {
      return false;
    }
  } else if (Object(is_error_x_esm["a" /* default */])(val1)) {
    // Do not compare the stack as it might differ even though the error itself
    // is otherwise identical.
    if (val1.message !== val2.message || val1.name !== val2.name) {
      return false;
    }
  } else if (is_deep_strict_equal_x_esm_isArrayBufferView(val1)) {
    if (!strict && (is_deep_strict_equal_x_esm_isFloat32Array(val1) || is_deep_strict_equal_x_esm_isFloat64Array(val1))) {
      if (!areSimilarFloatArrays(val1, val2)) {
        return false;
      }
    } else if (!areSimilarTypedArrays(val1, val2)) {
      return false;
    } // Buffer.compare returns true, so val1.length === val2.length. If they both
    // only contain numeric keys, we don't need to exam further than checking
    // the symbols.

    /* eslint-disable-next-line no-bitwise */


    var _filter = strict ? ONLY_ENUMERABLE : ONLY_ENUMERABLE | SKIP_SYMBOLS;

    var _keys = is_deep_strict_equal_x_esm_getOwnNonIndexProperties(val1, _filter);

    var _keys2 = is_deep_strict_equal_x_esm_getOwnNonIndexProperties(val2, _filter);

    if (_keys.length !== _keys2.length) {
      return false;
    }

    return keyCheck(val1, val2, strict, memos, kNoIterator, _keys);
  } else if (Object(is_set_x_esm["a" /* default */])(val1)) {
    if (!Object(is_set_x_esm["a" /* default */])(val2) || val1.size !== val2.size) {
      return false;
    }

    return keyCheck(val1, val2, strict, memos, kIsSet);
  } else if (Object(is_map_x_esm["a" /* default */])(val1)) {
    if (!Object(is_map_x_esm["a" /* default */])(val2) || val1.size !== val2.size) {
      return false;
    }

    return keyCheck(val1, val2, strict, memos, kIsMap);
  } else if (Object(is_array_buffer_x_esm["a" /* default */])(val1)) {
    if (!areEqualArrayBuffers(val1, val2)) {
      return false;
    }
  } else if (implementation_default()(val1) && !isEqualBoxedPrimitive(val1, val2)) {
    return false;
  }

  return keyCheck(val1, val2, strict, memos, kNoIterator);
}; // noinspection JSUnusedGlobalSymbols


function isDeepEqual(val1, val2) {
  return innerDeepEqual(val1, val2, kLoose);
}
function isDeepStrictEqual(val1, val2) {
  return innerDeepEqual(val1, val2, kStrict);
}


// EXTERNAL MODULE: ./node_modules/object-assign-x/dist/object-assign-x.esm.js
var object_assign_x_esm = __webpack_require__(58);

// CONCATENATED MODULE: ./node_modules/assert-x/dist/assert-x.esm.js
/* unused harmony export strict */
function assert_x_esm_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { assert_x_esm_typeof = function _typeof(obj) { return typeof obj; }; } else { assert_x_esm_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return assert_x_esm_typeof(obj); }








/** @type {BooleanConstructor} */

var castBoolean = true.constructor;
var rxTest = /none/.test;

var isStringType = function isStringType(value) {
  return typeof value === 'string';
};
/**
 * Throws an exception that displays the values for actual and expected
 * separated by the provided operator.
 *
 * @private
 * @param {*} actual - The actual value to be tested.
 * @param {*} expected - The expected value to compare against actual.
 * @param {string} message - Text description of test.
 * @param {string} operator - The compare operator.
 * @throws {Error} Throws an `AssertionError`.
 */


var assert_x_esm_baseFail = function baseFail(actual, expected, message, operator) {
  var arg = {
    actual: actual,
    expected: expected,
    message: message,
    operator: operator
  };
  throw new error_x_esm["a" /* AssertionErrorConstructor */](arg);
};
/**
 * Returns whether an exception is expected. Used by throws.
 *
 * @private
 * @param {*} actual - The actual value to be tested.
 * @param {*} expected - The expected value to compare against actual.
 * @returns {boolean} True if exception expected, otherwise false.
 */


var assert_x_esm_expectedException = function expectedException(actual, expected) {
  if (castBoolean(actual) === false || castBoolean(expected) === false) {
    return false;
  }

  if (Object(is_regexp_x_esm["a" /* default */])(expected)) {
    return rxTest.call(expected, Object(to_string_symbols_supported_x_esm["a" /* default */])(actual));
  }

  if (actual instanceof expected) {
    return true;
  }

  if (Object(is_function_x_esm["a" /* default */])(expected)) {
    return expected.call({}, actual) === true;
  }

  return false;
};
/**
 * Returns whether an exception is expected. Used by assertx~throws and
 * assertx~doesNotThrow.
 *
 * @private
 * @param {boolean} shouldThrow - True if it should throw, otherwise false.
 * @param {Function} fn - The function block to be executed in testing.
 * @param {*} expected - The expected value to compare against actual.
 * @param {string} [message] - Text description of test.
 */


var assert_x_esm_baseThrows = function baseThrows(shouldThrow, fn, expected, message) {
  var msg = message;
  var clause1 = castBoolean(msg) === false || isStringType(msg) === false;

  if (Object(is_function_x_esm["a" /* default */])(fn) === false) {
    throw new TypeError("The \"fn\" argument must be of type Function. Received type ".concat(assert_x_esm_typeof(fn)));
  }

  var xpd = expected;

  if (clause1 && isStringType(xpd)) {
    msg = xpd;
    /* eslint-disable-next-line no-void */

    xpd = void 0;
  }

  var actual;

  try {
    fn();
  } catch (e) {
    actual = e;
  }

  var wasExceptionExpected = assert_x_esm_expectedException(actual, xpd);
  clause1 = xpd && isStringType(xpd.name) && xpd.name;
  var part1 = clause1 ? " (".concat(xpd.name, ").") : '.';
  var part2 = msg ? " ".concat(msg) : '.';
  msg = (part1 === '.' ? '' : part1) + part2;

  if (shouldThrow && castBoolean(actual) === false) {
    assert_x_esm_baseFail(actual, xpd, "Missing expected exception".concat(msg), '');
  } else if (castBoolean(shouldThrow) === false && wasExceptionExpected) {
    assert_x_esm_baseFail(actual, xpd, "Got unwanted exception".concat(msg), '');
  } else {
    var clause2;

    if (shouldThrow) {
      clause1 = actual && xpd && castBoolean(wasExceptionExpected) === false;
    } else {
      clause1 = false;
      clause2 = actual;
    }

    if (clause1 || clause2) {
      throw actual;
    }
  }
};
/**
 * Common function for `assert` and `assert~ok`.
 *
 * @private
 * @param {*} value - The value to be tested.
 * @param {string} message - Text description of test.
 * @param {string} operator - Text description of test operator.
 */


var baseAssert = function baseAssert(value, message, operator) {
  if (castBoolean(value) === false) {
    assert_x_esm_baseFail(false, true, message, operator);
  }
};
/**
 * Tests if value is truthy, it is equivalent to `equal(!!value, true, message)`.
 *
 * @param {*} value - The value to be tested.
 * @param {string} message - Text description of test.
 */


var assert = function assert(value, message) {
  baseAssert(value, message, 'ok');
};

var assertMethods = {
  /**
   * Error constructor for test and validation frameworks that implement the
   * standardized AssertionError specification.
   *
   * @class
   * @augments Error
   * @param {object} [message] - Need to document the properties.
   */
  AssertionError: {
    value: error_x_esm["a" /* AssertionErrorConstructor */]
  },

  /**
   * Tests for deep equality, coercive equality with the equal comparison
   * operator ( == ) and equivalent.
   *
   * @param {*} actual - The actual value to be tested.
   * @param {*} expected - The expected value to compare against actual.
   * @param {string} [message] - Text description of test.
   */
  deepEqual: {
    value: function deepEqual(actual, expected, message) {
      if (isDeepEqual(actual, expected) === false) {
        assert_x_esm_baseFail(actual, expected, message, 'deepEqual');
      }
    }
  },

  /**
   * Tests for deep equality, coercive equality with the equal comparison
   * operator ( === ) and equivalent.
   *
   * @param {*} actual - The actual value to be tested.
   * @param {*} expected - The expected value to compare against actual.
   * @param {string} [message] - Text description of test.
   */
  deepStrictEqual: {
    value: function deepStrictEqual(actual, expected, message) {
      if (isDeepStrictEqual(actual, expected) === false) {
        assert_x_esm_baseFail(actual, expected, message, 'deepStrictEqual');
      }
    }
  },

  /**
   * Expects block not to throw an error, see assert~throws for details.
   *
   * @param {Function} fn - The function block to be executed in testing.
   * @param {constructor} [error] - The comparator.
   * @param {string} [message] - Text description of test.
   */
  doesNotThrow: {
    value: function doesNotThrow(fn, error, message) {
      assert_x_esm_baseThrows(false, fn, error, message);
    }
  },

  /**
   * Tests shallow, coercive equality with the equal comparison
   * operator ( == ).
   *
   * @param {*} actual - The actual value to be tested.
   * @param {*} expected - The expected value to compare against actual.
   * @param {string} [message] - Text description of test.
   */
  equal: {
    value: function equal(actual, expected, message) {
      // noinspection EqualityComparisonWithCoercionJS
      if (actual != expected
      /* eslint-disable-line eqeqeq */
      ) {
          assert_x_esm_baseFail(actual, expected, message, '==');
        }
    }
  },

  /**
   * Throws an exception that displays the values for actual and expected
   * separated by the provided operator.
   *
   * @param {*} actual - The actual value to be tested.
   * @param {*} expected - The expected value to compare against actual.
   * @param {string} [message] - Text description of test.
   * @param {string} operator - The compare operator.
   * @throws {Error} Throws an `AssertionError`.
   */
  fail: {
    value: function fail(actual, expected, message) {
      var operator = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '!=';

      if (arguments.length < 2) {
        if (Object(error_x_esm["c" /* isError */])(actual)) {
          throw actual;
        }
        /* eslint-disable-next-line no-void */


        assert_x_esm_baseFail(actual, void 0, arguments.length ? actual : 'Failed', 'fail');
      } else {
        if (Object(error_x_esm["c" /* isError */])(message)) {
          throw message;
        }

        assert_x_esm_baseFail(actual, expected, message, operator);
      }
    }
  },

  /**
   * Tests if value is not a falsy value, throws if it is a truthy value.
   * Useful when testing the first argument, error in callbacks.
   *
   * @param {*} err - The value to be tested for truthiness.
   * @throws {*} The value `err` if truthy.
   */
  ifError: {
    value: function ifError(err) {
      if (err) {
        throw err;
      }
    }
  },

  /**
   * Tests for any deep inequality. Opposite of `deepEqual`.
   *
   * @param {*} actual - The actual value to be tested.
   * @param {*} expected - The expected value to compare against actual.
   * @param {string} [message] - Text description of test.
   */
  notDeepEqual: {
    value: function notDeepEqual(actual, expected, message) {
      if (isDeepEqual(actual, expected)) {
        assert_x_esm_baseFail(actual, expected, message, 'notDeepEqual');
      }
    }
  },

  /**
   * Tests for deep inequality. Opposite of `deepStrictEqual`.
   *
   * @param {*} actual - The actual value to be tested.
   * @param {*} expected - The expected value to compare against actual.
   * @param {string} [message] - Text description of test.
   */
  notDeepStrictEqual: {
    value: function notDeepStrictEqual(actual, expected, message) {
      if (isDeepStrictEqual(actual, expected)) {
        assert_x_esm_baseFail(actual, expected, message, 'notDeepStrictEqual');
      }
    }
  },

  /**
   * Tests shallow, coercive non-equality with the not equal comparison
   * operator ( != ).
   *
   * @param {*} actual - The actual value to be tested.
   * @param {*} expected - The expected value to compare against actual.
   * @param {string} [message] - Text description of test.
   */
  notEqual: {
    value: function notEqual(actual, expected, message) {
      // noinspection EqualityComparisonWithCoercionJS
      if (actual == expected
      /* eslint-disable-line eqeqeq */
      ) {
          assert_x_esm_baseFail(actual, expected, message, '!=');
        }
    }
  },

  /**
   * Tests strict non-equality, as determined by the strict not equal
   * operator ( !== ).
   *
   * @param {*} actual - The actual value to be tested.
   * @param {*} expected - The expected value to compare against actual.
   * @param {string} [message] - Text description of test.
   */
  notStrictEqual: {
    value: function notStrictEqual(actual, expected, message) {
      if (actual === expected) {
        assert_x_esm_baseFail(actual, expected, message, 'notStrictEqual');
      }
    }
  },

  /**
   * Tests if value is truthy, it is equivalent to
   * `equal(!!value, true, message)`.
   *
   * @param {*} value - The value to be tested.
   * @param {string} [message] - Text description of test.
   */
  ok: {
    value: function ok(value, message) {
      baseAssert(value, message, 'ok');
    }
  },

  /**
   * Tests strict equality, as determined by the strict equality
   * operator ( === ).
   *
   * @param {*} actual - The actual value to be tested.
   * @param {*} expected - The expected value to compare against actual.
   * @param {string} [message] - Text description of test.
   */
  strictEqual: {
    value: function strictEqual(actual, expected, message) {
      if (actual !== expected) {
        assert_x_esm_baseFail(actual, expected, message, 'strictEqual');
      }
    }
  },

  /**
   * Expects block to throw an error. `error` can be constructor, regexp or
   * validation function.
   *
   * @param {Function} fn - The function block to be executed in testing.
   * @param {constructor|RegExp|Function} [error] - The comparator.
   * @param {string} [message] - Text description of test.
   */
  throws: {
    value: function throws(fn, error, message) {
      assert_x_esm_baseThrows(true, fn, error, message);
    }
  }
};
Object(object_define_properties_x_esm["a" /* default */])(assert, assertMethods);
/* harmony default export */ var assert_x_esm = __webpack_exports__["a"] = (assert); // Expose a strict only variant of assert

function assert_x_esm_strict(value, message) {
  baseAssert(value, message, 'ok');
}
var strictMethods = Object(object_assign_x_esm["a" /* default */])({}, assertMethods, {
  equal: assertMethods.strictEqual,
  deepEqual: assertMethods.deepStrictEqual,
  notEqual: assertMethods.notStrictEqual,
  notDeepEqual: assertMethods.notDeepStrictEqual
});
Object(object_define_properties_x_esm["a" /* default */])(assert_x_esm_strict, strictMethods);



/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var object_define_properties_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var object_define_property_x__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);
/* harmony import */ var is_primitive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var is_primitive__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(is_primitive__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var is_function_x__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var array_for_each_x__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(64);
/* harmony import */ var assert_x__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(98);
/* harmony import */ var inspect_x__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(48);
/* harmony import */ var array_slice_x__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(14);
/* harmony import */ var has_own_property_x__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3);
/* harmony import */ var util_format_x__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(82);
/* harmony import */ var collections_x__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(31);
/* harmony import */ var to_string_symbols_supported_x__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(27);
/* harmony import */ var object_keys_x__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(18);
/* harmony import */ var to_iso_string_x__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(79);
/* harmony import */ var array_includes_x__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(24);
/* harmony import */ var error_x__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(59);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

















var properties = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'];
var Trace = Object(error_x__WEBPACK_IMPORTED_MODULE_15__[/* create */ "b"])('Trace');
/**
 * The cross-console-x object provides access to the browser's debugging console
 * (e.g., the Web Console in Firefox). The specifics of how it works vary from
 * browser to browser, but there is a de facto set of features that are
 * typically provided.
 *
 * Missing methods are shimmed when possible, otherwise they provide no
 * operation.
 *
 * Additional stamp() method provided.
 * A thin wrapper to any method that prepends a timestamp.
 *
 * @see {@link https://developer.mozilla.org/en/docs/Web/API/console}
 */

var con = {};

if (typeof console !== 'undefined' && is_primitive__WEBPACK_IMPORTED_MODULE_2___default()(console) === false) {
  var apply = Function.prototype.apply;
  Object(array_for_each_x__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(properties, function assigner1(property) {
    if (Object(has_own_property_x__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(console, property)) {
      var method = console[property];
      var fn;

      if (is_primitive__WEBPACK_IMPORTED_MODULE_2___default()(method) === false) {
        // noinspection JSUnusedLocalSymbols
        var f
        /* eslint-disable-line no-unused-vars */
        = function _f(context, args) {
          try {
            return apply.call(method, context, Object(array_slice_x__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(args));
          } catch (ignore) {} // empty

          /* eslint-disable-next-line no-void */


          return void 0;
        };
        /* eslint-disable-next-line no-eval */


        fn = eval("(0,function ".concat(property, "(){return f(this,arguments);})"));
      }

      if (Object(is_function_x__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(fn)) {
        Object(object_define_property_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(con, property, {
          value: fn
        });
      }
    }
  });
}

var times = new collections_x__WEBPACK_IMPORTED_MODULE_10__[/* MapConstructor */ "a"]();
var shams = Object(object_define_properties_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, {
  consoleAssert: {
    enumerable: true,
    value: function consoleAssert() {
      /* eslint-disable-next-line prefer-rest-params */
      var expression = arguments[0];

      if (Boolean(expression) === false) {
        /* eslint-disable-next-line prefer-rest-params */
        assert_x__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].ok(false, util_format_x__WEBPACK_IMPORTED_MODULE_9__[/* format */ "a"].apply(void 0, _toConsumableArray(Object(array_slice_x__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(arguments, 1))));
      }
    }
  },
  dir: {
    enumerable: true,
    value: function dir() {
      if (arguments.length > 0) {
        /* eslint-disable-next-line prefer-rest-params */
        this.log("".concat(Object(inspect_x__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(arguments[0]), "\n"));
      } else {
        this.log();
      }
    }
  },
  error: {
    enumerable: true,
    value: function error() {
      /* eslint-disable-next-line prefer-rest-params,prefer-spread */
      this.warn.apply(this, Object(array_slice_x__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(arguments));
    }
  },
  info: {
    enumerable: true,
    value: function info() {
      /* eslint-disable-next-line prefer-rest-params,prefer-spread */
      this.log.apply(this, Object(array_slice_x__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(arguments));
    }
  },
  log: {
    enumerable: true,

    /* eslint-disable-next-line lodash/prefer-noop */
    value: function log() {}
  },
  stamp: {
    enumerable: true,
    value: function stamp() {
      /* eslint-disable-next-line prefer-rest-params */
      var type = arguments.length > 0 ? arguments[0] : null;

      if (Object(array_includes_x__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"])(properties, type)) {
        var stampStr = Object(util_format_x__WEBPACK_IMPORTED_MODULE_9__[/* format */ "a"])('[%s] [%s]', Object(to_iso_string_x__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"])(new Date()), type);
        /* eslint-disable-next-line prefer-rest-params */

        this[type].apply(this, [stampStr].concat(_toConsumableArray(Object(array_slice_x__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(arguments, 1))));
      }
    }
  },
  time: {
    enumerable: true,
    value: function time() {
      /* eslint-disable-next-line prefer-rest-params */
      var label = arguments.length > 0 ? Object(to_string_symbols_supported_x__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"])(arguments[0]) : 'default';
      times.set(label, new Date().getTime());
    }
  },
  timeEnd: {
    enumerable: true,
    value: function timeEnd() {
      /* eslint-disable-next-line prefer-rest-params */
      var label = arguments.length > 0 ? Object(to_string_symbols_supported_x__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"])(arguments[0]) : 'default';
      var duration;

      if (times.has(label)) {
        duration = new Date().getTime() - times.get(label);
        var key = 'delete';
        times[key](label);
      } else {
        duration = 0;
      }

      this.log("".concat(label, ": ").concat(duration, "ms"));
    }
  },
  trace: {
    enumerable: true,
    value: function trace() {
      /* eslint-disable-next-line prefer-rest-params */
      this.error(new Trace(util_format_x__WEBPACK_IMPORTED_MODULE_9__[/* format */ "a"].apply(void 0, _toConsumableArray(Object(array_slice_x__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(arguments)))));
    }
  },
  warn: {
    enumerable: true,
    value: function warn() {
      /* eslint-disable-next-line prefer-rest-params,prefer-spread */
      this.log.apply(this, Object(array_slice_x__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(arguments));
    }
  }
});
Object(array_for_each_x__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Object(object_keys_x__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"])(shams), function assigner2(key) {
  if (Object(has_own_property_x__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(con, key) === false) {
    Object(object_define_property_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(con, key, {
      value: shams[key]
    });
  }
});
Object(array_for_each_x__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(properties, function assigner3(property) {
  if (Object(has_own_property_x__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(con, property) === false) {
    Object(object_define_property_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(con, property, {
      /* eslint-disable-next-line lodash/prefer-noop */
      value: function value() {}
    });
  }
});
/* harmony default export */ __webpack_exports__["default"] = (con);



/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var origSymbol = global.Symbol;
var hasSymbolSham = __webpack_require__(101);

module.exports = function hasNativeSymbols() {
	if (typeof origSymbol !== 'function') { return false; }
	if (typeof Symbol !== 'function') { return false; }
	if (typeof origSymbol('foo') !== 'symbol') { return false; }
	if (typeof Symbol('bar') !== 'symbol') { return false; }

	return hasSymbolSham();
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(66)))

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint complexity: [2, 17], max-statements: [2, 33] */
module.exports = function hasSymbols() {
	if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }
	if (typeof Symbol.iterator === 'symbol') { return true; }

	var obj = {};
	var sym = Symbol('test');
	var symObj = Object(sym);
	if (typeof sym === 'string') { return false; }

	if (Object.prototype.toString.call(sym) !== '[object Symbol]') { return false; }
	if (Object.prototype.toString.call(symObj) !== '[object Symbol]') { return false; }

	// temp disabled per https://github.com/ljharb/object.assign/issues/17
	// if (sym instanceof Symbol) { return false; }
	// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
	// if (!(symObj instanceof Symbol)) { return false; }

	// if (typeof Symbol.prototype.toString !== 'function') { return false; }
	// if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }

	var symVal = 42;
	obj[sym] = symVal;
	for (sym in obj) { return false; } // eslint-disable-line no-restricted-syntax
	if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }

	if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }

	var syms = Object.getOwnPropertySymbols(obj);
	if (syms.length !== 1 || syms[0] !== sym) { return false; }

	if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }

	if (typeof Object.getOwnPropertyDescriptor === 'function') {
		var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
		if (descriptor.value !== symVal || descriptor.enumerable !== true) { return false; }
	}

	return true;
};


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var keysShim;
if (!Object.keys) {
	// modified from https://github.com/es-shims/es5-shim
	var has = Object.prototype.hasOwnProperty;
	var toStr = Object.prototype.toString;
	var isArgs = __webpack_require__(87); // eslint-disable-line global-require
	var isEnumerable = Object.prototype.propertyIsEnumerable;
	var hasDontEnumBug = !isEnumerable.call({ toString: null }, 'toString');
	var hasProtoEnumBug = isEnumerable.call(function () {}, 'prototype');
	var dontEnums = [
		'toString',
		'toLocaleString',
		'valueOf',
		'hasOwnProperty',
		'isPrototypeOf',
		'propertyIsEnumerable',
		'constructor'
	];
	var equalsConstructorPrototype = function (o) {
		var ctor = o.constructor;
		return ctor && ctor.prototype === o;
	};
	var excludedKeys = {
		$applicationCache: true,
		$console: true,
		$external: true,
		$frame: true,
		$frameElement: true,
		$frames: true,
		$innerHeight: true,
		$innerWidth: true,
		$onmozfullscreenchange: true,
		$onmozfullscreenerror: true,
		$outerHeight: true,
		$outerWidth: true,
		$pageXOffset: true,
		$pageYOffset: true,
		$parent: true,
		$scrollLeft: true,
		$scrollTop: true,
		$scrollX: true,
		$scrollY: true,
		$self: true,
		$webkitIndexedDB: true,
		$webkitStorageInfo: true,
		$window: true
	};
	var hasAutomationEqualityBug = (function () {
		/* global window */
		if (typeof window === 'undefined') { return false; }
		for (var k in window) {
			try {
				if (!excludedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') {
					try {
						equalsConstructorPrototype(window[k]);
					} catch (e) {
						return true;
					}
				}
			} catch (e) {
				return true;
			}
		}
		return false;
	}());
	var equalsConstructorPrototypeIfNotBuggy = function (o) {
		/* global window */
		if (typeof window === 'undefined' || !hasAutomationEqualityBug) {
			return equalsConstructorPrototype(o);
		}
		try {
			return equalsConstructorPrototype(o);
		} catch (e) {
			return false;
		}
	};

	keysShim = function keys(object) {
		var isObject = object !== null && typeof object === 'object';
		var isFunction = toStr.call(object) === '[object Function]';
		var isArguments = isArgs(object);
		var isString = isObject && toStr.call(object) === '[object String]';
		var theKeys = [];

		if (!isObject && !isFunction && !isArguments) {
			throw new TypeError('Object.keys called on a non-object');
		}

		var skipProto = hasProtoEnumBug && isFunction;
		if (isString && object.length > 0 && !has.call(object, 0)) {
			for (var i = 0; i < object.length; ++i) {
				theKeys.push(String(i));
			}
		}

		if (isArguments && object.length > 0) {
			for (var j = 0; j < object.length; ++j) {
				theKeys.push(String(j));
			}
		} else {
			for (var name in object) {
				if (!(skipProto && name === 'prototype') && has.call(object, name)) {
					theKeys.push(String(name));
				}
			}
		}

		if (hasDontEnumBug) {
			var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);

			for (var k = 0; k < dontEnums.length; ++k) {
				if (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {
					theKeys.push(dontEnums[k]);
				}
			}
		}
		return theKeys;
	};
}
module.exports = keysShim;


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(88);

module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint no-invalid-this: 1 */

var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var slice = Array.prototype.slice;
var toStr = Object.prototype.toString;
var funcType = '[object Function]';

module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slice.call(arguments, 1);

    var bound;
    var binder = function () {
        if (this instanceof bound) {
            var result = target.apply(
                this,
                args.concat(slice.call(arguments))
            );
            if (Object(result) === result) {
                return result;
            }
            return this;
        } else {
            return target.apply(
                that,
                args.concat(slice.call(arguments))
            );
        }
    };

    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        boundArgs.push('$' + i);
    }

    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }

    return bound;
};


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var define = __webpack_require__(90);
var getPolyfill = __webpack_require__(92);

/* http://www.ecma-international.org/ecma-262/6.0/#sec-number.isnan */

module.exports = function shimNumberIsNaN() {
	var polyfill = getPolyfill();
	define(Number, { isNaN: polyfill }, { isNaN: function () { return Number.isNaN !== polyfill; } });
	return polyfill;
};


/***/ }),
/* 106 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 107 */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ })
/******/ ]);
});
//# sourceMappingURL=cross-console-x.js.map
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Rox"] = factory();
	else
		root["Rox"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 41);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(31);
var isBuffer = __webpack_require__(22);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__setters__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__repositories__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__parsers__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__entities__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__context__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__config__ = __webpack_require__(4);








/* harmony default export */ __webpack_exports__["a"] = (Object.assign({}, __WEBPACK_IMPORTED_MODULE_4__lib__, {
  Config: __WEBPACK_IMPORTED_MODULE_6__config__["a" /* default */],
  Entities: __WEBPACK_IMPORTED_MODULE_3__entities__,
  Parsers: __WEBPACK_IMPORTED_MODULE_2__parsers__,
  Setters: __WEBPACK_IMPORTED_MODULE_0__setters__,
  Repositories: __WEBPACK_IMPORTED_MODULE_1__repositories__,
  Context: __WEBPACK_IMPORTED_MODULE_5__context__
}));

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_loglevel__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_loglevel___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_loglevel__);


var logger = __WEBPACK_IMPORTED_MODULE_0_loglevel___default.a.getLogger('ROXLogger');

logger.setVerboseMode = function (debugLevel) {
  if (debugLevel === 'verbose') {
    logger.setLevel('debug');
    logger.debug = logger.info;
    logger.debug('Active verbose mode');
  } else {
    logger.setLevel('error');
  }
};

/* harmony default export */ __webpack_exports__["a"] = (logger);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__RoxxParser__ = __webpack_require__(18);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "RoxxParser", function() { return __WEBPACK_IMPORTED_MODULE_0__RoxxParser__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ConfigurationParser__ = __webpack_require__(57);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurationParser", function() { return __WEBPACK_IMPORTED_MODULE_1__ConfigurationParser__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__RemoteConfigurationsParser__ = __webpack_require__(29);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "RemoteConfigurationsParser", function() { return __WEBPACK_IMPORTED_MODULE_2__RemoteConfigurationsParser__["a"]; });




/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var DEFAULT_CONFIGURATION = {
  API_HOST: 'x-api.rollout.io',
  CD_API_ENDPOINT: 'https://x-api.rollout.io/device/request_configuration',
  CD_S3_ENDPOINT: 'https://s3.amazonaws.com/rox-conf.rollout.io/v1/production/',
  CLIENT_DATA_CACHE_KEY: 'client_data',
  CLIENT_DATA_CACHE_TTL_MIN: 15
};

var _activeConfigiration = DEFAULT_CONFIGURATION;

/* harmony default export */ __webpack_exports__["a"] = ({
  get: function get(key) {
    return _activeConfigiration[key];
  },
  set: function set(key, value) {
    _activeConfigiration[key] = value;
  },
  setActive: function setActive(newConfiguration) {
    _activeConfigiration = newConfiguration;
  }
});

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RoxFlagRepository = function () {
  function RoxFlagRepository() {
    _classCallCheck(this, RoxFlagRepository);

    this.map = {};
  }

  _createClass(RoxFlagRepository, [{
    key: "addFlag",
    value: function addFlag(name, flag) {
      if (!flag.name) {
        flag.name = name;
      }
      this.map[name] = flag;
    }
  }, {
    key: "flagWithName",
    value: function flagWithName(name) {
      return this.map[name];
    }
  }, {
    key: "flags",
    get: function get() {
      var _this = this;

      return Object.keys(this.map).map(function (t) {
        return _this.map[t];
      });
    }
  }, {
    key: "items",
    get: function get() {
      return this.flags;
    }
  }]);

  return RoxFlagRepository;
}();

/* harmony default export */ __webpack_exports__["a"] = (new RoxFlagRepository());

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RoxConfigurationRepository = function () {
  function RoxConfigurationRepository() {
    _classCallCheck(this, RoxConfigurationRepository);

    this.map = {};
  }

  _createClass(RoxConfigurationRepository, [{
    key: "addRemoteConfiguration",
    value: function addRemoteConfiguration(name, remoteConfiguration) {
      if (!remoteConfiguration._name) {
        remoteConfiguration._name = name;
      }

      this.map[name] = remoteConfiguration;
    }
  }, {
    key: "remoteConfigurationWithName",
    value: function remoteConfigurationWithName(name) {
      return this.map[name];
    }
  }, {
    key: "remoteConfigurations",
    get: function get() {
      var _this = this;

      return Object.keys(this.map).map(function (t) {
        return _this.map[t];
      });
    }
  }, {
    key: "items",
    get: function get() {
      return this.remoteConfigurations;
    }
  }]);

  return RoxConfigurationRepository;
}();

var instance = new RoxConfigurationRepository();
/* harmony default export */ __webpack_exports__["a"] = (instance);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CustomPropertyRepository__ = __webpack_require__(8);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CustomProperties", function() { return __WEBPACK_IMPORTED_MODULE_0__CustomPropertyRepository__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ExperimentsRepository__ = __webpack_require__(9);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Experiments", function() { return __WEBPACK_IMPORTED_MODULE_1__ExperimentsRepository__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__RoxConfigurationRepository__ = __webpack_require__(6);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Configuration", function() { return __WEBPACK_IMPORTED_MODULE_2__RoxConfigurationRepository__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__RoxFlagRepository__ = __webpack_require__(5);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Flags", function() { return __WEBPACK_IMPORTED_MODULE_3__RoxFlagRepository__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__TargetGroupRepository__ = __webpack_require__(10);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "TargetGroups", function() { return __WEBPACK_IMPORTED_MODULE_4__TargetGroupRepository__["a"]; });






/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CustomPropertyRepository = function () {
  function CustomPropertyRepository() {
    _classCallCheck(this, CustomPropertyRepository);

    this.store = new Map();
  }

  _createClass(CustomPropertyRepository, [{
    key: "add",
    value: function add(property) {
      this.store.set(property.name, property);
    }
  }, {
    key: "get",
    value: function get(name) {
      return this.store.get(name);
    }
  }, {
    key: "clear",
    value: function clear() {
      this.store.clear();
    }
  }, {
    key: "items",
    get: function get() {
      return Array.from(this.store.values());
    }
  }]);

  return CustomPropertyRepository;
}();

/* harmony default export */ __webpack_exports__["a"] = (new CustomPropertyRepository());

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ExperimentsRepository = function () {
  function ExperimentsRepository() {
    _classCallCheck(this, ExperimentsRepository);

    this.map = {};
  }

  _createClass(ExperimentsRepository, [{
    key: "setExperiments",
    value: function setExperiments(experiments) {
      this.map = {};

      experiments = experiments || [];
      experiments.forEach(function (element) {
        this.map[element.identifier] = element;
      }, this);
    }
  }, {
    key: "experimentWithName",
    value: function experimentWithName(name) {
      return this.map[name];
    }
  }, {
    key: "experimentForFlag",
    value: function experimentForFlag(flag) {
      return this.experiments.find(function (e) {
        return e.flags && e.flags.some(function (f) {
          return f.name === flag.name;
        });
      });
    }
  }, {
    key: "experiments",
    get: function get() {
      var _this = this;

      return Object.keys(this.map).map(function (t) {
        return _this.map[t];
      });
    }
  }]);

  return ExperimentsRepository;
}();

var instance = new ExperimentsRepository();
/* harmony default export */ __webpack_exports__["a"] = (instance);

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TargetGroupRepository = function () {
  function TargetGroupRepository() {
    _classCallCheck(this, TargetGroupRepository);

    this.map = {};
  }

  _createClass(TargetGroupRepository, [{
    key: "addTargetGroup",
    value: function addTargetGroup(targetGroup) {
      this.map[targetGroup.identifier] = targetGroup;
    }
  }, {
    key: "setTargetGroups",
    value: function setTargetGroups(targetGroups) {
      this.map = {};

      targetGroups = targetGroups || [];
      targetGroups.forEach(function (element) {
        this.map[element.identifier] = element;
      }, this);
    }
  }, {
    key: "targetGroupWithName",
    value: function targetGroupWithName(name) {
      return this.map[name];
    }
  }, {
    key: "targetGroups",
    get: function get() {
      var _this = this;

      return Object.keys(this.map).map(function (t) {
        return _this.map[t];
      });
    }
  }]);

  return TargetGroupRepository;
}();

var instance = new TargetGroupRepository();
/* harmony default export */ __webpack_exports__["a"] = (instance);

/***/ }),
/* 11 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 12 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CustomProperty__ = __webpack_require__(23);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CustomProperty", function() { return __WEBPACK_IMPORTED_MODULE_0__CustomProperty__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__DeviceProperty__ = __webpack_require__(59);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceProperty", function() { return __WEBPACK_IMPORTED_MODULE_1__DeviceProperty__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__DeploymentConfiguration__ = __webpack_require__(60);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "DeploymentConfiguration", function() { return __WEBPACK_IMPORTED_MODULE_2__DeploymentConfiguration__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Experiment__ = __webpack_require__(61);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Experiment", function() { return __WEBPACK_IMPORTED_MODULE_3__Experiment__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Configuration__ = __webpack_require__(62);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Configuration", function() { return __WEBPACK_IMPORTED_MODULE_4__Configuration__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__TargetGroup__ = __webpack_require__(27);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "TargetGroup", function() { return __WEBPACK_IMPORTED_MODULE_5__TargetGroup__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Variant__ = __webpack_require__(65);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Variant", function() { return __WEBPACK_IMPORTED_MODULE_6__Variant__["a"]; });








/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(0);
var normalizeHeaderName = __webpack_require__(72);

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(32);
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(32);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lscache__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lscache___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lscache__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var RoxCache = function () {
  function RoxCache() {
    _classCallCheck(this, RoxCache);
  }

  _createClass(RoxCache, [{
    key: 'set',
    value: function set(key, value, ttl) {
      __WEBPACK_IMPORTED_MODULE_0_lscache___default.a.set(key, value, ttl);
    }
  }, {
    key: 'get',
    value: function get(key) {
      return __WEBPACK_IMPORTED_MODULE_0_lscache___default.a.get(key);
    }
  }]);

  return RoxCache;
}();

/* harmony default export */ __webpack_exports__["a"] = (new RoxCache());

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return freezeOptions; });
/* harmony export (immutable) */ __webpack_exports__["e"] = setDefaultFreezeOption;
/* harmony export (immutable) */ __webpack_exports__["c"] = getDefaultFreezeOption;
/* harmony export (immutable) */ __webpack_exports__["d"] = isFreezeOptionValid;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return defaultFreezeOptionForPlatform; });
var freezeOptions = {
  freezeOptionNone: 'none',
  freezeOptionUntilLaunch: 'untilLaunch'
};

var _defaultFreezeOptions = null;
function setDefaultFreezeOption(freezeOption) {
  if (isFreezeOptionValid(freezeOption)) {
    _defaultFreezeOptions = freezeOption;
  } else {
    throw new Error('Invalid freeze option: ' + freezeOption);
  }
}

function getDefaultFreezeOption() {
  return _defaultFreezeOptions;
}

function isFreezeOptionValid(freezeOption) {
  return Object.values(freezeOptions).find(function (option) {
    return option === freezeOption;
  });
}

var defaultFreezeOptionForPlatform = freezeOptions.freezeOptionUntilLaunch;

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__FlagsSetter__ = __webpack_require__(44);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "FlagsSetter", function() { return __WEBPACK_IMPORTED_MODULE_0__FlagsSetter__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ConfigurationSetter__ = __webpack_require__(46);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurationSetter", function() { return __WEBPACK_IMPORTED_MODULE_1__ConfigurationSetter__["a"]; });



/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_RoxxOperators__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_RoxLogger__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__RoxxTokenizer__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lru_cache__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lru_cache___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lru_cache__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





var defaultCache = __WEBPACK_IMPORTED_MODULE_3_lru_cache___default()();

var RoxxParser = function () {
  /**
   * A parser for Roxx expressions. 
   * Roxx expression are polish notation expressions {@link https://en.wikipedia.org/wiki/Polish_notation}
   * @class
   * @module RoxxParser
   * @param {*} cache - Optional token cache object. A default cache object is used if none specified.
   */
  function RoxxParser(cache) {
    _classCallCheck(this, RoxxParser);

    this._tokenizer = new __WEBPACK_IMPORTED_MODULE_2__RoxxTokenizer__["c" /* RoxxTokenizer */]();
    this._cache = cache || defaultCache;
  }

  /**
   * Given an operator function and stack, return an array of arguments for the operator.
   * @param {Function} operator 
   * @param {Array} stack 
   * @returns {Array} Array of arguments for operator
   * @private
   */


  _createClass(RoxxParser, [{
    key: '_argsArrayForOperator',
    value: function _argsArrayForOperator(operator, stack) {
      var argsArray = [];
      var length = operator.length;
      for (var i = 0; i < length; i++) {
        var arg = stack.pop();
        argsArray.push(arg);
      }

      return argsArray;
    }

    /**
     * Add context to specific operators after operator's args args.
     * @param {*} operator, args, context
     * @returns {Array} Args array with/without context
     */

  }, {
    key: '_modifyArgsHook',
    value: function _modifyArgsHook(_ref) {
      var operator = _ref.operator,
          args = _ref.args,
          context = _ref.context;

      if (context && __WEBPACK_IMPORTED_MODULE_0__lib_RoxxOperators__["operatorsWithContext"].includes(operator)) {
        return [].concat(_toConsumableArray(args), [context]); // insert context as a last arg
      }
      return args;
    }

    /**
     * Tokenizes and caches expr if not available in cache.
     * @param {string} expr 
     * @returns {Array} Tokenized version of expr
     */

  }, {
    key: 'compileExpression',
    value: function compileExpression(expr) {
      var tokens = this._cache.get(expr);
      if (!tokens) {
        tokens = this._tokenizer.tokenize(expr).reverse();
        this._cache.set(expr, tokens);
      }

      return tokens;
    }

    /**
     * Evaluates a Roxx expression.
     * 
     * @param {string} expr - Roxx expression string.
     * @returns {*} Result of Roxx expression evaluation.
     */

  }, {
    key: 'evaluateExpression',
    value: function evaluateExpression(expr) {
      var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var stack = [];
      var tokens = this.compileExpression(expr);

      var result = undefined;
      var length = tokens.length;
      try {
        for (var i = 0; i < length; i++) {
          var token = tokens[i];
          if (token.type == __WEBPACK_IMPORTED_MODULE_2__RoxxTokenizer__["a" /* RoxxTokenTypeRand */]) {
            stack.push(token.value);
          } else if (token.type == __WEBPACK_IMPORTED_MODULE_2__RoxxTokenizer__["b" /* RoxxTokenTypeRator */]) {
            var operator = __WEBPACK_IMPORTED_MODULE_0__lib_RoxxOperators__[token.value];
            var args = this._argsArrayForOperator(operator, stack);
            args = this._modifyArgsHook({ operator: operator, args: args, context: context });
            var value = operator.apply(this, args);
            stack.push(value);

            __WEBPACK_IMPORTED_MODULE_1__lib_RoxLogger__["a" /* default */].debug('Roxx: Evaluated ' + token.value + ' with ' + JSON.stringify(args) + ' result = ' + value);
          } else {
            stack.push(false);
            break;
          }
        }
        result = stack.pop();
      } catch (err) {
        __WEBPACK_IMPORTED_MODULE_1__lib_RoxLogger__["a" /* default */].error('Roxx exception ' + err);
        result = false;
      } finally {
        return result;
      }
    }
  }]);

  return RoxxParser;
}();

/* harmony default export */ __webpack_exports__["a"] = (RoxxParser);

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return isUndefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "now", function() { return now; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "and", function() { return and; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "or", function() { return or; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ne", function() { return ne; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eq", function() { return eq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "not", function() { return not; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ifThen", function() { return ifThen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lt", function() { return lt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lte", function() { return lte; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gt", function() { return gt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gte", function() { return gte; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "match", function() { return match; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "semverLt", function() { return semverLt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "semverLte", function() { return semverLte; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "semverGt", function() { return semverGt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "semverGte", function() { return semverGte; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "semverEq", function() { return semverEq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "semverNe", function() { return semverNe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeSeed", function() { return mergeSeed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInPercentage", function() { return isInPercentage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInPercentageRange", function() { return isInPercentageRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInTargetGroup", function() { return isInTargetGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTargetGroupPaired", function() { return isTargetGroupPaired; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "property", function() { return property; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inArray", function() { return inArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "operatorsWithContext", function() { return operatorsWithContext; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__repositories_TargetGroupRepository__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__repositories_CustomPropertyRepository__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__parsers_RoxxParser__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_md5__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_md5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_md5__);





function _versionCompare(v1, v2) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : { zeroExtend: true, lexicographical: true };

  var lexicographical = options && options.lexicographical,
      zeroExtend = options && options.zeroExtend,
      v1parts = v1.split('.'),
      v2parts = v2.split('.');

  function isValidPart(x) {
    return (lexicographical ? /[0-9A-Za-z_-]+$/ : /^\d+$/).test(x);
  }

  if (!v1parts.every(isValidPart) || !v2parts.every(isValidPart)) {
    return NaN;
  }

  if (zeroExtend) {
    while (v1parts.length < v2parts.length) {
      v1parts.push('0');
    }while (v2parts.length < v1parts.length) {
      v2parts.push('0');
    }
  }

  if (!lexicographical) {
    v1parts = v1parts.map(Number);
    v2parts = v2parts.map(Number);
  }

  for (var i = 0; i < v1parts.length; ++i) {
    if (v2parts.length == i) {
      return 1;
    }

    if (v1parts[i] == v2parts[i]) {
      continue;
    } else if (v1parts[i] > v2parts[i]) {
      return 1;
    } else {
      return -1;
    }
  }

  if (v1parts.length != v2parts.length) {
    return -1;
  }

  return 0;
}

var getBucket = function getBucket(seed) {
  var hash = __WEBPACK_IMPORTED_MODULE_3_md5___default()(seed, { asBytes: true });
  hash = (hash[0] & 0xff | (hash[1] & 0xff) << 8 | (hash[2] & 0xff) << 16 | (hash[3] & 0xff) << 24) >>> 0;

  var bucket = hash / (Math.pow(2, 32) - 1);
  return bucket;
};

var isUndefined = function isUndefined(op) {
  return op === undefined;
};
var now = function now() {
  return Date.now();
};
var and = function and(op1, op2) {
  return op1 && op2;
};
var or = function or(op1, op2) {
  return op1 || op2;
};
var ne = function ne(op1, op2) {
  return (isUndefined(op1) ? false : op1) !== (isUndefined(op2) ? false : op2);
};
var eq = function eq(op1, op2) {
  return (isUndefined(op1) ? false : op1) === (isUndefined(op2) ? false : op2);
};
var not = function not(op) {
  return !op;
};
var ifThen = function ifThen(conditionExpression, trueExpression, falseExpression) {
  return conditionExpression ? trueExpression : falseExpression;
};

var lt = function lt(op1, op2) {
  if (isUndefined(op1) || isUndefined(op2)) return false;

  if (typeof op1 !== 'number' || typeof op2 !== 'number') return false;

  return op1 < op2;
};

var lte = function lte(op1, op2) {
  if (isUndefined(op1) || isUndefined(op2)) return false;

  if (typeof op1 !== 'number' || typeof op2 !== 'number') return false;

  return op1 <= op2;
};

var gt = function gt(op1, op2) {
  if (isUndefined(op1) || isUndefined(op2)) return false;

  if (typeof op1 !== 'number' || typeof op2 !== 'number') return false;

  return op1 > op2;
};

var gte = function gte(op1, op2) {
  if (isUndefined(op1) || isUndefined(op2)) return false;

  if (typeof op1 !== 'number' || typeof op2 !== 'number') return false;

  return op1 >= op2;
};

var match = function match(op1, op2, op3) {
  var text = op1;
  var regex = new RegExp(op2, op3);

  var match = regex.exec(text);
  if (match) {
    return true;
  }

  return false;
};

var semverLt = function semverLt(op1, op2) {
  if (isUndefined(op1) || isUndefined(op2)) return false;

  if (typeof op1 !== 'string' || typeof op2 !== 'string') return false;

  return _versionCompare(op1, op2, { zeroExtend: true }) < 0;
};

var semverLte = function semverLte(op1, op2) {
  if (isUndefined(op1) || isUndefined(op2)) return false;

  if (typeof op1 !== 'string' || typeof op2 !== 'string') return false;

  return _versionCompare(op1, op2, { zeroExtend: true }) <= 0;
};

var semverGt = function semverGt(op1, op2) {
  if (isUndefined(op1) || isUndefined(op2)) return false;

  if (typeof op1 !== 'string' || typeof op2 !== 'string') return false;

  return _versionCompare(op1, op2, { zeroExtend: true }) > 0;
};

var semverGte = function semverGte(op1, op2) {
  if (isUndefined(op1) || isUndefined(op2)) return false;

  if (typeof op1 !== 'string' || typeof op2 !== 'string') return false;

  return _versionCompare(op1, op2, { zeroExtend: true }) >= 0;
};

var semverEq = function semverEq(op1, op2) {
  if (isUndefined(op1) || isUndefined(op2)) return false;

  if (typeof op1 !== 'string' || typeof op2 !== 'string') return false;

  return _versionCompare(op1, op2) == 0;
};

var semverNe = function semverNe(op1, op2) {
  if (isUndefined(op1) || isUndefined(op2)) return false;

  if (typeof op1 !== 'string' || typeof op2 !== 'string') return false;

  return _versionCompare(op1, op2) != 0;
};

var mergeSeed = function mergeSeed(seed1, seed2) {
  return seed1 + '.' + seed2;
};

var isInPercentage = function isInPercentage(percentage, seed) {
  var bucket = getBucket(seed);
  var isInPercentage = bucket <= percentage;

  return isInPercentage;
};

var isInPercentageRange = function isInPercentageRange(percentageLow, percentageHigh, seed) {
  var bucket = getBucket(seed);
  var isInPercentage = bucket >= percentageLow && bucket <= percentageHigh;

  return isInPercentage;
};

var isInTargetGroup = function isInTargetGroup(targetGroup) {
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var tg = __WEBPACK_IMPORTED_MODULE_0__repositories_TargetGroupRepository__["a" /* default */].targetGroupWithName(targetGroup);
  if (tg) {
    return new __WEBPACK_IMPORTED_MODULE_2__parsers_RoxxParser__["a" /* default */]().evaluateExpression(tg.condition, context);
  } else {
    return false;
  }
};

var isTargetGroupPaired = function isTargetGroupPaired() {
  return false;
};

var property = function property(propName) {
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var prop = __WEBPACK_IMPORTED_MODULE_1__repositories_CustomPropertyRepository__["a" /* default */].get(propName);
  if (!prop) {
    return undefined;
  } else {
    return prop.getValue(context);
  }
};

var inArray = function inArray(target, list) {
  return list.includes(target);
};

var operatorsWithContext = [isInTargetGroup, property];

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

(function(){
  var crypt = __webpack_require__(47),
      utf8 = __webpack_require__(21).utf8,
      isBuffer = __webpack_require__(22),
      bin = __webpack_require__(21).bin,

  // The core
  md5 = function (message, options) {
    // Convert to byte array
    if (message.constructor == String)
      if (options && options.encoding === 'binary')
        message = bin.stringToBytes(message);
      else
        message = utf8.stringToBytes(message);
    else if (isBuffer(message))
      message = Array.prototype.slice.call(message, 0);
    else if (!Array.isArray(message))
      message = message.toString();
    // else, assume byte array already

    var m = crypt.bytesToWords(message),
        l = message.length * 8,
        a =  1732584193,
        b = -271733879,
        c = -1732584194,
        d =  271733878;

    // Swap endian
    for (var i = 0; i < m.length; i++) {
      m[i] = ((m[i] <<  8) | (m[i] >>> 24)) & 0x00FF00FF |
             ((m[i] << 24) | (m[i] >>>  8)) & 0xFF00FF00;
    }

    // Padding
    m[l >>> 5] |= 0x80 << (l % 32);
    m[(((l + 64) >>> 9) << 4) + 14] = l;

    // Method shortcuts
    var FF = md5._ff,
        GG = md5._gg,
        HH = md5._hh,
        II = md5._ii;

    for (var i = 0; i < m.length; i += 16) {

      var aa = a,
          bb = b,
          cc = c,
          dd = d;

      a = FF(a, b, c, d, m[i+ 0],  7, -680876936);
      d = FF(d, a, b, c, m[i+ 1], 12, -389564586);
      c = FF(c, d, a, b, m[i+ 2], 17,  606105819);
      b = FF(b, c, d, a, m[i+ 3], 22, -1044525330);
      a = FF(a, b, c, d, m[i+ 4],  7, -176418897);
      d = FF(d, a, b, c, m[i+ 5], 12,  1200080426);
      c = FF(c, d, a, b, m[i+ 6], 17, -1473231341);
      b = FF(b, c, d, a, m[i+ 7], 22, -45705983);
      a = FF(a, b, c, d, m[i+ 8],  7,  1770035416);
      d = FF(d, a, b, c, m[i+ 9], 12, -1958414417);
      c = FF(c, d, a, b, m[i+10], 17, -42063);
      b = FF(b, c, d, a, m[i+11], 22, -1990404162);
      a = FF(a, b, c, d, m[i+12],  7,  1804603682);
      d = FF(d, a, b, c, m[i+13], 12, -40341101);
      c = FF(c, d, a, b, m[i+14], 17, -1502002290);
      b = FF(b, c, d, a, m[i+15], 22,  1236535329);

      a = GG(a, b, c, d, m[i+ 1],  5, -165796510);
      d = GG(d, a, b, c, m[i+ 6],  9, -1069501632);
      c = GG(c, d, a, b, m[i+11], 14,  643717713);
      b = GG(b, c, d, a, m[i+ 0], 20, -373897302);
      a = GG(a, b, c, d, m[i+ 5],  5, -701558691);
      d = GG(d, a, b, c, m[i+10],  9,  38016083);
      c = GG(c, d, a, b, m[i+15], 14, -660478335);
      b = GG(b, c, d, a, m[i+ 4], 20, -405537848);
      a = GG(a, b, c, d, m[i+ 9],  5,  568446438);
      d = GG(d, a, b, c, m[i+14],  9, -1019803690);
      c = GG(c, d, a, b, m[i+ 3], 14, -187363961);
      b = GG(b, c, d, a, m[i+ 8], 20,  1163531501);
      a = GG(a, b, c, d, m[i+13],  5, -1444681467);
      d = GG(d, a, b, c, m[i+ 2],  9, -51403784);
      c = GG(c, d, a, b, m[i+ 7], 14,  1735328473);
      b = GG(b, c, d, a, m[i+12], 20, -1926607734);

      a = HH(a, b, c, d, m[i+ 5],  4, -378558);
      d = HH(d, a, b, c, m[i+ 8], 11, -2022574463);
      c = HH(c, d, a, b, m[i+11], 16,  1839030562);
      b = HH(b, c, d, a, m[i+14], 23, -35309556);
      a = HH(a, b, c, d, m[i+ 1],  4, -1530992060);
      d = HH(d, a, b, c, m[i+ 4], 11,  1272893353);
      c = HH(c, d, a, b, m[i+ 7], 16, -155497632);
      b = HH(b, c, d, a, m[i+10], 23, -1094730640);
      a = HH(a, b, c, d, m[i+13],  4,  681279174);
      d = HH(d, a, b, c, m[i+ 0], 11, -358537222);
      c = HH(c, d, a, b, m[i+ 3], 16, -722521979);
      b = HH(b, c, d, a, m[i+ 6], 23,  76029189);
      a = HH(a, b, c, d, m[i+ 9],  4, -640364487);
      d = HH(d, a, b, c, m[i+12], 11, -421815835);
      c = HH(c, d, a, b, m[i+15], 16,  530742520);
      b = HH(b, c, d, a, m[i+ 2], 23, -995338651);

      a = II(a, b, c, d, m[i+ 0],  6, -198630844);
      d = II(d, a, b, c, m[i+ 7], 10,  1126891415);
      c = II(c, d, a, b, m[i+14], 15, -1416354905);
      b = II(b, c, d, a, m[i+ 5], 21, -57434055);
      a = II(a, b, c, d, m[i+12],  6,  1700485571);
      d = II(d, a, b, c, m[i+ 3], 10, -1894986606);
      c = II(c, d, a, b, m[i+10], 15, -1051523);
      b = II(b, c, d, a, m[i+ 1], 21, -2054922799);
      a = II(a, b, c, d, m[i+ 8],  6,  1873313359);
      d = II(d, a, b, c, m[i+15], 10, -30611744);
      c = II(c, d, a, b, m[i+ 6], 15, -1560198380);
      b = II(b, c, d, a, m[i+13], 21,  1309151649);
      a = II(a, b, c, d, m[i+ 4],  6, -145523070);
      d = II(d, a, b, c, m[i+11], 10, -1120210379);
      c = II(c, d, a, b, m[i+ 2], 15,  718787259);
      b = II(b, c, d, a, m[i+ 9], 21, -343485551);

      a = (a + aa) >>> 0;
      b = (b + bb) >>> 0;
      c = (c + cc) >>> 0;
      d = (d + dd) >>> 0;
    }

    return crypt.endian([a, b, c, d]);
  };

  // Auxiliary functions
  md5._ff  = function (a, b, c, d, x, s, t) {
    var n = a + (b & c | ~b & d) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };
  md5._gg  = function (a, b, c, d, x, s, t) {
    var n = a + (b & d | c & ~d) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };
  md5._hh  = function (a, b, c, d, x, s, t) {
    var n = a + (b ^ c ^ d) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };
  md5._ii  = function (a, b, c, d, x, s, t) {
    var n = a + (c ^ (b | ~d)) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };

  // Package private blocksize
  md5._blocksize = 16;
  md5._digestsize = 16;

  module.exports = function (message, options) {
    if (message === undefined || message === null)
      throw new Error('Illegal argument ' + message);

    var digestbytes = crypt.wordsToBytes(md5(message, options));
    return options && options.asBytes ? digestbytes :
        options && options.asString ? bin.bytesToString(digestbytes) :
        crypt.bytesToHex(digestbytes);
  };

})();


/***/ }),
/* 21 */
/***/ (function(module, exports) {

var charenc = {
  // UTF-8 encoding
  utf8: {
    // Convert a string to a byte array
    stringToBytes: function(str) {
      return charenc.bin.stringToBytes(unescape(encodeURIComponent(str)));
    },

    // Convert a byte array to a string
    bytesToString: function(bytes) {
      return decodeURIComponent(escape(charenc.bin.bytesToString(bytes)));
    }
  },

  // Binary encoding
  bin: {
    // Convert a string to a byte array
    stringToBytes: function(str) {
      for (var bytes = [], i = 0; i < str.length; i++)
        bytes.push(str.charCodeAt(i) & 0xFF);
      return bytes;
    },

    // Convert a byte array to a string
    bytesToString: function(bytes) {
      for (var str = [], i = 0; i < bytes.length; i++)
        str.push(String.fromCharCode(bytes[i]));
      return str.join('');
    }
  }
};

module.exports = charenc;


/***/ }),
/* 22 */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _validateName = function _validateName(name) {
  if (typeof name === 'undefined' || name === '') {
    throw new Error('Custom property must be initialized with a name.');
  }
};

var _validateExplicitValue = function _validateExplicitValue(type, value) {
  if (value && value.constructor !== type && value.constructor !== Function) {
    throw new Error('Custom property initialized with an invalid type / value combination. (Type: ' + type + ', Value: ' + value + ')');
  }
};

var _validateDynamicValue = function _validateDynamicValue(value) {
  var argsExpected = value.length;
  if (argsExpected > 1) {
    throw new Error('Dynamic value of a custom property should be a function with maximum 1 argument');
  }
};

var CustomProperty = function () {
  function CustomProperty(name, type, value) {
    _classCallCheck(this, CustomProperty);

    _validateName(name);
    this._name = name;
    if (typeof value === 'function') {
      _validateDynamicValue(value);
      this._value = value;
    } else {
      _validateExplicitValue(type, value);
      this._value = function () {
        return value;
      };
    }
    this._type = type;
  }

  _createClass(CustomProperty, [{
    key: 'getValue',
    value: function getValue() {
      var context = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return this._value(context);
    }
  }, {
    key: 'type',
    get: function get() {
      return this._type.name;
    }
  }, {
    key: 'externalType',
    get: function get() {
      return this._type.name;
    }
  }, {
    key: 'name',
    get: function get() {
      return this._name;
    }
  }, {
    key: 'value',
    get: function get() {
      return this._value();
    }
  }]);

  return CustomProperty;
}();

/* harmony default export */ __webpack_exports__["a"] = (CustomProperty);

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Actions__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Manager__ = __webpack_require__(25);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "Actions", function() { return __WEBPACK_IMPORTED_MODULE_0__Actions__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "Manager", function() { return __WEBPACK_IMPORTED_MODULE_1__Manager__; });





/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getContext", function() { return getContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setContext", function() { return setContext; });
var cloneDeep = __webpack_require__(26);
var _context = {};

function getContext() {
  return cloneDeep(_context);
}

function setContext(context) {
  _context = context;
}



/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, module) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/**
 * Adds the key-value `pair` to `map`.
 *
 * @private
 * @param {Object} map The map to modify.
 * @param {Array} pair The key-value pair to add.
 * @returns {Object} Returns `map`.
 */
function addMapEntry(map, pair) {
  // Don't return `map.set` because it's not chainable in IE 11.
  map.set(pair[0], pair[1]);
  return map;
}

/**
 * Adds `value` to `set`.
 *
 * @private
 * @param {Object} set The set to modify.
 * @param {*} value The value to add.
 * @returns {Object} Returns `set`.
 */
function addSetEntry(set, value) {
  // Don't return `set.add` because it's not chainable in IE 11.
  set.add(value);
  return set;
}

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array ? array.length : 0;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array ? array.length : 0;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    getPrototype = overArg(Object.getPrototypeOf, Object),
    objectCreate = Object.create,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols,
    nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
    nativeKeys = overArg(Object.keys, Object);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView'),
    Map = getNative(root, 'Map'),
    Promise = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap'),
    nativeCreate = getNative(Object, 'create');

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  this.__data__ = new ListCache(entries);
}

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  return this.__data__['delete'](key);
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var cache = this.__data__;
  if (cache instanceof ListCache) {
    var pairs = cache.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      return this;
    }
    cache = this.__data__ = new MapCache(pairs);
  }
  cache.set(key, value);
  return this;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  // Safari 9 makes `arguments.length` enumerable in strict mode.
  var result = (isArray(value) || isArguments(value))
    ? baseTimes(value.length, String)
    : [];

  var length = result.length,
      skipIndexes = !!length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    object[key] = value;
  }
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @param {boolean} [isFull] Specify a clone including symbols.
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, isDeep, isFull, customizer, key, object, stack) {
  var result;
  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      if (isHostObject(value)) {
        return object ? value : {};
      }
      result = initCloneObject(isFunc ? {} : value);
      if (!isDeep) {
        return copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, baseClone, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (!isArr) {
    var props = isFull ? getAllKeys(value) : keys(value);
  }
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, isDeep, isFull, customizer, key, value, stack));
  });
  return result;
}

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} prototype The object to inherit from.
 * @returns {Object} Returns the new object.
 */
function baseCreate(proto) {
  return isObject(proto) ? objectCreate(proto) : {};
}

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

/**
 * The base implementation of `getTag`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  return objectToString.call(value);
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var result = new buffer.constructor(buffer.length);
  buffer.copy(result);
  return result;
}

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

/**
 * Creates a clone of `map`.
 *
 * @private
 * @param {Object} map The map to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned map.
 */
function cloneMap(map, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(mapToArray(map), true) : mapToArray(map);
  return arrayReduce(array, addMapEntry, new map.constructor);
}

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

/**
 * Creates a clone of `set`.
 *
 * @private
 * @param {Object} set The set to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned set.
 */
function cloneSet(set, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(setToArray(set), true) : setToArray(set);
  return arrayReduce(array, addSetEntry, new set.constructor);
}

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    assignValue(object, key, newValue === undefined ? source[key] : newValue);
  }
  return object;
}

/**
 * Copies own symbol properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Creates an array of the own enumerable symbol properties of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray;

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11,
// for data views in Edge < 14, and promises in Node.js.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = objectToString.call(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : undefined;

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, cloneFunc, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return cloneMap(object, isDeep, cloneFunc);

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return cloneSet(object, isDeep, cloneFunc);

    case symbolTag:
      return cloneSymbol(object);
  }
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */
function cloneDeep(value) {
  return baseClone(value, true, true);
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = cloneDeep;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12), __webpack_require__(64)(module)))

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TargetGroup = function TargetGroup(identifier, name, seed, condition) {
  _classCallCheck(this, TargetGroup);

  this.identifier = identifier;
  this.name = name;
  this.seed = seed;
  this.condition = condition;
};

/* harmony default export */ __webpack_exports__["a"] = (TargetGroup);

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = invokeFlagImpression;
/* harmony export (immutable) */ __webpack_exports__["b"] = setHandler;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__repositories_ExperimentsRepository__ = __webpack_require__(9);


var flagImpressionHandler = null;

function invokeFlagImpression(value, flag, context) {
  if (typeof flagImpressionHandler !== 'function') return;

  var experiment = __WEBPACK_IMPORTED_MODULE_0__repositories_ExperimentsRepository__["a" /* default */].experimentForFlag(flag);
  flagImpressionHandler({ name: flag.name, value: value }, experiment, context);
}

function setHandler(handler) {
  flagImpressionHandler = handler;
}

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

var terms = {
  REMOTE_CONFIG_NAME: 'name',
  REMOTE_CONFIG_TYPE: 'type',
  REMOTE_CONFIG_CONDITIONS: 'conditions'
};

var validateConfig = function validateConfig(i) {
  return i[terms.REMOTE_CONFIG_NAME] && i[terms.REMOTE_CONFIG_TYPE] && typeof i[terms.REMOTE_CONFIG_CONDITIONS] !== 'undefined';
};

/* harmony default export */ __webpack_exports__["a"] = ({
  parse: function parse() {
    var json = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    return json.filter(validateConfig);
  } });

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ConfigurationFetcher__ = __webpack_require__(67);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurationFetcher", function() { return __WEBPACK_IMPORTED_MODULE_0__ConfigurationFetcher__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__RuntimeRegistry__ = __webpack_require__(38);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "RuntimeRegistry", function() { return __WEBPACK_IMPORTED_MODULE_1__RuntimeRegistry__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ClassRegister__ = __webpack_require__(94);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ClassRegister", function() { return __WEBPACK_IMPORTED_MODULE_2__ClassRegister__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__DeviceProperties__ = __webpack_require__(95);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceProperties", function() { return __WEBPACK_IMPORTED_MODULE_3__DeviceProperties__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__RoxLogger__ = __webpack_require__(2);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "RoxLogger", function() { return __WEBPACK_IMPORTED_MODULE_4__RoxLogger__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Client__ = __webpack_require__(99);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "createRoxClient", function() { return __WEBPACK_IMPORTED_MODULE_5__Client__["a"]; });







/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var settle = __webpack_require__(73);
var buildURL = __webpack_require__(75);
var parseHeaders = __webpack_require__(76);
var isURLSameOrigin = __webpack_require__(77);
var createError = __webpack_require__(33);
var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(78);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if ("production" !== 'test' &&
        typeof window !== 'undefined' &&
        window.XDomainRequest && !('withCredentials' in request) &&
        !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request[loadEvent] = function handleLoad() {
      if (!request || (request.readyState !== 4 && !xDomain)) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/axios/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(79);

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
          cookies.read(config.xsrfCookieName) :
          undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(74);

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty;

var hexTable = (function () {
    var array = [];
    for (var i = 0; i < 256; ++i) {
        array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
    }

    return array;
}());

var compactQueue = function compactQueue(queue) {
    var obj;

    while (queue.length) {
        var item = queue.pop();
        obj = item.obj[item.prop];

        if (Array.isArray(obj)) {
            var compacted = [];

            for (var j = 0; j < obj.length; ++j) {
                if (typeof obj[j] !== 'undefined') {
                    compacted.push(obj[j]);
                }
            }

            item.obj[item.prop] = compacted;
        }
    }

    return obj;
};

exports.arrayToObject = function arrayToObject(source, options) {
    var obj = options && options.plainObjects ? Object.create(null) : {};
    for (var i = 0; i < source.length; ++i) {
        if (typeof source[i] !== 'undefined') {
            obj[i] = source[i];
        }
    }

    return obj;
};

exports.merge = function merge(target, source, options) {
    if (!source) {
        return target;
    }

    if (typeof source !== 'object') {
        if (Array.isArray(target)) {
            target.push(source);
        } else if (typeof target === 'object') {
            if (options.plainObjects || options.allowPrototypes || !has.call(Object.prototype, source)) {
                target[source] = true;
            }
        } else {
            return [target, source];
        }

        return target;
    }

    if (typeof target !== 'object') {
        return [target].concat(source);
    }

    var mergeTarget = target;
    if (Array.isArray(target) && !Array.isArray(source)) {
        mergeTarget = exports.arrayToObject(target, options);
    }

    if (Array.isArray(target) && Array.isArray(source)) {
        source.forEach(function (item, i) {
            if (has.call(target, i)) {
                if (target[i] && typeof target[i] === 'object') {
                    target[i] = exports.merge(target[i], item, options);
                } else {
                    target.push(item);
                }
            } else {
                target[i] = item;
            }
        });
        return target;
    }

    return Object.keys(source).reduce(function (acc, key) {
        var value = source[key];

        if (has.call(acc, key)) {
            acc[key] = exports.merge(acc[key], value, options);
        } else {
            acc[key] = value;
        }
        return acc;
    }, mergeTarget);
};

exports.assign = function assignSingleSource(target, source) {
    return Object.keys(source).reduce(function (acc, key) {
        acc[key] = source[key];
        return acc;
    }, target);
};

exports.decode = function (str) {
    try {
        return decodeURIComponent(str.replace(/\+/g, ' '));
    } catch (e) {
        return str;
    }
};

exports.encode = function encode(str) {
    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
    // It has been adapted here for stricter adherence to RFC 3986
    if (str.length === 0) {
        return str;
    }

    var string = typeof str === 'string' ? str : String(str);

    var out = '';
    for (var i = 0; i < string.length; ++i) {
        var c = string.charCodeAt(i);

        if (
            c === 0x2D // -
            || c === 0x2E // .
            || c === 0x5F // _
            || c === 0x7E // ~
            || (c >= 0x30 && c <= 0x39) // 0-9
            || (c >= 0x41 && c <= 0x5A) // a-z
            || (c >= 0x61 && c <= 0x7A) // A-Z
        ) {
            out += string.charAt(i);
            continue;
        }

        if (c < 0x80) {
            out = out + hexTable[c];
            continue;
        }

        if (c < 0x800) {
            out = out + (hexTable[0xC0 | (c >> 6)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        if (c < 0xD800 || c >= 0xE000) {
            out = out + (hexTable[0xE0 | (c >> 12)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        i += 1;
        c = 0x10000 + (((c & 0x3FF) << 10) | (string.charCodeAt(i) & 0x3FF));
        out += hexTable[0xF0 | (c >> 18)]
            + hexTable[0x80 | ((c >> 12) & 0x3F)]
            + hexTable[0x80 | ((c >> 6) & 0x3F)]
            + hexTable[0x80 | (c & 0x3F)];
    }

    return out;
};

exports.compact = function compact(value) {
    var queue = [{ obj: { o: value }, prop: 'o' }];
    var refs = [];

    for (var i = 0; i < queue.length; ++i) {
        var item = queue[i];
        var obj = item.obj[item.prop];

        var keys = Object.keys(obj);
        for (var j = 0; j < keys.length; ++j) {
            var key = keys[j];
            var val = obj[key];
            if (typeof val === 'object' && val !== null && refs.indexOf(val) === -1) {
                queue.push({ obj: obj, prop: key });
                refs.push(val);
            }
        }
    }

    return compactQueue(queue);
};

exports.isRegExp = function isRegExp(obj) {
    return Object.prototype.toString.call(obj) === '[object RegExp]';
};

exports.isBuffer = function isBuffer(obj) {
    if (obj === null || typeof obj === 'undefined') {
        return false;
    }

    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var replace = String.prototype.replace;
var percentTwenties = /%20/g;

module.exports = {
    'default': 'RFC3986',
    formatters: {
        RFC1738: function (value) {
            return replace.call(value, percentTwenties, '+');
        },
        RFC3986: function (value) {
            return value;
        }
    },
    RFC1738: 'RFC1738',
    RFC3986: 'RFC3986'
};


/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__repositories_RoxConfigurationRepository__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__repositories_RoxFlagRepository__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__repositories_CustomPropertyRepository__ = __webpack_require__(8);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





var RoxRuntimeRegistry = function () {
  function RoxRuntimeRegistry() {
    _classCallCheck(this, RoxRuntimeRegistry);
  }

  _createClass(RoxRuntimeRegistry, [{
    key: 'customProperties',
    get: function get() {
      var cp = [];
      __WEBPACK_IMPORTED_MODULE_2__repositories_CustomPropertyRepository__["a" /* default */].items.forEach(function (customProperties) {
        cp.push({
          name: customProperties.name,
          type: customProperties.type,
          externalType: customProperties.externalType
        });
      });
      return cp;
    }
  }, {
    key: 'featureFlags',
    get: function get() {
      var featureFlags = [];
      __WEBPACK_IMPORTED_MODULE_1__repositories_RoxFlagRepository__["a" /* default */].items.forEach(function (flag) {
        featureFlags.push({
          name: flag.name,
          defaultValue: flag.defaultValue,
          options: flag._options
        });
      });
      return featureFlags;
    }
  }, {
    key: 'remoteConfiguration',
    get: function get() {
      var remoteConfigurations = [];
      __WEBPACK_IMPORTED_MODULE_0__repositories_RoxConfigurationRepository__["a" /* default */].items.forEach(function (remoteConfiguration) {
        remoteConfigurations.push({
          name: remoteConfiguration.name,
          defaultValue: remoteConfiguration.defaultValue,
          type: remoteConfiguration.type,
          externalType: remoteConfiguration.externalType
        });
      });
      return remoteConfigurations;
    }
  }]);

  return RoxRuntimeRegistry;
}();

/* harmony default export */ __webpack_exports__["a"] = (RoxRuntimeRegistry);

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rox_base__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__FreezeOptions__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Overrider__ = __webpack_require__(40);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


var BaseVariant = __WEBPACK_IMPORTED_MODULE_0_rox_base__["a" /* default */].Entities.Variant;
var RoxxParser = __WEBPACK_IMPORTED_MODULE_0_rox_base__["a" /* default */].Parsers.RoxxParser;



var parser = new RoxxParser();

var RoxVariantBrowser = function (_BaseVariant) {
  _inherits(RoxVariantBrowser, _BaseVariant);

  function RoxVariantBrowser(defaultValue, options) {
    var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
        freeze = _ref.freeze;

    var name = arguments[3];

    _classCallCheck(this, RoxVariantBrowser);

    var _this = _possibleConstructorReturn(this, (RoxVariantBrowser.__proto__ || Object.getPrototypeOf(RoxVariantBrowser)).call(this, defaultValue, options, name));

    if (freeze && !Object(__WEBPACK_IMPORTED_MODULE_1__FreezeOptions__["d" /* isFreezeOptionValid */])(freeze)) {
      throw new Error('Freeze option is invalid ' + freeze);
    }
    _this._localFreeze = freeze;
    return _this;
  }

  _createClass(RoxVariantBrowser, [{
    key: 'unfreeze',
    value: function unfreeze() {
      this._frozen = false;
    }
  }, {
    key: 'getValue',
    value: function getValue(dontInvokeFlagImpression) {
      var overridenValue = this.overridenValue;
      if (overridenValue) {
        return overridenValue;
      }
      var value = this.activeValue;
      dontInvokeFlagImpression || this._flagImpression(value);
      return value;
    }
  }, {
    key: 'peek',
    value: function peek() {
      return this.getValue(true);
    }
  }, {
    key: 'activeValue',
    get: function get() {
      if (this._freeze === __WEBPACK_IMPORTED_MODULE_1__FreezeOptions__["b" /* freezeOptions */].freezeOptionNone) {
        if (this.condition) {
          this.value = parser.evaluateExpression(this.condition);
        }
        return this._value;
      }

      if (!this._frozen) {
        if (this.condition) {
          this.value = parser.evaluateExpression(this.condition);
        }
        this._frozen = true;
      }
      return this._value;
    }
  }, {
    key: 'value',
    set: function set(newValue) {
      if (this._frozen) return;

      if (this._type !== (typeof newValue === 'undefined' ? 'undefined' : _typeof(newValue)) || this._options.indexOf(newValue) === -1 || newValue === undefined) {
        this._value = this._defaultValue;
        return;
      }

      this._value = newValue;
    }
  }, {
    key: '_freeze',
    get: function get() {
      return this._localFreeze || Object(__WEBPACK_IMPORTED_MODULE_1__FreezeOptions__["c" /* getDefaultFreezeOption */])() || __WEBPACK_IMPORTED_MODULE_1__FreezeOptions__["a" /* defaultFreezeOptionForPlatform */];
    }
  }, {
    key: 'overrider',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_2__Overrider__;
    }
  }]);

  return RoxVariantBrowser;
}(BaseVariant);

/* harmony default export */ __webpack_exports__["a"] = (RoxVariantBrowser);

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["hasOverride"] = hasOverride;
/* harmony export (immutable) */ __webpack_exports__["getOverride"] = getOverride;
/* harmony export (immutable) */ __webpack_exports__["setOverride"] = setOverride;
/* harmony export (immutable) */ __webpack_exports__["clearOverride"] = clearOverride;
/* harmony export (immutable) */ __webpack_exports__["clearAllOverrides"] = clearAllOverrides;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__RoxCache__ = __webpack_require__(15);


var OVERRIDE_CACHE_KEY = 'roxOverrideValues';

var cache = __WEBPACK_IMPORTED_MODULE_0__RoxCache__["a" /* default */].get(OVERRIDE_CACHE_KEY);
if (!cache) {
  cache = {};
} else {
  cache = JSON.parse(cache);
}

function writeCache(cache) {
  __WEBPACK_IMPORTED_MODULE_0__RoxCache__["a" /* default */].set(OVERRIDE_CACHE_KEY, JSON.stringify(cache));
}

function hasOverride() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

  if (typeof name === 'undefined') return false;
  return typeof cache[name] !== 'undefined';
}

function getOverride() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

  if (!name) throw new Error('Missing name');
  return cache[name];
}

function setOverride(name, value) {
  if (!name) throw new Error('Missing name');
  cache[name] = value;
  writeCache(cache);
}

function clearOverride(name) {
  if (!name) throw new Error('Missing name');
  cache[name] = undefined;
  delete cache[name];
  writeCache(cache);
}

function clearAllOverrides() {
  cache = {};
  writeCache(cache);
}

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_Rox__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_RemoteConfiguration__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_Variant__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_Flag__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_DebuggerUI__ = __webpack_require__(108);






__WEBPACK_IMPORTED_MODULE_0__lib_Rox__["a" /* default */].Configuration = __WEBPACK_IMPORTED_MODULE_1__lib_RemoteConfiguration__["a" /* default */];
__WEBPACK_IMPORTED_MODULE_0__lib_Rox__["a" /* default */].Variant = __WEBPACK_IMPORTED_MODULE_2__lib_Variant__["a" /* default */];
__WEBPACK_IMPORTED_MODULE_0__lib_Rox__["a" /* default */].Flag = __WEBPACK_IMPORTED_MODULE_3__lib_Flag__["a" /* default */];
__WEBPACK_IMPORTED_MODULE_0__lib_Rox__["a" /* default */].showOverrides = __WEBPACK_IMPORTED_MODULE_4__lib_DebuggerUI__["a" /* open */];

/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__lib_Rox__["a" /* default */]);

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__RoxClient__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__FreezeOptions__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rox_base__ = __webpack_require__(1);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var RoxLogger = __WEBPACK_IMPORTED_MODULE_2_rox_base__["a" /* default */].RoxLogger,
    configuration = __WEBPACK_IMPORTED_MODULE_2_rox_base__["a" /* default */].Config;

var Rox = function () {
  function Rox() {
    _classCallCheck(this, Rox);
  }

  _createClass(Rox, [{
    key: 'setup',

    /**
     * Initiate connection with ROX servers for the application identified by the application key. The registered containers will be synced and Rox entities will get the appropriate values.
     * @param {String} appKey application key as appears in ROX dashboard
     * @param {Object} options optional configuration object
     */
    value: function setup(appKey) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      RoxLogger.setVerboseMode(options.debugLevel);
      if (options.configuration) {
        configuration.setActive(options.configuration);
      }
      if (options.freeze) {
        Object(__WEBPACK_IMPORTED_MODULE_1__FreezeOptions__["e" /* setDefaultFreezeOption */])(options.freeze);
      }
      __WEBPACK_IMPORTED_MODULE_0__RoxClient__["a" /* default */].setKey(appKey);

      __WEBPACK_IMPORTED_MODULE_0__RoxClient__["a" /* default */].setup(options).then(function () {
        return __WEBPACK_IMPORTED_MODULE_0__RoxClient__["a" /* default */].fetchWithCacheAndProceed();
      });
    }
  }, {
    key: 'fetch',
    value: function fetch() {
      __WEBPACK_IMPORTED_MODULE_0__RoxClient__["a" /* default */] && __WEBPACK_IMPORTED_MODULE_0__RoxClient__["a" /* default */].fetch();
    }
  }, {
    key: 'setStringCustomProperty',
    value: function setStringCustomProperty(key, value) {
      __WEBPACK_IMPORTED_MODULE_0__RoxClient__["a" /* default */].setCustomProperty(key, String, value);
    }
  }, {
    key: 'setNumberCustomProperty',
    value: function setNumberCustomProperty(key, value) {
      __WEBPACK_IMPORTED_MODULE_0__RoxClient__["a" /* default */].setCustomProperty(key, Number, value);
    }
  }, {
    key: 'setBooleanCustomProperty',
    value: function setBooleanCustomProperty(key, value) {
      __WEBPACK_IMPORTED_MODULE_0__RoxClient__["a" /* default */].setCustomProperty(key, Boolean, value);
    }

    /**
     * Register a container of Rox entities by specifiying a namespace.
     * @param {String} name Container name
     * @param {Object} container Object literal whose properties are Rox entities
     */

  }, {
    key: 'register',
    value: function register(name, container) {
      __WEBPACK_IMPORTED_MODULE_0__RoxClient__["a" /* default */].register(name, container);
    }
  }, {
    key: 'unfreeze',
    value: function unfreeze(namespace) {
      __WEBPACK_IMPORTED_MODULE_0__RoxClient__["a" /* default */].unfreeze(namespace);
    }
  }]);

  return Rox;
}();

var instance = new Rox();
/* harmony default export */ __webpack_exports__["a"] = (instance);

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rox_base__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__DeviceProperties__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__DefaultSetupOptions__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__DefaultProperties__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__RoxCache__ = __webpack_require__(15);






var createRoxClient = __WEBPACK_IMPORTED_MODULE_0_rox_base__["a" /* default */].createRoxClient;


/* harmony default export */ __webpack_exports__["a"] = (createRoxClient({
  DeviceProperties: __WEBPACK_IMPORTED_MODULE_1__DeviceProperties__["a" /* default */],
  getDefaultCustomProperties: __WEBPACK_IMPORTED_MODULE_3__DefaultProperties__["a" /* getDefaultCustomProperties */],
  DefaultSetupOptions: __WEBPACK_IMPORTED_MODULE_2__DefaultSetupOptions__["a" /* defaultSetupOptions */],
  cacheService: __WEBPACK_IMPORTED_MODULE_4__RoxCache__["a" /* default */]
}));

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__repositories_RoxFlagRepository__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_RoxLogger__ = __webpack_require__(2);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var FlagsSetter = function () {
  function FlagsSetter() {
    _classCallCheck(this, FlagsSetter);
  }

  _createClass(FlagsSetter, [{
    key: 'prepareFlagsWithExperiments',
    value: function prepareFlagsWithExperiments(experiments) {
      __WEBPACK_IMPORTED_MODULE_1__lib_RoxLogger__["a" /* default */].debug('Set experiments ' + JSON.stringify(experiments));
      experiments = experiments || [];
      experiments.forEach(function (experiment) {
        if (!experiment) {
          return;
        }

        experiment.flags.forEach(function (flag) {

          if (!flag) {
            return;
          }

          var flagObject = __WEBPACK_IMPORTED_MODULE_0__repositories_RoxFlagRepository__["a" /* default */].flagWithName(flag.name);
          if (flagObject) {
            flagObject.condition = experiment.deploymentConfiguration.condition;
          }
        });
      }, this);
    }
  }]);

  return FlagsSetter;
}();

/* harmony default export */ __webpack_exports__["a"] = (FlagsSetter);

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
* loglevel - https://github.com/pimterry/loglevel
*
* Copyright (c) 2013 Tim Perry
* Licensed under the MIT license.
*/
(function (root, definition) {
    "use strict";
    if (true) {
        !(__WEBPACK_AMD_DEFINE_FACTORY__ = (definition),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof module === 'object' && module.exports) {
        module.exports = definition();
    } else {
        root.log = definition();
    }
}(this, function () {
    "use strict";

    // Slightly dubious tricks to cut down minimized file size
    var noop = function() {};
    var undefinedType = "undefined";

    var logMethods = [
        "trace",
        "debug",
        "info",
        "warn",
        "error"
    ];

    // Cross-browser bind equivalent that works at least back to IE6
    function bindMethod(obj, methodName) {
        var method = obj[methodName];
        if (typeof method.bind === 'function') {
            return method.bind(obj);
        } else {
            try {
                return Function.prototype.bind.call(method, obj);
            } catch (e) {
                // Missing bind shim or IE8 + Modernizr, fallback to wrapping
                return function() {
                    return Function.prototype.apply.apply(method, [obj, arguments]);
                };
            }
        }
    }

    // Build the best logging method possible for this env
    // Wherever possible we want to bind, not wrap, to preserve stack traces
    function realMethod(methodName) {
        if (methodName === 'debug') {
            methodName = 'log';
        }

        if (typeof console === undefinedType) {
            return false; // No method possible, for now - fixed later by enableLoggingWhenConsoleArrives
        } else if (console[methodName] !== undefined) {
            return bindMethod(console, methodName);
        } else if (console.log !== undefined) {
            return bindMethod(console, 'log');
        } else {
            return noop;
        }
    }

    // These private functions always need `this` to be set properly

    function replaceLoggingMethods(level, loggerName) {
        /*jshint validthis:true */
        for (var i = 0; i < logMethods.length; i++) {
            var methodName = logMethods[i];
            this[methodName] = (i < level) ?
                noop :
                this.methodFactory(methodName, level, loggerName);
        }

        // Define log.log as an alias for log.debug
        this.log = this.debug;
    }

    // In old IE versions, the console isn't present until you first open it.
    // We build realMethod() replacements here that regenerate logging methods
    function enableLoggingWhenConsoleArrives(methodName, level, loggerName) {
        return function () {
            if (typeof console !== undefinedType) {
                replaceLoggingMethods.call(this, level, loggerName);
                this[methodName].apply(this, arguments);
            }
        };
    }

    // By default, we use closely bound real methods wherever possible, and
    // otherwise we wait for a console to appear, and then try again.
    function defaultMethodFactory(methodName, level, loggerName) {
        /*jshint validthis:true */
        return realMethod(methodName) ||
               enableLoggingWhenConsoleArrives.apply(this, arguments);
    }

    function Logger(name, defaultLevel, factory) {
      var self = this;
      var currentLevel;
      var storageKey = "loglevel";
      if (name) {
        storageKey += ":" + name;
      }

      function persistLevelIfPossible(levelNum) {
          var levelName = (logMethods[levelNum] || 'silent').toUpperCase();

          if (typeof window === undefinedType) return;

          // Use localStorage if available
          try {
              window.localStorage[storageKey] = levelName;
              return;
          } catch (ignore) {}

          // Use session cookie as fallback
          try {
              window.document.cookie =
                encodeURIComponent(storageKey) + "=" + levelName + ";";
          } catch (ignore) {}
      }

      function getPersistedLevel() {
          var storedLevel;

          if (typeof window === undefinedType) return;

          try {
              storedLevel = window.localStorage[storageKey];
          } catch (ignore) {}

          // Fallback to cookies if local storage gives us nothing
          if (typeof storedLevel === undefinedType) {
              try {
                  var cookie = window.document.cookie;
                  var location = cookie.indexOf(
                      encodeURIComponent(storageKey) + "=");
                  if (location !== -1) {
                      storedLevel = /^([^;]+)/.exec(cookie.slice(location))[1];
                  }
              } catch (ignore) {}
          }

          // If the stored level is not valid, treat it as if nothing was stored.
          if (self.levels[storedLevel] === undefined) {
              storedLevel = undefined;
          }

          return storedLevel;
      }

      /*
       *
       * Public logger API - see https://github.com/pimterry/loglevel for details
       *
       */

      self.name = name;

      self.levels = { "TRACE": 0, "DEBUG": 1, "INFO": 2, "WARN": 3,
          "ERROR": 4, "SILENT": 5};

      self.methodFactory = factory || defaultMethodFactory;

      self.getLevel = function () {
          return currentLevel;
      };

      self.setLevel = function (level, persist) {
          if (typeof level === "string" && self.levels[level.toUpperCase()] !== undefined) {
              level = self.levels[level.toUpperCase()];
          }
          if (typeof level === "number" && level >= 0 && level <= self.levels.SILENT) {
              currentLevel = level;
              if (persist !== false) {  // defaults to true
                  persistLevelIfPossible(level);
              }
              replaceLoggingMethods.call(self, level, name);
              if (typeof console === undefinedType && level < self.levels.SILENT) {
                  return "No console available for logging";
              }
          } else {
              throw "log.setLevel() called with invalid level: " + level;
          }
      };

      self.setDefaultLevel = function (level) {
          if (!getPersistedLevel()) {
              self.setLevel(level, false);
          }
      };

      self.enableAll = function(persist) {
          self.setLevel(self.levels.TRACE, persist);
      };

      self.disableAll = function(persist) {
          self.setLevel(self.levels.SILENT, persist);
      };

      // Initialize with the right level
      var initialLevel = getPersistedLevel();
      if (initialLevel == null) {
          initialLevel = defaultLevel == null ? "WARN" : defaultLevel;
      }
      self.setLevel(initialLevel, false);
    }

    /*
     *
     * Top-level API
     *
     */

    var defaultLogger = new Logger();

    var _loggersByName = {};
    defaultLogger.getLogger = function getLogger(name) {
        if (typeof name !== "string" || name === "") {
          throw new TypeError("You must supply a name when creating a logger.");
        }

        var logger = _loggersByName[name];
        if (!logger) {
          logger = _loggersByName[name] = new Logger(
            name, defaultLogger.getLevel(), defaultLogger.methodFactory);
        }
        return logger;
    };

    // Grab the current global log variable in case of overwrite
    var _log = (typeof window !== undefinedType) ? window.log : undefined;
    defaultLogger.noConflict = function() {
        if (typeof window !== undefinedType &&
               window.log === defaultLogger) {
            window.log = _log;
        }

        return defaultLogger;
    };

    defaultLogger.getLoggers = function getLoggers() {
        return _loggersByName;
    };

    return defaultLogger;
}));


/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__repositories_RoxConfigurationRepository__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_RoxLogger__ = __webpack_require__(2);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var ConfigurationSetter = function () {
  function ConfigurationSetter() {
    _classCallCheck(this, ConfigurationSetter);
  }

  _createClass(ConfigurationSetter, [{
    key: 'prepareConfigurations',
    value: function prepareConfigurations() {
      var configFromAPI = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      __WEBPACK_IMPORTED_MODULE_1__lib_RoxLogger__["a" /* default */].debug('Set remote configurations ' + JSON.stringify(configFromAPI));
      configFromAPI.forEach(function (_ref) {
        var name = _ref.name,
            conditions = _ref.conditions;

        var configuration = __WEBPACK_IMPORTED_MODULE_0__repositories_RoxConfigurationRepository__["a" /* default */].remoteConfigurationWithName(name);
        if (!configuration) {
          return;
        }

        configuration.condition = conditions;
      }, this);
    }
  }]);

  return ConfigurationSetter;
}();

/* harmony default export */ __webpack_exports__["a"] = (ConfigurationSetter);

/***/ }),
/* 47 */
/***/ (function(module, exports) {

(function() {
  var base64map
      = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',

  crypt = {
    // Bit-wise rotation left
    rotl: function(n, b) {
      return (n << b) | (n >>> (32 - b));
    },

    // Bit-wise rotation right
    rotr: function(n, b) {
      return (n << (32 - b)) | (n >>> b);
    },

    // Swap big-endian to little-endian and vice versa
    endian: function(n) {
      // If number given, swap endian
      if (n.constructor == Number) {
        return crypt.rotl(n, 8) & 0x00FF00FF | crypt.rotl(n, 24) & 0xFF00FF00;
      }

      // Else, assume array and swap all items
      for (var i = 0; i < n.length; i++)
        n[i] = crypt.endian(n[i]);
      return n;
    },

    // Generate an array of any length of random bytes
    randomBytes: function(n) {
      for (var bytes = []; n > 0; n--)
        bytes.push(Math.floor(Math.random() * 256));
      return bytes;
    },

    // Convert a byte array to big-endian 32-bit words
    bytesToWords: function(bytes) {
      for (var words = [], i = 0, b = 0; i < bytes.length; i++, b += 8)
        words[b >>> 5] |= bytes[i] << (24 - b % 32);
      return words;
    },

    // Convert big-endian 32-bit words to a byte array
    wordsToBytes: function(words) {
      for (var bytes = [], b = 0; b < words.length * 32; b += 8)
        bytes.push((words[b >>> 5] >>> (24 - b % 32)) & 0xFF);
      return bytes;
    },

    // Convert a byte array to a hex string
    bytesToHex: function(bytes) {
      for (var hex = [], i = 0; i < bytes.length; i++) {
        hex.push((bytes[i] >>> 4).toString(16));
        hex.push((bytes[i] & 0xF).toString(16));
      }
      return hex.join('');
    },

    // Convert a hex string to a byte array
    hexToBytes: function(hex) {
      for (var bytes = [], c = 0; c < hex.length; c += 2)
        bytes.push(parseInt(hex.substr(c, 2), 16));
      return bytes;
    },

    // Convert a byte array to a base-64 string
    bytesToBase64: function(bytes) {
      for (var base64 = [], i = 0; i < bytes.length; i += 3) {
        var triplet = (bytes[i] << 16) | (bytes[i + 1] << 8) | bytes[i + 2];
        for (var j = 0; j < 4; j++)
          if (i * 8 + j * 6 <= bytes.length * 8)
            base64.push(base64map.charAt((triplet >>> 6 * (3 - j)) & 0x3F));
          else
            base64.push('=');
      }
      return base64.join('');
    },

    // Convert a base-64 string to a byte array
    base64ToBytes: function(base64) {
      // Remove non-base-64 characters
      base64 = base64.replace(/[^A-Z0-9+\/]/ig, '');

      for (var bytes = [], i = 0, imod4 = 0; i < base64.length;
          imod4 = ++i % 4) {
        if (imod4 == 0) continue;
        bytes.push(((base64map.indexOf(base64.charAt(i - 1))
            & (Math.pow(2, -2 * imod4 + 8) - 1)) << (imod4 * 2))
            | (base64map.indexOf(base64.charAt(i)) >>> (6 - imod4 * 2)));
      }
      return bytes;
    }
  };

  module.exports = crypt;
})();


/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return RoxxTokenTypeRator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoxxTokenTypeRand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return RoxxTokenizer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__StringTokenizer__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_RoxxOperators__ = __webpack_require__(19);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var operatorsList = Object.keys(__WEBPACK_IMPORTED_MODULE_1__lib_RoxxOperators__);

var RoxxEscapedQuote = '\\"';
var RoxxEscapedQuotePlaceholder = '\\RO_Q';

var RoxxStringDelimiter = '"';
var RoxxArrayStartDelimiter = '[';
var RoxxArrayEndDelimiter = ']';
var RoxxDictStartDelimiter = '{';
var RoxxDictEndDelimiter = '}';
var RoxxTokenDelimiters = '{}[]():, \t\r\n"';

/**
 * Type identifier for ope*rator* tokens
 */
var RoxxTokenTypeRator = 'operator';

/**
 * Type identifier for ope*rand* tokens
 */
var RoxxTokenTypeRand = 'operand';
/**
 * 
 */
var RoxxTokenizer = function () {
  function RoxxTokenizer() {
    _classCallCheck(this, RoxxTokenizer);

    this.tokenArray = [];
    this.arrayAccumulator = undefined;
    this.dictionaryAccumulator = undefined;
    this.dictKey = undefined;
  }

  /**
   * Converts a string token into a Roxx type object.
   * @param {string} token - The token to convert into a Roxx type.
   * @returns {object}
   */


  _createClass(RoxxTokenizer, [{
    key: '_stringToRoxx',
    value: function _stringToRoxx(token) {
      if (operatorsList.includes(token)) return { type: RoxxTokenTypeRator, value: token };
      if (token == 'true') return { type: RoxxTokenTypeRand, value: true };
      if (token == 'false') return { type: RoxxTokenTypeRand, value: false };
      if (token == 'undefined') return { type: RoxxTokenTypeRand, value: undefined };
      if (token.charAt(0) == '"' && token.charAt(token.length - 1) == '"') return { type: RoxxTokenTypeRand, value: token.substr(1, token.length - 2) };
      if (!isNaN(token)) return { type: RoxxTokenTypeRand, value: +token };

      return { type: 'UNKNOWN' };
    }

    /**
     * Pushes a token into either the arrayAccumulator or the tokenArray
     * according to context.
     * @param {*} token - the token to push 
     */

  }, {
    key: 'push',
    value: function push(token) {
      if (this.dictionaryAccumulator && !this.dictKey) {
        this.dictKey = token.value;
      } else if (this.dictionaryAccumulator && this.dictKey) {
        this.dictionaryAccumulator[this.dictKey] = token.value;
        this.dictKey = undefined;
      } else if (this.arrayAccumulator) {
        this.arrayAccumulator.push(token.value);
      } else {
        this.tokenArray.push(token);
      }
    }

    /**
     * Produces a token array from an expression string. This array is later consumed by RoxxParser
     * @see RoxxParser
     * @param {string} expr - Roxx expression to tokenize
     * @returns {Array}
     */

  }, {
    key: 'tokenize',
    value: function tokenize(expr) {
      this.tokenArray = [];
      this.arrayAccumulator = undefined;
      this.dictionaryAccumulator = undefined;

      var delimitersToUse = RoxxTokenDelimiters;

      var expression = expr.replace(RoxxEscapedQuote, RoxxEscapedQuotePlaceholder);
      var tokenizer = new __WEBPACK_IMPORTED_MODULE_0__StringTokenizer__["a" /* default */](expression, delimitersToUse, true);

      var token, prevToken;
      while (tokenizer.hasMoreTokens()) {
        prevToken = token;
        token = tokenizer.nextTokenWithDelimiters(delimitersToUse);

        switch (token) {
          case RoxxDictStartDelimiter:
            this.dictionaryAccumulator = {};
            break;
          case RoxxDictEndDelimiter:
            this.tokenArray.push({ type: RoxxTokenTypeRand, value: this.dictionaryAccumulator });
            this.dictionaryAccumulator = undefined;
            break;
          case RoxxArrayStartDelimiter:
            this.arrayAccumulator = [];
            break;
          case RoxxArrayEndDelimiter:
            this.tokenArray.push({ type: RoxxTokenTypeRand, value: this.arrayAccumulator });
            this.arrayAccumulator = undefined;
            break;
          case RoxxStringDelimiter:
            if (prevToken == RoxxStringDelimiter) {
              // if previous token was also a string delimiter it means we encounterd an emptry string.
              this.push({ type: RoxxTokenTypeRand, value: '' });
            }

            // Swap delimiters to use if needed. we do this so we can have strings with chars that are normally used as delimiters.
            delimitersToUse = delimitersToUse == RoxxStringDelimiter ? RoxxTokenDelimiters : RoxxStringDelimiter;
            break;
          default:
            if (delimitersToUse == RoxxStringDelimiter) {
              // If get a token that's not RoxxStringDelimiter while using RoxxStringDelimiter as delimiters It's the string value!
              this.push({ type: RoxxTokenTypeRand, value: token.replace(RoxxEscapedQuotePlaceholder, RoxxEscapedQuote) });
            } else if (RoxxTokenDelimiters.indexOf(token) == -1) {
              // Is this token a delimiter or something else? if it's something else convert it to a roxx type and push.
              this.push(this._stringToRoxx(token));
            }
            break;
        }
      }

      return this.tokenArray;
    }
  }]);

  return RoxxTokenizer;
}();

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StringTokenizer = function () {
  function StringTokenizer(string, delimiters, returnDelim) {
    _classCallCheck(this, StringTokenizer);

    this._string = string;
    this._delimiters = delimiters;
    this._returnDelim = returnDelim;
    this._position = 0;
  }

  _createClass(StringTokenizer, [{
    key: "countTokens",
    value: function countTokens() {
      var count = 0;
      var inToken = false;
      for (var i = this._position, length = this._string.length; i < length; i++) {
        if (this._delimiters.indexOf(this._string.charAt(i)) != -1) {
          if (this._returnDelim) count++;
          if (inToken) {
            count++;
            inToken = false;
          }
        } else {
          inToken = true;
        }
      }
      if (inToken) count++;
      return count;
    }
  }, {
    key: "hasMoreElements",
    value: function hasMoreElements() {
      return this.hasMoreTokens();
    }
  }, {
    key: "hasMoreTokens",
    value: function hasMoreTokens() {
      if (!this._delimiters) {
        return false;
      }

      var length = this._string.length;
      if (this._position < length) {
        if (this._returnDelim) return true;

        for (var i = this._position; i < length; i++) {
          if (this._delimiters.indexOf(this._string.charAt(i)) == -1) {
            return true;
          }
        }
      }
      return false;
    }
  }, {
    key: "nextElement",
    value: function nextElement() {
      return this.nextToken();
    }
  }, {
    key: "nextToken",
    value: function nextToken() {
      if (!this._delimiters) {
        return undefined;
      }

      var i = this._position;
      var length = this._string.length;

      if (i < length) {
        if (this._returnDelim) {
          if (this._delimiters.indexOf(this._string.charAt(this._position)) != -1) return this._string.charAt(this._position++);
          for (this._position++; this._position < length; this._position++) {
            if (this._delimiters.indexOf(this._string.charAt(this._position)) != -1) return this._string.substr(i, this._position - i);
          }return this._string.substr(i);
        }

        while (i < length && this._delimiters.indexOf(this._string.charAt(this._position)) != -1) {
          i++;
        }this._position = i;
        if (i < length) {
          for (this._position++; this._position < length; this._position++) {
            if (this._delimiters.indexOf(this._string.charAt(this._position)) != -1) return this._string.substr(i, this._position - i);
          }return this._string.substr(i);
        }
      }

      return undefined;
    }
  }, {
    key: "nextTokenWithDelimiters",
    value: function nextTokenWithDelimiters(delimiters) {
      this._delimiters = delimiters;
      return this.nextToken();
    }
  }]);

  return StringTokenizer;
}();

/* harmony default export */ __webpack_exports__["a"] = (StringTokenizer);

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = LRUCache

// This will be a proper iterable 'Map' in engines that support it,
// or a fakey-fake PseudoMap in older versions.
var Map = __webpack_require__(51)
var util = __webpack_require__(53)

// A linked list to keep track of recently-used-ness
var Yallist = __webpack_require__(56)

// use symbols if possible, otherwise just _props
var hasSymbol = typeof Symbol === 'function'
var makeSymbol
if (hasSymbol) {
  makeSymbol = function (key) {
    return Symbol.for(key)
  }
} else {
  makeSymbol = function (key) {
    return '_' + key
  }
}

var MAX = makeSymbol('max')
var LENGTH = makeSymbol('length')
var LENGTH_CALCULATOR = makeSymbol('lengthCalculator')
var ALLOW_STALE = makeSymbol('allowStale')
var MAX_AGE = makeSymbol('maxAge')
var DISPOSE = makeSymbol('dispose')
var NO_DISPOSE_ON_SET = makeSymbol('noDisposeOnSet')
var LRU_LIST = makeSymbol('lruList')
var CACHE = makeSymbol('cache')

function naiveLength () { return 1 }

// lruList is a yallist where the head is the youngest
// item, and the tail is the oldest.  the list contains the Hit
// objects as the entries.
// Each Hit object has a reference to its Yallist.Node.  This
// never changes.
//
// cache is a Map (or PseudoMap) that matches the keys to
// the Yallist.Node object.
function LRUCache (options) {
  if (!(this instanceof LRUCache)) {
    return new LRUCache(options)
  }

  if (typeof options === 'number') {
    options = { max: options }
  }

  if (!options) {
    options = {}
  }

  var max = this[MAX] = options.max
  // Kind of weird to have a default max of Infinity, but oh well.
  if (!max ||
      !(typeof max === 'number') ||
      max <= 0) {
    this[MAX] = Infinity
  }

  var lc = options.length || naiveLength
  if (typeof lc !== 'function') {
    lc = naiveLength
  }
  this[LENGTH_CALCULATOR] = lc

  this[ALLOW_STALE] = options.stale || false
  this[MAX_AGE] = options.maxAge || 0
  this[DISPOSE] = options.dispose
  this[NO_DISPOSE_ON_SET] = options.noDisposeOnSet || false
  this.reset()
}

// resize the cache when the max changes.
Object.defineProperty(LRUCache.prototype, 'max', {
  set: function (mL) {
    if (!mL || !(typeof mL === 'number') || mL <= 0) {
      mL = Infinity
    }
    this[MAX] = mL
    trim(this)
  },
  get: function () {
    return this[MAX]
  },
  enumerable: true
})

Object.defineProperty(LRUCache.prototype, 'allowStale', {
  set: function (allowStale) {
    this[ALLOW_STALE] = !!allowStale
  },
  get: function () {
    return this[ALLOW_STALE]
  },
  enumerable: true
})

Object.defineProperty(LRUCache.prototype, 'maxAge', {
  set: function (mA) {
    if (!mA || !(typeof mA === 'number') || mA < 0) {
      mA = 0
    }
    this[MAX_AGE] = mA
    trim(this)
  },
  get: function () {
    return this[MAX_AGE]
  },
  enumerable: true
})

// resize the cache when the lengthCalculator changes.
Object.defineProperty(LRUCache.prototype, 'lengthCalculator', {
  set: function (lC) {
    if (typeof lC !== 'function') {
      lC = naiveLength
    }
    if (lC !== this[LENGTH_CALCULATOR]) {
      this[LENGTH_CALCULATOR] = lC
      this[LENGTH] = 0
      this[LRU_LIST].forEach(function (hit) {
        hit.length = this[LENGTH_CALCULATOR](hit.value, hit.key)
        this[LENGTH] += hit.length
      }, this)
    }
    trim(this)
  },
  get: function () { return this[LENGTH_CALCULATOR] },
  enumerable: true
})

Object.defineProperty(LRUCache.prototype, 'length', {
  get: function () { return this[LENGTH] },
  enumerable: true
})

Object.defineProperty(LRUCache.prototype, 'itemCount', {
  get: function () { return this[LRU_LIST].length },
  enumerable: true
})

LRUCache.prototype.rforEach = function (fn, thisp) {
  thisp = thisp || this
  for (var walker = this[LRU_LIST].tail; walker !== null;) {
    var prev = walker.prev
    forEachStep(this, fn, walker, thisp)
    walker = prev
  }
}

function forEachStep (self, fn, node, thisp) {
  var hit = node.value
  if (isStale(self, hit)) {
    del(self, node)
    if (!self[ALLOW_STALE]) {
      hit = undefined
    }
  }
  if (hit) {
    fn.call(thisp, hit.value, hit.key, self)
  }
}

LRUCache.prototype.forEach = function (fn, thisp) {
  thisp = thisp || this
  for (var walker = this[LRU_LIST].head; walker !== null;) {
    var next = walker.next
    forEachStep(this, fn, walker, thisp)
    walker = next
  }
}

LRUCache.prototype.keys = function () {
  return this[LRU_LIST].toArray().map(function (k) {
    return k.key
  }, this)
}

LRUCache.prototype.values = function () {
  return this[LRU_LIST].toArray().map(function (k) {
    return k.value
  }, this)
}

LRUCache.prototype.reset = function () {
  if (this[DISPOSE] &&
      this[LRU_LIST] &&
      this[LRU_LIST].length) {
    this[LRU_LIST].forEach(function (hit) {
      this[DISPOSE](hit.key, hit.value)
    }, this)
  }

  this[CACHE] = new Map() // hash of items by key
  this[LRU_LIST] = new Yallist() // list of items in order of use recency
  this[LENGTH] = 0 // length of items in the list
}

LRUCache.prototype.dump = function () {
  return this[LRU_LIST].map(function (hit) {
    if (!isStale(this, hit)) {
      return {
        k: hit.key,
        v: hit.value,
        e: hit.now + (hit.maxAge || 0)
      }
    }
  }, this).toArray().filter(function (h) {
    return h
  })
}

LRUCache.prototype.dumpLru = function () {
  return this[LRU_LIST]
}

LRUCache.prototype.inspect = function (n, opts) {
  var str = 'LRUCache {'
  var extras = false

  var as = this[ALLOW_STALE]
  if (as) {
    str += '\n  allowStale: true'
    extras = true
  }

  var max = this[MAX]
  if (max && max !== Infinity) {
    if (extras) {
      str += ','
    }
    str += '\n  max: ' + util.inspect(max, opts)
    extras = true
  }

  var maxAge = this[MAX_AGE]
  if (maxAge) {
    if (extras) {
      str += ','
    }
    str += '\n  maxAge: ' + util.inspect(maxAge, opts)
    extras = true
  }

  var lc = this[LENGTH_CALCULATOR]
  if (lc && lc !== naiveLength) {
    if (extras) {
      str += ','
    }
    str += '\n  length: ' + util.inspect(this[LENGTH], opts)
    extras = true
  }

  var didFirst = false
  this[LRU_LIST].forEach(function (item) {
    if (didFirst) {
      str += ',\n  '
    } else {
      if (extras) {
        str += ',\n'
      }
      didFirst = true
      str += '\n  '
    }
    var key = util.inspect(item.key).split('\n').join('\n  ')
    var val = { value: item.value }
    if (item.maxAge !== maxAge) {
      val.maxAge = item.maxAge
    }
    if (lc !== naiveLength) {
      val.length = item.length
    }
    if (isStale(this, item)) {
      val.stale = true
    }

    val = util.inspect(val, opts).split('\n').join('\n  ')
    str += key + ' => ' + val
  })

  if (didFirst || extras) {
    str += '\n'
  }
  str += '}'

  return str
}

LRUCache.prototype.set = function (key, value, maxAge) {
  maxAge = maxAge || this[MAX_AGE]

  var now = maxAge ? Date.now() : 0
  var len = this[LENGTH_CALCULATOR](value, key)

  if (this[CACHE].has(key)) {
    if (len > this[MAX]) {
      del(this, this[CACHE].get(key))
      return false
    }

    var node = this[CACHE].get(key)
    var item = node.value

    // dispose of the old one before overwriting
    // split out into 2 ifs for better coverage tracking
    if (this[DISPOSE]) {
      if (!this[NO_DISPOSE_ON_SET]) {
        this[DISPOSE](key, item.value)
      }
    }

    item.now = now
    item.maxAge = maxAge
    item.value = value
    this[LENGTH] += len - item.length
    item.length = len
    this.get(key)
    trim(this)
    return true
  }

  var hit = new Entry(key, value, len, now, maxAge)

  // oversized objects fall out of cache automatically.
  if (hit.length > this[MAX]) {
    if (this[DISPOSE]) {
      this[DISPOSE](key, value)
    }
    return false
  }

  this[LENGTH] += hit.length
  this[LRU_LIST].unshift(hit)
  this[CACHE].set(key, this[LRU_LIST].head)
  trim(this)
  return true
}

LRUCache.prototype.has = function (key) {
  if (!this[CACHE].has(key)) return false
  var hit = this[CACHE].get(key).value
  if (isStale(this, hit)) {
    return false
  }
  return true
}

LRUCache.prototype.get = function (key) {
  return get(this, key, true)
}

LRUCache.prototype.peek = function (key) {
  return get(this, key, false)
}

LRUCache.prototype.pop = function () {
  var node = this[LRU_LIST].tail
  if (!node) return null
  del(this, node)
  return node.value
}

LRUCache.prototype.del = function (key) {
  del(this, this[CACHE].get(key))
}

LRUCache.prototype.load = function (arr) {
  // reset the cache
  this.reset()

  var now = Date.now()
  // A previous serialized cache has the most recent items first
  for (var l = arr.length - 1; l >= 0; l--) {
    var hit = arr[l]
    var expiresAt = hit.e || 0
    if (expiresAt === 0) {
      // the item was created without expiration in a non aged cache
      this.set(hit.k, hit.v)
    } else {
      var maxAge = expiresAt - now
      // dont add already expired items
      if (maxAge > 0) {
        this.set(hit.k, hit.v, maxAge)
      }
    }
  }
}

LRUCache.prototype.prune = function () {
  var self = this
  this[CACHE].forEach(function (value, key) {
    get(self, key, false)
  })
}

function get (self, key, doUse) {
  var node = self[CACHE].get(key)
  if (node) {
    var hit = node.value
    if (isStale(self, hit)) {
      del(self, node)
      if (!self[ALLOW_STALE]) hit = undefined
    } else {
      if (doUse) {
        self[LRU_LIST].unshiftNode(node)
      }
    }
    if (hit) hit = hit.value
  }
  return hit
}

function isStale (self, hit) {
  if (!hit || (!hit.maxAge && !self[MAX_AGE])) {
    return false
  }
  var stale = false
  var diff = Date.now() - hit.now
  if (hit.maxAge) {
    stale = diff > hit.maxAge
  } else {
    stale = self[MAX_AGE] && (diff > self[MAX_AGE])
  }
  return stale
}

function trim (self) {
  if (self[LENGTH] > self[MAX]) {
    for (var walker = self[LRU_LIST].tail;
         self[LENGTH] > self[MAX] && walker !== null;) {
      // We know that we're about to delete this one, and also
      // what the next least recently used key will be, so just
      // go ahead and set it now.
      var prev = walker.prev
      del(self, walker)
      walker = prev
    }
  }
}

function del (self, node) {
  if (node) {
    var hit = node.value
    if (self[DISPOSE]) {
      self[DISPOSE](hit.key, hit.value)
    }
    self[LENGTH] -= hit.length
    self[CACHE].delete(hit.key)
    self[LRU_LIST].removeNode(node)
  }
}

// classy, since V8 prefers predictable objects.
function Entry (key, value, length, now, maxAge) {
  this.key = key
  this.value = value
  this.length = length
  this.now = now
  this.maxAge = maxAge || 0
}


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {if (process.env.npm_package_name === 'pseudomap' &&
    process.env.npm_lifecycle_script === 'test')
  process.env.TEST_PSEUDOMAP = 'true'

if (typeof Map === 'function' && !process.env.TEST_PSEUDOMAP) {
  module.exports = Map
} else {
  module.exports = __webpack_require__(52)
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ }),
/* 52 */
/***/ (function(module, exports) {

var hasOwnProperty = Object.prototype.hasOwnProperty

module.exports = PseudoMap

function PseudoMap (set) {
  if (!(this instanceof PseudoMap)) // whyyyyyyy
    throw new TypeError("Constructor PseudoMap requires 'new'")

  this.clear()

  if (set) {
    if ((set instanceof PseudoMap) ||
        (typeof Map === 'function' && set instanceof Map))
      set.forEach(function (value, key) {
        this.set(key, value)
      }, this)
    else if (Array.isArray(set))
      set.forEach(function (kv) {
        this.set(kv[0], kv[1])
      }, this)
    else
      throw new TypeError('invalid argument')
  }
}

PseudoMap.prototype.forEach = function (fn, thisp) {
  thisp = thisp || this
  Object.keys(this._data).forEach(function (k) {
    if (k !== 'size')
      fn.call(thisp, this._data[k].value, this._data[k].key)
  }, this)
}

PseudoMap.prototype.has = function (k) {
  return !!find(this._data, k)
}

PseudoMap.prototype.get = function (k) {
  var res = find(this._data, k)
  return res && res.value
}

PseudoMap.prototype.set = function (k, v) {
  set(this._data, k, v)
}

PseudoMap.prototype.delete = function (k) {
  var res = find(this._data, k)
  if (res) {
    delete this._data[res._index]
    this._data.size--
  }
}

PseudoMap.prototype.clear = function () {
  var data = Object.create(null)
  data.size = 0

  Object.defineProperty(this, '_data', {
    value: data,
    enumerable: false,
    configurable: true,
    writable: false
  })
}

Object.defineProperty(PseudoMap.prototype, 'size', {
  get: function () {
    return this._data.size
  },
  set: function (n) {},
  enumerable: true,
  configurable: true
})

PseudoMap.prototype.values =
PseudoMap.prototype.keys =
PseudoMap.prototype.entries = function () {
  throw new Error('iterators are not implemented in this version')
}

// Either identical, or both NaN
function same (a, b) {
  return a === b || a !== a && b !== b
}

function Entry (k, v, i) {
  this.key = k
  this.value = v
  this._index = i
}

function find (data, k) {
  for (var i = 0, s = '_' + k, key = s;
       hasOwnProperty.call(data, key);
       key = s + i++) {
    if (same(data[key].key, k))
      return data[key]
  }
}

function set (data, k, v) {
  for (var i = 0, s = '_' + k, key = s;
       hasOwnProperty.call(data, key);
       key = s + i++) {
    if (same(data[key].key, k)) {
      data[key].value = v
      return
    }
  }
  data.size++
  data[key] = new Entry(k, v, key)
}


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  // Allow for deprecating things in the process of starting up.
  if (isUndefined(global.process)) {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  if (process.noDeprecation === true) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = __webpack_require__(54);

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = __webpack_require__(55);

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12), __webpack_require__(11)))

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}

/***/ }),
/* 55 */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = Yallist

Yallist.Node = Node
Yallist.create = Yallist

function Yallist (list) {
  var self = this
  if (!(self instanceof Yallist)) {
    self = new Yallist()
  }

  self.tail = null
  self.head = null
  self.length = 0

  if (list && typeof list.forEach === 'function') {
    list.forEach(function (item) {
      self.push(item)
    })
  } else if (arguments.length > 0) {
    for (var i = 0, l = arguments.length; i < l; i++) {
      self.push(arguments[i])
    }
  }

  return self
}

Yallist.prototype.removeNode = function (node) {
  if (node.list !== this) {
    throw new Error('removing node which does not belong to this list')
  }

  var next = node.next
  var prev = node.prev

  if (next) {
    next.prev = prev
  }

  if (prev) {
    prev.next = next
  }

  if (node === this.head) {
    this.head = next
  }
  if (node === this.tail) {
    this.tail = prev
  }

  node.list.length--
  node.next = null
  node.prev = null
  node.list = null
}

Yallist.prototype.unshiftNode = function (node) {
  if (node === this.head) {
    return
  }

  if (node.list) {
    node.list.removeNode(node)
  }

  var head = this.head
  node.list = this
  node.next = head
  if (head) {
    head.prev = node
  }

  this.head = node
  if (!this.tail) {
    this.tail = node
  }
  this.length++
}

Yallist.prototype.pushNode = function (node) {
  if (node === this.tail) {
    return
  }

  if (node.list) {
    node.list.removeNode(node)
  }

  var tail = this.tail
  node.list = this
  node.prev = tail
  if (tail) {
    tail.next = node
  }

  this.tail = node
  if (!this.head) {
    this.head = node
  }
  this.length++
}

Yallist.prototype.push = function () {
  for (var i = 0, l = arguments.length; i < l; i++) {
    push(this, arguments[i])
  }
  return this.length
}

Yallist.prototype.unshift = function () {
  for (var i = 0, l = arguments.length; i < l; i++) {
    unshift(this, arguments[i])
  }
  return this.length
}

Yallist.prototype.pop = function () {
  if (!this.tail) {
    return undefined
  }

  var res = this.tail.value
  this.tail = this.tail.prev
  if (this.tail) {
    this.tail.next = null
  } else {
    this.head = null
  }
  this.length--
  return res
}

Yallist.prototype.shift = function () {
  if (!this.head) {
    return undefined
  }

  var res = this.head.value
  this.head = this.head.next
  if (this.head) {
    this.head.prev = null
  } else {
    this.tail = null
  }
  this.length--
  return res
}

Yallist.prototype.forEach = function (fn, thisp) {
  thisp = thisp || this
  for (var walker = this.head, i = 0; walker !== null; i++) {
    fn.call(thisp, walker.value, i, this)
    walker = walker.next
  }
}

Yallist.prototype.forEachReverse = function (fn, thisp) {
  thisp = thisp || this
  for (var walker = this.tail, i = this.length - 1; walker !== null; i--) {
    fn.call(thisp, walker.value, i, this)
    walker = walker.prev
  }
}

Yallist.prototype.get = function (n) {
  for (var i = 0, walker = this.head; walker !== null && i < n; i++) {
    // abort out of the list early if we hit a cycle
    walker = walker.next
  }
  if (i === n && walker !== null) {
    return walker.value
  }
}

Yallist.prototype.getReverse = function (n) {
  for (var i = 0, walker = this.tail; walker !== null && i < n; i++) {
    // abort out of the list early if we hit a cycle
    walker = walker.prev
  }
  if (i === n && walker !== null) {
    return walker.value
  }
}

Yallist.prototype.map = function (fn, thisp) {
  thisp = thisp || this
  var res = new Yallist()
  for (var walker = this.head; walker !== null;) {
    res.push(fn.call(thisp, walker.value, this))
    walker = walker.next
  }
  return res
}

Yallist.prototype.mapReverse = function (fn, thisp) {
  thisp = thisp || this
  var res = new Yallist()
  for (var walker = this.tail; walker !== null;) {
    res.push(fn.call(thisp, walker.value, this))
    walker = walker.prev
  }
  return res
}

Yallist.prototype.reduce = function (fn, initial) {
  var acc
  var walker = this.head
  if (arguments.length > 1) {
    acc = initial
  } else if (this.head) {
    walker = this.head.next
    acc = this.head.value
  } else {
    throw new TypeError('Reduce of empty list with no initial value')
  }

  for (var i = 0; walker !== null; i++) {
    acc = fn(acc, walker.value, i)
    walker = walker.next
  }

  return acc
}

Yallist.prototype.reduceReverse = function (fn, initial) {
  var acc
  var walker = this.tail
  if (arguments.length > 1) {
    acc = initial
  } else if (this.tail) {
    walker = this.tail.prev
    acc = this.tail.value
  } else {
    throw new TypeError('Reduce of empty list with no initial value')
  }

  for (var i = this.length - 1; walker !== null; i--) {
    acc = fn(acc, walker.value, i)
    walker = walker.prev
  }

  return acc
}

Yallist.prototype.toArray = function () {
  var arr = new Array(this.length)
  for (var i = 0, walker = this.head; walker !== null; i++) {
    arr[i] = walker.value
    walker = walker.next
  }
  return arr
}

Yallist.prototype.toArrayReverse = function () {
  var arr = new Array(this.length)
  for (var i = 0, walker = this.tail; walker !== null; i++) {
    arr[i] = walker.value
    walker = walker.prev
  }
  return arr
}

Yallist.prototype.slice = function (from, to) {
  to = to || this.length
  if (to < 0) {
    to += this.length
  }
  from = from || 0
  if (from < 0) {
    from += this.length
  }
  var ret = new Yallist()
  if (to < from || to < 0) {
    return ret
  }
  if (from < 0) {
    from = 0
  }
  if (to > this.length) {
    to = this.length
  }
  for (var i = 0, walker = this.head; walker !== null && i < from; i++) {
    walker = walker.next
  }
  for (; walker !== null && i < to; i++, walker = walker.next) {
    ret.push(walker.value)
  }
  return ret
}

Yallist.prototype.sliceReverse = function (from, to) {
  to = to || this.length
  if (to < 0) {
    to += this.length
  }
  from = from || 0
  if (from < 0) {
    from += this.length
  }
  var ret = new Yallist()
  if (to < from || to < 0) {
    return ret
  }
  if (from < 0) {
    from = 0
  }
  if (to > this.length) {
    to = this.length
  }
  for (var i = this.length, walker = this.tail; walker !== null && i > to; i--) {
    walker = walker.prev
  }
  for (; walker !== null && i > from; i--, walker = walker.prev) {
    ret.push(walker.value)
  }
  return ret
}

Yallist.prototype.reverse = function () {
  var head = this.head
  var tail = this.tail
  for (var walker = head; walker !== null; walker = walker.prev) {
    var p = walker.prev
    walker.prev = walker.next
    walker.next = p
  }
  this.head = tail
  this.tail = head
  return this
}

function push (self, item) {
  self.tail = new Node(item, self.tail, null, self)
  if (!self.head) {
    self.head = self.tail
  }
  self.length++
}

function unshift (self, item) {
  self.head = new Node(item, null, self.head, self)
  if (!self.tail) {
    self.tail = self.head
  }
  self.length++
}

function Node (value, prev, next, list) {
  if (!(this instanceof Node)) {
    return new Node(value, prev, next, list)
  }

  this.list = list
  this.value = value

  if (prev) {
    prev.next = this
    this.prev = prev
  } else {
    this.prev = null
  }

  if (next) {
    next.prev = this
    this.next = next
  } else {
    this.next = null
  }
}


/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ExperimentsParser__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__TargetGroupsParser__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__RemoteConfigurationsParser__ = __webpack_require__(29);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





var terms = {
  DATA_CONTAINER: 'data',
  APP_KEY: 'application',
  EXPERIMENTS: 'experiments',
  TARGET_GROUPS: 'targetGroups',
  REMOTE_CONFIGURATIONS: 'remoteVariables',
  SIGNED_DATE: 'signed_date'
};

var ConfigurationParser = function () {
  function ConfigurationParser(json, appKey) {
    _classCallCheck(this, ConfigurationParser);

    if (!json || (typeof json === 'undefined' ? 'undefined' : _typeof(json)) !== 'object') {
      throw new Error('ConfigurationParser should be constructed with JSON object. Recieved ' + json);
    }
    if (!appKey || typeof appKey !== 'string') {
      throw new Error('ConfigurationParser should be constructed with app key string. Recieved ' + appKey);
    }
    this._json = json;
    this._appKey = appKey;
  }

  _createClass(ConfigurationParser, [{
    key: 'parse',
    value: function parse() {
      var data = this._extractInnerJson(this._json);
      if (data[terms.APP_KEY] !== this._appKey) {
        return null;
      }
      this._parseExperiments(data[terms.EXPERIMENTS]);
      this._parseTargetGroups(data[terms.TARGET_GROUPS]);
      this._parseRemoteConfigurations(data[terms.REMOTE_CONFIGURATIONS]);
      this._signedDate = new Date(this._json[terms.SIGNED_DATE]);

      return this;
    }
  }, {
    key: 'experiments',
    value: function experiments() {
      return this._experiments || [];
    }
  }, {
    key: 'targetGroups',
    value: function targetGroups() {
      return this._targetGroups || [];
    }
  }, {
    key: 'remoteConfigurations',
    value: function remoteConfigurations() {
      return this._configurations || [];
    }
  }, {
    key: 'signedDate',
    value: function signedDate() {
      return this._signedDate;
    }
  }, {
    key: '_extractInnerJson',
    value: function _extractInnerJson(json) {
      return JSON.parse(json[terms.DATA_CONTAINER]);
    }
  }, {
    key: '_parseExperiments',
    value: function _parseExperiments(experiments) {
      this._experiments = new __WEBPACK_IMPORTED_MODULE_0__ExperimentsParser__["a" /* default */](experiments).parse();
    }
  }, {
    key: '_parseTargetGroups',
    value: function _parseTargetGroups(targetGroups) {
      this._targetGroups = new __WEBPACK_IMPORTED_MODULE_1__TargetGroupsParser__["a" /* default */](targetGroups).parse();
    }
  }, {
    key: '_parseRemoteConfigurations',
    value: function _parseRemoteConfigurations(configurations) {
      this._configurations = __WEBPACK_IMPORTED_MODULE_2__RemoteConfigurationsParser__["a" /* default */].parse(configurations);
    }
  }]);

  return ConfigurationParser;
}();

/* harmony default export */ __webpack_exports__["a"] = (ConfigurationParser);

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__entities__ = __webpack_require__(13);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var terms = {
  DEPLOYMENT_CONFIGURATION: 'deploymentConfiguration',
  DEPLOYMENT_CONDITION: 'condition',
  EXPERIMENT_ARCHIVED: 'archived',
  EXPERIMENT_STICKY: 'sticky',
  EXPERIMENT_ID: '_id',
  EXPERIMENT_NAME: 'name',
  EXPERIMENT_FLAGS: 'featureFlags'
};

var ExperimentsParser = function () {
  function ExperimentsParser(json) {
    _classCallCheck(this, ExperimentsParser);

    this._json = json;
  }

  _createClass(ExperimentsParser, [{
    key: 'parse',
    value: function parse() {
      if (!this._json || !this._json.length) {
        return [];
      }

      var experiments = [];
      this._json.forEach(function (experimentJson) {
        if (!experimentJson || !experimentJson[terms.DEPLOYMENT_CONFIGURATION] || !experimentJson[terms.EXPERIMENT_ID] || !experimentJson[terms.EXPERIMENT_NAME] || !experimentJson[terms.EXPERIMENT_FLAGS]) {
          return;
        }

        var deploymentConfigurationJson = experimentJson[terms.DEPLOYMENT_CONFIGURATION];
        if (!deploymentConfigurationJson[terms.DEPLOYMENT_CONDITION]) {
          return;
        }

        var deploymentConfiguration = new __WEBPACK_IMPORTED_MODULE_0__entities__["DeploymentConfiguration"](deploymentConfigurationJson[terms.DEPLOYMENT_CONDITION]);
        experiments.push(new __WEBPACK_IMPORTED_MODULE_0__entities__["Experiment"](experimentJson[terms.EXPERIMENT_ID], experimentJson[terms.EXPERIMENT_NAME], !!experimentJson[terms.EXPERIMENT_ARCHIVED], !!experimentJson[terms.EXPERIMENT_STICKY], deploymentConfiguration, experimentJson[terms.EXPERIMENT_FLAGS]));
      });

      return experiments;
    }
  }]);

  return ExperimentsParser;
}();

/* harmony default export */ __webpack_exports__["a"] = (ExperimentsParser);

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CustomProperty__ = __webpack_require__(23);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var DeviceProperty = function (_CustomProperty) {
  _inherits(DeviceProperty, _CustomProperty);

  function DeviceProperty() {
    _classCallCheck(this, DeviceProperty);

    return _possibleConstructorReturn(this, (DeviceProperty.__proto__ || Object.getPrototypeOf(DeviceProperty)).apply(this, arguments));
  }

  _createClass(DeviceProperty, [{
    key: 'name',
    get: function get() {
      return 'rox.' + _get(DeviceProperty.prototype.__proto__ || Object.getPrototypeOf(DeviceProperty.prototype), 'name', this);
    }
  }]);

  return DeviceProperty;
}(__WEBPACK_IMPORTED_MODULE_0__CustomProperty__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (DeviceProperty);

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DeploymentConfiguration = function DeploymentConfiguration(condition) {
  _classCallCheck(this, DeploymentConfiguration);

  this.condition = condition;
};

/* harmony default export */ __webpack_exports__["a"] = (DeploymentConfiguration);

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Experiment = function Experiment(identifier, name, archived, sticky, deploymentConfiguration, flags) {
  _classCallCheck(this, Experiment);

  this.identifier = identifier;
  this.name = name;
  this.archived = archived;
  this.sticky = sticky;
  this.deploymentConfiguration = deploymentConfiguration;
  this.flags = flags;
};

/* harmony default export */ __webpack_exports__["a"] = (Experiment);

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__parsers__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__context__ = __webpack_require__(24);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var parser = new __WEBPACK_IMPORTED_MODULE_0__parsers__["RoxxParser"]();
var types = ['string', 'boolean', 'number'];

var RoxConfiguration = function () {
  function RoxConfiguration(defaultValue) {
    _classCallCheck(this, RoxConfiguration);

    var valueType = typeof defaultValue === 'undefined' ? 'undefined' : _typeof(defaultValue);
    this._entityType = 'configuration';
    if (types.indexOf(valueType) === -1) {
      throw new Error('RoxConfiguration initialized with wrong type \'' + valueType + '\'');
    }

    Object.defineProperty(this, '_defaultValue', {
      value: defaultValue,
      writable: false,
      enumerable: false
    });

    Object.defineProperty(this, '_value', {
      value: defaultValue,
      writable: true,
      enumerable: false
    });

    Object.defineProperty(this, '_type', {
      value: valueType,
      writable: false,
      enumerable: false
    });

    Object.defineProperty(this, '_externalType', {
      value: valueType.charAt(0).toUpperCase() + valueType.slice(1),
      writable: false,
      enumerable: false
    });

    Object.defineProperty(this, '_name', {
      value: null,
      writable: true,
      enumerable: false
    });
  }

  _createClass(RoxConfiguration, [{
    key: 'getValue',
    value: function getValue() {
      var context = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (this.condition) {
        var mergedContext = __WEBPACK_IMPORTED_MODULE_1__context__["Actions"].getMergedContextWithGlobal(context);
        var value = parser.evaluateExpression(this.condition, mergedContext);
        value ? this._value = value : this._value = this.defaultValue;
      }
      return this._value;
    }
  }, {
    key: 'name',
    get: function get() {
      return this._name;
    }
  }, {
    key: 'type',
    get: function get() {
      return this._type;
    }
  }, {
    key: 'externalType',
    get: function get() {
      return this._externalType;
    }
  }, {
    key: 'defaultValue',
    get: function get() {
      return this._defaultValue;
    }
  }]);

  return RoxConfiguration;
}();

/* harmony default export */ __webpack_exports__["a"] = (RoxConfiguration);

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["getMergedContext"] = getMergedContext;
/* harmony export (immutable) */ __webpack_exports__["getMergedContextWithGlobal"] = getMergedContextWithGlobal;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Manager__ = __webpack_require__(25);

var cloneDeep = __webpack_require__(26);

function getMergedContext(context, contextToBeMerged) {
  if (!context) return cloneDeep(contextToBeMerged);
  var mergedContext = Object.assign({}, context, contextToBeMerged);
  return cloneDeep(mergedContext);
}

function getMergedContextWithGlobal(contextToBeMerged) {
  var globalContext = __WEBPACK_IMPORTED_MODULE_0__Manager__["getContext"]();
  if (!contextToBeMerged) return globalContext;
  var mergedContext = Object.assign({}, globalContext, contextToBeMerged);
  return cloneDeep(mergedContext);
}

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
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
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_FlagImpressionHandler__ = __webpack_require__(28);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var RoxVariant = function () {
  function RoxVariant(defaultValue, options, name) {
    _classCallCheck(this, RoxVariant);

    this._entityType = 'variant';
    this._options = [].concat(_toConsumableArray(options));
    this._validate(defaultValue);
    this._name = name;
    this._value = this._defaultValue = defaultValue;
    this._type = 'string';
    this._frozen = false;
  }

  _createClass(RoxVariant, [{
    key: '_validate',
    value: function _validate(defaultValue) {
      var optionsError = new Error('RoxVariant options must be a non-empty array of strings. Received \'' + this._options + '\'');

      if (typeof defaultValue !== 'string') {
        throw new Error('RoxVariant default value must be string. Recieved \'' + defaultValue + '\'');
      }

      if (!this._options.length) {
        throw optionsError;
      }

      if (!this._options.every(function (option) {
        return typeof option === 'string';
      })) {
        throw optionsError;
      }

      if (this._options.indexOf(defaultValue) === -1) {
        this._options.push(defaultValue);
      }
    }
  }, {
    key: 'getNameDetails',
    value: function getNameDetails() {
      if (!this.name) return;
      var els = this.name.split('.');
      return {
        namespace: els.shift() || 'default',
        name: els.join('.')
      };
    }
  }, {
    key: 'dump',
    value: function dump() {
      return {
        name: this.name,
        nameDetails: this.getNameDetails(),
        options: [].concat(_toConsumableArray(this._options)),
        defaultValue: this.defaultValue,
        originalValue: this.activeValue,
        overridingValue: this.overridenValue,
        value: this.getValue.length === 1 ? this.getValue(true) : this.getValue(null, true)
      };
    }
  }, {
    key: '_flagImpression',
    value: function _flagImpression(value, context) {
      Object(__WEBPACK_IMPORTED_MODULE_0__lib_FlagImpressionHandler__["a" /* invokeFlagImpression */])(value, this, context);
    }
  }, {
    key: 'defaultValue',
    get: function get() {
      return this._defaultValue;
    }
  }, {
    key: 'overridenValue',
    get: function get() {
      if (this.overrider.hasOverride(this.name)) {
        return this.overrider.getOverride(this.name);
      }
    }
  }, {
    key: 'name',
    set: function set(name) {
      this._name = name;
    },
    get: function get() {
      return this._name;
    }
  }]);

  return RoxVariant;
}();

/* harmony default export */ __webpack_exports__["a"] = (RoxVariant);

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__entities_TargetGroup__ = __webpack_require__(27);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var terms = {
  TARGET_GROUP_ID: '_id',
  TARGET_GROUP_NAME: 'name',
  TARGET_GROUP_SEED: 'seed',
  TARGET_GROUP_CONDITION: 'condition'
};

var TargetGroupsParser = function () {
  function TargetGroupsParser(json) {
    _classCallCheck(this, TargetGroupsParser);

    this._json = json;
  }

  _createClass(TargetGroupsParser, [{
    key: 'parse',
    value: function parse() {
      if (!this._json || !this._json.length) {
        return [];
      }

      var targetGroups = [];

      this._json.forEach(function (targetGroupJson) {
        if (!targetGroupJson || !targetGroupJson[terms.TARGET_GROUP_ID] || !targetGroupJson[terms.TARGET_GROUP_NAME] || !targetGroupJson[terms.TARGET_GROUP_SEED] || !targetGroupJson[terms.TARGET_GROUP_CONDITION]) {
          return;
        }

        targetGroups.push(new __WEBPACK_IMPORTED_MODULE_0__entities_TargetGroup__["a" /* default */](targetGroupJson[terms.TARGET_GROUP_ID], targetGroupJson[terms.TARGET_GROUP_NAME], targetGroupJson[terms.TARGET_GROUP_SEED], targetGroupJson[terms.TARGET_GROUP_CONDITION]));
      });

      return targetGroups;
    }
  }]);

  return TargetGroupsParser;
}();

/* harmony default export */ __webpack_exports__["a"] = (TargetGroupsParser);

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__RequestConfiguration__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__RequestConfigurationBuilder__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__parsers__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__setters__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__repositories_TargetGroupRepository__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__repositories_ExperimentsRepository__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__RoxLogger__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__FetcherResults__ = __webpack_require__(93);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }









var CACHE_KEY = __WEBPACK_IMPORTED_MODULE_4__config__["a" /* default */].get('CLIENT_DATA_CACHE_KEY');
var CACHE_TTL = __WEBPACK_IMPORTED_MODULE_4__config__["a" /* default */].get('CLIENT_DATA_CACHE_TTL_MIN');
var isdispatchPeriodicallyRuning = false;







var ConfigurationFetcher = function () {
  function ConfigurationFetcher(appKey, deviceProperties, devModeSecret, cacheService) {
    _classCallCheck(this, ConfigurationFetcher);

    this.cacheService = cacheService;
    this.appKey = appKey;
    this.deviceProperties = deviceProperties;
    this.devModeSecret = devModeSecret;
    this.lastResponse = null;
  }

  _createClass(ConfigurationFetcher, [{
    key: 'runHandler',
    value: function runHandler(handler, data) {
      if (handler instanceof Function) {
        handler(data);
      }
    }
  }, {
    key: 'dispatch',
    value: function dispatch(_ref) {
      var _this = this;

      var handler = _ref.handler,
          options = _ref.options;

      __WEBPACK_IMPORTED_MODULE_7__RoxLogger__["a" /* default */].debug('Dispatch');
      var useCache = options.useCache;

      var cached = Promise.resolve();
      if (useCache) {
        var cachedData = this.fetchFromCache();
        if (cachedData) {
          this.lastResponse = cachedData;
          cached = this.process(__WEBPACK_IMPORTED_MODULE_8__FetcherResults__["b" /* FetcherStatus */].appliedFromCache, false, handler, cachedData);
        }
      }

      var networkPromise = this._dispatch({ handler: handler, storeInCache: true });

      return Promise.all([cached, networkPromise]).catch(function (err) {
        _this.runHandler(handler, new __WEBPACK_IMPORTED_MODULE_8__FetcherResults__["a" /* FetcherResults */](__WEBPACK_IMPORTED_MODULE_8__FetcherResults__["b" /* FetcherStatus */].errorFetchFailed, null, false, err));
      });
    }
  }, {
    key: 'dispatchPeriodically',
    value: function dispatchPeriodically(_ref2) {
      var _this2 = this;

      var handler = _ref2.handler,
          periodTimeInSec = _ref2.periodTimeInSec;

      if (isdispatchPeriodicallyRuning) {
        __WEBPACK_IMPORTED_MODULE_7__RoxLogger__["a" /* default */].debug('Dispatch Periodically already running');
        return Promise.resolve();
      }

      isdispatchPeriodicallyRuning = true;
      __WEBPACK_IMPORTED_MODULE_7__RoxLogger__["a" /* default */].debug('Dispatch Periodically');

      setInterval(function () {
        _this2._dispatch({ handler: handler });
      }, periodTimeInSec * 1000);
    }
  }, {
    key: '_dispatch',
    value: function _dispatch(_ref3) {
      var _this3 = this;

      var handler = _ref3.handler,
          storeInCache = _ref3.storeInCache;

      return this.fetchFromNetwork().then(function (response) {
        var hasChanges = _this3.isNewResponse(response);
        storeInCache && _this3.storeInCache(response);
        _this3.lastResponse = response;
        return _this3.process(__WEBPACK_IMPORTED_MODULE_8__FetcherResults__["b" /* FetcherStatus */].appliedFromNetwork, hasChanges, handler, response);
      }).catch(function (err) {
        _this3.runHandler(handler, new __WEBPACK_IMPORTED_MODULE_8__FetcherResults__["a" /* FetcherResults */](__WEBPACK_IMPORTED_MODULE_8__FetcherResults__["b" /* FetcherStatus */].errorFetchFailed, null, false, err));
      });
    }
  }, {
    key: 'fetchFromNetwork',
    value: function fetchFromNetwork() {
      __WEBPACK_IMPORTED_MODULE_7__RoxLogger__["a" /* default */].debug('fetch from network for appKey ' + this.appKey);
      var rc = Object(__WEBPACK_IMPORTED_MODULE_1__RequestConfigurationBuilder__["a" /* buildRequestConfiguration */])({
        appKey: this.appKey,
        deviceProperties: this.deviceProperties,
        devModeSecret: this.devModeSecret
      });
      __WEBPACK_IMPORTED_MODULE_7__RoxLogger__["a" /* default */].debug(rc);
      return Object(__WEBPACK_IMPORTED_MODULE_0__RequestConfiguration__["a" /* fetchRemoteConfiguration */])(rc);
    }
  }, {
    key: 'fetchFromCache',
    value: function fetchFromCache() {
      __WEBPACK_IMPORTED_MODULE_7__RoxLogger__["a" /* default */].debug('fetch From Cache');
      var cached = this.cacheService.get(CACHE_KEY);
      var parsed = void 0;
      if (cached) {
        try {
          parsed = JSON.parse(cached);
        } catch (e) {
          __WEBPACK_IMPORTED_MODULE_7__RoxLogger__["a" /* default */].warn('Configuration retreived from cache, but has corrupted. Aborting. (Error: ' + e + ')');
        }
        if (parsed && parsed.constructor === Object) {
          __WEBPACK_IMPORTED_MODULE_7__RoxLogger__["a" /* default */].debug('Parsed cached = ' + JSON.stringify(parsed));
          return parsed;
        }
      }
    }
  }, {
    key: 'storeInCache',
    value: function storeInCache(response) {
      __WEBPACK_IMPORTED_MODULE_7__RoxLogger__["a" /* default */].debug('Store in cache response = ' + JSON.stringify(response));
      this.cacheService.set(CACHE_KEY, JSON.stringify(response), CACHE_TTL);
    }
  }, {
    key: 'process',
    value: function process(source, hasChanges, handler, payload) {
      var _this4 = this;

      if (payload) {
        var parser = this.calculatePayload(this.parsePayload(payload));
        if (parser) {
          return new Promise(function (resolve) {
            var fetcherResults = new __WEBPACK_IMPORTED_MODULE_8__FetcherResults__["a" /* FetcherResults */](source, parser.signedDate(), hasChanges);
            _this4.runHandler(handler, fetcherResults);
            resolve();
          });
        } else {
          return Promise.reject('Failed to parse configuration');
        }
      }
      return Promise.reject('Empty configuration');
    }
  }, {
    key: 'parsePayload',
    value: function parsePayload(response) {
      var parser = new __WEBPACK_IMPORTED_MODULE_2__parsers__["ConfigurationParser"](response, this.appKey);
      if (!parser.parse()) {
        __WEBPACK_IMPORTED_MODULE_7__RoxLogger__["a" /* default */].debug('failed to parse payload. response = ' + JSON.stringify(response) + ' deviceProps = ' + this.deviceProperties + ' app_key = ' + this.appKey);
        return null;
      }
      return parser;
    }
  }, {
    key: 'calculatePayload',
    value: function calculatePayload(parser) {
      if (!parser) {
        return;
      }

      __WEBPACK_IMPORTED_MODULE_5__repositories_TargetGroupRepository__["a" /* default */].setTargetGroups(parser.targetGroups());
      __WEBPACK_IMPORTED_MODULE_6__repositories_ExperimentsRepository__["a" /* default */].setExperiments(parser.experiments());

      new __WEBPACK_IMPORTED_MODULE_3__setters__["ConfigurationSetter"]().prepareConfigurations(parser.remoteConfigurations());
      new __WEBPACK_IMPORTED_MODULE_3__setters__["FlagsSetter"]().prepareFlagsWithExperiments(parser.experiments());

      return parser;
    }
  }, {
    key: 'isNewResponse',
    value: function isNewResponse(response) {
      return JSON.stringify(this.lastResponse) !== JSON.stringify(response);
    }
  }]);

  return ConfigurationFetcher;
}();

/* harmony default export */ __webpack_exports__["a"] = (ConfigurationFetcher);

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = fetchRemoteConfiguration;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__RoxAPI__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__RoxLogger__ = __webpack_require__(2);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };





var fetchFromAPI = function fetchFromAPI(url) {
  return __WEBPACK_IMPORTED_MODULE_0_axios__["get"](url).then(function (_ref) {
    var data = _ref.data,
        status = _ref.status;

    if (status === 200 && data && (typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object') {
      __WEBPACK_IMPORTED_MODULE_2__RoxLogger__["a" /* default */].debug('succeed fetch from API');
      return data;
    }
    return Promise.reject(new Error('Unexpected response from ROX API'));
  });
};

var fetchFromCDN = function fetchFromCDN(cache_url) {
  return __WEBPACK_IMPORTED_MODULE_0_axios__["get"](cache_url).then(function (_ref2) {
    var data = _ref2.data,
        status = _ref2.status;

    if (status === 200 && data && data.constructor === Object) {
      __WEBPACK_IMPORTED_MODULE_2__RoxLogger__["a" /* default */].debug('succeed fetch from CDN');
      return data;
    }
    return Promise.reject();
  });
};

function fetchRemoteConfiguration(properties) {
  var cache_url = properties.cache_miss_url + '?distinct_id=' + properties.distinct_id;
  return fetchFromCDN(cache_url).catch(function () {
    return fetchFromAPI(Object(__WEBPACK_IMPORTED_MODULE_1__RoxAPI__["a" /* buildAPIURL */])(properties));
  }).catch(function (err) {
    __WEBPACK_IMPORTED_MODULE_2__RoxLogger__["a" /* default */].error('Unable to fetch ROX configuration ' + err);
    return Promise.reject(new Error('Unable to fetch ROX configuration'));
  });
}

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(70);

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var bind = __webpack_require__(31);
var Axios = __webpack_require__(71);
var defaults = __webpack_require__(14);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(35);
axios.CancelToken = __webpack_require__(85);
axios.isCancel = __webpack_require__(34);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(86);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__(14);
var utils = __webpack_require__(0);
var InterceptorManager = __webpack_require__(80);
var dispatchRequest = __webpack_require__(81);

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, this.defaults, { method: 'get' }, config);
  config.method = config.method.toLowerCase();

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(33);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.request = request;
  error.response = response;
  return error;
};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      }

      if (!utils.isArray(val)) {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      var href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                  urlParsingNode.pathname :
                  '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })()
);


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error;
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
    // initialize result and counter
    var block, charCode, idx = 0, map = chars;
    // if the next str index does not exist:
    //   change the mapping table to "="
    //   check if d has no fractional digits
    str.charAt(idx | 0) || (map = '=', idx % 1);
    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
  ) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

  // Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })()
);


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var transformData = __webpack_require__(82);
var isCancel = __webpack_require__(34);
var defaults = __webpack_require__(14);
var isAbsoluteURL = __webpack_require__(83);
var combineURLs = __webpack_require__(84);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(35);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return buildAPIURL; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_qs__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_qs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_qs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__(4);



var buildAPIURL = function buildAPIURL(properties) {
  var qs = __WEBPACK_IMPORTED_MODULE_0_qs___default.a.stringify(properties, { addQueryPrefix: true });
  return __WEBPACK_IMPORTED_MODULE_1__config__["a" /* default */].get('CD_API_ENDPOINT') + qs;
};

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stringify = __webpack_require__(89);
var parse = __webpack_require__(90);
var formats = __webpack_require__(37);

module.exports = {
    formats: formats,
    parse: parse,
    stringify: stringify
};


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(36);
var formats = __webpack_require__(37);

var arrayPrefixGenerators = {
    brackets: function brackets(prefix) { // eslint-disable-line func-name-matching
        return prefix + '[]';
    },
    indices: function indices(prefix, key) { // eslint-disable-line func-name-matching
        return prefix + '[' + key + ']';
    },
    repeat: function repeat(prefix) { // eslint-disable-line func-name-matching
        return prefix;
    }
};

var toISO = Date.prototype.toISOString;

var defaults = {
    delimiter: '&',
    encode: true,
    encoder: utils.encode,
    encodeValuesOnly: false,
    serializeDate: function serializeDate(date) { // eslint-disable-line func-name-matching
        return toISO.call(date);
    },
    skipNulls: false,
    strictNullHandling: false
};

var stringify = function stringify( // eslint-disable-line func-name-matching
    object,
    prefix,
    generateArrayPrefix,
    strictNullHandling,
    skipNulls,
    encoder,
    filter,
    sort,
    allowDots,
    serializeDate,
    formatter,
    encodeValuesOnly
) {
    var obj = object;
    if (typeof filter === 'function') {
        obj = filter(prefix, obj);
    } else if (obj instanceof Date) {
        obj = serializeDate(obj);
    } else if (obj === null) {
        if (strictNullHandling) {
            return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder) : prefix;
        }

        obj = '';
    }

    if (typeof obj === 'string' || typeof obj === 'number' || typeof obj === 'boolean' || utils.isBuffer(obj)) {
        if (encoder) {
            var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder);
            return [formatter(keyValue) + '=' + formatter(encoder(obj, defaults.encoder))];
        }
        return [formatter(prefix) + '=' + formatter(String(obj))];
    }

    var values = [];

    if (typeof obj === 'undefined') {
        return values;
    }

    var objKeys;
    if (Array.isArray(filter)) {
        objKeys = filter;
    } else {
        var keys = Object.keys(obj);
        objKeys = sort ? keys.sort(sort) : keys;
    }

    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (skipNulls && obj[key] === null) {
            continue;
        }

        if (Array.isArray(obj)) {
            values = values.concat(stringify(
                obj[key],
                generateArrayPrefix(prefix, key),
                generateArrayPrefix,
                strictNullHandling,
                skipNulls,
                encoder,
                filter,
                sort,
                allowDots,
                serializeDate,
                formatter,
                encodeValuesOnly
            ));
        } else {
            values = values.concat(stringify(
                obj[key],
                prefix + (allowDots ? '.' + key : '[' + key + ']'),
                generateArrayPrefix,
                strictNullHandling,
                skipNulls,
                encoder,
                filter,
                sort,
                allowDots,
                serializeDate,
                formatter,
                encodeValuesOnly
            ));
        }
    }

    return values;
};

module.exports = function (object, opts) {
    var obj = object;
    var options = opts ? utils.assign({}, opts) : {};

    if (options.encoder !== null && options.encoder !== undefined && typeof options.encoder !== 'function') {
        throw new TypeError('Encoder has to be a function.');
    }

    var delimiter = typeof options.delimiter === 'undefined' ? defaults.delimiter : options.delimiter;
    var strictNullHandling = typeof options.strictNullHandling === 'boolean' ? options.strictNullHandling : defaults.strictNullHandling;
    var skipNulls = typeof options.skipNulls === 'boolean' ? options.skipNulls : defaults.skipNulls;
    var encode = typeof options.encode === 'boolean' ? options.encode : defaults.encode;
    var encoder = typeof options.encoder === 'function' ? options.encoder : defaults.encoder;
    var sort = typeof options.sort === 'function' ? options.sort : null;
    var allowDots = typeof options.allowDots === 'undefined' ? false : options.allowDots;
    var serializeDate = typeof options.serializeDate === 'function' ? options.serializeDate : defaults.serializeDate;
    var encodeValuesOnly = typeof options.encodeValuesOnly === 'boolean' ? options.encodeValuesOnly : defaults.encodeValuesOnly;
    if (typeof options.format === 'undefined') {
        options.format = formats['default'];
    } else if (!Object.prototype.hasOwnProperty.call(formats.formatters, options.format)) {
        throw new TypeError('Unknown format option provided.');
    }
    var formatter = formats.formatters[options.format];
    var objKeys;
    var filter;

    if (typeof options.filter === 'function') {
        filter = options.filter;
        obj = filter('', obj);
    } else if (Array.isArray(options.filter)) {
        filter = options.filter;
        objKeys = filter;
    }

    var keys = [];

    if (typeof obj !== 'object' || obj === null) {
        return '';
    }

    var arrayFormat;
    if (options.arrayFormat in arrayPrefixGenerators) {
        arrayFormat = options.arrayFormat;
    } else if ('indices' in options) {
        arrayFormat = options.indices ? 'indices' : 'repeat';
    } else {
        arrayFormat = 'indices';
    }

    var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];

    if (!objKeys) {
        objKeys = Object.keys(obj);
    }

    if (sort) {
        objKeys.sort(sort);
    }

    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (skipNulls && obj[key] === null) {
            continue;
        }

        keys = keys.concat(stringify(
            obj[key],
            key,
            generateArrayPrefix,
            strictNullHandling,
            skipNulls,
            encode ? encoder : null,
            filter,
            sort,
            allowDots,
            serializeDate,
            formatter,
            encodeValuesOnly
        ));
    }

    var joined = keys.join(delimiter);
    var prefix = options.addQueryPrefix === true ? '?' : '';

    return joined.length > 0 ? prefix + joined : '';
};


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(36);

var has = Object.prototype.hasOwnProperty;

var defaults = {
    allowDots: false,
    allowPrototypes: false,
    arrayLimit: 20,
    decoder: utils.decode,
    delimiter: '&',
    depth: 5,
    parameterLimit: 1000,
    plainObjects: false,
    strictNullHandling: false
};

var parseValues = function parseQueryStringValues(str, options) {
    var obj = {};
    var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, '') : str;
    var limit = options.parameterLimit === Infinity ? undefined : options.parameterLimit;
    var parts = cleanStr.split(options.delimiter, limit);

    for (var i = 0; i < parts.length; ++i) {
        var part = parts[i];

        var bracketEqualsPos = part.indexOf(']=');
        var pos = bracketEqualsPos === -1 ? part.indexOf('=') : bracketEqualsPos + 1;

        var key, val;
        if (pos === -1) {
            key = options.decoder(part, defaults.decoder);
            val = options.strictNullHandling ? null : '';
        } else {
            key = options.decoder(part.slice(0, pos), defaults.decoder);
            val = options.decoder(part.slice(pos + 1), defaults.decoder);
        }
        if (has.call(obj, key)) {
            obj[key] = [].concat(obj[key]).concat(val);
        } else {
            obj[key] = val;
        }
    }

    return obj;
};

var parseObject = function (chain, val, options) {
    var leaf = val;

    for (var i = chain.length - 1; i >= 0; --i) {
        var obj;
        var root = chain[i];

        if (root === '[]') {
            obj = [];
            obj = obj.concat(leaf);
        } else {
            obj = options.plainObjects ? Object.create(null) : {};
            var cleanRoot = root.charAt(0) === '[' && root.charAt(root.length - 1) === ']' ? root.slice(1, -1) : root;
            var index = parseInt(cleanRoot, 10);
            if (
                !isNaN(index)
                && root !== cleanRoot
                && String(index) === cleanRoot
                && index >= 0
                && (options.parseArrays && index <= options.arrayLimit)
            ) {
                obj = [];
                obj[index] = leaf;
            } else {
                obj[cleanRoot] = leaf;
            }
        }

        leaf = obj;
    }

    return leaf;
};

var parseKeys = function parseQueryStringKeys(givenKey, val, options) {
    if (!givenKey) {
        return;
    }

    // Transform dot notation to bracket notation
    var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, '[$1]') : givenKey;

    // The regex chunks

    var brackets = /(\[[^[\]]*])/;
    var child = /(\[[^[\]]*])/g;

    // Get the parent

    var segment = brackets.exec(key);
    var parent = segment ? key.slice(0, segment.index) : key;

    // Stash the parent if it exists

    var keys = [];
    if (parent) {
        // If we aren't using plain objects, optionally prefix keys
        // that would overwrite object prototype properties
        if (!options.plainObjects && has.call(Object.prototype, parent)) {
            if (!options.allowPrototypes) {
                return;
            }
        }

        keys.push(parent);
    }

    // Loop through children appending to the array until we hit depth

    var i = 0;
    while ((segment = child.exec(key)) !== null && i < options.depth) {
        i += 1;
        if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
            if (!options.allowPrototypes) {
                return;
            }
        }
        keys.push(segment[1]);
    }

    // If there's a remainder, just add whatever is left

    if (segment) {
        keys.push('[' + key.slice(segment.index) + ']');
    }

    return parseObject(keys, val, options);
};

module.exports = function (str, opts) {
    var options = opts ? utils.assign({}, opts) : {};

    if (options.decoder !== null && options.decoder !== undefined && typeof options.decoder !== 'function') {
        throw new TypeError('Decoder has to be a function.');
    }

    options.ignoreQueryPrefix = options.ignoreQueryPrefix === true;
    options.delimiter = typeof options.delimiter === 'string' || utils.isRegExp(options.delimiter) ? options.delimiter : defaults.delimiter;
    options.depth = typeof options.depth === 'number' ? options.depth : defaults.depth;
    options.arrayLimit = typeof options.arrayLimit === 'number' ? options.arrayLimit : defaults.arrayLimit;
    options.parseArrays = options.parseArrays !== false;
    options.decoder = typeof options.decoder === 'function' ? options.decoder : defaults.decoder;
    options.allowDots = typeof options.allowDots === 'boolean' ? options.allowDots : defaults.allowDots;
    options.plainObjects = typeof options.plainObjects === 'boolean' ? options.plainObjects : defaults.plainObjects;
    options.allowPrototypes = typeof options.allowPrototypes === 'boolean' ? options.allowPrototypes : defaults.allowPrototypes;
    options.parameterLimit = typeof options.parameterLimit === 'number' ? options.parameterLimit : defaults.parameterLimit;
    options.strictNullHandling = typeof options.strictNullHandling === 'boolean' ? options.strictNullHandling : defaults.strictNullHandling;

    if (str === '' || str === null || typeof str === 'undefined') {
        return options.plainObjects ? Object.create(null) : {};
    }

    var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
    var obj = options.plainObjects ? Object.create(null) : {};

    // Iterate over the keys and setup the new object

    var keys = Object.keys(tempObj);
    for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var newObj = parseKeys(key, tempObj[key], options);
        obj = utils.merge(obj, newObj, options);
    }

    return utils.compact(obj);
};


/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return buildRequestConfiguration; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__BUID__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__RuntimeRegistry__ = __webpack_require__(38);




var registry = new __WEBPACK_IMPORTED_MODULE_2__RuntimeRegistry__["a" /* default */]();

var buildRequestConfiguration = function buildRequestConfiguration(_ref) {
  var appKey = _ref.appKey,
      deviceProperties = _ref.deviceProperties,
      devModeSecret = _ref.devModeSecret;

  var properties = deviceProperties.getProperties();

  properties.app_key = appKey;

  properties.feature_flags = JSON.stringify(registry.featureFlags);

  properties.custom_properties = JSON.stringify(registry.customProperties);

  properties.remoteVariables = JSON.stringify(registry.remoteConfiguration);

  properties.buid = __WEBPACK_IMPORTED_MODULE_1__BUID__["b" /* generate */](properties);
  properties.buid_generators_list = __WEBPACK_IMPORTED_MODULE_1__BUID__["a" /* GENERATOR_LIST */].join(',');
  properties.cache_miss_url = '' + __WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].get('CD_S3_ENDPOINT') + properties.buid;

  properties.devModeSecret = devModeSecret;

  return properties;
};

/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _generate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GENERATOR_LIST; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_md5__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_md5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_md5__);


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var GENERATOR_LIST = ['app_release', 'lib_version', 'api_version', 'platform', 'package_name', 'app_key', 'customSigningCertificate', 'app_environment', 'feature_flags', 'custom_properties', 'remoteVariables'];

function _generate() {
  var all_properties = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var generator_list = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : GENERATOR_LIST;

  var payload = generator_list.map(function (key) {
    var value = all_properties[key];
    if (!value) {
      return key;
    }
    if (value.constructor === Object) {
      return JSON.stringify(value);
    }
    return value;
  });
  return __WEBPACK_IMPORTED_MODULE_0_md5___default()(payload.join('|'));
}

var BUID = function () {
  function BUID() {
    _classCallCheck(this, BUID);
  }

  _createClass(BUID, null, [{
    key: 'generate',
    value: function generate() {
      return _generate.apply(null, arguments);
    }
  }]);

  return BUID;
}();

/* unused harmony default export */ var _unused_webpack_default_export = (BUID);

/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FetcherStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FetcherResults; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FetcherStatus = {
  appliedFromCache: 'appliedFromCache',
  appliedFromNetwork: 'appliedFromNetwork',
  errorFetchFailed: 'errorFetchFailed'
};

var FetcherResults = function FetcherResults(fetcherStatus, creationDate, hasChanges, errorDetails) {
  _classCallCheck(this, FetcherResults);

  this.fetcherStatus = fetcherStatus;
  this.creationDate = creationDate;
  this.hasChanges = hasChanges;
  this.errorDetails = errorDetails;
};

/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__repositories__ = __webpack_require__(7);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var defaultOptions = { flagsRepository: __WEBPACK_IMPORTED_MODULE_0__repositories__["Flags"], configurationRepository: __WEBPACK_IMPORTED_MODULE_0__repositories__["Configuration"] };

var RoxClassRegister = function () {
  function RoxClassRegister() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, RoxClassRegister);

    this.options = Object.assign({}, defaultOptions, options);
    this._flagsRepository = this.options.flagsRepository;
    this._configurationRepository = this.options.configurationRepository;
    this._namespaceStore = new Set();
  }

  _createClass(RoxClassRegister, [{
    key: 'handleContainer',
    value: function handleContainer(namespace, container) {
      if (Object.prototype.toString.call(namespace) !== '[object String]') {
        throw new Error('InvalidNamespace: Namespace must be a string (non-nullable).');
      }
      if (this._namespaceStore.has(namespace)) {
        var err = 'InvalidNamespace: A namespace must be unique. A container with the given namesapce (\'' + namespace + '\') has already been registered.';
        throw new Error(err);
      } else {
        this._namespaceStore.add(namespace);
      }
      for (var prop in container) {
        if (container.hasOwnProperty(prop)) {
          var label = namespace ? namespace + '.' + prop : prop;
          var entity = container[prop];
          if (entity._entityType === 'flag' || entity._entityType === 'variant') {
            this._flagsRepository.addFlag(label, entity);
          }
          if (entity._entityType === 'configuration') {
            this._configurationRepository.addRemoteConfiguration(label, entity);
          }
        }
      }
    }
  }]);

  return RoxClassRegister;
}();

/* harmony default export */ __webpack_exports__["a"] = (RoxClassRegister);

/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_uuid_v4__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_uuid_v4___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_uuid_v4__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var DeviceProperties = function () {
  function DeviceProperties(cacheService) {
    _classCallCheck(this, DeviceProperties);

    this.cacheService = cacheService;
    this.distinct_id = this.generateDistinctId();
    this.app_release = '0.0';
    this.distinctIdSetExplicitly = false;
  }

  _createClass(DeviceProperties, [{
    key: 'setDistinctId',
    value: function setDistinctId(id) {
      this.distinctIdSetExplicitly = true;
      this.distinct_id = id;
    }
  }, {
    key: 'setAppRelease',
    value: function setAppRelease(appRelease) {
      this.app_release = appRelease;
    }
  }, {
    key: 'generateDistinctId',
    value: function generateDistinctId() {
      var distinct_id = this.cacheService.get('distinctId');
      if (!distinct_id) {
        distinct_id = __WEBPACK_IMPORTED_MODULE_0_uuid_v4___default()();
        this.cacheService.set('distinctId', distinct_id);
      }
      return distinct_id;
    }
  }]);

  return DeviceProperties;
}();

/* harmony default export */ __webpack_exports__["a"] = (DeviceProperties);

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(97);
var bytesToUuid = __webpack_require__(98);

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options == 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection
var rng;

var crypto = global.crypto || global.msCrypto; // for IE 11
if (crypto && crypto.getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef
  rng = function whatwgRNG() {
    crypto.getRandomValues(rnds8);
    return rnds8;
  };
}

if (!rng) {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);
  rng = function() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}

module.exports = rng;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ }),
/* 98 */
/***/ (function(module, exports) {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  return bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]];
}

module.exports = bytesToUuid;


/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Client */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__entities__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__repositories__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__parsers__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3____ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__FlagImpressionHandler__ = __webpack_require__(28);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }









var _deps = {
  ClassRegister: __WEBPACK_IMPORTED_MODULE_3____["ClassRegister"]
};
var minimumIntervalInSec = 30;
var disableIntervalTime = 0;

var Client = function () {
  function Client() {
    _classCallCheck(this, Client);

    this.classRegisterer = new _deps.ClassRegister();
  }

  _createClass(Client, [{
    key: 'setKey',
    value: function setKey(apiKey) {
      this.app_key = apiKey;
    }
  }, {
    key: 'setup',
    value: function setup() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      this.handleOptions(options);

      _deps.DeviceProperties = _deps.DeviceProperties.create ? _deps.DeviceProperties.create() : _deps.DeviceProperties;
      this.app_release && _deps.DeviceProperties.setAppRelease(this.app_release);
      this.distinct_id && _deps.DeviceProperties.setDistinctId(this.distinct_id);
      this.deviceProperties = _deps.DeviceProperties;
      this.configurationFetcher = new __WEBPACK_IMPORTED_MODULE_3____["ConfigurationFetcher"](this.appKey, this.deviceProperties, this.devModeSecret, _deps.cacheService);
      _deps.getDefaultCustomProperties(this.deviceProperties).map(__WEBPACK_IMPORTED_MODULE_1__repositories__["CustomProperties"].add.bind(__WEBPACK_IMPORTED_MODULE_1__repositories__["CustomProperties"]));

      return Promise.resolve(this);
    }
  }, {
    key: 'handleOptions',
    value: function handleOptions(options) {
      var _options = Object.assign({}, _deps.DefaultSetupOptions, options);
      this.fetchIntervalInSec = _options.fetchIntervalInSec;
      this.configurationFetchedHandler = _options.configurationFetchedHandler;
      this.flagImpressionHandler = _options.flagImpressionHandler;
      this.app_release = _options.version;
      this.distinct_id = _options.distinctId;
      this.devModeSecret = _options.devModeSecret;
      Object(__WEBPACK_IMPORTED_MODULE_4__FlagImpressionHandler__["b" /* setHandler */])(this.flagImpressionHandler);
    }
  }, {
    key: 'fetchPeriodically',
    value: function fetchPeriodically() {
      if (!this.app_key) {
        __WEBPACK_IMPORTED_MODULE_3____["RoxLogger"].warn('no app key');
        return Promise.reject();
      }
      if (this.fetchIntervalInSec <= disableIntervalTime) return Promise.resolve();
      if (this.fetchIntervalInSec < minimumIntervalInSec) this.fetchIntervalInSec = minimumIntervalInSec;
      this._fetch({
        useCache: false
      });
      this.configurationFetcher.dispatchPeriodically({
        handler: this.configurationFetchedHandler,
        periodTimeInSec: this.fetchIntervalInSec
      });
      return Promise.resolve();
    }
  }, {
    key: 'fetchWithCacheAndProceed',
    value: function fetchWithCacheAndProceed() {
      this._fetch({
        useCache: true
      });
    }
  }, {
    key: 'fetch',
    value: function fetch() {
      this._fetch({
        useCache: false
      });
    }
  }, {
    key: '_fetch',
    value: function _fetch() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (!this.app_key) {
        __WEBPACK_IMPORTED_MODULE_3____["RoxLogger"].warn('no app key');
        return;
      }
      if (!this.configurationFetcher) {
        return;
      }
      this.configurationFetcher.dispatch({
        handler: this.configurationFetchedHandler,
        options: options
      });
    }
  }, {
    key: 'register',
    value: function register(name, container) {
      __WEBPACK_IMPORTED_MODULE_3____["RoxLogger"].debug('Registering container \'' + name + '\' = ' + JSON.stringify(container));
      this.classRegisterer.handleContainer(name, container);
    }
  }, {
    key: 'setCustomProperty',
    value: function setCustomProperty(name, type, value) {
      __WEBPACK_IMPORTED_MODULE_1__repositories__["CustomProperties"].add(new __WEBPACK_IMPORTED_MODULE_0__entities__["CustomProperty"](name, type, value));
    }
  }, {
    key: 'unfreeze',
    value: function unfreeze(namespace, freezeLevel) {
      var namespaceFilter = function namespaceFilter(flag) {
        if (!flag.name || typeof namespace !== 'string') return true;
        var flagNameParts = flag.name.split('.');
        if (flagNameParts.length === 1 && namespace === '') {
          return true;
        } else if (flagNameParts.slice(0, flagNameParts.length - 1).join('.') === namespace) {
          return true;
        }

        return false;
      };
      __WEBPACK_IMPORTED_MODULE_1__repositories__["Flags"].flags.filter(namespaceFilter).forEach(function (flag) {
        flag.unfreeze(freezeLevel);
      });

      __WEBPACK_IMPORTED_MODULE_1__repositories__["Configuration"].remoteConfigurations.filter(namespaceFilter).forEach(function (remoteConfiguration) {
        remoteConfiguration.unfreeze(freezeLevel);
      });
    }
  }, {
    key: 'appKey',
    get: function get() {
      return this.app_key;
    }
  }, {
    key: 'metadata',
    get: function get() {
      var _roxxTrueToBoolean = function _roxxTrueToBoolean(val) {
        return val === 'true' ? true : false;
      };

      var parser = new __WEBPACK_IMPORTED_MODULE_2__parsers__["RoxxParser"]();
      var targetGroups = __WEBPACK_IMPORTED_MODULE_1__repositories__["TargetGroups"].targetGroups.map(function (tg) {
        return {
          name: tg.name,
          isEnabled: parser.evaluateExpression(tg.condition)
        };
      });
      var experiments = __WEBPACK_IMPORTED_MODULE_1__repositories__["Experiments"].experiments.map(function (e) {
        return {
          name: e.name,
          isEnabled: _roxxTrueToBoolean(parser.evaluateExpression(e.deploymentConfiguration.condition))
        };
      });
      var remoteConfigurations = __WEBPACK_IMPORTED_MODULE_1__repositories__["Configuration"].remoteConfigurations.map(function (c) {
        return {
          name: c.name,
          value: c.value
        };
      });
      var flags = __WEBPACK_IMPORTED_MODULE_1__repositories__["Flags"].flags.map(function (f) {
        return {
          name: f.name,
          value: f._peek()
        };
      });

      return { targetGroups: targetGroups, experiments: experiments, remoteConfigurations: remoteConfigurations, flags: flags };
    }
  }]);

  return Client;
}();

var instance = new Client();

/* harmony default export */ __webpack_exports__["a"] = (function () {
  var deps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  _deps = Object.assign({}, _deps, deps);
  return instance;
});

/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rox_base__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__manifest__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__RoxCache__ = __webpack_require__(15);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var DevicePropertiesBase = __WEBPACK_IMPORTED_MODULE_0_rox_base__["a" /* default */].DeviceProperties;
var api_version = __WEBPACK_IMPORTED_MODULE_1__manifest__["a" /* default */].api_version,
    lib_version = __WEBPACK_IMPORTED_MODULE_1__manifest__["a" /* default */].lib_version;

var DeviceProperties = function (_DevicePropertiesBase) {
  _inherits(DeviceProperties, _DevicePropertiesBase);

  function DeviceProperties() {
    _classCallCheck(this, DeviceProperties);

    return _possibleConstructorReturn(this, (DeviceProperties.__proto__ || Object.getPrototypeOf(DeviceProperties)).apply(this, arguments));
  }

  _createClass(DeviceProperties, [{
    key: 'getProperties',
    value: function getProperties() {
      var distinct_id = this.distinct_id,
          app_release = this.app_release;

      return {
        app_release: app_release,
        api_version: api_version,
        lib_version: lib_version,
        distinct_id: distinct_id,
        screen_width: window.screen.width,
        screen_height: window.screen.height,
        version_name: app_release,
        package_name: app_release,
        rollout_build: '100',
        debugger_attached: '0',
        platform: 'Browser',
        customSigningCertificate: '5659eb0ca47811395ef85f0b09be63b7',
        rollout_disabled_initial_state: '0',
        os: 'iOS',
        language: navigator.language,
        proxy_cache_miss_url: '(null)',
        anticache: +Date.now()
      };
    }
  }]);

  return DeviceProperties;
}(DevicePropertiesBase);

/* harmony default export */ __webpack_exports__["a"] = (new DeviceProperties(__WEBPACK_IMPORTED_MODULE_2__RoxCache__["a" /* default */]));

/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__package_json__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__package_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__package_json__);

/* harmony default export */ __webpack_exports__["a"] = ({
  api_version: __WEBPACK_IMPORTED_MODULE_0__package_json__["ROX"].api_version,
  lib_version: __WEBPACK_IMPORTED_MODULE_0__package_json__["version"]
});

/***/ }),
/* 102 */
/***/ (function(module, exports) {

module.exports = {"name":"rox-browser","version":"2.0.2","description":"Rollout.io ROX JS SDK Client","author":"Rollout.io <support@rollout.io>","license":"SEE LICENSE IN LICENSE","homepage":"https://rollout.io","repository":{"type":"git","url":"https://github.com/rollout/roxjs.git"},"bugs":{"url":"https://github.com/rollout/roxjs/issues","email":"support@rollout.io"},"keywords":["feature-flag","feature-flags","remote-configuration","remote-variable","rollout","rox","flags","flag","configuration","remote-control","rollout.io"],"scripts":{"start":"webpack-dev-server","test":"BABEL_ENV=test jest ./src/**","test:watch":"BABEL_ENV=test jest ./src/** --watch","prebuild":"npm run clean:dist","build":"BABEL_ENV=build webpack --config webpack.config.build.js --progress --colors","postbuild":"jest ./__tests__/**","prepublishOnly":"npm run test && npm run build","clean:dist":"rm -rf dist/*"},"ROX":{"api_version":"1.4.0"},"main":"dist/rox-browser.js","browser":"dist/rox-browser.js","module":"src/index.js","dependencies":{"lscache":"^1.1.0","rox-base":"^2.0.2"},"devDependencies":{"babel-loader":"^7.1.1","babel-plugin-transform-class-properties":"^6.24.1","babel-preset-es2015":"^6.24.1","babel-preset-react":"^6.24.1","css-loader":"^0.28.4","enquirer":"^1.0.2","eslint":"^4.3.0","eslint-plugin-react":"^7.1.0","extract-text-webpack-plugin":"^3.0.0","html-webpack-plugin":"^2.29.0","jest":"^21.2.1","prompt-confirm":"^1.2.0","react":"^15.6.1","react-dom":"^15.6.1","style-loader":"^0.18.2","uglifyjs-webpack-plugin":"1.0.0-beta.2","webpack":"^3.5.5","webpack-bundle-analyzer":"^2.8.3","webpack-dev-server":"^2.6.0"},"jest":{"browser":true,"moduleFileExtensions":["js"],"moduleDirectories":["node_modules"],"transformIgnorePatterns":["/node_modules/(?!rox-base).+\\.js$"]}}

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * lscache library
 * Copyright (c) 2011, Pamela Fox
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* jshint undef:true, browser:true, node:true */
/* global define */

(function (root, factory) {
    if (true) {
        // AMD. Register as an anonymous module.
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof module !== "undefined" && module.exports) {
        // CommonJS/Node module
        module.exports = factory();
    } else {
        // Browser globals
        root.lscache = factory();
    }
}(this, function () {

  // Prefix for all lscache keys
  var CACHE_PREFIX = 'lscache-';

  // Suffix for the key name on the expiration items in localStorage
  var CACHE_SUFFIX = '-cacheexpiration';

  // expiration date radix (set to Base-36 for most space savings)
  var EXPIRY_RADIX = 10;

  // time resolution in minutes
  var EXPIRY_UNITS = 60 * 1000;

  // ECMAScript max Date (epoch + 1e8 days)
  var MAX_DATE = Math.floor(8.64e15/EXPIRY_UNITS);

  var cachedStorage;
  var cachedJSON;
  var cacheBucket = '';
  var warnings = false;

  // Determines if localStorage is supported in the browser;
  // result is cached for better performance instead of being run each time.
  // Feature detection is based on how Modernizr does it;
  // it's not straightforward due to FF4 issues.
  // It's not run at parse-time as it takes 200ms in Android.
  function supportsStorage() {
    var key = '__lscachetest__';
    var value = key;

    if (cachedStorage !== undefined) {
      return cachedStorage;
    }

    // some browsers will throw an error if you try to access local storage (e.g. brave browser)
    // hence check is inside a try/catch
    try {
      if (!localStorage) {
        return false;
      }
    } catch (ex) {
      return false;
    }

    try {
      setItem(key, value);
      removeItem(key);
      cachedStorage = true;
    } catch (e) {
        // If we hit the limit, and we don't have an empty localStorage then it means we have support
        if (isOutOfSpace(e) && localStorage.length) {
            cachedStorage = true; // just maxed it out and even the set test failed.
        } else {
            cachedStorage = false;
        }
    }
    return cachedStorage;
  }

  // Check to set if the error is us dealing with being out of space
  function isOutOfSpace(e) {
    if (e && e.name === 'QUOTA_EXCEEDED_ERR' ||
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED' ||
            e.name === 'QuotaExceededError') {
        return true;
    }
    return false;
  }

  // Determines if native JSON (de-)serialization is supported in the browser.
  function supportsJSON() {
    /*jshint eqnull:true */
    if (cachedJSON === undefined) {
      cachedJSON = (window.JSON != null);
    }
    return cachedJSON;
  }

  /**
   * Returns a string where all RegExp special characters are escaped with a \.
   * @param {String} text
   * @return {string}
   */
  function escapeRegExpSpecialCharacters(text) {
    return text.replace(/[[\]{}()*+?.\\^$|]/g, '\\$&');
  }

  /**
   * Returns the full string for the localStorage expiration item.
   * @param {String} key
   * @return {string}
   */
  function expirationKey(key) {
    return key + CACHE_SUFFIX;
  }

  /**
   * Returns the number of minutes since the epoch.
   * @return {number}
   */
  function currentTime() {
    return Math.floor((new Date().getTime())/EXPIRY_UNITS);
  }

  /**
   * Wrapper functions for localStorage methods
   */

  function getItem(key) {
    return localStorage.getItem(CACHE_PREFIX + cacheBucket + key);
  }

  function setItem(key, value) {
    // Fix for iPad issue - sometimes throws QUOTA_EXCEEDED_ERR on setItem.
    localStorage.removeItem(CACHE_PREFIX + cacheBucket + key);
    localStorage.setItem(CACHE_PREFIX + cacheBucket + key, value);
  }

  function removeItem(key) {
    localStorage.removeItem(CACHE_PREFIX + cacheBucket + key);
  }

  function eachKey(fn) {
    var prefixRegExp = new RegExp('^' + CACHE_PREFIX + escapeRegExpSpecialCharacters(cacheBucket) + '(.*)');
    // Loop in reverse as removing items will change indices of tail
    for (var i = localStorage.length-1; i >= 0 ; --i) {
      var key = localStorage.key(i);
      key = key && key.match(prefixRegExp);
      key = key && key[1];
      if (key && key.indexOf(CACHE_SUFFIX) < 0) {
        fn(key, expirationKey(key));
      }
    }
  }

  function flushItem(key) {
    var exprKey = expirationKey(key);

    removeItem(key);
    removeItem(exprKey);
  }

  function flushExpiredItem(key) {
    var exprKey = expirationKey(key);
    var expr = getItem(exprKey);

    if (expr) {
      var expirationTime = parseInt(expr, EXPIRY_RADIX);

      // Check if we should actually kick item out of storage
      if (currentTime() >= expirationTime) {
        removeItem(key);
        removeItem(exprKey);
        return true;
      }
    }
  }

  function warn(message, err) {
    if (!warnings) return;
    if (!('console' in window) || typeof window.console.warn !== 'function') return;
    window.console.warn("lscache - " + message);
    if (err) window.console.warn("lscache - The error was: " + err.message);
  }

  var lscache = {
    /**
     * Stores the value in localStorage. Expires after specified number of minutes.
     * @param {string} key
     * @param {Object|string} value
     * @param {number} time
     */
    set: function(key, value, time) {
      if (!supportsStorage()) return;

      // If we don't get a string value, try to stringify
      // In future, localStorage may properly support storing non-strings
      // and this can be removed.

      if (!supportsJSON()) return;
      try {
        value = JSON.stringify(value);
      } catch (e) {
        // Sometimes we can't stringify due to circular refs
        // in complex objects, so we won't bother storing then.
        return;
      }

      try {
        setItem(key, value);
      } catch (e) {
        if (isOutOfSpace(e)) {
          // If we exceeded the quota, then we will sort
          // by the expire time, and then remove the N oldest
          var storedKeys = [];
          var storedKey;
          eachKey(function(key, exprKey) {
            var expiration = getItem(exprKey);
            if (expiration) {
              expiration = parseInt(expiration, EXPIRY_RADIX);
            } else {
              // TODO: Store date added for non-expiring items for smarter removal
              expiration = MAX_DATE;
            }
            storedKeys.push({
              key: key,
              size: (getItem(key) || '').length,
              expiration: expiration
            });
          });
          // Sorts the keys with oldest expiration time last
          storedKeys.sort(function(a, b) { return (b.expiration-a.expiration); });

          var targetSize = (value||'').length;
          while (storedKeys.length && targetSize > 0) {
            storedKey = storedKeys.pop();
            warn("Cache is full, removing item with key '" + key + "'");
            flushItem(storedKey.key);
            targetSize -= storedKey.size;
          }
          try {
            setItem(key, value);
          } catch (e) {
            // value may be larger than total quota
            warn("Could not add item with key '" + key + "', perhaps it's too big?", e);
            return;
          }
        } else {
          // If it was some other error, just give up.
          warn("Could not add item with key '" + key + "'", e);
          return;
        }
      }

      // If a time is specified, store expiration info in localStorage
      if (time) {
        setItem(expirationKey(key), (currentTime() + time).toString(EXPIRY_RADIX));
      } else {
        // In case they previously set a time, remove that info from localStorage.
        removeItem(expirationKey(key));
      }
    },

    /**
     * Retrieves specified value from localStorage, if not expired.
     * @param {string} key
     * @return {string|Object}
     */
    get: function(key) {
      if (!supportsStorage()) return null;

      // Return the de-serialized item if not expired
      if (flushExpiredItem(key)) { return null; }

      // Tries to de-serialize stored value if its an object, and returns the normal value otherwise.
      var value = getItem(key);
      if (!value || !supportsJSON()) {
        return value;
      }

      try {
        // We can't tell if its JSON or a string, so we try to parse
        return JSON.parse(value);
      } catch (e) {
        // If we can't parse, it's probably because it isn't an object
        return value;
      }
    },

    /**
     * Removes a value from localStorage.
     * Equivalent to 'delete' in memcache, but that's a keyword in JS.
     * @param {string} key
     */
    remove: function(key) {
      if (!supportsStorage()) return;

      flushItem(key);
    },

    /**
     * Returns whether local storage is supported.
     * Currently exposed for testing purposes.
     * @return {boolean}
     */
    supported: function() {
      return supportsStorage();
    },

    /**
     * Flushes all lscache items and expiry markers without affecting rest of localStorage
     */
    flush: function() {
      if (!supportsStorage()) return;

      eachKey(function(key) {
        flushItem(key);
      });
    },

    /**
     * Flushes expired lscache items and expiry markers without affecting rest of localStorage
     */
    flushExpired: function() {
      if (!supportsStorage()) return;

      eachKey(function(key) {
        flushExpiredItem(key);
      });
    },

    /**
     * Appends CACHE_PREFIX so lscache will partition data in to different buckets.
     * @param {string} bucket
     */
    setBucket: function(bucket) {
      cacheBucket = bucket;
    },

    /**
     * Resets the string being appended to CACHE_PREFIX so lscache will use the default storage behavior.
     */
    resetBucket: function() {
      cacheBucket = '';
    },

    /**
     * Sets whether to display warnings when an item is removed from the cache or not.
     */
    enableWarnings: function(enabled) {
      warnings = enabled;
    }
  };

  // Return the module
  return lscache;
}));


/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return defaultSetupOptions; });
var defaultSetupOptions = {
  distinctId: null,
  version: '0',
  configurationFetchedHandler: function configurationFetchedHandler() {},
  flagImpressionHandler: null,
  devModeSecret: null
};

/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getDefaultCustomProperties;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rox_base__ = __webpack_require__(1);

var CustomProperty = __WEBPACK_IMPORTED_MODULE_0_rox_base__["a" /* default */].Entities.CustomProperty;


function getDefaultCustomProperties(deviceProps) {
  var _props = deviceProps.getProperties();
  return [new CustomProperty('rox.app_release', String, _props.app_release), new CustomProperty('rox.platform', String, _props.platform), new CustomProperty('rox.screen_width', Number, _props.screen_width), new CustomProperty('rox.screen_height', Number, _props.screen_height), new CustomProperty('rox.language', String, _props.language), new CustomProperty('rox.distinct_id', String, _props.distinct_id)];
}

/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__FreezeOptions__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rox_base__ = __webpack_require__(1);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var BaseRemoteConfiguration = __WEBPACK_IMPORTED_MODULE_1_rox_base__["a" /* default */].Entities.Configuration;
var RoxxParser = __WEBPACK_IMPORTED_MODULE_1_rox_base__["a" /* default */].Parsers.RoxxParser;


var parser = new RoxxParser();

var BrowserRemoteConfiguration = function (_BaseRemoteConfigurat) {
  _inherits(BrowserRemoteConfiguration, _BaseRemoteConfigurat);

  function BrowserRemoteConfiguration(defaultValue) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        freeze = _ref.freeze;

    _classCallCheck(this, BrowserRemoteConfiguration);

    var _this = _possibleConstructorReturn(this, (BrowserRemoteConfiguration.__proto__ || Object.getPrototypeOf(BrowserRemoteConfiguration)).call(this, defaultValue));

    Object.defineProperty(_this, '_frozen', {
      value: false,
      writable: true,
      enumerable: false
    });

    if (freeze && !Object(__WEBPACK_IMPORTED_MODULE_0__FreezeOptions__["d" /* isFreezeOptionValid */])(freeze)) {
      throw new Error('Freeze option is invalid ' + freeze);
    }
    _this._localFreeze = freeze;
    return _this;
  }

  _createClass(BrowserRemoteConfiguration, [{
    key: 'unfreeze',
    value: function unfreeze() {
      this._frozen = false;
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      if (this._freeze === __WEBPACK_IMPORTED_MODULE_0__FreezeOptions__["b" /* freezeOptions */].freezeOptionNone) {
        if (this.condition) {
          this.value = parser.evaluateExpression(this.condition);
        }
        return this._value;
      }

      if (!this._frozen) {
        if (this.condition) {
          this.value = parser.evaluateExpression(this.condition);
        }
        this._frozen = true;
      }

      return this._value;
    }
  }, {
    key: 'value',
    set: function set(newValue) {
      if (this._type !== (typeof newValue === 'undefined' ? 'undefined' : _typeof(newValue)) || newValue === undefined) {
        this._value = this._defaultValue;
        return;
      }

      this._value = newValue;
      this._frozen = false;
    }
  }, {
    key: '_freeze',
    get: function get() {
      return this._localFreeze || Object(__WEBPACK_IMPORTED_MODULE_0__FreezeOptions__["c" /* getDefaultFreezeOption */])() || __WEBPACK_IMPORTED_MODULE_0__FreezeOptions__["a" /* defaultFreezeOptionForPlatform */];
    }
  }]);

  return BrowserRemoteConfiguration;
}(BaseRemoteConfiguration);

/* harmony default export */ __webpack_exports__["a"] = (BrowserRemoteConfiguration);

/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Variant__ = __webpack_require__(39);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var RoxFlag = function (_Variant) {
  _inherits(RoxFlag, _Variant);

  function RoxFlag() {
    var defaultValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var options = arguments[1];

    _classCallCheck(this, RoxFlag);

    var _this = _possibleConstructorReturn(this, (RoxFlag.__proto__ || Object.getPrototypeOf(RoxFlag)).call(this, defaultValue ? 'true' : 'false', ['false', 'true'], options));

    _this._entityType = 'flag';
    return _this;
  }

  _createClass(RoxFlag, [{
    key: 'isEnabled',
    value: function isEnabled() {
      return this._normalizeValue(this.getValue());
    }
  }, {
    key: '_normalizeValue',
    value: function _normalizeValue(value) {
      if (typeof value === 'boolean') return value;
      return value === 'true';
    }
  }]);

  return RoxFlag;
}(__WEBPACK_IMPORTED_MODULE_0__Variant__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (RoxFlag);

/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = open;
/* unused harmony export close */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rox_base__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Overrider__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__uiUtils__ = __webpack_require__(109);

var flagsRepo = __WEBPACK_IMPORTED_MODULE_0_rox_base__["a" /* default */].Repositories.Flags;






var _root = void 0;
var _position = void 0;
var _filter = void 0;
var _flags = void 0;

var RESET_ALL_TEXT = 'Reset All Overrides';
var SEARCH_PLACEHOLDER = 'Search Flags';
var TITLE = 'ROX Overrides';
var ORIGINAL_VALUE_TEXT = 'Original value';
var ORIGINAL_OPTION_PREFIX = 'Original';
var DEFAULT_POSITON = 'bottom right';
var CSS = 'https://connect.rollout.io/rox.browser.css';
var POSITIONS = {
  'top left': { top: 0, left: 0 },
  'top right': { top: 0, right: 0 },
  'bottom left': { bottom: 0, left: 0 },
  'bottom right': { bottom: 0, right: 0 }
};

var ROOT_STYLE = {
  background: 'white',
  'z-index': 999999,
  position: 'fixed',
  width: '400px',
  height: '600px',
  overflow: 'auto'
};

var getVariantsCategories = function getVariantsCategories() {
  return flagsRepo.items.map(function (i) {
    return i.dump();
  }).filter(function (f) {
    return _filter ? f.name.match(_filter) : f;
  }).reduce(function (agg, f) {
    agg[f.nameDetails.namespace] ? null : agg[f.nameDetails.namespace] = [];
    agg[f.nameDetails.namespace].push(f);
    return agg;
  }, {});
};

var option = function option(_ref) {
  var value = _ref.value,
      text = _ref.text,
      selected = _ref.selected;

  var el = document.createElement('option');
  selected && el.setAttribute('selected', true);
  el.setAttribute('value', value);
  el.textContent = text;
  return el;
};

var getSelected = function getSelected(_ref2) {
  var originalValue = _ref2.originalValue,
      overridingValue = _ref2.overridingValue,
      option = _ref2.option;

  if (overridingValue) {
    return overridingValue === option;
  } else {
    return originalValue === option;
  }
};

var getFlagOptions = function getFlagOptions() {
  var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { options: [] },
      options = _ref3.options,
      originalValue = _ref3.originalValue,
      overridingValue = _ref3.overridingValue;

  return options.map(function (i) {
    return {
      text: i === originalValue ? ORIGINAL_OPTION_PREFIX + ' (' + i + ')' : i,
      value: i,
      selected: getSelected({ originalValue: originalValue, overridingValue: overridingValue, option: i })
    };
  });
};

var applyRootStyle = function applyRootStyle(el) {
  return Object(__WEBPACK_IMPORTED_MODULE_2__uiUtils__["l" /* setStyle */])(el, Object(__WEBPACK_IMPORTED_MODULE_2__uiUtils__["e" /* compileStyles */])(ROOT_STYLE) + ';' + Object(__WEBPACK_IMPORTED_MODULE_2__uiUtils__["e" /* compileStyles */])(POSITIONS[_position]));
};

var makeFlagTitle = function makeFlagTitle(_ref4) {
  var name = _ref4.name,
      originalValue = _ref4.originalValue,
      overridingValue = _ref4.overridingValue;
  return Object(__WEBPACK_IMPORTED_MODULE_2__uiUtils__["g" /* divWithChildren */])([Object(__WEBPACK_IMPORTED_MODULE_2__uiUtils__["h" /* divWithText */])(name), overridingValue ? Object(__WEBPACK_IMPORTED_MODULE_2__uiUtils__["f" /* compose */])(Object(__WEBPACK_IMPORTED_MODULE_2__uiUtils__["a" /* applyClass */])('roxFlagSub'), __WEBPACK_IMPORTED_MODULE_2__uiUtils__["h" /* divWithText */])(ORIGINAL_VALUE_TEXT + ': ' + originalValue) : undefined]);
};

var makeCategory = function makeCategory(categories, category) {
  return Object(__WEBPACK_IMPORTED_MODULE_2__uiUtils__["g" /* divWithChildren */])([Object(__WEBPACK_IMPORTED_MODULE_2__uiUtils__["f" /* compose */])(Object(__WEBPACK_IMPORTED_MODULE_2__uiUtils__["a" /* applyClass */])('roxNamespace'), __WEBPACK_IMPORTED_MODULE_2__uiUtils__["h" /* divWithText */])(category), Object(__WEBPACK_IMPORTED_MODULE_2__uiUtils__["f" /* compose */])(Object(__WEBPACK_IMPORTED_MODULE_2__uiUtils__["a" /* applyClass */])('roxFlagsList'), __WEBPACK_IMPORTED_MODULE_2__uiUtils__["g" /* divWithChildren */])(categories[category].map(makeFlag))]);
};
var makeCategories = function makeCategories(categories) {
  return Object.keys(categories).map(makeCategory.bind(null, categories));
};

var makeFlag = function makeFlag(_ref5) {
  var name = _ref5.name,
      nameDetails = _ref5.nameDetails,
      originalValue = _ref5.originalValue,
      overridingValue = _ref5.overridingValue,
      options = _ref5.options;
  return Object(__WEBPACK_IMPORTED_MODULE_2__uiUtils__["f" /* compose */])(Object(__WEBPACK_IMPORTED_MODULE_2__uiUtils__["a" /* applyClass */])('roxPushAside roxFlag'), __WEBPACK_IMPORTED_MODULE_2__uiUtils__["g" /* divWithChildren */])([makeFlagTitle({ name: nameDetails.name, originalValue: originalValue, overridingValue: overridingValue }), selection(name, originalValue, getFlagOptions({ options: options, originalValue: originalValue, overridingValue: overridingValue }))]);
};

var header = Object(__WEBPACK_IMPORTED_MODULE_2__uiUtils__["f" /* compose */])(Object(__WEBPACK_IMPORTED_MODULE_2__uiUtils__["a" /* applyClass */])('roxPushAside roxTitle'), __WEBPACK_IMPORTED_MODULE_2__uiUtils__["g" /* divWithChildren */])([Object(__WEBPACK_IMPORTED_MODULE_2__uiUtils__["k" /* elementWithText */])('span', TITLE), Object(__WEBPACK_IMPORTED_MODULE_2__uiUtils__["c" /* attachOnClickHandler */])(Object(__WEBPACK_IMPORTED_MODULE_2__uiUtils__["k" /* elementWithText */])('a', '╳'), close)]);

var handleSearchChange = function handleSearchChange(_ref6) {
  var target = _ref6.target,
      keyCode = _ref6.keyCode;

  keyCode === 27 ? (target.value = '', _filter = null) : _filter = target.value;
  render();
};

var search = Object(__WEBPACK_IMPORTED_MODULE_2__uiUtils__["d" /* attachOnKeyUpHandler */])(Object(__WEBPACK_IMPORTED_MODULE_2__uiUtils__["i" /* elementWithAttrs */])('input', {
  placeholder: SEARCH_PLACEHOLDER
}), handleSearchChange);

var onResetAllClicked = function onResetAllClicked() {
  return Object(__WEBPACK_IMPORTED_MODULE_1__Overrider__["clearAllOverrides"])(), render();
};
var resetAllAction = Object(__WEBPACK_IMPORTED_MODULE_2__uiUtils__["c" /* attachOnClickHandler */])(Object(__WEBPACK_IMPORTED_MODULE_2__uiUtils__["k" /* elementWithText */])('a', RESET_ALL_TEXT), onResetAllClicked);

var onFlagChange = function onFlagChange(name, originalValue) {
  return function (e) {
    return e.preventDefault(), originalValue === e.target.value ? Object(__WEBPACK_IMPORTED_MODULE_1__Overrider__["clearOverride"])(name) : Object(__WEBPACK_IMPORTED_MODULE_1__Overrider__["setOverride"])(name, e.target.value), render();
  };
};

var selection = function selection(name, originalValue) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  return Object(__WEBPACK_IMPORTED_MODULE_2__uiUtils__["b" /* attachOnChangeHandler */])(Object(__WEBPACK_IMPORTED_MODULE_2__uiUtils__["j" /* elementWithChildren */])('select', options.map(option)), onFlagChange(name, originalValue));
};

var searchFieldWrapper = Object(__WEBPACK_IMPORTED_MODULE_2__uiUtils__["f" /* compose */])(Object(__WEBPACK_IMPORTED_MODULE_2__uiUtils__["a" /* applyClass */])('roxSearch roxPushAside'), __WEBPACK_IMPORTED_MODULE_2__uiUtils__["g" /* divWithChildren */])([search, resetAllAction]);

var getFlagsView = function getFlagsView() {
  return Object(__WEBPACK_IMPORTED_MODULE_2__uiUtils__["f" /* compose */])(Object(__WEBPACK_IMPORTED_MODULE_2__uiUtils__["a" /* applyClass */])('roxFlags'), __WEBPACK_IMPORTED_MODULE_2__uiUtils__["g" /* divWithChildren */])(makeCategories(getVariantsCategories()));
};

function render() {
  _root.removeChild(_flags);
  _flags = getFlagsView();
  _root.appendChild(_flags);
}

function open() {
  var position = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_POSITON;

  if (_root) return;
  if (Object.keys(POSITIONS).indexOf(position) === -1) position = DEFAULT_POSITON;
  _position = position;

  _flags = getFlagsView();

  _root = Object(__WEBPACK_IMPORTED_MODULE_2__uiUtils__["f" /* compose */])(Object(__WEBPACK_IMPORTED_MODULE_2__uiUtils__["a" /* applyClass */])('roxDbg'), applyRootStyle, __WEBPACK_IMPORTED_MODULE_2__uiUtils__["g" /* divWithChildren */])([Object(__WEBPACK_IMPORTED_MODULE_2__uiUtils__["g" /* divWithChildren */])([header, searchFieldWrapper]), _flags]);

  var body = document.getElementsByTagName('body')[0];
  body.appendChild(Object(__WEBPACK_IMPORTED_MODULE_2__uiUtils__["i" /* elementWithAttrs */])('link', {
    href: 'https://fonts.googleapis.com/css?family=Lato',
    rel: 'stylesheet'
  }));
  body.appendChild(Object(__WEBPACK_IMPORTED_MODULE_2__uiUtils__["i" /* elementWithAttrs */])('link', {
    href: CSS,
    rel: 'stylesheet'
  }));

  body.appendChild(_root);
  render();
}

function close() {
  var body = document.getElementsByTagName('body')[0];
  body.removeChild(_root);
  _root = undefined;
}

/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["f"] = compose;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return compileStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return setStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return applyClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return attachOnChangeHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return attachOnClickHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return attachOnKeyUpHandler; });
/* unused harmony export appendChildren */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return elementWithText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return elementWithAttrs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return elementWithChildren; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return divWithText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return divWithChildren; });
function compose() {
  var fns = arguments;

  return function (result) {
    for (var i = fns.length - 1; i > -1; i--) {
      result = fns[i].call(this, result);
    }

    return result;
  };
}

var compileStyles = function compileStyles() {
  var styles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return Object.keys(styles).map(function (key) {
    return key + ': ' + styles[key];
  }).join(';');
};

var setStyle = function setStyle(node) {
  var styleString = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return node.setAttribute('style', styleString), node;
};
var applyClass = function applyClass(className) {
  return function (node) {
    return node.setAttribute('class', className), node;
  };
};

var attachEvent = function attachEvent(node, event, fn) {
  return node.addEventListener(event, fn), node;
};
var attachOnChangeHandler = function attachOnChangeHandler(node, fn) {
  return attachEvent(node, 'change', fn);
};
var attachOnClickHandler = function attachOnClickHandler(node, fn) {
  return attachEvent(node, 'click', fn);
};
var attachOnKeyUpHandler = function attachOnKeyUpHandler(node, fn) {
  return attachEvent(node, 'keyup', fn);
};

var appendChildren = function appendChildren(node) {
  var children = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return children.reduce(function (node, ch) {
    return ch ? node.appendChild(ch) && node : node;
  }, node);
};

var elementWithText = function elementWithText() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'div';
  var text = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  var el = document.createElement(name);
  el.textContent = text;
  return el;
};
var elementWithAttrs = function elementWithAttrs() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'div';
  var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var el = document.createElement(name);
  Object.keys(attrs).forEach(function (key) {
    return el.setAttribute(key, attrs[key]);
  });
  return el;
};
var elementWithChildren = function elementWithChildren() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'div';
  var children = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return appendChildren(document.createElement(name), children);
};

var divWithText = elementWithText.bind(document, 'div');
var divWithChildren = function divWithChildren() {
  var children = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return elementWithChildren('div', children);
};

/***/ })
/******/ ])["default"];
});
//# sourceMappingURL=rox-browser.js.map
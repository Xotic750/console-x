import defineProperties from 'object-define-properties-x';
import defineProperty from 'object-define-property-x';
import isPrimitive from 'is-primitive';
import isFunction from 'is-function-x';
import forEach from 'array-for-each-x';
import assert from 'assert-x';
import inspect from 'inspect-x';
import slice from 'array-slice-x';
import hasOwn from 'has-own-property-x';
import format from 'util-format-x';
import { MapConstructor } from 'collections-x';
import safeToString from 'to-string-symbols-supported-x';
import objectKeys from 'object-keys-x';
import toISOString from 'to-iso-string-x';
import includes from 'array-includes';
import { create } from 'error-x';
var properties = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'];
var Trace = create('Trace');
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

if (typeof console !== 'undefined' && isPrimitive(console) === false) {
  var apply = Function.prototype.apply;
  forEach(properties, function assigner1(property) {
    if (hasOwn(console, property)) {
      var method = console[property];
      var fn;

      if (isPrimitive(method) === false) {
        // noinspection JSUnusedLocalSymbols
        var f
        /* eslint-disable-line no-unused-vars */
        = function _f(context, args) {
          try {
            return apply.call(method, context, slice(args));
          } catch (ignore) {} // empty

          /* eslint-disable-next-line no-void */


          return void 0;
        };
        /* eslint-disable-next-line no-eval */


        fn = eval("(0,function ".concat(property, "(){return f(this,arguments);})"));
      }

      if (isFunction(fn)) {
        defineProperty(con, property, {
          value: fn
        });
      }
    }
  });
}

var times = new MapConstructor();
var shams = defineProperties({}, {
  consoleAssert: {
    enumerable: true,
    value: function consoleAssert() {
      /* eslint-disable-next-line prefer-rest-params */
      var expression = arguments[0];

      if (Boolean(expression) === false) {
        /* eslint-disable-next-line prefer-rest-params,prefer-spread */
        assert.ok(false, format.apply(null, slice(arguments, 1)));
      }
    }
  },
  dir: {
    enumerable: true,
    value: function dir() {
      if (arguments.length > 0) {
        /* eslint-disable-next-line prefer-rest-params */
        this.log("".concat(inspect(arguments[0]), "\n"));
      } else {
        this.log();
      }
    }
  },
  error: {
    enumerable: true,
    value: function error() {
      /* eslint-disable-next-line prefer-rest-params,prefer-spread */
      this.warn.apply(this, slice(arguments));
    }
  },
  info: {
    enumerable: true,
    value: function info() {
      /* eslint-disable-next-line prefer-rest-params,prefer-spread */
      this.log.apply(this, slice(arguments));
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

      if (includes(properties, type)) {
        var stampStr = format('[%s] [%s]', toISOString(new Date()), type);
        /* eslint-disable-next-line prefer-rest-params,prefer-spread */

        this[type].apply(this, [stampStr].concat(slice(arguments, 1)));
      }
    }
  },
  time: {
    enumerable: true,
    value: function time() {
      /* eslint-disable-next-line prefer-rest-params */
      var label = arguments.length > 0 ? safeToString(arguments[0]) : 'default';
      times.set(label, new Date().getTime());
    }
  },
  timeEnd: {
    enumerable: true,
    value: function timeEnd() {
      /* eslint-disable-next-line prefer-rest-params */
      var label = arguments.length > 0 ? safeToString(arguments[0]) : 'default';
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
      /* eslint-disable-next-line prefer-rest-params,prefer-spread */
      this.error(new Trace(format.apply(null, slice(arguments))));
    }
  },
  warn: {
    enumerable: true,
    value: function warn() {
      /* eslint-disable-next-line prefer-rest-params,prefer-spread */
      this.log.apply(this, slice(arguments));
    }
  }
});
forEach(objectKeys(shams), function assigner2(key) {
  if (hasOwn(con, key) === false) {
    defineProperty(con, key, {
      value: shams[key]
    });
  }
});
forEach(properties, function assigner3(property) {
  if (hasOwn(con, property) === false) {
    defineProperty(con, property, {
      /* eslint-disable-next-line lodash/prefer-noop */
      value: function value() {}
    });
  }
});
export default con;

//# sourceMappingURL=cross-console-x.esm.js.map
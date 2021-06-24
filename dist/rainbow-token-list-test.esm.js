import { string, record, enum as enum$1, object, boolean, number, union, any } from 'zod';
import { filter as filter$1, matchesProperty as matchesProperty$1, merge, uniq, compact as compact$1, pick as pick$1, some, find, keyBy, toLower } from 'lodash-es';
import filter from 'lodash-es/filter';
import matchesProperty from 'lodash-es/matchesProperty';
import partition from 'lodash-es/partition';
import isPlainObject from 'lodash-es/isPlainObject';
import isString from 'lodash-es/isString';
import mapValues from 'lodash-es/mapValues';
import pick from 'lodash-es/pick';
import mkdirp from 'mkdirp';
import { promises } from 'graceful-fs';
import { resolve } from 'path';
import degit from 'degit';
import { tmpdir } from 'os';
import pLimit from 'p-limit';
import { getAddress } from '@ethersproject/address';
import mapKeys from 'lodash-es/mapKeys';
import isEmpty from 'lodash-es/isEmpty';
import compact from 'lodash-es/compact';
import unionBy from 'lodash-es/unionBy';
import getSVGColors from 'get-svg-colors';
import makeColorMoreChill from 'make-color-more-chill';
import fetch from 'node-fetch';

/**
 * @fileoverview
 *
 * Customizing the subdirectory structure and so on was incompatible with
 * isomorphic git and was dropped.
 */
var PRODUCTION = process.env.NODE_ENV === 'production';
var CONTRACT_MAP_REPO = 'metamask/eth-contract-metadata';
var ETHEREUM_LISTS_REPO = 'ethereum-lists/tokens/tokens/eth';
var TokenListItemSchema = /*#__PURE__*/string().url().nonempty();
var TokenListTypeSchema = /*#__PURE__*/record(TokenListItemSchema);
var TOKEN_LISTS = {
  aave: 'https://tokenlist.aave.eth.link',
  coingecko: 'https://tokens.coingecko.com/uniswap/all.json',
  dharma: 'https://tokenlist.dharma.eth.link',
  kleros: 'http://t2crtokens.eth.link',
  roll: 'https://app.tryroll.com/tokens.json',
  synthetix: 'https://synths.snx.eth.link',
  wrapped: 'http://wrapped.tokensoft.eth.link'
};
var TokenListEnumSchema = /*#__PURE__*/enum$1(['aave', 'coingecko', 'dharma', 'kleros', 'roll', 'synthetix', 'wrapped']);
var SocialSchema = /*#__PURE__*/object({
  blog: /*#__PURE__*/string().optional(),
  chat: /*#__PURE__*/string().optional(),
  discord: /*#__PURE__*/string().optional(),
  facebook: /*#__PURE__*/string().optional(),
  forum: /*#__PURE__*/string().optional(),
  github: /*#__PURE__*/string().optional(),
  gitter: /*#__PURE__*/string().optional(),
  instagram: /*#__PURE__*/string().optional(),
  linkedin: /*#__PURE__*/string().optional(),
  medium: /*#__PURE__*/string().optional(),
  reddit: /*#__PURE__*/string().optional(),
  slack: /*#__PURE__*/string().optional(),
  telegram: /*#__PURE__*/string().optional(),
  twitter: /*#__PURE__*/string().optional(),
  youtube: /*#__PURE__*/string().optional()
});
var TokenDeprecationSchema = /*#__PURE__*/object({
  new_address: /*#__PURE__*/string().optional()
});
var TokenExtensionsSchema = /*#__PURE__*/object({
  color: /*#__PURE__*/string().optional(),
  isRainbowCurated: /*#__PURE__*/boolean().optional(),
  isVerified: /*#__PURE__*/boolean().optional(),
  shadowColor: /*#__PURE__*/string().optional()
});
var TokenSchema = /*#__PURE__*/object({
  address: /*#__PURE__*/string().regex(/^0x[a-fA-F0-9]{40}$/),
  chainId: /*#__PURE__*/number().optional(),
  decimals: /*#__PURE__*/number().min(0),
  deprecation: /*#__PURE__*/TokenDeprecationSchema.optional(),
  extensions: /*#__PURE__*/TokenExtensionsSchema.optional(),
  name: /*#__PURE__*/string(),
  social: /*#__PURE__*/SocialSchema.optional(),
  symbol: /*#__PURE__*/string(),
  website: /*#__PURE__*/string().optional()
});
/**
 * Raw token data that is loaded from the JSON files.
 */

var RawContractMapTokenSchema = /*#__PURE__*/object({
  address: /*#__PURE__*/string(),
  decimals: /*#__PURE__*/union([/*#__PURE__*/string(), /*#__PURE__*/number()]),
  name: /*#__PURE__*/string(),
  symbol: /*#__PURE__*/string()
});
/**
 * Raw token data that is loaded from the JSON files.
 */

var RawEthereumListsTokenSchema = /*#__PURE__*/object({
  address: /*#__PURE__*/string().optional(),
  decimals: /*#__PURE__*/union([string(), number()]).optional(),
  deprecation: /*#__PURE__*/TokenDeprecationSchema.optional(),
  name: /*#__PURE__*/string().optional(),
  social: /*#__PURE__*/SocialSchema.optional(),
  symbol: /*#__PURE__*/string().optional(),
  website: /*#__PURE__*/string().optional()
});

var constants = {
  __proto__: null,
  PRODUCTION: PRODUCTION,
  CONTRACT_MAP_REPO: CONTRACT_MAP_REPO,
  ETHEREUM_LISTS_REPO: ETHEREUM_LISTS_REPO,
  TokenListItemSchema: TokenListItemSchema,
  TokenListTypeSchema: TokenListTypeSchema,
  TOKEN_LISTS: TOKEN_LISTS,
  TokenListEnumSchema: TokenListEnumSchema,
  SocialSchema: SocialSchema,
  TokenDeprecationSchema: TokenDeprecationSchema,
  TokenExtensionsSchema: TokenExtensionsSchema,
  TokenSchema: TokenSchema,
  RawContractMapTokenSchema: RawContractMapTokenSchema,
  RawEthereumListsTokenSchema: RawEthereumListsTokenSchema
};

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var runtime_1 = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined$1; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined$1) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined$1;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined$1;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined$1;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined$1, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined$1;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined$1;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined$1;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined$1;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined$1;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   module.exports 
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}
});

var isError = function isError(error) {
  return typeof error.message !== 'undefined' && typeof error.code !== 'undefined';
};
var formattedError = function formattedError(error) {
  return isError(error) ? error.message : error;
};

/**
 * Reads and parses a JSON file. Throws an error if the file could not be read or if the JSON is invalid.
 *
 * @param {string} file
 * @return {Promise<T>}
 * @template T
 */

var parseJsonFile = /*#__PURE__*/function () {
  var _ref = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee(file) {
    var json;
    return runtime_1.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return promises.readFile(file, 'utf8');

          case 3:
            json = _context.sent;
            return _context.abrupt("return", JSON.parse(json));

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            throw new Error("Failed to parse file " + file + ": " + formattedError(_context.t0));

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));

  return function parseJsonFile(_x) {
    return _ref.apply(this, arguments);
  };
}();
/**
 * Validate raw token data, by checking if the required values are set and if the decimals are larger than or equal to
 * zero. This will strip any unknown fields and rename the 'decimals' field to 'decimal' for compatibility.
 *
 * @param {RawEthereumListsToken} token
 * @return {boolean}
 */

var validateTokenData = function validateTokenData(token) {
  var normalizedTokenData = _extends({}, pick(token, Object.keys(RawEthereumListsTokenSchema.shape)), {
    deprecation: pick(token.deprecation, Object.keys(TokenDeprecationSchema.shape)),
    social: pick(token.social, Object.keys(SocialSchema.shape))
  });

  var validToken = TokenSchema.parse(normalizedTokenData);
  var validSocial = SocialSchema.parse(normalizedTokenData.social);
  return _extends({}, validToken, {
    social: validSocial
  });
};
/**
 * Sort tokens alphabetically by symbol.
 *
 * @param {Token[]} tokens
 * @return {Token[]}
 */

var sortTokens = function sortTokens(tokens) {
  return tokens.sort(function (a, b) {
    return a.symbol.localeCompare(b.symbol);
  });
};
/**
 * Creates the output folder if it does not exist yet.
 *
 * @param {string} path
 * @return {Promise<void>}
 */

var createOutputFolder = /*#__PURE__*/function () {
  var _ref2 = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee2(path) {
    return runtime_1.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return promises.access(path);

          case 3:
            _context2.next = 11;
            break;

          case 5:
            _context2.prev = 5;
            _context2.t0 = _context2["catch"](0);

            if (!isError(_context2.t0)) {
              _context2.next = 11;
              break;
            }

            if (!(_context2.t0.code !== 'ENOENT')) {
              _context2.next = 10;
              break;
            }

            throw new Error("Failed to create output folder: " + formattedError(_context2.t0));

          case 10:
            mkdirp.sync(path);

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 5]]);
  }));

  return function createOutputFolder(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

function mapValuesDeep(v, callback) {
  return isPlainObject(v) ? mapValues(v, function (v) {
    return mapValuesDeep(v, callback);
  }) : callback(v);
}
/**
 * Recursively loop through an token's values and `trim()` any values which are strings.
 *
 * @param {Token} token
 * @return {Token}
 */


var deeplyTrimAllTokenStrings = function deeplyTrimAllTokenStrings(token) {
  return mapValuesDeep(token, function (v) {
    return isString(v) ? v.trim() : v;
  });
};
/**
 * Write the Rainbow Token List JSON file to disk.
 *
 * @param {Token[]} tokens
 * @param {string} path
 * @param {string} name
 * @return {Promise<void>}
 */

var writeToDisk = /*#__PURE__*/function () {
  var _ref3 = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee3(tokens, path, name) {
    var json;
    return runtime_1.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return createOutputFolder(path);

          case 2:
            json = JSON.stringify(tokens, null, 2);
            return _context3.abrupt("return", promises.writeFile(resolve(path, name), json, 'utf8'));

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function writeToDisk(_x3, _x4, _x5) {
    return _ref3.apply(this, arguments);
  };
}();

/**
 * Fetch a Git repository and store it in tmpdir.
 *
 * @return {Promise<void>}
 */

var fetchRepository = /*#__PURE__*/function () {
  var _ref = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee(repoUrl) {
    var tmp, emitter, userRepo, extractedAt;
    return runtime_1.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            tmp = tmpdir();
            emitter = degit(repoUrl, {
              // cache can cause problems, so disable
              cache: false,
              // overwrite existing files
              force: true,
              // use verbose mode when developing
              verbose: !PRODUCTION
            });

            if (!PRODUCTION) {
              emitter.on('info', function (info) {
                return console.log(info.message);
              });
            }

            userRepo = repoUrl.split('/').slice(0, 2).join('/');
            extractedAt = resolve(tmp, userRepo);
            console.log("Fetching " + repoUrl);
            _context.next = 8;
            return emitter.clone(extractedAt);

          case 8:
            console.log('Success.');
            return _context.abrupt("return", extractedAt);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function fetchRepository(_x) {
    return _ref.apply(this, arguments);
  };
}();

function mapDir(_x) {
  return _mapDir.apply(this, arguments);
}

function _mapDir() {
  _mapDir = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee3(_ref) {
    var dir, fileMap, _ref$limit, limit, pool, files, resultPromises, results;

    return runtime_1.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            dir = _ref.dir, fileMap = _ref.fileMap, _ref$limit = _ref.limit, limit = _ref$limit === void 0 ? 10 : _ref$limit;

            /**
             * Run in a pool to prevent EMFILE errors in serverless context.
             */
            pool = pLimit(limit);
            /**
             * Resolve dir and load files.
             */

            dir = resolve(dir);
            _context3.next = 5;
            return promises.readdir(dir);

          case 5:
            files = _context3.sent;
            resultPromises = files.map(function (file) {
              return /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee() {
                return runtime_1.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return fileMap(resolve(dir, file));

                      case 2:
                        return _context.abrupt("return", _context.sent);

                      case 3:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));
            });
            _context3.next = 9;
            return Promise.all(resultPromises.map(function (resultPromise) {
              return pool( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee2() {
                return runtime_1.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        _context2.next = 2;
                        return resultPromise();

                      case 2:
                        return _context2.abrupt("return", _context2.sent);

                      case 3:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2);
              })));
            }));

          case 9:
            results = _context3.sent;
            return _context3.abrupt("return", results);

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _mapDir.apply(this, arguments);
}

/**
 * Partition tokens array into two categories: unique vs duplicates, according to
 * their token symbol
 *
 * @param {Token[]} tokens
 * @return {Token[][]}
 */

var partitionByUniqueness = function partitionByUniqueness(tokens) {
  var _partition = partition(tokens, function (token) {
    var dups = filter(tokens, ['symbol', token.symbol]);
    return dups.length === 1;
  }),
      uniqueTokens = _partition[0],
      duplicateTokens = _partition[1];

  return [uniqueTokens, duplicateTokens];
};
/**
 * Finds deprecated tokens and replaces them with the data
 * for the latest version of the token
 *
 * @param {Token[]} tokens
 *
 * @return {Token[]}
 */

function resolveDeprecations(tokens) {
  return tokens.map(function (_ref) {
    var deprecation = _ref.deprecation,
        token = _objectWithoutPropertiesLoose(_ref, ["deprecation"]);

    return !(deprecation != null && deprecation.new_address) ? token : tokens.find(matchesProperty('address', deprecation.new_address)) || token;
  });
}
/**
 * Load the token JSON files from directory, and then validate them
 * against our token schema
 *
 * @return {Token[]}
 */

function parseEthereumListsTokenFiles(_x) {
  return _parseEthereumListsTokenFiles.apply(this, arguments);
}
/**
 * Fetch the latest commit from `ethereum-lists/tokens` repo and parse
 * the saved JSON files
 *
 * @return {Token[][]}
 */

function _parseEthereumListsTokenFiles() {
  _parseEthereumListsTokenFiles = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee2(extractedAt) {
    var fileMap, results;
    return runtime_1.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            fileMap = /*#__PURE__*/function () {
              var _ref2 = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee(file) {
                var tokenData;
                return runtime_1.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return parseJsonFile(file);

                      case 2:
                        tokenData = _context.sent;
                        return _context.abrupt("return", validateTokenData(tokenData));

                      case 4:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              return function fileMap(_x2) {
                return _ref2.apply(this, arguments);
              };
            }();

            _context2.next = 3;
            return mapDir({
              dir: extractedAt,
              fileMap: fileMap
            });

          case 3:
            results = _context2.sent;
            return _context2.abrupt("return", results);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _parseEthereumListsTokenFiles.apply(this, arguments);
}

function parseEthereumLists() {
  return _parseEthereumLists.apply(this, arguments);
}

function _parseEthereumLists() {
  _parseEthereumLists = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee3() {
    var extractedAt, tokenLists;
    return runtime_1.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return fetchRepository(ETHEREUM_LISTS_REPO);

          case 2:
            extractedAt = _context3.sent;
            _context3.next = 5;
            return parseEthereumListsTokenFiles(extractedAt).then(resolveDeprecations).then(partitionByUniqueness);

          case 5:
            tokenLists = _context3.sent;
            return _context3.abrupt("return", tokenLists);

          case 7:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _parseEthereumLists.apply(this, arguments);
}

var eth = {
	color: "#29292E",
	isCurated: true,
	name: "Ethereum"
};
var overrides = {
	eth: eth,
	"0xaa6e8127831c9de45ae56bb1b0d4d4da6e5665bd": {
	color: "#29292E",
	isCurated: true,
	name: "2x Leveraged ETH",
	symbol: "ETH2XFLI"
},
	"0xE41d2489571d322189246DaFA5ebDe1F4699F498": {
	color: "#29292E",
	isCurated: true,
	name: "0x"
},
	"0x111111111117dc0aa78b770fa6a738034120c302": {
	color: "#21324D",
	isCurated: true,
	name: "1inch"
},
	"0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9": {
	color: "#7285B2",
	isCurated: true,
	name: "Aave",
	symbol: "AAVE"
},
	"0xba3D9687Cf50fE253cd2e1cFeEdE1d6787344Ed5": {
	color: "#7285B2",
	name: "Aave v1 AAVE",
	shadowColor: "#7285B2",
	symbol: "aAAVE"
},
	"0xE1BA0FB44CCb0D11b80F92f4f8Ed94CA3fF51D00": {
	color: "#FF5000",
	name: "Aave v1 BAT",
	shadowColor: "#7285B2",
	symbol: "aBAT"
},
	"0x6Ee0f7BB50a54AB5253dA0667B0Dc2ee526C30a8": {
	color: "#F3BA2F",
	name: "Aave v1 BUSD",
	shadowColor: "#7285B2",
	symbol: "aBUSD"
},
	"0xfC1E690f61EFd961294b3e1Ce3313fBD8aa4f85d": {
	color: "#F0B340",
	name: "Aave v1 DAI",
	shadowColor: "#7285B2",
	symbol: "aDAI"
},
	"0x712DB54daA836B53Ef1EcBb9c6ba3b9Efb073F40": {
	color: "#25292E",
	name: "Aave v1 ENJ",
	shadowColor: "#7285B2",
	symbol: "aENJ"
},
	"0x3a3A65aAb0dd2A17E3F1947bA16138cd37d08c04": {
	color: "#25292E",
	name: "Aave v1 ETH",
	shadowColor: "#7285B2",
	symbol: "aETH"
},
	"0x9D91BE44C06d373a8a226E1f3b146956083803eB": {
	color: "#31CB9E",
	name: "Aave v1 KNC",
	shadowColor: "#7285B2",
	symbol: "aKNC"
},
	"0x7D2D3688Df45Ce7C552E19c27e007673da9204B8": {
	color: "#109FCA",
	name: "Aave v1 LEND",
	shadowColor: "#7285B2",
	symbol: "aLEND"
},
	"0xA64BD6C70Cb9051F6A9ba1F163Fdc07E0DfB5F84": {
	color: "#1A56F0",
	name: "Aave v1 LINK",
	shadowColor: "#7285B2",
	symbol: "aLINK"
},
	"0x6FCE4A401B6B80ACe52baAefE4421Bd188e76F6f": {
	color: "#FF2D55",
	name: "Aave v1 MANA",
	shadowColor: "#7285B2",
	symbol: "aMANA"
},
	"0x7deB5e830be29F91E298ba5FF1356BB7f8146998": {
	color: "#1AAB9B",
	name: "Aave v1 MKR",
	shadowColor: "#7285B2",
	symbol: "aMKR"
},
	"0x69948cC03f478B95283F7dbf1CE764d0fc7EC54C": {
	color: "#00224D",
	name: "Aave v1 REN",
	shadowColor: "#7285B2",
	symbol: "aREN"
},
	"0x71010A9D003445aC60C4e6A7017c1E89A477B438": {
	color: "#25292E",
	name: "Aave v1 REP",
	shadowColor: "#7285B2",
	symbol: "aREP"
},
	"0x328C4c80BC7aCa0834Db37e6600A6c49E12Da4DE": {
	color: "#25292E",
	name: "Aave v1 SNX",
	shadowColor: "#7285B2",
	symbol: "aSNX"
},
	"0x625aE63000f46200499120B906716420bd059240": {
	color: "#25292E",
	name: "Aave v1 sUSD",
	shadowColor: "#7285B2",
	symbol: "aSUSD"
},
	"0x4DA9b813057D04BAef4e5800E36083717b4a0341": {
	color: "#002868",
	name: "Aave v1 TUSD",
	shadowColor: "#7285B2",
	symbol: "aTUSD"
},
	"0xB124541127A0A657f056D9Dd06188c4F1b0e5aab": {
	color: "#FD017A",
	name: "Aave v1 UNI",
	shadowColor: "#7285B2",
	symbol: "aUNI"
},
	"0x9bA00D6856a4eDF4665BcA2C2309936572473B7E": {
	color: "#2775CA",
	name: "Aave v1 USDC",
	shadowColor: "#7285B2",
	symbol: "aUSDC"
},
	"0x71fc860F7D3A592A4a98740e39dB31d25db65ae8": {
	color: "#22A079",
	name: "Aave v1 USDT",
	shadowColor: "#7285B2",
	symbol: "aUSDT"
},
	"0xFC4B8ED459e00e5400be803A9BB3954234FD50e3": {
	color: "#FF9900",
	name: "Aave v1 WBTC",
	shadowColor: "#7285B2",
	symbol: "aWBTC"
},
	"0x12e51E77DAAA58aA0E9247db7510Ea4B46F9bEAd": {
	color: "#0072F6",
	name: "Aave v1 YFI",
	shadowColor: "#7285B2",
	symbol: "aYFI"
},
	"0x6Fb0855c404E09c47C3fBCA25f08d4E41f9F062f": {
	color: "#25292E",
	name: "Aave v1 ZRX",
	shadowColor: "#7285B2",
	symbol: "aZRX"
},
	"0xFFC97d72E13E01096502Cb8Eb52dEe56f74DAD7B": {
	color: "#7285B2",
	name: "Aave AAVE",
	shadowColor: "#7285B2",
	symbol: "aAAVE"
},
	"0x05Ec93c0365baAeAbF7AefFb0972ea7ECdD39CF1": {
	color: "#FF5000",
	name: "Aave BAT",
	shadowColor: "#7285B2",
	symbol: "aBAT"
},
	"0xA361718326c15715591c299427c62086F69923D9": {
	color: "#F3BA2F",
	name: "Aave BUSD",
	shadowColor: "#7285B2",
	symbol: "aBUSD"
},
	"0x028171bCA77440897B824Ca71D1c56caC55b68A3": {
	color: "#F0B340",
	name: "Aave DAI",
	shadowColor: "#7285B2",
	symbol: "aDAI"
},
	"0xaC6Df26a590F08dcC95D5a4705ae8abbc88509Ef": {
	color: "#25292E",
	name: "Aave ENJ",
	shadowColor: "#7285B2",
	symbol: "aENJ"
},
	"0x030bA81f1c18d280636F32af80b9AAd02Cf0854e": {
	color: "#25292E",
	name: "Aave WETH",
	shadowColor: "#7285B2",
	symbol: "aWETH"
},
	"0x39C6b3e42d6A679d7D776778Fe880BC9487C2EDA": {
	color: "#31CB9E",
	name: "Aave KNC",
	shadowColor: "#7285B2",
	symbol: "aKNC"
},
	"0xa06bC25B5805d5F8d82847D191Cb4Af5A3e873E0": {
	color: "#1A56F0",
	name: "Aave LINK",
	shadowColor: "#7285B2",
	symbol: "aLINK"
},
	"0xa685a61171bb30d4072B338c80Cb7b2c865c873E": {
	color: "#FF2D55",
	name: "Aave MANA",
	shadowColor: "#7285B2",
	symbol: "aMANA"
},
	"0xc713e5E149D5D0715DcD1c156a020976e7E56B88": {
	color: "#1AAB9B",
	name: "Aave MKR",
	shadowColor: "#7285B2",
	symbol: "aMKR"
},
	"0xCC12AbE4ff81c9378D670De1b57F8e0Dd228D77a": {
	color: "#00224D",
	name: "Aave REN",
	shadowColor: "#7285B2",
	symbol: "aREN"
},
	"0x35f6B052C598d933D69A4EEC4D04c73A191fE6c2": {
	color: "#25292E",
	name: "Aave SNX",
	shadowColor: "#7285B2",
	symbol: "aSNX"
},
	"0x6C5024Cd4F8A59110119C56f8933403A539555EB": {
	color: "#25292E",
	name: "Aave sUSD",
	shadowColor: "#7285B2",
	symbol: "aSUSD"
},
	"0x101cc05f4A51C0319f570d5E146a8C625198e636": {
	color: "#002868",
	name: "Aave TUSD",
	shadowColor: "#7285B2",
	symbol: "aTUSD"
},
	"0xB9D7CB55f463405CDfBe4E90a6D2Df01C2B92BF1": {
	color: "#FD017A",
	name: "Aave UNI",
	shadowColor: "#7285B2",
	symbol: "aUNI"
},
	"0xBcca60bB61934080951369a648Fb03DF4F96263C": {
	color: "#2775CA",
	name: "Aave USDC",
	shadowColor: "#7285B2",
	symbol: "aUSDC"
},
	"0x3Ed3B47Dd13EC9a98b44e6204A523E766B225811": {
	color: "#22A079",
	name: "Aave USDT",
	shadowColor: "#7285B2",
	symbol: "aUSDT"
},
	"0x9ff58f4fFB29fA2266Ab25e75e2A8b3503311656": {
	color: "#FF9900",
	name: "Aave WBTC",
	shadowColor: "#7285B2",
	symbol: "aWBTC"
},
	"0x5165d24277cD063F5ac44Efd447B27025e888f37": {
	color: "#0072F6",
	name: "Aave YFI",
	shadowColor: "#7285B2",
	symbol: "aYFI"
},
	"0xDf7FF54aAcAcbFf42dfe29DD6144A69b629f8C9e": {
	color: "#25292E",
	name: "Aave ZRX",
	shadowColor: "#7285B2",
	symbol: "aZRX"
},
	"0xff20817765cb7f73d4bde2e66e067e58d11095c2": {
	color: "#D9327C",
	isCurated: true,
	name: "Amp"
},
	"0xd46ba6d942050d489dbd938a2c909a5d5039a161": {
	color: "#25292E",
	isCurated: true,
	name: "Ampleforth"
},
	"0xa117000000f279d81a1d3cc75430faa017fa5a2e": {
	color: "#06BCE5",
	isCurated: true,
	name: "Aragon"
},
	"0x221657776846890989a759BA2973e427DfF5C9bB": {
	color: "#25292E",
	isCurated: true,
	name: "Augur"
},
	"0xba100000625a3754423978a60c9317c58a424e3d": {
	isCurated: true,
	name: "Balancer",
	symbol: "BAL"
},
	"0x1F573D6Fb3F13d689FF844B4cE37794d79a7FF1C": {
	color: "#00224D",
	isCurated: true,
	name: "Bancor"
},
	"0x68a118ef45063051eac49c7e647ce5ace48a68a5": {
	color: "#00ADD5",
	isCurated: true,
	name: "Based Money",
	symbol: "$BASED"
},
	"0x0D8775F648430679A709E98d2b0Cb6250d2887EF": {
	color: "#FF5000",
	isCurated: true,
	name: "Basic Attention Token"
},
	"0x107c4504cd79C5d2696Ea0030a8dD4e92601B82e": {
	color: "#6067F1",
	isCurated: true,
	name: "Bloom"
},
	"0x514910771AF9Ca656af840dff83E8264EcF986CA": {
	color: "#1A56F0",
	isCurated: true,
	name: "Chainlink"
},
	"0x41e5560054824eA6B0732E656E3Ad64E20e94E45": {
	color: "#3AB03E",
	isCurated: true,
	name: "Civic"
},
	"0xc00e94cb662c3520282e6f5717214004a7f26888": {
	color: "#00D395",
	isCurated: true,
	name: "Compound",
	shadowColor: "#25292E"
},
	"0x6c8c6b02e7b2be14d4fa6022dfd6d75921d90e4e": {
	color: "#9669ED",
	isCurated: true,
	name: "Compound BAT",
	symbol: "cBAT"
},
	"0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643": {
	color: "#9669ED",
	isCurated: true,
	name: "Compound DAI",
	symbol: "cDAI"
},
	"0xF5DCe57282A584D2746FaF1593d3121Fcac444dC": {
	color: "#9669ED",
	name: "Compound SAI",
	symbol: "cSAI"
},
	"0x39aa39c021dfbae8fac545936693ac917d5e7563": {
	color: "#9669ED",
	isCurated: true,
	name: "Compound USDC",
	symbol: "cUSDC"
},
	"0xc11b1268c1a384e55c48c2391d8d480264a3a7f4": {
	color: "#9669ED",
	isCurated: true,
	name: "Compound WBTC",
	symbol: "cWBTC"
},
	"0xD533a949740bb3306d119CC777fa900bA034cd52": {
	isCurated: true,
	name: "Curve DAO Token",
	symbol: "CRV"
},
	"0xB4272071eCAdd69d933AdcD19cA99fe80664fc08": {
	color: "#CE0E2D",
	isCurated: true,
	name: "CryptoFranc"
},
	"0x6b175474e89094c44da98b954eedeac495271d0f": {
	color: "#F0B340",
	isCurated: true,
	name: "Dai"
},
	"0x543Ff227F64Aa17eA132Bf9886cAb5DB55DCAddf": {
	color: "#25292E",
	isCurated: true,
	name: "DAOstack"
},
	"0x0F5D2fB29fb7d3CFeE444a200298f468908cC942": {
	color: "#FF2D55",
	isCurated: true,
	name: "Decentraland"
},
	"0xe0b7927c4af23765cb51314a0e0521a9645f0e2a": {
	color: "#E0A83A",
	isCurated: true,
	name: "DigixDAO"
},
	"0x1494ca1f11d487c2bbe4543e90080aeba4ba3c2b": {
	color: "#8150E6",
	isCurated: true,
	name: "DefiPulse Index"
},
	"0x4f3AfEC4E5a3F2A6a1A411DEF7D7dFe50eE057bF": {
	color: "#E0A83A",
	isCurated: true,
	name: "Digix Gold"
},
	"0xC0F9bD5Fa5698B6505F643900FFA515Ea5dF54A9": {
	color: "#F7518B",
	isCurated: true,
	name: "Donut"
},
	"0xF629cBd94d3791C9250152BD8dfBDF380E2a3B9c": {
	color: "#7866D5",
	isCurated: true,
	name: "Enjin"
},
	"0x80fB784B7eD66730e8b1DBd9820aFD29931aab03": {
	color: "#109FCA",
	name: "EthLend",
	symbol: "LEND"
},
	"0x956f47f50a910163d8bf957cf5846d573e7f87ca": {
	color: "#22996E",
	isCurated: true,
	name: "Fei USD"
},
	"0x4946Fcea7C692606e8908002e55A582af44AC121": {
	color: "#D79C93",
	isCurated: true,
	name: "FOAM"
},
	"0x35bd01fc9d6d5d81ca9e055db88dc49aa2c699a8": {
	isCurated: true,
	isVerified: true,
	name: "Friends With Benefits Pro",
	symbol: "FWB"
},
	"0x7d91e637589ec3bb54d8213a9e92dc6e8d12da91": {
	isVerified: false,
	name: "Friends With Benefits (Old)",
	symbol: "FWB (Old)"
},
	"0x493c57c4763932315a328269e1adad09653b9081": {
	color: "#0F6AD7",
	name: "Fulcrum DAI",
	symbol: "iDAI"
},
	"0x14094949152eddbfcd073717200da82fed8dc960": {
	color: "#0F6AD7",
	name: "Fulcrum DAI",
	symbol: "iSAI"
},
	"0xf013406a0b1d544238083df0b93ad0d2cbe0f65f": {
	color: "#0F6AD7",
	name: "Fulcrum USDC",
	symbol: "iUSDC"
},
	"0x419D0d8BdD9aF5e606Ae2232ed285Aff190E711b": {
	color: "#E40057",
	isCurated: true,
	name: "FunFair"
},
	"0x6810e776880C02933D47DB1b9fc05908e5386b96": {
	color: "#00A6C4",
	isCurated: true,
	name: "Gnosis"
},
	"0xa74476443119A942dE498590Fe1f2454d7D4aC0d": {
	color: "#002D64",
	isCurated: true,
	name: "Golem"
},
	"0xc944e90c64b2c07662a292be6244bdf05cda44a7": {
	color: "#4068C3",
	isCurated: true,
	name: "The Graph"
},
	"0x12B19D3e2ccc14Da04FAe33e63652ce469b3F2FD": {
	color: "#53B7E8",
	isCurated: true,
	name: "Grid+"
},
	"0x2b591e99afe9f32eaa6214f7b7629768c40eeb39": {
	color: "#FF47A9",
	isCurated: true,
	name: "HEX",
	shadowColor: "#FF9355"
},
	"0x6c6EE5e31d828De241282B9606C8e98Ea48526E2": {
	color: "#8834FF",
	isCurated: true,
	name: "Holo",
	symbol: "HOT"
},
	"0x607F4C5BB672230e8672085532f7e901544a7375": {
	color: "#EBBC2F",
	isCurated: true,
	name: "iExec"
},
	"0x0954906da0bf32d5479e25f46056d22f08464cab": {
	color: "#75533A",
	isCurated: true,
	name: "Index"
},
	"0xfa5047c9c78b8877af97bdcb85db743fd7313d4a": {
	color: "#25292E",
	isCurated: true,
	name: "KeeperDAO"
},
	"0x93ED3FBe21207Ec2E8f2d3c3de6e058Cb73Bc04d": {
	color: "#838285",
	isCurated: true,
	name: "Kleros"
},
	"0xdd974D5C2e2928deA5F71b9825b8b646686BD200": {
	color: "#31CB9E",
	isCurated: true,
	name: "Kyber"
},
	"0x58b6A8A3302369DAEc383334672404Ee733aB239": {
	color: "#03E082",
	isCurated: true,
	name: "Livepeer"
},
	"0xA4e8C3Ec456107eA67d3075bF9e3DF3A75823DB0": {
	color: "#4BC0C8",
	isCurated: true,
	name: "Loom"
},
	"0xBBbbCA6A901c926F240b89EacB641d8Aec7AEafD": {
	color: "#005FFF",
	isCurated: true,
	name: "Loopring"
},
	"0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2": {
	color: "#1AAB9B",
	isCurated: true,
	name: "Maker"
},
	"0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0": {
	color: "#2891F9",
	isCurated: true,
	name: "Matic"
},
	"0xec67005c4E498Ec7f55E092bd1d35cbC47C91892": {
	color: "#00224D",
	isCurated: true,
	name: "Melon"
},
	"0xaAAf91D9b90dF800Df4F55c205fd6989c977E73a": {
	color: "#25292E",
	isCurated: true,
	name: "Monolith"
},
	"0xB62132e35a6c13ee1EE0f84dC5d40bad8d815206": {
	color: "#2891F9",
	isCurated: true,
	name: "Nexo"
},
	"0x1776e1F26f98b1A5dF9cD347953a26dd3Cb46671": {
	color: "#25292E",
	isCurated: true,
	name: "Numeraire"
},
	"0x45804880de22913dafe09f4980848ece6ecbaf78": {
	color: "#CBB10E",
	isCurated: true,
	name: "Paxos Gold"
},
	"0x8E870D67F660D95d5be530380D0eC0bd388289E1": {
	color: "#4EAD46",
	isCurated: true,
	name: "Paxos Standard"
},
	"0x429881672B9AE42b8EbA0E26cD9C73711b891Ca5": {
	color: "#0FB200",
	isCurated: true,
	name: "Pickle Finance"
},
	"0xe3818504c1b32bf1557b16c238b2e01fd3149c17": {
	color: "#00BFFF",
	name: "Pillar"
},
	"0x6758B7d441a9739b98552B373703d8d3d14f9e62": {
	color: "#5332A0",
	isCurated: true,
	name: "POA",
	symbol: "POA20"
},
	"0x0cec1a9154ff802e7934fc916ed7ca50bde6844e": {
	color: "#6E3AF3",
	isCurated: true,
	name: "PoolTogether"
},
	"0x49d716dfe60b37379010a75329ae09428f17118d": {
	color: "#6E3AF3",
	name: "PoolTogether Dai"
},
	"0x03ab458634910aad20ef5f1c8ee96f1d6ac54919": {
	color: "#1FC9A8",
	isCurated: true,
	name: "Rai Reflex Index",
	shadowColor: "#559889"
},
	"0x255Aa6DF07540Cb5d3d297f0D0D4D84cb52bc8e6": {
	color: "#25292E",
	isCurated: true,
	name: "Raiden"
},
	"0xfca59cd816ab1ead66534d82bc21e7515ce441cf": {
	color: "#F876F2",
	isCurated: true,
	name: "Rarible"
},
	"0x408e41876cCCDC0F92210600ef50372656052a38": {
	color: "#00224D",
	isCurated: true,
	name: "Ren"
},
	"0xB4EFd85c19999D84251304bDA99E90B92300Bd93": {
	color: "#FF626D",
	isCurated: true,
	name: "Rocket Pool"
},
	"0x89d24A6b4CcB1B6fAA2625fE562bDD9a23260359": {
	color: "#F0B340",
	name: "Sai",
	symbol: "SAI"
},
	"0x06f65b8cfcb13a9fe37d836fe9708da38ecb29b2": {
	color: "#1CD100",
	isCurated: true,
	name: "Saint Fame"
},
	"0x4156D3342D5c385a87D264F90653733592000581": {
	color: "#03DBA9",
	isCurated: true,
	name: "SALT"
},
	"0x42d6622deCe394b54999Fbd73D108123806f6a18": {
	color: "#FF3B81",
	isCurated: true,
	name: "SpankChain"
},
	"0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84": {
	color: "#56A0DD",
	isCurated: true,
	name: "Staked Ether",
	shadowColor: "#FF884D",
	symbol: "stETH"
},
	"0x744d70FDBE2Ba4CF95131626614a1763DF805B9E": {
	color: "#4360DF",
	isCurated: true,
	name: "Status"
},
	"0xB64ef51C888972c908CFacf59B47C1AfBC0Ab8aC": {
	color: "#2683FF",
	isCurated: true,
	name: "Storj"
},
	"0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f": {
	color: "#211580",
	isCurated: true,
	name: "Synthetix"
},
	"0x5e74c9036fb86bd7ecdcb084a0673efc32ea31cb": {
	color: "#53B267",
	isCurated: true,
	name: "Synthetix ETH"
},
	"0x57ab1ec28d129707052df4df418d58a2d46d5f51": {
	color: "#25292E",
	isCurated: true,
	name: "Synthetix USD"
},
	"0xdac17f958d2ee523a2206206994597c13d831ec7": {
	color: "#22A079",
	isCurated: true,
	name: "Tether"
},
	"0xc7283b66eb1eb5fb86327f08e1b5816b0720212b": {
	color: "#178DD0",
	isCurated: true,
	name: "Tribe"
},
	"0x0000000000085d4780b73119b644ae5ecd22b376": {
	color: "#002868",
	isCurated: true,
	name: "TrueUSD"
},
	"0x4c19596f5aaff459fa38b0f7ed92f11ae6543784": {
	name: "TrustToken",
	symbol: "TRU"
},
	"0x04Fa0d235C4abf4BcF4787aF4CF447DE572eF828": {
	color: "#FF4A4A",
	isCurated: true,
	name: "UMA"
},
	"0x1f9840a85d5af5bf1d1762f925bdaddc4201f984": {
	color: "#FD017A",
	isCurated: true,
	name: "Uniswap",
	shadowColor: "#FDB8DA"
},
	"0x23B608675a2B2fB1890d3ABBd85c5775c51691d5": {
	color: "#E15EE5",
	isCurated: true,
	name: "Unisocks"
},
	"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48": {
	color: "#2775CA",
	isCurated: true,
	name: "USD Coin"
},
	"0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599": {
	color: "#FF9900",
	isCurated: true,
	name: "Wrapped Bitcoin"
},
	"0x09fE5f0236F0Ea5D930197DCE254d77B04128075": {
	color: "#FF8FE5",
	isCurated: true,
	name: "Wrapped CryptoKitties"
},
	"0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2": {
	color: "#25292E",
	name: "Wrapped Ether"
},
	"0x5dbcf33d8c2e976c6b560249878e6f1491bca25c": {
	color: "#0072F6",
	name: "Y Curve Vault",
	isCurated: true,
	symbol: "yUSD"
},
	"0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e": {
	color: "#0072F6",
	isCurated: true,
	name: "yearn.finance"
},
	"0x0aacfbec6a24756c20d41914f2caba817c0d8521": {
	color: "#B2364F",
	isCurated: true,
	name: "YAM",
	shadowColor: "#D09AAC",
	symbol: "YAM"
},
	"0x0e2298E3B3390e3b945a5456fBf59eCc3f55DA16": {
	color: "#B2364F",
	name: "YAMv1",
	shadowColor: "#D09AAC",
	symbol: "YAMv1"
},
	"0xaba8cac6866b83ae4eec97dd07ed254282f6ad8a": {
	color: "#B2364F",
	name: "YAMv2",
	shadowColor: "#D09AAC",
	symbol: "YAMv2"
},
	"0x69bbc3f8787d573f1bbdd0a5f40c7ba0aee9bcc9": {
	color: "#393939",
	name: "Yup",
	shadowColor: "#BFBEBE",
	symbol: "YUP"
}
};

function parseOverrideFile() {
  return _parseOverrideFile.apply(this, arguments);
}

function _parseOverrideFile() {
  _parseOverrideFile = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee() {
    return runtime_1.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", mapKeys(overrides, function () {
              if ((arguments.length <= 1 ? undefined : arguments[1]) === 'eth') return arguments.length <= 1 ? undefined : arguments[1];
              return getAddress(arguments.length <= 1 ? undefined : arguments[1]);
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _parseOverrideFile.apply(this, arguments);
}

function parseContractMap() {
  return _parseContractMap.apply(this, arguments);
}

function _parseContractMap() {
  _parseContractMap = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee() {
    var extractedAt, jsonFile, contractMap;
    return runtime_1.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetchRepository(CONTRACT_MAP_REPO);

          case 2:
            extractedAt = _context.sent;
            // load contract map JSON file from directory
            jsonFile = resolve(extractedAt, 'contract-map.json');
            _context.next = 6;
            return parseJsonFile(jsonFile);

          case 6:
            contractMap = _context.sent;
            return _context.abrupt("return", Object.keys(contractMap).map(function (address) {
              return _extends({}, contractMap[address], {
                address: address
              });
            }) // remove any unknown/undesirable keys from each token object.
            . // remove any unknown/undesirable keys from each token object.
            map(function (token) {
              return pick(token, Object.keys(RawContractMapTokenSchema.shape));
            }) // remove any tokens from the array if they contain null values for the
            // keys that we care about.
            . // remove any tokens from the array if they contain null values for the
            // keys that we care about.
            filter(function (token) {
              return Object.values(token).some(isEmpty);
            }).map(validateTokenData));

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _parseContractMap.apply(this, arguments);
}

var SVG_ORIGINALS_REPO = 'spothq/cryptocurrency-icons';
var SVG_OVERRIDES_REPO = 'mikedemarais/react-coin-icon/assets/overrides';

function parseOriginalSVGIcons() {
  return _parseOriginalSVGIcons.apply(this, arguments);
}

function _parseOriginalSVGIcons() {
  _parseOriginalSVGIcons = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee() {
    var extractedAt, jsonFile;
    return runtime_1.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetchRepository(SVG_ORIGINALS_REPO);

          case 2:
            extractedAt = _context.sent;
            // load svg manifest JSON file from directory
            jsonFile = resolve(extractedAt, 'manifest.json');
            return _context.abrupt("return", parseJsonFile(jsonFile));

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _parseOriginalSVGIcons.apply(this, arguments);
}

function parseOverrideSVGIcons() {
  return _parseOverrideSVGIcons.apply(this, arguments);
}

function _parseOverrideSVGIcons() {
  _parseOverrideSVGIcons = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee3() {
    var extractedAt, fileMap, results;
    return runtime_1.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return fetchRepository(SVG_OVERRIDES_REPO);

          case 2:
            extractedAt = _context3.sent;

            fileMap = /*#__PURE__*/function () {
              var _ref = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee2(file) {
                var svg, fillColor, svgToken;
                return runtime_1.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        _context2.next = 2;
                        return promises.readFile(file, 'utf8');

                      case 2:
                        svg = _context2.sent;
                        // Attempt to get SVG's "color" by reading it's first "fill"
                        // value (which is usually the icon's background).
                        fillColor = getSVGColors(svg).fills[0];
                        svgToken = undefined;

                        if (fillColor) {
                          svgToken = {
                            symbol: file.split('.')[0].toUpperCase(),
                            color: makeColorMoreChill(fillColor.hex().toLowerCase())
                          };
                        } else {
                          console.error("Couldn't derive color from the \"rainbow override\" SVG file: `" + file + "`");
                        }

                        return _context2.abrupt("return", svgToken);

                      case 7:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2);
              }));

              return function fileMap(_x) {
                return _ref.apply(this, arguments);
              };
            }();

            _context3.next = 6;
            return mapDir({
              dir: extractedAt,
              fileMap: fileMap
            });

          case 6:
            results = _context3.sent;
            return _context3.abrupt("return", compact(results));

          case 8:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _parseOverrideSVGIcons.apply(this, arguments);
}

function parseSVGIconTokenFiles() {
  return _parseSVGIconTokenFiles.apply(this, arguments);
}

function _parseSVGIconTokenFiles() {
  _parseSVGIconTokenFiles = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee4() {
    var originals, overrides;
    return runtime_1.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return parseOriginalSVGIcons();

          case 2:
            originals = _context4.sent;
            _context4.next = 5;
            return parseOverrideSVGIcons();

          case 5:
            overrides = _context4.sent;
            return _context4.abrupt("return", unionBy(originals, overrides, 'symbol'));

          case 7:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _parseSVGIconTokenFiles.apply(this, arguments);
}

function reduceArrayToObject(array) {
  return array.reduce(function (item, culm) {
    return Object.assign(culm, item);
  }, {});
}
var TokenListStore = /*#__PURE__*/object({
  tags: /*#__PURE__*/any().array().optional(),
  tokens: /*#__PURE__*/any().array().optional()
});
var TokenListStoreRecord = /*#__PURE__*/record(TokenListStore);

var omitTokenWithTag = function omitTokenWithTag(tokens, tag) {
  return tokens.filter(function (_ref) {
    var _ref$tags = _ref.tags,
        tags = _ref$tags === void 0 ? [] : _ref$tags;
    return !tags.includes(tag);
  });
};

var pickTokenWithTag = function pickTokenWithTag(tokens, tag) {
  return tokens.filter(function (_ref2) {
    var _ref2$tags = _ref2.tags,
        tags = _ref2$tags === void 0 ? [] : _ref2$tags;
    return tags.includes(tag);
  });
};

var _TokenListEnumSchema$ = TokenListEnumSchema["enum"],
    aave = _TokenListEnumSchema$.aave,
    roll = _TokenListEnumSchema$.roll;
function parseTokenLists() {
  return _parseTokenLists.apply(this, arguments);
}

function _parseTokenLists() {
  _parseTokenLists = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee3() {
    var listsArray;
    return runtime_1.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return Promise.all(TokenListEnumSchema.options.map( /*#__PURE__*/function () {
              var _ref3 = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee2(list) {
                return runtime_1.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        return _context2.abrupt("return", new Promise( /*#__PURE__*/function () {
                          var _ref4 = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee(resolve, reject) {
                            return runtime_1.wrap(function _callee$(_context) {
                              while (1) {
                                switch (_context.prev = _context.next) {
                                  case 0:
                                    return _context.abrupt("return", // fetch the TokenList from remote uri
                                    fetch(TOKEN_LISTS[list]).then(function (res) {
                                      return res.json();
                                    }).then(function (_ref5) {
                                      var _resolve;

                                      var tags = _ref5.tags,
                                          tokens = _ref5.tokens;
                                      return resolve((_resolve = {}, _resolve[list] = {
                                        tags: tags,
                                        tokens: tokens
                                      }, _resolve));
                                    })["catch"](reject));

                                  case 1:
                                  case "end":
                                    return _context.stop();
                                }
                              }
                            }, _callee);
                          }));

                          return function (_x2, _x3) {
                            return _ref4.apply(this, arguments);
                          };
                        }()));

                      case 1:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2);
              }));

              return function (_x) {
                return _ref3.apply(this, arguments);
              };
            }()));

          case 2:
            listsArray = _context3.sent;
            return _context3.abrupt("return", reduceArrayToObject(listsArray.map(function (list) {
              var listName = Object.keys(list)[0];

              var newList = _extends({}, list);

              if (listName === roll) {
                newList[roll].tokens = omitTokenWithTag(newList[roll].tokens, 'bases');
              }

              if (listName === aave) {
                newList[aave].tokens = [].concat(pickTokenWithTag(newList[aave].tokens, 'atokenv1'), pickTokenWithTag(newList[aave].tokens, 'atokenv2'));
              }

              return newList;
            })));

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _parseTokenLists.apply(this, arguments);
}

function normalizeList(list) {
  return keyBy(list, function (_ref) {
    var address = _ref.address;
    return getAddress(address);
  });
}

function build() {
  return _build.apply(this, arguments);
}

function _build() {
  _build = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee() {
    var rainbowOverrides, contractMapTokens, svgIcons, tokenListTokens, _yield$parseEthereumL, uniqueEthereumListTokens, duplicateEthereumListTokens, coingecko, preferredTokenLists, sources, defaultSources, allKnownTokenAddresses, resolveTokenInfo, buildTokenList, tokens;

    return runtime_1.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            buildTokenList = function _buildTokenList() {
              return allKnownTokenAddresses.map(function (tokenAddress) {
                var token = resolveTokenInfo(tokenAddress);
                var overrideToken = rainbowOverrides[tokenAddress];
                var _token$chainId = token.chainId,
                    chainId = _token$chainId === void 0 ? 1 : _token$chainId,
                    color = token.color,
                    decimals = token.decimals,
                    name = token.name,
                    shadowColor = token.shadowColor,
                    symbol = token.symbol;
                var isVerified = sources.preferred.map(Object.keys).flat().includes(tokenAddress);

                if (isVerified) {
                  var logoData = svgIcons.find(function (item) {
                    return item.symbol === symbol;
                  });
                  color = logoData == null ? void 0 : logoData.color;
                }

                var extensions = {
                  color: (overrideToken == null ? void 0 : overrideToken.color) || color,
                  isRainbowCurated: overrideToken != null && overrideToken.isCurated ? true : undefined,
                  isVerified: isVerified || overrideToken != null && overrideToken.isCurated ? true : !!(overrideToken != null && overrideToken.isVerified) || undefined,
                  shadowColor: (overrideToken == null ? void 0 : overrideToken.shadowColor) || shadowColor
                };
                return deeplyTrimAllTokenStrings(_extends({
                  address: tokenAddress,
                  chainId: chainId,
                  decimals: decimals,
                  name: (overrideToken == null ? void 0 : overrideToken.name) || name,
                  symbol: (overrideToken == null ? void 0 : overrideToken.symbol) || symbol
                }, compact$1(Object.values(extensions)).length ? {
                  extensions: extensions
                } : undefined));
              });
            };

            resolveTokenInfo = function _resolveTokenInfo(tokenAddress) {
              function matchToken(_ref3) {
                var address = _ref3.address;
                return toLower(address) === toLower(tokenAddress);
              }

              var lists = pick$1(tokenListTokens, Object.keys(tokenListTokens).filter(function (list) {
                return some(tokenListTokens[list].tokens, matchToken);
              }));

              if (Object.keys(lists).length === 1) {
                return find(lists[Object.keys(lists)[0]].tokens, matchToken);
              } else if (Object.keys(lists).length > 1) {
                var listNames = Object.keys(lists);

                if (listNames.includes(TokenListEnumSchema["enum"].synthetix)) {
                  return find(lists.synthetix.tokens, matchToken);
                } else if (listNames.includes(TokenListEnumSchema["enum"].aave)) {
                  return find(lists.aave.tokens, matchToken);
                } else if (listNames.includes(TokenListEnumSchema["enum"].roll)) {
                  return find(lists.roll.tokens, matchToken);
                } else if (listNames.includes(TokenListEnumSchema["enum"].dharma)) {
                  return find(lists.dharma.tokens, matchToken);
                } else if (listNames.includes(TokenListEnumSchema["enum"].kleros)) {
                  return find(lists.kleros.tokens, matchToken);
                } else if (listNames.includes(TokenListEnumSchema["enum"].wrapped)) {
                  return find(lists.wrapped.tokens, matchToken);
                } else if (listNames.includes(TokenListEnumSchema["enum"].coingecko)) {
                  return find(lists.coingecko.tokens, matchToken);
                }
              }

              return defaultSources[tokenAddress];
            };

            _context.next = 4;
            return parseOverrideFile();

          case 4:
            rainbowOverrides = _context.sent;
            _context.next = 7;
            return parseContractMap();

          case 7:
            contractMapTokens = _context.sent;
            _context.next = 10;
            return parseSVGIconTokenFiles();

          case 10:
            svgIcons = _context.sent;
            _context.next = 13;
            return parseTokenLists();

          case 13:
            tokenListTokens = _context.sent;
            _context.next = 16;
            return parseEthereumLists();

          case 16:
            _yield$parseEthereumL = _context.sent;
            uniqueEthereumListTokens = _yield$parseEthereumL[0];
            duplicateEthereumListTokens = _yield$parseEthereumL[1];
            coingecko = tokenListTokens.coingecko, preferredTokenLists = _objectWithoutPropertiesLoose(tokenListTokens, ["coingecko"]);
            sources = {
              "default": [duplicateEthereumListTokens, uniqueEthereumListTokens, contractMapTokens, coingecko.tokens.flat()].map(normalizeList),
              preferred: [Object.values(preferredTokenLists).map(function (_ref2) {
                var tokens = _ref2.tokens;
                return tokens;
              }).flat()].map(normalizeList)
            };
            defaultSources = merge.apply(void 0, [{}].concat(sources["default"]));
            allKnownTokenAddresses = uniq(compact$1([].concat(sources["default"].map(Object.keys).flat(), sources.preferred.map(Object.keys).flat())).map(getAddress));
            _context.next = 25;
            return sortTokens(buildTokenList());

          case 25:
            tokens = _context.sent;
            console.log('# of "isRainbowCurated" tokens: ', filter$1(tokens, matchesProperty$1('extensions.isRainbowCurated', true)).length);
            console.log('# of "isVerified" tokens: ', filter$1(tokens, matchesProperty$1('extensions.isVerified', true)).length);
            return _context.abrupt("return", tokens);

          case 29:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _build.apply(this, arguments);
}

function write() {
  return _write.apply(this, arguments);
}

function _write() {
  _write = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee() {
    var tokens;
    return runtime_1.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return build();

          case 2:
            tokens = _context.sent;
            _context.next = 5;
            return writeToDisk({
              name: 'Rainbow Token List',
              timestamp: new Date().toISOString(),
              logoURI: 'https://avatars0.githubusercontent.com/u/48327834?s=200&v=4',
              version: {
                major: 1,
                minor: 2,
                patch: 1
              },
              keywords: ['rainbow'],
              tokens: tokens
            }, resolve(process.cwd(), './output'), 'rainbow-token-list.json');

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _write.apply(this, arguments);
}

/**
 * Library imports and exports.
 */
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

export { SVG_ORIGINALS_REPO, SVG_OVERRIDES_REPO, TokenListStore, TokenListStoreRecord, constants as Types, build, createOutputFolder, deeplyTrimAllTokenStrings, parseEthereumListsTokenFiles, parseJsonFile, partitionByUniqueness, reduceArrayToObject, resolveDeprecations, sortTokens, validateTokenData, write, writeToDisk };
//# sourceMappingURL=rainbow-token-list-test.esm.js.map

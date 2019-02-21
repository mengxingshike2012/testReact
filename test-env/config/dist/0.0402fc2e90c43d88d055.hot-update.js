webpackHotUpdate(0,{

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toArray = exports.only = exports.count = exports.map = exports.forEach = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
                                                                                                                                                                                                                                                                               * Copyright (c) Facebook, Inc. and its affiliates.
                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                               * This source code is licensed under the MIT license found in the
                                                                                                                                                                                                                                                                               * LICENSE file in the root directory of this source tree.
                                                                                                                                                                                                                                                                               */

var _invariant = __webpack_require__(0);

var _invariant2 = _interopRequireDefault(_invariant);

var _warning = __webpack_require__(2);

var _warning2 = _interopRequireDefault(_warning);

var _ReactSymbols = __webpack_require__(6);

var _ReactElement = __webpack_require__(42);

var _ReactDebugCurrentFrame = __webpack_require__(44);

var _ReactDebugCurrentFrame2 = _interopRequireDefault(_ReactDebugCurrentFrame);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

debugger;


var SEPARATOR = '.';
var SUBSEPARATOR = ':';

/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */
function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = ('' + key).replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });

  return '$' + escapedString;
}

/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */

var didWarnAboutMaps = false;

var userProvidedKeyEscapeRegex = /\/+/g;
function escapeUserProvidedKey(text) {
  return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
}

var POOL_SIZE = 10;
var traverseContextPool = [];
function getPooledTraverseContext(mapResult, keyPrefix, mapFunction, mapContext) {
  if (traverseContextPool.length) {
    var traverseContext = traverseContextPool.pop();
    traverseContext.result = mapResult;
    traverseContext.keyPrefix = keyPrefix;
    traverseContext.func = mapFunction;
    traverseContext.context = mapContext;
    traverseContext.count = 0;
    return traverseContext;
  } else {
    return {
      result: mapResult,
      keyPrefix: keyPrefix,
      func: mapFunction,
      context: mapContext,
      count: 0
    };
  }
}

function releaseTraverseContext(traverseContext) {
  traverseContext.result = null;
  traverseContext.keyPrefix = null;
  traverseContext.func = null;
  traverseContext.context = null;
  traverseContext.count = 0;
  if (traverseContextPool.length < POOL_SIZE) {
    traverseContextPool.push(traverseContext);
  }
}

/**
 * @param {?*} children Children tree container.
 * @param {!string} nameSoFar Name of the key path so far.
 * @param {!function} callback Callback to invoke with each child found.
 * @param {?*} traverseContext Used to pass information throughout the traversal
 * process.
 * @return {!number} The number of children in this subtree.
 */
function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
  var type = typeof children === 'undefined' ? 'undefined' : _typeof(children);

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  var invokeCallback = false;

  if (children === null) {
    invokeCallback = true;
  } else {
    switch (type) {
      case 'string':
      case 'number':
        invokeCallback = true;
        break;
      case 'object':
        switch (children.$$typeof) {
          case _ReactSymbols.REACT_ELEMENT_TYPE:
          case _ReactSymbols.REACT_PORTAL_TYPE:
            invokeCallback = true;
        }
    }
  }

  if (invokeCallback) {
    callback(traverseContext, children,
    // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows.
    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
    return 1;
  }

  var child = void 0;
  var nextName = void 0;
  var subtreeCount = 0; // Count of children found in the current subtree.
  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getComponentKey(child, i);
      subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
    }
  } else {
    var iteratorFn = (0, _ReactSymbols.getIteratorFn)(children);
    if (typeof iteratorFn === 'function') {
      if (true) {
        // Warn about using Maps as children
        if (iteratorFn === children.entries) {
          (0, _warning2.default)(didWarnAboutMaps, 'Using Maps as children is unsupported and will likely yield ' + 'unexpected results. Convert it to a sequence/iterable of keyed ' + 'ReactElements instead.');
          didWarnAboutMaps = true;
        }
      }

      var iterator = iteratorFn.call(children);
      var step = void 0;
      var ii = 0;
      while (!(step = iterator.next()).done) {
        child = step.value;
        nextName = nextNamePrefix + getComponentKey(child, ii++);
        subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
      }
    } else if (type === 'object') {
      var addendum = '';
      if (true) {
        addendum = ' If you meant to render a collection of children, use an array ' + 'instead.' + _ReactDebugCurrentFrame2.default.getStackAddendum();
      }
      var childrenString = '' + children;
      (0, _invariant2.default)(false, 'Objects are not valid as a React child (found: %s).%s', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum);
    }
  }

  return subtreeCount;
}

/**
 * Traverses children that are typically specified as `props.children`, but
 * might also be specified through attributes:
 *
 * - `traverseAllChildren(this.props.children, ...)`
 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
 *
 * The `traverseContext` is an optional argument that is passed through the
 * entire traversal. It can be used to store accumulations or anything else that
 * the callback might find relevant.
 *
 * @param {?*} children Children tree object.
 * @param {!function} callback To invoke upon traversing each child.
 * @param {?*} traverseContext Context for traversal.
 * @return {!number} The number of children in this subtree.
 */
function traverseAllChildren(children, callback, traverseContext) {
  if (children == null) {
    return 0;
  }

  return traverseAllChildrenImpl(children, '', callback, traverseContext);
}

/**
 * Generate a key string that identifies a component within a set.
 *
 * @param {*} component A component that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */
function getComponentKey(component, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if ((typeof component === 'undefined' ? 'undefined' : _typeof(component)) === 'object' && component !== null && component.key != null) {
    // Explicit key
    return escape(component.key);
  }
  // Implicit key determined by the index in the set
  return index.toString(36);
}

function forEachSingleChild(bookKeeping, child, name) {
  var func = bookKeeping.func,
      context = bookKeeping.context;

  func.call(context, child, bookKeeping.count++);
}

/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */
function forEachChildren(children, forEachFunc, forEachContext) {
  if (children == null) {
    return children;
  }
  var traverseContext = getPooledTraverseContext(null, null, forEachFunc, forEachContext);
  traverseAllChildren(children, forEachSingleChild, traverseContext);
  releaseTraverseContext(traverseContext);
}

function mapSingleChildIntoContext(bookKeeping, child, childKey) {
  var result = bookKeeping.result,
      keyPrefix = bookKeeping.keyPrefix,
      func = bookKeeping.func,
      context = bookKeeping.context;


  var mappedChild = func.call(context, child, bookKeeping.count++);
  if (Array.isArray(mappedChild)) {
    mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, function (c) {
      return c;
    });
  } else if (mappedChild != null) {
    if ((0, _ReactElement.isValidElement)(mappedChild)) {
      mappedChild = (0, _ReactElement.cloneAndReplaceKey)(mappedChild,
      // Keep both the (mapped) and old keys if they differ, just as
      // traverseAllChildren used to do for objects as children
      keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
    }
    result.push(mappedChild);
  }
}

function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
  var escapedPrefix = '';
  if (prefix != null) {
    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
  }
  var traverseContext = getPooledTraverseContext(array, escapedPrefix, func, context);
  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
  releaseTraverseContext(traverseContext);
}

/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
 *
 * The provided mapFunction(child, key, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */
function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, func, context);
  return result;
}

/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrencount
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */
function countChildren(children) {
  return traverseAllChildren(children, function () {
    return null;
  }, null);
}

/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
 */
function toArray(children) {
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, function (child) {
    return child;
  });
  return result;
}

/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */
function onlyChild(children) {
  (0, _invariant2.default)((0, _ReactElement.isValidElement)(children), 'React.Children.only expected to receive a single React element child.');
  return children;
}

exports.forEach = forEachChildren;
exports.map = mapChildren;
exports.count = countChildren;
exports.only = onlyChild;
exports.toArray = toArray;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC9zcmMvUmVhY3RDaGlsZHJlbi5qcyJdLCJuYW1lcyI6WyJTRVBBUkFUT1IiLCJTVUJTRVBBUkFUT1IiLCJlc2NhcGUiLCJrZXkiLCJlc2NhcGVSZWdleCIsImVzY2FwZXJMb29rdXAiLCJlc2NhcGVkU3RyaW5nIiwicmVwbGFjZSIsIm1hdGNoIiwiZGlkV2FybkFib3V0TWFwcyIsInVzZXJQcm92aWRlZEtleUVzY2FwZVJlZ2V4IiwiZXNjYXBlVXNlclByb3ZpZGVkS2V5IiwidGV4dCIsIlBPT0xfU0laRSIsInRyYXZlcnNlQ29udGV4dFBvb2wiLCJnZXRQb29sZWRUcmF2ZXJzZUNvbnRleHQiLCJtYXBSZXN1bHQiLCJrZXlQcmVmaXgiLCJtYXBGdW5jdGlvbiIsIm1hcENvbnRleHQiLCJsZW5ndGgiLCJ0cmF2ZXJzZUNvbnRleHQiLCJwb3AiLCJyZXN1bHQiLCJmdW5jIiwiY29udGV4dCIsImNvdW50IiwicmVsZWFzZVRyYXZlcnNlQ29udGV4dCIsInB1c2giLCJ0cmF2ZXJzZUFsbENoaWxkcmVuSW1wbCIsImNoaWxkcmVuIiwibmFtZVNvRmFyIiwiY2FsbGJhY2siLCJ0eXBlIiwiaW52b2tlQ2FsbGJhY2siLCIkJHR5cGVvZiIsIlJFQUNUX0VMRU1FTlRfVFlQRSIsIlJFQUNUX1BPUlRBTF9UWVBFIiwiZ2V0Q29tcG9uZW50S2V5IiwiY2hpbGQiLCJuZXh0TmFtZSIsInN1YnRyZWVDb3VudCIsIm5leHROYW1lUHJlZml4IiwiQXJyYXkiLCJpc0FycmF5IiwiaSIsIml0ZXJhdG9yRm4iLCJfX0RFVl9fIiwiZW50cmllcyIsIml0ZXJhdG9yIiwiY2FsbCIsInN0ZXAiLCJpaSIsIm5leHQiLCJkb25lIiwidmFsdWUiLCJhZGRlbmR1bSIsIlJlYWN0RGVidWdDdXJyZW50RnJhbWUiLCJnZXRTdGFja0FkZGVuZHVtIiwiY2hpbGRyZW5TdHJpbmciLCJPYmplY3QiLCJrZXlzIiwiam9pbiIsInRyYXZlcnNlQWxsQ2hpbGRyZW4iLCJjb21wb25lbnQiLCJpbmRleCIsInRvU3RyaW5nIiwiZm9yRWFjaFNpbmdsZUNoaWxkIiwiYm9va0tlZXBpbmciLCJuYW1lIiwiZm9yRWFjaENoaWxkcmVuIiwiZm9yRWFjaEZ1bmMiLCJmb3JFYWNoQ29udGV4dCIsIm1hcFNpbmdsZUNoaWxkSW50b0NvbnRleHQiLCJjaGlsZEtleSIsIm1hcHBlZENoaWxkIiwibWFwSW50b1dpdGhLZXlQcmVmaXhJbnRlcm5hbCIsImMiLCJhcnJheSIsInByZWZpeCIsImVzY2FwZWRQcmVmaXgiLCJtYXBDaGlsZHJlbiIsImNvdW50Q2hpbGRyZW4iLCJ0b0FycmF5Iiwib25seUNoaWxkIiwiZm9yRWFjaCIsIm1hcCIsIm9ubHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OFFBQUE7Ozs7Ozs7QUFPQTs7OztBQUNBOzs7O0FBQ0E7O0FBTUE7O0FBQ0E7Ozs7OztBQUZBOzs7QUFJQSxJQUFNQSxZQUFZLEdBQWxCO0FBQ0EsSUFBTUMsZUFBZSxHQUFyQjs7QUFFQTs7Ozs7O0FBTUEsU0FBU0MsTUFBVCxDQUFnQkMsR0FBaEIsRUFBcUI7QUFDbkIsTUFBTUMsY0FBYyxPQUFwQjtBQUNBLE1BQU1DLGdCQUFnQjtBQUNwQixTQUFLLElBRGU7QUFFcEIsU0FBSztBQUZlLEdBQXRCO0FBSUEsTUFBTUMsZ0JBQWdCLENBQUMsS0FBS0gsR0FBTixFQUFXSSxPQUFYLENBQW1CSCxXQUFuQixFQUFnQyxVQUFTSSxLQUFULEVBQWdCO0FBQ3BFLFdBQU9ILGNBQWNHLEtBQWQsQ0FBUDtBQUNELEdBRnFCLENBQXRCOztBQUlBLFNBQU8sTUFBTUYsYUFBYjtBQUNEOztBQUVEOzs7OztBQUtBLElBQUlHLG1CQUFtQixLQUF2Qjs7QUFFQSxJQUFNQyw2QkFBNkIsTUFBbkM7QUFDQSxTQUFTQyxxQkFBVCxDQUErQkMsSUFBL0IsRUFBcUM7QUFDbkMsU0FBTyxDQUFDLEtBQUtBLElBQU4sRUFBWUwsT0FBWixDQUFvQkcsMEJBQXBCLEVBQWdELEtBQWhELENBQVA7QUFD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O0FBQzNCLDJCQUNFLGtDQUFlQSxRQUFmLENBREYsRUFFRSx1RUFGRjtBQUlBLFNBQU9BLFFBQVA7QUFDRDs7UUFHb0J1RCxPLEdBQW5CZixlO1FBQ2VnQixHLEdBQWZMLFc7UUFDaUJ2RCxLLEdBQWpCd0QsYTtRQUNhSyxJLEdBQWJILFM7UUFDQUQsTyxHQUFBQSxPIiwiZmlsZSI6IjAuMDQwMmZjMmU5MGM0M2Q4OGQwNTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaW1wb3J0IGludmFyaWFudCBmcm9tICdzaGFyZWQvaW52YXJpYW50JztcbmltcG9ydCB3YXJuaW5nIGZyb20gJ3NoYXJlZC93YXJuaW5nJztcbmltcG9ydCB7XG4gIGdldEl0ZXJhdG9yRm4sXG4gIFJFQUNUX0VMRU1FTlRfVFlQRSxcbiAgUkVBQ1RfUE9SVEFMX1RZUEUsXG59IGZyb20gJ3NoYXJlZC9SZWFjdFN5bWJvbHMnO1xuZGVidWdnZXI7XG5pbXBvcnQge2lzVmFsaWRFbGVtZW50LCBjbG9uZUFuZFJlcGxhY2VLZXl9IGZyb20gJy4vUmVhY3RFbGVtZW50JztcbmltcG9ydCBSZWFjdERlYnVnQ3VycmVudEZyYW1lIGZyb20gJy4vUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSc7XG5cbmNvbnN0IFNFUEFSQVRPUiA9ICcuJztcbmNvbnN0IFNVQlNFUEFSQVRPUiA9ICc6JztcblxuLyoqXG4gKiBFc2NhcGUgYW5kIHdyYXAga2V5IHNvIGl0IGlzIHNhZmUgdG8gdXNlIGFzIGEgcmVhY3RpZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgdG8gYmUgZXNjYXBlZC5cbiAqIEByZXR1cm4ge3N0cmluZ30gdGhlIGVzY2FwZWQga2V5LlxuICovXG5mdW5jdGlvbiBlc2NhcGUoa2V5KSB7XG4gIGNvbnN0IGVzY2FwZVJlZ2V4ID0gL1s9Ol0vZztcbiAgY29uc3QgZXNjYXBlckxvb2t1cCA9IHtcbiAgICAnPSc6ICc9MCcsXG4gICAgJzonOiAnPTInLFxuICB9O1xuICBjb25zdCBlc2NhcGVkU3RyaW5nID0gKCcnICsga2V5KS5yZXBsYWNlKGVzY2FwZVJlZ2V4LCBmdW5jdGlvbihtYXRjaCkge1xuICAgIHJldHVybiBlc2NhcGVyTG9va3VwW21hdGNoXTtcbiAgfSk7XG5cbiAgcmV0dXJuICckJyArIGVzY2FwZWRTdHJpbmc7XG59XG5cbi8qKlxuICogVE9ETzogVGVzdCB0aGF0IGEgc2luZ2xlIGNoaWxkIGFuZCBhbiBhcnJheSB3aXRoIG9uZSBpdGVtIGhhdmUgdGhlIHNhbWUga2V5XG4gKiBwYXR0ZXJuLlxuICovXG5cbmxldCBkaWRXYXJuQWJvdXRNYXBzID0gZmFsc2U7XG5cbmNvbnN0IHVzZXJQcm92aWRlZEtleUVzY2FwZVJlZ2V4ID0gL1xcLysvZztcbmZ1bmN0aW9uIGVzY2FwZVVzZXJQcm92aWRlZEtleSh0ZXh0KSB7XG4gIHJldHVybiAoJycgKyB0ZXh0KS5yZXBsYWNlKHVzZXJQcm92aWRlZEtleUVzY2FwZVJlZ2V4LCAnJCYvJyk7XG59XG5cbmNvbnN0IFBPT0xfU0laRSA9IDEwO1xuY29uc3QgdHJhdmVyc2VDb250ZXh0UG9vbCA9IFtdO1xuZnVuY3Rpb24gZ2V0UG9vbGVkVHJhdmVyc2VDb250ZXh0KFxuICBtYXBSZXN1bHQsXG4gIGtleVByZWZpeCxcbiAgbWFwRnVuY3Rpb24sXG4gIG1hcENvbnRleHQsXG4pIHtcbiAgaWYgKHRyYXZlcnNlQ29udGV4dFBvb2wubGVuZ3RoKSB7XG4gICAgY29uc3QgdHJhdmVyc2VDb250ZXh0ID0gdHJhdmVyc2VDb250ZXh0UG9vbC5wb3AoKTtcbiAgICB0cmF2ZXJzZUNvbnRleHQucmVzdWx0ID0gbWFwUmVzdWx0O1xuICAgIHRyYXZlcnNlQ29udGV4dC5rZXlQcmVmaXggPSBrZXlQcmVmaXg7XG4gICAgdHJhdmVyc2VDb250ZXh0LmZ1bmMgPSBtYXBGdW5jdGlvbjtcbiAgICB0cmF2ZXJzZUNvbnRleHQuY29udGV4dCA9IG1hcENvbnRleHQ7XG4gICAgdHJhdmVyc2VDb250ZXh0LmNvdW50ID0gMDtcbiAgICByZXR1cm4gdHJhdmVyc2VDb250ZXh0O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB7XG4gICAgICByZXN1bHQ6IG1hcFJlc3VsdCxcbiAgICAgIGtleVByZWZpeDoga2V5UHJlZml4LFxuICAgICAgZnVuYzogbWFwRnVuY3Rpb24sXG4gICAgICBjb250ZXh0OiBtYXBDb250ZXh0LFxuICAgICAgY291bnQ6IDAsXG4gICAgfTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZWxlYXNlVHJhdmVyc2VDb250ZXh0KHRyYXZlcnNlQ29udGV4dCkge1xuICB0cmF2ZXJzZUNvbnRleHQucmVzdWx0ID0gbnVsbDtcbiAgdHJhdmVyc2VDb250ZXh0LmtleVByZWZpeCA9IG51bGw7XG4gIHRyYXZlcnNlQ29udGV4dC5mdW5jID0gbnVsbDtcbiAgdHJhdmVyc2VDb250ZXh0LmNvbnRleHQgPSBudWxsO1xuICB0cmF2ZXJzZUNvbnRleHQuY291bnQgPSAwO1xuICBpZiAodHJhdmVyc2VDb250ZXh0UG9vbC5sZW5ndGggPCBQT09MX1NJWkUpIHtcbiAgICB0cmF2ZXJzZUNvbnRleHRQb29sLnB1c2godHJhdmVyc2VDb250ZXh0KTtcbiAgfVxufVxuXG4vKipcbiAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgY29udGFpbmVyLlxuICogQHBhcmFtIHshc3RyaW5nfSBuYW1lU29GYXIgTmFtZSBvZiB0aGUga2V5IHBhdGggc28gZmFyLlxuICogQHBhcmFtIHshZnVuY3Rpb259IGNhbGxiYWNrIENhbGxiYWNrIHRvIGludm9rZSB3aXRoIGVhY2ggY2hpbGQgZm91bmQuXG4gKiBAcGFyYW0gez8qfSB0cmF2ZXJzZUNvbnRleHQgVXNlZCB0byBwYXNzIGluZm9ybWF0aW9uIHRocm91Z2hvdXQgdGhlIHRyYXZlcnNhbFxuICogcHJvY2Vzcy5cbiAqIEByZXR1cm4geyFudW1iZXJ9IFRoZSBudW1iZXIgb2YgY2hpbGRyZW4gaW4gdGhpcyBzdWJ0cmVlLlxuICovXG5mdW5jdGlvbiB0cmF2ZXJzZUFsbENoaWxkcmVuSW1wbChcbiAgY2hpbGRyZW4sXG4gIG5hbWVTb0ZhcixcbiAgY2FsbGJhY2ssXG4gIHRyYXZlcnNlQ29udGV4dCxcbikge1xuICBjb25zdCB0eXBlID0gdHlwZW9mIGNoaWxkcmVuO1xuXG4gIGlmICh0eXBlID09PSAndW5kZWZpbmVkJyB8fCB0eXBlID09PSAnYm9vbGVhbicpIHtcbiAgICAvLyBBbGwgb2YgdGhlIGFib3ZlIGFyZSBwZXJjZWl2ZWQgYXMgbnVsbC5cbiAgICBjaGlsZHJlbiA9IG51bGw7XG4gIH1cblxuICBsZXQgaW52b2tlQ2FsbGJhY2sgPSBmYWxzZTtcblxuICBpZiAoY2hpbGRyZW4gPT09IG51bGwpIHtcbiAgICBpbnZva2VDYWxsYmFjayA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgaW52b2tlQ2FsbGJhY2sgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIHN3aXRjaCAoY2hpbGRyZW4uJCR0eXBlb2YpIHtcbiAgICAgICAgICBjYXNlIFJFQUNUX0VMRU1FTlRfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgICAgICAgaW52b2tlQ2FsbGJhY2sgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKGludm9rZUNhbGxiYWNrKSB7XG4gICAgY2FsbGJhY2soXG4gICAgICB0cmF2ZXJzZUNvbnRleHQsXG4gICAgICBjaGlsZHJlbixcbiAgICAgIC8vIElmIGl0J3MgdGhlIG9ubHkgY2hpbGQsIHRyZWF0IHRoZSBuYW1lIGFzIGlmIGl0IHdhcyB3cmFwcGVkIGluIGFuIGFycmF5XG4gICAgICAvLyBzbyB0aGF0IGl0J3MgY29uc2lzdGVudCBpZiB0aGUgbnVtYmVyIG9mIGNoaWxkcmVuIGdyb3dzLlxuICAgICAgbmFtZVNvRmFyID09PSAnJyA/IFNFUEFSQVRPUiArIGdldENvbXBvbmVudEtleShjaGlsZHJlbiwgMCkgOiBuYW1lU29GYXIsXG4gICAgKTtcbiAgICByZXR1cm4gMTtcbiAgfVxuXG4gIGxldCBjaGlsZDtcbiAgbGV0IG5leHROYW1lO1xuICBsZXQgc3VidHJlZUNvdW50ID0gMDsgLy8gQ291bnQgb2YgY2hpbGRyZW4gZm91bmQgaW4gdGhlIGN1cnJlbnQgc3VidHJlZS5cbiAgY29uc3QgbmV4dE5hbWVQcmVmaXggPVxuICAgIG5hbWVTb0ZhciA9PT0gJycgPyBTRVBBUkFUT1IgOiBuYW1lU29GYXIgKyBTVUJTRVBBUkFUT1I7XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgY2hpbGQgPSBjaGlsZHJlbltpXTtcbiAgICAgIG5leHROYW1lID0gbmV4dE5hbWVQcmVmaXggKyBnZXRDb21wb25lbnRLZXkoY2hpbGQsIGkpO1xuICAgICAgc3VidHJlZUNvdW50ICs9IHRyYXZlcnNlQWxsQ2hpbGRyZW5JbXBsKFxuICAgICAgICBjaGlsZCxcbiAgICAgICAgbmV4dE5hbWUsXG4gICAgICAgIGNhbGxiYWNrLFxuICAgICAgICB0cmF2ZXJzZUNvbnRleHQsXG4gICAgICApO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBjb25zdCBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihjaGlsZHJlbik7XG4gICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBpZiAoX19ERVZfXykge1xuICAgICAgICAvLyBXYXJuIGFib3V0IHVzaW5nIE1hcHMgYXMgY2hpbGRyZW5cbiAgICAgICAgaWYgKGl0ZXJhdG9yRm4gPT09IGNoaWxkcmVuLmVudHJpZXMpIHtcbiAgICAgICAgICB3YXJuaW5nKFxuICAgICAgICAgICAgZGlkV2FybkFib3V0TWFwcyxcbiAgICAgICAgICAgICdVc2luZyBNYXBzIGFzIGNoaWxkcmVuIGlzIHVuc3VwcG9ydGVkIGFuZCB3aWxsIGxpa2VseSB5aWVsZCAnICtcbiAgICAgICAgICAgICAgJ3VuZXhwZWN0ZWQgcmVzdWx0cy4gQ29udmVydCBpdCB0byBhIHNlcXVlbmNlL2l0ZXJhYmxlIG9mIGtleWVkICcgK1xuICAgICAgICAgICAgICAnUmVhY3RFbGVtZW50cyBpbnN0ZWFkLicsXG4gICAgICAgICAgKTtcbiAgICAgICAgICBkaWRXYXJuQWJvdXRNYXBzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChjaGlsZHJlbik7XG4gICAgICBsZXQgc3RlcDtcbiAgICAgIGxldCBpaSA9IDA7XG4gICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgIGNoaWxkID0gc3RlcC52YWx1ZTtcbiAgICAgICAgbmV4dE5hbWUgPSBuZXh0TmFtZVByZWZpeCArIGdldENvbXBvbmVudEtleShjaGlsZCwgaWkrKyk7XG4gICAgICAgIHN1YnRyZWVDb3VudCArPSB0cmF2ZXJzZUFsbENoaWxkcmVuSW1wbChcbiAgICAgICAgICBjaGlsZCxcbiAgICAgICAgICBuZXh0TmFtZSxcbiAgICAgICAgICBjYWxsYmFjayxcbiAgICAgICAgICB0cmF2ZXJzZUNvbnRleHQsXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgbGV0IGFkZGVuZHVtID0gJyc7XG4gICAgICBpZiAoX19ERVZfXykge1xuICAgICAgICBhZGRlbmR1bSA9XG4gICAgICAgICAgJyBJZiB5b3UgbWVhbnQgdG8gcmVuZGVyIGEgY29sbGVjdGlvbiBvZiBjaGlsZHJlbiwgdXNlIGFuIGFycmF5ICcgK1xuICAgICAgICAgICdpbnN0ZWFkLicgK1xuICAgICAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0U3RhY2tBZGRlbmR1bSgpO1xuICAgICAgfVxuICAgICAgY29uc3QgY2hpbGRyZW5TdHJpbmcgPSAnJyArIGNoaWxkcmVuO1xuICAgICAgaW52YXJpYW50KFxuICAgICAgICBmYWxzZSxcbiAgICAgICAgJ09iamVjdHMgYXJlIG5vdCB2YWxpZCBhcyBhIFJlYWN0IGNoaWxkIChmb3VuZDogJXMpLiVzJyxcbiAgICAgICAgY2hpbGRyZW5TdHJpbmcgPT09ICdbb2JqZWN0IE9iamVjdF0nXG4gICAgICAgICAgPyAnb2JqZWN0IHdpdGgga2V5cyB7JyArIE9iamVjdC5rZXlzKGNoaWxkcmVuKS5qb2luKCcsICcpICsgJ30nXG4gICAgICAgICAgOiBjaGlsZHJlblN0cmluZyxcbiAgICAgICAgYWRkZW5kdW0sXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdWJ0cmVlQ291bnQ7XG59XG5cbi8qKlxuICogVHJhdmVyc2VzIGNoaWxkcmVuIHRoYXQgYXJlIHR5cGljYWxseSBzcGVjaWZpZWQgYXMgYHByb3BzLmNoaWxkcmVuYCwgYnV0XG4gKiBtaWdodCBhbHNvIGJlIHNwZWNpZmllZCB0aHJvdWdoIGF0dHJpYnV0ZXM6XG4gKlxuICogLSBgdHJhdmVyc2VBbGxDaGlsZHJlbih0aGlzLnByb3BzLmNoaWxkcmVuLCAuLi4pYFxuICogLSBgdHJhdmVyc2VBbGxDaGlsZHJlbih0aGlzLnByb3BzLmxlZnRQYW5lbENoaWxkcmVuLCAuLi4pYFxuICpcbiAqIFRoZSBgdHJhdmVyc2VDb250ZXh0YCBpcyBhbiBvcHRpb25hbCBhcmd1bWVudCB0aGF0IGlzIHBhc3NlZCB0aHJvdWdoIHRoZVxuICogZW50aXJlIHRyYXZlcnNhbC4gSXQgY2FuIGJlIHVzZWQgdG8gc3RvcmUgYWNjdW11bGF0aW9ucyBvciBhbnl0aGluZyBlbHNlIHRoYXRcbiAqIHRoZSBjYWxsYmFjayBtaWdodCBmaW5kIHJlbGV2YW50LlxuICpcbiAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgb2JqZWN0LlxuICogQHBhcmFtIHshZnVuY3Rpb259IGNhbGxiYWNrIFRvIGludm9rZSB1cG9uIHRyYXZlcnNpbmcgZWFjaCBjaGlsZC5cbiAqIEBwYXJhbSB7Pyp9IHRyYXZlcnNlQ29udGV4dCBDb250ZXh0IGZvciB0cmF2ZXJzYWwuXG4gKiBAcmV0dXJuIHshbnVtYmVyfSBUaGUgbnVtYmVyIG9mIGNoaWxkcmVuIGluIHRoaXMgc3VidHJlZS5cbiAqL1xuZnVuY3Rpb24gdHJhdmVyc2VBbGxDaGlsZHJlbihjaGlsZHJlbiwgY2FsbGJhY2ssIHRyYXZlcnNlQ29udGV4dCkge1xuICBpZiAoY2hpbGRyZW4gPT0gbnVsbCkge1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgcmV0dXJuIHRyYXZlcnNlQWxsQ2hpbGRyZW5JbXBsKGNoaWxkcmVuLCAnJywgY2FsbGJhY2ssIHRyYXZlcnNlQ29udGV4dCk7XG59XG5cbi8qKlxuICogR2VuZXJhdGUgYSBrZXkgc3RyaW5nIHRoYXQgaWRlbnRpZmllcyBhIGNvbXBvbmVudCB3aXRoaW4gYSBzZXQuXG4gKlxuICogQHBhcmFtIHsqfSBjb21wb25lbnQgQSBjb21wb25lbnQgdGhhdCBjb3VsZCBjb250YWluIGEgbWFudWFsIGtleS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBJbmRleCB0aGF0IGlzIHVzZWQgaWYgYSBtYW51YWwga2V5IGlzIG5vdCBwcm92aWRlZC5cbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZ2V0Q29tcG9uZW50S2V5KGNvbXBvbmVudCwgaW5kZXgpIHtcbiAgLy8gRG8gc29tZSB0eXBlY2hlY2tpbmcgaGVyZSBzaW5jZSB3ZSBjYWxsIHRoaXMgYmxpbmRseS4gV2Ugd2FudCB0byBlbnN1cmVcbiAgLy8gdGhhdCB3ZSBkb24ndCBibG9jayBwb3RlbnRpYWwgZnV0dXJlIEVTIEFQSXMuXG4gIGlmIChcbiAgICB0eXBlb2YgY29tcG9uZW50ID09PSAnb2JqZWN0JyAmJlxuICAgIGNvbXBvbmVudCAhPT0gbnVsbCAmJlxuICAgIGNvbXBvbmVudC5rZXkgIT0gbnVsbFxuICApIHtcbiAgICAvLyBFeHBsaWNpdCBrZXlcbiAgICByZXR1cm4gZXNjYXBlKGNvbXBvbmVudC5rZXkpO1xuICB9XG4gIC8vIEltcGxpY2l0IGtleSBkZXRlcm1pbmVkIGJ5IHRoZSBpbmRleCBpbiB0aGUgc2V0XG4gIHJldHVybiBpbmRleC50b1N0cmluZygzNik7XG59XG5cbmZ1bmN0aW9uIGZvckVhY2hTaW5nbGVDaGlsZChib29rS2VlcGluZywgY2hpbGQsIG5hbWUpIHtcbiAgY29uc3Qge2Z1bmMsIGNvbnRleHR9ID0gYm9va0tlZXBpbmc7XG4gIGZ1bmMuY2FsbChjb250ZXh0LCBjaGlsZCwgYm9va0tlZXBpbmcuY291bnQrKyk7XG59XG5cbi8qKlxuICogSXRlcmF0ZXMgdGhyb3VnaCBjaGlsZHJlbiB0aGF0IGFyZSB0eXBpY2FsbHkgc3BlY2lmaWVkIGFzIGBwcm9wcy5jaGlsZHJlbmAuXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVuZm9yZWFjaFxuICpcbiAqIFRoZSBwcm92aWRlZCBmb3JFYWNoRnVuYyhjaGlsZCwgaW5kZXgpIHdpbGwgYmUgY2FsbGVkIGZvciBlYWNoXG4gKiBsZWFmIGNoaWxkLlxuICpcbiAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgY29udGFpbmVyLlxuICogQHBhcmFtIHtmdW5jdGlvbigqLCBpbnQpfSBmb3JFYWNoRnVuY1xuICogQHBhcmFtIHsqfSBmb3JFYWNoQ29udGV4dCBDb250ZXh0IGZvciBmb3JFYWNoQ29udGV4dC5cbiAqL1xuZnVuY3Rpb24gZm9yRWFjaENoaWxkcmVuKGNoaWxkcmVuLCBmb3JFYWNoRnVuYywgZm9yRWFjaENvbnRleHQpIHtcbiAgaWYgKGNoaWxkcmVuID09IG51bGwpIHtcbiAgICByZXR1cm4gY2hpbGRyZW47XG4gIH1cbiAgY29uc3QgdHJhdmVyc2VDb250ZXh0ID0gZ2V0UG9vbGVkVHJhdmVyc2VDb250ZXh0KFxuICAgIG51bGwsXG4gICAgbnVsbCxcbiAgICBmb3JFYWNoRnVuYyxcbiAgICBmb3JFYWNoQ29udGV4dCxcbiAgKTtcbiAgdHJhdmVyc2VBbGxDaGlsZHJlbihjaGlsZHJlbiwgZm9yRWFjaFNpbmdsZUNoaWxkLCB0cmF2ZXJzZUNvbnRleHQpO1xuICByZWxlYXNlVHJhdmVyc2VDb250ZXh0KHRyYXZlcnNlQ29udGV4dCk7XG59XG5cbmZ1bmN0aW9uIG1hcFNpbmdsZUNoaWxkSW50b0NvbnRleHQoYm9va0tlZXBpbmcsIGNoaWxkLCBjaGlsZEtleSkge1xuICBjb25zdCB7cmVzdWx0LCBrZXlQcmVmaXgsIGZ1bmMsIGNvbnRleHR9ID0gYm9va0tlZXBpbmc7XG5cbiAgbGV0IG1hcHBlZENoaWxkID0gZnVuYy5jYWxsKGNvbnRleHQsIGNoaWxkLCBib29rS2VlcGluZy5jb3VudCsrKTtcbiAgaWYgKEFycmF5LmlzQXJyYXkobWFwcGVkQ2hpbGQpKSB7XG4gICAgbWFwSW50b1dpdGhLZXlQcmVmaXhJbnRlcm5hbChtYXBwZWRDaGlsZCwgcmVzdWx0LCBjaGlsZEtleSwgYyA9PiBjKTtcbiAgfSBlbHNlIGlmIChtYXBwZWRDaGlsZCAhPSBudWxsKSB7XG4gICAgaWYgKGlzVmFsaWRFbGVtZW50KG1hcHBlZENoaWxkKSkge1xuICAgICAgbWFwcGVkQ2hpbGQgPSBjbG9uZUFuZFJlcGxhY2VLZXkoXG4gICAgICAgIG1hcHBlZENoaWxkLFxuICAgICAgICAvLyBLZWVwIGJvdGggdGhlIChtYXBwZWQpIGFuZCBvbGQga2V5cyBpZiB0aGV5IGRpZmZlciwganVzdCBhc1xuICAgICAgICAvLyB0cmF2ZXJzZUFsbENoaWxkcmVuIHVzZWQgdG8gZG8gZm9yIG9iamVjdHMgYXMgY2hpbGRyZW5cbiAgICAgICAga2V5UHJlZml4ICtcbiAgICAgICAgICAobWFwcGVkQ2hpbGQua2V5ICYmICghY2hpbGQgfHwgY2hpbGQua2V5ICE9PSBtYXBwZWRDaGlsZC5rZXkpXG4gICAgICAgICAgICA/IGVzY2FwZVVzZXJQcm92aWRlZEtleShtYXBwZWRDaGlsZC5rZXkpICsgJy8nXG4gICAgICAgICAgICA6ICcnKSArXG4gICAgICAgICAgY2hpbGRLZXksXG4gICAgICApO1xuICAgIH1cbiAgICByZXN1bHQucHVzaChtYXBwZWRDaGlsZCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWFwSW50b1dpdGhLZXlQcmVmaXhJbnRlcm5hbChjaGlsZHJlbiwgYXJyYXksIHByZWZpeCwgZnVuYywgY29udGV4dCkge1xuICBsZXQgZXNjYXBlZFByZWZpeCA9ICcnO1xuICBpZiAocHJlZml4ICE9IG51bGwpIHtcbiAgICBlc2NhcGVkUHJlZml4ID0gZXNjYXBlVXNlclByb3ZpZGVkS2V5KHByZWZpeCkgKyAnLyc7XG4gIH1cbiAgY29uc3QgdHJhdmVyc2VDb250ZXh0ID0gZ2V0UG9vbGVkVHJhdmVyc2VDb250ZXh0KFxuICAgIGFycmF5LFxuICAgIGVzY2FwZWRQcmVmaXgsXG4gICAgZnVuYyxcbiAgICBjb250ZXh0LFxuICApO1xuICB0cmF2ZXJzZUFsbENoaWxkcmVuKGNoaWxkcmVuLCBtYXBTaW5nbGVDaGlsZEludG9Db250ZXh0LCB0cmF2ZXJzZUNvbnRleHQpO1xuICByZWxlYXNlVHJhdmVyc2VDb250ZXh0KHRyYXZlcnNlQ29udGV4dCk7XG59XG5cbi8qKlxuICogTWFwcyBjaGlsZHJlbiB0aGF0IGFyZSB0eXBpY2FsbHkgc3BlY2lmaWVkIGFzIGBwcm9wcy5jaGlsZHJlbmAuXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVubWFwXG4gKlxuICogVGhlIHByb3ZpZGVkIG1hcEZ1bmN0aW9uKGNoaWxkLCBrZXksIGluZGV4KSB3aWxsIGJlIGNhbGxlZCBmb3IgZWFjaFxuICogbGVhZiBjaGlsZC5cbiAqXG4gKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIGNvbnRhaW5lci5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24oKiwgaW50KX0gZnVuYyBUaGUgbWFwIGZ1bmN0aW9uLlxuICogQHBhcmFtIHsqfSBjb250ZXh0IENvbnRleHQgZm9yIG1hcEZ1bmN0aW9uLlxuICogQHJldHVybiB7b2JqZWN0fSBPYmplY3QgY29udGFpbmluZyB0aGUgb3JkZXJlZCBtYXAgb2YgcmVzdWx0cy5cbiAqL1xuZnVuY3Rpb24gbWFwQ2hpbGRyZW4oY2hpbGRyZW4sIGZ1bmMsIGNvbnRleHQpIHtcbiAgaWYgKGNoaWxkcmVuID09IG51bGwpIHtcbiAgICByZXR1cm4gY2hpbGRyZW47XG4gIH1cbiAgY29uc3QgcmVzdWx0ID0gW107XG4gIG1hcEludG9XaXRoS2V5UHJlZml4SW50ZXJuYWwoY2hpbGRyZW4sIHJlc3VsdCwgbnVsbCwgZnVuYywgY29udGV4dCk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ291bnQgdGhlIG51bWJlciBvZiBjaGlsZHJlbiB0aGF0IGFyZSB0eXBpY2FsbHkgc3BlY2lmaWVkIGFzXG4gKiBgcHJvcHMuY2hpbGRyZW5gLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjaGlsZHJlbmNvdW50XG4gKlxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBjb250YWluZXIuXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBudW1iZXIgb2YgY2hpbGRyZW4uXG4gKi9cbmZ1bmN0aW9uIGNvdW50Q2hpbGRyZW4oY2hpbGRyZW4pIHtcbiAgcmV0dXJuIHRyYXZlcnNlQWxsQ2hpbGRyZW4oY2hpbGRyZW4sICgpID0+IG51bGwsIG51bGwpO1xufVxuXG4vKipcbiAqIEZsYXR0ZW4gYSBjaGlsZHJlbiBvYmplY3QgKHR5cGljYWxseSBzcGVjaWZpZWQgYXMgYHByb3BzLmNoaWxkcmVuYCkgYW5kXG4gKiByZXR1cm4gYW4gYXJyYXkgd2l0aCBhcHByb3ByaWF0ZWx5IHJlLWtleWVkIGNoaWxkcmVuLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjaGlsZHJlbnRvYXJyYXlcbiAqL1xuZnVuY3Rpb24gdG9BcnJheShjaGlsZHJlbikge1xuICBjb25zdCByZXN1bHQgPSBbXTtcbiAgbWFwSW50b1dpdGhLZXlQcmVmaXhJbnRlcm5hbChjaGlsZHJlbiwgcmVzdWx0LCBudWxsLCBjaGlsZCA9PiBjaGlsZCk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgZmlyc3QgY2hpbGQgaW4gYSBjb2xsZWN0aW9uIG9mIGNoaWxkcmVuIGFuZCB2ZXJpZmllcyB0aGF0IHRoZXJlXG4gKiBpcyBvbmx5IG9uZSBjaGlsZCBpbiB0aGUgY29sbGVjdGlvbi5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0Y2hpbGRyZW5vbmx5XG4gKlxuICogVGhlIGN1cnJlbnQgaW1wbGVtZW50YXRpb24gb2YgdGhpcyBmdW5jdGlvbiBhc3N1bWVzIHRoYXQgYSBzaW5nbGUgY2hpbGQgZ2V0c1xuICogcGFzc2VkIHdpdGhvdXQgYSB3cmFwcGVyLCBidXQgdGhlIHB1cnBvc2Ugb2YgdGhpcyBoZWxwZXIgZnVuY3Rpb24gaXMgdG9cbiAqIGFic3RyYWN0IGF3YXkgdGhlIHBhcnRpY3VsYXIgc3RydWN0dXJlIG9mIGNoaWxkcmVuLlxuICpcbiAqIEBwYXJhbSB7P29iamVjdH0gY2hpbGRyZW4gQ2hpbGQgY29sbGVjdGlvbiBzdHJ1Y3R1cmUuXG4gKiBAcmV0dXJuIHtSZWFjdEVsZW1lbnR9IFRoZSBmaXJzdCBhbmQgb25seSBgUmVhY3RFbGVtZW50YCBjb250YWluZWQgaW4gdGhlXG4gKiBzdHJ1Y3R1cmUuXG4gKi9cbmZ1bmN0aW9uIG9ubHlDaGlsZChjaGlsZHJlbikge1xuICBpbnZhcmlhbnQoXG4gICAgaXNWYWxpZEVsZW1lbnQoY2hpbGRyZW4pLFxuICAgICdSZWFjdC5DaGlsZHJlbi5vbmx5IGV4cGVjdGVkIHRvIHJlY2VpdmUgYSBzaW5nbGUgUmVhY3QgZWxlbWVudCBjaGlsZC4nLFxuICApO1xuICByZXR1cm4gY2hpbGRyZW47XG59XG5cbmV4cG9ydCB7XG4gIGZvckVhY2hDaGlsZHJlbiBhcyBmb3JFYWNoLFxuICBtYXBDaGlsZHJlbiBhcyBtYXAsXG4gIGNvdW50Q2hpbGRyZW4gYXMgY291bnQsXG4gIG9ubHlDaGlsZCBhcyBvbmx5LFxuICB0b0FycmF5LFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0L3NyYy9SZWFjdENoaWxkcmVuLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==
webpackHotUpdate(0,{

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
                                                                                                                                                                                                                                                                               * Copyright (c) Facebook, Inc. and its affiliates.
                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                               * This source code is licensed under the MIT license found in the
                                                                                                                                                                                                                                                                               * LICENSE file in the root directory of this source tree.
                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                               * 
                                                                                                                                                                                                                                                                               */

exports.isSimpleFunctionComponent = isSimpleFunctionComponent;
exports.resolveLazyComponentTag = resolveLazyComponentTag;
exports.createWorkInProgress = createWorkInProgress;
exports.createHostRootFiber = createHostRootFiber;
exports.createFiberFromTypeAndProps = createFiberFromTypeAndProps;
exports.createFiberFromElement = createFiberFromElement;
exports.createFiberFromFragment = createFiberFromFragment;
exports.createFiberFromSuspense = createFiberFromSuspense;
exports.createFiberFromText = createFiberFromText;
exports.createFiberFromHostInstanceForDeletion = createFiberFromHostInstanceForDeletion;
exports.createFiberFromPortal = createFiberFromPortal;
exports.assignFiberPropertiesInDEV = assignFiberPropertiesInDEV;

var _invariant = __webpack_require__(0);

var _invariant2 = _interopRequireDefault(_invariant);

var _warningWithoutStack = __webpack_require__(1);

var _warningWithoutStack2 = _interopRequireDefault(_warningWithoutStack);

var _ReactFeatureFlags = __webpack_require__(3);

var _ReactSideEffectTags = __webpack_require__(8);

var _ReactWorkTags = __webpack_require__(4);

var _getComponentName = __webpack_require__(5);

var _getComponentName2 = _interopRequireDefault(_getComponentName);

var _ReactFiberDevToolsHook = __webpack_require__(39);

var _ReactFiberExpirationTime = __webpack_require__(9);

var _ReactTypeOfMode = __webpack_require__(13);

var _ReactSymbols = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hasBadMapPolyfill = void 0;

if (true) {
  hasBadMapPolyfill = false;
  try {
    var nonExtensibleObject = Object.preventExtensions({});
    var testMap = new Map([[nonExtensibleObject, null]]);
    var testSet = new Set([nonExtensibleObject]);
    // This is necessary for Rollup to not consider these unused.
    // https://github.com/rollup/rollup/issues/1771
    // TODO: we can remove these if Rollup fixes the bug.
    testMap.set(0, 0);
    testSet.add(0);
  } catch (e) {
    // TODO: Consider warning about bad polyfills
    hasBadMapPolyfill = true;
  }
}

// A Fiber is work on a Component that needs to be done or was done. There can
// be more than one per component.


var debugCounter = void 0;

if (true) {
  debugCounter = 1;
}

function FiberNode(tag, pendingProps, key, mode) {
  // Instance
  this.tag = tag;
  this.key = key;
  this.elementType = null;
  this.type = null;
  this.stateNode = null;

  // Fiber
  this.return = null;
  this.child = null;
  this.sibling = null;
  this.index = 0;

  this.ref = null;

  this.pendingProps = pendingProps;
  this.memoizedProps = null;
  this.updateQueue = null;
  this.memoizedState = null;
  this.contextDependencies = null;

  this.mode = mode;

  // Effects
  this.effectTag = _ReactSideEffectTags.NoEffect;
  this.nextEffect = null;

  this.firstEffect = null;
  this.lastEffect = null;

  this.expirationTime = _ReactFiberExpirationTime.NoWork;
  this.childExpirationTime = _ReactFiberExpirationTime.NoWork;

  this.alternate = null;

  if (_ReactFeatureFlags.enableProfilerTimer) {
    // Note: The following is done to avoid a v8 performance cliff.
    //
    // Initializing the fields below to smis and later updating them with
    // double values will cause Fibers to end up having separate shapes.
    // This behavior/bug has something to do with Object.preventExtension().
    // Fortunately this only impacts DEV builds.
    // Unfortunately it makes React unusably slow for some applications.
    // To work around this, initialize the fields below with doubles.
    //
    // Learn more about this here:
    // https://github.com/facebook/react/issues/14365
    // https://bugs.chromium.org/p/v8/issues/detail?id=8538
    this.actualDuration = Number.NaN;
    this.actualStartTime = Number.NaN;
    this.selfBaseDuration = Number.NaN;
    this.treeBaseDuration = Number.NaN;

    // It's okay to replace the initial doubles with smis after initialization.
    // This won't trigger the performance cliff mentioned above,
    // and it simplifies other profiler code (including DevTools).
    this.actualDuration = 0;
    this.actualStartTime = -1;
    this.selfBaseDuration = 0;
    this.treeBaseDuration = 0;
  }

  if (true) {
    this._debugID = debugCounter++;
    this._debugSource = null;
    this._debugOwner = null;
    this._debugIsCurrentlyTiming = false;
    if (!hasBadMapPolyfill && typeof Object.preventExtensions === 'function') {
      Object.preventExtensions(this);
    }
  }
}

// This is a constructor function, rather than a POJO constructor, still
// please ensure we do the following:
// 1) Nobody should add any instance methods on this. Instance methods can be
//    more difficult to predict when they get optimized and they are almost
//    never inlined properly in static compilers.
// 2) Nobody should rely on `instanceof Fiber` for type testing. We should
//    always know when it is a fiber.
// 3) We might want to experiment with using numeric keys since they are easier
//    to optimize in a non-JIT environment.
// 4) We can easily go from a constructor to a createFiber object literal if that
//    is faster.
// 5) It should be easy to port this to a C struct and keep a C implementation
//    compatible.
var createFiber = function createFiber(tag, pendingProps, key, mode) {
  // $FlowFixMe: the shapes are exact here but Flow doesn't like constructors
  return new FiberNode(tag, pendingProps, key, mode);
};

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function isSimpleFunctionComponent(type) {
  return typeof type === 'function' && !shouldConstruct(type) && type.defaultProps === undefined;
}

function resolveLazyComponentTag(Component) {
  if (typeof Component === 'function') {
    return shouldConstruct(Component) ? _ReactWorkTags.ClassComponent : _ReactWorkTags.FunctionComponent;
  } else if (Component !== undefined && Component !== null) {
    var $$typeof = Component.$$typeof;
    if ($$typeof === _ReactSymbols.REACT_FORWARD_REF_TYPE) {
      return _ReactWorkTags.ForwardRef;
    }
    if ($$typeof === _ReactSymbols.REACT_MEMO_TYPE) {
      return _ReactWorkTags.MemoComponent;
    }
  }
  return _ReactWorkTags.IndeterminateComponent;
}

// This is used to create an alternate fiber to do work on.
function createWorkInProgress(current, pendingProps, expirationTime) {
  var workInProgress = current.alternate;
  if (workInProgress === null) {
    // We use a double buffering pooling technique because we know that we'll
    // only ever need at most two versions of a tree. We pool the "other" unused
    // node that we're free to reuse. This is lazily created to avoid allocating
    // extra objects for things that are never updated. It also allow us to
    // reclaim the extra memory if needed.
    workInProgress = createFiber(current.tag, pendingProps, current.key, current.mode);
    workInProgress.elementType = current.elementType;
    workInProgress.type = current.type;
    workInProgress.stateNode = current.stateNode;

    if (true) {
      // DEV-only fields
      workInProgress._debugID = current._debugID;
      workInProgress._debugSource = current._debugSource;
      workInProgress._debugOwner = current._debugOwner;
    }

    workInProgress.alternate = current;
    current.alternate = workInProgress;
  } else {
    workInProgress.pendingProps = pendingProps;

    // We already have an alternate.
    // Reset the effect tag.
    workInProgress.effectTag = _ReactSideEffectTags.NoEffect;

    // The effect list is no longer valid.
    workInProgress.nextEffect = null;
    workInProgress.firstEffect = null;
    workInProgress.lastEffect = null;

    if (_ReactFeatureFlags.enableProfilerTimer) {
      // We intentionally reset, rather than copy, actualDuration & actualStartTime.
      // This prevents time from endlessly accumulating in new commits.
      // This has the downside of resetting values for different priority renders,
      // But works for yielding (the common case) and should support resuming.
      workInProgress.actualDuration = 0;
      workInProgress.actualStartTime = -1;
    }
  }

  workInProgress.childExpirationTime = current.childExpirationTime;
  workInProgress.expirationTime = current.expirationTime;

  workInProgress.child = current.child;
  workInProgress.memoizedProps = current.memoizedProps;
  workInProgress.memoizedState = current.memoizedState;
  workInProgress.updateQueue = current.updateQueue;
  workInProgress.contextDependencies = current.contextDependencies;

  // These will be overridden during the parent's reconciliation
  workInProgress.sibling = current.sibling;
  workInProgress.index = current.index;
  workInProgress.ref = current.ref;

  if (_ReactFeatureFlags.enableProfilerTimer) {
    workInProgress.selfBaseDuration = current.selfBaseDuration;
    workInProgress.treeBaseDuration = current.treeBaseDuration;
  }

  return workInProgress;
}

function createHostRootFiber(isConcurrent) {
  var mode = isConcurrent ? _ReactTypeOfMode.ConcurrentMode | _ReactTypeOfMode.StrictMode : _ReactTypeOfMode.NoContext;

  if (_ReactFeatureFlags.enableProfilerTimer && _ReactFiberDevToolsHook.isDevToolsPresent) {
    // Always collect profile timings when DevTools are present.
    // This enables DevTools to start capturing timing at any point–
    // Without some nodes in the tree having empty base times.
    mode |= _ReactTypeOfMode.ProfileMode;
  }

  return createFiber(_ReactWorkTags.HostRoot, null, null, mode);
}

function createFiberFromTypeAndProps(type, // React$ElementType
key, pendingProps, owner, mode, expirationTime) {
  var fiber = void 0;

  var fiberTag = _ReactWorkTags.IndeterminateComponent;
  // The resolved type is set if we know what the final type will be. I.e. it's not lazy.
  var resolvedType = type;
  if (typeof type === 'function') {
    if (shouldConstruct(type)) {
      fiberTag = _ReactWorkTags.ClassComponent;
    }
  } else if (typeof type === 'string') {
    fiberTag = _ReactWorkTags.HostComponent;
  } else {
    getTag: switch (type) {
      case _ReactSymbols.REACT_FRAGMENT_TYPE:
        return createFiberFromFragment(pendingProps.children, mode, expirationTime, key);
      case _ReactSymbols.REACT_CONCURRENT_MODE_TYPE:
        return createFiberFromMode(pendingProps, mode | _ReactTypeOfMode.ConcurrentMode | _ReactTypeOfMode.StrictMode, expirationTime, key);
      case _ReactSymbols.REACT_STRICT_MODE_TYPE:
        return createFiberFromMode(pendingProps, mode | _ReactTypeOfMode.StrictMode, expirationTime, key);
      case _ReactSymbols.REACT_PROFILER_TYPE:
        return createFiberFromProfiler(pendingProps, mode, expirationTime, key);
      case _ReactSymbols.REACT_SUSPENSE_TYPE:
        return createFiberFromSuspense(pendingProps, mode, expirationTime, key);
      default:
        {
          if ((typeof type === 'undefined' ? 'undefined' : _typeof(type)) === 'object' && type !== null) {
            switch (type.$$typeof) {
              case _ReactSymbols.REACT_PROVIDER_TYPE:
                fiberTag = _ReactWorkTags.ContextProvider;
                break getTag;
              case _ReactSymbols.REACT_CONTEXT_TYPE:
                // This is a consumer
                fiberTag = _ReactWorkTags.ContextConsumer;
                break getTag;
              case _ReactSymbols.REACT_FORWARD_REF_TYPE:
                fiberTag = _ReactWorkTags.ForwardRef;
                break getTag;
              case _ReactSymbols.REACT_MEMO_TYPE:
                fiberTag = _ReactWorkTags.MemoComponent;
                break getTag;
              case _ReactSymbols.REACT_LAZY_TYPE:
                fiberTag = _ReactWorkTags.LazyComponent;
                resolvedType = null;
                break getTag;
            }
          }
          var info = '';
          if (true) {
            if (type === undefined || (typeof type === 'undefined' ? 'undefined' : _typeof(type)) === 'object' && type !== null && Object.keys(type).length === 0) {
              info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and " + 'named imports.';
            }
            var ownerName = owner ? (0, _getComponentName2.default)(owner.type) : null;
            if (ownerName) {
              info += '\n\nCheck the render method of `' + ownerName + '`.';
            }
          }
          (0, _invariant2.default)(false, 'Element type is invalid: expected a string (for built-in ' + 'components) or a class/function (for composite components) ' + 'but got: %s.%s', type == null ? type : typeof type === 'undefined' ? 'undefined' : _typeof(type), info);
        }
    }
  }

  fiber = createFiber(fiberTag, pendingProps, key, mode);
  fiber.elementType = type;
  fiber.type = resolvedType;
  fiber.expirationTime = expirationTime;

  return fiber;
}

function createFiberFromElement(element, mode, expirationTime) {
  var owner = null;
  if (true) {
    owner = element._owner;
  }
  var type = element.type;
  var key = element.key;
  var pendingProps = element.props;
  var fiber = createFiberFromTypeAndProps(type, key, pendingProps, owner, mode, expirationTime);
  if (true) {
    fiber._debugSource = element._source;
    fiber._debugOwner = element._owner;
  }
  return fiber;
}

function createFiberFromFragment(elements, mode, expirationTime, key) {
  var fiber = createFiber(_ReactWorkTags.Fragment, elements, key, mode);
  fiber.expirationTime = expirationTime;
  return fiber;
}

function createFiberFromProfiler(pendingProps, mode, expirationTime, key) {
  if (true) {
    if (typeof pendingProps.id !== 'string' || typeof pendingProps.onRender !== 'function') {
      (0, _warningWithoutStack2.default)(false, 'Profiler must specify an "id" string and "onRender" function as props');
    }
  }

  var fiber = createFiber(_ReactWorkTags.Profiler, pendingProps, key, mode | _ReactTypeOfMode.ProfileMode);
  // TODO: The Profiler fiber shouldn't have a type. It has a tag.
  fiber.elementType = _ReactSymbols.REACT_PROFILER_TYPE;
  fiber.type = _ReactSymbols.REACT_PROFILER_TYPE;
  fiber.expirationTime = expirationTime;

  return fiber;
}

function createFiberFromMode(pendingProps, mode, expirationTime, key) {
  var fiber = createFiber(_ReactWorkTags.Mode, pendingProps, key, mode);

  // TODO: The Mode fiber shouldn't have a type. It has a tag.
  var type = (mode & _ReactTypeOfMode.ConcurrentMode) === _ReactTypeOfMode.NoContext ? _ReactSymbols.REACT_STRICT_MODE_TYPE : _ReactSymbols.REACT_CONCURRENT_MODE_TYPE;
  fiber.elementType = type;
  fiber.type = type;

  fiber.expirationTime = expirationTime;
  return fiber;
}

function createFiberFromSuspense(pendingProps, mode, expirationTime, key) {
  var fiber = createFiber(_ReactWorkTags.SuspenseComponent, pendingProps, key, mode);

  // TODO: The SuspenseComponent fiber shouldn't have a type. It has a tag.
  var type = _ReactSymbols.REACT_SUSPENSE_TYPE;
  fiber.elementType = type;
  fiber.type = type;

  fiber.expirationTime = expirationTime;
  return fiber;
}

function createFiberFromText(content, mode, expirationTime) {
  var fiber = createFiber(_ReactWorkTags.HostText, content, null, mode);
  fiber.expirationTime = expirationTime;
  return fiber;
}

function createFiberFromHostInstanceForDeletion() {
  var fiber = createFiber(_ReactWorkTags.HostComponent, null, null, _ReactTypeOfMode.NoContext);
  // TODO: These should not need a type.
  fiber.elementType = 'DELETED';
  fiber.type = 'DELETED';
  return fiber;
}

function createFiberFromPortal(portal, mode, expirationTime) {
  var pendingProps = portal.children !== null ? portal.children : [];
  var fiber = createFiber(_ReactWorkTags.HostPortal, pendingProps, portal.key, mode);
  fiber.expirationTime = expirationTime;
  fiber.stateNode = {
    containerInfo: portal.containerInfo,
    pendingChildren: null, // Used by persistent updates
    implementation: portal.implementation
  };
  return fiber;
}

// Used for stashing WIP properties to replay failed work in DEV.
function assignFiberPropertiesInDEV(target, source) {
  if (target === null) {
    // This Fiber's initial properties will always be overwritten.
    // We only use a Fiber to ensure the same hidden class so DEV isn't slow.
    target = createFiber(_ReactWorkTags.IndeterminateComponent, null, null, _ReactTypeOfMode.NoContext);
  }

  // This is intentionally written as a list of all properties.
  // We tried to use Object.assign() instead but this is called in
  // the hottest path, and Object.assign() was too slow:
  // https://github.com/facebook/react/issues/12502
  // This code is DEV-only so size is not a concern.

  target.tag = source.tag;
  target.key = source.key;
  target.elementType = source.elementType;
  target.type = source.type;
  target.stateNode = source.stateNode;
  target.return = source.return;
  target.child = source.child;
  target.sibling = source.sibling;
  target.index = source.index;
  target.ref = source.ref;
  target.pendingProps = source.pendingProps;
  target.memoizedProps = source.memoizedProps;
  target.updateQueue = source.updateQueue;
  target.memoizedState = source.memoizedState;
  target.contextDependencies = source.contextDependencies;
  target.mode = source.mode;
  target.effectTag = source.effectTag;
  target.nextEffect = source.nextEffect;
  target.firstEffect = source.firstEffect;
  target.lastEffect = source.lastEffect;
  target.expirationTime = source.expirationTime;
  target.childExpirationTime = source.childExpirationTime;
  target.alternate = source.alternate;
  if (_ReactFeatureFlags.enableProfilerTimer) {
    target.actualDuration = source.actualDuration;
    target.actualStartTime = source.actualStartTime;
    target.selfBaseDuration = source.selfBaseDuration;
    target.treeBaseDuration = source.treeBaseDuration;
  }
  target._debugID = source._debugID;
  target._debugSource = source._debugSource;
  target._debugOwner = source._debugOwner;
  target._debugIsCurrentlyTiming = source._debugIsCurrentlyTiming;
  return target;
}

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1yZWNvbmNpbGVyL3NyYy9SZWFjdEZpYmVyLmpzIl0sIm5hbWVzIjpbImlzU2ltcGxlRnVuY3Rpb25Db21wb25lbnQiLCJyZXNvbHZlTGF6eUNvbXBvbmVudFRhZyIsImNyZWF0ZVdvcmtJblByb2dyZXNzIiwiY3JlYXRlSG9zdFJvb3RGaWJlciIsImNyZWF0ZUZpYmVyRnJvbVR5cGVBbmRQcm9wcyIsImNyZWF0ZUZpYmVyRnJvbUVsZW1lbnQiLCJjcmVhdGVGaWJlckZyb21GcmFnbWVudCIsImNyZWF0ZUZpYmVyRnJvbVN1c3BlbnNlIiwiY3JlYXRlRmliZXJGcm9tVGV4dCIsImNyZWF0ZUZpYmVyRnJvbUhvc3RJbnN0YW5jZUZvckRlbGV0aW9uIiwiY3JlYXRlRmliZXJGcm9tUG9ydGFsIiwiYXNzaWduRmliZXJQcm9wZXJ0aWVzSW5ERVYiLCJoYXNCYWRNYXBQb2x5ZmlsbCIsIl9fREVWX18iLCJub25FeHRlbnNpYmxlT2JqZWN0IiwiT2JqZWN0IiwicHJldmVudEV4dGVuc2lvbnMiLCJ0ZXN0TWFwIiwiTWFwIiwidGVzdFNldCIsIlNldCIsInNldCIsImFkZCIsImUiLCJkZWJ1Z0NvdW50ZXIiLCJGaWJlck5vZGUiLCJ0YWciLCJwZW5kaW5nUHJvcHMiLCJrZXkiLCJtb2RlIiwiZWxlbWVudFR5cGUiLCJ0eXBlIiwic3RhdGVOb2RlIiwicmV0dXJuIiwiY2hpbGQiLCJzaWJsaW5nIiwiaW5kZXgiLCJyZWYiLCJtZW1vaXplZFByb3BzIiwidXBkYXRlUXVldWUiLCJtZW1vaXplZFN0YXRlIiwiY29udGV4dERlcGVuZGVuY2llcyIsImVmZmVjdFRhZyIsIk5vRWZmZWN0IiwibmV4dEVmZmVjdCIsImZpcnN0RWZmZWN0IiwibGFzdEVmZmVjdCIsImV4cGlyYXRpb25UaW1lIiwiTm9Xb3JrIiwiY2hpbGRFeHBpcmF0aW9uVGltZSIsImFsdGVybmF0ZSIsImVuYWJsZVByb2ZpbGVyVGltZXIiLCJhY3R1YWxEdXJhdGlvbiIsIk51bWJlciIsIk5hTiIsImFjdHVhbFN0YXJ0VGltZSIsInNlbGZCYXNlRHVyYXRpb24iLCJ0cmVlQmFzZUR1cmF0aW9uIiwiX2RlYnVnSUQiLCJfZGVidWdTb3VyY2UiLCJfZGVidWdPd25lciIsIl9kZWJ1Z0lzQ3VycmVudGx5VGltaW5nIiwiY3JlYXRlRmliZXIiLCJzaG91bGRDb25zdHJ1Y3QiLCJDb21wb25lbnQiLCJwcm90b3R5cGUiLCJpc1JlYWN0Q29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwidW5kZWZpbmVkIiwiQ2xhc3NDb21wb25lbnQiLCJGdW5jdGlvbkNvbXBvbmVudCIsIiQkdHlwZW9mIiwiUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSIsIkZvcndhcmRSZWYiLCJSRUFDVF9NRU1PX1RZUEUiLCJNZW1vQ29tcG9uZW50IiwiSW5kZXRlcm1pbmF0ZUNvbXBvbmVudCIsImN1cnJlbnQiLCJ3b3JrSW5Qcm9ncmVzcyIsImlzQ29uY3VycmVudCIsIkNvbmN1cnJlbnRNb2RlIiwiU3RyaWN0TW9kZSIsIk5vQ29udGV4dCIsImlzRGV2VG9vbHNQcmVzZW50IiwiUHJvZmlsZU1vZGUiLCJIb3N0Um9vdCIsIm93bmVyIiwiZmliZXIiLCJmaWJlclRhZyIsInJlc29sdmVkVHlwZSIsIkhvc3RDb21wb25lbnQiLCJnZXRUYWciLCJSRUFDVF9GUkFHTUVOVF9UWVBFIiwiY2hpbGRyZW4iLCJSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRSIsImNyZWF0ZUZpYmVyRnJvbU1vZGUiLCJSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFIiwiUkVBQ1RfUFJPRklMRVJfVFlQRSIsImNyZWF0ZUZpYmVyRnJvbVByb2ZpbGVyIiwiUkVBQ1RfU1VTUEVOU0VfVFlQRSIsIlJFQUNUX1BST1ZJREVSX1RZUEUiLCJDb250ZXh0UHJvdmlkZXIiLCJSRUFDVF9DT05URVhUX1RZUEUiLCJDb250ZXh0Q29uc3VtZXIiLCJSRUFDVF9MQVpZX1RZUEUiLCJMYXp5Q29tcG9uZW50IiwiaW5mbyIsImtleXMiLCJsZW5ndGgiLCJvd25lck5hbWUiLCJlbGVtZW50IiwiX293bmVyIiwicHJvcHMiLCJfc291cmNlIiwiZWxlbWVudHMiLCJGcmFnbWVudCIsImlkIiwib25SZW5kZXIiLCJQcm9maWxlciIsIk1vZGUiLCJTdXNwZW5zZUNvbXBvbmVudCIsImNvbnRlbnQiLCJIb3N0VGV4dCIsInBvcnRhbCIsIkhvc3RQb3J0YWwiLCJjb250YWluZXJJbmZvIiwicGVuZGluZ0NoaWxkcmVuIiwiaW1wbGVtZW50YXRpb24iLCJ0YXJnZXQiLCJzb3VyY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs4UUFBQTs7Ozs7Ozs7O1FBaVVnQkEseUIsR0FBQUEseUI7UUFRQUMsdUIsR0FBQUEsdUI7UUFnQkFDLG9CLEdBQUFBLG9CO1FBMkVBQyxtQixHQUFBQSxtQjtRQWFBQywyQixHQUFBQSwyQjtRQTBHQUMsc0IsR0FBQUEsc0I7UUEyQkFDLHVCLEdBQUFBLHVCO1FBMERBQyx1QixHQUFBQSx1QjtRQWlCQUMsbUIsR0FBQUEsbUI7UUFVQUMsc0MsR0FBQUEsc0M7UUFRQUMscUIsR0FBQUEscUI7UUFpQkFDLDBCLEdBQUFBLDBCOztBQWxwQmhCOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFrQkE7Ozs7QUFFQTs7QUFDQTs7QUFDQTs7QUFNQTs7OztBQWFBLElBQUlDLDBCQUFKOztBQUVBLElBQUlDLElBQUosRUFBYTtBQUNYRCxzQkFBb0IsS0FBcEI7QUFDQSxNQUFJO0FBQ0YsUUFBTUUsc0JBQXNCQyxPQUFPQyxpQkFBUCxDQUF5QixFQUF6QixDQUE1QjtBQUNBLFFBQU1DLFVBQVUsSUFBSUMsR0FBSixDQUFRLENBQUMsQ0FBQ0osbUJBQUQsRUFBc0IsSUFBdEIsQ0FBRCxDQUFSLENBQWhCO0FBQ0EsUUFBTUssVUFBVSxJQUFJQyxHQUFKLENBQVEsQ0FBQ04sbUJBQUQsQ0FBUixDQUFoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBRyxZQUFRSSxHQUFSLENBQVksQ0FBWixFQUFlLENBQWY7QUFDQUYsWUFBUUcsR0FBUixDQUFZ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QUFPbkUsdUJBQVAsR0FBaUNvRSxPQUFPcEUsdUJBQXhDO0FBQ0EsU0FBT21FLE1BQVA7QUFDRCxDIiwiZmlsZSI6IjAuNGUzZTM1ZTZkNmU3ZTQ4NWQxMzAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGZsb3dcbiAqL1xuXG5pbXBvcnQgdHlwZSB7UmVhY3RFbGVtZW50LCBTb3VyY2V9IGZyb20gJ3NoYXJlZC9SZWFjdEVsZW1lbnRUeXBlJztcbmltcG9ydCB0eXBlIHtSZWFjdEZyYWdtZW50LCBSZWFjdFBvcnRhbCwgUmVmT2JqZWN0fSBmcm9tICdzaGFyZWQvUmVhY3RUeXBlcyc7XG5pbXBvcnQgdHlwZSB7V29ya1RhZ30gZnJvbSAnc2hhcmVkL1JlYWN0V29ya1RhZ3MnO1xuaW1wb3J0IHR5cGUge1R5cGVPZk1vZGV9IGZyb20gJy4vUmVhY3RUeXBlT2ZNb2RlJztcbmltcG9ydCB0eXBlIHtTaWRlRWZmZWN0VGFnfSBmcm9tICdzaGFyZWQvUmVhY3RTaWRlRWZmZWN0VGFncyc7XG5pbXBvcnQgdHlwZSB7RXhwaXJhdGlvblRpbWV9IGZyb20gJy4vUmVhY3RGaWJlckV4cGlyYXRpb25UaW1lJztcbmltcG9ydCB0eXBlIHtVcGRhdGVRdWV1ZX0gZnJvbSAnLi9SZWFjdFVwZGF0ZVF1ZXVlJztcbmltcG9ydCB0eXBlIHtDb250ZXh0RGVwZW5kZW5jeUxpc3R9IGZyb20gJy4vUmVhY3RGaWJlck5ld0NvbnRleHQnO1xuXG5pbXBvcnQgaW52YXJpYW50IGZyb20gJ3NoYXJlZC9pbnZhcmlhbnQnO1xuaW1wb3J0IHdhcm5pbmdXaXRob3V0U3RhY2sgZnJvbSAnc2hhcmVkL3dhcm5pbmdXaXRob3V0U3RhY2snO1xuaW1wb3J0IHtlbmFibGVQcm9maWxlclRpbWVyfSBmcm9tICdzaGFyZWQvUmVhY3RGZWF0dXJlRmxhZ3MnO1xuaW1wb3J0IHtOb0VmZmVjdH0gZnJvbSAnc2hhcmVkL1JlYWN0U2lkZUVmZmVjdFRhZ3MnO1xuaW1wb3J0IHtcbiAgSW5kZXRlcm1pbmF0ZUNvbXBvbmVudCxcbiAgQ2xhc3NDb21wb25lbnQsXG4gIEhvc3RSb290LFxuICBIb3N0Q29tcG9uZW50LFxuICBIb3N0VGV4dCxcbiAgSG9zdFBvcnRhbCxcbiAgRm9yd2FyZFJlZixcbiAgRnJhZ21lbnQsXG4gIE1vZGUsXG4gIENvbnRleHRQcm92aWRlcixcbiAgQ29udGV4dENvbnN1bWVyLFxuICBQcm9maWxlcixcbiAgU3VzcGVuc2VDb21wb25lbnQsXG4gIEZ1bmN0aW9uQ29tcG9uZW50LFxuICBNZW1vQ29tcG9uZW50LFxuICBMYXp5Q29tcG9uZW50LFxufSBmcm9tICdzaGFyZWQvUmVhY3RXb3JrVGFncyc7XG5pbXBvcnQgZ2V0Q29tcG9uZW50TmFtZSBmcm9tICdzaGFyZWQvZ2V0Q29tcG9uZW50TmFtZSc7XG5cbmltcG9ydCB7aXNEZXZUb29sc1ByZXNlbnR9IGZyb20gJy4vUmVhY3RGaWJlckRldlRvb2xzSG9vayc7XG5pbXBvcnQge05vV29ya30gZnJvbSAnLi9SZWFjdEZpYmVyRXhwaXJhdGlvblRpbWUnO1xuaW1wb3J0IHtcbiAgTm9Db250ZXh0LFxuICBDb25jdXJyZW50TW9kZSxcbiAgUHJvZmlsZU1vZGUsXG4gIFN0cmljdE1vZGUsXG59IGZyb20gJy4vUmVhY3RUeXBlT2ZNb2RlJztcbmltcG9ydCB7XG4gIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUsXG4gIFJFQUNUX0ZSQUdNRU5UX1RZUEUsXG4gIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUsXG4gIFJFQUNUX1BST0ZJTEVSX1RZUEUsXG4gIFJFQUNUX1BST1ZJREVSX1RZUEUsXG4gIFJFQUNUX0NPTlRFWFRfVFlQRSxcbiAgUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEUsXG4gIFJFQUNUX1NVU1BFTlNFX1RZUEUsXG4gIFJFQUNUX01FTU9fVFlQRSxcbiAgUkVBQ1RfTEFaWV9UWVBFLFxufSBmcm9tICdzaGFyZWQvUmVhY3RTeW1ib2xzJztcblxubGV0IGhhc0JhZE1hcFBvbHlmaWxsO1xuXG5pZiAoX19ERVZfXykge1xuICBoYXNCYWRNYXBQb2x5ZmlsbCA9IGZhbHNlO1xuICB0cnkge1xuICAgIGNvbnN0IG5vbkV4dGVuc2libGVPYmplY3QgPSBPYmplY3QucHJldmVudEV4dGVuc2lvbnMoe30pO1xuICAgIGNvbnN0IHRlc3RNYXAgPSBuZXcgTWFwKFtbbm9uRXh0ZW5zaWJsZU9iamVjdCwgbnVsbF1dKTtcbiAgICBjb25zdCB0ZXN0U2V0ID0gbmV3IFNldChbbm9uRXh0ZW5zaWJsZU9iamVjdF0pO1xuICAgIC8vIFRoaXMgaXMgbmVjZXNzYXJ5IGZvciBSb2xsdXAgdG8gbm90IGNvbnNpZGVyIHRoZXNlIHVudXNlZC5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vcm9sbHVwL3JvbGx1cC9pc3N1ZXMvMTc3MVxuICAgIC8vIFRPRE86IHdlIGNhbiByZW1vdmUgdGhlc2UgaWYgUm9sbHVwIGZpeGVzIHRoZSBidWcuXG4gICAgdGVzdE1hcC5zZXQoMCwgMCk7XG4gICAgdGVzdFNldC5hZGQoMCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICAvLyBUT0RPOiBDb25zaWRlciB3YXJuaW5nIGFib3V0IGJhZCBwb2x5ZmlsbHNcbiAgICBoYXNCYWRNYXBQb2x5ZmlsbCA9IHRydWU7XG4gIH1cbn1cblxuLy8gQSBGaWJlciBpcyB3b3JrIG9uIGEgQ29tcG9uZW50IHRoYXQgbmVlZHMgdG8gYmUgZG9uZSBvciB3YXMgZG9uZS4gVGhlcmUgY2FuXG4vLyBiZSBtb3JlIHRoYW4gb25lIHBlciBjb21wb25lbnQuXG5leHBvcnQgdHlwZSBGaWJlciA9IHt8XG4gIC8vIFRoZXNlIGZpcnN0IGZpZWxkcyBhcmUgY29uY2VwdHVhbGx5IG1lbWJlcnMgb2YgYW4gSW5zdGFuY2UuIFRoaXMgdXNlZCB0b1xuICAvLyBiZSBzcGxpdCBpbnRvIGEgc2VwYXJhdGUgdHlwZSBhbmQgaW50ZXJzZWN0ZWQgd2l0aCB0aGUgb3RoZXIgRmliZXIgZmllbGRzLFxuICAvLyBidXQgdW50aWwgRmxvdyBmaXhlcyBpdHMgaW50ZXJzZWN0aW9uIGJ1Z3MsIHdlJ3ZlIG1lcmdlZCB0aGVtIGludG8gYVxuICAvLyBzaW5nbGUgdHlwZS5cblxuICAvLyBBbiBJbnN0YW5jZSBpcyBzaGFyZWQgYmV0d2VlbiBhbGwgdmVyc2lvbnMgb2YgYSBjb21wb25lbnQuIFdlIGNhbiBlYXNpbHlcbiAgLy8gYnJlYWsgdGhpcyBvdXQgaW50byBhIHNlcGFyYXRlIG9iamVjdCB0byBhdm9pZCBjb3B5aW5nIHNvIG11Y2ggdG8gdGhlXG4gIC8vIGFsdGVybmF0ZSB2ZXJzaW9ucyBvZiB0aGUgdHJlZS4gV2UgcHV0IHRoaXMgb24gYSBzaW5nbGUgb2JqZWN0IGZvciBub3cgdG9cbiAgLy8gbWluaW1pemUgdGhlIG51bWJlciBvZiBvYmplY3RzIGNyZWF0ZWQgZHVyaW5nIHRoZSBpbml0aWFsIHJlbmRlci5cblxuICAvLyBUYWcgaWRlbnRpZnlpbmcgdGhlIHR5cGUgb2YgZmliZXIuXG4gIHRhZzogV29ya1RhZyxcblxuICAvLyBVbmlxdWUgaWRlbnRpZmllciBvZiB0aGlzIGNoaWxkLlxuICBrZXk6IG51bGwgfCBzdHJpbmcsXG5cbiAgLy8gVGhlIHZhbHVlIG9mIGVsZW1lbnQudHlwZSB3aGljaCBpcyB1c2VkIHRvIHByZXNlcnZlIHRoZSBpZGVudGl0eSBkdXJpbmdcbiAgLy8gcmVjb25jaWxpYXRpb24gb2YgdGhpcyBjaGlsZC5cbiAgZWxlbWVudFR5cGU6IGFueSxcblxuICAvLyBUaGUgcmVzb2x2ZWQgZnVuY3Rpb24vY2xhc3MvIGFzc29jaWF0ZWQgd2l0aCB0aGlzIGZpYmVyLlxuICB0eXBlOiBhbnksXG5cbiAgLy8gVGhlIGxvY2FsIHN0YXRlIGFzc29jaWF0ZWQgd2l0aCB0aGlzIGZpYmVyLlxuICBzdGF0ZU5vZGU6IGFueSxcblxuICAvLyBDb25jZXB0dWFsIGFsaWFzZXNcbiAgLy8gcGFyZW50IDogSW5zdGFuY2UgLT4gcmV0dXJuIFRoZSBwYXJlbnQgaGFwcGVucyB0byBiZSB0aGUgc2FtZSBhcyB0aGVcbiAgLy8gcmV0dXJuIGZpYmVyIHNpbmNlIHdlJ3ZlIG1lcmdlZCB0aGUgZmliZXIgYW5kIGluc3RhbmNlLlxuXG4gIC8vIFJlbWFpbmluZyBmaWVsZHMgYmVsb25nIHRvIEZpYmVyXG5cbiAgLy8gVGhlIEZpYmVyIHRvIHJldHVybiB0byBhZnRlciBmaW5pc2hpbmcgcHJvY2Vzc2luZyB0aGlzIG9uZS5cbiAgLy8gVGhpcyBpcyBlZmZlY3RpdmVseSB0aGUgcGFyZW50LCBidXQgdGhlcmUgY2FuIGJlIG11bHRpcGxlIHBhcmVudHMgKHR3bylcbiAgLy8gc28gdGhpcyBpcyBvbmx5IHRoZSBwYXJlbnQgb2YgdGhlIHRoaW5nIHdlJ3JlIGN1cnJlbnRseSBwcm9jZXNzaW5nLlxuICAvLyBJdCBpcyBjb25jZXB0dWFsbHkgdGhlIHNhbWUgYXMgdGhlIHJldHVybiBhZGRyZXNzIG9mIGEgc3RhY2sgZnJhbWUuXG4gIHJldHVybjogRmliZXIgfCBudWxsLFxuXG4gIC8vIFNpbmdseSBMaW5rZWQgTGlzdCBUcmVlIFN0cnVjdHVyZS5cbiAgY2hpbGQ6IEZpYmVyIHwgbnVsbCxcbiAgc2libGluZzogRmliZXIgfCBudWxsLFxuICBpbmRleDogbnVtYmVyLFxuXG4gIC8vIFRoZSByZWYgbGFzdCB1c2VkIHRvIGF0dGFjaCB0aGlzIG5vZGUuXG4gIC8vIEknbGwgYXZvaWQgYWRkaW5nIGFuIG93bmVyIGZpZWxkIGZvciBwcm9kIGFuZCBtb2RlbCB0aGF0IGFzIGZ1bmN0aW9ucy5cbiAgcmVmOiBudWxsIHwgKCgoaGFuZGxlOiBtaXhlZCkgPT4gdm9pZCkgJiB7X3N0cmluZ1JlZjogP3N0cmluZ30pIHwgUmVmT2JqZWN0LFxuXG4gIC8vIElucHV0IGlzIHRoZSBkYXRhIGNvbWluZyBpbnRvIHByb2Nlc3MgdGhpcyBmaWJlci4gQXJndW1lbnRzLiBQcm9wcy5cbiAgcGVuZGluZ1Byb3BzOiBhbnksIC8vIFRoaXMgdHlwZSB3aWxsIGJlIG1vcmUgc3BlY2lmaWMgb25jZSB3ZSBvdmVybG9hZCB0aGUgdGFnLlxuICBtZW1vaXplZFByb3BzOiBhbnksIC8vIFRoZSBwcm9wcyB1c2VkIHRvIGNyZWF0ZSB0aGUgb3V0cHV0LlxuXG4gIC8vIEEgcXVldWUgb2Ygc3RhdGUgdXBkYXRlcyBhbmQgY2FsbGJhY2tzLlxuICB1cGRhdGVRdWV1ZTogVXBkYXRlUXVldWU8YW55PiB8IG51bGwsXG5cbiAgLy8gVGhlIHN0YXRlIHVzZWQgdG8gY3JlYXRlIHRoZSBvdXRwdXRcbiAgbWVtb2l6ZWRTdGF0ZTogYW55LFxuXG4gIC8vIEEgbGlua2VkLWxpc3Qgb2YgY29udGV4dHMgdGhhdCB0aGlzIGZpYmVyIGRlcGVuZHMgb25cbiAgY29udGV4dERlcGVuZGVuY2llczogQ29udGV4dERlcGVuZGVuY3lMaXN0IHwgbnVsbCxcblxuICAvLyBCaXRmaWVsZCB0aGF0IGRlc2NyaWJlcyBwcm9wZXJ0aWVzIGFib3V0IHRoZSBmaWJlciBhbmQgaXRzIHN1YnRyZWUuIEUuZy5cbiAgLy8gdGhlIENvbmN1cnJlbnRNb2RlIGZsYWcgaW5kaWNhdGVzIHdoZXRoZXIgdGhlIHN1YnRyZWUgc2hvdWxkIGJlIGFzeW5jLWJ5LVxuICAvLyBkZWZhdWx0LiBXaGVuIGEgZmliZXIgaXMgY3JlYXRlZCwgaXQgaW5oZXJpdHMgdGhlIG1vZGUgb2YgaXRzXG4gIC8vIHBhcmVudC4gQWRkaXRpb25hbCBmbGFncyBjYW4gYmUgc2V0IGF0IGNyZWF0aW9uIHRpbWUsIGJ1dCBhZnRlciB0aGF0IHRoZVxuICAvLyB2YWx1ZSBzaG91bGQgcmVtYWluIHVuY2hhbmdlZCB0aHJvdWdob3V0IHRoZSBmaWJlcidzIGxpZmV0aW1lLCBwYXJ0aWN1bGFybHlcbiAgLy8gYmVmb3JlIGl0cyBjaGlsZCBmaWJlcnMgYXJlIGNyZWF0ZWQuXG4gIG1vZGU6IFR5cGVPZk1vZGUsXG5cbiAgLy8gRWZmZWN0XG4gIGVmZmVjdFRhZzogU2lkZUVmZmVjdFRhZyxcblxuICAvLyBTaW5nbHkgbGlua2VkIGxpc3QgZmFzdCBwYXRoIHRvIHRoZSBuZXh0IGZpYmVyIHdpdGggc2lkZS1lZmZlY3RzLlxuICBuZXh0RWZmZWN0OiBGaWJlciB8IG51bGwsXG5cbiAgLy8gVGhlIGZpcnN0IGFuZCBsYXN0IGZpYmVyIHdpdGggc2lkZS1lZmZlY3Qgd2l0aGluIHRoaXMgc3VidHJlZS4gVGhpcyBhbGxvd3NcbiAgLy8gdXMgdG8gcmV1c2UgYSBzbGljZSBvZiB0aGUgbGlua2VkIGxpc3Qgd2hlbiB3ZSByZXVzZSB0aGUgd29yayBkb25lIHdpdGhpblxuICAvLyB0aGlzIGZpYmVyLlxuICBmaXJzdEVmZmVjdDogRmliZXIgfCBudWxsLFxuICBsYXN0RWZmZWN0OiBGaWJlciB8IG51bGwsXG5cbiAgLy8gUmVwcmVzZW50cyBhIHRpbWUgaW4gdGhlIGZ1dHVyZSBieSB3aGljaCB0aGlzIHdvcmsgc2hvdWxkIGJlIGNvbXBsZXRlZC5cbiAgLy8gRG9lcyBub3QgaW5jbHVkZSB3b3JrIGZvdW5kIGluIGl0cyBzdWJ0cmVlLlxuICBleHBpcmF0aW9uVGltZTogRXhwaXJhdGlvblRpbWUsXG5cbiAgLy8gVGhpcyBpcyB1c2VkIHRvIHF1aWNrbHkgZGV0ZXJtaW5lIGlmIGEgc3VidHJlZSBoYXMgbm8gcGVuZGluZyBjaGFuZ2VzLlxuICBjaGlsZEV4cGlyYXRpb25UaW1lOiBFeHBpcmF0aW9uVGltZSxcblxuICAvLyBUaGlzIGlzIGEgcG9vbGVkIHZlcnNpb24gb2YgYSBGaWJlci4gRXZlcnkgZmliZXIgdGhhdCBnZXRzIHVwZGF0ZWQgd2lsbFxuICAvLyBldmVudHVhbGx5IGhhdmUgYSBwYWlyLiBUaGVyZSBhcmUgY2FzZXMgd2hlbiB3ZSBjYW4gY2xlYW4gdXAgcGFpcnMgdG8gc2F2ZVxuICAvLyBtZW1vcnkgaWYgd2UgbmVlZCB0by5cbiAgYWx0ZXJuYXRlOiBGaWJlciB8IG51bGwsXG5cbiAgLy8gVGltZSBzcGVudCByZW5kZXJpbmcgdGhpcyBGaWJlciBhbmQgaXRzIGRlc2NlbmRhbnRzIGZvciB0aGUgY3VycmVudCB1cGRhdGUuXG4gIC8vIFRoaXMgdGVsbHMgdXMgaG93IHdlbGwgdGhlIHRyZWUgbWFrZXMgdXNlIG9mIHNDVSBmb3IgbWVtb2l6YXRpb24uXG4gIC8vIEl0IGlzIHJlc2V0IHRvIDAgZWFjaCB0aW1lIHdlIHJlbmRlciBhbmQgb25seSB1cGRhdGVkIHdoZW4gd2UgZG9uJ3QgYmFpbG91dC5cbiAgLy8gVGhpcyBmaWVsZCBpcyBvbmx5IHNldCB3aGVuIHRoZSBlbmFibGVQcm9maWxlclRpbWVyIGZsYWcgaXMgZW5hYmxlZC5cbiAgYWN0dWFsRHVyYXRpb24/OiBudW1iZXIsXG5cbiAgLy8gSWYgdGhlIEZpYmVyIGlzIGN1cnJlbnRseSBhY3RpdmUgaW4gdGhlIFwicmVuZGVyXCIgcGhhc2UsXG4gIC8vIFRoaXMgbWFya3MgdGhlIHRpbWUgYXQgd2hpY2ggdGhlIHdvcmsgYmVnYW4uXG4gIC8vIFRoaXMgZmllbGQgaXMgb25seSBzZXQgd2hlbiB0aGUgZW5hYmxlUHJvZmlsZXJUaW1lciBmbGFnIGlzIGVuYWJsZWQuXG4gIGFjdHVhbFN0YXJ0VGltZT86IG51bWJlcixcblxuICAvLyBEdXJhdGlvbiBvZiB0aGUgbW9zdCByZWNlbnQgcmVuZGVyIHRpbWUgZm9yIHRoaXMgRmliZXIuXG4gIC8vIFRoaXMgdmFsdWUgaXMgbm90IHVwZGF0ZWQgd2hlbiB3ZSBiYWlsb3V0IGZvciBtZW1vaXphdGlvbiBwdXJwb3Nlcy5cbiAgLy8gVGhpcyBmaWVsZCBpcyBvbmx5IHNldCB3aGVuIHRoZSBlbmFibGVQcm9maWxlclRpbWVyIGZsYWcgaXMgZW5hYmxlZC5cbiAgc2VsZkJhc2VEdXJhdGlvbj86IG51bWJlcixcblxuICAvLyBTdW0gb2YgYmFzZSB0aW1lcyBmb3IgYWxsIGRlc2NlZGVudHMgb2YgdGhpcyBGaWJlci5cbiAgLy8gVGhpcyB2YWx1ZSBidWJibGVzIHVwIGR1cmluZyB0aGUgXCJjb21wbGV0ZVwiIHBoYXNlLlxuICAvLyBUaGlzIGZpZWxkIGlzIG9ubHkgc2V0IHdoZW4gdGhlIGVuYWJsZVByb2ZpbGVyVGltZXIgZmxhZyBpcyBlbmFibGVkLlxuICB0cmVlQmFzZUR1cmF0aW9uPzogbnVtYmVyLFxuXG4gIC8vIENvbmNlcHR1YWwgYWxpYXNlc1xuICAvLyB3b3JrSW5Qcm9ncmVzcyA6IEZpYmVyIC0+ICBhbHRlcm5hdGUgVGhlIGFsdGVybmF0ZSB1c2VkIGZvciByZXVzZSBoYXBwZW5zXG4gIC8vIHRvIGJlIHRoZSBzYW1lIGFzIHdvcmsgaW4gcHJvZ3Jlc3MuXG4gIC8vIF9fREVWX18gb25seVxuICBfZGVidWdJRD86IG51bWJlcixcbiAgX2RlYnVnU291cmNlPzogU291cmNlIHwgbnVsbCxcbiAgX2RlYnVnT3duZXI/OiBGaWJlciB8IG51bGwsXG4gIF9kZWJ1Z0lzQ3VycmVudGx5VGltaW5nPzogYm9vbGVhbixcbnx9O1xuXG5sZXQgZGVidWdDb3VudGVyO1xuXG5pZiAoX19ERVZfXykge1xuICBkZWJ1Z0NvdW50ZXIgPSAxO1xufVxuXG5mdW5jdGlvbiBGaWJlck5vZGUoXG4gIHRhZzogV29ya1RhZyxcbiAgcGVuZGluZ1Byb3BzOiBtaXhlZCxcbiAga2V5OiBudWxsIHwgc3RyaW5nLFxuICBtb2RlOiBUeXBlT2ZNb2RlLFxuKSB7XG4gIC8vIEluc3RhbmNlXG4gIHRoaXMudGFnID0gdGFnO1xuICB0aGlzLmtleSA9IGtleTtcbiAgdGhpcy5lbGVtZW50VHlwZSA9IG51bGw7XG4gIHRoaXMudHlwZSA9IG51bGw7XG4gIHRoaXMuc3RhdGVOb2RlID0gbnVsbDtcblxuICAvLyBGaWJlclxuICB0aGlzLnJldHVybiA9IG51bGw7XG4gIHRoaXMuY2hpbGQgPSBudWxsO1xuICB0aGlzLnNpYmxpbmcgPSBudWxsO1xuICB0aGlzLmluZGV4ID0gMDtcblxuICB0aGlzLnJlZiA9IG51bGw7XG5cbiAgdGhpcy5wZW5kaW5nUHJvcHMgPSBwZW5kaW5nUHJvcHM7XG4gIHRoaXMubWVtb2l6ZWRQcm9wcyA9IG51bGw7XG4gIHRoaXMudXBkYXRlUXVldWUgPSBudWxsO1xuICB0aGlzLm1lbW9pemVkU3RhdGUgPSBudWxsO1xuICB0aGlzLmNvbnRleHREZXBlbmRlbmNpZXMgPSBudWxsO1xuXG4gIHRoaXMubW9kZSA9IG1vZGU7XG5cbiAgLy8gRWZmZWN0c1xuICB0aGlzLmVmZmVjdFRhZyA9IE5vRWZmZWN0O1xuICB0aGlzLm5leHRFZmZlY3QgPSBudWxsO1xuXG4gIHRoaXMuZmlyc3RFZmZlY3QgPSBudWxsO1xuICB0aGlzLmxhc3RFZmZlY3QgPSBudWxsO1xuXG4gIHRoaXMuZXhwaXJhdGlvblRpbWUgPSBOb1dvcms7XG4gIHRoaXMuY2hpbGRFeHBpcmF0aW9uVGltZSA9IE5vV29yaztcblxuICB0aGlzLmFsdGVybmF0ZSA9IG51bGw7XG5cbiAgaWYgKGVuYWJsZVByb2ZpbGVyVGltZXIpIHtcbiAgICAvLyBOb3RlOiBUaGUgZm9sbG93aW5nIGlzIGRvbmUgdG8gYXZvaWQgYSB2OCBwZXJmb3JtYW5jZSBjbGlmZi5cbiAgICAvL1xuICAgIC8vIEluaXRpYWxpemluZyB0aGUgZmllbGRzIGJlbG93IHRvIHNtaXMgYW5kIGxhdGVyIHVwZGF0aW5nIHRoZW0gd2l0aFxuICAgIC8vIGRvdWJsZSB2YWx1ZXMgd2lsbCBjYXVzZSBGaWJlcnMgdG8gZW5kIHVwIGhhdmluZyBzZXBhcmF0ZSBzaGFwZXMuXG4gICAgLy8gVGhpcyBiZWhhdmlvci9idWcgaGFzIHNvbWV0aGluZyB0byBkbyB3aXRoIE9iamVjdC5wcmV2ZW50RXh0ZW5zaW9uKCkuXG4gICAgLy8gRm9ydHVuYXRlbHkgdGhpcyBvbmx5IGltcGFjdHMgREVWIGJ1aWxkcy5cbiAgICAvLyBVbmZvcnR1bmF0ZWx5IGl0IG1ha2VzIFJlYWN0IHVudXNhYmx5IHNsb3cgZm9yIHNvbWUgYXBwbGljYXRpb25zLlxuICAgIC8vIFRvIHdvcmsgYXJvdW5kIHRoaXMsIGluaXRpYWxpemUgdGhlIGZpZWxkcyBiZWxvdyB3aXRoIGRvdWJsZXMuXG4gICAgLy9cbiAgICAvLyBMZWFybiBtb3JlIGFib3V0IHRoaXMgaGVyZTpcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzE0MzY1XG4gICAgLy8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9ODUzOFxuICAgIHRoaXMuYWN0dWFsRHVyYXRpb24gPSBOdW1iZXIuTmFOO1xuICAgIHRoaXMuYWN0dWFsU3RhcnRUaW1lID0gTnVtYmVyLk5hTjtcbiAgICB0aGlzLnNlbGZCYXNlRHVyYXRpb24gPSBOdW1iZXIuTmFOO1xuICAgIHRoaXMudHJlZUJhc2VEdXJhdGlvbiA9IE51bWJlci5OYU47XG5cbiAgICAvLyBJdCdzIG9rYXkgdG8gcmVwbGFjZSB0aGUgaW5pdGlhbCBkb3VibGVzIHdpdGggc21pcyBhZnRlciBpbml0aWFsaXphdGlvbi5cbiAgICAvLyBUaGlzIHdvbid0IHRyaWdnZXIgdGhlIHBlcmZvcm1hbmNlIGNsaWZmIG1lbnRpb25lZCBhYm92ZSxcbiAgICAvLyBhbmQgaXQgc2ltcGxpZmllcyBvdGhlciBwcm9maWxlciBjb2RlIChpbmNsdWRpbmcgRGV2VG9vbHMpLlxuICAgIHRoaXMuYWN0dWFsRHVyYXRpb24gPSAwO1xuICAgIHRoaXMuYWN0dWFsU3RhcnRUaW1lID0gLTE7XG4gICAgdGhpcy5zZWxmQmFzZUR1cmF0aW9uID0gMDtcbiAgICB0aGlzLnRyZWVCYXNlRHVyYXRpb24gPSAwO1xuICB9XG5cbiAgaWYgKF9fREVWX18pIHtcbiAgICB0aGlzLl9kZWJ1Z0lEID0gZGVidWdDb3VudGVyKys7XG4gICAgdGhpcy5fZGVidWdTb3VyY2UgPSBudWxsO1xuICAgIHRoaXMuX2RlYnVnT3duZXIgPSBudWxsO1xuICAgIHRoaXMuX2RlYnVnSXNDdXJyZW50bHlUaW1pbmcgPSBmYWxzZTtcbiAgICBpZiAoIWhhc0JhZE1hcFBvbHlmaWxsICYmIHR5cGVvZiBPYmplY3QucHJldmVudEV4dGVuc2lvbnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIE9iamVjdC5wcmV2ZW50RXh0ZW5zaW9ucyh0aGlzKTtcbiAgICB9XG4gIH1cbn1cblxuLy8gVGhpcyBpcyBhIGNvbnN0cnVjdG9yIGZ1bmN0aW9uLCByYXRoZXIgdGhhbiBhIFBPSk8gY29uc3RydWN0b3IsIHN0aWxsXG4vLyBwbGVhc2UgZW5zdXJlIHdlIGRvIHRoZSBmb2xsb3dpbmc6XG4vLyAxKSBOb2JvZHkgc2hvdWxkIGFkZCBhbnkgaW5zdGFuY2UgbWV0aG9kcyBvbiB0aGlzLiBJbnN0YW5jZSBtZXRob2RzIGNhbiBiZVxuLy8gICAgbW9yZSBkaWZmaWN1bHQgdG8gcHJlZGljdCB3aGVuIHRoZXkgZ2V0IG9wdGltaXplZCBhbmQgdGhleSBhcmUgYWxtb3N0XG4vLyAgICBuZXZlciBpbmxpbmVkIHByb3Blcmx5IGluIHN0YXRpYyBjb21waWxlcnMuXG4vLyAyKSBOb2JvZHkgc2hvdWxkIHJlbHkgb24gYGluc3RhbmNlb2YgRmliZXJgIGZvciB0eXBlIHRlc3RpbmcuIFdlIHNob3VsZFxuLy8gICAgYWx3YXlzIGtub3cgd2hlbiBpdCBpcyBhIGZpYmVyLlxuLy8gMykgV2UgbWlnaHQgd2FudCB0byBleHBlcmltZW50IHdpdGggdXNpbmcgbnVtZXJpYyBrZXlzIHNpbmNlIHRoZXkgYXJlIGVhc2llclxuLy8gICAgdG8gb3B0aW1pemUgaW4gYSBub24tSklUIGVudmlyb25tZW50LlxuLy8gNCkgV2UgY2FuIGVhc2lseSBnbyBmcm9tIGEgY29uc3RydWN0b3IgdG8gYSBjcmVhdGVGaWJlciBvYmplY3QgbGl0ZXJhbCBpZiB0aGF0XG4vLyAgICBpcyBmYXN0ZXIuXG4vLyA1KSBJdCBzaG91bGQgYmUgZWFzeSB0byBwb3J0IHRoaXMgdG8gYSBDIHN0cnVjdCBhbmQga2VlcCBhIEMgaW1wbGVtZW50YXRpb25cbi8vICAgIGNvbXBhdGlibGUuXG5jb25zdCBjcmVhdGVGaWJlciA9IGZ1bmN0aW9uKFxuICB0YWc6IFdvcmtUYWcsXG4gIHBlbmRpbmdQcm9wczogbWl4ZWQsXG4gIGtleTogbnVsbCB8IHN0cmluZyxcbiAgbW9kZTogVHlwZU9mTW9kZSxcbik6IEZpYmVyIHtcbiAgLy8gJEZsb3dGaXhNZTogdGhlIHNoYXBlcyBhcmUgZXhhY3QgaGVyZSBidXQgRmxvdyBkb2Vzbid0IGxpa2UgY29uc3RydWN0b3JzXG4gIHJldHVybiBuZXcgRmliZXJOb2RlKHRhZywgcGVuZGluZ1Byb3BzLCBrZXksIG1vZGUpO1xufTtcblxuZnVuY3Rpb24gc2hvdWxkQ29uc3RydWN0KENvbXBvbmVudDogRnVuY3Rpb24pIHtcbiAgY29uc3QgcHJvdG90eXBlID0gQ29tcG9uZW50LnByb3RvdHlwZTtcbiAgcmV0dXJuICEhKHByb3RvdHlwZSAmJiBwcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1NpbXBsZUZ1bmN0aW9uQ29tcG9uZW50KHR5cGU6IGFueSkge1xuICByZXR1cm4gKFxuICAgIHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nICYmXG4gICAgIXNob3VsZENvbnN0cnVjdCh0eXBlKSAmJlxuICAgIHR5cGUuZGVmYXVsdFByb3BzID09PSB1bmRlZmluZWRcbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVMYXp5Q29tcG9uZW50VGFnKENvbXBvbmVudDogRnVuY3Rpb24pOiBXb3JrVGFnIHtcbiAgaWYgKHR5cGVvZiBDb21wb25lbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gc2hvdWxkQ29uc3RydWN0KENvbXBvbmVudCkgPyBDbGFzc0NvbXBvbmVudCA6IEZ1bmN0aW9uQ29tcG9uZW50O1xuICB9IGVsc2UgaWYgKENvbXBvbmVudCAhPT0gdW5kZWZpbmVkICYmIENvbXBvbmVudCAhPT0gbnVsbCkge1xuICAgIGNvbnN0ICQkdHlwZW9mID0gQ29tcG9uZW50LiQkdHlwZW9mO1xuICAgIGlmICgkJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSkge1xuICAgICAgcmV0dXJuIEZvcndhcmRSZWY7XG4gICAgfVxuICAgIGlmICgkJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFKSB7XG4gICAgICByZXR1cm4gTWVtb0NvbXBvbmVudDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIEluZGV0ZXJtaW5hdGVDb21wb25lbnQ7XG59XG5cbi8vIFRoaXMgaXMgdXNlZCB0byBjcmVhdGUgYW4gYWx0ZXJuYXRlIGZpYmVyIHRvIGRvIHdvcmsgb24uXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlV29ya0luUHJvZ3Jlc3MoXG4gIGN1cnJlbnQ6IEZpYmVyLFxuICBwZW5kaW5nUHJvcHM6IGFueSxcbiAgZXhwaXJhdGlvblRpbWU6IEV4cGlyYXRpb25UaW1lLFxuKTogRmliZXIge1xuICBsZXQgd29ya0luUHJvZ3Jlc3MgPSBjdXJyZW50LmFsdGVybmF0ZTtcbiAgaWYgKHdvcmtJblByb2dyZXNzID09PSBudWxsKSB7XG4gICAgLy8gV2UgdXNlIGEgZG91YmxlIGJ1ZmZlcmluZyBwb29saW5nIHRlY2huaXF1ZSBiZWNhdXNlIHdlIGtub3cgdGhhdCB3ZSdsbFxuICAgIC8vIG9ubHkgZXZlciBuZWVkIGF0IG1vc3QgdHdvIHZlcnNpb25zIG9mIGEgdHJlZS4gV2UgcG9vbCB0aGUgXCJvdGhlclwiIHVudXNlZFxuICAgIC8vIG5vZGUgdGhhdCB3ZSdyZSBmcmVlIHRvIHJldXNlLiBUaGlzIGlzIGxhemlseSBjcmVhdGVkIHRvIGF2b2lkIGFsbG9jYXRpbmdcbiAgICAvLyBleHRyYSBvYmplY3RzIGZvciB0aGluZ3MgdGhhdCBhcmUgbmV2ZXIgdXBkYXRlZC4gSXQgYWxzbyBhbGxvdyB1cyB0b1xuICAgIC8vIHJlY2xhaW0gdGhlIGV4dHJhIG1lbW9yeSBpZiBuZWVkZWQuXG4gICAgd29ya0luUHJvZ3Jlc3MgPSBjcmVhdGVGaWJlcihcbiAgICAgIGN1cnJlbnQudGFnLFxuICAgICAgcGVuZGluZ1Byb3BzLFxuICAgICAgY3VycmVudC5rZXksXG4gICAgICBjdXJyZW50Lm1vZGUsXG4gICAgKTtcbiAgICB3b3JrSW5Qcm9ncmVzcy5lbGVtZW50VHlwZSA9IGN1cnJlbnQuZWxlbWVudFR5cGU7XG4gICAgd29ya0luUHJvZ3Jlc3MudHlwZSA9IGN1cnJlbnQudHlwZTtcbiAgICB3b3JrSW5Qcm9ncmVzcy5zdGF0ZU5vZGUgPSBjdXJyZW50LnN0YXRlTm9kZTtcblxuICAgIGlmIChfX0RFVl9fKSB7XG4gICAgICAvLyBERVYtb25seSBmaWVsZHNcbiAgICAgIHdvcmtJblByb2dyZXNzLl9kZWJ1Z0lEID0gY3VycmVudC5fZGVidWdJRDtcbiAgICAgIHdvcmtJblByb2dyZXNzLl9kZWJ1Z1NvdXJjZSA9IGN1cnJlbnQuX2RlYnVnU291cmNlO1xuICAgICAgd29ya0luUHJvZ3Jlc3MuX2RlYnVnT3duZXIgPSBjdXJyZW50Ll9kZWJ1Z093bmVyO1xuICAgIH1cblxuICAgIHdvcmtJblByb2dyZXNzLmFsdGVybmF0ZSA9IGN1cnJlbnQ7XG4gICAgY3VycmVudC5hbHRlcm5hdGUgPSB3b3JrSW5Qcm9ncmVzcztcbiAgfSBlbHNlIHtcbiAgICB3b3JrSW5Qcm9ncmVzcy5wZW5kaW5nUHJvcHMgPSBwZW5kaW5nUHJvcHM7XG5cbiAgICAvLyBXZSBhbHJlYWR5IGhhdmUgYW4gYWx0ZXJuYXRlLlxuICAgIC8vIFJlc2V0IHRoZSBlZmZlY3QgdGFnLlxuICAgIHdvcmtJblByb2dyZXNzLmVmZmVjdFRhZyA9IE5vRWZmZWN0O1xuXG4gICAgLy8gVGhlIGVmZmVjdCBsaXN0IGlzIG5vIGxvbmdlciB2YWxpZC5cbiAgICB3b3JrSW5Qcm9ncmVzcy5uZXh0RWZmZWN0ID0gbnVsbDtcbiAgICB3b3JrSW5Qcm9ncmVzcy5maXJzdEVmZmVjdCA9IG51bGw7XG4gICAgd29ya0luUHJvZ3Jlc3MubGFzdEVmZmVjdCA9IG51bGw7XG5cbiAgICBpZiAoZW5hYmxlUHJvZmlsZXJUaW1lcikge1xuICAgICAgLy8gV2UgaW50ZW50aW9uYWxseSByZXNldCwgcmF0aGVyIHRoYW4gY29weSwgYWN0dWFsRHVyYXRpb24gJiBhY3R1YWxTdGFydFRpbWUuXG4gICAgICAvLyBUaGlzIHByZXZlbnRzIHRpbWUgZnJvbSBlbmRsZXNzbHkgYWNjdW11bGF0aW5nIGluIG5ldyBjb21taXRzLlxuICAgICAgLy8gVGhpcyBoYXMgdGhlIGRvd25zaWRlIG9mIHJlc2V0dGluZyB2YWx1ZXMgZm9yIGRpZmZlcmVudCBwcmlvcml0eSByZW5kZXJzLFxuICAgICAgLy8gQnV0IHdvcmtzIGZvciB5aWVsZGluZyAodGhlIGNvbW1vbiBjYXNlKSBhbmQgc2hvdWxkIHN1cHBvcnQgcmVzdW1pbmcuXG4gICAgICB3b3JrSW5Qcm9ncmVzcy5hY3R1YWxEdXJhdGlvbiA9IDA7XG4gICAgICB3b3JrSW5Qcm9ncmVzcy5hY3R1YWxTdGFydFRpbWUgPSAtMTtcbiAgICB9XG4gIH1cblxuICB3b3JrSW5Qcm9ncmVzcy5jaGlsZEV4cGlyYXRpb25UaW1lID0gY3VycmVudC5jaGlsZEV4cGlyYXRpb25UaW1lO1xuICB3b3JrSW5Qcm9ncmVzcy5leHBpcmF0aW9uVGltZSA9IGN1cnJlbnQuZXhwaXJhdGlvblRpbWU7XG5cbiAgd29ya0luUHJvZ3Jlc3MuY2hpbGQgPSBjdXJyZW50LmNoaWxkO1xuICB3b3JrSW5Qcm9ncmVzcy5tZW1vaXplZFByb3BzID0gY3VycmVudC5tZW1vaXplZFByb3BzO1xuICB3b3JrSW5Qcm9ncmVzcy5tZW1vaXplZFN0YXRlID0gY3VycmVudC5tZW1vaXplZFN0YXRlO1xuICB3b3JrSW5Qcm9ncmVzcy51cGRhdGVRdWV1ZSA9IGN1cnJlbnQudXBkYXRlUXVldWU7XG4gIHdvcmtJblByb2dyZXNzLmNvbnRleHREZXBlbmRlbmNpZXMgPSBjdXJyZW50LmNvbnRleHREZXBlbmRlbmNpZXM7XG5cbiAgLy8gVGhlc2Ugd2lsbCBiZSBvdmVycmlkZGVuIGR1cmluZyB0aGUgcGFyZW50J3MgcmVjb25jaWxpYXRpb25cbiAgd29ya0luUHJvZ3Jlc3Muc2libGluZyA9IGN1cnJlbnQuc2libGluZztcbiAgd29ya0luUHJvZ3Jlc3MuaW5kZXggPSBjdXJyZW50LmluZGV4O1xuICB3b3JrSW5Qcm9ncmVzcy5yZWYgPSBjdXJyZW50LnJlZjtcblxuICBpZiAoZW5hYmxlUHJvZmlsZXJUaW1lcikge1xuICAgIHdvcmtJblByb2dyZXNzLnNlbGZCYXNlRHVyYXRpb24gPSBjdXJyZW50LnNlbGZCYXNlRHVyYXRpb247XG4gICAgd29ya0luUHJvZ3Jlc3MudHJlZUJhc2VEdXJhdGlvbiA9IGN1cnJlbnQudHJlZUJhc2VEdXJhdGlvbjtcbiAgfVxuXG4gIHJldHVybiB3b3JrSW5Qcm9ncmVzcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUhvc3RSb290RmliZXIoaXNDb25jdXJyZW50OiBib29sZWFuKTogRmliZXIge1xuICBsZXQgbW9kZSA9IGlzQ29uY3VycmVudCA/IENvbmN1cnJlbnRNb2RlIHwgU3RyaWN0TW9kZSA6IE5vQ29udGV4dDtcblxuICBpZiAoZW5hYmxlUHJvZmlsZXJUaW1lciAmJiBpc0RldlRvb2xzUHJlc2VudCkge1xuICAgIC8vIEFsd2F5cyBjb2xsZWN0IHByb2ZpbGUgdGltaW5ncyB3aGVuIERldlRvb2xzIGFyZSBwcmVzZW50LlxuICAgIC8vIFRoaXMgZW5hYmxlcyBEZXZUb29scyB0byBzdGFydCBjYXB0dXJpbmcgdGltaW5nIGF0IGFueSBwb2ludOKAk1xuICAgIC8vIFdpdGhvdXQgc29tZSBub2RlcyBpbiB0aGUgdHJlZSBoYXZpbmcgZW1wdHkgYmFzZSB0aW1lcy5cbiAgICBtb2RlIHw9IFByb2ZpbGVNb2RlO1xuICB9XG5cbiAgcmV0dXJuIGNyZWF0ZUZpYmVyKEhvc3RSb290LCBudWxsLCBudWxsLCBtb2RlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUZpYmVyRnJvbVR5cGVBbmRQcm9wcyhcbiAgdHlwZTogYW55LCAvLyBSZWFjdCRFbGVtZW50VHlwZVxuICBrZXk6IG51bGwgfCBzdHJpbmcsXG4gIHBlbmRpbmdQcm9wczogYW55LFxuICBvd25lcjogbnVsbCB8IEZpYmVyLFxuICBtb2RlOiBUeXBlT2ZNb2RlLFxuICBleHBpcmF0aW9uVGltZTogRXhwaXJhdGlvblRpbWUsXG4pOiBGaWJlciB7XG4gIGxldCBmaWJlcjtcblxuICBsZXQgZmliZXJUYWcgPSBJbmRldGVybWluYXRlQ29tcG9uZW50O1xuICAvLyBUaGUgcmVzb2x2ZWQgdHlwZSBpcyBzZXQgaWYgd2Uga25vdyB3aGF0IHRoZSBmaW5hbCB0eXBlIHdpbGwgYmUuIEkuZS4gaXQncyBub3QgbGF6eS5cbiAgbGV0IHJlc29sdmVkVHlwZSA9IHR5cGU7XG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGlmIChzaG91bGRDb25zdHJ1Y3QodHlwZSkpIHtcbiAgICAgIGZpYmVyVGFnID0gQ2xhc3NDb21wb25lbnQ7XG4gICAgfVxuICB9IGVsc2UgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgIGZpYmVyVGFnID0gSG9zdENvbXBvbmVudDtcbiAgfSBlbHNlIHtcbiAgICBnZXRUYWc6IHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSBSRUFDVF9GUkFHTUVOVF9UWVBFOlxuICAgICAgICByZXR1cm4gY3JlYXRlRmliZXJGcm9tRnJhZ21lbnQoXG4gICAgICAgICAgcGVuZGluZ1Byb3BzLmNoaWxkcmVuLFxuICAgICAgICAgIG1vZGUsXG4gICAgICAgICAgZXhwaXJhdGlvblRpbWUsXG4gICAgICAgICAga2V5LFxuICAgICAgICApO1xuICAgICAgY2FzZSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTpcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUZpYmVyRnJvbU1vZGUoXG4gICAgICAgICAgcGVuZGluZ1Byb3BzLFxuICAgICAgICAgIG1vZGUgfCBDb25jdXJyZW50TW9kZSB8IFN0cmljdE1vZGUsXG4gICAgICAgICAgZXhwaXJhdGlvblRpbWUsXG4gICAgICAgICAga2V5LFxuICAgICAgICApO1xuICAgICAgY2FzZSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFOlxuICAgICAgICByZXR1cm4gY3JlYXRlRmliZXJGcm9tTW9kZShcbiAgICAgICAgICBwZW5kaW5nUHJvcHMsXG4gICAgICAgICAgbW9kZSB8IFN0cmljdE1vZGUsXG4gICAgICAgICAgZXhwaXJhdGlvblRpbWUsXG4gICAgICAgICAga2V5LFxuICAgICAgICApO1xuICAgICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxuICAgICAgICByZXR1cm4gY3JlYXRlRmliZXJGcm9tUHJvZmlsZXIocGVuZGluZ1Byb3BzLCBtb2RlLCBleHBpcmF0aW9uVGltZSwga2V5KTtcbiAgICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUZpYmVyRnJvbVN1c3BlbnNlKHBlbmRpbmdQcm9wcywgbW9kZSwgZXhwaXJhdGlvblRpbWUsIGtleSk7XG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCkge1xuICAgICAgICAgIHN3aXRjaCAodHlwZS4kJHR5cGVvZikge1xuICAgICAgICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICAgICAgICBmaWJlclRhZyA9IENvbnRleHRQcm92aWRlcjtcbiAgICAgICAgICAgICAgYnJlYWsgZ2V0VGFnO1xuICAgICAgICAgICAgY2FzZSBSRUFDVF9DT05URVhUX1RZUEU6XG4gICAgICAgICAgICAgIC8vIFRoaXMgaXMgYSBjb25zdW1lclxuICAgICAgICAgICAgICBmaWJlclRhZyA9IENvbnRleHRDb25zdW1lcjtcbiAgICAgICAgICAgICAgYnJlYWsgZ2V0VGFnO1xuICAgICAgICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICAgICAgICBmaWJlclRhZyA9IEZvcndhcmRSZWY7XG4gICAgICAgICAgICAgIGJyZWFrIGdldFRhZztcbiAgICAgICAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICAgICAgICBmaWJlclRhZyA9IE1lbW9Db21wb25lbnQ7XG4gICAgICAgICAgICAgIGJyZWFrIGdldFRhZztcbiAgICAgICAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICAgICAgICBmaWJlclRhZyA9IExhenlDb21wb25lbnQ7XG4gICAgICAgICAgICAgIHJlc29sdmVkVHlwZSA9IG51bGw7XG4gICAgICAgICAgICAgIGJyZWFrIGdldFRhZztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGluZm8gPSAnJztcbiAgICAgICAgaWYgKF9fREVWX18pIHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICB0eXBlID09PSB1bmRlZmluZWQgfHxcbiAgICAgICAgICAgICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiZcbiAgICAgICAgICAgICAgdHlwZSAhPT0gbnVsbCAmJlxuICAgICAgICAgICAgICBPYmplY3Qua2V5cyh0eXBlKS5sZW5ndGggPT09IDApXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBpbmZvICs9XG4gICAgICAgICAgICAgICcgWW91IGxpa2VseSBmb3Jnb3QgdG8gZXhwb3J0IHlvdXIgY29tcG9uZW50IGZyb20gdGhlIGZpbGUgJyArXG4gICAgICAgICAgICAgIFwiaXQncyBkZWZpbmVkIGluLCBvciB5b3UgbWlnaHQgaGF2ZSBtaXhlZCB1cCBkZWZhdWx0IGFuZCBcIiArXG4gICAgICAgICAgICAgICduYW1lZCBpbXBvcnRzLic7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IG93bmVyTmFtZSA9IG93bmVyID8gZ2V0Q29tcG9uZW50TmFtZShvd25lci50eXBlKSA6IG51bGw7XG4gICAgICAgICAgaWYgKG93bmVyTmFtZSkge1xuICAgICAgICAgICAgaW5mbyArPSAnXFxuXFxuQ2hlY2sgdGhlIHJlbmRlciBtZXRob2Qgb2YgYCcgKyBvd25lck5hbWUgKyAnYC4nO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpbnZhcmlhbnQoXG4gICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgJ0VsZW1lbnQgdHlwZSBpcyBpbnZhbGlkOiBleHBlY3RlZCBhIHN0cmluZyAoZm9yIGJ1aWx0LWluICcgK1xuICAgICAgICAgICAgJ2NvbXBvbmVudHMpIG9yIGEgY2xhc3MvZnVuY3Rpb24gKGZvciBjb21wb3NpdGUgY29tcG9uZW50cykgJyArXG4gICAgICAgICAgICAnYnV0IGdvdDogJXMuJXMnLFxuICAgICAgICAgIHR5cGUgPT0gbnVsbCA/IHR5cGUgOiB0eXBlb2YgdHlwZSxcbiAgICAgICAgICBpbmZvLFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZpYmVyID0gY3JlYXRlRmliZXIoZmliZXJUYWcsIHBlbmRpbmdQcm9wcywga2V5LCBtb2RlKTtcbiAgZmliZXIuZWxlbWVudFR5cGUgPSB0eXBlO1xuICBmaWJlci50eXBlID0gcmVzb2x2ZWRUeXBlO1xuICBmaWJlci5leHBpcmF0aW9uVGltZSA9IGV4cGlyYXRpb25UaW1lO1xuXG4gIHJldHVybiBmaWJlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUZpYmVyRnJvbUVsZW1lbnQoXG4gIGVsZW1lbnQ6IFJlYWN0RWxlbWVudCxcbiAgbW9kZTogVHlwZU9mTW9kZSxcbiAgZXhwaXJhdGlvblRpbWU6IEV4cGlyYXRpb25UaW1lLFxuKTogRmliZXIge1xuICBsZXQgb3duZXIgPSBudWxsO1xuICBpZiAoX19ERVZfXykge1xuICAgIG93bmVyID0gZWxlbWVudC5fb3duZXI7XG4gIH1cbiAgY29uc3QgdHlwZSA9IGVsZW1lbnQudHlwZTtcbiAgY29uc3Qga2V5ID0gZWxlbWVudC5rZXk7XG4gIGNvbnN0IHBlbmRpbmdQcm9wcyA9IGVsZW1lbnQucHJvcHM7XG4gIGNvbnN0IGZpYmVyID0gY3JlYXRlRmliZXJGcm9tVHlwZUFuZFByb3BzKFxuICAgIHR5cGUsXG4gICAga2V5LFxuICAgIHBlbmRpbmdQcm9wcyxcbiAgICBvd25lcixcbiAgICBtb2RlLFxuICAgIGV4cGlyYXRpb25UaW1lLFxuICApO1xuICBpZiAoX19ERVZfXykge1xuICAgIGZpYmVyLl9kZWJ1Z1NvdXJjZSA9IGVsZW1lbnQuX3NvdXJjZTtcbiAgICBmaWJlci5fZGVidWdPd25lciA9IGVsZW1lbnQuX293bmVyO1xuICB9XG4gIHJldHVybiBmaWJlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUZpYmVyRnJvbUZyYWdtZW50KFxuICBlbGVtZW50czogUmVhY3RGcmFnbWVudCxcbiAgbW9kZTogVHlwZU9mTW9kZSxcbiAgZXhwaXJhdGlvblRpbWU6IEV4cGlyYXRpb25UaW1lLFxuICBrZXk6IG51bGwgfCBzdHJpbmcsXG4pOiBGaWJlciB7XG4gIGNvbnN0IGZpYmVyID0gY3JlYXRlRmliZXIoRnJhZ21lbnQsIGVsZW1lbnRzLCBrZXksIG1vZGUpO1xuICBmaWJlci5leHBpcmF0aW9uVGltZSA9IGV4cGlyYXRpb25UaW1lO1xuICByZXR1cm4gZmliZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZpYmVyRnJvbVByb2ZpbGVyKFxuICBwZW5kaW5nUHJvcHM6IGFueSxcbiAgbW9kZTogVHlwZU9mTW9kZSxcbiAgZXhwaXJhdGlvblRpbWU6IEV4cGlyYXRpb25UaW1lLFxuICBrZXk6IG51bGwgfCBzdHJpbmcsXG4pOiBGaWJlciB7XG4gIGlmIChfX0RFVl9fKSB7XG4gICAgaWYgKFxuICAgICAgdHlwZW9mIHBlbmRpbmdQcm9wcy5pZCAhPT0gJ3N0cmluZycgfHxcbiAgICAgIHR5cGVvZiBwZW5kaW5nUHJvcHMub25SZW5kZXIgIT09ICdmdW5jdGlvbidcbiAgICApIHtcbiAgICAgIHdhcm5pbmdXaXRob3V0U3RhY2soXG4gICAgICAgIGZhbHNlLFxuICAgICAgICAnUHJvZmlsZXIgbXVzdCBzcGVjaWZ5IGFuIFwiaWRcIiBzdHJpbmcgYW5kIFwib25SZW5kZXJcIiBmdW5jdGlvbiBhcyBwcm9wcycsXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGZpYmVyID0gY3JlYXRlRmliZXIoUHJvZmlsZXIsIHBlbmRpbmdQcm9wcywga2V5LCBtb2RlIHwgUHJvZmlsZU1vZGUpO1xuICAvLyBUT0RPOiBUaGUgUHJvZmlsZXIgZmliZXIgc2hvdWxkbid0IGhhdmUgYSB0eXBlLiBJdCBoYXMgYSB0YWcuXG4gIGZpYmVyLmVsZW1lbnRUeXBlID0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbiAgZmliZXIudHlwZSA9IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG4gIGZpYmVyLmV4cGlyYXRpb25UaW1lID0gZXhwaXJhdGlvblRpbWU7XG5cbiAgcmV0dXJuIGZpYmVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGaWJlckZyb21Nb2RlKFxuICBwZW5kaW5nUHJvcHM6IGFueSxcbiAgbW9kZTogVHlwZU9mTW9kZSxcbiAgZXhwaXJhdGlvblRpbWU6IEV4cGlyYXRpb25UaW1lLFxuICBrZXk6IG51bGwgfCBzdHJpbmcsXG4pOiBGaWJlciB7XG4gIGNvbnN0IGZpYmVyID0gY3JlYXRlRmliZXIoTW9kZSwgcGVuZGluZ1Byb3BzLCBrZXksIG1vZGUpO1xuXG4gIC8vIFRPRE86IFRoZSBNb2RlIGZpYmVyIHNob3VsZG4ndCBoYXZlIGEgdHlwZS4gSXQgaGFzIGEgdGFnLlxuICBjb25zdCB0eXBlID1cbiAgICAobW9kZSAmIENvbmN1cnJlbnRNb2RlKSA9PT0gTm9Db250ZXh0XG4gICAgICA/IFJFQUNUX1NUUklDVF9NT0RFX1RZUEVcbiAgICAgIDogUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU7XG4gIGZpYmVyLmVsZW1lbnRUeXBlID0gdHlwZTtcbiAgZmliZXIudHlwZSA9IHR5cGU7XG5cbiAgZmliZXIuZXhwaXJhdGlvblRpbWUgPSBleHBpcmF0aW9uVGltZTtcbiAgcmV0dXJuIGZpYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRmliZXJGcm9tU3VzcGVuc2UoXG4gIHBlbmRpbmdQcm9wczogYW55LFxuICBtb2RlOiBUeXBlT2ZNb2RlLFxuICBleHBpcmF0aW9uVGltZTogRXhwaXJhdGlvblRpbWUsXG4gIGtleTogbnVsbCB8IHN0cmluZyxcbikge1xuICBjb25zdCBmaWJlciA9IGNyZWF0ZUZpYmVyKFN1c3BlbnNlQ29tcG9uZW50LCBwZW5kaW5nUHJvcHMsIGtleSwgbW9kZSk7XG5cbiAgLy8gVE9ETzogVGhlIFN1c3BlbnNlQ29tcG9uZW50IGZpYmVyIHNob3VsZG4ndCBoYXZlIGEgdHlwZS4gSXQgaGFzIGEgdGFnLlxuICBjb25zdCB0eXBlID0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcbiAgZmliZXIuZWxlbWVudFR5cGUgPSB0eXBlO1xuICBmaWJlci50eXBlID0gdHlwZTtcblxuICBmaWJlci5leHBpcmF0aW9uVGltZSA9IGV4cGlyYXRpb25UaW1lO1xuICByZXR1cm4gZmliZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVGaWJlckZyb21UZXh0KFxuICBjb250ZW50OiBzdHJpbmcsXG4gIG1vZGU6IFR5cGVPZk1vZGUsXG4gIGV4cGlyYXRpb25UaW1lOiBFeHBpcmF0aW9uVGltZSxcbik6IEZpYmVyIHtcbiAgY29uc3QgZmliZXIgPSBjcmVhdGVGaWJlcihIb3N0VGV4dCwgY29udGVudCwgbnVsbCwgbW9kZSk7XG4gIGZpYmVyLmV4cGlyYXRpb25UaW1lID0gZXhwaXJhdGlvblRpbWU7XG4gIHJldHVybiBmaWJlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUZpYmVyRnJvbUhvc3RJbnN0YW5jZUZvckRlbGV0aW9uKCk6IEZpYmVyIHtcbiAgY29uc3QgZmliZXIgPSBjcmVhdGVGaWJlcihIb3N0Q29tcG9uZW50LCBudWxsLCBudWxsLCBOb0NvbnRleHQpO1xuICAvLyBUT0RPOiBUaGVzZSBzaG91bGQgbm90IG5lZWQgYSB0eXBlLlxuICBmaWJlci5lbGVtZW50VHlwZSA9ICdERUxFVEVEJztcbiAgZmliZXIudHlwZSA9ICdERUxFVEVEJztcbiAgcmV0dXJuIGZpYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRmliZXJGcm9tUG9ydGFsKFxuICBwb3J0YWw6IFJlYWN0UG9ydGFsLFxuICBtb2RlOiBUeXBlT2ZNb2RlLFxuICBleHBpcmF0aW9uVGltZTogRXhwaXJhdGlvblRpbWUsXG4pOiBGaWJlciB7XG4gIGNvbnN0IHBlbmRpbmdQcm9wcyA9IHBvcnRhbC5jaGlsZHJlbiAhPT0gbnVsbCA/IHBvcnRhbC5jaGlsZHJlbiA6IFtdO1xuICBjb25zdCBmaWJlciA9IGNyZWF0ZUZpYmVyKEhvc3RQb3J0YWwsIHBlbmRpbmdQcm9wcywgcG9ydGFsLmtleSwgbW9kZSk7XG4gIGZpYmVyLmV4cGlyYXRpb25UaW1lID0gZXhwaXJhdGlvblRpbWU7XG4gIGZpYmVyLnN0YXRlTm9kZSA9IHtcbiAgICBjb250YWluZXJJbmZvOiBwb3J0YWwuY29udGFpbmVySW5mbyxcbiAgICBwZW5kaW5nQ2hpbGRyZW46IG51bGwsIC8vIFVzZWQgYnkgcGVyc2lzdGVudCB1cGRhdGVzXG4gICAgaW1wbGVtZW50YXRpb246IHBvcnRhbC5pbXBsZW1lbnRhdGlvbixcbiAgfTtcbiAgcmV0dXJuIGZpYmVyO1xufVxuXG4vLyBVc2VkIGZvciBzdGFzaGluZyBXSVAgcHJvcGVydGllcyB0byByZXBsYXkgZmFpbGVkIHdvcmsgaW4gREVWLlxuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbkZpYmVyUHJvcGVydGllc0luREVWKFxuICB0YXJnZXQ6IEZpYmVyIHwgbnVsbCxcbiAgc291cmNlOiBGaWJlcixcbik6IEZpYmVyIHtcbiAgaWYgKHRhcmdldCA9PT0gbnVsbCkge1xuICAgIC8vIFRoaXMgRmliZXIncyBpbml0aWFsIHByb3BlcnRpZXMgd2lsbCBhbHdheXMgYmUgb3ZlcndyaXR0ZW4uXG4gICAgLy8gV2Ugb25seSB1c2UgYSBGaWJlciB0byBlbnN1cmUgdGhlIHNhbWUgaGlkZGVuIGNsYXNzIHNvIERFViBpc24ndCBzbG93LlxuICAgIHRhcmdldCA9IGNyZWF0ZUZpYmVyKEluZGV0ZXJtaW5hdGVDb21wb25lbnQsIG51bGwsIG51bGwsIE5vQ29udGV4dCk7XG4gIH1cblxuICAvLyBUaGlzIGlzIGludGVudGlvbmFsbHkgd3JpdHRlbiBhcyBhIGxpc3Qgb2YgYWxsIHByb3BlcnRpZXMuXG4gIC8vIFdlIHRyaWVkIHRvIHVzZSBPYmplY3QuYXNzaWduKCkgaW5zdGVhZCBidXQgdGhpcyBpcyBjYWxsZWQgaW5cbiAgLy8gdGhlIGhvdHRlc3QgcGF0aCwgYW5kIE9iamVjdC5hc3NpZ24oKSB3YXMgdG9vIHNsb3c6XG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTI1MDJcbiAgLy8gVGhpcyBjb2RlIGlzIERFVi1vbmx5IHNvIHNpemUgaXMgbm90IGEgY29uY2Vybi5cblxuICB0YXJnZXQudGFnID0gc291cmNlLnRhZztcbiAgdGFyZ2V0LmtleSA9IHNvdXJjZS5rZXk7XG4gIHRhcmdldC5lbGVtZW50VHlwZSA9IHNvdXJjZS5lbGVtZW50VHlwZTtcbiAgdGFyZ2V0LnR5cGUgPSBzb3VyY2UudHlwZTtcbiAgdGFyZ2V0LnN0YXRlTm9kZSA9IHNvdXJjZS5zdGF0ZU5vZGU7XG4gIHRhcmdldC5yZXR1cm4gPSBzb3VyY2UucmV0dXJuO1xuICB0YXJnZXQuY2hpbGQgPSBzb3VyY2UuY2hpbGQ7XG4gIHRhcmdldC5zaWJsaW5nID0gc291cmNlLnNpYmxpbmc7XG4gIHRhcmdldC5pbmRleCA9IHNvdXJjZS5pbmRleDtcbiAgdGFyZ2V0LnJlZiA9IHNvdXJjZS5yZWY7XG4gIHRhcmdldC5wZW5kaW5nUHJvcHMgPSBzb3VyY2UucGVuZGluZ1Byb3BzO1xuICB0YXJnZXQubWVtb2l6ZWRQcm9wcyA9IHNvdXJjZS5tZW1vaXplZFByb3BzO1xuICB0YXJnZXQudXBkYXRlUXVldWUgPSBzb3VyY2UudXBkYXRlUXVldWU7XG4gIHRhcmdldC5tZW1vaXplZFN0YXRlID0gc291cmNlLm1lbW9pemVkU3RhdGU7XG4gIHRhcmdldC5jb250ZXh0RGVwZW5kZW5jaWVzID0gc291cmNlLmNvbnRleHREZXBlbmRlbmNpZXM7XG4gIHRhcmdldC5tb2RlID0gc291cmNlLm1vZGU7XG4gIHRhcmdldC5lZmZlY3RUYWcgPSBzb3VyY2UuZWZmZWN0VGFnO1xuICB0YXJnZXQubmV4dEVmZmVjdCA9IHNvdXJjZS5uZXh0RWZmZWN0O1xuICB0YXJnZXQuZmlyc3RFZmZlY3QgPSBzb3VyY2UuZmlyc3RFZmZlY3Q7XG4gIHRhcmdldC5sYXN0RWZmZWN0ID0gc291cmNlLmxhc3RFZmZlY3Q7XG4gIHRhcmdldC5leHBpcmF0aW9uVGltZSA9IHNvdXJjZS5leHBpcmF0aW9uVGltZTtcbiAgdGFyZ2V0LmNoaWxkRXhwaXJhdGlvblRpbWUgPSBzb3VyY2UuY2hpbGRFeHBpcmF0aW9uVGltZTtcbiAgdGFyZ2V0LmFsdGVybmF0ZSA9IHNvdXJjZS5hbHRlcm5hdGU7XG4gIGlmIChlbmFibGVQcm9maWxlclRpbWVyKSB7XG4gICAgdGFyZ2V0LmFjdHVhbER1cmF0aW9uID0gc291cmNlLmFjdHVhbER1cmF0aW9uO1xuICAgIHRhcmdldC5hY3R1YWxTdGFydFRpbWUgPSBzb3VyY2UuYWN0dWFsU3RhcnRUaW1lO1xuICAgIHRhcmdldC5zZWxmQmFzZUR1cmF0aW9uID0gc291cmNlLnNlbGZCYXNlRHVyYXRpb247XG4gICAgdGFyZ2V0LnRyZWVCYXNlRHVyYXRpb24gPSBzb3VyY2UudHJlZUJhc2VEdXJhdGlvbjtcbiAgfVxuICB0YXJnZXQuX2RlYnVnSUQgPSBzb3VyY2UuX2RlYnVnSUQ7XG4gIHRhcmdldC5fZGVidWdTb3VyY2UgPSBzb3VyY2UuX2RlYnVnU291cmNlO1xuICB0YXJnZXQuX2RlYnVnT3duZXIgPSBzb3VyY2UuX2RlYnVnT3duZXI7XG4gIHRhcmdldC5fZGVidWdJc0N1cnJlbnRseVRpbWluZyA9IHNvdXJjZS5fZGVidWdJc0N1cnJlbnRseVRpbWluZztcbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LXJlY29uY2lsZXIvc3JjL1JlYWN0RmliZXIuanMiXSwic291cmNlUm9vdCI6IiJ9
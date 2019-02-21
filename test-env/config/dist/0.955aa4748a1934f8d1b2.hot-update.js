webpackHotUpdate(0,{

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ReactFiberHostConfig = __webpack_require__(168);

Object.keys(_ReactFiberHostConfig).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ReactFiberHostConfig[key];
    }
  });
});

var _invariant = __webpack_require__(0);

var _invariant2 = _interopRequireDefault(_invariant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ReactDOMHostConfig = __webpack_require__(169);

Object.keys(_ReactDOMHostConfig).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ReactDOMHostConfig[key];
    }
  });
});

/***/ }),

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.supportsHydration = exports.supportsMutation = exports.cancelPassiveEffects = exports.schedulePassiveEffects = exports.noTimeout = exports.cancelTimeout = exports.scheduleTimeout = exports.isPrimaryRenderer = exports.cancelDeferredCallback = exports.shouldYield = exports.scheduleDeferredCallback = exports.now = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
                                                                                                                                                                                                                                                                               * Copyright (c) Facebook, Inc. and its affiliates.
                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                               * This source code is licensed under the MIT license found in the
                                                                                                                                                                                                                                                                               * LICENSE file in the root directory of this source tree.
                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                               * 
                                                                                                                                                                                                                                                                               */

// Unused


var _scheduler = __webpack_require__(62);

Object.defineProperty(exports, 'now', {
  enumerable: true,
  get: function get() {
    return _scheduler.unstable_now;
  }
});
Object.defineProperty(exports, 'scheduleDeferredCallback', {
  enumerable: true,
  get: function get() {
    return _scheduler.unstable_scheduleCallback;
  }
});
Object.defineProperty(exports, 'shouldYield', {
  enumerable: true,
  get: function get() {
    return _scheduler.unstable_shouldYield;
  }
});
Object.defineProperty(exports, 'cancelDeferredCallback', {
  enumerable: true,
  get: function get() {
    return _scheduler.unstable_cancelCallback;
  }
});

var _HostConfigWithNoPersistence = __webpack_require__(170);

Object.keys(_HostConfigWithNoPersistence).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _HostConfigWithNoPersistence[key];
    }
  });
});
exports.getRootHostContext = getRootHostContext;
exports.getChildHostContext = getChildHostContext;
exports.getPublicInstance = getPublicInstance;
exports.prepareForCommit = prepareForCommit;
exports.resetAfterCommit = resetAfterCommit;
exports.createInstance = createInstance;
exports.appendInitialChild = appendInitialChild;
exports.finalizeInitialChildren = finalizeInitialChildren;
exports.prepareUpdate = prepareUpdate;
exports.shouldSetTextContent = shouldSetTextContent;
exports.shouldDeprioritizeSubtree = shouldDeprioritizeSubtree;
exports.createTextInstance = createTextInstance;
exports.commitMount = commitMount;
exports.commitUpdate = commitUpdate;
exports.resetTextContent = resetTextContent;
exports.commitTextUpdate = commitTextUpdate;
exports.appendChild = appendChild;
exports.appendChildToContainer = appendChildToContainer;
exports.insertBefore = insertBefore;
exports.insertInContainerBefore = insertInContainerBefore;
exports.removeChild = removeChild;
exports.removeChildFromContainer = removeChildFromContainer;
exports.clearSuspenseBoundary = clearSuspenseBoundary;
exports.clearSuspenseBoundaryFromContainer = clearSuspenseBoundaryFromContainer;
exports.hideInstance = hideInstance;
exports.hideTextInstance = hideTextInstance;
exports.unhideInstance = unhideInstance;
exports.unhideTextInstance = unhideTextInstance;
exports.canHydrateInstance = canHydrateInstance;
exports.canHydrateTextInstance = canHydrateTextInstance;
exports.canHydrateSuspenseInstance = canHydrateSuspenseInstance;
exports.getNextHydratableSibling = getNextHydratableSibling;
exports.getFirstHydratableChild = getFirstHydratableChild;
exports.hydrateInstance = hydrateInstance;
exports.hydrateTextInstance = hydrateTextInstance;
exports.getNextHydratableInstanceAfterSuspenseInstance = getNextHydratableInstanceAfterSuspenseInstance;
exports.didNotMatchHydratedContainerTextInstance = didNotMatchHydratedContainerTextInstance;
exports.didNotMatchHydratedTextInstance = didNotMatchHydratedTextInstance;
exports.didNotHydrateContainerInstance = didNotHydrateContainerInstance;
exports.didNotHydrateInstance = didNotHydrateInstance;
exports.didNotFindHydratableContainerInstance = didNotFindHydratableContainerInstance;
exports.didNotFindHydratableContainerTextInstance = didNotFindHydratableContainerTextInstance;
exports.didNotFindHydratableContainerSuspenseInstance = didNotFindHydratableContainerSuspenseInstance;
exports.didNotFindHydratableInstance = didNotFindHydratableInstance;
exports.didNotFindHydratableTextInstance = didNotFindHydratableTextInstance;
exports.didNotFindHydratableSuspenseInstance = didNotFindHydratableSuspenseInstance;

var _ReactDOMComponentTree = __webpack_require__(16);

var _ReactDOMComponent = __webpack_require__(148);

var _ReactInputSelection = __webpack_require__(135);

var _setTextContent = __webpack_require__(154);

var _setTextContent2 = _interopRequireDefault(_setTextContent);

var _validateDOMNesting = __webpack_require__(171);

var _ReactBrowserEventEmitter = __webpack_require__(75);

var _DOMNamespaces = __webpack_require__(87);

var _HTMLNodeType = __webpack_require__(15);

var _dangerousStyleValue = __webpack_require__(157);

var _dangerousStyleValue2 = _interopRequireDefault(_dangerousStyleValue);

var _ReactFeatureFlags = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SUPPRESS_HYDRATION_WARNING = void 0;
if (true) {
  SUPPRESS_HYDRATION_WARNING = 'suppressHydrationWarning';
}

var SUSPENSE_START_DATA = '$';
var SUSPENSE_END_DATA = '/$';

var STYLE = 'style';

var eventsEnabled = null;
var selectionInformation = null;

function shouldAutoFocusHostComponent(type, props) {
  switch (type) {
    case 'button':
    case 'input':
    case 'select':
    case 'textarea':
      return !!props.autoFocus;
  }
  return false;
}

function getRootHostContext(rootContainerInstance) {
  var type = void 0;
  var namespace = void 0;
  var nodeType = rootContainerInstance.nodeType;
  switch (nodeType) {
    case _HTMLNodeType.DOCUMENT_NODE:
    case _HTMLNodeType.DOCUMENT_FRAGMENT_NODE:
      {
        type = nodeType === _HTMLNodeType.DOCUMENT_NODE ? '#document' : '#fragment';
        var root = rootContainerInstance.documentElement;
        namespace = root ? root.namespaceURI : (0, _DOMNamespaces.getChildNamespace)(null, '');
        break;
      }
    default:
      {
        var container = nodeType === _HTMLNodeType.COMMENT_NODE ? rootContainerInstance.parentNode : rootContainerInstance;
        var ownNamespace = container.namespaceURI || null;
        type = container.tagName;
        namespace = (0, _DOMNamespaces.getChildNamespace)(ownNamespace, type);
        break;
      }
  }
  if (true) {
    var validatedTag = type.toLowerCase();
    var _ancestorInfo = (0, _validateDOMNesting.updatedAncestorInfo)(null, validatedTag);
    return { namespace: namespace, ancestorInfo: _ancestorInfo };
  }
  return namespace;
}

function getChildHostContext(parentHostContext, type, rootContainerInstance) {
  if (true) {
    var parentHostContextDev = parentHostContext;
    var _namespace = (0, _DOMNamespaces.getChildNamespace)(parentHostContextDev.namespace, type);
    var _ancestorInfo2 = (0, _validateDOMNesting.updatedAncestorInfo)(parentHostContextDev.ancestorInfo, type);
    return { namespace: _namespace, ancestorInfo: _ancestorInfo2 };
  }
  var parentNamespace = parentHostContext;
  return (0, _DOMNamespaces.getChildNamespace)(parentNamespace, type);
}

function getPublicInstance(instance) {
  return instance;
}

function prepareForCommit(containerInfo) {
  eventsEnabled = (0, _ReactBrowserEventEmitter.isEnabled)();
  selectionInformation = (0, _ReactInputSelection.getSelectionInformation)();
  (0, _ReactBrowserEventEmitter.setEnabled)(false);
}

function resetAfterCommit(containerInfo) {
  (0, _ReactInputSelection.restoreSelection)(selectionInformation);
  selectionInformation = null;
  (0, _ReactBrowserEventEmitter.setEnabled)(eventsEnabled);
  eventsEnabled = null;
}

function createInstance(type, props, rootContainerInstance, hostContext, internalInstanceHandle) {
  var parentNamespace = void 0;
  if (true) {
    // TODO: take namespace into account when validating.
    var hostContextDev = hostContext;
    (0, _validateDOMNesting.validateDOMNesting)(type, null, hostContextDev.ancestorInfo);
    if (typeof props.children === 'string' || typeof props.children === 'number') {
      var string = '' + props.children;
      var ownAncestorInfo = (0, _validateDOMNesting.updatedAncestorInfo)(hostContextDev.ancestorInfo, type);
      (0, _validateDOMNesting.validateDOMNesting)(null, string, ownAncestorInfo);
    }
    parentNamespace = hostContextDev.namespace;
  } else {
    parentNamespace = hostContext;
  }
  var domElement = (0, _ReactDOMComponent.createElement)(type, props, rootContainerInstance, parentNamespace);
  (0, _ReactDOMComponentTree.precacheFiberNode)(internalInstanceHandle, domElement);
  (0, _ReactDOMComponentTree.updateFiberProps)(domElement, props);
  return domElement;
}

function appendInitialChild(parentInstance, child) {
  parentInstance.appendChild(child);
}

function finalizeInitialChildren(domElement, type, props, rootContainerInstance, hostContext) {
  (0, _ReactDOMComponent.setInitialProperties)(domElement, type, props, rootContainerInstance);
  return shouldAutoFocusHostComponent(type, props);
}

function prepareUpdate(domElement, type, oldProps, newProps, rootContainerInstance, hostContext) {
  if (true) {
    var hostContextDev = hostContext;
    if (_typeof(newProps.children) !== _typeof(oldProps.children) && (typeof newProps.children === 'string' || typeof newProps.children === 'number')) {
      var string = '' + newProps.children;
      var ownAncestorInfo = (0, _validateDOMNesting.updatedAncestorInfo)(hostContextDev.ancestorInfo, type);
      (0, _validateDOMNesting.validateDOMNesting)(null, string, ownAncestorInfo);
    }
  }
  return (0, _ReactDOMComponent.diffProperties)(domElement, type, oldProps, newProps, rootContainerInstance);
}

function shouldSetTextContent(type, props) {
  return type === 'textarea' || type === 'option' || type === 'noscript' || typeof props.children === 'string' || typeof props.children === 'number' || _typeof(props.dangerouslySetInnerHTML) === 'object' && props.dangerouslySetInnerHTML !== null && props.dangerouslySetInnerHTML.__html != null;
}

function shouldDeprioritizeSubtree(type, props) {
  return !!props.hidden;
}

function createTextInstance(text, rootContainerInstance, hostContext, internalInstanceHandle) {
  if (true) {
    var hostContextDev = hostContext;
    (0, _validateDOMNesting.validateDOMNesting)(null, text, hostContextDev.ancestorInfo);
  }
  var textNode = (0, _ReactDOMComponent.createTextNode)(text, rootContainerInstance);
  (0, _ReactDOMComponentTree.precacheFiberNode)(internalInstanceHandle, textNode);
  return textNode;
}

var isPrimaryRenderer = exports.isPrimaryRenderer = true;
// This initialization code may run even on server environments
// if a component just imports ReactDOM (e.g. for findDOMNode).
// Some environments might not have setTimeout or clearTimeout.
var scheduleTimeout = exports.scheduleTimeout = typeof setTimeout === 'function' ? setTimeout : undefined;
var cancelTimeout = exports.cancelTimeout = typeof clearTimeout === 'function' ? clearTimeout : undefined;
var noTimeout = exports.noTimeout = -1;
var schedulePassiveEffects = exports.schedulePassiveEffects = _scheduler.unstable_scheduleCallback;
var cancelPassiveEffects = exports.cancelPassiveEffects = _scheduler.unstable_cancelCallback;

// -------------------
//     Mutation
// -------------------

var supportsMutation = exports.supportsMutation = true;

function commitMount(domElement, type, newProps, internalInstanceHandle) {
  // Despite the naming that might imply otherwise, this method only
  // fires if there is an `Update` effect scheduled during mounting.
  // This happens if `finalizeInitialChildren` returns `true` (which it
  // does to implement the `autoFocus` attribute on the client). But
  // there are also other cases when this might happen (such as patching
  // up text content during hydration mismatch). So we'll check this again.
  if (shouldAutoFocusHostComponent(type, newProps)) {
    domElement.focus();
  }
}

function commitUpdate(domElement, updatePayload, type, oldProps, newProps, internalInstanceHandle) {
  // Update the props handle so that we know which props are the ones with
  // with current event handlers.
  (0, _ReactDOMComponentTree.updateFiberProps)(domElement, newProps);
  // Apply the diff to the DOM node.
  (0, _ReactDOMComponent.updateProperties)(domElement, updatePayload, type, oldProps, newProps);
}

function resetTextContent(domElement) {
  (0, _setTextContent2.default)(domElement, '');
}

function commitTextUpdate(textInstance, oldText, newText) {
  textInstance.nodeValue = newText;
}

function appendChild(parentInstance, child) {
  parentInstance.appendChild(child);
}

function appendChildToContainer(container, child) {
  var parentNode = void 0;
  if (container.nodeType === _HTMLNodeType.COMMENT_NODE) {
    parentNode = container.parentNode;
    parentNode.insertBefore(child, container);
  } else {
    parentNode = container;
    parentNode.appendChild(child);
  }
  // This container might be used for a portal.
  // If something inside a portal is clicked, that click should bubble
  // through the React tree. However, on Mobile Safari the click would
  // never bubble through the *DOM* tree unless an ancestor with onclick
  // event exists. So we wouldn't see it and dispatch it.
  // This is why we ensure that non React root containers have inline onclick
  // defined.
  // https://github.com/facebook/react/issues/11918
  var reactRootContainer = container._reactRootContainer;
  if ((reactRootContainer === null || reactRootContainer === undefined) && parentNode.onclick === null) {
    // TODO: This cast may not be sound for SVG, MathML or custom elements.
    (0, _ReactDOMComponent.trapClickOnNonInteractiveElement)(parentNode);
  }
}

function insertBefore(parentInstance, child, beforeChild) {
  parentInstance.insertBefore(child, beforeChild);
}

function insertInContainerBefore(container, child, beforeChild) {
  if (container.nodeType === _HTMLNodeType.COMMENT_NODE) {
    container.parentNode.insertBefore(child, beforeChild);
  } else {
    container.insertBefore(child, beforeChild);
  }
}

function removeChild(parentInstance, child) {
  parentInstance.removeChild(child);
}

function removeChildFromContainer(container, child) {
  if (container.nodeType === _HTMLNodeType.COMMENT_NODE) {
    container.parentNode.removeChild(child);
  } else {
    container.removeChild(child);
  }
}

function clearSuspenseBoundary(parentInstance, suspenseInstance) {
  var node = suspenseInstance;
  // Delete all nodes within this suspense boundary.
  // There might be nested nodes so we need to keep track of how
  // deep we are and only break out when we're back on top.
  var depth = 0;
  do {
    var nextNode = node.nextSibling;
    parentInstance.removeChild(node);
    if (nextNode && nextNode.nodeType === _HTMLNodeType.COMMENT_NODE) {
      var data = nextNode.data;
      if (data === SUSPENSE_END_DATA) {
        if (depth === 0) {
          parentInstance.removeChild(nextNode);
          return;
        } else {
          depth--;
        }
      } else if (data === SUSPENSE_START_DATA) {
        depth++;
      }
    }
    node = nextNode;
  } while (node);
  // TODO: Warn, we didn't find the end comment boundary.
}

function clearSuspenseBoundaryFromContainer(container, suspenseInstance) {
  if (container.nodeType === _HTMLNodeType.COMMENT_NODE) {
    clearSuspenseBoundary(container.parentNode, suspenseInstance);
  } else if (container.nodeType === _HTMLNodeType.ELEMENT_NODE) {
    clearSuspenseBoundary(container, suspenseInstance);
  } else {
    // Document nodes should never contain suspense boundaries.
  }
}

function hideInstance(instance) {
  // TODO: Does this work for all element types? What about MathML? Should we
  // pass host context to this method?
  instance = instance;
  instance.style.display = 'none';
}

function hideTextInstance(textInstance) {
  textInstance.nodeValue = '';
}

function unhideInstance(instance, props) {
  instance = instance;
  var styleProp = props[STYLE];
  var display = styleProp !== undefined && styleProp !== null && styleProp.hasOwnProperty('display') ? styleProp.display : null;
  instance.style.display = (0, _dangerousStyleValue2.default)('display', display);
}

function unhideTextInstance(textInstance, text) {
  textInstance.nodeValue = text;
}

// -------------------
//     Hydration
// -------------------

var supportsHydration = exports.supportsHydration = true;

function canHydrateInstance(instance, type, props) {
  if (instance.nodeType !== _HTMLNodeType.ELEMENT_NODE || type.toLowerCase() !== instance.nodeName.toLowerCase()) {
    return null;
  }
  // This has now been refined to an element node.
  return instance;
}

function canHydrateTextInstance(instance, text) {
  if (text === '' || instance.nodeType !== _HTMLNodeType.TEXT_NODE) {
    // Empty strings are not parsed by HTML so there won't be a correct match here.
    return null;
  }
  // This has now been refined to a text node.
  return instance;
}

function canHydrateSuspenseInstance(instance) {
  if (instance.nodeType !== _HTMLNodeType.COMMENT_NODE) {
    // Empty strings are not parsed by HTML so there won't be a correct match here.
    return null;
  }
  // This has now been refined to a suspense node.
  return instance;
}

function getNextHydratableSibling(instance) {
  var node = instance.nextSibling;
  // Skip non-hydratable nodes.
  while (node && node.nodeType !== _HTMLNodeType.ELEMENT_NODE && node.nodeType !== _HTMLNodeType.TEXT_NODE && (!_ReactFeatureFlags.enableSuspenseServerRenderer || node.nodeType !== _HTMLNodeType.COMMENT_NODE || node.data !== SUSPENSE_START_DATA)) {
    node = node.nextSibling;
  }
  return node;
}

function getFirstHydratableChild(parentInstance) {
  var next = parentInstance.firstChild;
  // Skip non-hydratable nodes.
  while (next && next.nodeType !== _HTMLNodeType.ELEMENT_NODE && next.nodeType !== _HTMLNodeType.TEXT_NODE && (!_ReactFeatureFlags.enableSuspenseServerRenderer || next.nodeType !== _HTMLNodeType.COMMENT_NODE || next.data !== SUSPENSE_START_DATA)) {
    next = next.nextSibling;
  }
  return next;
}

function hydrateInstance(instance, type, props, rootContainerInstance, hostContext, internalInstanceHandle) {
  (0, _ReactDOMComponentTree.precacheFiberNode)(internalInstanceHandle, instance);
  // TODO: Possibly defer this until the commit phase where all the events
  // get attached.
  (0, _ReactDOMComponentTree.updateFiberProps)(instance, props);
  var parentNamespace = void 0;
  if (true) {
    var hostContextDev = hostContext;
    parentNamespace = hostContextDev.namespace;
  } else {
    parentNamespace = hostContext;
  }
  return (0, _ReactDOMComponent.diffHydratedProperties)(instance, type, props, parentNamespace, rootContainerInstance);
}

function hydrateTextInstance(textInstance, text, internalInstanceHandle) {
  (0, _ReactDOMComponentTree.precacheFiberNode)(internalInstanceHandle, textInstance);
  return (0, _ReactDOMComponent.diffHydratedText)(textInstance, text);
}

function getNextHydratableInstanceAfterSuspenseInstance(suspenseInstance) {
  var node = suspenseInstance.nextSibling;
  // Skip past all nodes within this suspense boundary.
  // There might be nested nodes so we need to keep track of how
  // deep we are and only break out when we're back on top.
  var depth = 0;
  while (node) {
    if (node.nodeType === _HTMLNodeType.COMMENT_NODE) {
      var data = node.data;
      if (data === SUSPENSE_END_DATA) {
        if (depth === 0) {
          return getNextHydratableSibling(node);
        } else {
          depth--;
        }
      } else if (data === SUSPENSE_START_DATA) {
        depth++;
      }
    }
    node = node.nextSibling;
  }
  // TODO: Warn, we didn't find the end comment boundary.
  return null;
}

function didNotMatchHydratedContainerTextInstance(parentContainer, textInstance, text) {
  if (true) {
    (0, _ReactDOMComponent.warnForUnmatchedText)(textInstance, text);
  }
}

function didNotMatchHydratedTextInstance(parentType, parentProps, parentInstance, textInstance, text) {
  if (true && parentProps[SUPPRESS_HYDRATION_WARNING] !== true) {
    (0, _ReactDOMComponent.warnForUnmatchedText)(textInstance, text);
  }
}

function didNotHydrateContainerInstance(parentContainer, instance) {
  if (true) {
    if (instance.nodeType === _HTMLNodeType.ELEMENT_NODE) {
      (0, _ReactDOMComponent.warnForDeletedHydratableElement)(parentContainer, instance);
    } else if (instance.nodeType === _HTMLNodeType.COMMENT_NODE) {
      // TODO: warnForDeletedHydratableSuspenseBoundary
    } else {
      (0, _ReactDOMComponent.warnForDeletedHydratableText)(parentContainer, instance);
    }
  }
}

function didNotHydrateInstance(parentType, parentProps, parentInstance, instance) {
  if (true && parentProps[SUPPRESS_HYDRATION_WARNING] !== true) {
    if (instance.nodeType === _HTMLNodeType.ELEMENT_NODE) {
      (0, _ReactDOMComponent.warnForDeletedHydratableElement)(parentInstance, instance);
    } else if (instance.nodeType === _HTMLNodeType.COMMENT_NODE) {
      // TODO: warnForDeletedHydratableSuspenseBoundary
    } else {
      (0, _ReactDOMComponent.warnForDeletedHydratableText)(parentInstance, instance);
    }
  }
}

function didNotFindHydratableContainerInstance(parentContainer, type, props) {
  if (true) {
    (0, _ReactDOMComponent.warnForInsertedHydratedElement)(parentContainer, type, props);
  }
}

function didNotFindHydratableContainerTextInstance(parentContainer, text) {
  if (true) {
    (0, _ReactDOMComponent.warnForInsertedHydratedText)(parentContainer, text);
  }
}

function didNotFindHydratableContainerSuspenseInstance(parentContainer) {
  if (true) {
    // TODO: warnForInsertedHydratedSupsense(parentContainer);
  }
}

function didNotFindHydratableInstance(parentType, parentProps, parentInstance, type, props) {
  if (true && parentProps[SUPPRESS_HYDRATION_WARNING] !== true) {
    (0, _ReactDOMComponent.warnForInsertedHydratedElement)(parentInstance, type, props);
  }
}

function didNotFindHydratableTextInstance(parentType, parentProps, parentInstance, text) {
  if (true && parentProps[SUPPRESS_HYDRATION_WARNING] !== true) {
    (0, _ReactDOMComponent.warnForInsertedHydratedText)(parentInstance, text);
  }
}

function didNotFindHydratableSuspenseInstance(parentType, parentProps, parentInstance) {
  if (true && parentProps[SUPPRESS_HYDRATION_WARNING] !== true) {
    // TODO: warnForInsertedHydratedSuspense(parentInstance);
  }
}

/***/ }),

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createHiddenTextInstance = exports.cloneUnhiddenInstance = exports.cloneHiddenInstance = exports.replaceContainerChildren = exports.finalizeContainerChildren = exports.appendChildToContainerChildSet = exports.createContainerChildSet = exports.cloneInstance = exports.supportsPersistence = undefined;

var _invariant = __webpack_require__(0);

var _invariant2 = _interopRequireDefault(_invariant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Renderers that don't support persistence
// can re-export everything from this module.

function shim() {
  (0, _invariant2.default)(false, 'The current renderer does not support persistence. ' + 'This error is likely caused by a bug in React. ' + 'Please file an issue.');
}

// Persistence (when unsupported)
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

var supportsPersistence = exports.supportsPersistence = false;
var cloneInstance = exports.cloneInstance = shim;
var createContainerChildSet = exports.createContainerChildSet = shim;
var appendChildToContainerChildSet = exports.appendChildToContainerChildSet = shim;
var finalizeContainerChildren = exports.finalizeContainerChildren = shim;
var replaceContainerChildren = exports.replaceContainerChildren = shim;
var cloneHiddenInstance = exports.cloneHiddenInstance = shim;
var cloneUnhiddenInstance = exports.cloneUnhiddenInstance = shim;
var createHiddenTextInstance = exports.createHiddenTextInstance = shim;

/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateDOMNesting = exports.updatedAncestorInfo = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * Copyright (c) Facebook, Inc. and its affiliates.
                                                                                                                                                                                                                                                                   *
                                                                                                                                                                                                                                                                   * This source code is licensed under the MIT license found in the
                                                                                                                                                                                                                                                                   * LICENSE file in the root directory of this source tree.
                                                                                                                                                                                                                                                                   */

// TODO: direct imports like some-package/src/* are bad. Fix me.


var _warningWithoutStack = __webpack_require__(1);

var _warningWithoutStack2 = _interopRequireDefault(_warningWithoutStack);

var _ReactCurrentFiber = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var validateDOMNesting = function validateDOMNesting() {};
var updatedAncestorInfo = function updatedAncestorInfo() {};

if (true) {
  // This validation code was written based on the HTML5 parsing spec:
  // https://html.spec.whatwg.org/multipage/syntax.html#has-an-element-in-scope
  //
  // Note: this does not catch all invalid nesting, nor does it try to (as it's
  // not clear what practical benefit doing so provides); instead, we warn only
  // for cases where the parser will give a parse tree differing from what React
  // intended. For example, <b><div></div></b> is invalid but we don't warn
  // because it still parses correctly; we do warn for other cases like nested
  // <p> tags where the beginning of the second element implicitly closes the
  // first, causing a confusing mess.

  // https://html.spec.whatwg.org/multipage/syntax.html#special
  var specialTags = ['address', 'applet', 'area', 'article', 'aside', 'base', 'basefont', 'bgsound', 'blockquote', 'body', 'br', 'button', 'caption', 'center', 'col', 'colgroup', 'dd', 'details', 'dir', 'div', 'dl', 'dt', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'frame', 'frameset', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'iframe', 'img', 'input', 'isindex', 'li', 'link', 'listing', 'main', 'marquee', 'menu', 'menuitem', 'meta', 'nav', 'noembed', 'noframes', 'noscript', 'object', 'ol', 'p', 'param', 'plaintext', 'pre', 'script', 'section', 'select', 'source', 'style', 'summary', 'table', 'tbody', 'td', 'template', 'textarea', 'tfoot', 'th', 'thead', 'title', 'tr', 'track', 'ul', 'wbr', 'xmp'];

  // https://html.spec.whatwg.org/multipage/syntax.html#has-an-element-in-scope
  var inScopeTags = ['applet', 'caption', 'html', 'table', 'td', 'th', 'marquee', 'object', 'template',

  // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
  // TODO: Distinguish by namespace here -- for <title>, including it here
  // errs on the side of fewer warnings
  'foreignObject', 'desc', 'title'];

  // https://html.spec.whatwg.org/multipage/syntax.html#has-an-element-in-button-scope
  var buttonScopeTags = inScopeTags.concat(['button']);

  // https://html.spec.whatwg.org/multipage/syntax.html#generate-implied-end-tags
  var impliedEndTags = ['dd', 'dt', 'li', 'option', 'optgroup', 'p', 'rp', 'rt'];

  var emptyAncestorInfo = {
    current: null,

    formTag: null,
    aTagInScope: null,
    buttonTagInScope: null,
    nobrTagInScope: null,
    pTagInButtonScope: null,

    listItemTagAutoclosing: null,
    dlItemTagAutoclosing: null
  };

  exports.updatedAncestorInfo = updatedAncestorInfo = function updatedAncestorInfo(oldInfo, tag) {
    var ancestorInfo = _extends({}, oldInfo || emptyAncestorInfo);
    var info = { tag: tag };

    if (inScopeTags.indexOf(tag) !== -1) {
      ancestorInfo.aTagInScope = null;
      ancestorInfo.buttonTagInScope = null;
      ancestorInfo.nobrTagInScope = null;
    }
    if (buttonScopeTags.indexOf(tag) !== -1) {
      ancestorInfo.pTagInButtonScope = null;
    }

    // See rules for 'li', 'dd', 'dt' start tags in
    // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inbody
    if (specialTags.indexOf(tag) !== -1 && tag !== 'address' && tag !== 'div' && tag !== 'p') {
      ancestorInfo.listItemTagAutoclosing = null;
      ancestorInfo.dlItemTagAutoclosing = null;
    }

    ancestorInfo.current = info;

    if (tag === 'form') {
      ancestorInfo.formTag = info;
    }
    if (tag === 'a') {
      ancestorInfo.aTagInScope = info;
    }
    if (tag === 'button') {
      ancestorInfo.buttonTagInScope = info;
    }
    if (tag === 'nobr') {
      ancestorInfo.nobrTagInScope = info;
    }
    if (tag === 'p') {
      ancestorInfo.pTagInButtonScope = info;
    }
    if (tag === 'li') {
      ancestorInfo.listItemTagAutoclosing = info;
    }
    if (tag === 'dd' || tag === 'dt') {
      ancestorInfo.dlItemTagAutoclosing = info;
    }

    return ancestorInfo;
  };

  /**
   * Returns whether
   */
  var isTagValidWithParent = function isTagValidWithParent(tag, parentTag) {
    // First, let's check if we're in an unusual parsing mode...
    switch (parentTag) {
      // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inselect
      case 'select':
        return tag === 'option' || tag === 'optgroup' || tag === '#text';
      case 'optgroup':
        return tag === 'option' || tag === '#text';
      // Strictly speaking, seeing an <option> doesn't mean we're in a <select>
      // but
      case 'option':
        return tag === '#text';
      // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intd
      // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-incaption
      // No special behavior since these rules fall back to "in body" mode for
      // all except special table nodes which cause bad parsing behavior anyway.

      // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intr
      case 'tr':
        return tag === 'th' || tag === 'td' || tag === 'style' || tag === 'script' || tag === 'template';
      // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intbody
      case 'tbody':
      case 'thead':
      case 'tfoot':
        return tag === 'tr' || tag === 'style' || tag === 'script' || tag === 'template';
      // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-incolgroup
      case 'colgroup':
        return tag === 'col' || tag === 'template';
      // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intable
      case 'table':
        return tag === 'caption' || tag === 'colgroup' || tag === 'tbody' || tag === 'tfoot' || tag === 'thead' || tag === 'style' || tag === 'script' || tag === 'template';
      // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inhead
      case 'head':
        return tag === 'base' || tag === 'basefont' || tag === 'bgsound' || tag === 'link' || tag === 'meta' || tag === 'title' || tag === 'noscript' || tag === 'noframes' || tag === 'style' || tag === 'script' || tag === 'template';
      // https://html.spec.whatwg.org/multipage/semantics.html#the-html-element
      case 'html':
        return tag === 'head' || tag === 'body';
      case '#document':
        return tag === 'html';
    }

    // Probably in the "in body" parsing mode, so we outlaw only tag combos
    // where the parsing rules cause implicit opens or closes to be added.
    // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inbody
    switch (tag) {
      case 'h1':
      case 'h2':
      case 'h3':
      case 'h4':
      case 'h5':
      case 'h6':
        return parentTag !== 'h1' && parentTag !== 'h2' && parentTag !== 'h3' && parentTag !== 'h4' && parentTag !== 'h5' && parentTag !== 'h6';

      case 'rp':
      case 'rt':
        return impliedEndTags.indexOf(parentTag) === -1;

      case 'body':
      case 'caption':
      case 'col':
      case 'colgroup':
      case 'frame':
      case 'head':
      case 'html':
      case 'tbody':
      case 'td':
      case 'tfoot':
      case 'th':
      case 'thead':
      case 'tr':
        // These tags are only valid with a few parents that have special child
        // parsing rules -- if we're down here, then none of those matched and
        // so we allow it only if we don't know what the parent is, as all other
        // cases are invalid.
        return parentTag == null;
    }

    return true;
  };

  /**
   * Returns whether
   */
  var findInvalidAncestorForTag = function findInvalidAncestorForTag(tag, ancestorInfo) {
    switch (tag) {
      case 'address':
      case 'article':
      case 'aside':
      case 'blockquote':
      case 'center':
      case 'details':
      case 'dialog':
      case 'dir':
      case 'div':
      case 'dl':
      case 'fieldset':
      case 'figcaption':
      case 'figure':
      case 'footer':
      case 'header':
      case 'hgroup':
      case 'main':
      case 'menu':
      case 'nav':
      case 'ol':
      case 'p':
      case 'section':
      case 'summary':
      case 'ul':
      case 'pre':
      case 'listing':
      case 'table':
      case 'hr':
      case 'xmp':
      case 'h1':
      case 'h2':
      case 'h3':
      case 'h4':
      case 'h5':
      case 'h6':
        return ancestorInfo.pTagInButtonScope;

      case 'form':
        return ancestorInfo.formTag || ancestorInfo.pTagInButtonScope;

      case 'li':
        return ancestorInfo.listItemTagAutoclosing;

      case 'dd':
      case 'dt':
        return ancestorInfo.dlItemTagAutoclosing;

      case 'button':
        return ancestorInfo.buttonTagInScope;

      case 'a':
        // Spec says something about storing a list of markers, but it sounds
        // equivalent to this check.
        return ancestorInfo.aTagInScope;

      case 'nobr':
        return ancestorInfo.nobrTagInScope;
    }

    return null;
  };

  var didWarn = {};

  exports.validateDOMNesting = validateDOMNesting = function validateDOMNesting(childTag, childText, ancestorInfo) {
    ancestorInfo = ancestorInfo || emptyAncestorInfo;
    var parentInfo = ancestorInfo.current;
    var parentTag = parentInfo && parentInfo.tag;

    if (childText != null) {
      (0, _warningWithoutStack2.default)(childTag == null, 'validateDOMNesting: when childText is passed, childTag should be null');
      childTag = '#text';
    }

    var invalidParent = isTagValidWithParent(childTag, parentTag) ? null : parentInfo;
    var invalidAncestor = invalidParent ? null : findInvalidAncestorForTag(childTag, ancestorInfo);
    var invalidParentOrAncestor = invalidParent || invalidAncestor;
    if (!invalidParentOrAncestor) {
      return;
    }

    var ancestorTag = invalidParentOrAncestor.tag;
    var addendum = (0, _ReactCurrentFiber.getCurrentFiberStackInDev)();

    var warnKey = !!invalidParent + '|' + childTag + '|' + ancestorTag + '|' + addendum;
    if (didWarn[warnKey]) {
      return;
    }
    didWarn[warnKey] = true;

    var tagDisplayName = childTag;
    var whitespaceInfo = '';
    if (childTag === '#text') {
      if (/\S/.test(childText)) {
        tagDisplayName = 'Text nodes';
      } else {
        tagDisplayName = 'Whitespace text nodes';
        whitespaceInfo = " Make sure you don't have any extra whitespace between tags on " + 'each line of your source code.';
      }
    } else {
      tagDisplayName = '<' + childTag + '>';
    }

    if (invalidParent) {
      var info = '';
      if (ancestorTag === 'table' && childTag === 'tr') {
        info += ' Add a <tbody> to your code to match the DOM tree generated by ' + 'the browser.';
      }
      (0, _warningWithoutStack2.default)(false, 'validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s%s', tagDisplayName, ancestorTag, whitespaceInfo, info, addendum);
    } else {
      (0, _warningWithoutStack2.default)(false, 'validateDOMNesting(...): %s cannot appear as a descendant of ' + '<%s>.%s', tagDisplayName, ancestorTag, addendum);
    }
  };
}

exports.updatedAncestorInfo = updatedAncestorInfo;
exports.validateDOMNesting = validateDOMNesting;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1yZWNvbmNpbGVyL3NyYy9SZWFjdEZpYmVySG9zdENvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1yZWNvbmNpbGVyL3NyYy9mb3Jrcy9SZWFjdEZpYmVySG9zdENvbmZpZy5kb20uanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtZG9tL3NyYy9jbGllbnQvUmVhY3RET01Ib3N0Q29uZmlnLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3NoYXJlZC9Ib3N0Q29uZmlnV2l0aE5vUGVyc2lzdGVuY2UuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtZG9tL3NyYy9jbGllbnQvdmFsaWRhdGVET01OZXN0aW5nLmpzIl0sIm5hbWVzIjpbInVuc3RhYmxlX25vdyIsInVuc3RhYmxlX3NjaGVkdWxlQ2FsbGJhY2siLCJ1bnN0YWJsZV9zaG91bGRZaWVsZCIsInVuc3RhYmxlX2NhbmNlbENhbGxiYWNrIiwiZ2V0Um9vdEhvc3RDb250ZXh0IiwiZ2V0Q2hpbGRIb3N0Q29udGV4dCIsImdldFB1YmxpY0luc3RhbmNlIiwicHJlcGFyZUZvckNvbW1pdCIsInJlc2V0QWZ0ZXJDb21taXQiLCJjcmVhdGVJbnN0YW5jZSIsImFwcGVuZEluaXRpYWxDaGlsZCIsImZpbmFsaXplSW5pdGlhbENoaWxkcmVuIiwicHJlcGFyZVVwZGF0ZSIsInNob3VsZFNldFRleHRDb250ZW50Iiwic2hvdWxkRGVwcmlvcml0aXplU3VidHJlZSIsImNyZWF0ZVRleHRJbnN0YW5jZSIsImNvbW1pdE1vdW50IiwiY29tbWl0VXBkYXRlIiwicmVzZXRUZXh0Q29udGVudCIsImNvbW1pdFRleHRVcGRhdGUiLCJhcHBlbmRDaGlsZCIsImFwcGVuZENoaWxkVG9Db250YWluZXIiLCJpbnNlcnRCZWZvcmUiLCJpbnNlcnRJbkNvbnRhaW5lckJlZm9yZSIsInJlbW92ZUNoaWxkIiwicmVtb3ZlQ2hpbGRGcm9tQ29udGFpbmVyIiwiY2xlYXJTdXNwZW5zZUJvdW5kYXJ5IiwiY2xlYXJTdXNwZW5zZUJvdW5kYXJ5RnJvbUNvbnRhaW5lciIsImhpZGVJbnN0YW5jZSIsImhpZGVUZXh0SW5zdGFuY2UiLCJ1bmhpZGVJbnN0YW5jZSIsInVuaGlkZVRleHRJbnN0YW5jZSIsImNhbkh5ZHJhdGVJbnN0YW5jZSIsImNhbkh5ZHJhdGVUZXh0SW5zdGFuY2UiLCJjYW5IeWRyYXRlU3VzcGVuc2VJbnN0YW5jZSIsImdldE5leHRIeWRyYXRhYmxlU2libGluZyIsImdldEZpcnN0SHlkcmF0YWJsZUNoaWxkIiwiaHlkcmF0ZUluc3RhbmNlIiwiaHlkcmF0ZVRleHRJbnN0YW5jZSIsImdldE5leHRIeWRyYXRhYmxlSW5zdGFuY2VBZnRlclN1c3BlbnNlSW5zdGFuY2UiLCJkaWROb3RNYXRjaEh5ZHJhdGVkQ29udGFpbmVyVGV4dEluc3RhbmNlIiwiZGlkTm90TWF0Y2hIeWRyYXRlZFRleHRJbnN0YW5jZSIsImRpZE5vdEh5ZHJhdGVDb250YWluZXJJbnN0YW5jZSIsImRpZE5vdEh5ZHJhdGVJbnN0YW5jZSIsImRpZE5vdEZpbmRIeWRyYXRhYmxlQ29udGFpbmVySW5zdGFuY2UiLCJkaWROb3RGaW5kSHlkcmF0YWJsZUNvbnRhaW5lclRleHRJbnN0YW5jZSIsImRpZE5vdEZpbmRIeWRyYXRhYmxlQ29udGFpbmVyU3VzcGVuc2VJbnN0YW5jZSIsImRpZE5vdEZpbmRIeWRyYXRhYmxlSW5zdGFuY2UiLCJkaWROb3RGaW5kSHlkcmF0YWJsZVRleHRJbnN0YW5jZSIsImRpZE5vdEZpbmRIeWRyYXRhYmxlU3VzcGVuc2VJbnN0YW5jZSIsIlNVUFBSRVNTX0hZRFJBVElPTl9XQVJOSU5HIiwiX19ERVZfXyIsIlNVU1BFTlNFX1NUQVJUX0RBVEEiLCJTVVNQRU5TRV9FTkRfREFUQSIsIlNUWUxFIiwiZXZlbnRzRW5hYmxlZCIsInNlbGVjdGlvbkluZm9ybWF0aW9uIiwic2hvdWxkQXV0b0ZvY3VzSG9zdENvbXBvbmVudCIsInR5cGUiLCJwcm9wcyIsImF1dG9Gb2N1cyIsInJvb3RDb250YWluZXJJbnN0YW5jZSIsIm5hbWVzcGFjZSIsIm5vZGVUeXBlIiwiRE9DVU1FTlRfTk9ERSIsIkRPQ1VNRU5UX0ZSQUdNRU5UX05PREUiLCJyb290IiwiZG9jdW1lbnRFbGVtZW50IiwibmFtZXNwYWNlVVJJIiwiY29udGFpbmVyIiwiQ09NTUVOVF9OT0RFIiwicGFyZW50Tm9kZSIsIm93bk5hbWVzcGFjZSIsInRhZ05hbWUiLCJ2YWxpZGF0ZWRUYWciLCJ0b0xvd2VyQ2FzZSIsImFuY2VzdG9ySW5mbyIsInBhcmVudEhvc3RDb250ZXh0IiwicGFyZW50SG9zdENvbnRleHREZXYiLCJwYXJlbnROYW1lc3BhY2UiLCJpbnN0YW5jZSIsImNvbnRhaW5lckluZm8iLCJob3N0Q29udGV4dCIsImludGVybmFsSW5zdGFuY2VIYW5kbGUiLCJob3N0Q29udGV4dERldiIsImNoaWxkcmVuIiwic3RyaW5nIiwib3duQW5jZXN0b3JJbmZvIiwiZG9tRWxlbWVudCIsInBhcmVudEluc3RhbmNlIiwiY2hpbGQiLCJvbGRQcm9wcyIsIm5ld1Byb3BzIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJoaWRkZW4iLCJ0ZXh0IiwidGV4dE5vZGUiLCJpc1ByaW1hcnlSZW5kZXJlciIsInNjaGVkdWxlVGltZW91dCIsInNldFRpbWVvdXQiLCJ1bmRlZmluZWQiLCJjYW5jZWxUaW1lb3V0IiwiY2xlYXJUaW1lb3V0Iiwibm9UaW1lb3V0Iiwic2NoZWR1bGVQYXNzaXZlRWZmZWN0cyIsInNjaGVkdWxlRGVmZXJyZWRDYWxsYmFjayIsImNhbmNlbFBhc3NpdmVFZmZlY3RzIiwiY2FuY2VsRGVmZXJyZWRDYWxsYmFjayIsInN1cHBvcnRzTXV0YXRpb24iLCJmb2N1cyIsInVwZGF0ZVBheWxvYWQiLCJ0ZXh0SW5zdGFuY2UiLCJvbGRUZXh0IiwibmV3VGV4dCIsIm5vZGVWYWx1ZSIsInJlYWN0Um9vdENvbnRhaW5lciIsIl9yZWFjdFJvb3RDb250YWluZXIiLCJvbmNsaWNrIiwiYmVmb3JlQ2hpbGQiLCJzdXNwZW5zZUluc3RhbmNlIiwibm9kZSIsImRlcHRoIiwibmV4dE5vZGUiLCJuZXh0U2libGluZyIsImRhdGEiLCJFTEVNRU5UX05PREUiLCJzdHlsZSIsImRpc3BsYXkiLCJzdHlsZVByb3AiLCJoYXNPd25Qcm9wZXJ0eSIsInN1cHBvcnRzSHlkcmF0aW9uIiwibm9kZU5hbWUiLCJURVhUX05PREUiLCJlbmFibGVTdXNwZW5zZVNlcnZlclJlbmRlcmVyIiwibmV4dCIsImZpcnN0Q2hpbGQiLCJwYXJlbnRDb250YWluZXIiLCJwYXJlbnRUeXBlIiwicGFyZW50UHJvcHMiLCJzaGltIiwic3VwcG9ydHNQZXJzaXN0ZW5jZSIsImNsb25lSW5zdGFuY2UiLCJjcmVhdGVDb250YWluZXJDaGlsZFNldCIsImFwcGVuZENoaWxkVG9Db250YWluZXJDaGlsZFNldCIsImZpbmFsaXplQ29udGFpbmVyQ2hpbGRyZW4iLCJyZXBsYWNlQ29udGFpbmVyQ2hpbGRyZW4iLCJjbG9uZUhpZGRlbkluc3RhbmNlIiwiY2xvbmVVbmhpZGRlbkluc3RhbmNlIiwiY3JlYXRlSGlkZGVuVGV4dEluc3RhbmNlIiwidmFsaWRhdGVET01OZXN0aW5nIiwidXBkYXRlZEFuY2VzdG9ySW5mbyIsInNwZWNpYWxUYWdzIiwiaW5TY29wZVRhZ3MiLCJidXR0b25TY29wZVRhZ3MiLCJjb25jYXQiLCJpbXBsaWVkRW5kVGFncyIsImVtcHR5QW5jZXN0b3JJbmZvIiwiY3VycmVudCIsImZvcm1UYWciLCJhVGFnSW5TY29wZSIsImJ1dHRvblRhZ0luU2NvcGUiLCJub2JyVGFnSW5TY29wZSIsInBUYWdJbkJ1dHRvblNjb3BlIiwibGlzdEl0ZW1UYWdBdXRvY2xvc2luZyIsImRsSXRlbVRhZ0F1dG9jbG9zaW5nIiwib2xkSW5mbyIsInRhZyIsImluZm8iLCJpbmRleE9mIiwiaXNUYWdWYWxpZFdpdGhQYXJlbnQiLCJwYXJlbnRUYWciLCJmaW5kSW52YWxpZEFuY2VzdG9yRm9yVGFnIiwiZGlkV2FybiIsImNoaWxkVGFnIiwiY2hpbGRUZXh0IiwicGFyZW50SW5mbyIsImludmFsaWRQYXJlbnQiLCJpbnZhbGlkQW5jZXN0b3IiLCJpbnZhbGlkUGFyZW50T3JBbmNlc3RvciIsImFuY2VzdG9yVGFnIiwiYWRkZW5kdW0iLCJ3YXJuS2V5IiwidGFnRGlzcGxheU5hbWUiLCJ3aGl0ZXNwYWNlSW5mbyIsInRlc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBcUJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFaQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7Ozs7Ozs7Ozs7Ozs7OzhRQ1RBOzs7Ozs7Ozs7QUFvRTZCOzs7QUFJN0I7Ozs7O3NCQU1FQSxZOzs7Ozs7c0JBQ0FDLHlCOzs7Ozs7c0JBQ0FDLG9COzs7Ozs7c0JBQ0FDLHVCOzs7Ozs7QUEyQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO1FBRWdCQyxrQixHQUFBQSxrQjtRQWlDQUMsbUIsR0FBQUEsbUI7UUFrQkFDLGlCLEdBQUFBLGlCO1FBSUFDLGdCLEdBQUFBLGdCO1FBTUFDLGdCLEdBQUFBLGdCO1FBT0FDLGMsR0FBQUEsYztRQXNDQUMsa0IsR0FBQUEsa0I7UUFPQUMsdUIsR0FBQUEsdUI7UUFXQUMsYSxHQUFBQSxhO1FBZ0NBQyxvQixHQUFBQSxvQjtRQWFBQyx5QixHQUFBQSx5QjtRQUlBQyxrQixHQUFBQSxrQjtRQWlDQUMsVyxHQUFBQSxXO1FBcUJBQyxZLEdBQUFBLFk7UUFlQUMsZ0IsR0FBQUEsZ0I7UUFJQUMsZ0IsR0FBQUEsZ0I7UUFRQUMsVyxHQUFBQSxXO1FBT0FDLHNCLEdBQUFBLHNCO1FBOEJBQyxZLEdBQUFBLFk7UUFRQUMsdUIsR0FBQUEsdUI7UUFZQUMsVyxHQUFBQSxXO1FBT0FDLHdCLEdBQUFBLHdCO1FBV0FDLHFCLEdBQUFBLHFCO1FBOEJBQyxrQyxHQUFBQSxrQztRQWFB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QUFsQixHQUF3QkgsUUFBeEIsR0FBbUMsR0FBbkMsR0FBeUNNLFdBQXpDLEdBQXVELEdBQXZELEdBQTZEQyxRQUQvRDtBQUVBLFFBQUlSLFFBQVFTLE9BQVIsQ0FBSixFQUFzQjtBQUNwQjtBQUNEO0FBQ0RULFlBQVFTLE9BQVIsSUFBbUIsSUFBbkI7O0FBRUEsUUFBSUMsaUJBQWlCVCxRQUFyQjtBQUNBLFFBQUlVLGlCQUFpQixFQUFyQjtBQUNBLFFBQUlWLGFBQWEsT0FBakIsRUFBMEI7QUFDeEIsVUFBSSxLQUFLVyxJQUFMLENBQVVWLFNBQVYsQ0FBSixFQUEwQjtBQUN4QlEseUJBQWlCLFlBQWpCO0FBQ0QsT0FGRCxNQUVPO0FBQ0xBLHlCQUFpQix1QkFBakI7QUFDQUMseUJBQ0Usb0VBQ0EsZ0NBRkY7QUFHRDtBQUNGLEtBVEQsTUFTTztBQUNMRCx1QkFBaUIsTUFBTVQsUUFBTixHQUFpQixHQUFsQztBQUNEOztBQUVELFFBQUlHLGFBQUosRUFBbUI7QUFDakIsVUFBSVQsT0FBTyxFQUFYO0FBQ0EsVUFBSVksZ0JBQWdCLE9BQWhCLElBQTJCTixhQUFhLElBQTVDLEVBQWtEO0FBQ2hETixnQkFDRSxvRUFDQSxjQUZGO0FBR0Q7QUFDRCx5Q0FDRSxLQURGLEVBRUUscUVBRkYsRUFHRWUsY0FIRixFQUlFSCxXQUpGLEVBS0VJLGNBTEYsRUFNRWhCLElBTkYsRUFPRWEsUUFQRjtBQVNELEtBaEJELE1BZ0JPO0FBQ0wseUNBQ0UsS0FERixFQUVFLGtFQUNFLFNBSEosRUFJRUUsY0FKRixFQUtFSCxXQUxGLEVBTUVDLFFBTkY7QUFRRDtBQUNGLEdBM0VEO0FBNEVEOztRQUVPOUIsbUIsR0FBQUEsbUI7UUFBcUJELGtCLEdBQUFBLGtCIiwiZmlsZSI6IjAuOTU1YWE0NzQ4YTE5MzRmOGQxYjIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGZsb3dcbiAqL1xuXG5pbXBvcnQgaW52YXJpYW50IGZyb20gJ3NoYXJlZC9pbnZhcmlhbnQnO1xuXG4vLyBXZSBleHBlY3QgdGhhdCBvdXIgUm9sbHVwLCBKZXN0LCBhbmQgRmxvdyBjb25maWd1cmF0aW9uc1xuLy8gYWx3YXlzIHNoaW0gdGhpcyBtb2R1bGUgd2l0aCB0aGUgY29ycmVzcG9uZGluZyBob3N0IGNvbmZpZ1xuLy8gKGVpdGhlciBwcm92aWRlZCBieSBhIHJlbmRlcmVyLCBvciBhIGdlbmVyaWMgc2hpbSBmb3IgbnBtKS5cbi8vXG4vLyBXZSBzaG91bGQgbmV2ZXIgcmVzb2x2ZSB0byB0aGlzIGZpbGUsIGJ1dCBpdCBleGlzdHMgdG8gbWFrZVxuLy8gc3VyZSB0aGF0IGlmIHdlICpkbyogYWNjaWRlbnRhbGx5IGJyZWFrIHRoZSBjb25maWd1cmF0aW9uLFxuLy8gdGhlIGZhaWx1cmUgaXNuJ3Qgc2lsZW50LlxuXG4vLyBpbnZhcmlhbnQoZmFsc2UsICdUaGlzIG1vZHVsZSBtdXN0IGJlIHNoaW1tZWQgYnkgYSBzcGVjaWZpYyByZW5kZXJlci4nKTtcblxuZXhwb3J0ICogZnJvbSAnLi9mb3Jrcy9SZWFjdEZpYmVySG9zdENvbmZpZy5kb20nXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1yZWNvbmNpbGVyL3NyYy9SZWFjdEZpYmVySG9zdENvbmZpZy5qcyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGZsb3dcbiAqL1xuXG5leHBvcnQgKiBmcm9tICdyZWFjdC1kb20vc3JjL2NsaWVudC9SZWFjdERPTUhvc3RDb25maWcnO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtcmVjb25jaWxlci9zcmMvZm9ya3MvUmVhY3RGaWJlckhvc3RDb25maWcuZG9tLmpzIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAZmxvd1xuICovXG5cbmltcG9ydCB7cHJlY2FjaGVGaWJlck5vZGUsIHVwZGF0ZUZpYmVyUHJvcHN9IGZyb20gJy4vUmVhY3RET01Db21wb25lbnRUcmVlJztcbmltcG9ydCB7XG4gIGNyZWF0ZUVsZW1lbnQsXG4gIGNyZWF0ZVRleHROb2RlLFxuICBzZXRJbml0aWFsUHJvcGVydGllcyxcbiAgZGlmZlByb3BlcnRpZXMsXG4gIHVwZGF0ZVByb3BlcnRpZXMsXG4gIGRpZmZIeWRyYXRlZFByb3BlcnRpZXMsXG4gIGRpZmZIeWRyYXRlZFRleHQsXG4gIHRyYXBDbGlja09uTm9uSW50ZXJhY3RpdmVFbGVtZW50LFxuICB3YXJuRm9yVW5tYXRjaGVkVGV4dCxcbiAgd2FybkZvckRlbGV0ZWRIeWRyYXRhYmxlRWxlbWVudCxcbiAgd2FybkZvckRlbGV0ZWRIeWRyYXRhYmxlVGV4dCxcbiAgd2FybkZvckluc2VydGVkSHlkcmF0ZWRFbGVtZW50LFxuICB3YXJuRm9ySW5zZXJ0ZWRIeWRyYXRlZFRleHQsXG59IGZyb20gJy4vUmVhY3RET01Db21wb25lbnQnO1xuaW1wb3J0IHtnZXRTZWxlY3Rpb25JbmZvcm1hdGlvbiwgcmVzdG9yZVNlbGVjdGlvbn0gZnJvbSAnLi9SZWFjdElucHV0U2VsZWN0aW9uJztcbmltcG9ydCBzZXRUZXh0Q29udGVudCBmcm9tICcuL3NldFRleHRDb250ZW50JztcbmltcG9ydCB7dmFsaWRhdGVET01OZXN0aW5nLCB1cGRhdGVkQW5jZXN0b3JJbmZvfSBmcm9tICcuL3ZhbGlkYXRlRE9NTmVzdGluZyc7XG5pbXBvcnQge1xuICBpc0VuYWJsZWQgYXMgUmVhY3RCcm93c2VyRXZlbnRFbWl0dGVySXNFbmFibGVkLFxuICBzZXRFbmFibGVkIGFzIFJlYWN0QnJvd3NlckV2ZW50RW1pdHRlclNldEVuYWJsZWQsXG59IGZyb20gJy4uL2V2ZW50cy9SZWFjdEJyb3dzZXJFdmVudEVtaXR0ZXInO1xuaW1wb3J0IHtnZXRDaGlsZE5hbWVzcGFjZX0gZnJvbSAnLi4vc2hhcmVkL0RPTU5hbWVzcGFjZXMnO1xuaW1wb3J0IHtcbiAgRUxFTUVOVF9OT0RFLFxuICBURVhUX05PREUsXG4gIENPTU1FTlRfTk9ERSxcbiAgRE9DVU1FTlRfTk9ERSxcbiAgRE9DVU1FTlRfRlJBR01FTlRfTk9ERSxcbn0gZnJvbSAnLi4vc2hhcmVkL0hUTUxOb2RlVHlwZSc7XG5pbXBvcnQgZGFuZ2Vyb3VzU3R5bGVWYWx1ZSBmcm9tICcuLi9zaGFyZWQvZGFuZ2Vyb3VzU3R5bGVWYWx1ZSc7XG5cbmltcG9ydCB0eXBlIHtET01Db250YWluZXJ9IGZyb20gJy4vUmVhY3RET00nO1xuXG5leHBvcnQgdHlwZSBUeXBlID0gc3RyaW5nO1xuZXhwb3J0IHR5cGUgUHJvcHMgPSB7XG4gIGF1dG9Gb2N1cz86IGJvb2xlYW4sXG4gIGNoaWxkcmVuPzogbWl4ZWQsXG4gIGhpZGRlbj86IGJvb2xlYW4sXG4gIHN1cHByZXNzSHlkcmF0aW9uV2FybmluZz86IGJvb2xlYW4sXG4gIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPzogbWl4ZWQsXG4gIHN0eWxlPzoge1xuICAgIGRpc3BsYXk/OiBzdHJpbmcsXG4gIH0sXG59O1xuZXhwb3J0IHR5cGUgQ29udGFpbmVyID0gRWxlbWVudCB8IERvY3VtZW50O1xuZXhwb3J0IHR5cGUgSW5zdGFuY2UgPSBFbGVtZW50O1xuZXhwb3J0IHR5cGUgVGV4dEluc3RhbmNlID0gVGV4dDtcbmV4cG9ydCB0eXBlIFN1c3BlbnNlSW5zdGFuY2UgPSBDb21tZW50O1xuZXhwb3J0IHR5cGUgSHlkcmF0YWJsZUluc3RhbmNlID0gSW5zdGFuY2UgfCBUZXh0SW5zdGFuY2UgfCBTdXNwZW5zZUluc3RhbmNlO1xuZXhwb3J0IHR5cGUgUHVibGljSW5zdGFuY2UgPSBFbGVtZW50IHwgVGV4dDtcbnR5cGUgSG9zdENvbnRleHREZXYgPSB7XG4gIG5hbWVzcGFjZTogc3RyaW5nLFxuICBhbmNlc3RvckluZm86IG1peGVkLFxufTtcbnR5cGUgSG9zdENvbnRleHRQcm9kID0gc3RyaW5nO1xuZXhwb3J0IHR5cGUgSG9zdENvbnRleHQgPSBIb3N0Q29udGV4dERldiB8IEhvc3RDb250ZXh0UHJvZDtcbmV4cG9ydCB0eXBlIFVwZGF0ZVBheWxvYWQgPSBBcnJheTxtaXhlZD47XG5leHBvcnQgdHlwZSBDaGlsZFNldCA9IHZvaWQ7IC8vIFVudXNlZFxuZXhwb3J0IHR5cGUgVGltZW91dEhhbmRsZSA9IFRpbWVvdXRJRDtcbmV4cG9ydCB0eXBlIE5vVGltZW91dCA9IC0xO1xuXG5pbXBvcnQge1xuICB1bnN0YWJsZV9zY2hlZHVsZUNhbGxiYWNrIGFzIHNjaGVkdWxlRGVmZXJyZWRDYWxsYmFjayxcbiAgdW5zdGFibGVfY2FuY2VsQ2FsbGJhY2sgYXMgY2FuY2VsRGVmZXJyZWRDYWxsYmFjayxcbn0gZnJvbSAnc2NoZWR1bGVyJztcbmltcG9ydCB7ZW5hYmxlU3VzcGVuc2VTZXJ2ZXJSZW5kZXJlcn0gZnJvbSAnc2hhcmVkL1JlYWN0RmVhdHVyZUZsYWdzJztcbmV4cG9ydCB7XG4gIHVuc3RhYmxlX25vdyBhcyBub3csXG4gIHVuc3RhYmxlX3NjaGVkdWxlQ2FsbGJhY2sgYXMgc2NoZWR1bGVEZWZlcnJlZENhbGxiYWNrLFxuICB1bnN0YWJsZV9zaG91bGRZaWVsZCBhcyBzaG91bGRZaWVsZCxcbiAgdW5zdGFibGVfY2FuY2VsQ2FsbGJhY2sgYXMgY2FuY2VsRGVmZXJyZWRDYWxsYmFjayxcbn0gZnJvbSAnc2NoZWR1bGVyJztcblxubGV0IFNVUFBSRVNTX0hZRFJBVElPTl9XQVJOSU5HO1xuaWYgKF9fREVWX18pIHtcbiAgU1VQUFJFU1NfSFlEUkFUSU9OX1dBUk5JTkcgPSAnc3VwcHJlc3NIeWRyYXRpb25XYXJuaW5nJztcbn1cblxuY29uc3QgU1VTUEVOU0VfU1RBUlRfREFUQSA9ICckJztcbmNvbnN0IFNVU1BFTlNFX0VORF9EQVRBID0gJy8kJztcblxuY29uc3QgU1RZTEUgPSAnc3R5bGUnO1xuXG5sZXQgZXZlbnRzRW5hYmxlZDogP2Jvb2xlYW4gPSBudWxsO1xubGV0IHNlbGVjdGlvbkluZm9ybWF0aW9uOiA/bWl4ZWQgPSBudWxsO1xuXG5mdW5jdGlvbiBzaG91bGRBdXRvRm9jdXNIb3N0Q29tcG9uZW50KHR5cGU6IHN0cmluZywgcHJvcHM6IFByb3BzKTogYm9vbGVhbiB7XG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgJ2J1dHRvbic6XG4gICAgY2FzZSAnaW5wdXQnOlxuICAgIGNhc2UgJ3NlbGVjdCc6XG4gICAgY2FzZSAndGV4dGFyZWEnOlxuICAgICAgcmV0dXJuICEhcHJvcHMuYXV0b0ZvY3VzO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0ICogZnJvbSAnc2hhcmVkL0hvc3RDb25maWdXaXRoTm9QZXJzaXN0ZW5jZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb290SG9zdENvbnRleHQoXG4gIHJvb3RDb250YWluZXJJbnN0YW5jZTogQ29udGFpbmVyLFxuKTogSG9zdENvbnRleHQge1xuICBsZXQgdHlwZTtcbiAgbGV0IG5hbWVzcGFjZTtcbiAgY29uc3Qgbm9kZVR5cGUgPSByb290Q29udGFpbmVySW5zdGFuY2Uubm9kZVR5cGU7XG4gIHN3aXRjaCAobm9kZVR5cGUpIHtcbiAgICBjYXNlIERPQ1VNRU5UX05PREU6XG4gICAgY2FzZSBET0NVTUVOVF9GUkFHTUVOVF9OT0RFOiB7XG4gICAgICB0eXBlID0gbm9kZVR5cGUgPT09IERPQ1VNRU5UX05PREUgPyAnI2RvY3VtZW50JyA6ICcjZnJhZ21lbnQnO1xuICAgICAgbGV0IHJvb3QgPSAocm9vdENvbnRhaW5lckluc3RhbmNlOiBhbnkpLmRvY3VtZW50RWxlbWVudDtcbiAgICAgIG5hbWVzcGFjZSA9IHJvb3QgPyByb290Lm5hbWVzcGFjZVVSSSA6IGdldENoaWxkTmFtZXNwYWNlKG51bGwsICcnKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBkZWZhdWx0OiB7XG4gICAgICBjb25zdCBjb250YWluZXI6IGFueSA9XG4gICAgICAgIG5vZGVUeXBlID09PSBDT01NRU5UX05PREVcbiAgICAgICAgICA/IHJvb3RDb250YWluZXJJbnN0YW5jZS5wYXJlbnROb2RlXG4gICAgICAgICAgOiByb290Q29udGFpbmVySW5zdGFuY2U7XG4gICAgICBjb25zdCBvd25OYW1lc3BhY2UgPSBjb250YWluZXIubmFtZXNwYWNlVVJJIHx8IG51bGw7XG4gICAgICB0eXBlID0gY29udGFpbmVyLnRhZ05hbWU7XG4gICAgICBuYW1lc3BhY2UgPSBnZXRDaGlsZE5hbWVzcGFjZShvd25OYW1lc3BhY2UsIHR5cGUpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIGlmIChfX0RFVl9fKSB7XG4gICAgY29uc3QgdmFsaWRhdGVkVGFnID0gdHlwZS50b0xvd2VyQ2FzZSgpO1xuICAgIGNvbnN0IGFuY2VzdG9ySW5mbyA9IHVwZGF0ZWRBbmNlc3RvckluZm8obnVsbCwgdmFsaWRhdGVkVGFnKTtcbiAgICByZXR1cm4ge25hbWVzcGFjZSwgYW5jZXN0b3JJbmZvfTtcbiAgfVxuICByZXR1cm4gbmFtZXNwYWNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2hpbGRIb3N0Q29udGV4dChcbiAgcGFyZW50SG9zdENvbnRleHQ6IEhvc3RDb250ZXh0LFxuICB0eXBlOiBzdHJpbmcsXG4gIHJvb3RDb250YWluZXJJbnN0YW5jZTogQ29udGFpbmVyLFxuKTogSG9zdENvbnRleHQge1xuICBpZiAoX19ERVZfXykge1xuICAgIGNvbnN0IHBhcmVudEhvc3RDb250ZXh0RGV2ID0gKChwYXJlbnRIb3N0Q29udGV4dDogYW55KTogSG9zdENvbnRleHREZXYpO1xuICAgIGNvbnN0IG5hbWVzcGFjZSA9IGdldENoaWxkTmFtZXNwYWNlKHBhcmVudEhvc3RDb250ZXh0RGV2Lm5hbWVzcGFjZSwgdHlwZSk7XG4gICAgY29uc3QgYW5jZXN0b3JJbmZvID0gdXBkYXRlZEFuY2VzdG9ySW5mbyhcbiAgICAgIHBhcmVudEhvc3RDb250ZXh0RGV2LmFuY2VzdG9ySW5mbyxcbiAgICAgIHR5cGUsXG4gICAgKTtcbiAgICByZXR1cm4ge25hbWVzcGFjZSwgYW5jZXN0b3JJbmZvfTtcbiAgfVxuICBjb25zdCBwYXJlbnROYW1lc3BhY2UgPSAoKHBhcmVudEhvc3RDb250ZXh0OiBhbnkpOiBIb3N0Q29udGV4dFByb2QpO1xuICByZXR1cm4gZ2V0Q2hpbGROYW1lc3BhY2UocGFyZW50TmFtZXNwYWNlLCB0eXBlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFB1YmxpY0luc3RhbmNlKGluc3RhbmNlOiBJbnN0YW5jZSk6ICoge1xuICByZXR1cm4gaW5zdGFuY2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmVwYXJlRm9yQ29tbWl0KGNvbnRhaW5lckluZm86IENvbnRhaW5lcik6IHZvaWQge1xuICBldmVudHNFbmFibGVkID0gUmVhY3RCcm93c2VyRXZlbnRFbWl0dGVySXNFbmFibGVkKCk7XG4gIHNlbGVjdGlvbkluZm9ybWF0aW9uID0gZ2V0U2VsZWN0aW9uSW5mb3JtYXRpb24oKTtcbiAgUmVhY3RCcm93c2VyRXZlbnRFbWl0dGVyU2V0RW5hYmxlZChmYWxzZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNldEFmdGVyQ29tbWl0KGNvbnRhaW5lckluZm86IENvbnRhaW5lcik6IHZvaWQge1xuICByZXN0b3JlU2VsZWN0aW9uKHNlbGVjdGlvbkluZm9ybWF0aW9uKTtcbiAgc2VsZWN0aW9uSW5mb3JtYXRpb24gPSBudWxsO1xuICBSZWFjdEJyb3dzZXJFdmVudEVtaXR0ZXJTZXRFbmFibGVkKGV2ZW50c0VuYWJsZWQpO1xuICBldmVudHNFbmFibGVkID0gbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUluc3RhbmNlKFxuICB0eXBlOiBzdHJpbmcsXG4gIHByb3BzOiBQcm9wcyxcbiAgcm9vdENvbnRhaW5lckluc3RhbmNlOiBDb250YWluZXIsXG4gIGhvc3RDb250ZXh0OiBIb3N0Q29udGV4dCxcbiAgaW50ZXJuYWxJbnN0YW5jZUhhbmRsZTogT2JqZWN0LFxuKTogSW5zdGFuY2Uge1xuICBsZXQgcGFyZW50TmFtZXNwYWNlOiBzdHJpbmc7XG4gIGlmIChfX0RFVl9fKSB7XG4gICAgLy8gVE9ETzogdGFrZSBuYW1lc3BhY2UgaW50byBhY2NvdW50IHdoZW4gdmFsaWRhdGluZy5cbiAgICBjb25zdCBob3N0Q29udGV4dERldiA9ICgoaG9zdENvbnRleHQ6IGFueSk6IEhvc3RDb250ZXh0RGV2KTtcbiAgICB2YWxpZGF0ZURPTU5lc3RpbmcodHlwZSwgbnVsbCwgaG9zdENvbnRleHREZXYuYW5jZXN0b3JJbmZvKTtcbiAgICBpZiAoXG4gICAgICB0eXBlb2YgcHJvcHMuY2hpbGRyZW4gPT09ICdzdHJpbmcnIHx8XG4gICAgICB0eXBlb2YgcHJvcHMuY2hpbGRyZW4gPT09ICdudW1iZXInXG4gICAgKSB7XG4gICAgICBjb25zdCBzdHJpbmcgPSAnJyArIHByb3BzLmNoaWxkcmVuO1xuICAgICAgY29uc3Qgb3duQW5jZXN0b3JJbmZvID0gdXBkYXRlZEFuY2VzdG9ySW5mbyhcbiAgICAgICAgaG9zdENvbnRleHREZXYuYW5jZXN0b3JJbmZvLFxuICAgICAgICB0eXBlLFxuICAgICAgKTtcbiAgICAgIHZhbGlkYXRlRE9NTmVzdGluZyhudWxsLCBzdHJpbmcsIG93bkFuY2VzdG9ySW5mbyk7XG4gICAgfVxuICAgIHBhcmVudE5hbWVzcGFjZSA9IGhvc3RDb250ZXh0RGV2Lm5hbWVzcGFjZTtcbiAgfSBlbHNlIHtcbiAgICBwYXJlbnROYW1lc3BhY2UgPSAoKGhvc3RDb250ZXh0OiBhbnkpOiBIb3N0Q29udGV4dFByb2QpO1xuICB9XG4gIGNvbnN0IGRvbUVsZW1lbnQ6IEluc3RhbmNlID0gY3JlYXRlRWxlbWVudChcbiAgICB0eXBlLFxuICAgIHByb3BzLFxuICAgIHJvb3RDb250YWluZXJJbnN0YW5jZSxcbiAgICBwYXJlbnROYW1lc3BhY2UsXG4gICk7XG4gIHByZWNhY2hlRmliZXJOb2RlKGludGVybmFsSW5zdGFuY2VIYW5kbGUsIGRvbUVsZW1lbnQpO1xuICB1cGRhdGVGaWJlclByb3BzKGRvbUVsZW1lbnQsIHByb3BzKTtcbiAgcmV0dXJuIGRvbUVsZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBlbmRJbml0aWFsQ2hpbGQoXG4gIHBhcmVudEluc3RhbmNlOiBJbnN0YW5jZSxcbiAgY2hpbGQ6IEluc3RhbmNlIHwgVGV4dEluc3RhbmNlLFxuKTogdm9pZCB7XG4gIHBhcmVudEluc3RhbmNlLmFwcGVuZENoaWxkKGNoaWxkKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmFsaXplSW5pdGlhbENoaWxkcmVuKFxuICBkb21FbGVtZW50OiBJbnN0YW5jZSxcbiAgdHlwZTogc3RyaW5nLFxuICBwcm9wczogUHJvcHMsXG4gIHJvb3RDb250YWluZXJJbnN0YW5jZTogQ29udGFpbmVyLFxuICBob3N0Q29udGV4dDogSG9zdENvbnRleHQsXG4pOiBib29sZWFuIHtcbiAgc2V0SW5pdGlhbFByb3BlcnRpZXMoZG9tRWxlbWVudCwgdHlwZSwgcHJvcHMsIHJvb3RDb250YWluZXJJbnN0YW5jZSk7XG4gIHJldHVybiBzaG91bGRBdXRvRm9jdXNIb3N0Q29tcG9uZW50KHR5cGUsIHByb3BzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByZXBhcmVVcGRhdGUoXG4gIGRvbUVsZW1lbnQ6IEluc3RhbmNlLFxuICB0eXBlOiBzdHJpbmcsXG4gIG9sZFByb3BzOiBQcm9wcyxcbiAgbmV3UHJvcHM6IFByb3BzLFxuICByb290Q29udGFpbmVySW5zdGFuY2U6IENvbnRhaW5lcixcbiAgaG9zdENvbnRleHQ6IEhvc3RDb250ZXh0LFxuKTogbnVsbCB8IEFycmF5PG1peGVkPiB7XG4gIGlmIChfX0RFVl9fKSB7XG4gICAgY29uc3QgaG9zdENvbnRleHREZXYgPSAoKGhvc3RDb250ZXh0OiBhbnkpOiBIb3N0Q29udGV4dERldik7XG4gICAgaWYgKFxuICAgICAgdHlwZW9mIG5ld1Byb3BzLmNoaWxkcmVuICE9PSB0eXBlb2Ygb2xkUHJvcHMuY2hpbGRyZW4gJiZcbiAgICAgICh0eXBlb2YgbmV3UHJvcHMuY2hpbGRyZW4gPT09ICdzdHJpbmcnIHx8XG4gICAgICAgIHR5cGVvZiBuZXdQcm9wcy5jaGlsZHJlbiA9PT0gJ251bWJlcicpXG4gICAgKSB7XG4gICAgICBjb25zdCBzdHJpbmcgPSAnJyArIG5ld1Byb3BzLmNoaWxkcmVuO1xuICAgICAgY29uc3Qgb3duQW5jZXN0b3JJbmZvID0gdXBkYXRlZEFuY2VzdG9ySW5mbyhcbiAgICAgICAgaG9zdENvbnRleHREZXYuYW5jZXN0b3JJbmZvLFxuICAgICAgICB0eXBlLFxuICAgICAgKTtcbiAgICAgIHZhbGlkYXRlRE9NTmVzdGluZyhudWxsLCBzdHJpbmcsIG93bkFuY2VzdG9ySW5mbyk7XG4gICAgfVxuICB9XG4gIHJldHVybiBkaWZmUHJvcGVydGllcyhcbiAgICBkb21FbGVtZW50LFxuICAgIHR5cGUsXG4gICAgb2xkUHJvcHMsXG4gICAgbmV3UHJvcHMsXG4gICAgcm9vdENvbnRhaW5lckluc3RhbmNlLFxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hvdWxkU2V0VGV4dENvbnRlbnQodHlwZTogc3RyaW5nLCBwcm9wczogUHJvcHMpOiBib29sZWFuIHtcbiAgcmV0dXJuIChcbiAgICB0eXBlID09PSAndGV4dGFyZWEnIHx8XG4gICAgdHlwZSA9PT0gJ29wdGlvbicgfHxcbiAgICB0eXBlID09PSAnbm9zY3JpcHQnIHx8XG4gICAgdHlwZW9mIHByb3BzLmNoaWxkcmVuID09PSAnc3RyaW5nJyB8fFxuICAgIHR5cGVvZiBwcm9wcy5jaGlsZHJlbiA9PT0gJ251bWJlcicgfHxcbiAgICAodHlwZW9mIHByb3BzLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MID09PSAnb2JqZWN0JyAmJlxuICAgICAgcHJvcHMuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwgIT09IG51bGwgJiZcbiAgICAgIHByb3BzLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MLl9faHRtbCAhPSBudWxsKVxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hvdWxkRGVwcmlvcml0aXplU3VidHJlZSh0eXBlOiBzdHJpbmcsIHByb3BzOiBQcm9wcyk6IGJvb2xlYW4ge1xuICByZXR1cm4gISFwcm9wcy5oaWRkZW47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUZXh0SW5zdGFuY2UoXG4gIHRleHQ6IHN0cmluZyxcbiAgcm9vdENvbnRhaW5lckluc3RhbmNlOiBDb250YWluZXIsXG4gIGhvc3RDb250ZXh0OiBIb3N0Q29udGV4dCxcbiAgaW50ZXJuYWxJbnN0YW5jZUhhbmRsZTogT2JqZWN0LFxuKTogVGV4dEluc3RhbmNlIHtcbiAgaWYgKF9fREVWX18pIHtcbiAgICBjb25zdCBob3N0Q29udGV4dERldiA9ICgoaG9zdENvbnRleHQ6IGFueSk6IEhvc3RDb250ZXh0RGV2KTtcbiAgICB2YWxpZGF0ZURPTU5lc3RpbmcobnVsbCwgdGV4dCwgaG9zdENvbnRleHREZXYuYW5jZXN0b3JJbmZvKTtcbiAgfVxuICBjb25zdCB0ZXh0Tm9kZTogVGV4dEluc3RhbmNlID0gY3JlYXRlVGV4dE5vZGUodGV4dCwgcm9vdENvbnRhaW5lckluc3RhbmNlKTtcbiAgcHJlY2FjaGVGaWJlck5vZGUoaW50ZXJuYWxJbnN0YW5jZUhhbmRsZSwgdGV4dE5vZGUpO1xuICByZXR1cm4gdGV4dE5vZGU7XG59XG5cbmV4cG9ydCBjb25zdCBpc1ByaW1hcnlSZW5kZXJlciA9IHRydWU7XG4vLyBUaGlzIGluaXRpYWxpemF0aW9uIGNvZGUgbWF5IHJ1biBldmVuIG9uIHNlcnZlciBlbnZpcm9ubWVudHNcbi8vIGlmIGEgY29tcG9uZW50IGp1c3QgaW1wb3J0cyBSZWFjdERPTSAoZS5nLiBmb3IgZmluZERPTU5vZGUpLlxuLy8gU29tZSBlbnZpcm9ubWVudHMgbWlnaHQgbm90IGhhdmUgc2V0VGltZW91dCBvciBjbGVhclRpbWVvdXQuXG5leHBvcnQgY29uc3Qgc2NoZWR1bGVUaW1lb3V0ID1cbiAgdHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicgPyBzZXRUaW1lb3V0IDogKHVuZGVmaW5lZDogYW55KTtcbmV4cG9ydCBjb25zdCBjYW5jZWxUaW1lb3V0ID1cbiAgdHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJyA/IGNsZWFyVGltZW91dCA6ICh1bmRlZmluZWQ6IGFueSk7XG5leHBvcnQgY29uc3Qgbm9UaW1lb3V0ID0gLTE7XG5leHBvcnQgY29uc3Qgc2NoZWR1bGVQYXNzaXZlRWZmZWN0cyA9IHNjaGVkdWxlRGVmZXJyZWRDYWxsYmFjaztcbmV4cG9ydCBjb25zdCBjYW5jZWxQYXNzaXZlRWZmZWN0cyA9IGNhbmNlbERlZmVycmVkQ2FsbGJhY2s7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vICAgICBNdXRhdGlvblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgY29uc3Qgc3VwcG9ydHNNdXRhdGlvbiA9IHRydWU7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21taXRNb3VudChcbiAgZG9tRWxlbWVudDogSW5zdGFuY2UsXG4gIHR5cGU6IHN0cmluZyxcbiAgbmV3UHJvcHM6IFByb3BzLFxuICBpbnRlcm5hbEluc3RhbmNlSGFuZGxlOiBPYmplY3QsXG4pOiB2b2lkIHtcbiAgLy8gRGVzcGl0ZSB0aGUgbmFtaW5nIHRoYXQgbWlnaHQgaW1wbHkgb3RoZXJ3aXNlLCB0aGlzIG1ldGhvZCBvbmx5XG4gIC8vIGZpcmVzIGlmIHRoZXJlIGlzIGFuIGBVcGRhdGVgIGVmZmVjdCBzY2hlZHVsZWQgZHVyaW5nIG1vdW50aW5nLlxuICAvLyBUaGlzIGhhcHBlbnMgaWYgYGZpbmFsaXplSW5pdGlhbENoaWxkcmVuYCByZXR1cm5zIGB0cnVlYCAod2hpY2ggaXRcbiAgLy8gZG9lcyB0byBpbXBsZW1lbnQgdGhlIGBhdXRvRm9jdXNgIGF0dHJpYnV0ZSBvbiB0aGUgY2xpZW50KS4gQnV0XG4gIC8vIHRoZXJlIGFyZSBhbHNvIG90aGVyIGNhc2VzIHdoZW4gdGhpcyBtaWdodCBoYXBwZW4gKHN1Y2ggYXMgcGF0Y2hpbmdcbiAgLy8gdXAgdGV4dCBjb250ZW50IGR1cmluZyBoeWRyYXRpb24gbWlzbWF0Y2gpLiBTbyB3ZSdsbCBjaGVjayB0aGlzIGFnYWluLlxuICBpZiAoc2hvdWxkQXV0b0ZvY3VzSG9zdENvbXBvbmVudCh0eXBlLCBuZXdQcm9wcykpIHtcbiAgICAoKGRvbUVsZW1lbnQ6IGFueSk6XG4gICAgICB8IEhUTUxCdXR0b25FbGVtZW50XG4gICAgICB8IEhUTUxJbnB1dEVsZW1lbnRcbiAgICAgIHwgSFRNTFNlbGVjdEVsZW1lbnRcbiAgICAgIHwgSFRNTFRleHRBcmVhRWxlbWVudCkuZm9jdXMoKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tbWl0VXBkYXRlKFxuICBkb21FbGVtZW50OiBJbnN0YW5jZSxcbiAgdXBkYXRlUGF5bG9hZDogQXJyYXk8bWl4ZWQ+LFxuICB0eXBlOiBzdHJpbmcsXG4gIG9sZFByb3BzOiBQcm9wcyxcbiAgbmV3UHJvcHM6IFByb3BzLFxuICBpbnRlcm5hbEluc3RhbmNlSGFuZGxlOiBPYmplY3QsXG4pOiB2b2lkIHtcbiAgLy8gVXBkYXRlIHRoZSBwcm9wcyBoYW5kbGUgc28gdGhhdCB3ZSBrbm93IHdoaWNoIHByb3BzIGFyZSB0aGUgb25lcyB3aXRoXG4gIC8vIHdpdGggY3VycmVudCBldmVudCBoYW5kbGVycy5cbiAgdXBkYXRlRmliZXJQcm9wcyhkb21FbGVtZW50LCBuZXdQcm9wcyk7XG4gIC8vIEFwcGx5IHRoZSBkaWZmIHRvIHRoZSBET00gbm9kZS5cbiAgdXBkYXRlUHJvcGVydGllcyhkb21FbGVtZW50LCB1cGRhdGVQYXlsb2FkLCB0eXBlLCBvbGRQcm9wcywgbmV3UHJvcHMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzZXRUZXh0Q29udGVudChkb21FbGVtZW50OiBJbnN0YW5jZSk6IHZvaWQge1xuICBzZXRUZXh0Q29udGVudChkb21FbGVtZW50LCAnJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21taXRUZXh0VXBkYXRlKFxuICB0ZXh0SW5zdGFuY2U6IFRleHRJbnN0YW5jZSxcbiAgb2xkVGV4dDogc3RyaW5nLFxuICBuZXdUZXh0OiBzdHJpbmcsXG4pOiB2b2lkIHtcbiAgdGV4dEluc3RhbmNlLm5vZGVWYWx1ZSA9IG5ld1RleHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBlbmRDaGlsZChcbiAgcGFyZW50SW5zdGFuY2U6IEluc3RhbmNlLFxuICBjaGlsZDogSW5zdGFuY2UgfCBUZXh0SW5zdGFuY2UsXG4pOiB2b2lkIHtcbiAgcGFyZW50SW5zdGFuY2UuYXBwZW5kQ2hpbGQoY2hpbGQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwZW5kQ2hpbGRUb0NvbnRhaW5lcihcbiAgY29udGFpbmVyOiBET01Db250YWluZXIsXG4gIGNoaWxkOiBJbnN0YW5jZSB8IFRleHRJbnN0YW5jZSxcbik6IHZvaWQge1xuICBsZXQgcGFyZW50Tm9kZTtcbiAgaWYgKGNvbnRhaW5lci5ub2RlVHlwZSA9PT0gQ09NTUVOVF9OT0RFKSB7XG4gICAgcGFyZW50Tm9kZSA9IChjb250YWluZXIucGFyZW50Tm9kZTogYW55KTtcbiAgICBwYXJlbnROb2RlLmluc2VydEJlZm9yZShjaGlsZCwgY29udGFpbmVyKTtcbiAgfSBlbHNlIHtcbiAgICBwYXJlbnROb2RlID0gY29udGFpbmVyO1xuICAgIHBhcmVudE5vZGUuYXBwZW5kQ2hpbGQoY2hpbGQpO1xuICB9XG4gIC8vIFRoaXMgY29udGFpbmVyIG1pZ2h0IGJlIHVzZWQgZm9yIGEgcG9ydGFsLlxuICAvLyBJZiBzb21ldGhpbmcgaW5zaWRlIGEgcG9ydGFsIGlzIGNsaWNrZWQsIHRoYXQgY2xpY2sgc2hvdWxkIGJ1YmJsZVxuICAvLyB0aHJvdWdoIHRoZSBSZWFjdCB0cmVlLiBIb3dldmVyLCBvbiBNb2JpbGUgU2FmYXJpIHRoZSBjbGljayB3b3VsZFxuICAvLyBuZXZlciBidWJibGUgdGhyb3VnaCB0aGUgKkRPTSogdHJlZSB1bmxlc3MgYW4gYW5jZXN0b3Igd2l0aCBvbmNsaWNrXG4gIC8vIGV2ZW50IGV4aXN0cy4gU28gd2Ugd291bGRuJ3Qgc2VlIGl0IGFuZCBkaXNwYXRjaCBpdC5cbiAgLy8gVGhpcyBpcyB3aHkgd2UgZW5zdXJlIHRoYXQgbm9uIFJlYWN0IHJvb3QgY29udGFpbmVycyBoYXZlIGlubGluZSBvbmNsaWNrXG4gIC8vIGRlZmluZWQuXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTE5MThcbiAgY29uc3QgcmVhY3RSb290Q29udGFpbmVyID0gY29udGFpbmVyLl9yZWFjdFJvb3RDb250YWluZXI7XG4gIGlmIChcbiAgICAocmVhY3RSb290Q29udGFpbmVyID09PSBudWxsIHx8IHJlYWN0Um9vdENvbnRhaW5lciA9PT0gdW5kZWZpbmVkKSAmJlxuICAgIHBhcmVudE5vZGUub25jbGljayA9PT0gbnVsbFxuICApIHtcbiAgICAvLyBUT0RPOiBUaGlzIGNhc3QgbWF5IG5vdCBiZSBzb3VuZCBmb3IgU1ZHLCBNYXRoTUwgb3IgY3VzdG9tIGVsZW1lbnRzLlxuICAgIHRyYXBDbGlja09uTm9uSW50ZXJhY3RpdmVFbGVtZW50KCgocGFyZW50Tm9kZTogYW55KTogSFRNTEVsZW1lbnQpKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5zZXJ0QmVmb3JlKFxuICBwYXJlbnRJbnN0YW5jZTogSW5zdGFuY2UsXG4gIGNoaWxkOiBJbnN0YW5jZSB8IFRleHRJbnN0YW5jZSxcbiAgYmVmb3JlQ2hpbGQ6IEluc3RhbmNlIHwgVGV4dEluc3RhbmNlIHwgU3VzcGVuc2VJbnN0YW5jZSxcbik6IHZvaWQge1xuICBwYXJlbnRJbnN0YW5jZS5pbnNlcnRCZWZvcmUoY2hpbGQsIGJlZm9yZUNoaWxkKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluc2VydEluQ29udGFpbmVyQmVmb3JlKFxuICBjb250YWluZXI6IENvbnRhaW5lcixcbiAgY2hpbGQ6IEluc3RhbmNlIHwgVGV4dEluc3RhbmNlLFxuICBiZWZvcmVDaGlsZDogSW5zdGFuY2UgfCBUZXh0SW5zdGFuY2UgfCBTdXNwZW5zZUluc3RhbmNlLFxuKTogdm9pZCB7XG4gIGlmIChjb250YWluZXIubm9kZVR5cGUgPT09IENPTU1FTlRfTk9ERSkge1xuICAgIChjb250YWluZXIucGFyZW50Tm9kZTogYW55KS5pbnNlcnRCZWZvcmUoY2hpbGQsIGJlZm9yZUNoaWxkKTtcbiAgfSBlbHNlIHtcbiAgICBjb250YWluZXIuaW5zZXJ0QmVmb3JlKGNoaWxkLCBiZWZvcmVDaGlsZCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUNoaWxkKFxuICBwYXJlbnRJbnN0YW5jZTogSW5zdGFuY2UsXG4gIGNoaWxkOiBJbnN0YW5jZSB8IFRleHRJbnN0YW5jZSB8IFN1c3BlbnNlSW5zdGFuY2UsXG4pOiB2b2lkIHtcbiAgcGFyZW50SW5zdGFuY2UucmVtb3ZlQ2hpbGQoY2hpbGQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQ2hpbGRGcm9tQ29udGFpbmVyKFxuICBjb250YWluZXI6IENvbnRhaW5lcixcbiAgY2hpbGQ6IEluc3RhbmNlIHwgVGV4dEluc3RhbmNlIHwgU3VzcGVuc2VJbnN0YW5jZSxcbik6IHZvaWQge1xuICBpZiAoY29udGFpbmVyLm5vZGVUeXBlID09PSBDT01NRU5UX05PREUpIHtcbiAgICAoY29udGFpbmVyLnBhcmVudE5vZGU6IGFueSkucmVtb3ZlQ2hpbGQoY2hpbGQpO1xuICB9IGVsc2Uge1xuICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChjaGlsZCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyU3VzcGVuc2VCb3VuZGFyeShcbiAgcGFyZW50SW5zdGFuY2U6IEluc3RhbmNlLFxuICBzdXNwZW5zZUluc3RhbmNlOiBTdXNwZW5zZUluc3RhbmNlLFxuKTogdm9pZCB7XG4gIGxldCBub2RlID0gc3VzcGVuc2VJbnN0YW5jZTtcbiAgLy8gRGVsZXRlIGFsbCBub2RlcyB3aXRoaW4gdGhpcyBzdXNwZW5zZSBib3VuZGFyeS5cbiAgLy8gVGhlcmUgbWlnaHQgYmUgbmVzdGVkIG5vZGVzIHNvIHdlIG5lZWQgdG8ga2VlcCB0cmFjayBvZiBob3dcbiAgLy8gZGVlcCB3ZSBhcmUgYW5kIG9ubHkgYnJlYWsgb3V0IHdoZW4gd2UncmUgYmFjayBvbiB0b3AuXG4gIGxldCBkZXB0aCA9IDA7XG4gIGRvIHtcbiAgICBsZXQgbmV4dE5vZGUgPSBub2RlLm5leHRTaWJsaW5nO1xuICAgIHBhcmVudEluc3RhbmNlLnJlbW92ZUNoaWxkKG5vZGUpO1xuICAgIGlmIChuZXh0Tm9kZSAmJiBuZXh0Tm9kZS5ub2RlVHlwZSA9PT0gQ09NTUVOVF9OT0RFKSB7XG4gICAgICBsZXQgZGF0YSA9ICgobmV4dE5vZGU6IGFueSkuZGF0YTogc3RyaW5nKTtcbiAgICAgIGlmIChkYXRhID09PSBTVVNQRU5TRV9FTkRfREFUQSkge1xuICAgICAgICBpZiAoZGVwdGggPT09IDApIHtcbiAgICAgICAgICBwYXJlbnRJbnN0YW5jZS5yZW1vdmVDaGlsZChuZXh0Tm9kZSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRlcHRoLS07XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZGF0YSA9PT0gU1VTUEVOU0VfU1RBUlRfREFUQSkge1xuICAgICAgICBkZXB0aCsrO1xuICAgICAgfVxuICAgIH1cbiAgICBub2RlID0gbmV4dE5vZGU7XG4gIH0gd2hpbGUgKG5vZGUpO1xuICAvLyBUT0RPOiBXYXJuLCB3ZSBkaWRuJ3QgZmluZCB0aGUgZW5kIGNvbW1lbnQgYm91bmRhcnkuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhclN1c3BlbnNlQm91bmRhcnlGcm9tQ29udGFpbmVyKFxuICBjb250YWluZXI6IENvbnRhaW5lcixcbiAgc3VzcGVuc2VJbnN0YW5jZTogU3VzcGVuc2VJbnN0YW5jZSxcbik6IHZvaWQge1xuICBpZiAoY29udGFpbmVyLm5vZGVUeXBlID09PSBDT01NRU5UX05PREUpIHtcbiAgICBjbGVhclN1c3BlbnNlQm91bmRhcnkoKGNvbnRhaW5lci5wYXJlbnROb2RlOiBhbnkpLCBzdXNwZW5zZUluc3RhbmNlKTtcbiAgfSBlbHNlIGlmIChjb250YWluZXIubm9kZVR5cGUgPT09IEVMRU1FTlRfTk9ERSkge1xuICAgIGNsZWFyU3VzcGVuc2VCb3VuZGFyeSgoY29udGFpbmVyOiBhbnkpLCBzdXNwZW5zZUluc3RhbmNlKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBEb2N1bWVudCBub2RlcyBzaG91bGQgbmV2ZXIgY29udGFpbiBzdXNwZW5zZSBib3VuZGFyaWVzLlxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoaWRlSW5zdGFuY2UoaW5zdGFuY2U6IEluc3RhbmNlKTogdm9pZCB7XG4gIC8vIFRPRE86IERvZXMgdGhpcyB3b3JrIGZvciBhbGwgZWxlbWVudCB0eXBlcz8gV2hhdCBhYm91dCBNYXRoTUw/IFNob3VsZCB3ZVxuICAvLyBwYXNzIGhvc3QgY29udGV4dCB0byB0aGlzIG1ldGhvZD9cbiAgaW5zdGFuY2UgPSAoKGluc3RhbmNlOiBhbnkpOiBIVE1MRWxlbWVudCk7XG4gIGluc3RhbmNlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoaWRlVGV4dEluc3RhbmNlKHRleHRJbnN0YW5jZTogVGV4dEluc3RhbmNlKTogdm9pZCB7XG4gIHRleHRJbnN0YW5jZS5ub2RlVmFsdWUgPSAnJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuaGlkZUluc3RhbmNlKGluc3RhbmNlOiBJbnN0YW5jZSwgcHJvcHM6IFByb3BzKTogdm9pZCB7XG4gIGluc3RhbmNlID0gKChpbnN0YW5jZTogYW55KTogSFRNTEVsZW1lbnQpO1xuICBjb25zdCBzdHlsZVByb3AgPSBwcm9wc1tTVFlMRV07XG4gIGNvbnN0IGRpc3BsYXkgPVxuICAgIHN0eWxlUHJvcCAhPT0gdW5kZWZpbmVkICYmXG4gICAgc3R5bGVQcm9wICE9PSBudWxsICYmXG4gICAgc3R5bGVQcm9wLmhhc093blByb3BlcnR5KCdkaXNwbGF5JylcbiAgICAgID8gc3R5bGVQcm9wLmRpc3BsYXlcbiAgICAgIDogbnVsbDtcbiAgaW5zdGFuY2Uuc3R5bGUuZGlzcGxheSA9IGRhbmdlcm91c1N0eWxlVmFsdWUoJ2Rpc3BsYXknLCBkaXNwbGF5KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuaGlkZVRleHRJbnN0YW5jZShcbiAgdGV4dEluc3RhbmNlOiBUZXh0SW5zdGFuY2UsXG4gIHRleHQ6IHN0cmluZyxcbik6IHZvaWQge1xuICB0ZXh0SW5zdGFuY2Uubm9kZVZhbHVlID0gdGV4dDtcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gICAgIEh5ZHJhdGlvblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgY29uc3Qgc3VwcG9ydHNIeWRyYXRpb24gPSB0cnVlO1xuXG5leHBvcnQgZnVuY3Rpb24gY2FuSHlkcmF0ZUluc3RhbmNlKFxuICBpbnN0YW5jZTogSHlkcmF0YWJsZUluc3RhbmNlLFxuICB0eXBlOiBzdHJpbmcsXG4gIHByb3BzOiBQcm9wcyxcbik6IG51bGwgfCBJbnN0YW5jZSB7XG4gIGlmIChcbiAgICBpbnN0YW5jZS5ub2RlVHlwZSAhPT0gRUxFTUVOVF9OT0RFIHx8XG4gICAgdHlwZS50b0xvd2VyQ2FzZSgpICE9PSBpbnN0YW5jZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpXG4gICkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIC8vIFRoaXMgaGFzIG5vdyBiZWVuIHJlZmluZWQgdG8gYW4gZWxlbWVudCBub2RlLlxuICByZXR1cm4gKChpbnN0YW5jZTogYW55KTogSW5zdGFuY2UpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FuSHlkcmF0ZVRleHRJbnN0YW5jZShcbiAgaW5zdGFuY2U6IEh5ZHJhdGFibGVJbnN0YW5jZSxcbiAgdGV4dDogc3RyaW5nLFxuKTogbnVsbCB8IFRleHRJbnN0YW5jZSB7XG4gIGlmICh0ZXh0ID09PSAnJyB8fCBpbnN0YW5jZS5ub2RlVHlwZSAhPT0gVEVYVF9OT0RFKSB7XG4gICAgLy8gRW1wdHkgc3RyaW5ncyBhcmUgbm90IHBhcnNlZCBieSBIVE1MIHNvIHRoZXJlIHdvbid0IGJlIGEgY29ycmVjdCBtYXRjaCBoZXJlLlxuICAgIHJldHVybiBudWxsO1xuICB9XG4gIC8vIFRoaXMgaGFzIG5vdyBiZWVuIHJlZmluZWQgdG8gYSB0ZXh0IG5vZGUuXG4gIHJldHVybiAoKGluc3RhbmNlOiBhbnkpOiBUZXh0SW5zdGFuY2UpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FuSHlkcmF0ZVN1c3BlbnNlSW5zdGFuY2UoXG4gIGluc3RhbmNlOiBIeWRyYXRhYmxlSW5zdGFuY2UsXG4pOiBudWxsIHwgU3VzcGVuc2VJbnN0YW5jZSB7XG4gIGlmIChpbnN0YW5jZS5ub2RlVHlwZSAhPT0gQ09NTUVOVF9OT0RFKSB7XG4gICAgLy8gRW1wdHkgc3RyaW5ncyBhcmUgbm90IHBhcnNlZCBieSBIVE1MIHNvIHRoZXJlIHdvbid0IGJlIGEgY29ycmVjdCBtYXRjaCBoZXJlLlxuICAgIHJldHVybiBudWxsO1xuICB9XG4gIC8vIFRoaXMgaGFzIG5vdyBiZWVuIHJlZmluZWQgdG8gYSBzdXNwZW5zZSBub2RlLlxuICByZXR1cm4gKChpbnN0YW5jZTogYW55KTogU3VzcGVuc2VJbnN0YW5jZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXROZXh0SHlkcmF0YWJsZVNpYmxpbmcoXG4gIGluc3RhbmNlOiBIeWRyYXRhYmxlSW5zdGFuY2UsXG4pOiBudWxsIHwgSHlkcmF0YWJsZUluc3RhbmNlIHtcbiAgbGV0IG5vZGUgPSBpbnN0YW5jZS5uZXh0U2libGluZztcbiAgLy8gU2tpcCBub24taHlkcmF0YWJsZSBub2Rlcy5cbiAgd2hpbGUgKFxuICAgIG5vZGUgJiZcbiAgICBub2RlLm5vZGVUeXBlICE9PSBFTEVNRU5UX05PREUgJiZcbiAgICBub2RlLm5vZGVUeXBlICE9PSBURVhUX05PREUgJiZcbiAgICAoIWVuYWJsZVN1c3BlbnNlU2VydmVyUmVuZGVyZXIgfHxcbiAgICAgIG5vZGUubm9kZVR5cGUgIT09IENPTU1FTlRfTk9ERSB8fFxuICAgICAgKG5vZGU6IGFueSkuZGF0YSAhPT0gU1VTUEVOU0VfU1RBUlRfREFUQSlcbiAgKSB7XG4gICAgbm9kZSA9IG5vZGUubmV4dFNpYmxpbmc7XG4gIH1cbiAgcmV0dXJuIChub2RlOiBhbnkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Rmlyc3RIeWRyYXRhYmxlQ2hpbGQoXG4gIHBhcmVudEluc3RhbmNlOiBDb250YWluZXIgfCBJbnN0YW5jZSxcbik6IG51bGwgfCBIeWRyYXRhYmxlSW5zdGFuY2Uge1xuICBsZXQgbmV4dCA9IHBhcmVudEluc3RhbmNlLmZpcnN0Q2hpbGQ7XG4gIC8vIFNraXAgbm9uLWh5ZHJhdGFibGUgbm9kZXMuXG4gIHdoaWxlIChcbiAgICBuZXh0ICYmXG4gICAgbmV4dC5ub2RlVHlwZSAhPT0gRUxFTUVOVF9OT0RFICYmXG4gICAgbmV4dC5ub2RlVHlwZSAhPT0gVEVYVF9OT0RFICYmXG4gICAgKCFlbmFibGVTdXNwZW5zZVNlcnZlclJlbmRlcmVyIHx8XG4gICAgICBuZXh0Lm5vZGVUeXBlICE9PSBDT01NRU5UX05PREUgfHxcbiAgICAgIChuZXh0OiBhbnkpLmRhdGEgIT09IFNVU1BFTlNFX1NUQVJUX0RBVEEpXG4gICkge1xuICAgIG5leHQgPSBuZXh0Lm5leHRTaWJsaW5nO1xuICB9XG4gIHJldHVybiAobmV4dDogYW55KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGh5ZHJhdGVJbnN0YW5jZShcbiAgaW5zdGFuY2U6IEluc3RhbmNlLFxuICB0eXBlOiBzdHJpbmcsXG4gIHByb3BzOiBQcm9wcyxcbiAgcm9vdENvbnRhaW5lckluc3RhbmNlOiBDb250YWluZXIsXG4gIGhvc3RDb250ZXh0OiBIb3N0Q29udGV4dCxcbiAgaW50ZXJuYWxJbnN0YW5jZUhhbmRsZTogT2JqZWN0LFxuKTogbnVsbCB8IEFycmF5PG1peGVkPiB7XG4gIHByZWNhY2hlRmliZXJOb2RlKGludGVybmFsSW5zdGFuY2VIYW5kbGUsIGluc3RhbmNlKTtcbiAgLy8gVE9ETzogUG9zc2libHkgZGVmZXIgdGhpcyB1bnRpbCB0aGUgY29tbWl0IHBoYXNlIHdoZXJlIGFsbCB0aGUgZXZlbnRzXG4gIC8vIGdldCBhdHRhY2hlZC5cbiAgdXBkYXRlRmliZXJQcm9wcyhpbnN0YW5jZSwgcHJvcHMpO1xuICBsZXQgcGFyZW50TmFtZXNwYWNlOiBzdHJpbmc7XG4gIGlmIChfX0RFVl9fKSB7XG4gICAgY29uc3QgaG9zdENvbnRleHREZXYgPSAoKGhvc3RDb250ZXh0OiBhbnkpOiBIb3N0Q29udGV4dERldik7XG4gICAgcGFyZW50TmFtZXNwYWNlID0gaG9zdENvbnRleHREZXYubmFtZXNwYWNlO1xuICB9IGVsc2Uge1xuICAgIHBhcmVudE5hbWVzcGFjZSA9ICgoaG9zdENvbnRleHQ6IGFueSk6IEhvc3RDb250ZXh0UHJvZCk7XG4gIH1cbiAgcmV0dXJuIGRpZmZIeWRyYXRlZFByb3BlcnRpZXMoXG4gICAgaW5zdGFuY2UsXG4gICAgdHlwZSxcbiAgICBwcm9wcyxcbiAgICBwYXJlbnROYW1lc3BhY2UsXG4gICAgcm9vdENvbnRhaW5lckluc3RhbmNlLFxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaHlkcmF0ZVRleHRJbnN0YW5jZShcbiAgdGV4dEluc3RhbmNlOiBUZXh0SW5zdGFuY2UsXG4gIHRleHQ6IHN0cmluZyxcbiAgaW50ZXJuYWxJbnN0YW5jZUhhbmRsZTogT2JqZWN0LFxuKTogYm9vbGVhbiB7XG4gIHByZWNhY2hlRmliZXJOb2RlKGludGVybmFsSW5zdGFuY2VIYW5kbGUsIHRleHRJbnN0YW5jZSk7XG4gIHJldHVybiBkaWZmSHlkcmF0ZWRUZXh0KHRleHRJbnN0YW5jZSwgdGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXROZXh0SHlkcmF0YWJsZUluc3RhbmNlQWZ0ZXJTdXNwZW5zZUluc3RhbmNlKFxuICBzdXNwZW5zZUluc3RhbmNlOiBTdXNwZW5zZUluc3RhbmNlLFxuKTogbnVsbCB8IEh5ZHJhdGFibGVJbnN0YW5jZSB7XG4gIGxldCBub2RlID0gc3VzcGVuc2VJbnN0YW5jZS5uZXh0U2libGluZztcbiAgLy8gU2tpcCBwYXN0IGFsbCBub2RlcyB3aXRoaW4gdGhpcyBzdXNwZW5zZSBib3VuZGFyeS5cbiAgLy8gVGhlcmUgbWlnaHQgYmUgbmVzdGVkIG5vZGVzIHNvIHdlIG5lZWQgdG8ga2VlcCB0cmFjayBvZiBob3dcbiAgLy8gZGVlcCB3ZSBhcmUgYW5kIG9ubHkgYnJlYWsgb3V0IHdoZW4gd2UncmUgYmFjayBvbiB0b3AuXG4gIGxldCBkZXB0aCA9IDA7XG4gIHdoaWxlIChub2RlKSB7XG4gICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IENPTU1FTlRfTk9ERSkge1xuICAgICAgbGV0IGRhdGEgPSAoKG5vZGU6IGFueSkuZGF0YTogc3RyaW5nKTtcbiAgICAgIGlmIChkYXRhID09PSBTVVNQRU5TRV9FTkRfREFUQSkge1xuICAgICAgICBpZiAoZGVwdGggPT09IDApIHtcbiAgICAgICAgICByZXR1cm4gZ2V0TmV4dEh5ZHJhdGFibGVTaWJsaW5nKChub2RlOiBhbnkpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkZXB0aC0tO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGRhdGEgPT09IFNVU1BFTlNFX1NUQVJUX0RBVEEpIHtcbiAgICAgICAgZGVwdGgrKztcbiAgICAgIH1cbiAgICB9XG4gICAgbm9kZSA9IG5vZGUubmV4dFNpYmxpbmc7XG4gIH1cbiAgLy8gVE9ETzogV2Fybiwgd2UgZGlkbid0IGZpbmQgdGhlIGVuZCBjb21tZW50IGJvdW5kYXJ5LlxuICByZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpZE5vdE1hdGNoSHlkcmF0ZWRDb250YWluZXJUZXh0SW5zdGFuY2UoXG4gIHBhcmVudENvbnRhaW5lcjogQ29udGFpbmVyLFxuICB0ZXh0SW5zdGFuY2U6IFRleHRJbnN0YW5jZSxcbiAgdGV4dDogc3RyaW5nLFxuKSB7XG4gIGlmIChfX0RFVl9fKSB7XG4gICAgd2FybkZvclVubWF0Y2hlZFRleHQodGV4dEluc3RhbmNlLCB0ZXh0KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlkTm90TWF0Y2hIeWRyYXRlZFRleHRJbnN0YW5jZShcbiAgcGFyZW50VHlwZTogc3RyaW5nLFxuICBwYXJlbnRQcm9wczogUHJvcHMsXG4gIHBhcmVudEluc3RhbmNlOiBJbnN0YW5jZSxcbiAgdGV4dEluc3RhbmNlOiBUZXh0SW5zdGFuY2UsXG4gIHRleHQ6IHN0cmluZyxcbikge1xuICBpZiAoX19ERVZfXyAmJiBwYXJlbnRQcm9wc1tTVVBQUkVTU19IWURSQVRJT05fV0FSTklOR10gIT09IHRydWUpIHtcbiAgICB3YXJuRm9yVW5tYXRjaGVkVGV4dCh0ZXh0SW5zdGFuY2UsIHRleHQpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaWROb3RIeWRyYXRlQ29udGFpbmVySW5zdGFuY2UoXG4gIHBhcmVudENvbnRhaW5lcjogQ29udGFpbmVyLFxuICBpbnN0YW5jZTogSHlkcmF0YWJsZUluc3RhbmNlLFxuKSB7XG4gIGlmIChfX0RFVl9fKSB7XG4gICAgaWYgKGluc3RhbmNlLm5vZGVUeXBlID09PSBFTEVNRU5UX05PREUpIHtcbiAgICAgIHdhcm5Gb3JEZWxldGVkSHlkcmF0YWJsZUVsZW1lbnQocGFyZW50Q29udGFpbmVyLCAoaW5zdGFuY2U6IGFueSkpO1xuICAgIH0gZWxzZSBpZiAoaW5zdGFuY2Uubm9kZVR5cGUgPT09IENPTU1FTlRfTk9ERSkge1xuICAgICAgLy8gVE9ETzogd2FybkZvckRlbGV0ZWRIeWRyYXRhYmxlU3VzcGVuc2VCb3VuZGFyeVxuICAgIH0gZWxzZSB7XG4gICAgICB3YXJuRm9yRGVsZXRlZEh5ZHJhdGFibGVUZXh0KHBhcmVudENvbnRhaW5lciwgKGluc3RhbmNlOiBhbnkpKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpZE5vdEh5ZHJhdGVJbnN0YW5jZShcbiAgcGFyZW50VHlwZTogc3RyaW5nLFxuICBwYXJlbnRQcm9wczogUHJvcHMsXG4gIHBhcmVudEluc3RhbmNlOiBJbnN0YW5jZSxcbiAgaW5zdGFuY2U6IEh5ZHJhdGFibGVJbnN0YW5jZSxcbikge1xuICBpZiAoX19ERVZfXyAmJiBwYXJlbnRQcm9wc1tTVVBQUkVTU19IWURSQVRJT05fV0FSTklOR10gIT09IHRydWUpIHtcbiAgICBpZiAoaW5zdGFuY2Uubm9kZVR5cGUgPT09IEVMRU1FTlRfTk9ERSkge1xuICAgICAgd2FybkZvckRlbGV0ZWRIeWRyYXRhYmxlRWxlbWVudChwYXJlbnRJbnN0YW5jZSwgKGluc3RhbmNlOiBhbnkpKTtcbiAgICB9IGVsc2UgaWYgKGluc3RhbmNlLm5vZGVUeXBlID09PSBDT01NRU5UX05PREUpIHtcbiAgICAgIC8vIFRPRE86IHdhcm5Gb3JEZWxldGVkSHlkcmF0YWJsZVN1c3BlbnNlQm91bmRhcnlcbiAgICB9IGVsc2Uge1xuICAgICAgd2FybkZvckRlbGV0ZWRIeWRyYXRhYmxlVGV4dChwYXJlbnRJbnN0YW5jZSwgKGluc3RhbmNlOiBhbnkpKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpZE5vdEZpbmRIeWRyYXRhYmxlQ29udGFpbmVySW5zdGFuY2UoXG4gIHBhcmVudENvbnRhaW5lcjogQ29udGFpbmVyLFxuICB0eXBlOiBzdHJpbmcsXG4gIHByb3BzOiBQcm9wcyxcbikge1xuICBpZiAoX19ERVZfXykge1xuICAgIHdhcm5Gb3JJbnNlcnRlZEh5ZHJhdGVkRWxlbWVudChwYXJlbnRDb250YWluZXIsIHR5cGUsIHByb3BzKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlkTm90RmluZEh5ZHJhdGFibGVDb250YWluZXJUZXh0SW5zdGFuY2UoXG4gIHBhcmVudENvbnRhaW5lcjogQ29udGFpbmVyLFxuICB0ZXh0OiBzdHJpbmcsXG4pIHtcbiAgaWYgKF9fREVWX18pIHtcbiAgICB3YXJuRm9ySW5zZXJ0ZWRIeWRyYXRlZFRleHQocGFyZW50Q29udGFpbmVyLCB0ZXh0KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlkTm90RmluZEh5ZHJhdGFibGVDb250YWluZXJTdXNwZW5zZUluc3RhbmNlKFxuICBwYXJlbnRDb250YWluZXI6IENvbnRhaW5lcixcbikge1xuICBpZiAoX19ERVZfXykge1xuICAgIC8vIFRPRE86IHdhcm5Gb3JJbnNlcnRlZEh5ZHJhdGVkU3Vwc2Vuc2UocGFyZW50Q29udGFpbmVyKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlkTm90RmluZEh5ZHJhdGFibGVJbnN0YW5jZShcbiAgcGFyZW50VHlwZTogc3RyaW5nLFxuICBwYXJlbnRQcm9wczogUHJvcHMsXG4gIHBhcmVudEluc3RhbmNlOiBJbnN0YW5jZSxcbiAgdHlwZTogc3RyaW5nLFxuICBwcm9wczogUHJvcHMsXG4pIHtcbiAgaWYgKF9fREVWX18gJiYgcGFyZW50UHJvcHNbU1VQUFJFU1NfSFlEUkFUSU9OX1dBUk5JTkddICE9PSB0cnVlKSB7XG4gICAgd2FybkZvckluc2VydGVkSHlkcmF0ZWRFbGVtZW50KHBhcmVudEluc3RhbmNlLCB0eXBlLCBwcm9wcyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpZE5vdEZpbmRIeWRyYXRhYmxlVGV4dEluc3RhbmNlKFxuICBwYXJlbnRUeXBlOiBzdHJpbmcsXG4gIHBhcmVudFByb3BzOiBQcm9wcyxcbiAgcGFyZW50SW5zdGFuY2U6IEluc3RhbmNlLFxuICB0ZXh0OiBzdHJpbmcsXG4pIHtcbiAgaWYgKF9fREVWX18gJiYgcGFyZW50UHJvcHNbU1VQUFJFU1NfSFlEUkFUSU9OX1dBUk5JTkddICE9PSB0cnVlKSB7XG4gICAgd2FybkZvckluc2VydGVkSHlkcmF0ZWRUZXh0KHBhcmVudEluc3RhbmNlLCB0ZXh0KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlkTm90RmluZEh5ZHJhdGFibGVTdXNwZW5zZUluc3RhbmNlKFxuICBwYXJlbnRUeXBlOiBzdHJpbmcsXG4gIHBhcmVudFByb3BzOiBQcm9wcyxcbiAgcGFyZW50SW5zdGFuY2U6IEluc3RhbmNlLFxuKSB7XG4gIGlmIChfX0RFVl9fICYmIHBhcmVudFByb3BzW1NVUFBSRVNTX0hZRFJBVElPTl9XQVJOSU5HXSAhPT0gdHJ1ZSkge1xuICAgIC8vIFRPRE86IHdhcm5Gb3JJbnNlcnRlZEh5ZHJhdGVkU3VzcGVuc2UocGFyZW50SW5zdGFuY2UpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1kb20vc3JjL2NsaWVudC9SZWFjdERPTUhvc3RDb25maWcuanMiLCIvKipcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBmbG93XG4gKi9cblxuaW1wb3J0IGludmFyaWFudCBmcm9tICdzaGFyZWQvaW52YXJpYW50JztcblxuLy8gUmVuZGVyZXJzIHRoYXQgZG9uJ3Qgc3VwcG9ydCBwZXJzaXN0ZW5jZVxuLy8gY2FuIHJlLWV4cG9ydCBldmVyeXRoaW5nIGZyb20gdGhpcyBtb2R1bGUuXG5cbmZ1bmN0aW9uIHNoaW0oLi4uYXJnczogYW55KSB7XG4gIGludmFyaWFudChcbiAgICBmYWxzZSxcbiAgICAnVGhlIGN1cnJlbnQgcmVuZGVyZXIgZG9lcyBub3Qgc3VwcG9ydCBwZXJzaXN0ZW5jZS4gJyArXG4gICAgICAnVGhpcyBlcnJvciBpcyBsaWtlbHkgY2F1c2VkIGJ5IGEgYnVnIGluIFJlYWN0LiAnICtcbiAgICAgICdQbGVhc2UgZmlsZSBhbiBpc3N1ZS4nLFxuICApO1xufVxuXG4vLyBQZXJzaXN0ZW5jZSAod2hlbiB1bnN1cHBvcnRlZClcbmV4cG9ydCBjb25zdCBzdXBwb3J0c1BlcnNpc3RlbmNlID0gZmFsc2U7XG5leHBvcnQgY29uc3QgY2xvbmVJbnN0YW5jZSA9IHNoaW07XG5leHBvcnQgY29uc3QgY3JlYXRlQ29udGFpbmVyQ2hpbGRTZXQgPSBzaGltO1xuZXhwb3J0IGNvbnN0IGFwcGVuZENoaWxkVG9Db250YWluZXJDaGlsZFNldCA9IHNoaW07XG5leHBvcnQgY29uc3QgZmluYWxpemVDb250YWluZXJDaGlsZHJlbiA9IHNoaW07XG5leHBvcnQgY29uc3QgcmVwbGFjZUNvbnRhaW5lckNoaWxkcmVuID0gc2hpbTtcbmV4cG9ydCBjb25zdCBjbG9uZUhpZGRlbkluc3RhbmNlID0gc2hpbTtcbmV4cG9ydCBjb25zdCBjbG9uZVVuaGlkZGVuSW5zdGFuY2UgPSBzaGltO1xuZXhwb3J0IGNvbnN0IGNyZWF0ZUhpZGRlblRleHRJbnN0YW5jZSA9IHNoaW07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9zaGFyZWQvSG9zdENvbmZpZ1dpdGhOb1BlcnNpc3RlbmNlLmpzIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pbXBvcnQgd2FybmluZ1dpdGhvdXRTdGFjayBmcm9tICdzaGFyZWQvd2FybmluZ1dpdGhvdXRTdGFjayc7XG4vLyBUT0RPOiBkaXJlY3QgaW1wb3J0cyBsaWtlIHNvbWUtcGFja2FnZS9zcmMvKiBhcmUgYmFkLiBGaXggbWUuXG5pbXBvcnQge2dldEN1cnJlbnRGaWJlclN0YWNrSW5EZXZ9IGZyb20gJ3JlYWN0LXJlY29uY2lsZXIvc3JjL1JlYWN0Q3VycmVudEZpYmVyJztcblxubGV0IHZhbGlkYXRlRE9NTmVzdGluZyA9ICgpID0+IHt9O1xubGV0IHVwZGF0ZWRBbmNlc3RvckluZm8gPSAoKSA9PiB7fTtcblxuaWYgKF9fREVWX18pIHtcbiAgLy8gVGhpcyB2YWxpZGF0aW9uIGNvZGUgd2FzIHdyaXR0ZW4gYmFzZWQgb24gdGhlIEhUTUw1IHBhcnNpbmcgc3BlYzpcbiAgLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2Uvc3ludGF4Lmh0bWwjaGFzLWFuLWVsZW1lbnQtaW4tc2NvcGVcbiAgLy9cbiAgLy8gTm90ZTogdGhpcyBkb2VzIG5vdCBjYXRjaCBhbGwgaW52YWxpZCBuZXN0aW5nLCBub3IgZG9lcyBpdCB0cnkgdG8gKGFzIGl0J3NcbiAgLy8gbm90IGNsZWFyIHdoYXQgcHJhY3RpY2FsIGJlbmVmaXQgZG9pbmcgc28gcHJvdmlkZXMpOyBpbnN0ZWFkLCB3ZSB3YXJuIG9ubHlcbiAgLy8gZm9yIGNhc2VzIHdoZXJlIHRoZSBwYXJzZXIgd2lsbCBnaXZlIGEgcGFyc2UgdHJlZSBkaWZmZXJpbmcgZnJvbSB3aGF0IFJlYWN0XG4gIC8vIGludGVuZGVkLiBGb3IgZXhhbXBsZSwgPGI+PGRpdj48L2Rpdj48L2I+IGlzIGludmFsaWQgYnV0IHdlIGRvbid0IHdhcm5cbiAgLy8gYmVjYXVzZSBpdCBzdGlsbCBwYXJzZXMgY29ycmVjdGx5OyB3ZSBkbyB3YXJuIGZvciBvdGhlciBjYXNlcyBsaWtlIG5lc3RlZFxuICAvLyA8cD4gdGFncyB3aGVyZSB0aGUgYmVnaW5uaW5nIG9mIHRoZSBzZWNvbmQgZWxlbWVudCBpbXBsaWNpdGx5IGNsb3NlcyB0aGVcbiAgLy8gZmlyc3QsIGNhdXNpbmcgYSBjb25mdXNpbmcgbWVzcy5cblxuICAvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9zeW50YXguaHRtbCNzcGVjaWFsXG4gIGNvbnN0IHNwZWNpYWxUYWdzID0gW1xuICAgICdhZGRyZXNzJyxcbiAgICAnYXBwbGV0JyxcbiAgICAnYXJlYScsXG4gICAgJ2FydGljbGUnLFxuICAgICdhc2lkZScsXG4gICAgJ2Jhc2UnLFxuICAgICdiYXNlZm9udCcsXG4gICAgJ2Jnc291bmQnLFxuICAgICdibG9ja3F1b3RlJyxcbiAgICAnYm9keScsXG4gICAgJ2JyJyxcbiAgICAnYnV0dG9uJyxcbiAgICAnY2FwdGlvbicsXG4gICAgJ2NlbnRlcicsXG4gICAgJ2NvbCcsXG4gICAgJ2NvbGdyb3VwJyxcbiAgICAnZGQnLFxuICAgICdkZXRhaWxzJyxcbiAgICAnZGlyJyxcbiAgICAnZGl2JyxcbiAgICAnZGwnLFxuICAgICdkdCcsXG4gICAgJ2VtYmVkJyxcbiAgICAnZmllbGRzZXQnLFxuICAgICdmaWdjYXB0aW9uJyxcbiAgICAnZmlndXJlJyxcbiAgICAnZm9vdGVyJyxcbiAgICAnZm9ybScsXG4gICAgJ2ZyYW1lJyxcbiAgICAnZnJhbWVzZXQnLFxuICAgICdoMScsXG4gICAgJ2gyJyxcbiAgICAnaDMnLFxuICAgICdoNCcsXG4gICAgJ2g1JyxcbiAgICAnaDYnLFxuICAgICdoZWFkJyxcbiAgICAnaGVhZGVyJyxcbiAgICAnaGdyb3VwJyxcbiAgICAnaHInLFxuICAgICdodG1sJyxcbiAgICAnaWZyYW1lJyxcbiAgICAnaW1nJyxcbiAgICAnaW5wdXQnLFxuICAgICdpc2luZGV4JyxcbiAgICAnbGknLFxuICAgICdsaW5rJyxcbiAgICAnbGlzdGluZycsXG4gICAgJ21haW4nLFxuICAgICdtYXJxdWVlJyxcbiAgICAnbWVudScsXG4gICAgJ21lbnVpdGVtJyxcbiAgICAnbWV0YScsXG4gICAgJ25hdicsXG4gICAgJ25vZW1iZWQnLFxuICAgICdub2ZyYW1lcycsXG4gICAgJ25vc2NyaXB0JyxcbiAgICAnb2JqZWN0JyxcbiAgICAnb2wnLFxuICAgICdwJyxcbiAgICAncGFyYW0nLFxuICAgICdwbGFpbnRleHQnLFxuICAgICdwcmUnLFxuICAgICdzY3JpcHQnLFxuICAgICdzZWN0aW9uJyxcbiAgICAnc2VsZWN0JyxcbiAgICAnc291cmNlJyxcbiAgICAnc3R5bGUnLFxuICAgICdzdW1tYXJ5JyxcbiAgICAndGFibGUnLFxuICAgICd0Ym9keScsXG4gICAgJ3RkJyxcbiAgICAndGVtcGxhdGUnLFxuICAgICd0ZXh0YXJlYScsXG4gICAgJ3Rmb290JyxcbiAgICAndGgnLFxuICAgICd0aGVhZCcsXG4gICAgJ3RpdGxlJyxcbiAgICAndHInLFxuICAgICd0cmFjaycsXG4gICAgJ3VsJyxcbiAgICAnd2JyJyxcbiAgICAneG1wJyxcbiAgXTtcblxuICAvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9zeW50YXguaHRtbCNoYXMtYW4tZWxlbWVudC1pbi1zY29wZVxuICBjb25zdCBpblNjb3BlVGFncyA9IFtcbiAgICAnYXBwbGV0JyxcbiAgICAnY2FwdGlvbicsXG4gICAgJ2h0bWwnLFxuICAgICd0YWJsZScsXG4gICAgJ3RkJyxcbiAgICAndGgnLFxuICAgICdtYXJxdWVlJyxcbiAgICAnb2JqZWN0JyxcbiAgICAndGVtcGxhdGUnLFxuXG4gICAgLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2Uvc3ludGF4Lmh0bWwjaHRtbC1pbnRlZ3JhdGlvbi1wb2ludFxuICAgIC8vIFRPRE86IERpc3Rpbmd1aXNoIGJ5IG5hbWVzcGFjZSBoZXJlIC0tIGZvciA8dGl0bGU+LCBpbmNsdWRpbmcgaXQgaGVyZVxuICAgIC8vIGVycnMgb24gdGhlIHNpZGUgb2YgZmV3ZXIgd2FybmluZ3NcbiAgICAnZm9yZWlnbk9iamVjdCcsXG4gICAgJ2Rlc2MnLFxuICAgICd0aXRsZScsXG4gIF07XG5cbiAgLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2Uvc3ludGF4Lmh0bWwjaGFzLWFuLWVsZW1lbnQtaW4tYnV0dG9uLXNjb3BlXG4gIGNvbnN0IGJ1dHRvblNjb3BlVGFncyA9IGluU2NvcGVUYWdzLmNvbmNhdChbJ2J1dHRvbiddKTtcblxuICAvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9zeW50YXguaHRtbCNnZW5lcmF0ZS1pbXBsaWVkLWVuZC10YWdzXG4gIGNvbnN0IGltcGxpZWRFbmRUYWdzID0gW1xuICAgICdkZCcsXG4gICAgJ2R0JyxcbiAgICAnbGknLFxuICAgICdvcHRpb24nLFxuICAgICdvcHRncm91cCcsXG4gICAgJ3AnLFxuICAgICdycCcsXG4gICAgJ3J0JyxcbiAgXTtcblxuICBjb25zdCBlbXB0eUFuY2VzdG9ySW5mbyA9IHtcbiAgICBjdXJyZW50OiBudWxsLFxuXG4gICAgZm9ybVRhZzogbnVsbCxcbiAgICBhVGFnSW5TY29wZTogbnVsbCxcbiAgICBidXR0b25UYWdJblNjb3BlOiBudWxsLFxuICAgIG5vYnJUYWdJblNjb3BlOiBudWxsLFxuICAgIHBUYWdJbkJ1dHRvblNjb3BlOiBudWxsLFxuXG4gICAgbGlzdEl0ZW1UYWdBdXRvY2xvc2luZzogbnVsbCxcbiAgICBkbEl0ZW1UYWdBdXRvY2xvc2luZzogbnVsbCxcbiAgfTtcblxuICB1cGRhdGVkQW5jZXN0b3JJbmZvID0gZnVuY3Rpb24ob2xkSW5mbywgdGFnKSB7XG4gICAgbGV0IGFuY2VzdG9ySW5mbyA9IHsuLi4ob2xkSW5mbyB8fCBlbXB0eUFuY2VzdG9ySW5mbyl9O1xuICAgIGxldCBpbmZvID0ge3RhZ307XG5cbiAgICBpZiAoaW5TY29wZVRhZ3MuaW5kZXhPZih0YWcpICE9PSAtMSkge1xuICAgICAgYW5jZXN0b3JJbmZvLmFUYWdJblNjb3BlID0gbnVsbDtcbiAgICAgIGFuY2VzdG9ySW5mby5idXR0b25UYWdJblNjb3BlID0gbnVsbDtcbiAgICAgIGFuY2VzdG9ySW5mby5ub2JyVGFnSW5TY29wZSA9IG51bGw7XG4gICAgfVxuICAgIGlmIChidXR0b25TY29wZVRhZ3MuaW5kZXhPZih0YWcpICE9PSAtMSkge1xuICAgICAgYW5jZXN0b3JJbmZvLnBUYWdJbkJ1dHRvblNjb3BlID0gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBTZWUgcnVsZXMgZm9yICdsaScsICdkZCcsICdkdCcgc3RhcnQgdGFncyBpblxuICAgIC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3N5bnRheC5odG1sI3BhcnNpbmctbWFpbi1pbmJvZHlcbiAgICBpZiAoXG4gICAgICBzcGVjaWFsVGFncy5pbmRleE9mKHRhZykgIT09IC0xICYmXG4gICAgICB0YWcgIT09ICdhZGRyZXNzJyAmJlxuICAgICAgdGFnICE9PSAnZGl2JyAmJlxuICAgICAgdGFnICE9PSAncCdcbiAgICApIHtcbiAgICAgIGFuY2VzdG9ySW5mby5saXN0SXRlbVRhZ0F1dG9jbG9zaW5nID0gbnVsbDtcbiAgICAgIGFuY2VzdG9ySW5mby5kbEl0ZW1UYWdBdXRvY2xvc2luZyA9IG51bGw7XG4gICAgfVxuXG4gICAgYW5jZXN0b3JJbmZvLmN1cnJlbnQgPSBpbmZvO1xuXG4gICAgaWYgKHRhZyA9PT0gJ2Zvcm0nKSB7XG4gICAgICBhbmNlc3RvckluZm8uZm9ybVRhZyA9IGluZm87XG4gICAgfVxuICAgIGlmICh0YWcgPT09ICdhJykge1xuICAgICAgYW5jZXN0b3JJbmZvLmFUYWdJblNjb3BlID0gaW5mbztcbiAgICB9XG4gICAgaWYgKHRhZyA9PT0gJ2J1dHRvbicpIHtcbiAgICAgIGFuY2VzdG9ySW5mby5idXR0b25UYWdJblNjb3BlID0gaW5mbztcbiAgICB9XG4gICAgaWYgKHRhZyA9PT0gJ25vYnInKSB7XG4gICAgICBhbmNlc3RvckluZm8ubm9iclRhZ0luU2NvcGUgPSBpbmZvO1xuICAgIH1cbiAgICBpZiAodGFnID09PSAncCcpIHtcbiAgICAgIGFuY2VzdG9ySW5mby5wVGFnSW5CdXR0b25TY29wZSA9IGluZm87XG4gICAgfVxuICAgIGlmICh0YWcgPT09ICdsaScpIHtcbiAgICAgIGFuY2VzdG9ySW5mby5saXN0SXRlbVRhZ0F1dG9jbG9zaW5nID0gaW5mbztcbiAgICB9XG4gICAgaWYgKHRhZyA9PT0gJ2RkJyB8fCB0YWcgPT09ICdkdCcpIHtcbiAgICAgIGFuY2VzdG9ySW5mby5kbEl0ZW1UYWdBdXRvY2xvc2luZyA9IGluZm87XG4gICAgfVxuXG4gICAgcmV0dXJuIGFuY2VzdG9ySW5mbztcbiAgfTtcblxuICAvKipcbiAgICogUmV0dXJucyB3aGV0aGVyXG4gICAqL1xuICBjb25zdCBpc1RhZ1ZhbGlkV2l0aFBhcmVudCA9IGZ1bmN0aW9uKHRhZywgcGFyZW50VGFnKSB7XG4gICAgLy8gRmlyc3QsIGxldCdzIGNoZWNrIGlmIHdlJ3JlIGluIGFuIHVudXN1YWwgcGFyc2luZyBtb2RlLi4uXG4gICAgc3dpdGNoIChwYXJlbnRUYWcpIHtcbiAgICAgIC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3N5bnRheC5odG1sI3BhcnNpbmctbWFpbi1pbnNlbGVjdFxuICAgICAgY2FzZSAnc2VsZWN0JzpcbiAgICAgICAgcmV0dXJuIHRhZyA9PT0gJ29wdGlvbicgfHwgdGFnID09PSAnb3B0Z3JvdXAnIHx8IHRhZyA9PT0gJyN0ZXh0JztcbiAgICAgIGNhc2UgJ29wdGdyb3VwJzpcbiAgICAgICAgcmV0dXJuIHRhZyA9PT0gJ29wdGlvbicgfHwgdGFnID09PSAnI3RleHQnO1xuICAgICAgLy8gU3RyaWN0bHkgc3BlYWtpbmcsIHNlZWluZyBhbiA8b3B0aW9uPiBkb2Vzbid0IG1lYW4gd2UncmUgaW4gYSA8c2VsZWN0PlxuICAgICAgLy8gYnV0XG4gICAgICBjYXNlICdvcHRpb24nOlxuICAgICAgICByZXR1cm4gdGFnID09PSAnI3RleHQnO1xuICAgICAgLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2Uvc3ludGF4Lmh0bWwjcGFyc2luZy1tYWluLWludGRcbiAgICAgIC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3N5bnRheC5odG1sI3BhcnNpbmctbWFpbi1pbmNhcHRpb25cbiAgICAgIC8vIE5vIHNwZWNpYWwgYmVoYXZpb3Igc2luY2UgdGhlc2UgcnVsZXMgZmFsbCBiYWNrIHRvIFwiaW4gYm9keVwiIG1vZGUgZm9yXG4gICAgICAvLyBhbGwgZXhjZXB0IHNwZWNpYWwgdGFibGUgbm9kZXMgd2hpY2ggY2F1c2UgYmFkIHBhcnNpbmcgYmVoYXZpb3IgYW55d2F5LlxuXG4gICAgICAvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9zeW50YXguaHRtbCNwYXJzaW5nLW1haW4taW50clxuICAgICAgY2FzZSAndHInOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIHRhZyA9PT0gJ3RoJyB8fFxuICAgICAgICAgIHRhZyA9PT0gJ3RkJyB8fFxuICAgICAgICAgIHRhZyA9PT0gJ3N0eWxlJyB8fFxuICAgICAgICAgIHRhZyA9PT0gJ3NjcmlwdCcgfHxcbiAgICAgICAgICB0YWcgPT09ICd0ZW1wbGF0ZSdcbiAgICAgICAgKTtcbiAgICAgIC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3N5bnRheC5odG1sI3BhcnNpbmctbWFpbi1pbnRib2R5XG4gICAgICBjYXNlICd0Ym9keSc6XG4gICAgICBjYXNlICd0aGVhZCc6XG4gICAgICBjYXNlICd0Zm9vdCc6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgdGFnID09PSAndHInIHx8XG4gICAgICAgICAgdGFnID09PSAnc3R5bGUnIHx8XG4gICAgICAgICAgdGFnID09PSAnc2NyaXB0JyB8fFxuICAgICAgICAgIHRhZyA9PT0gJ3RlbXBsYXRlJ1xuICAgICAgICApO1xuICAgICAgLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2Uvc3ludGF4Lmh0bWwjcGFyc2luZy1tYWluLWluY29sZ3JvdXBcbiAgICAgIGNhc2UgJ2NvbGdyb3VwJzpcbiAgICAgICAgcmV0dXJuIHRhZyA9PT0gJ2NvbCcgfHwgdGFnID09PSAndGVtcGxhdGUnO1xuICAgICAgLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2Uvc3ludGF4Lmh0bWwjcGFyc2luZy1tYWluLWludGFibGVcbiAgICAgIGNhc2UgJ3RhYmxlJzpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICB0YWcgPT09ICdjYXB0aW9uJyB8fFxuICAgICAgICAgIHRhZyA9PT0gJ2NvbGdyb3VwJyB8fFxuICAgICAgICAgIHRhZyA9PT0gJ3Rib2R5JyB8fFxuICAgICAgICAgIHRhZyA9PT0gJ3Rmb290JyB8fFxuICAgICAgICAgIHRhZyA9PT0gJ3RoZWFkJyB8fFxuICAgICAgICAgIHRhZyA9PT0gJ3N0eWxlJyB8fFxuICAgICAgICAgIHRhZyA9PT0gJ3NjcmlwdCcgfHxcbiAgICAgICAgICB0YWcgPT09ICd0ZW1wbGF0ZSdcbiAgICAgICAgKTtcbiAgICAgIC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3N5bnRheC5odG1sI3BhcnNpbmctbWFpbi1pbmhlYWRcbiAgICAgIGNhc2UgJ2hlYWQnOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIHRhZyA9PT0gJ2Jhc2UnIHx8XG4gICAgICAgICAgdGFnID09PSAnYmFzZWZvbnQnIHx8XG4gICAgICAgICAgdGFnID09PSAnYmdzb3VuZCcgfHxcbiAgICAgICAgICB0YWcgPT09ICdsaW5rJyB8fFxuICAgICAgICAgIHRhZyA9PT0gJ21ldGEnIHx8XG4gICAgICAgICAgdGFnID09PSAndGl0bGUnIHx8XG4gICAgICAgICAgdGFnID09PSAnbm9zY3JpcHQnIHx8XG4gICAgICAgICAgdGFnID09PSAnbm9mcmFtZXMnIHx8XG4gICAgICAgICAgdGFnID09PSAnc3R5bGUnIHx8XG4gICAgICAgICAgdGFnID09PSAnc2NyaXB0JyB8fFxuICAgICAgICAgIHRhZyA9PT0gJ3RlbXBsYXRlJ1xuICAgICAgICApO1xuICAgICAgLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2Uvc2VtYW50aWNzLmh0bWwjdGhlLWh0bWwtZWxlbWVudFxuICAgICAgY2FzZSAnaHRtbCc6XG4gICAgICAgIHJldHVybiB0YWcgPT09ICdoZWFkJyB8fCB0YWcgPT09ICdib2R5JztcbiAgICAgIGNhc2UgJyNkb2N1bWVudCc6XG4gICAgICAgIHJldHVybiB0YWcgPT09ICdodG1sJztcbiAgICB9XG5cbiAgICAvLyBQcm9iYWJseSBpbiB0aGUgXCJpbiBib2R5XCIgcGFyc2luZyBtb2RlLCBzbyB3ZSBvdXRsYXcgb25seSB0YWcgY29tYm9zXG4gICAgLy8gd2hlcmUgdGhlIHBhcnNpbmcgcnVsZXMgY2F1c2UgaW1wbGljaXQgb3BlbnMgb3IgY2xvc2VzIHRvIGJlIGFkZGVkLlxuICAgIC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3N5bnRheC5odG1sI3BhcnNpbmctbWFpbi1pbmJvZHlcbiAgICBzd2l0Y2ggKHRhZykge1xuICAgICAgY2FzZSAnaDEnOlxuICAgICAgY2FzZSAnaDInOlxuICAgICAgY2FzZSAnaDMnOlxuICAgICAgY2FzZSAnaDQnOlxuICAgICAgY2FzZSAnaDUnOlxuICAgICAgY2FzZSAnaDYnOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIHBhcmVudFRhZyAhPT0gJ2gxJyAmJlxuICAgICAgICAgIHBhcmVudFRhZyAhPT0gJ2gyJyAmJlxuICAgICAgICAgIHBhcmVudFRhZyAhPT0gJ2gzJyAmJlxuICAgICAgICAgIHBhcmVudFRhZyAhPT0gJ2g0JyAmJlxuICAgICAgICAgIHBhcmVudFRhZyAhPT0gJ2g1JyAmJlxuICAgICAgICAgIHBhcmVudFRhZyAhPT0gJ2g2J1xuICAgICAgICApO1xuXG4gICAgICBjYXNlICdycCc6XG4gICAgICBjYXNlICdydCc6XG4gICAgICAgIHJldHVybiBpbXBsaWVkRW5kVGFncy5pbmRleE9mKHBhcmVudFRhZykgPT09IC0xO1xuXG4gICAgICBjYXNlICdib2R5JzpcbiAgICAgIGNhc2UgJ2NhcHRpb24nOlxuICAgICAgY2FzZSAnY29sJzpcbiAgICAgIGNhc2UgJ2NvbGdyb3VwJzpcbiAgICAgIGNhc2UgJ2ZyYW1lJzpcbiAgICAgIGNhc2UgJ2hlYWQnOlxuICAgICAgY2FzZSAnaHRtbCc6XG4gICAgICBjYXNlICd0Ym9keSc6XG4gICAgICBjYXNlICd0ZCc6XG4gICAgICBjYXNlICd0Zm9vdCc6XG4gICAgICBjYXNlICd0aCc6XG4gICAgICBjYXNlICd0aGVhZCc6XG4gICAgICBjYXNlICd0cic6XG4gICAgICAgIC8vIFRoZXNlIHRhZ3MgYXJlIG9ubHkgdmFsaWQgd2l0aCBhIGZldyBwYXJlbnRzIHRoYXQgaGF2ZSBzcGVjaWFsIGNoaWxkXG4gICAgICAgIC8vIHBhcnNpbmcgcnVsZXMgLS0gaWYgd2UncmUgZG93biBoZXJlLCB0aGVuIG5vbmUgb2YgdGhvc2UgbWF0Y2hlZCBhbmRcbiAgICAgICAgLy8gc28gd2UgYWxsb3cgaXQgb25seSBpZiB3ZSBkb24ndCBrbm93IHdoYXQgdGhlIHBhcmVudCBpcywgYXMgYWxsIG90aGVyXG4gICAgICAgIC8vIGNhc2VzIGFyZSBpbnZhbGlkLlxuICAgICAgICByZXR1cm4gcGFyZW50VGFnID09IG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJldHVybnMgd2hldGhlclxuICAgKi9cbiAgY29uc3QgZmluZEludmFsaWRBbmNlc3RvckZvclRhZyA9IGZ1bmN0aW9uKHRhZywgYW5jZXN0b3JJbmZvKSB7XG4gICAgc3dpdGNoICh0YWcpIHtcbiAgICAgIGNhc2UgJ2FkZHJlc3MnOlxuICAgICAgY2FzZSAnYXJ0aWNsZSc6XG4gICAgICBjYXNlICdhc2lkZSc6XG4gICAgICBjYXNlICdibG9ja3F1b3RlJzpcbiAgICAgIGNhc2UgJ2NlbnRlcic6XG4gICAgICBjYXNlICdkZXRhaWxzJzpcbiAgICAgIGNhc2UgJ2RpYWxvZyc6XG4gICAgICBjYXNlICdkaXInOlxuICAgICAgY2FzZSAnZGl2JzpcbiAgICAgIGNhc2UgJ2RsJzpcbiAgICAgIGNhc2UgJ2ZpZWxkc2V0JzpcbiAgICAgIGNhc2UgJ2ZpZ2NhcHRpb24nOlxuICAgICAgY2FzZSAnZmlndXJlJzpcbiAgICAgIGNhc2UgJ2Zvb3Rlcic6XG4gICAgICBjYXNlICdoZWFkZXInOlxuICAgICAgY2FzZSAnaGdyb3VwJzpcbiAgICAgIGNhc2UgJ21haW4nOlxuICAgICAgY2FzZSAnbWVudSc6XG4gICAgICBjYXNlICduYXYnOlxuICAgICAgY2FzZSAnb2wnOlxuICAgICAgY2FzZSAncCc6XG4gICAgICBjYXNlICdzZWN0aW9uJzpcbiAgICAgIGNhc2UgJ3N1bW1hcnknOlxuICAgICAgY2FzZSAndWwnOlxuICAgICAgY2FzZSAncHJlJzpcbiAgICAgIGNhc2UgJ2xpc3RpbmcnOlxuICAgICAgY2FzZSAndGFibGUnOlxuICAgICAgY2FzZSAnaHInOlxuICAgICAgY2FzZSAneG1wJzpcbiAgICAgIGNhc2UgJ2gxJzpcbiAgICAgIGNhc2UgJ2gyJzpcbiAgICAgIGNhc2UgJ2gzJzpcbiAgICAgIGNhc2UgJ2g0JzpcbiAgICAgIGNhc2UgJ2g1JzpcbiAgICAgIGNhc2UgJ2g2JzpcbiAgICAgICAgcmV0dXJuIGFuY2VzdG9ySW5mby5wVGFnSW5CdXR0b25TY29wZTtcblxuICAgICAgY2FzZSAnZm9ybSc6XG4gICAgICAgIHJldHVybiBhbmNlc3RvckluZm8uZm9ybVRhZyB8fCBhbmNlc3RvckluZm8ucFRhZ0luQnV0dG9uU2NvcGU7XG5cbiAgICAgIGNhc2UgJ2xpJzpcbiAgICAgICAgcmV0dXJuIGFuY2VzdG9ySW5mby5saXN0SXRlbVRhZ0F1dG9jbG9zaW5nO1xuXG4gICAgICBjYXNlICdkZCc6XG4gICAgICBjYXNlICdkdCc6XG4gICAgICAgIHJldHVybiBhbmNlc3RvckluZm8uZGxJdGVtVGFnQXV0b2Nsb3Npbmc7XG5cbiAgICAgIGNhc2UgJ2J1dHRvbic6XG4gICAgICAgIHJldHVybiBhbmNlc3RvckluZm8uYnV0dG9uVGFnSW5TY29wZTtcblxuICAgICAgY2FzZSAnYSc6XG4gICAgICAgIC8vIFNwZWMgc2F5cyBzb21ldGhpbmcgYWJvdXQgc3RvcmluZyBhIGxpc3Qgb2YgbWFya2VycywgYnV0IGl0IHNvdW5kc1xuICAgICAgICAvLyBlcXVpdmFsZW50IHRvIHRoaXMgY2hlY2suXG4gICAgICAgIHJldHVybiBhbmNlc3RvckluZm8uYVRhZ0luU2NvcGU7XG5cbiAgICAgIGNhc2UgJ25vYnInOlxuICAgICAgICByZXR1cm4gYW5jZXN0b3JJbmZvLm5vYnJUYWdJblNjb3BlO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9O1xuXG4gIGNvbnN0IGRpZFdhcm4gPSB7fTtcblxuICB2YWxpZGF0ZURPTU5lc3RpbmcgPSBmdW5jdGlvbihjaGlsZFRhZywgY2hpbGRUZXh0LCBhbmNlc3RvckluZm8pIHtcbiAgICBhbmNlc3RvckluZm8gPSBhbmNlc3RvckluZm8gfHwgZW1wdHlBbmNlc3RvckluZm87XG4gICAgY29uc3QgcGFyZW50SW5mbyA9IGFuY2VzdG9ySW5mby5jdXJyZW50O1xuICAgIGNvbnN0IHBhcmVudFRhZyA9IHBhcmVudEluZm8gJiYgcGFyZW50SW5mby50YWc7XG5cbiAgICBpZiAoY2hpbGRUZXh0ICE9IG51bGwpIHtcbiAgICAgIHdhcm5pbmdXaXRob3V0U3RhY2soXG4gICAgICAgIGNoaWxkVGFnID09IG51bGwsXG4gICAgICAgICd2YWxpZGF0ZURPTU5lc3Rpbmc6IHdoZW4gY2hpbGRUZXh0IGlzIHBhc3NlZCwgY2hpbGRUYWcgc2hvdWxkIGJlIG51bGwnLFxuICAgICAgKTtcbiAgICAgIGNoaWxkVGFnID0gJyN0ZXh0JztcbiAgICB9XG5cbiAgICBjb25zdCBpbnZhbGlkUGFyZW50ID0gaXNUYWdWYWxpZFdpdGhQYXJlbnQoY2hpbGRUYWcsIHBhcmVudFRhZylcbiAgICAgID8gbnVsbFxuICAgICAgOiBwYXJlbnRJbmZvO1xuICAgIGNvbnN0IGludmFsaWRBbmNlc3RvciA9IGludmFsaWRQYXJlbnRcbiAgICAgID8gbnVsbFxuICAgICAgOiBmaW5kSW52YWxpZEFuY2VzdG9yRm9yVGFnKGNoaWxkVGFnLCBhbmNlc3RvckluZm8pO1xuICAgIGNvbnN0IGludmFsaWRQYXJlbnRPckFuY2VzdG9yID0gaW52YWxpZFBhcmVudCB8fCBpbnZhbGlkQW5jZXN0b3I7XG4gICAgaWYgKCFpbnZhbGlkUGFyZW50T3JBbmNlc3Rvcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGFuY2VzdG9yVGFnID0gaW52YWxpZFBhcmVudE9yQW5jZXN0b3IudGFnO1xuICAgIGNvbnN0IGFkZGVuZHVtID0gZ2V0Q3VycmVudEZpYmVyU3RhY2tJbkRldigpO1xuXG4gICAgY29uc3Qgd2FybktleSA9XG4gICAgICAhIWludmFsaWRQYXJlbnQgKyAnfCcgKyBjaGlsZFRhZyArICd8JyArIGFuY2VzdG9yVGFnICsgJ3wnICsgYWRkZW5kdW07XG4gICAgaWYgKGRpZFdhcm5bd2FybktleV0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZGlkV2Fyblt3YXJuS2V5XSA9IHRydWU7XG5cbiAgICBsZXQgdGFnRGlzcGxheU5hbWUgPSBjaGlsZFRhZztcbiAgICBsZXQgd2hpdGVzcGFjZUluZm8gPSAnJztcbiAgICBpZiAoY2hpbGRUYWcgPT09ICcjdGV4dCcpIHtcbiAgICAgIGlmICgvXFxTLy50ZXN0KGNoaWxkVGV4dCkpIHtcbiAgICAgICAgdGFnRGlzcGxheU5hbWUgPSAnVGV4dCBub2Rlcyc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0YWdEaXNwbGF5TmFtZSA9ICdXaGl0ZXNwYWNlIHRleHQgbm9kZXMnO1xuICAgICAgICB3aGl0ZXNwYWNlSW5mbyA9XG4gICAgICAgICAgXCIgTWFrZSBzdXJlIHlvdSBkb24ndCBoYXZlIGFueSBleHRyYSB3aGl0ZXNwYWNlIGJldHdlZW4gdGFncyBvbiBcIiArXG4gICAgICAgICAgJ2VhY2ggbGluZSBvZiB5b3VyIHNvdXJjZSBjb2RlLic7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRhZ0Rpc3BsYXlOYW1lID0gJzwnICsgY2hpbGRUYWcgKyAnPic7XG4gICAgfVxuXG4gICAgaWYgKGludmFsaWRQYXJlbnQpIHtcbiAgICAgIGxldCBpbmZvID0gJyc7XG4gICAgICBpZiAoYW5jZXN0b3JUYWcgPT09ICd0YWJsZScgJiYgY2hpbGRUYWcgPT09ICd0cicpIHtcbiAgICAgICAgaW5mbyArPVxuICAgICAgICAgICcgQWRkIGEgPHRib2R5PiB0byB5b3VyIGNvZGUgdG8gbWF0Y2ggdGhlIERPTSB0cmVlIGdlbmVyYXRlZCBieSAnICtcbiAgICAgICAgICAndGhlIGJyb3dzZXIuJztcbiAgICAgIH1cbiAgICAgIHdhcm5pbmdXaXRob3V0U3RhY2soXG4gICAgICAgIGZhbHNlLFxuICAgICAgICAndmFsaWRhdGVET01OZXN0aW5nKC4uLik6ICVzIGNhbm5vdCBhcHBlYXIgYXMgYSBjaGlsZCBvZiA8JXM+LiVzJXMlcycsXG4gICAgICAgIHRhZ0Rpc3BsYXlOYW1lLFxuICAgICAgICBhbmNlc3RvclRhZyxcbiAgICAgICAgd2hpdGVzcGFjZUluZm8sXG4gICAgICAgIGluZm8sXG4gICAgICAgIGFkZGVuZHVtLFxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgd2FybmluZ1dpdGhvdXRTdGFjayhcbiAgICAgICAgZmFsc2UsXG4gICAgICAgICd2YWxpZGF0ZURPTU5lc3RpbmcoLi4uKTogJXMgY2Fubm90IGFwcGVhciBhcyBhIGRlc2NlbmRhbnQgb2YgJyArXG4gICAgICAgICAgJzwlcz4uJXMnLFxuICAgICAgICB0YWdEaXNwbGF5TmFtZSxcbiAgICAgICAgYW5jZXN0b3JUYWcsXG4gICAgICAgIGFkZGVuZHVtLFxuICAgICAgKTtcbiAgICB9XG4gIH07XG59XG5cbmV4cG9ydCB7dXBkYXRlZEFuY2VzdG9ySW5mbywgdmFsaWRhdGVET01OZXN0aW5nfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWRvbS9zcmMvY2xpZW50L3ZhbGlkYXRlRE9NTmVzdGluZy5qcyJdLCJzb3VyY2VSb290IjoiIn0=
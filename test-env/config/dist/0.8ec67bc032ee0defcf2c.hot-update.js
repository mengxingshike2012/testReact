webpackHotUpdate(0,{

/***/ 42:
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
                                                                                                                                                                                                                                                                               */

exports.createElement = createElement;
exports.createFactory = createFactory;
exports.cloneAndReplaceKey = cloneAndReplaceKey;
exports.cloneElement = cloneElement;
exports.isValidElement = isValidElement;

var _invariant = __webpack_require__(0);

var _invariant2 = _interopRequireDefault(_invariant);

var _warningWithoutStack = __webpack_require__(1);

var _warningWithoutStack2 = _interopRequireDefault(_warningWithoutStack);

var _ReactSymbols = __webpack_require__(6);

var _ReactCurrentOwner = __webpack_require__(43);

var _ReactCurrentOwner2 = _interopRequireDefault(_ReactCurrentOwner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hasOwnProperty = Object.prototype.hasOwnProperty;

var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};

var specialPropKeyWarningShown = void 0,
    specialPropRefWarningShown = void 0;

function hasValidRef(config) {
  if (true) {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }
  return config.ref !== undefined;
}

function hasValidKey(config) {
  if (true) {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }
  return config.key !== undefined;
}

function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function warnAboutAccessingKey() {
    if (!specialPropKeyWarningShown) {
      specialPropKeyWarningShown = true;
      (0, _warningWithoutStack2.default)(false, '%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
    }
  };
  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}

function defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function warnAboutAccessingRef() {
    if (!specialPropRefWarningShown) {
      specialPropRefWarningShown = true;
      (0, _warningWithoutStack2.default)(false, '%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
    }
  };
  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}

/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, no instanceof check
 * will work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} key
 * @param {string|object} ref
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @param {*} owner
 * @param {*} props
 * @internal
 */
var ReactElement = function ReactElement(type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: _ReactSymbols.REACT_ELEMENT_TYPE,

    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,

    // Record the component responsible for creating this element.
    _owner: owner
  };

  if (true) {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {};

    // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.
    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    });
    // self and source are DEV only properties.
    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    });
    // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.
    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });
    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};

/**
 * Create and return a new ReactElement of the given type.
 * See https://reactjs.org/docs/react-api.html#createelement
 */
function createElement(type, config, children) {
  var propName = void 0;

  // Reserved names are extracted
  var props = {};

  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;
    }
    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source;
    // Remaining properties are added to a new props object
    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  }

  // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.
  var childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);
    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    if (true) {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }
    props.children = childArray;
  }

  // Resolve default props
  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;
    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }
  if (true) {
    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }
      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }
  }
  return ReactElement(type, key, ref, self, source, _ReactCurrentOwner2.default.current, props);
}

/**
 * Return a function that produces ReactElements of a given type.
 * See https://reactjs.org/docs/react-api.html#createfactory
 */
function createFactory(type) {
  var factory = createElement.bind(null, type);
  // Expose the type on the factory and the prototype so that it can be
  // easily accessed on elements. E.g. `<Foo />.type === Foo`.
  // This should not be named `constructor` since this may not be the function
  // that created the element, and it may not even be a constructor.
  // Legacy hook: remove it
  factory.type = type;
  return factory;
}

function cloneAndReplaceKey(oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);

  return newElement;
}

/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://reactjs.org/docs/react-api.html#cloneelement
 */
function cloneElement(element, config, children) {
  (0, _invariant2.default)(!(element === null || element === undefined), 'React.cloneElement(...): The argument must be a React element, but you passed %s.', element);

  var propName = void 0;

  // Original props are copied
  var props = Object.assign({}, element.props);

  // Reserved names are extracted
  var key = element.key;
  var ref = element.ref;
  // Self is preserved since the owner is preserved.
  var self = element._self;
  // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.
  var source = element._source;

  // Owner will be preserved, unless ref is overridden
  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = _ReactCurrentOwner2.default.current;
    }
    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    // Remaining properties override existing props
    var defaultProps = void 0;
    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }
    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  }

  // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.
  var childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);
    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
}

/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */
function isValidElement(object) {
  return (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object' && object !== null && object.$$typeof === _ReactSymbols.REACT_ELEMENT_TYPE;
}

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC9zcmMvUmVhY3RFbGVtZW50LmpzIl0sIm5hbWVzIjpbImNyZWF0ZUVsZW1lbnQiLCJjcmVhdGVGYWN0b3J5IiwiY2xvbmVBbmRSZXBsYWNlS2V5IiwiY2xvbmVFbGVtZW50IiwiaXNWYWxpZEVsZW1lbnQiLCJoYXNPd25Qcm9wZXJ0eSIsIk9iamVjdCIsInByb3RvdHlwZSIsIlJFU0VSVkVEX1BST1BTIiwia2V5IiwicmVmIiwiX19zZWxmIiwiX19zb3VyY2UiLCJzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93biIsInNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duIiwiaGFzVmFsaWRSZWYiLCJjb25maWciLCJfX0RFVl9fIiwiY2FsbCIsImdldHRlciIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImdldCIsImlzUmVhY3RXYXJuaW5nIiwidW5kZWZpbmVkIiwiaGFzVmFsaWRLZXkiLCJkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlciIsInByb3BzIiwiZGlzcGxheU5hbWUiLCJ3YXJuQWJvdXRBY2Nlc3NpbmdLZXkiLCJkZWZpbmVQcm9wZXJ0eSIsImNvbmZpZ3VyYWJsZSIsImRlZmluZVJlZlByb3BXYXJuaW5nR2V0dGVyIiwid2FybkFib3V0QWNjZXNzaW5nUmVmIiwiUmVhY3RFbGVtZW50IiwidHlwZSIsInNlbGYiLCJzb3VyY2UiLCJvd25lciIsImVsZW1lbnQiLCIkJHR5cGVvZiIsIlJFQUNUX0VMRU1FTlRfVFlQRSIsIl9vd25lciIsIl9zdG9yZSIsImVudW1lcmFibGUiLCJ3cml0YWJsZSIsInZhbHVlIiwiZnJlZXplIiwiY2hpbGRyZW4iLCJwcm9wTmFtZSIsImNoaWxkcmVuTGVuZ3RoIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiY2hpbGRBcnJheSIsIkFycmF5IiwiaSIsImRlZmF1bHRQcm9wcyIsIm5hbWUiLCJSZWFjdEN1cnJlbnRPd25lciIsImN1cnJlbnQiLCJmYWN0b3J5IiwiYmluZCIsIm9sZEVsZW1lbnQiLCJuZXdLZXkiLCJuZXdFbGVtZW50IiwiX3NlbGYiLCJfc291cmNlIiwiYXNzaWduIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OFFBQUE7Ozs7Ozs7UUEwS2dCQSxhLEdBQUFBLGE7UUF3RkFDLGEsR0FBQUEsYTtRQVdBQyxrQixHQUFBQSxrQjtRQWtCQUMsWSxHQUFBQSxZO1FBOEVBQyxjLEdBQUFBLGM7O0FBdFdoQjs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7OztBQUdBLElBQU1DLGlCQUFpQkMsT0FBT0MsU0FBUCxDQUFpQkYsY0FBeEM7O0FBRUEsSUFBTUcsaUJBQWlCO0FBQ3JCQyxPQUFLLElBRGdCO0FBRXJCQyxPQUFLLElBRmdCO0FBR3JCQyxVQUFRLElBSGE7QUFJckJDLFlBQVU7QUFKVyxDQUF2Qjs7QUFPQSxJQUFJQyxtQ0FBSjtBQUFBLElBQWdDQyxtQ0FBaEM7O0FBRUEsU0FBU0MsV0FBVCxDQUFxQkMsTUFBckIsRUFBNkI7QUFDM0IsTUFBSUMsSUFBSixFQUFhO0FBQ1gsUUFBSVosZUFBZWEsSUFBZixDQUFvQkYsTUFBcEIsRUFBNEIsS0FBNUIsQ0FBSixFQUF3QztBQUN0QyxVQUFNRyxTQUFTYixPQUFPYyx3QkFBUCxDQUFnQ0osTUFBaEMsRUFBd0MsS0FBeEMsRUFBK0NLLEdBQTlEO0FBQ0EsVUFBSUYsVUFBVUEsT0FBT0csY0FBckIsRUFBcUM7QUFDbkMsZUFBTyxLQUFQO0FBQ0Q7QUFDRjtBQUNGO0FBQ0QsU0FBT04sT0FBT04sR0FBUCxLQUFlYSxTQUF0QjtBQUNEOztBQUVELFNBQVNDLFdBQVQsQ0FBcUJSLE1BQXJCLEVBQTZCO0FBQzNCLE1BQUlDLElBQUosRUFBYTtBQUNYLFFBQUlaLGVBQWVhLElBQWYsQ0FBb0JGLE1BQXBCLEVBQTRCLEtBQTVCLENBQUosRUFBd0M7QUFDdEMsVUFBTUcsU0FBU2IsT0FBT2Msd0JBQVAsQ0FBZ0NKLE1BQWhDLEVBQXdDLEtBQXhDLEVBQStDSyxHQUE5RDtBQUNBLFVBQUlGLFVBQVVBLE9BQU9H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QyxLQUFuRCxFQUEwRFgsS0FBMUQsQ0FBUDtBQUNEOztBQUVEOzs7Ozs7O0FBT08sU0FBU3RCLGNBQVQsQ0FBd0IrRCxNQUF4QixFQUFnQztBQUNyQyxTQUNFLFFBQU9BLE1BQVAseUNBQU9BLE1BQVAsT0FBa0IsUUFBbEIsSUFDQUEsV0FBVyxJQURYLElBRUFBLE9BQU81QixRQUFQLEtBQW9CQyxnQ0FIdEI7QUFLRCxDIiwiZmlsZSI6IjAuOGVjNjdiYzAzMmVlMGRlZmNmMmMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaW1wb3J0IGludmFyaWFudCBmcm9tICdzaGFyZWQvaW52YXJpYW50JztcbmltcG9ydCB3YXJuaW5nV2l0aG91dFN0YWNrIGZyb20gJ3NoYXJlZC93YXJuaW5nV2l0aG91dFN0YWNrJztcbmltcG9ydCB7UkVBQ1RfRUxFTUVOVF9UWVBFfSBmcm9tICdzaGFyZWQvUmVhY3RTeW1ib2xzJztcbmltcG9ydCBSZWFjdEN1cnJlbnRPd25lciBmcm9tICcuL1JlYWN0Q3VycmVudE93bmVyJztcblxuXG5jb25zdCBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbmNvbnN0IFJFU0VSVkVEX1BST1BTID0ge1xuICBrZXk6IHRydWUsXG4gIHJlZjogdHJ1ZSxcbiAgX19zZWxmOiB0cnVlLFxuICBfX3NvdXJjZTogdHJ1ZSxcbn07XG5cbmxldCBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93biwgc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd247XG5cbmZ1bmN0aW9uIGhhc1ZhbGlkUmVmKGNvbmZpZykge1xuICBpZiAoX19ERVZfXykge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ3JlZicpKSB7XG4gICAgICBjb25zdCBnZXR0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGNvbmZpZywgJ3JlZicpLmdldDtcbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGNvbmZpZy5yZWYgIT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gaGFzVmFsaWRLZXkoY29uZmlnKSB7XG4gIGlmIChfX0RFVl9fKSB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCAna2V5JykpIHtcbiAgICAgIGNvbnN0IGdldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uZmlnLCAna2V5JykuZ2V0O1xuICAgICAgaWYgKGdldHRlciAmJiBnZXR0ZXIuaXNSZWFjdFdhcm5pbmcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gY29uZmlnLmtleSAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpIHtcbiAgY29uc3Qgd2FybkFib3V0QWNjZXNzaW5nS2V5ID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKCFzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93bikge1xuICAgICAgc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24gPSB0cnVlO1xuICAgICAgd2FybmluZ1dpdGhvdXRTdGFjayhcbiAgICAgICAgZmFsc2UsXG4gICAgICAgICclczogYGtleWAgaXMgbm90IGEgcHJvcC4gVHJ5aW5nIHRvIGFjY2VzcyBpdCB3aWxsIHJlc3VsdCAnICtcbiAgICAgICAgICAnaW4gYHVuZGVmaW5lZGAgYmVpbmcgcmV0dXJuZWQuIElmIHlvdSBuZWVkIHRvIGFjY2VzcyB0aGUgc2FtZSAnICtcbiAgICAgICAgICAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICtcbiAgICAgICAgICAncHJvcC4gKGh0dHBzOi8vZmIubWUvcmVhY3Qtc3BlY2lhbC1wcm9wcyknLFxuICAgICAgICBkaXNwbGF5TmFtZSxcbiAgICAgICk7XG4gICAgfVxuICB9O1xuICB3YXJuQWJvdXRBY2Nlc3NpbmdLZXkuaXNSZWFjdFdhcm5pbmcgPSB0cnVlO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvcHMsICdrZXknLCB7XG4gICAgZ2V0OiB3YXJuQWJvdXRBY2Nlc3NpbmdLZXksXG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICB9KTtcbn1cblxuZnVuY3Rpb24gZGVmaW5lUmVmUHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKSB7XG4gIGNvbnN0IHdhcm5BYm91dEFjY2Vzc2luZ1JlZiA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICghc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24pIHtcbiAgICAgIHNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duID0gdHJ1ZTtcbiAgICAgIHdhcm5pbmdXaXRob3V0U3RhY2soXG4gICAgICAgIGZhbHNlLFxuICAgICAgICAnJXM6IGByZWZgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArXG4gICAgICAgICAgJ2luIGB1bmRlZmluZWRgIGJlaW5nIHJldHVybmVkLiBJZiB5b3UgbmVlZCB0byBhY2Nlc3MgdGhlIHNhbWUgJyArXG4gICAgICAgICAgJ3ZhbHVlIHdpdGhpbiB0aGUgY2hpbGQgY29tcG9uZW50LCB5b3Ugc2hvdWxkIHBhc3MgaXQgYXMgYSBkaWZmZXJlbnQgJyArXG4gICAgICAgICAgJ3Byb3AuIChodHRwczovL2ZiLm1lL3JlYWN0LXNwZWNpYWwtcHJvcHMpJyxcbiAgICAgICAgZGlzcGxheU5hbWUsXG4gICAgICApO1xuICAgIH1cbiAgfTtcbiAgd2FybkFib3V0QWNjZXNzaW5nUmVmLmlzUmVhY3RXYXJuaW5nID0gdHJ1ZTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3BzLCAncmVmJywge1xuICAgIGdldDogd2FybkFib3V0QWNjZXNzaW5nUmVmLFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgfSk7XG59XG5cbi8qKlxuICogRmFjdG9yeSBtZXRob2QgdG8gY3JlYXRlIGEgbmV3IFJlYWN0IGVsZW1lbnQuIFRoaXMgbm8gbG9uZ2VyIGFkaGVyZXMgdG9cbiAqIHRoZSBjbGFzcyBwYXR0ZXJuLCBzbyBkbyBub3QgdXNlIG5ldyB0byBjYWxsIGl0LiBBbHNvLCBubyBpbnN0YW5jZW9mIGNoZWNrXG4gKiB3aWxsIHdvcmsuIEluc3RlYWQgdGVzdCAkJHR5cGVvZiBmaWVsZCBhZ2FpbnN0IFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSB0byBjaGVja1xuICogaWYgc29tZXRoaW5nIGlzIGEgUmVhY3QgRWxlbWVudC5cbiAqXG4gKiBAcGFyYW0geyp9IHR5cGVcbiAqIEBwYXJhbSB7Kn0ga2V5XG4gKiBAcGFyYW0ge3N0cmluZ3xvYmplY3R9IHJlZlxuICogQHBhcmFtIHsqfSBzZWxmIEEgKnRlbXBvcmFyeSogaGVscGVyIHRvIGRldGVjdCBwbGFjZXMgd2hlcmUgYHRoaXNgIGlzXG4gKiBkaWZmZXJlbnQgZnJvbSB0aGUgYG93bmVyYCB3aGVuIFJlYWN0LmNyZWF0ZUVsZW1lbnQgaXMgY2FsbGVkLCBzbyB0aGF0IHdlXG4gKiBjYW4gd2Fybi4gV2Ugd2FudCB0byBnZXQgcmlkIG9mIG93bmVyIGFuZCByZXBsYWNlIHN0cmluZyBgcmVmYHMgd2l0aCBhcnJvd1xuICogZnVuY3Rpb25zLCBhbmQgYXMgbG9uZyBhcyBgdGhpc2AgYW5kIG93bmVyIGFyZSB0aGUgc2FtZSwgdGhlcmUgd2lsbCBiZSBub1xuICogY2hhbmdlIGluIGJlaGF2aW9yLlxuICogQHBhcmFtIHsqfSBzb3VyY2UgQW4gYW5ub3RhdGlvbiBvYmplY3QgKGFkZGVkIGJ5IGEgdHJhbnNwaWxlciBvciBvdGhlcndpc2UpXG4gKiBpbmRpY2F0aW5nIGZpbGVuYW1lLCBsaW5lIG51bWJlciwgYW5kL29yIG90aGVyIGluZm9ybWF0aW9uLlxuICogQHBhcmFtIHsqfSBvd25lclxuICogQHBhcmFtIHsqfSBwcm9wc1xuICogQGludGVybmFsXG4gKi9cbmNvbnN0IFJlYWN0RWxlbWVudCA9IGZ1bmN0aW9uKHR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIG93bmVyLCBwcm9wcykge1xuICBjb25zdCBlbGVtZW50ID0ge1xuICAgIC8vIFRoaXMgdGFnIGFsbG93cyB1cyB0byB1bmlxdWVseSBpZGVudGlmeSB0aGlzIGFzIGEgUmVhY3QgRWxlbWVudFxuICAgICQkdHlwZW9mOiBSRUFDVF9FTEVNRU5UX1RZUEUsXG5cbiAgICAvLyBCdWlsdC1pbiBwcm9wZXJ0aWVzIHRoYXQgYmVsb25nIG9uIHRoZSBlbGVtZW50XG4gICAgdHlwZTogdHlwZSxcbiAgICBrZXk6IGtleSxcbiAgICByZWY6IHJlZixcbiAgICBwcm9wczogcHJvcHMsXG5cbiAgICAvLyBSZWNvcmQgdGhlIGNvbXBvbmVudCByZXNwb25zaWJsZSBmb3IgY3JlYXRpbmcgdGhpcyBlbGVtZW50LlxuICAgIF9vd25lcjogb3duZXIsXG4gIH07XG5cbiAgaWYgKF9fREVWX18pIHtcbiAgICAvLyBUaGUgdmFsaWRhdGlvbiBmbGFnIGlzIGN1cnJlbnRseSBtdXRhdGl2ZS4gV2UgcHV0IGl0IG9uXG4gICAgLy8gYW4gZXh0ZXJuYWwgYmFja2luZyBzdG9yZSBzbyB0aGF0IHdlIGNhbiBmcmVlemUgdGhlIHdob2xlIG9iamVjdC5cbiAgICAvLyBUaGlzIGNhbiBiZSByZXBsYWNlZCB3aXRoIGEgV2Vha01hcCBvbmNlIHRoZXkgYXJlIGltcGxlbWVudGVkIGluXG4gICAgLy8gY29tbW9ubHkgdXNlZCBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMuXG4gICAgZWxlbWVudC5fc3RvcmUgPSB7fTtcblxuICAgIC8vIFRvIG1ha2UgY29tcGFyaW5nIFJlYWN0RWxlbWVudHMgZWFzaWVyIGZvciB0ZXN0aW5nIHB1cnBvc2VzLCB3ZSBtYWtlXG4gICAgLy8gdGhlIHZhbGlkYXRpb24gZmxhZyBub24tZW51bWVyYWJsZSAod2hlcmUgcG9zc2libGUsIHdoaWNoIHNob3VsZFxuICAgIC8vIGluY2x1ZGUgZXZlcnkgZW52aXJvbm1lbnQgd2UgcnVuIHRlc3RzIGluKSwgc28gdGhlIHRlc3QgZnJhbWV3b3JrXG4gICAgLy8gaWdub3JlcyBpdC5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudC5fc3RvcmUsICd2YWxpZGF0ZWQnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICB9KTtcbiAgICAvLyBzZWxmIGFuZCBzb3VyY2UgYXJlIERFViBvbmx5IHByb3BlcnRpZXMuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsICdfc2VsZicsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBzZWxmLFxuICAgIH0pO1xuICAgIC8vIFR3byBlbGVtZW50cyBjcmVhdGVkIGluIHR3byBkaWZmZXJlbnQgcGxhY2VzIHNob3VsZCBiZSBjb25zaWRlcmVkXG4gICAgLy8gZXF1YWwgZm9yIHRlc3RpbmcgcHVycG9zZXMgYW5kIHRoZXJlZm9yZSB3ZSBoaWRlIGl0IGZyb20gZW51bWVyYXRpb24uXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsICdfc291cmNlJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHNvdXJjZSxcbiAgICB9KTtcbiAgICBpZiAoT2JqZWN0LmZyZWV6ZSkge1xuICAgICAgT2JqZWN0LmZyZWV6ZShlbGVtZW50LnByb3BzKTtcbiAgICAgIE9iamVjdC5mcmVlemUoZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuXG4vKipcbiAqIENyZWF0ZSBhbmQgcmV0dXJuIGEgbmV3IFJlYWN0RWxlbWVudCBvZiB0aGUgZ2l2ZW4gdHlwZS5cbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjY3JlYXRlZWxlbWVudFxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh0eXBlLCBjb25maWcsIGNoaWxkcmVuKSB7XG4gIGxldCBwcm9wTmFtZTtcblxuICAvLyBSZXNlcnZlZCBuYW1lcyBhcmUgZXh0cmFjdGVkXG4gIGNvbnN0IHByb3BzID0ge307XG5cbiAgbGV0IGtleSA9IG51bGw7XG4gIGxldCByZWYgPSBudWxsO1xuICBsZXQgc2VsZiA9IG51bGw7XG4gIGxldCBzb3VyY2UgPSBudWxsO1xuXG4gIGlmIChjb25maWcgIT0gbnVsbCkge1xuICAgIGlmIChoYXNWYWxpZFJlZihjb25maWcpKSB7XG4gICAgICByZWYgPSBjb25maWcucmVmO1xuICAgIH1cbiAgICBpZiAoaGFzVmFsaWRLZXkoY29uZmlnKSkge1xuICAgICAga2V5ID0gJycgKyBjb25maWcua2V5O1xuICAgIH1cblxuICAgIHNlbGYgPSBjb25maWcuX19zZWxmID09PSB1bmRlZmluZWQgPyBudWxsIDogY29uZmlnLl9fc2VsZjtcbiAgICBzb3VyY2UgPSBjb25maWcuX19zb3VyY2UgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBjb25maWcuX19zb3VyY2U7XG4gICAgLy8gUmVtYWluaW5nIHByb3BlcnRpZXMgYXJlIGFkZGVkIHRvIGEgbmV3IHByb3BzIG9iamVjdFxuICAgIGZvciAocHJvcE5hbWUgaW4gY29uZmlnKSB7XG4gICAgICBpZiAoXG4gICAgICAgIGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCBwcm9wTmFtZSkgJiZcbiAgICAgICAgIVJFU0VSVkVEX1BST1BTLmhhc093blByb3BlcnR5KHByb3BOYW1lKVxuICAgICAgKSB7XG4gICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGNvbmZpZ1twcm9wTmFtZV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gQ2hpbGRyZW4gY2FuIGJlIG1vcmUgdGhhbiBvbmUgYXJndW1lbnQsIGFuZCB0aG9zZSBhcmUgdHJhbnNmZXJyZWQgb250b1xuICAvLyB0aGUgbmV3bHkgYWxsb2NhdGVkIHByb3BzIG9iamVjdC5cbiAgY29uc3QgY2hpbGRyZW5MZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoIC0gMjtcbiAgaWYgKGNoaWxkcmVuTGVuZ3RoID09PSAxKSB7XG4gICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgfSBlbHNlIGlmIChjaGlsZHJlbkxlbmd0aCA+IDEpIHtcbiAgICBjb25zdCBjaGlsZEFycmF5ID0gQXJyYXkoY2hpbGRyZW5MZW5ndGgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW5MZW5ndGg7IGkrKykge1xuICAgICAgY2hpbGRBcnJheVtpXSA9IGFyZ3VtZW50c1tpICsgMl07XG4gICAgfVxuICAgIGlmIChfX0RFVl9fKSB7XG4gICAgICBpZiAoT2JqZWN0LmZyZWV6ZSkge1xuICAgICAgICBPYmplY3QuZnJlZXplKGNoaWxkQXJyYXkpO1xuICAgICAgfVxuICAgIH1cbiAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkQXJyYXk7XG4gIH1cblxuICAvLyBSZXNvbHZlIGRlZmF1bHQgcHJvcHNcbiAgaWYgKHR5cGUgJiYgdHlwZS5kZWZhdWx0UHJvcHMpIHtcbiAgICBjb25zdCBkZWZhdWx0UHJvcHMgPSB0eXBlLmRlZmF1bHRQcm9wcztcbiAgICBmb3IgKHByb3BOYW1lIGluIGRlZmF1bHRQcm9wcykge1xuICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGRlZmF1bHRQcm9wc1twcm9wTmFtZV07XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGlmIChfX0RFVl9fKSB7XG4gICAgaWYgKGtleSB8fCByZWYpIHtcbiAgICAgIGNvbnN0IGRpc3BsYXlOYW1lID1cbiAgICAgICAgdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICA/IHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8ICdVbmtub3duJ1xuICAgICAgICAgIDogdHlwZTtcbiAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICAgIGlmIChyZWYpIHtcbiAgICAgICAgZGVmaW5lUmVmUHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIFJlYWN0RWxlbWVudChcbiAgICB0eXBlLFxuICAgIGtleSxcbiAgICByZWYsXG4gICAgc2VsZixcbiAgICBzb3VyY2UsXG4gICAgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCxcbiAgICBwcm9wcyxcbiAgKTtcbn1cblxuLyoqXG4gKiBSZXR1cm4gYSBmdW5jdGlvbiB0aGF0IHByb2R1Y2VzIFJlYWN0RWxlbWVudHMgb2YgYSBnaXZlbiB0eXBlLlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNjcmVhdGVmYWN0b3J5XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVGYWN0b3J5KHR5cGUpIHtcbiAgY29uc3QgZmFjdG9yeSA9IGNyZWF0ZUVsZW1lbnQuYmluZChudWxsLCB0eXBlKTtcbiAgLy8gRXhwb3NlIHRoZSB0eXBlIG9uIHRoZSBmYWN0b3J5IGFuZCB0aGUgcHJvdG90eXBlIHNvIHRoYXQgaXQgY2FuIGJlXG4gIC8vIGVhc2lseSBhY2Nlc3NlZCBvbiBlbGVtZW50cy4gRS5nLiBgPEZvbyAvPi50eXBlID09PSBGb29gLlxuICAvLyBUaGlzIHNob3VsZCBub3QgYmUgbmFtZWQgYGNvbnN0cnVjdG9yYCBzaW5jZSB0aGlzIG1heSBub3QgYmUgdGhlIGZ1bmN0aW9uXG4gIC8vIHRoYXQgY3JlYXRlZCB0aGUgZWxlbWVudCwgYW5kIGl0IG1heSBub3QgZXZlbiBiZSBhIGNvbnN0cnVjdG9yLlxuICAvLyBMZWdhY3kgaG9vazogcmVtb3ZlIGl0XG4gIGZhY3RvcnkudHlwZSA9IHR5cGU7XG4gIHJldHVybiBmYWN0b3J5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xvbmVBbmRSZXBsYWNlS2V5KG9sZEVsZW1lbnQsIG5ld0tleSkge1xuICBjb25zdCBuZXdFbGVtZW50ID0gUmVhY3RFbGVtZW50KFxuICAgIG9sZEVsZW1lbnQudHlwZSxcbiAgICBuZXdLZXksXG4gICAgb2xkRWxlbWVudC5yZWYsXG4gICAgb2xkRWxlbWVudC5fc2VsZixcbiAgICBvbGRFbGVtZW50Ll9zb3VyY2UsXG4gICAgb2xkRWxlbWVudC5fb3duZXIsXG4gICAgb2xkRWxlbWVudC5wcm9wcyxcbiAgKTtcblxuICByZXR1cm4gbmV3RWxlbWVudDtcbn1cblxuLyoqXG4gKiBDbG9uZSBhbmQgcmV0dXJuIGEgbmV3IFJlYWN0RWxlbWVudCB1c2luZyBlbGVtZW50IGFzIHRoZSBzdGFydGluZyBwb2ludC5cbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjY2xvbmVlbGVtZW50XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbG9uZUVsZW1lbnQoZWxlbWVudCwgY29uZmlnLCBjaGlsZHJlbikge1xuICBpbnZhcmlhbnQoXG4gICAgIShlbGVtZW50ID09PSBudWxsIHx8IGVsZW1lbnQgPT09IHVuZGVmaW5lZCksXG4gICAgJ1JlYWN0LmNsb25lRWxlbWVudCguLi4pOiBUaGUgYXJndW1lbnQgbXVzdCBiZSBhIFJlYWN0IGVsZW1lbnQsIGJ1dCB5b3UgcGFzc2VkICVzLicsXG4gICAgZWxlbWVudCxcbiAgKTtcblxuICBsZXQgcHJvcE5hbWU7XG5cbiAgLy8gT3JpZ2luYWwgcHJvcHMgYXJlIGNvcGllZFxuICBjb25zdCBwcm9wcyA9IE9iamVjdC5hc3NpZ24oe30sIGVsZW1lbnQucHJvcHMpO1xuXG4gIC8vIFJlc2VydmVkIG5hbWVzIGFyZSBleHRyYWN0ZWRcbiAgbGV0IGtleSA9IGVsZW1lbnQua2V5O1xuICBsZXQgcmVmID0gZWxlbWVudC5yZWY7XG4gIC8vIFNlbGYgaXMgcHJlc2VydmVkIHNpbmNlIHRoZSBvd25lciBpcyBwcmVzZXJ2ZWQuXG4gIGNvbnN0IHNlbGYgPSBlbGVtZW50Ll9zZWxmO1xuICAvLyBTb3VyY2UgaXMgcHJlc2VydmVkIHNpbmNlIGNsb25lRWxlbWVudCBpcyB1bmxpa2VseSB0byBiZSB0YXJnZXRlZCBieSBhXG4gIC8vIHRyYW5zcGlsZXIsIGFuZCB0aGUgb3JpZ2luYWwgc291cmNlIGlzIHByb2JhYmx5IGEgYmV0dGVyIGluZGljYXRvciBvZiB0aGVcbiAgLy8gdHJ1ZSBvd25lci5cbiAgY29uc3Qgc291cmNlID0gZWxlbWVudC5fc291cmNlO1xuXG4gIC8vIE93bmVyIHdpbGwgYmUgcHJlc2VydmVkLCB1bmxlc3MgcmVmIGlzIG92ZXJyaWRkZW5cbiAgbGV0IG93bmVyID0gZWxlbWVudC5fb3duZXI7XG5cbiAgaWYgKGNvbmZpZyAhPSBudWxsKSB7XG4gICAgaWYgKGhhc1ZhbGlkUmVmKGNvbmZpZykpIHtcbiAgICAgIC8vIFNpbGVudGx5IHN0ZWFsIHRoZSByZWYgZnJvbSB0aGUgcGFyZW50LlxuICAgICAgcmVmID0gY29uZmlnLnJlZjtcbiAgICAgIG93bmVyID0gUmVhY3RDdXJyZW50T3duZXIuY3VycmVudDtcbiAgICB9XG4gICAgaWYgKGhhc1ZhbGlkS2V5KGNvbmZpZykpIHtcbiAgICAgIGtleSA9ICcnICsgY29uZmlnLmtleTtcbiAgICB9XG5cbiAgICAvLyBSZW1haW5pbmcgcHJvcGVydGllcyBvdmVycmlkZSBleGlzdGluZyBwcm9wc1xuICAgIGxldCBkZWZhdWx0UHJvcHM7XG4gICAgaWYgKGVsZW1lbnQudHlwZSAmJiBlbGVtZW50LnR5cGUuZGVmYXVsdFByb3BzKSB7XG4gICAgICBkZWZhdWx0UHJvcHMgPSBlbGVtZW50LnR5cGUuZGVmYXVsdFByb3BzO1xuICAgIH1cbiAgICBmb3IgKHByb3BOYW1lIGluIGNvbmZpZykge1xuICAgICAgaWYgKFxuICAgICAgICBoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgcHJvcE5hbWUpICYmXG4gICAgICAgICFSRVNFUlZFRF9QUk9QUy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSlcbiAgICAgICkge1xuICAgICAgICBpZiAoY29uZmlnW3Byb3BOYW1lXSA9PT0gdW5kZWZpbmVkICYmIGRlZmF1bHRQcm9wcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgLy8gUmVzb2x2ZSBkZWZhdWx0IHByb3BzXG4gICAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gZGVmYXVsdFByb3BzW3Byb3BOYW1lXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBjb25maWdbcHJvcE5hbWVdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gQ2hpbGRyZW4gY2FuIGJlIG1vcmUgdGhhbiBvbmUgYXJndW1lbnQsIGFuZCB0aG9zZSBhcmUgdHJhbnNmZXJyZWQgb250b1xuICAvLyB0aGUgbmV3bHkgYWxsb2NhdGVkIHByb3BzIG9iamVjdC5cbiAgY29uc3QgY2hpbGRyZW5MZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoIC0gMjtcbiAgaWYgKGNoaWxkcmVuTGVuZ3RoID09PSAxKSB7XG4gICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgfSBlbHNlIGlmIChjaGlsZHJlbkxlbmd0aCA+IDEpIHtcbiAgICBjb25zdCBjaGlsZEFycmF5ID0gQXJyYXkoY2hpbGRyZW5MZW5ndGgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW5MZW5ndGg7IGkrKykge1xuICAgICAgY2hpbGRBcnJheVtpXSA9IGFyZ3VtZW50c1tpICsgMl07XG4gICAgfVxuICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRBcnJheTtcbiAgfVxuXG4gIHJldHVybiBSZWFjdEVsZW1lbnQoZWxlbWVudC50eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBvd25lciwgcHJvcHMpO1xufVxuXG4vKipcbiAqIFZlcmlmaWVzIHRoZSBvYmplY3QgaXMgYSBSZWFjdEVsZW1lbnQuXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI2lzdmFsaWRlbGVtZW50XG4gKiBAcGFyYW0gez9vYmplY3R9IG9iamVjdFxuICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiBgb2JqZWN0YCBpcyBhIFJlYWN0RWxlbWVudC5cbiAqIEBmaW5hbFxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnQob2JqZWN0KSB7XG4gIHJldHVybiAoXG4gICAgdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiZcbiAgICBvYmplY3QgIT09IG51bGwgJiZcbiAgICBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRVxuICApO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3Qvc3JjL1JlYWN0RWxlbWVudC5qcyJdLCJzb3VyY2VSb290IjoiIn0=
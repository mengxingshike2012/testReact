webpackHotUpdate(0,{

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _warningWithoutStack = __webpack_require__(1);

var _warningWithoutStack2 = _interopRequireDefault(_warningWithoutStack);

var _ReactSharedInternals = __webpack_require__(10);

var _ReactSharedInternals2 = _interopRequireDefault(_ReactSharedInternals);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var warning = _warningWithoutStack2.default;

if (true) {
  warning = function warning(condition, format) {
    if (condition) {
      return;
    }
    var ReactDebugCurrentFrame = _ReactSharedInternals2.default.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();
    // eslint-disable-next-line react-internal/warning-and-invariant-args

    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    _warningWithoutStack2.default.apply(undefined, [false, format + '%s'].concat(args, [stack]));
  };
}

exports.default = warning;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9zaGFyZWQvd2FybmluZy5qcyJdLCJuYW1lcyI6WyJ3YXJuaW5nIiwid2FybmluZ1dpdGhvdXRTdGFjayIsIl9fREVWX18iLCJjb25kaXRpb24iLCJmb3JtYXQiLCJSZWFjdERlYnVnQ3VycmVudEZyYW1lIiwiUmVhY3RTaGFyZWRJbnRlcm5hbHMiLCJzdGFjayIsImdldFN0YWNrQWRkZW5kdW0iLCJhcmdzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFNQTs7OztBQUNBOzs7Ozs7QUFFQTs7Ozs7OztBQVRBOzs7Ozs7QUFnQkEsSUFBSUEsVUFBVUMsNkJBQWQ7O0FBRUEsSUFBSUMsSUFBSixFQUFhO0FBQ1hGLFlBQVUsaUJBQVNHLFNBQVQsRUFBb0JDLE1BQXBCLEVBQXFDO0FBQzdDLFFBQUlELFNBQUosRUFBZTtBQUNiO0FBQ0Q7QUFDRCxRQUFNRSx5QkFBeUJDLCtCQUFxQkQsc0JBQXBEO0FBQ0EsUUFBTUUsUUFBUUYsdUJBQXVCRyxnQkFBdkIsRUFBZDtBQUNBOztBQU42QyxzQ0FBTkMsSUFBTTtBQUFOQSxVQUFNO0FBQUE7O0FBTzdDUixvREFBb0IsS0FBcEIsRUFBMkJHLFNBQVMsSUFBcEMsU0FBNkNLLElBQTdDLEdBQW1ERixLQUFuRDtBQUNELEdBUkQ7QUFTRDs7a0JBRWNQLE8iLCJmaWxlIjoiMC40NjcwMzlkZjg0NTM1MjE4Y2U1Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuaW1wb3J0IHdhcm5pbmdXaXRob3V0U3RhY2sgZnJvbSAnc2hhcmVkL3dhcm5pbmdXaXRob3V0U3RhY2snO1xuaW1wb3J0IFJlYWN0U2hhcmVkSW50ZXJuYWxzIGZyb20gJ3NoYXJlZC9SZWFjdFNoYXJlZEludGVybmFscyc7XG5cbi8qKlxuICogU2ltaWxhciB0byBpbnZhcmlhbnQgYnV0IG9ubHkgbG9ncyBhIHdhcm5pbmcgaWYgdGhlIGNvbmRpdGlvbiBpcyBub3QgbWV0LlxuICogVGhpcyBjYW4gYmUgdXNlZCB0byBsb2cgaXNzdWVzIGluIGRldmVsb3BtZW50IGVudmlyb25tZW50cyBpbiBjcml0aWNhbFxuICogcGF0aHMuIFJlbW92aW5nIHRoZSBsb2dnaW5nIGNvZGUgZm9yIHByb2R1Y3Rpb24gZW52aXJvbm1lbnRzIHdpbGwga2VlcCB0aGVcbiAqIHNhbWUgbG9naWMgYW5kIGZvbGxvdyB0aGUgc2FtZSBjb2RlIHBhdGhzLlxuICovXG5cbmxldCB3YXJuaW5nID0gd2FybmluZ1dpdGhvdXRTdGFjaztcblxuaWYgKF9fREVWX18pIHtcbiAgd2FybmluZyA9IGZ1bmN0aW9uKGNvbmRpdGlvbiwgZm9ybWF0LCAuLi5hcmdzKSB7XG4gICAgaWYgKGNvbmRpdGlvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBSZWFjdERlYnVnQ3VycmVudEZyYW1lID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcbiAgICBjb25zdCBzdGFjayA9IFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0U3RhY2tBZGRlbmR1bSgpO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1pbnRlcm5hbC93YXJuaW5nLWFuZC1pbnZhcmlhbnQtYXJnc1xuICAgIHdhcm5pbmdXaXRob3V0U3RhY2soZmFsc2UsIGZvcm1hdCArICclcycsIC4uLmFyZ3MsIHN0YWNrKTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2FybmluZztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3NoYXJlZC93YXJuaW5nLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==
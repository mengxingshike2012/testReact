webpackHotUpdate(0,{

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(22);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

debugger; /**
           * Copyright (c) Facebook, Inc. and its affiliates.
           *
           * This source code is licensed under the MIT license found in the
           * LICENSE file in the root directory of this source tree.
           */

var ReactSharedInternals = _react2.default.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

// Prevent newer renderers from RTE when used with older react package versions.
// Current owner and dispatcher used to share the same ref,
// but PR #14548 split them out to better support the react-debug-tools package.
// if (!ReactSharedInternals.hasOwnProperty('ReactCurrentDispatcher')) {
//   ReactSharedInternals.ReactCurrentDispatcher = {
//     current: null,
//   };
// }

exports.default = ReactSharedInternals;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9zaGFyZWQvUmVhY3RTaGFyZWRJbnRlcm5hbHMuanMiXSwibmFtZXMiOlsiUmVhY3RTaGFyZWRJbnRlcm5hbHMiLCJSZWFjdCIsIl9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFPQTs7Ozs7O0FBRUEsUyxDQVRBOzs7Ozs7O0FBV0EsSUFBTUEsdUJBQ0pDLGdCQUFNQyxrREFEUjs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztrQkFFZUYsb0IiLCJmaWxlIjoiMC43ZDViYzM4MjllMGFiOWJiOTNhOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5kZWJ1Z2dlcjtcblxuY29uc3QgUmVhY3RTaGFyZWRJbnRlcm5hbHMgPVxuICBSZWFjdC5fX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRDtcblxuLy8gUHJldmVudCBuZXdlciByZW5kZXJlcnMgZnJvbSBSVEUgd2hlbiB1c2VkIHdpdGggb2xkZXIgcmVhY3QgcGFja2FnZSB2ZXJzaW9ucy5cbi8vIEN1cnJlbnQgb3duZXIgYW5kIGRpc3BhdGNoZXIgdXNlZCB0byBzaGFyZSB0aGUgc2FtZSByZWYsXG4vLyBidXQgUFIgIzE0NTQ4IHNwbGl0IHRoZW0gb3V0IHRvIGJldHRlciBzdXBwb3J0IHRoZSByZWFjdC1kZWJ1Zy10b29scyBwYWNrYWdlLlxuLy8gaWYgKCFSZWFjdFNoYXJlZEludGVybmFscy5oYXNPd25Qcm9wZXJ0eSgnUmVhY3RDdXJyZW50RGlzcGF0Y2hlcicpKSB7XG4vLyAgIFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0Q3VycmVudERpc3BhdGNoZXIgPSB7XG4vLyAgICAgY3VycmVudDogbnVsbCxcbi8vICAgfTtcbi8vIH1cblxuZXhwb3J0IGRlZmF1bHQgUmVhY3RTaGFyZWRJbnRlcm5hbHM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9zaGFyZWQvUmVhY3RTaGFyZWRJbnRlcm5hbHMuanMiXSwic291cmNlUm9vdCI6IiJ9
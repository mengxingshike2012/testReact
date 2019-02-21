webpackHotUpdate(0,{

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = __webpack_require__(22);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(108);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Hooks() {
  var _useState = (0, _react.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      count = _useState2[0],
      setCount = _useState2[1];

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'p',
      null,
      'you have clicked ',
      count,
      ' times'
    ),
    _react2.default.createElement(
      'button',
      { onClick: function onClick() {
          return setCount(count + 1);
        } },
      'Click me'
    )
  );
}

_reactDom2.default.render(_react2.default.createElement(Hooks, null), document.getElementById('root'));

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi90ZXN0LWVudi9hcHAuanMiXSwibmFtZXMiOlsiSG9va3MiLCJjb3VudCIsInNldENvdW50IiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7O0FBRUEsU0FBU0EsS0FBVCxHQUFpQjtBQUFBLGtCQUNXLHFCQUFTLENBQVQsQ0FEWDtBQUFBO0FBQUEsTUFDUkMsS0FEUTtBQUFBLE1BQ0RDLFFBREM7O0FBR2YsU0FBUTtBQUFBO0FBQUE7QUFDSjtBQUFBO0FBQUE7QUFBQTtBQUFxQkQsV0FBckI7QUFBQTtBQUFBLEtBREk7QUFFSjtBQUFBO0FBQUEsUUFBUSxTQUFTO0FBQUEsaUJBQU1DLFNBQVNELFFBQVEsQ0FBakIsQ0FBTjtBQUFBLFNBQWpCO0FBQUE7QUFBQTtBQUZJLEdBQVI7QUFNRDs7QUFFREUsbUJBQVNDLE1BQVQsQ0FBZ0IsOEJBQUMsS0FBRCxPQUFoQixFQUEyQkMsU0FBU0MsY0FBVCxDQUF3QixNQUF4QixDQUEzQixFIiwiZmlsZSI6IjAuODM1ZTVjYWJlMThkZTFmMGE4ZDcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VyRWZmZWN0fSBmcm9tICdAcGFja2FnZXMvcmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ0BwYWNrYWdlcy9yZWFjdC1kb20nO1xuXG5mdW5jdGlvbiBIb29rcygpIHtcbiAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZSgwKVxuXG4gIHJldHVybiAoPGRpdj5cbiAgICAgIDxwPnlvdSBoYXZlIGNsaWNrZWQge2NvdW50fSB0aW1lczwvcD5cbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0Q291bnQoY291bnQgKyAxKX0+XG4gICAgICAgIENsaWNrIG1lXG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj4pXG59XG5cblJlYWN0RE9NLnJlbmRlcig8SG9va3MgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Rlc3QtZW52L2FwcC5qcyJdLCJzb3VyY2VSb290IjoiIn0=
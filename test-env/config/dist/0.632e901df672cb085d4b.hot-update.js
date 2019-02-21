webpackHotUpdate(0,{

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectAssign = __webpack_require__(95);

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _scheduler = __webpack_require__(62);

var _tracing = __webpack_require__(23);

var _ReactCurrentDispatcher = __webpack_require__(64);

var _ReactCurrentDispatcher2 = _interopRequireDefault(_ReactCurrentDispatcher);

var _ReactCurrentOwner = __webpack_require__(42);

var _ReactCurrentOwner2 = _interopRequireDefault(_ReactCurrentOwner);

var _ReactDebugCurrentFrame = __webpack_require__(43);

var _ReactDebugCurrentFrame2 = _interopRequireDefault(_ReactDebugCurrentFrame);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactSharedInternals = {
  ReactCurrentDispatcher: _ReactCurrentDispatcher2.default,
  ReactCurrentOwner: _ReactCurrentOwner2.default,
  // Used by renderers to avoid bundling object-assign twice in UMD bundles:
  assign: _objectAssign2.default
};

if (false) {
  // Re-export the schedule API(s) for UMD bundles.
  // This avoids introducing a dependency on a new UMD global in a minor update,
  // Since that would be a breaking change (e.g. for all existing CodeSandboxes).
  // This re-export is only required for UMD bundles;
  // CJS bundles use the shared NPM package.
  Object.assign(ReactSharedInternals, {
    Scheduler: {
      unstable_cancelCallback: _scheduler.unstable_cancelCallback,
      unstable_shouldYield: _scheduler.unstable_shouldYield,
      unstable_now: _scheduler.unstable_now,
      unstable_scheduleCallback: _scheduler.unstable_scheduleCallback,
      unstable_runWithPriority: _scheduler.unstable_runWithPriority,
      unstable_next: _scheduler.unstable_next,
      unstable_wrapCallback: _scheduler.unstable_wrapCallback,
      unstable_getFirstCallbackNode: _scheduler.unstable_getFirstCallbackNode,
      unstable_pauseExecution: _scheduler.unstable_pauseExecution,
      unstable_continueExecution: _scheduler.unstable_continueExecution,
      unstable_getCurrentPriorityLevel: _scheduler.unstable_getCurrentPriorityLevel
    },
    SchedulerTracing: {
      __interactionsRef: _tracing.__interactionsRef,
      __subscriberRef: _tracing.__subscriberRef,
      unstable_clear: _tracing.unstable_clear,
      unstable_getCurrent: _tracing.unstable_getCurrent,
      unstable_getThreadID: _tracing.unstable_getThreadID,
      unstable_subscribe: _tracing.unstable_subscribe,
      unstable_trace: _tracing.unstable_trace,
      unstable_unsubscribe: _tracing.unstable_unsubscribe,
      unstable_wrap: _tracing.unstable_wrap
    }
  });
}

if (true) {
  Object.assign(ReactSharedInternals, {
    // These should not be included in production.
    ReactDebugCurrentFrame: _ReactDebugCurrentFrame2.default,
    // Shim for React DOM 16.0.0 which still destructured (but not used) this.
    // TODO: remove in React 17.0.
    ReactComponentTreeHook: {}
  });
}

exports.default = ReactSharedInternals;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC9zcmMvUmVhY3RTaGFyZWRJbnRlcm5hbHMuanMiXSwibmFtZXMiOlsiUmVhY3RTaGFyZWRJbnRlcm5hbHMiLCJSZWFjdEN1cnJlbnREaXNwYXRjaGVyIiwiUmVhY3RDdXJyZW50T3duZXIiLCJhc3NpZ24iLCJfX1VNRF9fIiwiT2JqZWN0IiwiU2NoZWR1bGVyIiwidW5zdGFibGVfY2FuY2VsQ2FsbGJhY2siLCJ1bnN0YWJsZV9zaG91bGRZaWVsZCIsInVuc3RhYmxlX25vdyIsInVuc3RhYmxlX3NjaGVkdWxlQ2FsbGJhY2siLCJ1bnN0YWJsZV9ydW5XaXRoUHJpb3JpdHkiLCJ1bnN0YWJsZV9uZXh0IiwidW5zdGFibGVfd3JhcENhbGxiYWNrIiwidW5zdGFibGVfZ2V0Rmlyc3RDYWxsYmFja05vZGUiLCJ1bnN0YWJsZV9wYXVzZUV4ZWN1dGlvbiIsInVuc3RhYmxlX2NvbnRpbnVlRXhlY3V0aW9uIiwidW5zdGFibGVfZ2V0Q3VycmVudFByaW9yaXR5TGV2ZWwiLCJTY2hlZHVsZXJUcmFjaW5nIiwiX19pbnRlcmFjdGlvbnNSZWYiLCJfX3N1YnNjcmliZXJSZWYiLCJ1bnN0YWJsZV9jbGVhciIsInVuc3RhYmxlX2dldEN1cnJlbnQiLCJ1bnN0YWJsZV9nZXRUaHJlYWRJRCIsInVuc3RhYmxlX3N1YnNjcmliZSIsInVuc3RhYmxlX3RyYWNlIiwidW5zdGFibGVfdW5zdWJzY3JpYmUiLCJ1bnN0YWJsZV93cmFwIiwiX19ERVZfXyIsIlJlYWN0RGVidWdDdXJyZW50RnJhbWUiLCJSZWFjdENvbXBvbmVudFRyZWVIb29rIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFPQTs7OztBQUNBOztBQWFBOztBQVdBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBbENBOzs7Ozs7O0FBb0NBLElBQU1BLHVCQUF1QjtBQUMzQkMsMERBRDJCO0FBRTNCQyxnREFGMkI7QUFHM0I7QUFDQUM7QUFKMkIsQ0FBN0I7O0FBT0EsSUFBSUMsS0FBSixFQUFhO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBQyxTQUFPRixNQUFQLENBQWNILG9CQUFkLEVBQW9DO0FBQ2xDTSxlQUFXO0FBQ1RDLGlFQURTO0FBRVRDLDJEQUZTO0FBR1RDLDJDQUhTO0FBSVRDLHFFQUpTO0FBS1RDLG1FQUxTO0FBTVRDLDZDQU5TO0FBT1RDLDZEQVBTO0FBUVRDLDZFQVJTO0FBU1RDLGlFQVRTO0FBVVRDLHVFQVZTO0FBV1RDO0FBWFMsS0FEdUI7QUFjbENDLHNCQUFrQjtBQUNoQkMsbURBRGdCO0FBRWhCQywrQ0FGZ0I7QUFHaEJDLDZDQUhnQjtBQUloQkMsdURBSmdCO0FBS2hCQyx5REFMZ0I7QUFNaEJDLHFEQU5nQjtBQU9oQkMsNkNBUGdCO0FBUWhCQyx5REFSZ0I7QUFTaEJDO0FBVGdCO0FBZGdCLEdBQXBDO0FBMEJEOztBQUVELElBQUlDLElBQUosRUFBYTtBQUNYdkIsU0FBT0YsTUFBUCxDQUFjSCxvQkFBZCxFQUFvQztBQUNsQztBQUNBNkIsNERBRmtDO0FBR2xDO0FBQ0E7QUFDQUMsNEJBQXdCO0FBTFUsR0FBcEM7QUFPRDs7a0JBRWM5QixvQiIsImZpbGUiOiIwLjYzMmU5MDFkZjY3MmNiMDg1ZDRiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmltcG9ydCBhc3NpZ24gZnJvbSAnb2JqZWN0LWFzc2lnbic7XG5pbXBvcnQge1xuICB1bnN0YWJsZV9jYW5jZWxDYWxsYmFjayxcbiAgdW5zdGFibGVfc2hvdWxkWWllbGQsXG4gIHVuc3RhYmxlX25vdyxcbiAgdW5zdGFibGVfc2NoZWR1bGVDYWxsYmFjayxcbiAgdW5zdGFibGVfcnVuV2l0aFByaW9yaXR5LFxuICB1bnN0YWJsZV9uZXh0LFxuICB1bnN0YWJsZV9nZXRGaXJzdENhbGxiYWNrTm9kZSxcbiAgdW5zdGFibGVfcGF1c2VFeGVjdXRpb24sXG4gIHVuc3RhYmxlX2NvbnRpbnVlRXhlY3V0aW9uLFxuICB1bnN0YWJsZV93cmFwQ2FsbGJhY2ssXG4gIHVuc3RhYmxlX2dldEN1cnJlbnRQcmlvcml0eUxldmVsLFxufSBmcm9tICdzY2hlZHVsZXInO1xuaW1wb3J0IHtcbiAgX19pbnRlcmFjdGlvbnNSZWYsXG4gIF9fc3Vic2NyaWJlclJlZixcbiAgdW5zdGFibGVfY2xlYXIsXG4gIHVuc3RhYmxlX2dldEN1cnJlbnQsXG4gIHVuc3RhYmxlX2dldFRocmVhZElELFxuICB1bnN0YWJsZV9zdWJzY3JpYmUsXG4gIHVuc3RhYmxlX3RyYWNlLFxuICB1bnN0YWJsZV91bnN1YnNjcmliZSxcbiAgdW5zdGFibGVfd3JhcCxcbn0gZnJvbSAnc2NoZWR1bGVyL3RyYWNpbmcnO1xuaW1wb3J0IFJlYWN0Q3VycmVudERpc3BhdGNoZXIgZnJvbSAnLi9SZWFjdEN1cnJlbnREaXNwYXRjaGVyJztcbmltcG9ydCBSZWFjdEN1cnJlbnRPd25lciBmcm9tICcuL1JlYWN0Q3VycmVudE93bmVyJztcbmltcG9ydCBSZWFjdERlYnVnQ3VycmVudEZyYW1lIGZyb20gJy4vUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSc7XG5cbmNvbnN0IFJlYWN0U2hhcmVkSW50ZXJuYWxzID0ge1xuICBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLFxuICBSZWFjdEN1cnJlbnRPd25lcixcbiAgLy8gVXNlZCBieSByZW5kZXJlcnMgdG8gYXZvaWQgYnVuZGxpbmcgb2JqZWN0LWFzc2lnbiB0d2ljZSBpbiBVTUQgYnVuZGxlczpcbiAgYXNzaWduLFxufTtcblxuaWYgKF9fVU1EX18pIHtcbiAgLy8gUmUtZXhwb3J0IHRoZSBzY2hlZHVsZSBBUEkocykgZm9yIFVNRCBidW5kbGVzLlxuICAvLyBUaGlzIGF2b2lkcyBpbnRyb2R1Y2luZyBhIGRlcGVuZGVuY3kgb24gYSBuZXcgVU1EIGdsb2JhbCBpbiBhIG1pbm9yIHVwZGF0ZSxcbiAgLy8gU2luY2UgdGhhdCB3b3VsZCBiZSBhIGJyZWFraW5nIGNoYW5nZSAoZS5nLiBmb3IgYWxsIGV4aXN0aW5nIENvZGVTYW5kYm94ZXMpLlxuICAvLyBUaGlzIHJlLWV4cG9ydCBpcyBvbmx5IHJlcXVpcmVkIGZvciBVTUQgYnVuZGxlcztcbiAgLy8gQ0pTIGJ1bmRsZXMgdXNlIHRoZSBzaGFyZWQgTlBNIHBhY2thZ2UuXG4gIE9iamVjdC5hc3NpZ24oUmVhY3RTaGFyZWRJbnRlcm5hbHMsIHtcbiAgICBTY2hlZHVsZXI6IHtcbiAgICAgIHVuc3RhYmxlX2NhbmNlbENhbGxiYWNrLFxuICAgICAgdW5zdGFibGVfc2hvdWxkWWllbGQsXG4gICAgICB1bnN0YWJsZV9ub3csXG4gICAgICB1bnN0YWJsZV9zY2hlZHVsZUNhbGxiYWNrLFxuICAgICAgdW5zdGFibGVfcnVuV2l0aFByaW9yaXR5LFxuICAgICAgdW5zdGFibGVfbmV4dCxcbiAgICAgIHVuc3RhYmxlX3dyYXBDYWxsYmFjayxcbiAgICAgIHVuc3RhYmxlX2dldEZpcnN0Q2FsbGJhY2tOb2RlLFxuICAgICAgdW5zdGFibGVfcGF1c2VFeGVjdXRpb24sXG4gICAgICB1bnN0YWJsZV9jb250aW51ZUV4ZWN1dGlvbixcbiAgICAgIHVuc3RhYmxlX2dldEN1cnJlbnRQcmlvcml0eUxldmVsLFxuICAgIH0sXG4gICAgU2NoZWR1bGVyVHJhY2luZzoge1xuICAgICAgX19pbnRlcmFjdGlvbnNSZWYsXG4gICAgICBfX3N1YnNjcmliZXJSZWYsXG4gICAgICB1bnN0YWJsZV9jbGVhcixcbiAgICAgIHVuc3RhYmxlX2dldEN1cnJlbnQsXG4gICAgICB1bnN0YWJsZV9nZXRUaHJlYWRJRCxcbiAgICAgIHVuc3RhYmxlX3N1YnNjcmliZSxcbiAgICAgIHVuc3RhYmxlX3RyYWNlLFxuICAgICAgdW5zdGFibGVfdW5zdWJzY3JpYmUsXG4gICAgICB1bnN0YWJsZV93cmFwLFxuICAgIH0sXG4gIH0pO1xufVxuXG5pZiAoX19ERVZfXykge1xuICBPYmplY3QuYXNzaWduKFJlYWN0U2hhcmVkSW50ZXJuYWxzLCB7XG4gICAgLy8gVGhlc2Ugc2hvdWxkIG5vdCBiZSBpbmNsdWRlZCBpbiBwcm9kdWN0aW9uLlxuICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUsXG4gICAgLy8gU2hpbSBmb3IgUmVhY3QgRE9NIDE2LjAuMCB3aGljaCBzdGlsbCBkZXN0cnVjdHVyZWQgKGJ1dCBub3QgdXNlZCkgdGhpcy5cbiAgICAvLyBUT0RPOiByZW1vdmUgaW4gUmVhY3QgMTcuMC5cbiAgICBSZWFjdENvbXBvbmVudFRyZWVIb29rOiB7fSxcbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0U2hhcmVkSW50ZXJuYWxzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3Qvc3JjL1JlYWN0U2hhcmVkSW50ZXJuYWxzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==
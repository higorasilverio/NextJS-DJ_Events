"use strict";
self["webpackHotUpdate_N_E"]("pages/events",{

/***/ "./pages/events/index.js":
/*!*******************************!*\
  !*** ./pages/events/index.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSP": function() { return /* binding */ __N_SSP; },
/* harmony export */   "default": function() { return /* binding */ EventsPage; }
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_EventItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/EventItem */ "./components/EventItem.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Layout */ "./components/Layout.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\higor.silverio\\Development\\DJ-Events\\dj-events-frontend\\pages\\events\\index.js";




var __N_SSP = true;
function EventsPage(_ref) {
  var _this = this;

  var events = _ref.events,
      page = _ref.page,
      total = _ref.total;
  var lastPage = Math.ceil(total / PER_PAGE);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__.default, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h1", {
      children: "Events"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, this), events.length === 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h3", {
      children: "No events to show"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 37
    }, this), events.map(function (evt) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_EventItem__WEBPACK_IMPORTED_MODULE_1__.default, {
        evt: evt
      }, evt.id, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }, _this);
    }), page > 1 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(Link, {
      href: "/events?page=".concat(page - 1),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
        className: "btn-seconday",
        children: "Prev"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 9
  }, this);
}
_c = EventsPage;
EventsPage.propTypes = {
  // eslint-disable-next-line
  events: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().array)
};

var _c;

$RefreshReg$(_c, "EventsPage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZXZlbnRzLjUzOTBmNTBmZDNhZDBlOTBiZTZlLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTs7O0FBR2UsU0FBU0csVUFBVCxPQUE2QztBQUFBOztBQUFBLE1BQXZCQyxNQUF1QixRQUF2QkEsTUFBdUI7QUFBQSxNQUFmQyxJQUFlLFFBQWZBLElBQWU7QUFBQSxNQUFUQyxLQUFTLFFBQVRBLEtBQVM7QUFFeEQsTUFBTUMsUUFBUSxHQUFHQyxJQUFJLENBQUNDLElBQUwsQ0FBVUgsS0FBSyxHQUFHSSxRQUFsQixDQUFqQjtBQUNBLHNCQUNJLDhEQUFDLHVEQUFEO0FBQUEsNEJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixFQUVLTixNQUFNLENBQUNPLE1BQVAsS0FBa0IsQ0FBbEIsaUJBQXVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRjVCLEVBSUtQLE1BQU0sQ0FBQ1EsR0FBUCxDQUFXLFVBQUFDLEdBQUc7QUFBQSwwQkFDWCw4REFBQywwREFBRDtBQUF3QixXQUFHLEVBQUVBO0FBQTdCLFNBQWdCQSxHQUFHLENBQUNDLEVBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEVztBQUFBLEtBQWQsQ0FKTCxFQVVLVCxJQUFJLEdBQUcsQ0FBUCxpQkFDRyw4REFBQyxJQUFEO0FBQU0sVUFBSSx5QkFBa0JBLElBQUksR0FBQyxDQUF2QixDQUFWO0FBQUEsNkJBQ0k7QUFBRyxpQkFBUyxFQUFDLGNBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFrQkg7S0FyQnVCRjtBQTBDeEJBLFVBQVUsQ0FBQ1ksU0FBWCxHQUF1QjtBQUNuQjtBQUNGWCxFQUFBQSxNQUFNLEVBQUVKLHlEQUFlZ0I7QUFGRixDQUF2QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9ldmVudHMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuXG5pbXBvcnQgRXZlbnRJdGVtIGZyb20gJ0AvY29tcG9uZW50cy9FdmVudEl0ZW0nXG5pbXBvcnQgTGF5b3V0IGZyb20gJ0AvY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgeyBBUElfVVJMIH0gZnJvbSAnQC9jb25maWcvaW5kZXgnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEV2ZW50c1BhZ2UoeyBldmVudHMsIHBhZ2UsIHRvdGFsIH0pIHtcblxuICAgIGNvbnN0IGxhc3RQYWdlID0gTWF0aC5jZWlsKHRvdGFsIC8gUEVSX1BBR0UpXG4gICAgcmV0dXJuIChcbiAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgIDxoMT5FdmVudHM8L2gxPlxuICAgICAgICAgICAge2V2ZW50cy5sZW5ndGggPT09IDAgJiYgPGgzPk5vIGV2ZW50cyB0byBzaG93PC9oMz59XG5cbiAgICAgICAgICAgIHtldmVudHMubWFwKGV2dCA9PiAoXG4gICAgICAgICAgICAgICAgPEV2ZW50SXRlbSBrZXk9e2V2dC5pZH0gZXZ0PXtldnR9IC8+XG4gICAgICAgICAgICApKX1cblxuICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIHtwYWdlID4gMSAmJiAoXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9ldmVudHM/cGFnZT0ke3BhZ2UtMX1gfT5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSdidG4tc2Vjb25kYXknPlByZXY8L2E+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC9MYXlvdXQ+XG4gICAgKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHsgcXVlcnk6IHtwYWdlID0gMSB9fSkge1xuXG4gICAgY29uc3Qgc3RhcnQgPSArcGFnZSA9PT0gMSA/IDAgOiAoK3BhZ2UgLSAxKSAqIFBFUl9QQUdFXG5cbiAgICBjb25zdCB0b3RhbFJlcyA9IGF3YWl0IGZldGNoKFxuICAgICAgICBgJHtBUElfVVJMfS9ldmVudHM/Y291bnRgXG4gICAgKVxuICAgIGNvbnN0IHRvdGFsID0gYXdhaXQgdG90YWxSZXMuanNvbigpXG5cbiAgICBjb25zdCBldmVudFJlcyA9IGF3YWl0IGZldGNoKFxuICAgICAgICBgJHtBUElfVVJMfS9ldmVudHM/X3NvcnQ9ZGF0ZTpBU0MmX2xpbWl0PSR7UEVSX1BBR0V9Jl9zdGFydD0ke3N0YXJ0fWBcbiAgICApXG4gICAgY29uc3QgZXZlbnRzID0gYXdhaXQgZXZlbnRSZXMuanNvbigpXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9wczogeyBldmVudHMsIHBhZ2U6ICtwYWdlLCB0b3RhbCB9XG4gICAgfVxufVxuXG5FdmVudHNQYWdlLnByb3BUeXBlcyA9IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgZXZlbnRzOiBQcm9wVHlwZXMuYXJyYXlcbn1cbiJdLCJuYW1lcyI6WyJQcm9wVHlwZXMiLCJFdmVudEl0ZW0iLCJMYXlvdXQiLCJFdmVudHNQYWdlIiwiZXZlbnRzIiwicGFnZSIsInRvdGFsIiwibGFzdFBhZ2UiLCJNYXRoIiwiY2VpbCIsIlBFUl9QQUdFIiwibGVuZ3RoIiwibWFwIiwiZXZ0IiwiaWQiLCJwcm9wVHlwZXMiLCJhcnJheSJdLCJzb3VyY2VSb290IjoiIn0=
"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSP": function() { return /* binding */ __N_SSP; },
/* harmony export */   "default": function() { return /* binding */ HomePage; }
/* harmony export */ });
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_EventItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/EventItem */ "./components/EventItem.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Layout */ "./components/Layout.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\higor.silverio\\Development\\DJ-Events\\dj-events-frontend\\pages\\index.js";





var __N_SSP = true;
function HomePage(_ref) {
  var _this = this;

  var events = _ref.events;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__.default, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h1", {
      children: "Upcoming Events"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, this), events.length === 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h3", {
      children: "No events to show"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 37
    }, this), events.map(function (evt) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_EventItem__WEBPACK_IMPORTED_MODULE_2__.default, {
        evt: evt
      }, evt.id, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, _this);
    }), events.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
      href: "/events",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
        className: "btn-secondary",
        children: "View All Events"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 9
  }, this);
}
_c = HomePage;
HomePage.propTypes = {
  // eslint-disable-next-line
  events: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array)
};

var _c;

$RefreshReg$(_c, "HomePage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZTc2NjA2YjZlMDE4MjU1Yzg3MWQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTs7O0FBS2UsU0FBU0ksUUFBVCxPQUE4QjtBQUFBOztBQUFBLE1BQVZDLE1BQVUsUUFBVkEsTUFBVTtBQUN6QyxzQkFDSSw4REFBQyx1REFBRDtBQUFBLDRCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosRUFFS0EsTUFBTSxDQUFDQyxNQUFQLEtBQWtCLENBQWxCLGlCQUF1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUY1QixFQUlLRCxNQUFNLENBQUNFLEdBQVAsQ0FBVyxVQUFBQyxHQUFHO0FBQUEsMEJBQ1gsOERBQUMsMERBQUQ7QUFBd0IsV0FBRyxFQUFFQTtBQUE3QixTQUFnQkEsR0FBRyxDQUFDQyxFQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRFc7QUFBQSxLQUFkLENBSkwsRUFRS0osTUFBTSxDQUFDQyxNQUFQLEdBQWdCLENBQWhCLGlCQUNHLDhEQUFDLGtEQUFEO0FBQU0sVUFBSSxFQUFDLFNBQVg7QUFBQSw2QkFDSTtBQUFHLGlCQUFTLEVBQUMsZUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFUUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWdCSDtLQWpCdUJGO0FBc0N4QkEsUUFBUSxDQUFDTSxTQUFULEdBQXFCO0FBQ2pCO0FBQ0FMLEVBQUFBLE1BQU0sRUFBRUoseURBQWVVO0FBRk4sQ0FBckIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuXG5pbXBvcnQgRXZlbnRJdGVtIGZyb20gJ0AvY29tcG9uZW50cy9FdmVudEl0ZW0nXG5pbXBvcnQgTGF5b3V0IGZyb20gJ0AvY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgeyBBUElfVVJMIH0gZnJvbSAnQC9jb25maWcvaW5kZXgnXG5cbmNvbnN0IFBFUl9QQUdFID0gMlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lUGFnZSh7IGV2ZW50cyB9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgIDxoMT5VcGNvbWluZyBFdmVudHM8L2gxPlxuICAgICAgICAgICAge2V2ZW50cy5sZW5ndGggPT09IDAgJiYgPGgzPk5vIGV2ZW50cyB0byBzaG93PC9oMz59XG5cbiAgICAgICAgICAgIHtldmVudHMubWFwKGV2dCA9PiAoXG4gICAgICAgICAgICAgICAgPEV2ZW50SXRlbSBrZXk9e2V2dC5pZH0gZXZ0PXtldnR9IC8+XG4gICAgICAgICAgICApKX1cblxuICAgICAgICAgICAge2V2ZW50cy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2V2ZW50c1wiPlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4tc2Vjb25kYXJ5XCI+VmlldyBBbGwgRXZlbnRzPC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvTGF5b3V0PlxuICAgIClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyh7IHF1ZXJ5OiB7cGFnZSA9IDEgfX0pIHtcblxuICAgIGNvbnN0IHN0YXJ0ID0gK3BhZ2UgPT09IDEgPyAwIDogKCtwYWdlIC0gMSkgKiBQRVJfUEFHRVxuXG4gICAgY29uc3QgdG90YWxSZXMgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgYCR7QVBJX1VSTH0vZXZlbnRzP2NvdW50YFxuICAgIClcbiAgICBjb25zdCB0b3RhbCA9IGF3YWl0IHRvdGFsUmVzLmpzb24oKVxuXG4gICAgY29uc3QgZXZlbnRSZXMgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgYCR7QVBJX1VSTH0vZXZlbnRzP19zb3J0PWRhdGU6QVNDJl9saW1pdD0ke1BFUl9QQUdFfSZfc3RhcnQ9JHtzdGFydH1gXG4gICAgKVxuICAgIGNvbnN0IGV2ZW50cyA9IGF3YWl0IGV2ZW50UmVzLmpzb24oKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvcHM6IHsgZXZlbnRzLCBwYWdlOiArcGFnZSwgdG90YWwgfVxuICAgIH1cbn1cblxuSG9tZVBhZ2UucHJvcFR5cGVzID0ge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgIGV2ZW50czogUHJvcFR5cGVzLmFycmF5XG59XG4iXSwibmFtZXMiOlsiTGluayIsIlByb3BUeXBlcyIsIkV2ZW50SXRlbSIsIkxheW91dCIsIkhvbWVQYWdlIiwiZXZlbnRzIiwibGVuZ3RoIiwibWFwIiwiZXZ0IiwiaWQiLCJwcm9wVHlwZXMiLCJhcnJheSJdLCJzb3VyY2VSb290IjoiIn0=
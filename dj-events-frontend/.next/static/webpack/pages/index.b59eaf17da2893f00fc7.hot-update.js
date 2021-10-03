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





var PER_PAGE = 2;
var __N_SSP = true;
function HomePage(_ref) {
  var _this = this;

  var events = _ref.events,
      page = _ref.page,
      total = _ref.total;
  var lastPage = Math.ceil(total / PER_PAGE);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__.default, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h1", {
      children: "Upcoming Events"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, this), events.length === 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h3", {
      children: "No events to show"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 37
    }, this), events.map(function (evt) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_EventItem__WEBPACK_IMPORTED_MODULE_2__.default, {
        evt: evt
      }, evt.id, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }, _this);
    }), events.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
      href: "/events",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
        className: "btn-secondary",
        children: "View All Events"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 17
    }, this), page > 1 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
      href: "/events?page=".concat(page - 1),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
        className: "btn-seconday",
        children: "Prev"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYjU5ZWFmMTdkYTI4OTNmMDBmYzcuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTs7QUFHQSxJQUFNSSxRQUFRLEdBQUcsQ0FBakI7O0FBRWUsU0FBU0MsUUFBVCxPQUEyQztBQUFBOztBQUFBLE1BQXZCQyxNQUF1QixRQUF2QkEsTUFBdUI7QUFBQSxNQUFmQyxJQUFlLFFBQWZBLElBQWU7QUFBQSxNQUFUQyxLQUFTLFFBQVRBLEtBQVM7QUFFdEQsTUFBTUMsUUFBUSxHQUFHQyxJQUFJLENBQUNDLElBQUwsQ0FBVUgsS0FBSyxHQUFHSixRQUFsQixDQUFqQjtBQUVBLHNCQUNJLDhEQUFDLHVEQUFEO0FBQUEsNEJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixFQUVLRSxNQUFNLENBQUNNLE1BQVAsS0FBa0IsQ0FBbEIsaUJBQXVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRjVCLEVBSUtOLE1BQU0sQ0FBQ08sR0FBUCxDQUFXLFVBQUFDLEdBQUc7QUFBQSwwQkFDWCw4REFBQywwREFBRDtBQUF3QixXQUFHLEVBQUVBO0FBQTdCLFNBQWdCQSxHQUFHLENBQUNDLEVBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEVztBQUFBLEtBQWQsQ0FKTCxFQVFLVCxNQUFNLENBQUNNLE1BQVAsR0FBZ0IsQ0FBaEIsaUJBQ0csOERBQUMsa0RBQUQ7QUFBTSxVQUFJLEVBQUMsU0FBWDtBQUFBLDZCQUNJO0FBQUcsaUJBQVMsRUFBQyxlQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVRSLEVBZUtMLElBQUksR0FBRyxDQUFQLGlCQUNHLDhEQUFDLGtEQUFEO0FBQU0sVUFBSSx5QkFBa0JBLElBQUksR0FBQyxDQUF2QixDQUFWO0FBQUEsNkJBQ0k7QUFBRyxpQkFBUyxFQUFDLGNBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBaEJSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBdUJIO0tBM0J1QkY7QUFnRHhCQSxRQUFRLENBQUNXLFNBQVQsR0FBcUI7QUFDakI7QUFDQVYsRUFBQUEsTUFBTSxFQUFFTCx5REFBZWdCO0FBRk4sQ0FBckIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuXG5pbXBvcnQgRXZlbnRJdGVtIGZyb20gJ0AvY29tcG9uZW50cy9FdmVudEl0ZW0nXG5pbXBvcnQgTGF5b3V0IGZyb20gJ0AvY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgeyBBUElfVVJMIH0gZnJvbSAnQC9jb25maWcvaW5kZXgnXG5cbmNvbnN0IFBFUl9QQUdFID0gMlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lUGFnZSh7IGV2ZW50cywgcGFnZSwgdG90YWwgfSkge1xuXG4gICAgY29uc3QgbGFzdFBhZ2UgPSBNYXRoLmNlaWwodG90YWwgLyBQRVJfUEFHRSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICA8aDE+VXBjb21pbmcgRXZlbnRzPC9oMT5cbiAgICAgICAgICAgIHtldmVudHMubGVuZ3RoID09PSAwICYmIDxoMz5ObyBldmVudHMgdG8gc2hvdzwvaDM+fVxuXG4gICAgICAgICAgICB7ZXZlbnRzLm1hcChldnQgPT4gKFxuICAgICAgICAgICAgICAgIDxFdmVudEl0ZW0ga2V5PXtldnQuaWR9IGV2dD17ZXZ0fSAvPlxuICAgICAgICAgICAgKSl9XG5cbiAgICAgICAgICAgIHtldmVudHMubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9ldmVudHNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuLXNlY29uZGFyeVwiPlZpZXcgQWxsIEV2ZW50czwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICApfVxuXG5cbiAgICAgICAgICAgIHtwYWdlID4gMSAmJiAoXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9ldmVudHM/cGFnZT0ke3BhZ2UtMX1gfT5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSdidG4tc2Vjb25kYXknPlByZXY8L2E+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC9MYXlvdXQ+XG4gICAgKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHsgcXVlcnk6IHtwYWdlID0gMSB9fSkge1xuXG4gICAgY29uc3Qgc3RhcnQgPSArcGFnZSA9PT0gMSA/IDAgOiAoK3BhZ2UgLSAxKSAqIFBFUl9QQUdFXG5cbiAgICBjb25zdCB0b3RhbFJlcyA9IGF3YWl0IGZldGNoKFxuICAgICAgICBgJHtBUElfVVJMfS9ldmVudHM/Y291bnRgXG4gICAgKVxuICAgIGNvbnN0IHRvdGFsID0gYXdhaXQgdG90YWxSZXMuanNvbigpXG5cbiAgICBjb25zdCBldmVudFJlcyA9IGF3YWl0IGZldGNoKFxuICAgICAgICBgJHtBUElfVVJMfS9ldmVudHM/X3NvcnQ9ZGF0ZTpBU0MmX2xpbWl0PSR7UEVSX1BBR0V9Jl9zdGFydD0ke3N0YXJ0fWBcbiAgICApXG4gICAgY29uc3QgZXZlbnRzID0gYXdhaXQgZXZlbnRSZXMuanNvbigpXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9wczogeyBldmVudHMsIHBhZ2U6ICtwYWdlLCB0b3RhbCB9XG4gICAgfVxufVxuXG5Ib21lUGFnZS5wcm9wVHlwZXMgPSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgZXZlbnRzOiBQcm9wVHlwZXMuYXJyYXlcbn1cbiJdLCJuYW1lcyI6WyJMaW5rIiwiUHJvcFR5cGVzIiwiRXZlbnRJdGVtIiwiTGF5b3V0IiwiUEVSX1BBR0UiLCJIb21lUGFnZSIsImV2ZW50cyIsInBhZ2UiLCJ0b3RhbCIsImxhc3RQYWdlIiwiTWF0aCIsImNlaWwiLCJsZW5ndGgiLCJtYXAiLCJldnQiLCJpZCIsInByb3BUeXBlcyIsImFycmF5Il0sInNvdXJjZVJvb3QiOiIifQ==
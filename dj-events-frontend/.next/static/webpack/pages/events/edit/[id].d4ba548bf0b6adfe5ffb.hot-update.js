"use strict";
self["webpackHotUpdate_N_E"]("pages/events/edit/[id]",{

/***/ "./components/Modal.js":
/*!*****************************!*\
  !*** ./components/Modal.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Modal; }
/* harmony export */ });
/* harmony import */ var _styles_Modal_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/styles/Modal.module.css */ "./styles/Modal.module.css");
/* harmony import */ var _styles_Modal_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Modal_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\higor.silverio\\Development\\DJ-Events\\dj-events-frontend\\components\\Modal.js",
    _s = $RefreshSig$();






function Modal(_ref) {
  _s();

  var show = _ref.show,
      onClose = _ref.onClose,
      children = _ref.children,
      title = _ref.title;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      isBrowser = _useState[0],
      setIsBrowser = _useState[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setIsBrowser(true);
    var body = document.body;
    var html = document.documentElement;
    var height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
  });

  var handleClose = function handleClose(e) {
    e.preventDefault();
    onClose();
  };

  var overlayStyle = {
    height: height,
    width: width
  };
  console.log(overlayStyle);
  var modalContent = show ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: (_styles_Modal_module_css__WEBPACK_IMPORTED_MODULE_3___default().overlay),
    style: overlayStyle,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: (_styles_Modal_module_css__WEBPACK_IMPORTED_MODULE_3___default().modal),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: (_styles_Modal_module_css__WEBPACK_IMPORTED_MODULE_3___default().header),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
          href: "#",
          onClick: handleClose,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaTimes, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, this), title && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 19
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: (_styles_Modal_module_css__WEBPACK_IMPORTED_MODULE_3___default().body),
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 5
  }, this) : null;

  if (isBrowser) {
    return /*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_1___default().createPortal(modalContent, document.getElementById('modal-root'));
  } else {
    return null;
  }
}

_s(Modal, "pnrCiumIYbqf1FD6ZsJEw+RYujA=");

_c = Modal;

var _c;

$RefreshReg$(_c, "Modal");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZXZlbnRzL2VkaXQvW2lkXS5kNGJhNTQ4YmYwYjZhZGZlNWZmYi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsU0FBU0ssS0FBVCxPQUFtRDtBQUFBOztBQUFBLE1BQWxDQyxJQUFrQyxRQUFsQ0EsSUFBa0M7QUFBQSxNQUE1QkMsT0FBNEIsUUFBNUJBLE9BQTRCO0FBQUEsTUFBbkJDLFFBQW1CLFFBQW5CQSxRQUFtQjtBQUFBLE1BQVRDLEtBQVMsUUFBVEEsS0FBUzs7QUFDaEUsa0JBQWtDUiwrQ0FBUSxDQUFDLEtBQUQsQ0FBMUM7QUFBQSxNQUFPUyxTQUFQO0FBQUEsTUFBa0JDLFlBQWxCOztBQUVBVCxFQUFBQSxnREFBUyxDQUFDLFlBQU07QUFDZFMsSUFBQUEsWUFBWSxDQUFDLElBQUQsQ0FBWjtBQUNBLFFBQU1DLElBQUksR0FBR0MsUUFBUSxDQUFDRCxJQUF0QjtBQUNBLFFBQU1FLElBQUksR0FBR0QsUUFBUSxDQUFDRSxlQUF0QjtBQUNBLFFBQU1DLE1BQU0sR0FBR0MsSUFBSSxDQUFDQyxHQUFMLENBQVVOLElBQUksQ0FBQ08sWUFBZixFQUE2QlAsSUFBSSxDQUFDUSxZQUFsQyxFQUFnRE4sSUFBSSxDQUFDTyxZQUFyRCxFQUFtRVAsSUFBSSxDQUFDSyxZQUF4RSxFQUFzRkwsSUFBSSxDQUFDTSxZQUEzRixDQUFmO0FBQ0QsR0FMUSxDQUFUOztBQU9BLE1BQU1FLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLENBQUQsRUFBTztBQUN6QkEsSUFBQUEsQ0FBQyxDQUFDQyxjQUFGO0FBQ0FqQixJQUFBQSxPQUFPO0FBQ1IsR0FIRDs7QUFLQSxNQUFNa0IsWUFBWSxHQUFHO0FBQ25CVCxJQUFBQSxNQUFNLEVBQUVBLE1BRFc7QUFFbkJVLElBQUFBLEtBQUssRUFBRUE7QUFGWSxHQUFyQjtBQUtBQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUgsWUFBWjtBQUVBLE1BQU1JLFlBQVksR0FBR3ZCLElBQUksZ0JBQ3ZCO0FBQUssYUFBUyxFQUFFTix5RUFBaEI7QUFBZ0MsU0FBSyxFQUFFeUIsWUFBdkM7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBRXpCLHVFQUFoQjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBRUEsd0VBQWhCO0FBQUEsK0JBQ0U7QUFBRyxjQUFJLEVBQUMsR0FBUjtBQUFZLGlCQUFPLEVBQUVzQixXQUFyQjtBQUFBLGlDQUNFLDhEQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLEVBTUdiLEtBQUssaUJBQUk7QUFBQSxrQkFBTUE7QUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTlosZUFPRTtBQUFLLGlCQUFTLEVBQUVULHNFQUFoQjtBQUFBLGtCQUE4QlE7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFEdUIsR0FZckIsSUFaSjs7QUFjQSxNQUFJRSxTQUFKLEVBQWU7QUFDYix3QkFBT1AsNkRBQUEsQ0FBc0IwQixZQUF0QixFQUFvQ2hCLFFBQVEsQ0FBQ3FCLGNBQVQsQ0FBd0IsWUFBeEIsQ0FBcEMsQ0FBUDtBQUNELEdBRkQsTUFFTztBQUNMLFdBQU8sSUFBUDtBQUNEO0FBQ0Y7O0dBekN1QjdCOztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL01vZGFsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnQC9zdHlsZXMvTW9kYWwubW9kdWxlLmNzcydcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgUmVhY3RET00gIGZyb20gJ3JlYWN0LWRvbSdcclxuaW1wb3J0IHsgRmFUaW1lcyB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW9kYWwoeyBzaG93LCBvbkNsb3NlLCBjaGlsZHJlbiwgdGl0bGUgfSkge1xyXG4gIGNvbnN0IFtpc0Jyb3dzZXIsIHNldElzQnJvd3Nlcl0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldElzQnJvd3Nlcih0cnVlKVxyXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHlcclxuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnRcclxuICAgIGNvbnN0IGhlaWdodCA9IE1hdGgubWF4KCBib2R5LnNjcm9sbEhlaWdodCwgYm9keS5vZmZzZXRIZWlnaHQsIGh0bWwuY2xpZW50SGVpZ2h0LCBodG1sLnNjcm9sbEhlaWdodCwgaHRtbC5vZmZzZXRIZWlnaHQgKTtcclxuICB9KVxyXG5cclxuICBjb25zdCBoYW5kbGVDbG9zZSA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIG9uQ2xvc2UoKVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgb3ZlcmxheVN0eWxlID0ge1xyXG4gICAgaGVpZ2h0OiBoZWlnaHQsXHJcbiAgICB3aWR0aDogd2lkdGgsXHJcbiAgfTtcclxuXHJcbiAgY29uc29sZS5sb2cob3ZlcmxheVN0eWxlKVxyXG5cclxuICBjb25zdCBtb2RhbENvbnRlbnQgPSBzaG93ID8gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5vdmVybGF5fSBzdHlsZT17b3ZlcmxheVN0eWxlfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PlxyXG4gICAgICAgICAgPGEgaHJlZj0nIycgb25DbGljaz17aGFuZGxlQ2xvc2V9PlxyXG4gICAgICAgICAgICA8RmFUaW1lcyAvPiBcclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7dGl0bGUgJiYgPGRpdj57dGl0bGV9PC9kaXY+fVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm9keX0+e2NoaWxkcmVufTwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICkgOiBudWxsXHJcblxyXG4gIGlmIChpc0Jyb3dzZXIpIHtcclxuICAgIHJldHVybiBSZWFjdERPTS5jcmVhdGVQb3J0YWwobW9kYWxDb250ZW50LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwtcm9vdCcpKVxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gbnVsbFxyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsic3R5bGVzIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJSZWFjdERPTSIsIkZhVGltZXMiLCJNb2RhbCIsInNob3ciLCJvbkNsb3NlIiwiY2hpbGRyZW4iLCJ0aXRsZSIsImlzQnJvd3NlciIsInNldElzQnJvd3NlciIsImJvZHkiLCJkb2N1bWVudCIsImh0bWwiLCJkb2N1bWVudEVsZW1lbnQiLCJoZWlnaHQiLCJNYXRoIiwibWF4Iiwic2Nyb2xsSGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwiaGFuZGxlQ2xvc2UiLCJlIiwicHJldmVudERlZmF1bHQiLCJvdmVybGF5U3R5bGUiLCJ3aWR0aCIsImNvbnNvbGUiLCJsb2ciLCJtb2RhbENvbnRlbnQiLCJvdmVybGF5IiwibW9kYWwiLCJoZWFkZXIiLCJjcmVhdGVQb3J0YWwiLCJnZXRFbGVtZW50QnlJZCJdLCJzb3VyY2VSb290IjoiIn0=
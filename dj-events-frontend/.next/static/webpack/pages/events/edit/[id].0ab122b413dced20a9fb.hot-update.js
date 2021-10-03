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

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
      height = _useState2[0],
      setHeight = _useState2[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setIsBrowser(true);
    var body = document.body;
    var html = document.documentElement;
    setHeight(Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight));
    console.log(height);
  });

  var handleClose = function handleClose(e) {
    e.preventDefault();
    onClose();
  };

  var modalContent = show ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: (_styles_Modal_module_css__WEBPACK_IMPORTED_MODULE_3___default().overlay),
    style: {
      height: height
    },
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: (_styles_Modal_module_css__WEBPACK_IMPORTED_MODULE_3___default().modal),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: (_styles_Modal_module_css__WEBPACK_IMPORTED_MODULE_3___default().header),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
          href: "#",
          onClick: handleClose,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaTimes, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, this), title && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 19
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: (_styles_Modal_module_css__WEBPACK_IMPORTED_MODULE_3___default().body),
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 5
  }, this) : null;

  if (isBrowser) {
    return /*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_1___default().createPortal(modalContent, document.getElementById('modal-root'));
  } else {
    return null;
  }
}

_s(Modal, "yl/+qHqLRiJ5/7EAA3X6LQOBgpA=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZXZlbnRzL2VkaXQvW2lkXS4wYWIxMjJiNDEzZGNlZDIwYTlmYi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsU0FBU0ssS0FBVCxPQUFtRDtBQUFBOztBQUFBLE1BQWxDQyxJQUFrQyxRQUFsQ0EsSUFBa0M7QUFBQSxNQUE1QkMsT0FBNEIsUUFBNUJBLE9BQTRCO0FBQUEsTUFBbkJDLFFBQW1CLFFBQW5CQSxRQUFtQjtBQUFBLE1BQVRDLEtBQVMsUUFBVEEsS0FBUzs7QUFDaEUsa0JBQWtDUiwrQ0FBUSxDQUFDLEtBQUQsQ0FBMUM7QUFBQSxNQUFPUyxTQUFQO0FBQUEsTUFBa0JDLFlBQWxCOztBQUVBLG1CQUE0QlYsK0NBQVEsQ0FBQyxDQUFELENBQXBDO0FBQUEsTUFBT1csTUFBUDtBQUFBLE1BQWVDLFNBQWY7O0FBRUFYLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNkUyxJQUFBQSxZQUFZLENBQUMsSUFBRCxDQUFaO0FBQ0EsUUFBTUcsSUFBSSxHQUFHQyxRQUFRLENBQUNELElBQXRCO0FBQ0EsUUFBTUUsSUFBSSxHQUFHRCxRQUFRLENBQUNFLGVBQXRCO0FBQ0FKLElBQUFBLFNBQVMsQ0FBQ0ssSUFBSSxDQUFDQyxHQUFMLENBQ1JMLElBQUksQ0FBQ00sWUFERyxFQUVSTixJQUFJLENBQUNPLFlBRkcsRUFHUkwsSUFBSSxDQUFDTSxZQUhHLEVBSVJOLElBQUksQ0FBQ0ksWUFKRyxFQUtSSixJQUFJLENBQUNLLFlBTEcsQ0FBRCxDQUFUO0FBUUFFLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZWixNQUFaO0FBQ0QsR0FiUSxDQUFUOztBQWVBLE1BQU1hLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLENBQUQsRUFBTztBQUN6QkEsSUFBQUEsQ0FBQyxDQUFDQyxjQUFGO0FBQ0FwQixJQUFBQSxPQUFPO0FBQ1IsR0FIRDs7QUFLQSxNQUFNcUIsWUFBWSxHQUFHdEIsSUFBSSxnQkFDdkI7QUFBSyxhQUFTLEVBQUVOLHlFQUFoQjtBQUFnQyxTQUFLLEVBQUU7QUFBQ1ksTUFBQUEsTUFBTSxFQUFOQTtBQUFELEtBQXZDO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUVaLHVFQUFoQjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBRUEsd0VBQWhCO0FBQUEsK0JBQ0U7QUFBRyxjQUFJLEVBQUMsR0FBUjtBQUFZLGlCQUFPLEVBQUV5QixXQUFyQjtBQUFBLGlDQUNFLDhEQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLEVBTUdoQixLQUFLLGlCQUFJO0FBQUEsa0JBQU1BO0FBQU47QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5aLGVBT0U7QUFBSyxpQkFBUyxFQUFFVCxzRUFBaEI7QUFBQSxrQkFBOEJRO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRHVCLEdBWXJCLElBWko7O0FBY0EsTUFBSUUsU0FBSixFQUFlO0FBQ2Isd0JBQU9QLDZEQUFBLENBQXNCeUIsWUFBdEIsRUFBb0NiLFFBQVEsQ0FBQ2tCLGNBQVQsQ0FBd0IsWUFBeEIsQ0FBcEMsQ0FBUDtBQUNELEdBRkQsTUFFTztBQUNMLFdBQU8sSUFBUDtBQUNEO0FBQ0Y7O0dBNUN1QjVCOztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL01vZGFsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnQC9zdHlsZXMvTW9kYWwubW9kdWxlLmNzcydcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgUmVhY3RET00gIGZyb20gJ3JlYWN0LWRvbSdcclxuaW1wb3J0IHsgRmFUaW1lcyB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW9kYWwoeyBzaG93LCBvbkNsb3NlLCBjaGlsZHJlbiwgdGl0bGUgfSkge1xyXG4gIGNvbnN0IFtpc0Jyb3dzZXIsIHNldElzQnJvd3Nlcl0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgY29uc3QgW2hlaWdodCwgc2V0SGVpZ2h0XSA9IHVzZVN0YXRlKDApXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRJc0Jyb3dzZXIodHJ1ZSlcclxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5XHJcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50XHJcbiAgICBzZXRIZWlnaHQoTWF0aC5tYXgoXHJcbiAgICAgIGJvZHkuc2Nyb2xsSGVpZ2h0LCBcclxuICAgICAgYm9keS5vZmZzZXRIZWlnaHQsIFxyXG4gICAgICBodG1sLmNsaWVudEhlaWdodCwgXHJcbiAgICAgIGh0bWwuc2Nyb2xsSGVpZ2h0LCBcclxuICAgICAgaHRtbC5vZmZzZXRIZWlnaHRcclxuICAgICAgKVxyXG4gICAgKVxyXG4gICAgY29uc29sZS5sb2coaGVpZ2h0KVxyXG4gIH0pXHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgb25DbG9zZSgpXHJcbiAgfVxyXG5cclxuICBjb25zdCBtb2RhbENvbnRlbnQgPSBzaG93ID8gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5vdmVybGF5fSBzdHlsZT17e2hlaWdodH19PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+XHJcbiAgICAgICAgICA8YSBocmVmPScjJyBvbkNsaWNrPXtoYW5kbGVDbG9zZX0+XHJcbiAgICAgICAgICAgIDxGYVRpbWVzIC8+IFxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHt0aXRsZSAmJiA8ZGl2Pnt0aXRsZX08L2Rpdj59XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib2R5fT57Y2hpbGRyZW59PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKSA6IG51bGxcclxuXHJcbiAgaWYgKGlzQnJvd3Nlcikge1xyXG4gICAgcmV0dXJuIFJlYWN0RE9NLmNyZWF0ZVBvcnRhbChtb2RhbENvbnRlbnQsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbC1yb290JykpXHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBudWxsXHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlJlYWN0RE9NIiwiRmFUaW1lcyIsIk1vZGFsIiwic2hvdyIsIm9uQ2xvc2UiLCJjaGlsZHJlbiIsInRpdGxlIiwiaXNCcm93c2VyIiwic2V0SXNCcm93c2VyIiwiaGVpZ2h0Iiwic2V0SGVpZ2h0IiwiYm9keSIsImRvY3VtZW50IiwiaHRtbCIsImRvY3VtZW50RWxlbWVudCIsIk1hdGgiLCJtYXgiLCJzY3JvbGxIZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlQ2xvc2UiLCJlIiwicHJldmVudERlZmF1bHQiLCJtb2RhbENvbnRlbnQiLCJvdmVybGF5IiwibW9kYWwiLCJoZWFkZXIiLCJjcmVhdGVQb3J0YWwiLCJnZXRFbGVtZW50QnlJZCJdLCJzb3VyY2VSb290IjoiIn0=
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
      title = _ref.title,
      height = _ref.height,
      width = _ref.width;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      isBrowser = _useState[0],
      setIsBrowser = _useState[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    return setIsBrowser(true);
  });

  var handleClose = function handleClose(e) {
    e.preventDefault();
    onClose();
  };

  var overlayStyle = {
    height: {
      height: height
    },
    width: {
      width: width
    }
  };
  console.log(height, width);
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
            lineNumber: 28,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, this), title && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 19
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: (_styles_Modal_module_css__WEBPACK_IMPORTED_MODULE_3___default().body),
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZXZlbnRzL2VkaXQvW2lkXS5lMDc0ZDEwN2M1Nzg0ZTgzNjMwMS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsU0FBU0ssS0FBVCxPQUFnRTtBQUFBOztBQUFBLE1BQWhEQyxJQUFnRCxRQUFoREEsSUFBZ0Q7QUFBQSxNQUExQ0MsT0FBMEMsUUFBMUNBLE9BQTBDO0FBQUEsTUFBakNDLFFBQWlDLFFBQWpDQSxRQUFpQztBQUFBLE1BQXZCQyxLQUF1QixRQUF2QkEsS0FBdUI7QUFBQSxNQUFoQkMsTUFBZ0IsUUFBaEJBLE1BQWdCO0FBQUEsTUFBUkMsS0FBUSxRQUFSQSxLQUFROztBQUM3RSxrQkFBa0NWLCtDQUFRLENBQUMsS0FBRCxDQUExQztBQUFBLE1BQU9XLFNBQVA7QUFBQSxNQUFrQkMsWUFBbEI7O0FBRUFYLEVBQUFBLGdEQUFTLENBQUM7QUFBQSxXQUFNVyxZQUFZLENBQUMsSUFBRCxDQUFsQjtBQUFBLEdBQUQsQ0FBVDs7QUFFQSxNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxDQUFELEVBQU87QUFDekJBLElBQUFBLENBQUMsQ0FBQ0MsY0FBRjtBQUNBVCxJQUFBQSxPQUFPO0FBQ1IsR0FIRDs7QUFLQSxNQUFNVSxZQUFZLEdBQUc7QUFDbkJQLElBQUFBLE1BQU0sRUFBRTtBQUFDQSxNQUFBQSxNQUFNLEVBQU5BO0FBQUQsS0FEVztBQUVuQkMsSUFBQUEsS0FBSyxFQUFFO0FBQUNBLE1BQUFBLEtBQUssRUFBTEE7QUFBRDtBQUZZLEdBQXJCO0FBS0FPLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZVCxNQUFaLEVBQW9CQyxLQUFwQjtBQUVBLE1BQU1TLFlBQVksR0FBR2QsSUFBSSxnQkFDdkI7QUFBSyxhQUFTLEVBQUVOLHlFQUFoQjtBQUFnQyxTQUFLLEVBQUVpQixZQUF2QztBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFFakIsdUVBQWhCO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFFQSx3RUFBaEI7QUFBQSwrQkFDRTtBQUFHLGNBQUksRUFBQyxHQUFSO0FBQVksaUJBQU8sRUFBRWMsV0FBckI7QUFBQSxpQ0FDRSw4REFBQyxtREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixFQU1HTCxLQUFLLGlCQUFJO0FBQUEsa0JBQU1BO0FBQU47QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5aLGVBT0U7QUFBSyxpQkFBUyxFQUFFVCxzRUFBaEI7QUFBQSxrQkFBOEJRO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRHVCLEdBWXJCLElBWko7O0FBY0EsTUFBSUksU0FBSixFQUFlO0FBQ2Isd0JBQU9ULDZEQUFBLENBQXNCaUIsWUFBdEIsRUFBb0NNLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixZQUF4QixDQUFwQyxDQUFQO0FBQ0QsR0FGRCxNQUVPO0FBQ0wsV0FBTyxJQUFQO0FBQ0Q7QUFDRjs7R0FwQ3VCdEI7O0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTW9kYWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICdAL3N0eWxlcy9Nb2RhbC5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBSZWFjdERPTSAgZnJvbSAncmVhY3QtZG9tJ1xyXG5pbXBvcnQgeyBGYVRpbWVzIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNb2RhbCh7c2hvdywgb25DbG9zZSwgY2hpbGRyZW4sIHRpdGxlLCBoZWlnaHQsIHdpZHRofSkge1xyXG4gIGNvbnN0IFtpc0Jyb3dzZXIsIHNldElzQnJvd3Nlcl0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHNldElzQnJvd3Nlcih0cnVlKSlcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBvbkNsb3NlKClcclxuICB9XHJcblxyXG4gIGNvbnN0IG92ZXJsYXlTdHlsZSA9IHtcclxuICAgIGhlaWdodDoge2hlaWdodH0sXHJcbiAgICB3aWR0aDoge3dpZHRofSxcclxuICB9O1xyXG5cclxuICBjb25zb2xlLmxvZyhoZWlnaHQsIHdpZHRoKVxyXG5cclxuICBjb25zdCBtb2RhbENvbnRlbnQgPSBzaG93ID8gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5vdmVybGF5fSBzdHlsZT17b3ZlcmxheVN0eWxlfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PlxyXG4gICAgICAgICAgPGEgaHJlZj0nIycgb25DbGljaz17aGFuZGxlQ2xvc2V9PlxyXG4gICAgICAgICAgICA8RmFUaW1lcyAvPiBcclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7dGl0bGUgJiYgPGRpdj57dGl0bGV9PC9kaXY+fVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm9keX0+e2NoaWxkcmVufTwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICkgOiBudWxsXHJcblxyXG4gIGlmIChpc0Jyb3dzZXIpIHtcclxuICAgIHJldHVybiBSZWFjdERPTS5jcmVhdGVQb3J0YWwobW9kYWxDb250ZW50LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwtcm9vdCcpKVxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gbnVsbFxyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsic3R5bGVzIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJSZWFjdERPTSIsIkZhVGltZXMiLCJNb2RhbCIsInNob3ciLCJvbkNsb3NlIiwiY2hpbGRyZW4iLCJ0aXRsZSIsImhlaWdodCIsIndpZHRoIiwiaXNCcm93c2VyIiwic2V0SXNCcm93c2VyIiwiaGFuZGxlQ2xvc2UiLCJlIiwicHJldmVudERlZmF1bHQiLCJvdmVybGF5U3R5bGUiLCJjb25zb2xlIiwibG9nIiwibW9kYWxDb250ZW50Iiwib3ZlcmxheSIsIm1vZGFsIiwiaGVhZGVyIiwiYm9keSIsImNyZWF0ZVBvcnRhbCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwic291cmNlUm9vdCI6IiJ9
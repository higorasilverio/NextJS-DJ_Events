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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZXZlbnRzL2VkaXQvW2lkXS44NTVmY2RmZmU3YzcyYTllODMxMi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsU0FBU0ssS0FBVCxPQUFnRTtBQUFBOztBQUFBLE1BQWhEQyxJQUFnRCxRQUFoREEsSUFBZ0Q7QUFBQSxNQUExQ0MsT0FBMEMsUUFBMUNBLE9BQTBDO0FBQUEsTUFBakNDLFFBQWlDLFFBQWpDQSxRQUFpQztBQUFBLE1BQXZCQyxLQUF1QixRQUF2QkEsS0FBdUI7QUFBQSxNQUFoQkMsTUFBZ0IsUUFBaEJBLE1BQWdCO0FBQUEsTUFBUkMsS0FBUSxRQUFSQSxLQUFROztBQUM3RSxrQkFBa0NWLCtDQUFRLENBQUMsS0FBRCxDQUExQztBQUFBLE1BQU9XLFNBQVA7QUFBQSxNQUFrQkMsWUFBbEI7O0FBRUFYLEVBQUFBLGdEQUFTLENBQUM7QUFBQSxXQUFNVyxZQUFZLENBQUMsSUFBRCxDQUFsQjtBQUFBLEdBQUQsQ0FBVDs7QUFFQSxNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxDQUFELEVBQU87QUFDekJBLElBQUFBLENBQUMsQ0FBQ0MsY0FBRjtBQUNBVCxJQUFBQSxPQUFPO0FBQ1IsR0FIRDs7QUFLQSxNQUFNVSxZQUFZLEdBQUc7QUFDbkJQLElBQUFBLE1BQU0sRUFBRTtBQUFDQSxNQUFBQSxNQUFNLEVBQU5BO0FBQUQsS0FEVztBQUVuQkMsSUFBQUEsS0FBSyxFQUFFO0FBQUNBLE1BQUFBLEtBQUssRUFBTEE7QUFBRDtBQUZZLEdBQXJCO0FBS0FPLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixZQUFaO0FBRUEsTUFBTUcsWUFBWSxHQUFHZCxJQUFJLGdCQUN2QjtBQUFLLGFBQVMsRUFBRU4seUVBQWhCO0FBQWdDLFNBQUssRUFBRWlCLFlBQXZDO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUVqQix1RUFBaEI7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLEVBQUVBLHdFQUFoQjtBQUFBLCtCQUNFO0FBQUcsY0FBSSxFQUFDLEdBQVI7QUFBWSxpQkFBTyxFQUFFYyxXQUFyQjtBQUFBLGlDQUNFLDhEQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLEVBTUdMLEtBQUssaUJBQUk7QUFBQSxrQkFBTUE7QUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTlosZUFPRTtBQUFLLGlCQUFTLEVBQUVULHNFQUFoQjtBQUFBLGtCQUE4QlE7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFEdUIsR0FZckIsSUFaSjs7QUFjQSxNQUFJSSxTQUFKLEVBQWU7QUFDYix3QkFBT1QsNkRBQUEsQ0FBc0JpQixZQUF0QixFQUFvQ00sUUFBUSxDQUFDQyxjQUFULENBQXdCLFlBQXhCLENBQXBDLENBQVA7QUFDRCxHQUZELE1BRU87QUFDTCxXQUFPLElBQVA7QUFDRDtBQUNGOztHQXBDdUJ0Qjs7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nb2RhbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJ0Avc3R5bGVzL01vZGFsLm1vZHVsZS5jc3MnXHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFJlYWN0RE9NICBmcm9tICdyZWFjdC1kb20nXHJcbmltcG9ydCB7IEZhVGltZXMgfSBmcm9tICdyZWFjdC1pY29ucy9mYSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1vZGFsKHtzaG93LCBvbkNsb3NlLCBjaGlsZHJlbiwgdGl0bGUsIGhlaWdodCwgd2lkdGh9KSB7XHJcbiAgY29uc3QgW2lzQnJvd3Nlciwgc2V0SXNCcm93c2VyXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4gc2V0SXNCcm93c2VyKHRydWUpKVxyXG5cclxuICBjb25zdCBoYW5kbGVDbG9zZSA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIG9uQ2xvc2UoKVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgb3ZlcmxheVN0eWxlID0ge1xyXG4gICAgaGVpZ2h0OiB7aGVpZ2h0fSxcclxuICAgIHdpZHRoOiB7d2lkdGh9LFxyXG4gIH07XHJcblxyXG4gIGNvbnNvbGUubG9nKG92ZXJsYXlTdHlsZSlcclxuXHJcbiAgY29uc3QgbW9kYWxDb250ZW50ID0gc2hvdyA/IChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMub3ZlcmxheX0gc3R5bGU9e292ZXJsYXlTdHlsZX0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWx9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cclxuICAgICAgICAgIDxhIGhyZWY9JyMnIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfT5cclxuICAgICAgICAgICAgPEZhVGltZXMgLz4gXHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAge3RpdGxlICYmIDxkaXY+e3RpdGxlfTwvZGl2Pn1cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJvZHl9PntjaGlsZHJlbn08L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApIDogbnVsbFxyXG5cclxuICBpZiAoaXNCcm93c2VyKSB7XHJcbiAgICByZXR1cm4gUmVhY3RET00uY3JlYXRlUG9ydGFsKG1vZGFsQ29udGVudCwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsLXJvb3QnKSlcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIG51bGxcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbInN0eWxlcyIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiUmVhY3RET00iLCJGYVRpbWVzIiwiTW9kYWwiLCJzaG93Iiwib25DbG9zZSIsImNoaWxkcmVuIiwidGl0bGUiLCJoZWlnaHQiLCJ3aWR0aCIsImlzQnJvd3NlciIsInNldElzQnJvd3NlciIsImhhbmRsZUNsb3NlIiwiZSIsInByZXZlbnREZWZhdWx0Iiwib3ZlcmxheVN0eWxlIiwiY29uc29sZSIsImxvZyIsIm1vZGFsQ29udGVudCIsIm92ZXJsYXkiLCJtb2RhbCIsImhlYWRlciIsImJvZHkiLCJjcmVhdGVQb3J0YWwiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sInNvdXJjZVJvb3QiOiIifQ==
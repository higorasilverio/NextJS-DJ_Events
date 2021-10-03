"use strict";
self["webpackHotUpdate_N_E"]("pages/events/edit/[id]",{

/***/ "./pages/events/edit/[id].js":
/*!***********************************!*\
  !*** ./pages/events/edit/[id].js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSP": function() { return /* binding */ __N_SSP; },
/* harmony export */   "default": function() { return /* binding */ EditEventPage; }
/* harmony export */ });
/* harmony import */ var C_Users_higor_silverio_Development_DJ_Events_dj_events_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_higor_silverio_Development_DJ_Events_dj_events_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_higor_silverio_Development_DJ_Events_dj_events_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_higor_silverio_Development_DJ_Events_dj_events_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_higor_silverio_Development_DJ_Events_dj_events_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Modal */ "./components/Modal.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/config/index */ "./config/index.js");
/* harmony import */ var _styles_Form_module_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @/styles/Form.module.css */ "./styles/Form.module.css");
/* harmony import */ var _styles_Form_module_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _hooks_useWindowDimensions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/hooks/useWindowDimensions */ "./hooks/useWindowDimensions.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\higor.silverio\\Development\\DJ-Events\\dj-events-frontend\\pages\\events\\edit\\[id].js",
    _s2 = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_higor_silverio_Development_DJ_Events_dj_events_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
















var __N_SSP = true;
function EditEventPage(_ref) {
  _s2();

  var _this = this,
      _s = $RefreshSig$();

  var evt = _ref.evt;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)({
    name: evt.name,
    performers: evt.performers,
    venue: evt.venue,
    address: evt.address,
    date: evt.date,
    time: evt.time,
    description: evt.description
  }),
      values = _useState[0],
      setValues = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(evt.image ? evt.image.formats.thumbnail.url : null),
      imagePreview = _useState2[0],
      setImagePreview = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(false),
      showModal = _useState3[0],
      setShowModal = _useState3[1];

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter)();
  var height;
  var width;
  (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(_s(function () {
    _s();

    var _useWindowDimensions = (0,_hooks_useWindowDimensions__WEBPACK_IMPORTED_MODULE_13__.default)(),
        innerHeight = _useWindowDimensions.innerHeight,
        innerWidth = _useWindowDimensions.innerWidth;

    _this.height = innerHeight;
    _this.width = innerWidth;
  }, "eUxLPW45RZMky4pD2W3oR63GfnU=", false, function () {
    return [_hooks_useWindowDimensions__WEBPACK_IMPORTED_MODULE_13__.default];
  }), []);

  var handleModal = function handleModal(bool) {
    window.scrollTo(0, 0);
    console.log('work');
    setShowModal(bool);
  };

  var handleSubmit = /*#__PURE__*/function () {
    var _ref2 = (0,C_Users_higor_silverio_Development_DJ_Events_dj_events_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_higor_silverio_Development_DJ_Events_dj_events_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(e) {
      var hasEmptyFields, res, _evt;

      return C_Users_higor_silverio_Development_DJ_Events_dj_events_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              hasEmptyFields = Object.values(values).some(function (element) {
                return element === '';
              });

              if (!hasEmptyFields) {
                _context.next = 5;
                break;
              }

              react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.error('Please, fill all the event fields');
              return _context.abrupt("return", false);

            case 5:
              _context.next = 7;
              return fetch("".concat(_config_index__WEBPACK_IMPORTED_MODULE_11__.API_URL, "/events/").concat(evt.id), {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
              });

            case 7:
              res = _context.sent;

              if (res.ok) {
                _context.next = 13;
                break;
              }

              react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.error('Something went wrong');
              return _context.abrupt("return", false);

            case 13:
              _context.next = 15;
              return res.json();

            case 15:
              _evt = _context.sent;
              router.push("/events/".concat(_evt.slug));

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleSubmit(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var handleInputChange = function handleInputChange(e) {
    var _e$target = e.target,
        name = _e$target.name,
        value = _e$target.value;
    setValues(_objectSpread(_objectSpread({}, values), {}, (0,C_Users_higor_silverio_Development_DJ_Events_dj_events_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({}, name, value)));
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__.default, {
    title: "Add New Event",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_10___default()), {
      href: "/events",
      children: "Go Back"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("h1", {
      children: "Edit Event"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_6__.ToastContainer, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("form", {
      onSubmit: handleSubmit,
      className: (_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_15___default().form),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
        className: (_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_15___default().grid),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("label", {
            htmlFor: "name",
            children: "Event Name"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("input", {
            type: "text",
            id: "name",
            name: "name",
            value: values.name,
            onChange: handleInputChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("label", {
            htmlFor: "performers",
            children: "Performers"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("input", {
            type: "text",
            id: "performers",
            name: "performers",
            value: values.performers,
            onChange: handleInputChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("label", {
            htmlFor: "venue",
            children: "Venue"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("input", {
            type: "text",
            id: "venue",
            name: "venue",
            value: values.venue,
            onChange: handleInputChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("label", {
            htmlFor: "address",
            children: "Address"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("input", {
            type: "text",
            id: "address",
            name: "address",
            value: values.address,
            onChange: handleInputChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("label", {
            htmlFor: "date",
            children: "Date"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("input", {
            type: "date",
            id: "date",
            name: "date",
            value: moment__WEBPACK_IMPORTED_MODULE_5___default()(values.date).format('yyyy-MM-DD'),
            onChange: handleInputChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("label", {
            htmlFor: "time",
            children: "Time"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("input", {
            type: "text",
            id: "time",
            name: "time",
            value: values.time,
            onChange: handleInputChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("label", {
          htmlFor: "description",
          children: "Event Description"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("textarea", {
          type: "text",
          name: "description",
          id: "description",
          value: values.description,
          onChange: handleInputChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("input", {
        type: "submit",
        value: "Update Event",
        className: "btn"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("h2", {
      children: "Event Image"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 13
    }, this), imagePreview ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_12___default()), {
      src: imagePreview,
      height: 100,
      width: 170
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 15
    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("p", {
        children: "No image uploaded!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 20
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 15
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("button", {
        onClick: function onClick() {
          return handleModal(true);
        },
        className: "btn-secondary",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_16__.FaImage, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 19
        }, this), " Set Image"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 15
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_components_Modal__WEBPACK_IMPORTED_MODULE_4__.default, {
      height: height,
      width: width,
      show: showModal,
      onClose: function onClose() {
        return handleModal(false);
      },
      children: "Image Upload"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 82,
    columnNumber: 9
  }, this);
}

_s2(EditEventPage, "SBtvTpK+ej89+2N5HCpSWzrF++Q=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter];
});

_c = EditEventPage;

var _c;

$RefreshReg$(_c, "EditEventPage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZXZlbnRzL2VkaXQvW2lkXS40YjJlOWYwNTA0OTVlYWRiOWZlMi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRWUsU0FBU2MsYUFBVCxPQUE4QjtBQUFBOztBQUFBO0FBQUE7O0FBQUEsTUFBTkMsR0FBTSxRQUFOQSxHQUFNOztBQUN6QyxrQkFBNEJULCtDQUFRLENBQUM7QUFDakNVLElBQUFBLElBQUksRUFBRUQsR0FBRyxDQUFDQyxJQUR1QjtBQUVqQ0MsSUFBQUEsVUFBVSxFQUFFRixHQUFHLENBQUNFLFVBRmlCO0FBR2pDQyxJQUFBQSxLQUFLLEVBQUVILEdBQUcsQ0FBQ0csS0FIc0I7QUFJakNDLElBQUFBLE9BQU8sRUFBRUosR0FBRyxDQUFDSSxPQUpvQjtBQUtqQ0MsSUFBQUEsSUFBSSxFQUFFTCxHQUFHLENBQUNLLElBTHVCO0FBTWpDQyxJQUFBQSxJQUFJLEVBQUVOLEdBQUcsQ0FBQ00sSUFOdUI7QUFPakNDLElBQUFBLFdBQVcsRUFBRVAsR0FBRyxDQUFDTztBQVBnQixHQUFELENBQXBDO0FBQUEsTUFBT0MsTUFBUDtBQUFBLE1BQWVDLFNBQWY7O0FBV0EsbUJBQ0FsQiwrQ0FBUSxDQUFDUyxHQUFHLENBQUNVLEtBQUosR0FBWVYsR0FBRyxDQUFDVSxLQUFKLENBQVVDLE9BQVYsQ0FBa0JDLFNBQWxCLENBQTRCQyxHQUF4QyxHQUE4QyxJQUEvQyxDQURSO0FBQUEsTUFBT0MsWUFBUDtBQUFBLE1BQXFCQyxlQUFyQjs7QUFHQSxtQkFBa0N4QiwrQ0FBUSxDQUFDLEtBQUQsQ0FBMUM7QUFBQSxNQUFPeUIsU0FBUDtBQUFBLE1BQWtCQyxZQUFsQjs7QUFFQSxNQUFNQyxNQUFNLEdBQUd6QixzREFB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QTtBQUFBLFVBREo7QUFtRUg7O0lBckl1QnhCO1VBaUJMTjs7O0tBakJLTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9ldmVudHMvZWRpdC9baWRdLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnQC9jb21wb25lbnRzL0xheW91dCdcclxuaW1wb3J0IE1vZGFsIGZyb20gJ0AvY29tcG9uZW50cy9Nb2RhbCdcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnXHJcbmltcG9ydCB7IEZhSW1hZ2UgfSBmcm9tICdyZWFjdC1pY29ucy9mYSdcclxuaW1wb3J0IHsgVG9hc3RDb250YWluZXIsIHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknXHJcbmltcG9ydCAncmVhY3QtdG9hc3RpZnkvZGlzdC9SZWFjdFRvYXN0aWZ5LmNzcydcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgeyBBUElfVVJMIH0gZnJvbSAnQC9jb25maWcvaW5kZXgnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnQC9zdHlsZXMvRm9ybS5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuaW1wb3J0IHVzZVdpbmRvd0RpbWVuc2lvbnMgZnJvbSAnQC9ob29rcy91c2VXaW5kb3dEaW1lbnNpb25zJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRWRpdEV2ZW50UGFnZSh7ZXZ0fSkge1xyXG4gICAgY29uc3QgW3ZhbHVlcywgc2V0VmFsdWVzXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBuYW1lOiBldnQubmFtZSxcclxuICAgICAgICBwZXJmb3JtZXJzOiBldnQucGVyZm9ybWVycyxcclxuICAgICAgICB2ZW51ZTogZXZ0LnZlbnVlLFxyXG4gICAgICAgIGFkZHJlc3M6IGV2dC5hZGRyZXNzLFxyXG4gICAgICAgIGRhdGU6IGV2dC5kYXRlLFxyXG4gICAgICAgIHRpbWU6IGV2dC50aW1lLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBldnQuZGVzY3JpcHRpb24sXHJcbiAgICB9KVxyXG5cclxuICAgIFxyXG4gICAgY29uc3QgW2ltYWdlUHJldmlldywgc2V0SW1hZ2VQcmV2aWV3XSA9IFxyXG4gICAgdXNlU3RhdGUoZXZ0LmltYWdlID8gZXZ0LmltYWdlLmZvcm1hdHMudGh1bWJuYWlsLnVybCA6IG51bGwpXHJcbiAgICBcclxuICAgIGNvbnN0IFtzaG93TW9kYWwsIHNldFNob3dNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIFxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICAgIFxyXG4gICAgbGV0IGhlaWdodFxyXG4gICAgbGV0IHdpZHRoXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgaW5uZXJIZWlnaHQsIGlubmVyV2lkdGggfSA9IHVzZVdpbmRvd0RpbWVuc2lvbnMoKTtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IGlubmVySGVpZ2h0XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IGlubmVyV2lkdGhcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBcclxuXHJcbiAgICBjb25zdCBoYW5kbGVNb2RhbCA9IChib29sKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxyXG4gICAgICBjb25zb2xlLmxvZygnd29yaycpXHJcbiAgICAgIHNldFNob3dNb2RhbChib29sKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgY29uc3QgaGFzRW1wdHlGaWVsZHMgPSBPYmplY3QudmFsdWVzKHZhbHVlcykuc29tZSgoZWxlbWVudCkgPT4gZWxlbWVudCA9PT0gJycpXHJcbiAgICAgICAgaWYgKGhhc0VtcHR5RmllbGRzKSB7XHJcbiAgICAgICAgICAgIHRvYXN0LmVycm9yKCdQbGVhc2UsIGZpbGwgYWxsIHRoZSBldmVudCBmaWVsZHMnKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7QVBJX1VSTH0vZXZlbnRzLyR7ZXZ0LmlkfWAsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUFVUJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh2YWx1ZXMpXHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgICAgICBpZighcmVzLm9rKSB7XHJcbiAgICAgICAgICAgIHRvYXN0LmVycm9yKCdTb21ldGhpbmcgd2VudCB3cm9uZycpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgZXZ0ID0gYXdhaXQgcmVzLmpzb24oKVxyXG4gICAgICAgICAgICByb3V0ZXIucHVzaChgL2V2ZW50cy8ke2V2dC5zbHVnfWApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGUpID0+IHtcclxuICAgICAgICBjb25zdCB7bmFtZSwgdmFsdWV9ID0gZS50YXJnZXRcclxuICAgICAgICBzZXRWYWx1ZXMoey4uLnZhbHVlcywgW25hbWVdOiB2YWx1ZX0pXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGF5b3V0IHRpdGxlPVwiQWRkIE5ldyBFdmVudFwiPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPScvZXZlbnRzJz5HbyBCYWNrPC9MaW5rPlxyXG4gICAgICAgICAgICA8aDE+RWRpdCBFdmVudDwvaDE+XHJcbiAgICAgICAgICAgIDxUb2FzdENvbnRhaW5lciAvPlxyXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9e3N0eWxlcy5mb3JtfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ3JpZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYW1lXCI+RXZlbnQgTmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBpZD0nbmFtZScgbmFtZT0nbmFtZScgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLm5hbWV9IG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwZXJmb3JtZXJzXCI+UGVyZm9ybWVyczwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBpZD0ncGVyZm9ybWVycycgbmFtZT0ncGVyZm9ybWVycycgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLnBlcmZvcm1lcnN9IG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ2ZW51ZVwiPlZlbnVlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIGlkPSd2ZW51ZScgbmFtZT0ndmVudWUnIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy52ZW51ZX0gb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImFkZHJlc3NcIj5BZGRyZXNzPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIGlkPSdhZGRyZXNzJyBuYW1lPSdhZGRyZXNzJyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMuYWRkcmVzc30gb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImRhdGVcIj5EYXRlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J2RhdGUnIGlkPSdkYXRlJyBuYW1lPSdkYXRlJyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXttb21lbnQodmFsdWVzLmRhdGUpLmZvcm1hdCgneXl5eS1NTS1ERCcpfSBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidGltZVwiPlRpbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgaWQ9J3RpbWUnIG5hbWU9J3RpbWUnIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy50aW1lfSBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSdkZXNjcmlwdGlvbic+RXZlbnQgRGVzY3JpcHRpb248L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdkZXNjcmlwdGlvbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J2Rlc2NyaXB0aW9uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSdzdWJtaXQnIHZhbHVlPSdVcGRhdGUgRXZlbnQnIGNsYXNzTmFtZT0nYnRuJyAvPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDxoMj5FdmVudCBJbWFnZTwvaDI+XHJcbiAgICAgICAgICAgIHsgaW1hZ2VQcmV2aWV3ID8gKCBcclxuICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtpbWFnZVByZXZpZXd9IGhlaWdodD17MTAwfSB3aWR0aD17MTcwfS8+IFxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDxkaXY+PHA+Tm8gaW1hZ2UgdXBsb2FkZWQhPC9wPjwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlTW9kYWwodHJ1ZSl9IGNsYXNzTmFtZT1cImJ0bi1zZWNvbmRhcnlcIj5cclxuICAgICAgICAgICAgICAgICAgPEZhSW1hZ2UgLz4gU2V0IEltYWdlXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8TW9kYWwgaGVpZ2h0PXtoZWlnaHR9IHdpZHRoPXt3aWR0aH0gXHJcbiAgICAgICAgICAgICAgICBzaG93PXtzaG93TW9kYWx9IG9uQ2xvc2U9eygpID0+IGhhbmRsZU1vZGFsKGZhbHNlKX0+XHJcbiAgICAgICAgICAgICAgSW1hZ2UgVXBsb2FkXHJcbiAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoe3BhcmFtczoge2lkfX0pIHtcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtBUElfVVJMfS9ldmVudHMvJHtpZH1gKVxyXG4gIGNvbnN0IGV2dCA9IGF3YWl0IHJlcy5qc29uKClcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIGV2dFxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiTGF5b3V0IiwiTW9kYWwiLCJtb21lbnQiLCJGYUltYWdlIiwiVG9hc3RDb250YWluZXIiLCJ0b2FzdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwiTGluayIsIkFQSV9VUkwiLCJzdHlsZXMiLCJJbWFnZSIsInVzZVdpbmRvd0RpbWVuc2lvbnMiLCJFZGl0RXZlbnRQYWdlIiwiZXZ0IiwibmFtZSIsInBlcmZvcm1lcnMiLCJ2ZW51ZSIsImFkZHJlc3MiLCJkYXRlIiwidGltZSIsImRlc2NyaXB0aW9uIiwidmFsdWVzIiwic2V0VmFsdWVzIiwiaW1hZ2UiLCJmb3JtYXRzIiwidGh1bWJuYWlsIiwidXJsIiwiaW1hZ2VQcmV2aWV3Iiwic2V0SW1hZ2VQcmV2aWV3Iiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwicm91dGVyIiwiaGVpZ2h0Iiwid2lkdGgiLCJpbm5lckhlaWdodCIsImlubmVyV2lkdGgiLCJoYW5kbGVNb2RhbCIsImJvb2wiLCJ3aW5kb3ciLCJzY3JvbGxUbyIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJoYXNFbXB0eUZpZWxkcyIsIk9iamVjdCIsInNvbWUiLCJlbGVtZW50IiwiZXJyb3IiLCJmZXRjaCIsImlkIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzIiwib2siLCJqc29uIiwicHVzaCIsInNsdWciLCJoYW5kbGVJbnB1dENoYW5nZSIsInRhcmdldCIsInZhbHVlIiwiZm9ybSIsImdyaWQiLCJmb3JtYXQiXSwic291cmNlUm9vdCI6IiJ9
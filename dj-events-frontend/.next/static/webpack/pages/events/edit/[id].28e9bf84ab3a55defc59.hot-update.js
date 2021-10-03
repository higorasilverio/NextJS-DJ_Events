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
  var height = 0;
  var width = 0;
  (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(_s(function () {
    _s();

    var _useWindowDimensions = (0,_hooks_useWindowDimensions__WEBPACK_IMPORTED_MODULE_13__.default)(),
        innerHeight = _useWindowDimensions.innerHeight,
        innerWidth = _useWindowDimensions.innerWidth;

    _this.height = height;
    _this.width = width;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZXZlbnRzL2VkaXQvW2lkXS4yOGU5YmY4NGFiM2E1NWRlZmM1OS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRWUsU0FBU2MsYUFBVCxPQUE4QjtBQUFBOztBQUFBO0FBQUE7O0FBQUEsTUFBTkMsR0FBTSxRQUFOQSxHQUFNOztBQUN6QyxrQkFBNEJULCtDQUFRLENBQUM7QUFDakNVLElBQUFBLElBQUksRUFBRUQsR0FBRyxDQUFDQyxJQUR1QjtBQUVqQ0MsSUFBQUEsVUFBVSxFQUFFRixHQUFHLENBQUNFLFVBRmlCO0FBR2pDQyxJQUFBQSxLQUFLLEVBQUVILEdBQUcsQ0FBQ0csS0FIc0I7QUFJakNDLElBQUFBLE9BQU8sRUFBRUosR0FBRyxDQUFDSSxPQUpvQjtBQUtqQ0MsSUFBQUEsSUFBSSxFQUFFTCxHQUFHLENBQUNLLElBTHVCO0FBTWpDQyxJQUFBQSxJQUFJLEVBQUVOLEdBQUcsQ0FBQ00sSUFOdUI7QUFPakNDLElBQUFBLFdBQVcsRUFBRVAsR0FBRyxDQUFDTztBQVBnQixHQUFELENBQXBDO0FBQUEsTUFBT0MsTUFBUDtBQUFBLE1BQWVDLFNBQWY7O0FBV0EsbUJBQ0FsQiwrQ0FBUSxDQUFDUyxHQUFHLENBQUNVLEtBQUosR0FBWVYsR0FBRyxDQUFDVSxLQUFKLENBQVVDLE9BQVYsQ0FBa0JDLFNBQWxCLENBQTRCQyxHQUF4QyxHQUE4QyxJQUEvQyxDQURSO0FBQUEsTUFBT0MsWUFBUDtBQUFBLE1BQXFCQyxlQUFyQjs7QUFHQSxtQkFBa0N4QiwrQ0FBUSxDQUFDLEtBQUQsQ0FBMUM7QUFBQSxNQUFPeUIsU0FBUDtBQUFBLE1BQWtCQyxZQUFsQjs7QUFFQSxNQUFNQyxNQUFNLEdBQUd6QixzREFB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SjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQW1FSDs7SUFySXVCeEI7VUFpQkxOOzs7S0FqQktNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2V2ZW50cy9lZGl0L1tpZF0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICdAL2NvbXBvbmVudHMvTGF5b3V0J1xyXG5pbXBvcnQgTW9kYWwgZnJvbSAnQC9jb21wb25lbnRzL01vZGFsJ1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcclxuaW1wb3J0IHsgRmFJbWFnZSB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJ1xyXG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciwgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSdcclxuaW1wb3J0ICdyZWFjdC10b2FzdGlmeS9kaXN0L1JlYWN0VG9hc3RpZnkuY3NzJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7IEFQSV9VUkwgfSBmcm9tICdAL2NvbmZpZy9pbmRleCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICdAL3N0eWxlcy9Gb3JtLm1vZHVsZS5jc3MnXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5pbXBvcnQgdXNlV2luZG93RGltZW5zaW9ucyBmcm9tICdAL2hvb2tzL3VzZVdpbmRvd0RpbWVuc2lvbnMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFZGl0RXZlbnRQYWdlKHtldnR9KSB7XHJcbiAgICBjb25zdCBbdmFsdWVzLCBzZXRWYWx1ZXNdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIG5hbWU6IGV2dC5uYW1lLFxyXG4gICAgICAgIHBlcmZvcm1lcnM6IGV2dC5wZXJmb3JtZXJzLFxyXG4gICAgICAgIHZlbnVlOiBldnQudmVudWUsXHJcbiAgICAgICAgYWRkcmVzczogZXZ0LmFkZHJlc3MsXHJcbiAgICAgICAgZGF0ZTogZXZ0LmRhdGUsXHJcbiAgICAgICAgdGltZTogZXZ0LnRpbWUsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IGV2dC5kZXNjcmlwdGlvbixcclxuICAgIH0pXHJcblxyXG4gICAgXHJcbiAgICBjb25zdCBbaW1hZ2VQcmV2aWV3LCBzZXRJbWFnZVByZXZpZXddID0gXHJcbiAgICB1c2VTdGF0ZShldnQuaW1hZ2UgPyBldnQuaW1hZ2UuZm9ybWF0cy50aHVtYm5haWwudXJsIDogbnVsbClcclxuICAgIFxyXG4gICAgY29uc3QgW3Nob3dNb2RhbCwgc2V0U2hvd01vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gICAgXHJcbiAgICBjb25zdCBoZWlnaHQgPSAwXHJcbiAgICBjb25zdCB3aWR0aCA9IDBcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBpbm5lckhlaWdodCwgaW5uZXJXaWR0aCB9ID0gdXNlV2luZG93RGltZW5zaW9ucygpO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoXHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgXHJcblxyXG4gICAgY29uc3QgaGFuZGxlTW9kYWwgPSAoYm9vbCkgPT4ge1xyXG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcclxuICAgICAgY29uc29sZS5sb2coJ3dvcmsnKVxyXG4gICAgICBzZXRTaG93TW9kYWwoYm9vbClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIGNvbnN0IGhhc0VtcHR5RmllbGRzID0gT2JqZWN0LnZhbHVlcyh2YWx1ZXMpLnNvbWUoKGVsZW1lbnQpID0+IGVsZW1lbnQgPT09ICcnKVxyXG4gICAgICAgIGlmIChoYXNFbXB0eUZpZWxkcykge1xyXG4gICAgICAgICAgICB0b2FzdC5lcnJvcignUGxlYXNlLCBmaWxsIGFsbCB0aGUgZXZlbnQgZmllbGRzJylcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke0FQSV9VUkx9L2V2ZW50cy8ke2V2dC5pZH1gLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BVVCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodmFsdWVzKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoIXJlcy5vaykge1xyXG4gICAgICAgICAgICB0b2FzdC5lcnJvcignU29tZXRoaW5nIHdlbnQgd3JvbmcnKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGV2dCA9IGF3YWl0IHJlcy5qc29uKClcclxuICAgICAgICAgICAgcm91dGVyLnB1c2goYC9ldmVudHMvJHtldnQuc2x1Z31gKVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IChlKSA9PiB7XHJcbiAgICAgICAgY29uc3Qge25hbWUsIHZhbHVlfSA9IGUudGFyZ2V0XHJcbiAgICAgICAgc2V0VmFsdWVzKHsuLi52YWx1ZXMsIFtuYW1lXTogdmFsdWV9KVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExheW91dCB0aXRsZT1cIkFkZCBOZXcgRXZlbnRcIj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj0nL2V2ZW50cyc+R28gQmFjazwvTGluaz5cclxuICAgICAgICAgICAgPGgxPkVkaXQgRXZlbnQ8L2gxPlxyXG4gICAgICAgICAgICA8VG9hc3RDb250YWluZXIgLz5cclxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPXtzdHlsZXMuZm9ybX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdyaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmFtZVwiPkV2ZW50IE5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgaWQ9J25hbWUnIG5hbWU9J25hbWUnIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5uYW1lfSBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGVyZm9ybWVyc1wiPlBlcmZvcm1lcnM8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgaWQ9J3BlcmZvcm1lcnMnIG5hbWU9J3BlcmZvcm1lcnMnIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5wZXJmb3JtZXJzfSBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidmVudWVcIj5WZW51ZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBpZD0ndmVudWUnIG5hbWU9J3ZlbnVlJyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMudmVudWV9IG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJhZGRyZXNzXCI+QWRkcmVzczwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBpZD0nYWRkcmVzcycgbmFtZT0nYWRkcmVzcycgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLmFkZHJlc3N9IG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJkYXRlXCI+RGF0ZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSdkYXRlJyBpZD0nZGF0ZScgbmFtZT0nZGF0ZScgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bW9tZW50KHZhbHVlcy5kYXRlKS5mb3JtYXQoJ3l5eXktTU0tREQnKX0gb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRpbWVcIj5UaW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIGlkPSd0aW1lJyBuYW1lPSd0aW1lJyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMudGltZX0gb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0nZGVzY3JpcHRpb24nPkV2ZW50IERlc2NyaXB0aW9uPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nZGVzY3JpcHRpb24nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPSdkZXNjcmlwdGlvbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgID48L3RleHRhcmVhPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0nc3VibWl0JyB2YWx1ZT0nVXBkYXRlIEV2ZW50JyBjbGFzc05hbWU9J2J0bicgLz5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8aDI+RXZlbnQgSW1hZ2U8L2gyPlxyXG4gICAgICAgICAgICB7IGltYWdlUHJldmlldyA/ICggXHJcbiAgICAgICAgICAgICAgPEltYWdlIHNyYz17aW1hZ2VQcmV2aWV3fSBoZWlnaHQ9ezEwMH0gd2lkdGg9ezE3MH0vPiBcclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8ZGl2PjxwPk5vIGltYWdlIHVwbG9hZGVkITwvcD48L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZU1vZGFsKHRydWUpfSBjbGFzc05hbWU9XCJidG4tc2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxGYUltYWdlIC8+IFNldCBJbWFnZVxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPE1vZGFsIGhlaWdodD17aGVpZ2h0fSB3aWR0aD17d2lkdGh9IFxyXG4gICAgICAgICAgICAgICAgc2hvdz17c2hvd01vZGFsfSBvbkNsb3NlPXsoKSA9PiBoYW5kbGVNb2RhbChmYWxzZSl9PlxyXG4gICAgICAgICAgICAgIEltYWdlIFVwbG9hZFxyXG4gICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHtwYXJhbXM6IHtpZH19KSB7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7QVBJX1VSTH0vZXZlbnRzLyR7aWR9YClcclxuICBjb25zdCBldnQgPSBhd2FpdCByZXMuanNvbigpXHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBldnRcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIkxheW91dCIsIk1vZGFsIiwibW9tZW50IiwiRmFJbWFnZSIsIlRvYXN0Q29udGFpbmVyIiwidG9hc3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsIkxpbmsiLCJBUElfVVJMIiwic3R5bGVzIiwiSW1hZ2UiLCJ1c2VXaW5kb3dEaW1lbnNpb25zIiwiRWRpdEV2ZW50UGFnZSIsImV2dCIsIm5hbWUiLCJwZXJmb3JtZXJzIiwidmVudWUiLCJhZGRyZXNzIiwiZGF0ZSIsInRpbWUiLCJkZXNjcmlwdGlvbiIsInZhbHVlcyIsInNldFZhbHVlcyIsImltYWdlIiwiZm9ybWF0cyIsInRodW1ibmFpbCIsInVybCIsImltYWdlUHJldmlldyIsInNldEltYWdlUHJldmlldyIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsInJvdXRlciIsImhlaWdodCIsIndpZHRoIiwiaW5uZXJIZWlnaHQiLCJpbm5lcldpZHRoIiwiaGFuZGxlTW9kYWwiLCJib29sIiwid2luZG93Iiwic2Nyb2xsVG8iLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiaGFzRW1wdHlGaWVsZHMiLCJPYmplY3QiLCJzb21lIiwiZWxlbWVudCIsImVycm9yIiwiZmV0Y2giLCJpZCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlcyIsIm9rIiwianNvbiIsInB1c2giLCJzbHVnIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsImZvcm0iLCJncmlkIiwiZm9ybWF0Il0sInNvdXJjZVJvb3QiOiIifQ==
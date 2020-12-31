webpackHotUpdate_N_E("pages/index",{

/***/ "./components/rectangle.js":
/*!*********************************!*\
  !*** ./components/rectangle.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var styles_modules_text_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styles/modules/text.module.scss */ \"./styles/modules/text.module.scss\");\n/* harmony import */ var styles_modules_text_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styles_modules_text_module_scss__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var styles_modules_rectangle_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styles/modules/rectangle.module.scss */ \"./styles/modules/rectangle.module.scss\");\n/* harmony import */ var styles_modules_rectangle_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(styles_modules_rectangle_module_scss__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\nvar _jsxFileName = \"/home/leskat/onedrive/projects/homepage/components/rectangle.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\nvar Rectangle = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Rectangle, _React$Component);\n\n  var _super = _createSuper(Rectangle);\n\n  function Rectangle() {\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Rectangle);\n\n    return _super.apply(this, arguments);\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Rectangle, [{\n    key: \"render\",\n    value: function render() {\n      var icon = this.props.icon;\n      var title = this.props.title;\n      var color = this.props.color;\n      return __jsx(\"div\", {\n        className: \"\".concat(styles_modules_rectangle_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a['container'], \" \").concat(styles_modules_rectangle_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a[this.props.color]),\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 14,\n          columnNumber: 7\n        }\n      }, icon, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"Container\"], {\n        className: styles_modules_rectangle_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a['title'],\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 16,\n          columnNumber: 9\n        }\n      }, __jsx(\"p\", {\n        className: styles_modules_rectangle_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a['title-text'],\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 17,\n          columnNumber: 11\n        }\n      }, title)));\n    }\n  }]);\n\n  return Rectangle;\n}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);\n\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Rectangle);\nRectangle.propTypes = {\n  icon: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.element.isRequired,\n  title: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string.isRequired,\n  description: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,\n  link: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,\n  color: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string\n};\nRectangle.defaultProps = {\n  color: 'red'\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZWN0YW5nbGUuanM/ZGUwNSJdLCJuYW1lcyI6WyJSZWN0YW5nbGUiLCJpY29uIiwicHJvcHMiLCJ0aXRsZSIsImNvbG9yIiwiUmVjdGFuZ2xlU3R5bGVzIiwiUmVhY3QiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJlbGVtZW50IiwiaXNSZXF1aXJlZCIsInN0cmluZyIsImRlc2NyaXB0aW9uIiwibGluayIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTUEsUzs7Ozs7Ozs7Ozs7Ozs2QkFDSztBQUNQLFVBQU1DLElBQUksR0FBRyxLQUFLQyxLQUFMLENBQVdELElBQXhCO0FBQ0EsVUFBTUUsS0FBSyxHQUFHLEtBQUtELEtBQUwsQ0FBV0MsS0FBekI7QUFDQSxVQUFNQyxLQUFLLEdBQUcsS0FBS0YsS0FBTCxDQUFXRSxLQUF6QjtBQUVBLGFBQ0U7QUFBSyxpQkFBUyxZQUFLQywyRUFBZSxDQUFDLFdBQUQsQ0FBcEIsY0FBcUNBLDJFQUFlLENBQUMsS0FBS0gsS0FBTCxDQUFXRSxLQUFaLENBQXBELENBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNHSCxJQURILEVBRUUsTUFBQyx5REFBRDtBQUFXLGlCQUFTLEVBQUVJLDJFQUFlLENBQUMsT0FBRCxDQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBRyxpQkFBUyxFQUFFQSwyRUFBZSxDQUFDLFlBQUQsQ0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUE4Q0YsS0FBOUMsQ0FERixDQUZGLENBREY7QUFRRDs7OztFQWRxQkcsNENBQUssQ0FBQ0MsUzs7QUFlN0I7QUFDY1Asd0VBQWY7QUFFQUEsU0FBUyxDQUFDUSxTQUFWLEdBQXNCO0FBQ3BCUCxNQUFJLEVBQUVRLGlEQUFTLENBQUNDLE9BQVYsQ0FBa0JDLFVBREo7QUFFcEJSLE9BQUssRUFBRU0saURBQVMsQ0FBQ0csTUFBVixDQUFpQkQsVUFGSjtBQUdwQkUsYUFBVyxFQUFFSixpREFBUyxDQUFDRyxNQUhIO0FBSXBCRSxNQUFJLEVBQUVMLGlEQUFTLENBQUNHLE1BSkk7QUFLcEJSLE9BQUssRUFBRUssaURBQVMsQ0FBQ0c7QUFMRyxDQUF0QjtBQVFBWixTQUFTLENBQUNlLFlBQVYsR0FBeUI7QUFDdkJYLE9BQUssRUFBRTtBQURnQixDQUF6QiIsImZpbGUiOiIuL2NvbXBvbmVudHMvcmVjdGFuZ2xlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IFRleHRTdHlsZXMgZnJvbSAnc3R5bGVzL21vZHVsZXMvdGV4dC5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgUmVjdGFuZ2xlU3R5bGVzIGZyb20gJ3N0eWxlcy9tb2R1bGVzL3JlY3RhbmdsZS5tb2R1bGUuc2Nzcyc7XG5cbmNsYXNzIFJlY3RhbmdsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBpY29uID0gdGhpcy5wcm9wcy5pY29uO1xuICAgIGNvbnN0IHRpdGxlID0gdGhpcy5wcm9wcy50aXRsZTtcbiAgICBjb25zdCBjb2xvciA9IHRoaXMucHJvcHMuY29sb3I7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake1JlY3RhbmdsZVN0eWxlc1snY29udGFpbmVyJ119ICR7UmVjdGFuZ2xlU3R5bGVzW3RoaXMucHJvcHMuY29sb3JdfWB9PlxuICAgICAgICB7aWNvbn1cbiAgICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9e1JlY3RhbmdsZVN0eWxlc1sndGl0bGUnXX0+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtSZWN0YW5nbGVTdHlsZXNbJ3RpdGxlLXRleHQnXX0+e3RpdGxlfTwvcD5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgUmVjdGFuZ2xlO1xuXG5SZWN0YW5nbGUucHJvcFR5cGVzID0ge1xuICBpY29uOiBQcm9wVHlwZXMuZWxlbWVudC5pc1JlcXVpcmVkLFxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBkZXNjcmlwdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgbGluazogUHJvcFR5cGVzLnN0cmluZyxcbiAgY29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5SZWN0YW5nbGUuZGVmYXVsdFByb3BzID0ge1xuICBjb2xvcjogJ3JlZCcsXG59OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/rectangle.js\n");

/***/ })

})
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/DoctorCard.js":
/*!**************************************!*\
  !*** ./src/components/DoctorCard.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../list */ \"(app-pages-browser)/./src/list.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n // Import the doctor data\nfunction Doctors() {\n    _s();\n    const [selectedCategory, setSelectedCategory] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"Physician\");\n    const handleCategoryClick = (category)=>{\n        setSelectedCategory(category === selectedCategory ? null : category);\n    };\n    const selectedCategoryData = _list__WEBPACK_IMPORTED_MODULE_4__[\"default\"].find((category)=>category.category === selectedCategory);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-10 bg-orange-200 bg-opacity-20\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"lg:flex lg:flex-row grid grid-cols-2 justify-center space-y-2 space-x-8 mb-8\",\n                \"data-aos\": \"zoom-in\",\n                \"data-aos-delay\": \"200\",\n                \"data-aos-easing\": \"ease-in-out\",\n                \"data-aos-duration\": \"700\",\n                children: _list__WEBPACK_IMPORTED_MODULE_4__[\"default\"].map((categoryData, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-2xl font-semibold cursor-pointer transition duration-300 ease-in-out border\\n               border-gray-600 rounded-full px-2 lg:py-2 text-center w-24 h-20 bg-gradient-to-r from-cyan-100 to-white mb-2\\n              \".concat(selectedCategory === categoryData.category ? \" text-yellow-500 shadow-lg shadow-yellow-300 \" : \"text-gray-800\"),\n                                onClick: ()=>handleCategoryClick(categoryData.category),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    src: categoryData.image,\n                                    alt: categoryData.category,\n                                    width: 70,\n                                    height: 80,\n                                    className: \"inline-block mr-2 rounded-full p-1\" // Optional styling\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\TechBOX\\\\Desktop\\\\dentist booking - Copy\\\\my-app\\\\src\\\\components\\\\DoctorCard.js\",\n                                    lineNumber: 31,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\TechBOX\\\\Desktop\\\\dentist booking - Copy\\\\my-app\\\\src\\\\components\\\\DoctorCard.js\",\n                                lineNumber: 24,\n                                columnNumber: 13\n                            }, this),\n                            categoryData.category\n                        ]\n                    }, index, true, {\n                        fileName: \"C:\\\\Users\\\\TechBOX\\\\Desktop\\\\dentist booking - Copy\\\\my-app\\\\src\\\\components\\\\DoctorCard.js\",\n                        lineNumber: 23,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\TechBOX\\\\Desktop\\\\dentist booking - Copy\\\\my-app\\\\src\\\\components\\\\DoctorCard.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            selectedCategoryData && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-20 px-4 md:px-14 mb-10 lg:ml-10\",\n                \"data-aos\": \"fade-up\",\n                \"data-aos-delay\": \"200\",\n                \"data-aos-easing\": \"ease-in-out\",\n                \"data-aos-duration\": \"1200\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8\",\n                    children: selectedCategoryData.doctors.map((doctor, docIndex)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"bg-white bg-opacity-90 min-w-96 lg:max-w-md p-6 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex lg:flex-row  lg:items-center lg:space-x-6 space-y-4 lg:space-y-0\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        src: doctor.image || \"/default-doctor-image.jpg\",\n                                        alt: doctor.name,\n                                        width: 120,\n                                        height: 120,\n                                        className: \"w-32 h-40 lg:w-36 lg:h-44 rounded-lg object-cover shadow-md\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\TechBOX\\\\Desktop\\\\dentist booking - Copy\\\\my-app\\\\src\\\\components\\\\DoctorCard.js\",\n                                        lineNumber: 59,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex-1 ml-5 lg:ml-0 lg:text-left\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                className: \"text-lg lg:text-xl font-semibold text-gray-800\",\n                                                children: doctor.name\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\TechBOX\\\\Desktop\\\\dentist booking - Copy\\\\my-app\\\\src\\\\components\\\\DoctorCard.js\",\n                                                lineNumber: 67,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"text-sm lg:text-base text-gray-600 mt-1\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                                        children: \"Specialization:\"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\TechBOX\\\\Desktop\\\\dentist booking - Copy\\\\my-app\\\\src\\\\components\\\\DoctorCard.js\",\n                                                        lineNumber: 71,\n                                                        columnNumber: 19\n                                                    }, this),\n                                                    \" \",\n                                                    doctor.specialization\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\TechBOX\\\\Desktop\\\\dentist booking - Copy\\\\my-app\\\\src\\\\components\\\\DoctorCard.js\",\n                                                lineNumber: 70,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"text-sm lg:text-base text-gray-600\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                                        children: \"Experience:\"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\TechBOX\\\\Desktop\\\\dentist booking - Copy\\\\my-app\\\\src\\\\components\\\\DoctorCard.js\",\n                                                        lineNumber: 74,\n                                                        columnNumber: 19\n                                                    }, this),\n                                                    \" \",\n                                                    doctor.experience\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\TechBOX\\\\Desktop\\\\dentist booking - Copy\\\\my-app\\\\src\\\\components\\\\DoctorCard.js\",\n                                                lineNumber: 73,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"text-sm lg:text-base text-gray-600\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                                        children: \"Availability:\"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\TechBOX\\\\Desktop\\\\dentist booking - Copy\\\\my-app\\\\src\\\\components\\\\DoctorCard.js\",\n                                                        lineNumber: 77,\n                                                        columnNumber: 19\n                                                    }, this),\n                                                    \" \",\n                                                    doctor.availability\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\TechBOX\\\\Desktop\\\\dentist booking - Copy\\\\my-app\\\\src\\\\components\\\\DoctorCard.js\",\n                                                lineNumber: 76,\n                                                columnNumber: 17\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\TechBOX\\\\Desktop\\\\dentist booking - Copy\\\\my-app\\\\src\\\\components\\\\DoctorCard.js\",\n                                        lineNumber: 66,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                        href: {\n                                            pathname: \"/Booking\",\n                                            query: {\n                                                doctorImg: doctor.image,\n                                                doctorName: doctor.name,\n                                                specialization: doctor.specialization,\n                                                experience: doctor.experience,\n                                                availability: doctor.availability\n                                            }\n                                        },\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            className: \"rounded-full border border-gray-500 px-2  mt-20 lg:mt-40 bg-yellow-50 hover:bg-yellow-100 cursor-pointer    active:bg-yellow-300 active:scale-95 text-2xl pb-1\",\n                                            children: \"+\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\TechBOX\\\\Desktop\\\\dentist booking - Copy\\\\my-app\\\\src\\\\components\\\\DoctorCard.js\",\n                                            lineNumber: 92,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\TechBOX\\\\Desktop\\\\dentist booking - Copy\\\\my-app\\\\src\\\\components\\\\DoctorCard.js\",\n                                        lineNumber: 80,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\TechBOX\\\\Desktop\\\\dentist booking - Copy\\\\my-app\\\\src\\\\components\\\\DoctorCard.js\",\n                                lineNumber: 58,\n                                columnNumber: 13\n                            }, this)\n                        }, docIndex, false, {\n                            fileName: \"C:\\\\Users\\\\TechBOX\\\\Desktop\\\\dentist booking - Copy\\\\my-app\\\\src\\\\components\\\\DoctorCard.js\",\n                            lineNumber: 54,\n                            columnNumber: 11\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\TechBOX\\\\Desktop\\\\dentist booking - Copy\\\\my-app\\\\src\\\\components\\\\DoctorCard.js\",\n                    lineNumber: 52,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\TechBOX\\\\Desktop\\\\dentist booking - Copy\\\\my-app\\\\src\\\\components\\\\DoctorCard.js\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\TechBOX\\\\Desktop\\\\dentist booking - Copy\\\\my-app\\\\src\\\\components\\\\DoctorCard.js\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n}\n_s(Doctors, \"Nz0O/MTjCB1SWA8xu+ekbDpdcUQ=\");\n_c = Doctors;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Doctors);\nvar _c;\n$RefreshReg$(_c, \"Doctors\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0RvY3RvckNhcmQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRzZCO0FBQ0U7QUFDRTtBQUNBLENBQUMseUJBQXlCO0FBRTNELFNBQVNJOztJQUNQLE1BQU0sQ0FBQ0Msa0JBQWtCQyxvQkFBb0IsR0FBR0osK0NBQVFBLENBQUM7SUFFekQsTUFBTUssc0JBQXNCLENBQUNDO1FBQzNCRixvQkFBb0JFLGFBQWFILG1CQUFtQixPQUFPRztJQUM3RDtJQUVBLE1BQU1DLHVCQUF1Qk4sNkNBQVVBLENBQUNPLElBQUksQ0FBQ0YsQ0FBQUEsV0FBWUEsU0FBU0EsUUFBUSxLQUFLSDtJQUUvRSxxQkFDRSw4REFBQ007UUFBSUMsV0FBVTs7MEJBRWIsOERBQUNEO2dCQUFJQyxXQUFVO2dCQUErRUMsWUFBUztnQkFBVUMsa0JBQWU7Z0JBQU1DLG1CQUFnQjtnQkFBY0MscUJBQWtCOzBCQUNuTGIsNkNBQVVBLENBQUNjLEdBQUcsQ0FBQyxDQUFDQyxjQUFjQyxzQkFDN0IsOERBQUNSO3dCQUFnQkMsV0FBVTs7MENBQ3pCLDhEQUFDRDtnQ0FDQ0MsV0FBVyxnT0FFc0csT0FBL0dQLHFCQUFxQmEsYUFBYVYsUUFBUSxHQUFHLGtEQUFrRDtnQ0FDakdZLFNBQVMsSUFBTWIsb0JBQW9CVyxhQUFhVixRQUFROzBDQUd4RCw0RUFBQ1Asa0RBQUtBO29DQUNKb0IsS0FBS0gsYUFBYUksS0FBSztvQ0FDdkJDLEtBQUtMLGFBQWFWLFFBQVE7b0NBQzFCZ0IsT0FBTztvQ0FDUEMsUUFBUTtvQ0FDUmIsV0FBVSxxQ0FBcUMsbUJBQW1COzs7Ozs7Ozs7Ozs0QkFHckVNLGFBQWFWLFFBQVE7O3VCQWhCZFc7Ozs7Ozs7Ozs7WUFxQmJWLHNDQUNELDhEQUFDRTtnQkFDREMsV0FBVTtnQkFDVkMsWUFBUztnQkFDVEMsa0JBQWU7Z0JBQ2ZDLG1CQUFnQjtnQkFDaEJDLHFCQUFrQjswQkFFbEIsNEVBQUNVO29CQUFHZCxXQUFVOzhCQUNYSCxxQkFBcUJrQixPQUFPLENBQUNWLEdBQUcsQ0FBQyxDQUFDVyxRQUFRQyx5QkFDekMsOERBQUNDOzRCQUVDbEIsV0FBVTtzQ0FFViw0RUFBQ0Q7Z0NBQUlDLFdBQVU7O2tEQUNiLDhEQUFDWCxrREFBS0E7d0NBQ0pvQixLQUFLTyxPQUFPTixLQUFLLElBQUk7d0NBQ3JCQyxLQUFLSyxPQUFPRyxJQUFJO3dDQUNoQlAsT0FBTzt3Q0FDUEMsUUFBUTt3Q0FDUmIsV0FBVTs7Ozs7O2tEQUVaLDhEQUFDRDt3Q0FBSUMsV0FBVTs7MERBQ2IsOERBQUNvQjtnREFBR3BCLFdBQVU7MERBQ1hnQixPQUFPRyxJQUFJOzs7Ozs7MERBRWQsOERBQUNFO2dEQUFFckIsV0FBVTs7a0VBQ1gsOERBQUNzQjtrRUFBTzs7Ozs7O29EQUF3QjtvREFBRU4sT0FBT08sY0FBYzs7Ozs7OzswREFFekQsOERBQUNGO2dEQUFFckIsV0FBVTs7a0VBQ1gsOERBQUNzQjtrRUFBTzs7Ozs7O29EQUFvQjtvREFBRU4sT0FBT1EsVUFBVTs7Ozs7OzswREFFakQsOERBQUNIO2dEQUFFckIsV0FBVTs7a0VBQ1gsOERBQUNzQjtrRUFBTzs7Ozs7O29EQUFzQjtvREFBRU4sT0FBT1MsWUFBWTs7Ozs7Ozs7Ozs7OztrREFHdkQsOERBQUNyQyxpREFBSUE7d0NBQ0hzQyxNQUFNOzRDQUNKQyxVQUFVOzRDQUNWQyxPQUFPO2dEQUNMQyxXQUFXYixPQUFPTixLQUFLO2dEQUN2Qm9CLFlBQVlkLE9BQU9HLElBQUk7Z0RBQ3ZCSSxnQkFBZ0JQLE9BQU9PLGNBQWM7Z0RBQ3JDQyxZQUFZUixPQUFPUSxVQUFVO2dEQUM3QkMsY0FBY1QsT0FBT1MsWUFBWTs0Q0FDbkM7d0NBQ0Y7a0RBRUUsNEVBQUNNOzRDQUNHL0IsV0FBVTtzREFFWDs7Ozs7Ozs7Ozs7Ozs7Ozs7MkJBeENKaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJEakI7R0F6R1N6QjtLQUFBQTtBQTJHVCwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Eb2N0b3JDYXJkLmpzPzEyYTciXSwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5cInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGRvY3RvckRhdGEgZnJvbSAnLi4vbGlzdCc7IC8vIEltcG9ydCB0aGUgZG9jdG9yIGRhdGFcclxuXHJcbmZ1bmN0aW9uIERvY3RvcnMoKSB7XHJcbiAgY29uc3QgW3NlbGVjdGVkQ2F0ZWdvcnksIHNldFNlbGVjdGVkQ2F0ZWdvcnldID0gdXNlU3RhdGUoJ1BoeXNpY2lhbicpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDYXRlZ29yeUNsaWNrID0gKGNhdGVnb3J5KSA9PiB7XHJcbiAgICBzZXRTZWxlY3RlZENhdGVnb3J5KGNhdGVnb3J5ID09PSBzZWxlY3RlZENhdGVnb3J5ID8gbnVsbCA6IGNhdGVnb3J5KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzZWxlY3RlZENhdGVnb3J5RGF0YSA9IGRvY3RvckRhdGEuZmluZChjYXRlZ29yeSA9PiBjYXRlZ29yeS5jYXRlZ29yeSA9PT0gc2VsZWN0ZWRDYXRlZ29yeSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMTAgYmctb3JhbmdlLTIwMCBiZy1vcGFjaXR5LTIwXCI+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOmZsZXggbGc6ZmxleC1yb3cgZ3JpZCBncmlkLWNvbHMtMiBqdXN0aWZ5LWNlbnRlciBzcGFjZS15LTIgc3BhY2UteC04IG1iLThcIiBkYXRhLWFvcz1cInpvb20taW5cIiBkYXRhLWFvcy1kZWxheT1cIjIwMFwiIGRhdGEtYW9zLWVhc2luZz1cImVhc2UtaW4tb3V0XCIgZGF0YS1hb3MtZHVyYXRpb249XCI3MDBcIj5cclxuICAgICAgICB7ZG9jdG9yRGF0YS5tYXAoKGNhdGVnb3J5RGF0YSwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YHRleHQtMnhsIGZvbnQtc2VtaWJvbGQgY3Vyc29yLXBvaW50ZXIgdHJhbnNpdGlvbiBkdXJhdGlvbi0zMDAgZWFzZS1pbi1vdXQgYm9yZGVyXHJcbiAgICAgICAgICAgICAgIGJvcmRlci1ncmF5LTYwMCByb3VuZGVkLWZ1bGwgcHgtMiBsZzpweS0yIHRleHQtY2VudGVyIHctMjQgaC0yMCBiZy1ncmFkaWVudC10by1yIGZyb20tY3lhbi0xMDAgdG8td2hpdGUgbWItMlxyXG4gICAgICAgICAgICAgICR7c2VsZWN0ZWRDYXRlZ29yeSA9PT0gY2F0ZWdvcnlEYXRhLmNhdGVnb3J5ID8gJyB0ZXh0LXllbGxvdy01MDAgc2hhZG93LWxnIHNoYWRvdy15ZWxsb3ctMzAwICcgOiAndGV4dC1ncmF5LTgwMCd9YH1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDYXRlZ29yeUNsaWNrKGNhdGVnb3J5RGF0YS5jYXRlZ29yeSl9IFxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgey8qIENhdGVnb3J5IEltYWdlICovfVxyXG4gICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgc3JjPXtjYXRlZ29yeURhdGEuaW1hZ2V9IC8vIFVzZSB0aGUgaW1hZ2UgZnJvbSB0aGUgZGF0YVxyXG4gICAgICAgICAgICAgICAgYWx0PXtjYXRlZ29yeURhdGEuY2F0ZWdvcnl9XHJcbiAgICAgICAgICAgICAgICB3aWR0aD17NzB9IC8vIFNldCBkZXNpcmVkIHdpZHRoXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9ezgwfSAvLyBTZXQgZGVzaXJlZCBoZWlnaHRcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayBtci0yIHJvdW5kZWQtZnVsbCBwLTFcIiAvLyBPcHRpb25hbCBzdHlsaW5nXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtjYXRlZ29yeURhdGEuY2F0ZWdvcnl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICB7c2VsZWN0ZWRDYXRlZ29yeURhdGEgJiYgKFxyXG4gICAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT1cIm10LTIwIHB4LTQgbWQ6cHgtMTQgbWItMTAgbGc6bWwtMTBcIlxyXG4gICAgICBkYXRhLWFvcz1cImZhZGUtdXBcIlxyXG4gICAgICBkYXRhLWFvcy1kZWxheT1cIjIwMFwiXHJcbiAgICAgIGRhdGEtYW9zLWVhc2luZz1cImVhc2UtaW4tb3V0XCJcclxuICAgICAgZGF0YS1hb3MtZHVyYXRpb249XCIxMjAwXCJcclxuICAgID5cclxuICAgICAgPHVsIGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgc206Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTMgZ2FwLThcIj5cclxuICAgICAgICB7c2VsZWN0ZWRDYXRlZ29yeURhdGEuZG9jdG9ycy5tYXAoKGRvY3RvciwgZG9jSW5kZXgpID0+IChcclxuICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICBrZXk9e2RvY0luZGV4fVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJiZy13aGl0ZSBiZy1vcGFjaXR5LTkwIG1pbi13LTk2IGxnOm1heC13LW1kIHAtNiByb3VuZGVkLXhsIHNoYWRvdy1sZyB0cmFuc2Zvcm0gdHJhbnNpdGlvbiBkdXJhdGlvbi0zMDAgaG92ZXI6c2NhbGUtMTA1IGhvdmVyOnNoYWRvdy0yeGxcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbGc6ZmxleC1yb3cgIGxnOml0ZW1zLWNlbnRlciBsZzpzcGFjZS14LTYgc3BhY2UteS00IGxnOnNwYWNlLXktMFwiPlxyXG4gICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgc3JjPXtkb2N0b3IuaW1hZ2UgfHwgJy9kZWZhdWx0LWRvY3Rvci1pbWFnZS5qcGcnfVxyXG4gICAgICAgICAgICAgICAgYWx0PXtkb2N0b3IubmFtZX1cclxuICAgICAgICAgICAgICAgIHdpZHRoPXsxMjB9XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9ezEyMH1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMzIgaC00MCBsZzp3LTM2IGxnOmgtNDQgcm91bmRlZC1sZyBvYmplY3QtY292ZXIgc2hhZG93LW1kXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIG1sLTUgbGc6bWwtMCBsZzp0ZXh0LWxlZnRcIj5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWxnIGxnOnRleHQteGwgZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktODAwXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtkb2N0b3IubmFtZX1cclxuICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIGxnOnRleHQtYmFzZSB0ZXh0LWdyYXktNjAwIG10LTFcIj5cclxuICAgICAgICAgICAgICAgICAgPHN0cm9uZz5TcGVjaWFsaXphdGlvbjo8L3N0cm9uZz4ge2RvY3Rvci5zcGVjaWFsaXphdGlvbn1cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gbGc6dGV4dC1iYXNlIHRleHQtZ3JheS02MDBcIj5cclxuICAgICAgICAgICAgICAgICAgPHN0cm9uZz5FeHBlcmllbmNlOjwvc3Ryb25nPiB7ZG9jdG9yLmV4cGVyaWVuY2V9XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIGxnOnRleHQtYmFzZSB0ZXh0LWdyYXktNjAwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzdHJvbmc+QXZhaWxhYmlsaXR5Ojwvc3Ryb25nPiB7ZG9jdG9yLmF2YWlsYWJpbGl0eX1cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgaHJlZj17e1xyXG4gICAgICAgICAgICAgICAgICBwYXRobmFtZTogJy9Cb29raW5nJyxcclxuICAgICAgICAgICAgICAgICAgcXVlcnk6IHtcclxuICAgICAgICAgICAgICAgICAgICBkb2N0b3JJbWc6IGRvY3Rvci5pbWFnZSxcclxuICAgICAgICAgICAgICAgICAgICBkb2N0b3JOYW1lOiBkb2N0b3IubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBzcGVjaWFsaXphdGlvbjogZG9jdG9yLnNwZWNpYWxpemF0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgIGV4cGVyaWVuY2U6IGRvY3Rvci5leHBlcmllbmNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGF2YWlsYWJpbGl0eTogZG9jdG9yLmF2YWlsYWJpbGl0eSxcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8aDJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ncm91bmRlZC1mdWxsIGJvcmRlciBib3JkZXItZ3JheS01MDAgcHgtMiAgbXQtMjAgbGc6bXQtNDAgYmcteWVsbG93LTUwIGhvdmVyOmJnLXllbGxvdy0xMDAgY3Vyc29yLXBvaW50ZXIgXHJcbiAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU6YmcteWVsbG93LTMwMCBhY3RpdmU6c2NhbGUtOTUgdGV4dC0yeGwgcGItMSdcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICArXHJcbiAgICAgICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgIHsvKiA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTQgbGc6bXQtNDAgYmcteWVsbG93LTUwMCBob3ZlcjpiZy15ZWxsb3ctNjAwIHRleHQtd2hpdGUgZm9udC1tZWRpdW0gcHgtNCBweS0yIHJvdW5kZWQtZnVsbCBzaGFkb3ctbWQgXHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybSBhY3RpdmU6c2NhbGUtOTUgdHJhbnNpdGlvbiBkdXJhdGlvbi0xNTBcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBCb29rXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj4gKi99XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L2Rpdj5cclxuICAgIFxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRG9jdG9yczsiXSwibmFtZXMiOlsiTGluayIsIkltYWdlIiwidXNlU3RhdGUiLCJkb2N0b3JEYXRhIiwiRG9jdG9ycyIsInNlbGVjdGVkQ2F0ZWdvcnkiLCJzZXRTZWxlY3RlZENhdGVnb3J5IiwiaGFuZGxlQ2F0ZWdvcnlDbGljayIsImNhdGVnb3J5Iiwic2VsZWN0ZWRDYXRlZ29yeURhdGEiLCJmaW5kIiwiZGl2IiwiY2xhc3NOYW1lIiwiZGF0YS1hb3MiLCJkYXRhLWFvcy1kZWxheSIsImRhdGEtYW9zLWVhc2luZyIsImRhdGEtYW9zLWR1cmF0aW9uIiwibWFwIiwiY2F0ZWdvcnlEYXRhIiwiaW5kZXgiLCJvbkNsaWNrIiwic3JjIiwiaW1hZ2UiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsInVsIiwiZG9jdG9ycyIsImRvY3RvciIsImRvY0luZGV4IiwibGkiLCJuYW1lIiwiaDMiLCJwIiwic3Ryb25nIiwic3BlY2lhbGl6YXRpb24iLCJleHBlcmllbmNlIiwiYXZhaWxhYmlsaXR5IiwiaHJlZiIsInBhdGhuYW1lIiwicXVlcnkiLCJkb2N0b3JJbWciLCJkb2N0b3JOYW1lIiwiaDIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/DoctorCard.js\n"));

/***/ })

});
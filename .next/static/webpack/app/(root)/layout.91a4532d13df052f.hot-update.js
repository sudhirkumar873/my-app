"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(root)/layout",{

/***/ "(app-pages-browser)/./app/globals.css":
/*!*************************!*\
  !*** ./app/globals.css ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"ab08efd08c33\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzPzFmNDIiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCJhYjA4ZWZkMDhjMzNcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./components/layout/TopBar.jsx":
/*!**************************************!*\
  !*** ./components/layout/TopBar.jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Add_Logout_Person_Search_mui_icons_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Add,Logout,Person,Search!=!@mui/icons-material */ \"(app-pages-browser)/./node_modules/@mui/icons-material/esm/Search.js\");\n/* harmony import */ var _barrel_optimize_names_Add_Logout_Person_Search_mui_icons_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=Add,Logout,Person,Search!=!@mui/icons-material */ \"(app-pages-browser)/./node_modules/@mui/icons-material/esm/Add.js\");\n/* harmony import */ var _barrel_optimize_names_Add_Logout_Person_Search_mui_icons_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=Add,Logout,Person,Search!=!@mui/icons-material */ \"(app-pages-browser)/./node_modules/@mui/icons-material/esm/Person.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _clerk_nextjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @clerk/nextjs */ \"(app-pages-browser)/./node_modules/@clerk/clerk-react/dist/index.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _clerk_themes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @clerk/themes */ \"(app-pages-browser)/./node_modules/@clerk/themes/dist/themes/src/index.js\");\n/* harmony import */ var _clerk_themes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_clerk_themes__WEBPACK_IMPORTED_MODULE_5__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n// import Loader from \"@components/Loader\";\nconst TopBar = ()=>{\n    _s();\n    const { user, isLoaded } = (0,_clerk_nextjs__WEBPACK_IMPORTED_MODULE_6__.useUser)();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [userData, setUserData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const getUser = async ()=>{\n        const response = await fetch(\"/api/user/\".concat(user.id));\n        const data = await response.json();\n        setUserData(data);\n        setLoading(false);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (user) {\n            getUser();\n        }\n    }, [\n        user\n    ]);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [search, setSearch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    return !isLoaded || loading ? // <Loader />\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Hi\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Lappy\\\\OneDrive\\\\Desktop\\\\Sudhir-File\\\\nextjs-project\\\\my-app\\\\components\\\\layout\\\\TopBar.jsx\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, undefined) //yaad rakhna loader hai\n     : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-between items-center mt-6\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        className: \"search-bar\",\n                        placeholder: \"Search posts, people, ...\",\n                        value: search,\n                        onChange: (e)=>setSearch(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Lappy\\\\OneDrive\\\\Desktop\\\\Sudhir-File\\\\nextjs-project\\\\my-app\\\\components\\\\layout\\\\TopBar.jsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Add_Logout_Person_Search_mui_icons_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        className: \"search-icon\",\n                        onClick: ()=>router.push(\"/search/posts/\".concat(search))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Lappy\\\\OneDrive\\\\Desktop\\\\Sudhir-File\\\\nextjs-project\\\\my-app\\\\components\\\\layout\\\\TopBar.jsx\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Lappy\\\\OneDrive\\\\Desktop\\\\Sudhir-File\\\\nextjs-project\\\\my-app\\\\components\\\\layout\\\\TopBar.jsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"create-post-btn\",\n                onClick: ()=>router.push(\"/create-post\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Add_Logout_Person_Search_mui_icons_material__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Lappy\\\\OneDrive\\\\Desktop\\\\Sudhir-File\\\\nextjs-project\\\\my-app\\\\components\\\\layout\\\\TopBar.jsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, undefined),\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Create A Post\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Lappy\\\\OneDrive\\\\Desktop\\\\Sudhir-File\\\\nextjs-project\\\\my-app\\\\components\\\\layout\\\\TopBar.jsx\",\n                        lineNumber: 58,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Lappy\\\\OneDrive\\\\Desktop\\\\Sudhir-File\\\\nextjs-project\\\\my-app\\\\components\\\\layout\\\\TopBar.jsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex gap-4 md:hidden\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        href: \"/profile/\".concat(userData._id, \"/posts\"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Add_Logout_Person_Search_mui_icons_material__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                            sx: {\n                                fontSize: \"35px\",\n                                color: \"white\"\n                            }\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Lappy\\\\OneDrive\\\\Desktop\\\\Sudhir-File\\\\nextjs-project\\\\my-app\\\\components\\\\layout\\\\TopBar.jsx\",\n                            lineNumber: 63,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Lappy\\\\OneDrive\\\\Desktop\\\\Sudhir-File\\\\nextjs-project\\\\my-app\\\\components\\\\layout\\\\TopBar.jsx\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_clerk_nextjs__WEBPACK_IMPORTED_MODULE_6__.UserButton, {\n                        appearance: {\n                            baseTheme: _clerk_themes__WEBPACK_IMPORTED_MODULE_5__.dark\n                        },\n                        afterSignOutUrl: \"/sign-in\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Lappy\\\\OneDrive\\\\Desktop\\\\Sudhir-File\\\\nextjs-project\\\\my-app\\\\components\\\\layout\\\\TopBar.jsx\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Lappy\\\\OneDrive\\\\Desktop\\\\Sudhir-File\\\\nextjs-project\\\\my-app\\\\components\\\\layout\\\\TopBar.jsx\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Lappy\\\\OneDrive\\\\Desktop\\\\Sudhir-File\\\\nextjs-project\\\\my-app\\\\components\\\\layout\\\\TopBar.jsx\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, undefined);\n};\n_s(TopBar, \"Kz8H4qk5GWBoWizpdvhyzvlIjl0=\", false, function() {\n    return [\n        _clerk_nextjs__WEBPACK_IMPORTED_MODULE_6__.useUser,\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = TopBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TopBar);\nvar _c;\n$RefreshReg$(_c, \"TopBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvbGF5b3V0L1RvcEJhci5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBRTRDO0FBQ3NCO0FBQ3RCO0FBQ2lDO0FBQ2hEO0FBQ0U7QUFDTTtBQUNyQywyQ0FBMkM7QUFFM0MsTUFBTWMsU0FBUzs7SUFDYixNQUFNLEVBQUVDLElBQUksRUFBRUMsUUFBUSxFQUFFLEdBQUdOLHNEQUFPQTtJQUVsQyxNQUFNLENBQUNPLFNBQVNDLFdBQVcsR0FBR2pCLCtDQUFRQSxDQUFDO0lBRXZDLE1BQU0sQ0FBQ2tCLFVBQVVDLFlBQVksR0FBR25CLCtDQUFRQSxDQUFDLENBQUM7SUFFMUMsTUFBTW9CLFVBQVU7UUFDZCxNQUFNQyxXQUFXLE1BQU1DLE1BQU0sYUFBcUIsT0FBUlIsS0FBS1MsRUFBRTtRQUNqRCxNQUFNQyxPQUFPLE1BQU1ILFNBQVNJLElBQUk7UUFDaENOLFlBQVlLO1FBQ1pQLFdBQVc7SUFDYjtJQUVBbEIsZ0RBQVNBLENBQUM7UUFDUixJQUFJZSxNQUFNO1lBQ1JNO1FBQ0Y7SUFDRixHQUFHO1FBQUNOO0tBQUs7SUFFVCxNQUFNWSxTQUFTckIsMERBQVNBO0lBQ3hCLE1BQU0sQ0FBQ3NCLFFBQVFDLFVBQVUsR0FBRzVCLCtDQUFRQSxDQUFDO0lBRXJDLE9BQU8sQ0FBQ2UsWUFBWUMsVUFDbEIsYUFBYTtrQkFDYiw4REFBQ2E7a0JBQUk7Ozs7O2tCQUFRLHdCQUF3QjtxQkFFckMsOERBQUNBO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNDO3dCQUNDQyxNQUFLO3dCQUNMRixXQUFVO3dCQUNWRyxhQUFZO3dCQUNaQyxPQUFPUDt3QkFDUFEsVUFBVSxDQUFDQyxJQUFNUixVQUFVUSxFQUFFQyxNQUFNLENBQUNILEtBQUs7Ozs7OztrQ0FFM0MsOERBQUM5QiwwR0FBTUE7d0JBQ0wwQixXQUFVO3dCQUNWUSxTQUFTLElBQU1aLE9BQU9hLElBQUksQ0FBQyxpQkFBd0IsT0FBUFo7Ozs7Ozs7Ozs7OzswQkFJaEQsOERBQUNhO2dCQUNDVixXQUFVO2dCQUNWUSxTQUFTLElBQU1aLE9BQU9hLElBQUksQ0FBQzs7a0NBRTNCLDhEQUFDdEMsMEdBQUdBOzs7OztvQkFBRztrQ0FBQyw4REFBQ3dDO2tDQUFFOzs7Ozs7Ozs7Ozs7MEJBR2IsOERBQUNaO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ3BCLGlEQUFJQTt3QkFBQ2dDLE1BQU0sWUFBeUIsT0FBYnhCLFNBQVN5QixHQUFHLEVBQUM7a0NBQ25DLDRFQUFDeEMsMEdBQU1BOzRCQUFDeUMsSUFBSTtnQ0FBRUMsVUFBVTtnQ0FBUUMsT0FBTzs0QkFBUTs7Ozs7Ozs7Ozs7a0NBR2pELDhEQUFDdEMscURBQVVBO3dCQUNUdUMsWUFBWTs0QkFBRUMsV0FBV3BDLCtDQUFJQTt3QkFBQzt3QkFDOUJxQyxpQkFBZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUsxQjtHQTdETXBDOztRQUN1Qkosa0RBQU9BO1FBbUJuQkosc0RBQVNBOzs7S0FwQnBCUTtBQStETiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2xheW91dC9Ub3BCYXIuanN4P2QzOWIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEFkZCwgTG9nb3V0LCBQZXJzb24sIFNlYXJjaCB9IGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcclxuaW1wb3J0IHsgU2lnbk91dEJ1dHRvbiwgU2lnbmVkSW4sIFVzZXJCdXR0b24sIHVzZVVzZXIgfSBmcm9tIFwiQGNsZXJrL25leHRqc1wiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgeyBkYXJrIH0gZnJvbSBcIkBjbGVyay90aGVtZXNcIjtcclxuLy8gaW1wb3J0IExvYWRlciBmcm9tIFwiQGNvbXBvbmVudHMvTG9hZGVyXCI7XHJcblxyXG5jb25zdCBUb3BCYXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyB1c2VyLCBpc0xvYWRlZCB9ID0gdXNlVXNlcigpO1xyXG5cclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgY29uc3QgW3VzZXJEYXRhLCBzZXRVc2VyRGF0YV0gPSB1c2VTdGF0ZSh7fSk7XHJcblxyXG4gIGNvbnN0IGdldFVzZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAvYXBpL3VzZXIvJHt1c2VyLmlkfWApO1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIHNldFVzZXJEYXRhKGRhdGEpO1xyXG4gICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICh1c2VyKSB7XHJcbiAgICAgIGdldFVzZXIoKTtcclxuICAgIH1cclxuICB9LCBbdXNlcl0pO1xyXG5cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIHJldHVybiAhaXNMb2FkZWQgfHwgbG9hZGluZyA/IChcclxuICAgIC8vIDxMb2FkZXIgLz5cclxuICAgIDxkaXY+SGk8L2Rpdj4vL3lhYWQgcmFraG5hIGxvYWRlciBoYWlcclxuICApIDogKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgbXQtNlwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJzZWFyY2gtYmFyXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIHBvc3RzLCBwZW9wbGUsIC4uLlwiXHJcbiAgICAgICAgICB2YWx1ZT17c2VhcmNofVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTZWFyY2goZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPFNlYXJjaFxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwic2VhcmNoLWljb25cIlxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goYC9zZWFyY2gvcG9zdHMvJHtzZWFyY2h9YCl9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8YnV0dG9uXHJcbiAgICAgICAgY2xhc3NOYW1lPVwiY3JlYXRlLXBvc3QtYnRuXCJcclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChcIi9jcmVhdGUtcG9zdFwiKX1cclxuICAgICAgPlxyXG4gICAgICAgIDxBZGQgLz4gPHA+Q3JlYXRlIEEgUG9zdDwvcD5cclxuICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTQgbWQ6aGlkZGVuXCI+XHJcbiAgICAgICAgPExpbmsgaHJlZj17YC9wcm9maWxlLyR7dXNlckRhdGEuX2lkfS9wb3N0c2B9PlxyXG4gICAgICAgICAgPFBlcnNvbiBzeD17eyBmb250U2l6ZTogXCIzNXB4XCIsIGNvbG9yOiBcIndoaXRlXCIgfX0gLz5cclxuICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgIDxVc2VyQnV0dG9uXHJcbiAgICAgICAgICBhcHBlYXJhbmNlPXt7IGJhc2VUaGVtZTogZGFyayB9fVxyXG4gICAgICAgICAgYWZ0ZXJTaWduT3V0VXJsPVwiL3NpZ24taW5cIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvcEJhcjtcclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQWRkIiwiTG9nb3V0IiwiUGVyc29uIiwiU2VhcmNoIiwidXNlUm91dGVyIiwiU2lnbk91dEJ1dHRvbiIsIlNpZ25lZEluIiwiVXNlckJ1dHRvbiIsInVzZVVzZXIiLCJMaW5rIiwiSW1hZ2UiLCJkYXJrIiwiVG9wQmFyIiwidXNlciIsImlzTG9hZGVkIiwibG9hZGluZyIsInNldExvYWRpbmciLCJ1c2VyRGF0YSIsInNldFVzZXJEYXRhIiwiZ2V0VXNlciIsInJlc3BvbnNlIiwiZmV0Y2giLCJpZCIsImRhdGEiLCJqc29uIiwicm91dGVyIiwic2VhcmNoIiwic2V0U2VhcmNoIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsIm9uQ2xpY2siLCJwdXNoIiwiYnV0dG9uIiwicCIsImhyZWYiLCJfaWQiLCJzeCIsImZvbnRTaXplIiwiY29sb3IiLCJhcHBlYXJhbmNlIiwiYmFzZVRoZW1lIiwiYWZ0ZXJTaWduT3V0VXJsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/layout/TopBar.jsx\n"));

/***/ })

});
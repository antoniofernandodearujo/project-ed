"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _core_ListaSequencial__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/ListaSequencial */ \"./src/core/ListaSequencial.ts\");\n\nvar _s = $RefreshSig$();\n\n\nfunction Home() {\n    _s();\n    const [list, setList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new _core_ListaSequencial__WEBPACK_IMPORTED_MODULE_2__.ListaSequencial(5, [\n        1,\n        3,\n        5\n    ]));\n    const addToList = (num, pos)=>{\n        const newList = new _core_ListaSequencial__WEBPACK_IMPORTED_MODULE_2__.ListaSequencial(list.max, [\n            ...list.listNumbers\n        ]);\n        newList.addInList(num, pos);\n        setList(newList);\n    };\n    const removeFromList = (num, pos)=>{\n        const newList = new _core_ListaSequencial__WEBPACK_IMPORTED_MODULE_2__.ListaSequencial(list.max, [\n            ...list.listNumbers\n        ]);\n        newList.removeInList(num, pos);\n        setList(newList);\n    };\n    const searchInList = (num, pos)=>{\n        list.searchInList(num, pos);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: list.listNumbers.map((num, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: num\n                    }, index, false, {\n                        fileName: \"/home/antonio/Documentos/MyProjects/ED/project-ed/src/pages/index.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/home/antonio/Documentos/MyProjects/ED/project-ed/src/pages/index.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>addToList(2, 2),\n                children: \"Adicionar 2 na segunda posi\\xe7\\xe3o\"\n            }, void 0, false, {\n                fileName: \"/home/antonio/Documentos/MyProjects/ED/project-ed/src/pages/index.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>removeFromList(undefined, 1),\n                children: \"Remover o primeiro elemento\"\n            }, void 0, false, {\n                fileName: \"/home/antonio/Documentos/MyProjects/ED/project-ed/src/pages/index.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>searchInList(5),\n                children: \"Procurar pelo n\\xfamero 5\"\n            }, void 0, false, {\n                fileName: \"/home/antonio/Documentos/MyProjects/ED/project-ed/src/pages/index.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/antonio/Documentos/MyProjects/ED/project-ed/src/pages/index.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"MiX0lmjUKaK5p8lylxbR7US4oLA=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXVDO0FBQ21CO0FBRTNDLFNBQVNHLE9BQU87O0lBRTdCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHSiwrQ0FBUUEsQ0FBQyxJQUFJQyxrRUFBZUEsQ0FBQyxHQUFHO1FBQUM7UUFBRztRQUFHO0tBQUU7SUFFakUsTUFBTUksWUFBWSxDQUFDQyxLQUFLQyxNQUFRO1FBQzlCLE1BQU1DLFVBQVUsSUFBSVAsa0VBQWVBLENBQUNFLEtBQUtNLEdBQUcsRUFBRTtlQUFJTixLQUFLTyxXQUFXO1NBQUM7UUFDbkVGLFFBQVFHLFNBQVMsQ0FBQ0wsS0FBS0M7UUFDdkJILFFBQVFJO0lBQ1Y7SUFFQSxNQUFNSSxpQkFBaUIsQ0FBQ04sS0FBS0MsTUFBUTtRQUNuQyxNQUFNQyxVQUFVLElBQUlQLGtFQUFlQSxDQUFDRSxLQUFLTSxHQUFHLEVBQUU7ZUFBSU4sS0FBS08sV0FBVztTQUFDO1FBQ25FRixRQUFRSyxZQUFZLENBQUNQLEtBQUtDO1FBQzFCSCxRQUFRSTtJQUNWO0lBRUEsTUFBTU0sZUFBZSxDQUFDUixLQUFLQyxNQUFRO1FBQ2pDSixLQUFLVyxZQUFZLENBQUNSLEtBQUtDO0lBQ3pCO0lBRUEscUJBQ0UsOERBQUNROzswQkFDQyw4REFBQ0M7MEJBQ0ViLEtBQUtPLFdBQVcsQ0FBQ08sR0FBRyxDQUFDLENBQUNYLEtBQUtZLHNCQUMxQiw4REFBQ0M7a0NBQWdCYjt1QkFBUlk7Ozs7Ozs7Ozs7MEJBR2IsOERBQUNFO2dCQUFPQyxTQUFTLElBQU1oQixVQUFVLEdBQUc7MEJBQUk7Ozs7OzswQkFDeEMsOERBQUNlO2dCQUFPQyxTQUFTLElBQU1ULGVBQWVVLFdBQVc7MEJBQUk7Ozs7OzswQkFDckQsOERBQUNGO2dCQUFPQyxTQUFTLElBQU1QLGFBQWE7MEJBQUk7Ozs7Ozs7Ozs7OztBQUc5QyxDQUFDO0dBaEN1Qlo7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD8xOWEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBMaXN0YVNlcXVlbmNpYWwgfSBmcm9tIFwiLi4vY29yZS9MaXN0YVNlcXVlbmNpYWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcblxuICBjb25zdCBbbGlzdCwgc2V0TGlzdF0gPSB1c2VTdGF0ZShuZXcgTGlzdGFTZXF1ZW5jaWFsKDUsIFsxLCAzLCA1XSkpO1xuXG4gIGNvbnN0IGFkZFRvTGlzdCA9IChudW0sIHBvcykgPT4ge1xuICAgIGNvbnN0IG5ld0xpc3QgPSBuZXcgTGlzdGFTZXF1ZW5jaWFsKGxpc3QubWF4LCBbLi4ubGlzdC5saXN0TnVtYmVyc10pO1xuICAgIG5ld0xpc3QuYWRkSW5MaXN0KG51bSwgcG9zKTtcbiAgICBzZXRMaXN0KG5ld0xpc3QpO1xuICB9XG5cbiAgY29uc3QgcmVtb3ZlRnJvbUxpc3QgPSAobnVtLCBwb3MpID0+IHtcbiAgICBjb25zdCBuZXdMaXN0ID0gbmV3IExpc3RhU2VxdWVuY2lhbChsaXN0Lm1heCwgWy4uLmxpc3QubGlzdE51bWJlcnNdKTtcbiAgICBuZXdMaXN0LnJlbW92ZUluTGlzdChudW0sIHBvcyk7XG4gICAgc2V0TGlzdChuZXdMaXN0KTtcbiAgfVxuXG4gIGNvbnN0IHNlYXJjaEluTGlzdCA9IChudW0sIHBvcykgPT4ge1xuICAgIGxpc3Quc2VhcmNoSW5MaXN0KG51bSwgcG9zKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDx1bD5cbiAgICAgICAge2xpc3QubGlzdE51bWJlcnMubWFwKChudW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgPGxpIGtleT17aW5kZXh9PntudW19PC9saT5cbiAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBhZGRUb0xpc3QoMiwgMil9PkFkaWNpb25hciAyIG5hIHNlZ3VuZGEgcG9zacOnw6NvPC9idXR0b24+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHJlbW92ZUZyb21MaXN0KHVuZGVmaW5lZCwgMSl9PlJlbW92ZXIgbyBwcmltZWlybyBlbGVtZW50bzwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZWFyY2hJbkxpc3QoNSl9PlByb2N1cmFyIHBlbG8gbsO6bWVybyA1PC9idXR0b24+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiTGlzdGFTZXF1ZW5jaWFsIiwiSG9tZSIsImxpc3QiLCJzZXRMaXN0IiwiYWRkVG9MaXN0IiwibnVtIiwicG9zIiwibmV3TGlzdCIsIm1heCIsImxpc3ROdW1iZXJzIiwiYWRkSW5MaXN0IiwicmVtb3ZlRnJvbUxpc3QiLCJyZW1vdmVJbkxpc3QiLCJzZWFyY2hJbkxpc3QiLCJkaXYiLCJ1bCIsIm1hcCIsImluZGV4IiwibGkiLCJidXR0b24iLCJvbkNsaWNrIiwidW5kZWZpbmVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});
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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _core_ListaSequencial__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/ListaSequencial */ \"./src/core/ListaSequencial.ts\");\n\nvar _s = $RefreshSig$();\n\n\nfunction Home() {\n    _s();\n    const [newNumber, setNewNumber] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"); // cria um estado para armazenar o valor do input\n    const [newNumberPos, setNewNumberPos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"); // cria um estado para armaz\n    const [myList, setMyList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new _core_ListaSequencial__WEBPACK_IMPORTED_MODULE_2__.ListaSequencial(5, [\n        1,\n        3,\n        5\n    ])); // cria um estado para armazenar a lista\n    function handleAddNumber() {\n        const num = parseInt(newNumber);\n        const pos = parseInt(newNumberPos);\n        myList.addInList(num, pos + 1); // adiciona o número no final da lista\n        setMyList(myList); // atualiza o estado da lista\n        setNewNumber(\"\"); // limpa o input\n    }\n    function handleChange(event) {\n        setNewNumber(event.target.value); // atualiza o estado do input com o valor digitado\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: myList.listNumbers.map((num, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: num\n                    }, index, false, {\n                        fileName: \"/home/antonio/Documentos/MyProjects/ED/project-ed/src/pages/index.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/home/antonio/Documentos/MyProjects/ED/project-ed/src/pages/index.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                value: newNumber,\n                onChange: handleChange\n            }, void 0, false, {\n                fileName: \"/home/antonio/Documentos/MyProjects/ED/project-ed/src/pages/index.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                value: newNumberPos,\n                onChange: (e)=>setNewNumberPos(e.target.value)\n            }, void 0, false, {\n                fileName: \"/home/antonio/Documentos/MyProjects/ED/project-ed/src/pages/index.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/home/antonio/Documentos/MyProjects/ED/project-ed/src/pages/index.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleAddNumber,\n                children: \"Adicionar n\\xfamero\"\n            }, void 0, false, {\n                fileName: \"/home/antonio/Documentos/MyProjects/ED/project-ed/src/pages/index.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/antonio/Documentos/MyProjects/ED/project-ed/src/pages/index.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"nlLq1Fe0E2xnD76Q3DGxuJdT8Ag=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ2tCO0FBRTNDLFNBQVNHLE9BQU87O0lBQzdCLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHSiwrQ0FBUUEsQ0FBQyxLQUFLLGlEQUFpRDtJQUNqRyxNQUFNLENBQUNLLGNBQWNDLGdCQUFnQixHQUFHTiwrQ0FBUUEsQ0FBQyxLQUFLLDRCQUE0QjtJQUNsRixNQUFNLENBQUNPLFFBQVFDLFVBQVUsR0FBR1IsK0NBQVFBLENBQUMsSUFBSUMsa0VBQWVBLENBQUMsR0FBRztRQUFDO1FBQUc7UUFBRztLQUFFLElBQUksd0NBQXdDO0lBRWpILFNBQVNRLGtCQUFrQjtRQUN6QixNQUFNQyxNQUFNQyxTQUFTUjtRQUNyQixNQUFNUyxNQUFNRCxTQUFTTjtRQUNyQkUsT0FBT00sU0FBUyxDQUFDSCxLQUFLRSxNQUFNLElBQUksc0NBQXNDO1FBQ3RFSixVQUFVRCxTQUFTLDZCQUE2QjtRQUNoREgsYUFBYSxLQUFLLGdCQUFnQjtJQUNwQztJQUVBLFNBQVNVLGFBQWFDLEtBQUssRUFBRTtRQUMzQlgsYUFBYVcsTUFBTUMsTUFBTSxDQUFDQyxLQUFLLEdBQUcsa0RBQWtEO0lBQ3RGO0lBRUEscUJBQ0UsOERBQUNDOzswQkFDQyw4REFBQ0M7MEJBQ0VaLE9BQU9hLFdBQVcsQ0FBQ0MsR0FBRyxDQUFDLENBQUNYLEtBQUtZLHNCQUM1Qiw4REFBQ0M7a0NBQWdCYjt1QkFBUlk7Ozs7Ozs7Ozs7MEJBR2IsOERBQUNFO2dCQUFNQyxNQUFLO2dCQUFPUixPQUFPZDtnQkFBV3VCLFVBQVVaOzs7Ozs7MEJBQy9DLDhEQUFDVTtnQkFBTUMsTUFBSztnQkFBT1IsT0FBT1o7Z0JBQWNxQixVQUFVLENBQUNDLElBQU1yQixnQkFBZ0JxQixFQUFFWCxNQUFNLENBQUNDLEtBQUs7Ozs7OzswQkFDdkYsOERBQUNXOzs7OzswQkFDRCw4REFBQ0M7Z0JBQU9DLFNBQVNyQjswQkFBaUI7Ozs7Ozs7Ozs7OztBQUl4QyxDQUFDO0dBL0J1QlA7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD8xOWEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTGlzdGFTZXF1ZW5jaWFsIH0gZnJvbSBcIi4uL2NvcmUvTGlzdGFTZXF1ZW5jaWFsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtuZXdOdW1iZXIsIHNldE5ld051bWJlcl0gPSB1c2VTdGF0ZShcIlwiKTsgLy8gY3JpYSB1bSBlc3RhZG8gcGFyYSBhcm1hemVuYXIgbyB2YWxvciBkbyBpbnB1dFxuICBjb25zdCBbbmV3TnVtYmVyUG9zLCBzZXROZXdOdW1iZXJQb3NdID0gdXNlU3RhdGUoXCJcIik7IC8vIGNyaWEgdW0gZXN0YWRvIHBhcmEgYXJtYXpcbiAgY29uc3QgW215TGlzdCwgc2V0TXlMaXN0XSA9IHVzZVN0YXRlKG5ldyBMaXN0YVNlcXVlbmNpYWwoNSwgWzEsIDMsIDVdKSk7IC8vIGNyaWEgdW0gZXN0YWRvIHBhcmEgYXJtYXplbmFyIGEgbGlzdGFcblxuICBmdW5jdGlvbiBoYW5kbGVBZGROdW1iZXIoKSB7XG4gICAgY29uc3QgbnVtID0gcGFyc2VJbnQobmV3TnVtYmVyKTtcbiAgICBjb25zdCBwb3MgPSBwYXJzZUludChuZXdOdW1iZXJQb3MpXG4gICAgbXlMaXN0LmFkZEluTGlzdChudW0sIHBvcyArIDEpOyAvLyBhZGljaW9uYSBvIG7Dum1lcm8gbm8gZmluYWwgZGEgbGlzdGFcbiAgICBzZXRNeUxpc3QobXlMaXN0KTsgLy8gYXR1YWxpemEgbyBlc3RhZG8gZGEgbGlzdGFcbiAgICBzZXROZXdOdW1iZXIoXCJcIik7IC8vIGxpbXBhIG8gaW5wdXRcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZShldmVudCkge1xuICAgIHNldE5ld051bWJlcihldmVudC50YXJnZXQudmFsdWUpOyAvLyBhdHVhbGl6YSBvIGVzdGFkbyBkbyBpbnB1dCBjb20gbyB2YWxvciBkaWdpdGFkb1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPHVsPlxuICAgICAgICB7bXlMaXN0Lmxpc3ROdW1iZXJzLm1hcCgobnVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT57bnVtfTwvbGk+XG4gICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXtuZXdOdW1iZXJ9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IC8+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17bmV3TnVtYmVyUG9zfSBvbkNoYW5nZT17KGUpID0+IHNldE5ld051bWJlclBvcyhlLnRhcmdldC52YWx1ZSl9Lz5cbiAgICAgIDxiciAvPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVBZGROdW1iZXJ9PkFkaWNpb25hciBuw7ptZXJvPC9idXR0b24+XG4gICAgICBcbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiTGlzdGFTZXF1ZW5jaWFsIiwiSG9tZSIsIm5ld051bWJlciIsInNldE5ld051bWJlciIsIm5ld051bWJlclBvcyIsInNldE5ld051bWJlclBvcyIsIm15TGlzdCIsInNldE15TGlzdCIsImhhbmRsZUFkZE51bWJlciIsIm51bSIsInBhcnNlSW50IiwicG9zIiwiYWRkSW5MaXN0IiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImRpdiIsInVsIiwibGlzdE51bWJlcnMiLCJtYXAiLCJpbmRleCIsImxpIiwiaW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJlIiwiYnIiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});
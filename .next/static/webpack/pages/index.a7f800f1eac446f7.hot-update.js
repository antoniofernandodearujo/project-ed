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

/***/ "./src/core/ListaSimplesmenteEncadeada.ts":
/*!************************************************!*\
  !*** ./src/core/ListaSimplesmenteEncadeada.ts ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ListaSimplesmenteEncadeada\": function() { return /* binding */ ListaSimplesmenteEncadeada; }\n/* harmony export */ });\nclass No {\n    constructor(valor){\n        this.valor = valor;\n        this.proximo = null;\n    }\n}\nclass ListaSimplesmenteEncadeada {\n    adicionar(posicao, valor) {\n        if (posicao < 0 || posicao > this.tamanho) {\n            throw new Error(\"Posi\\xe7\\xe3o inv\\xe1lida.\");\n        }\n        const novoNo = new No(valor);\n        if (posicao === 0) {\n            novoNo.proximo = this.cabeca;\n            this.cabeca = novoNo;\n        } else {\n            let anterior = null;\n            let atual = this.cabeca;\n            while(atual != null && indice < posicao){\n                anterior = atual;\n                atual = atual.proximo;\n                indice++;\n            }\n            if (atual == null) {\n                anterior.proximo = novoNo;\n            } else {\n                novoNo.proximo = atual;\n                anterior.proximo = novoNo;\n            }\n        }\n        this.tamanho++;\n    }\n    constructor(){\n        this.cabeca = null;\n        this.tamanho = 0;\n    }\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29yZS9MaXN0YVNpbXBsZXNtZW50ZUVuY2FkZWFkYS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTUE7SUFJSkMsWUFBWUMsS0FBYSxDQUFFO1FBQ3pCLElBQUksQ0FBQ0EsS0FBSyxHQUFHQTtRQUNiLElBQUksQ0FBQ0MsT0FBTyxHQUFHLElBQUk7SUFDckI7QUFDRjtBQUVPLE1BQU1DO0lBU0pDLFVBQVVDLE9BQWUsRUFBRUosS0FBYSxFQUFRO1FBQ3JELElBQUlJLFVBQVUsS0FBS0EsVUFBVSxJQUFJLENBQUNDLE9BQU8sRUFBRTtZQUN6QyxNQUFNLElBQUlDLE1BQU0sOEJBQXFCO1FBQ3ZDLENBQUM7UUFFRCxNQUFNQyxTQUFTLElBQUlULEdBQUdFO1FBRXRCLElBQUlJLFlBQVksR0FBRztZQUNqQkcsT0FBT04sT0FBTyxHQUFHLElBQUksQ0FBQ08sTUFBTTtZQUM1QixJQUFJLENBQUNBLE1BQU0sR0FBR0Q7UUFDaEIsT0FBTztZQUNMLElBQUlFLFdBQVcsSUFBSTtZQUNuQixJQUFJQyxRQUFtQixJQUFJLENBQUNGLE1BQU07WUFFbEMsTUFBT0UsU0FBUyxJQUFJLElBQUlDLFNBQVNQLFFBQVM7Z0JBQ3hDSyxXQUFXQztnQkFDWEEsUUFBUUEsTUFBTVQsT0FBTztnQkFDckJVO1lBQ0Y7WUFFQSxJQUFJRCxTQUFTLElBQUksRUFBRTtnQkFDakJELFNBQVVSLE9BQU8sR0FBR007WUFDdEIsT0FBTztnQkFDTEEsT0FBT04sT0FBTyxHQUFHUztnQkFDakJELFNBQVVSLE9BQU8sR0FBR007WUFDdEIsQ0FBQztRQUNILENBQUM7UUFHRCxJQUFJLENBQUNGLE9BQU87SUFDZDtJQW5DQU4sYUFBYztRQUNaLElBQUksQ0FBQ1MsTUFBTSxHQUFHLElBQUk7UUFDbEIsSUFBSSxDQUFDSCxPQUFPLEdBQUc7SUFDakI7QUFpQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29yZS9MaXN0YVNpbXBsZXNtZW50ZUVuY2FkZWFkYS50cz9lZTZiIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIE5vIHtcbiAgcHVibGljIHZhbG9yOiBudW1iZXI7XG4gIHB1YmxpYyBwcm94aW1vOiBObyB8IG51bGw7XG5cbiAgY29uc3RydWN0b3IodmFsb3I6IG51bWJlcikge1xuICAgIHRoaXMudmFsb3IgPSB2YWxvcjtcbiAgICB0aGlzLnByb3hpbW8gPSBudWxsO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMaXN0YVNpbXBsZXNtZW50ZUVuY2FkZWFkYSB7XG4gIHByaXZhdGUgY2FiZWNhOiBObyB8IG51bGw7XG4gIHByaXZhdGUgdGFtYW5obzogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY2FiZWNhID0gbnVsbDtcbiAgICB0aGlzLnRhbWFuaG8gPSAwO1xuICB9XG5cbiAgcHVibGljIGFkaWNpb25hcihwb3NpY2FvOiBudW1iZXIsIHZhbG9yOiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAocG9zaWNhbyA8IDAgfHwgcG9zaWNhbyA+IHRoaXMudGFtYW5obykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdQb3Npw6fDo28gaW52w6FsaWRhLicpO1xuICAgIH1cblxuICAgIGNvbnN0IG5vdm9ObyA9IG5ldyBObyh2YWxvcik7XG5cbiAgICBpZiAocG9zaWNhbyA9PT0gMCkge1xuICAgICAgbm92b05vLnByb3hpbW8gPSB0aGlzLmNhYmVjYTtcbiAgICAgIHRoaXMuY2FiZWNhID0gbm92b05vO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgYW50ZXJpb3IgPSBudWxsO1xuICAgICAgbGV0IGF0dWFsOiBObyB8IG51bGwgPSB0aGlzLmNhYmVjYTtcbiAgICBcbiAgICAgIHdoaWxlIChhdHVhbCAhPSBudWxsICYmIGluZGljZSA8IHBvc2ljYW8pIHsgLy8gYWRpY2lvbmFtb3MgYSB2ZXJpZmljYcOnw6NvIHNlIGF0dWFsIG7Do28gw6kgbnVsbFxuICAgICAgICBhbnRlcmlvciA9IGF0dWFsO1xuICAgICAgICBhdHVhbCA9IGF0dWFsLnByb3hpbW87XG4gICAgICAgIGluZGljZSsrO1xuICAgICAgfVxuICAgIFxuICAgICAgaWYgKGF0dWFsID09IG51bGwpIHsgLy8gdmVyaWZpY2Ftb3Mgc2UgYXR1YWwgw6kgbnVsbFxuICAgICAgICBhbnRlcmlvciEucHJveGltbyA9IG5vdm9ObztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vdm9Oby5wcm94aW1vID0gYXR1YWw7XG4gICAgICAgIGFudGVyaW9yIS5wcm94aW1vID0gbm92b05vO1xuICAgICAgfVxuICAgIH1cbiAgICBcblxuICAgIHRoaXMudGFtYW5obysrO1xuICB9XG59XG4iXSwibmFtZXMiOlsiTm8iLCJjb25zdHJ1Y3RvciIsInZhbG9yIiwicHJveGltbyIsIkxpc3RhU2ltcGxlc21lbnRlRW5jYWRlYWRhIiwiYWRpY2lvbmFyIiwicG9zaWNhbyIsInRhbWFuaG8iLCJFcnJvciIsIm5vdm9ObyIsImNhYmVjYSIsImFudGVyaW9yIiwiYXR1YWwiLCJpbmRpY2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/core/ListaSimplesmenteEncadeada.ts\n"));

/***/ }),

/***/ "./src/pages/listaSimplesmenteEncadeada/index.tsx":
/*!********************************************************!*\
  !*** ./src/pages/listaSimplesmenteEncadeada/index.tsx ***!
  \********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ListaSimplesmenteEncadeadaComponent; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_core_ListaSimplesmenteEncadeada__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/src/core/ListaSimplesmenteEncadeada */ \"./src/core/ListaSimplesmenteEncadeada.ts\");\n\n\n\nfunction ListaSimplesmenteEncadeadaComponent() {\n    const minhaLista = new _src_core_ListaSimplesmenteEncadeada__WEBPACK_IMPORTED_MODULE_2__.ListaSimplesmenteEncadeada();\n    minhaLista.adicionar(0, 10); // adiciona o número 10 na primeira posição da lista\n    minhaLista.adicionar(1, 20); // adiciona o número 20 na segunda posição da lista\n    minhaLista.adicionar(0, 30); // adiciona o número 30 na primeira posição da lista\n    console.log(minhaLista); // imprime a lista no console\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n        fileName: \"/home/antonio/Documentos/MyProjects/ED/project-ed/src/pages/listaSimplesmenteEncadeada/index.tsx\",\n        lineNumber: 16,\n        columnNumber: 7\n    }, this);\n}\n_c = ListaSimplesmenteEncadeadaComponent;\nvar _c;\n$RefreshReg$(_c, \"ListaSimplesmenteEncadeadaComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvbGlzdGFTaW1wbGVzbWVudGVFbmNhZGVhZGEvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBd0M7QUFDMkM7QUFFcEUsU0FBU0Usc0NBQXNDO0lBRTVELE1BQU1DLGFBQWEsSUFBSUYsNEZBQTBCQTtJQUVqREUsV0FBV0MsU0FBUyxDQUFDLEdBQUcsS0FBSyxvREFBb0Q7SUFDakZELFdBQVdDLFNBQVMsQ0FBQyxHQUFHLEtBQUssbURBQW1EO0lBQ2hGRCxXQUFXQyxTQUFTLENBQUMsR0FBRyxLQUFLLG9EQUFvRDtJQUVqRkMsUUFBUUMsR0FBRyxDQUFDSCxhQUFhLDZCQUE2QjtJQUd0RCxxQkFDSSw4REFBQ0k7Ozs7O0FBRVAsQ0FBQztLQWR1QkwiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2xpc3RhU2ltcGxlc21lbnRlRW5jYWRlYWRhL2luZGV4LnRzeD9hZGI0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTGlzdGFTaW1wbGVzbWVudGVFbmNhZGVhZGEgfSBmcm9tIFwiQC9zcmMvY29yZS9MaXN0YVNpbXBsZXNtZW50ZUVuY2FkZWFkYVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMaXN0YVNpbXBsZXNtZW50ZUVuY2FkZWFkYUNvbXBvbmVudCgpIHtcblxuICBjb25zdCBtaW5oYUxpc3RhID0gbmV3IExpc3RhU2ltcGxlc21lbnRlRW5jYWRlYWRhKCk7XG5cbiAgbWluaGFMaXN0YS5hZGljaW9uYXIoMCwgMTApOyAvLyBhZGljaW9uYSBvIG7Dum1lcm8gMTAgbmEgcHJpbWVpcmEgcG9zacOnw6NvIGRhIGxpc3RhXG4gIG1pbmhhTGlzdGEuYWRpY2lvbmFyKDEsIDIwKTsgLy8gYWRpY2lvbmEgbyBuw7ptZXJvIDIwIG5hIHNlZ3VuZGEgcG9zacOnw6NvIGRhIGxpc3RhXG4gIG1pbmhhTGlzdGEuYWRpY2lvbmFyKDAsIDMwKTsgLy8gYWRpY2lvbmEgbyBuw7ptZXJvIDMwIG5hIHByaW1laXJhIHBvc2nDp8OjbyBkYSBsaXN0YVxuXG4gIGNvbnNvbGUubG9nKG1pbmhhTGlzdGEpOyAvLyBpbXByaW1lIGEgbGlzdGEgbm8gY29uc29sZVxuXG5cbiAgcmV0dXJuIChcbiAgICAgIDxkaXY+PC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJMaXN0YVNpbXBsZXNtZW50ZUVuY2FkZWFkYSIsIkxpc3RhU2ltcGxlc21lbnRlRW5jYWRlYWRhQ29tcG9uZW50IiwibWluaGFMaXN0YSIsImFkaWNpb25hciIsImNvbnNvbGUiLCJsb2ciLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/listaSimplesmenteEncadeada/index.tsx\n"));

/***/ })

});
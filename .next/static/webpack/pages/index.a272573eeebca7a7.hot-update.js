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

/***/ "./src/core/ListaSequencial.ts":
/*!*************************************!*\
  !*** ./src/core/ListaSequencial.ts ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ListaSequencial\": function() { return /* binding */ ListaSequencial; }\n/* harmony export */ });\nclass ListaSequencial {\n    listIsfull() {\n        return this.nElements === 0;\n    }\n    addInList(num, pos) {\n        if (pos > this.nElements + 1) {\n            alert(\"Posi\\xe7\\xe3o inv\\xe1lida.\");\n            return;\n        }\n        if (this.listIsfull()) {\n            alert(\"A lista j\\xe1 atingiu seu tamanho m\\xe1ximo.\");\n            return;\n        }\n        const index = parseInt(String(pos)) - 1;\n        if (index >= 0 && index < this.max) {} else {\n            alert(\"Posi\\xe7\\xe3o inv\\xe1lida.\");\n            return;\n        }\n        this.nElements++;\n    // Adiciona o elemento na\n    }\n    removeInList(num, pos) {\n        if (pos !== undefined && num !== undefined) {\n            alert(\"Informe apenas a posi\\xe7\\xe3o ou o n\\xfamero a ser removido.\");\n            return;\n        }\n        if (pos === undefined && num === undefined) {\n            alert(\"Informe a posi\\xe7\\xe3o ou o n\\xfamero a ser removido.\");\n            return;\n        }\n        let newList = [];\n        if (pos !== undefined) {\n            const index = parseInt(String(pos)) - 1;\n            if (index >= 0 && index < this.listNumbers.length) {\n                newList = [\n                    ...this.listNumbers.slice(0, index),\n                    ...this.listNumbers.slice(index + 1)\n                ];\n                this.listNumbers = newList;\n            } else {\n                alert(\"Posi\\xe7\\xe3o inv\\xe1lida.\");\n            }\n        } else if (num !== undefined) {\n            const index = this.listNumbers.indexOf(num);\n            if (index > -1) {\n                newList = [\n                    ...this.listNumbers.slice(0, index),\n                    ...this.listNumbers.slice(index + 1)\n                ];\n                this.listNumbers = newList;\n            } else {\n                alert(\"O n\\xfamero \".concat(num, \" n\\xe3o existe na lista.\"));\n            }\n        }\n    }\n    searchInList(num, pos) {\n        if (num !== undefined) {\n            const index = this.listNumbers.indexOf(num);\n            if (index > -1) {\n                alert(\"O n\\xfamero \".concat(num, \" existe na lista e est\\xe1 na posi\\xe7\\xe3o \").concat(index + 1, \"!\"));\n            } else {\n                alert(\"O n\\xfamero \".concat(num, \" n\\xe3o existe na lista.\"));\n            }\n        } else if (pos !== undefined) {\n            const index = parseInt(String(pos)) - 1;\n            if (index >= 0 && index < this.listNumbers.length) {\n                alert(\"O elemento na posi\\xe7\\xe3o \".concat(pos, \" \\xe9 o n\\xfamero \").concat(this.listNumbers[index], \".\"));\n            } else {\n                alert(\"Posi\\xe7\\xe3o inv\\xe1lida.\");\n            }\n        } else {\n            alert(\"Informe a posi\\xe7\\xe3o ou o n\\xfamero a ser pesquisado.\");\n        }\n    }\n    constructor(max, listNumbers){\n        this.nElements = 0;\n        this.max = max;\n        this.listNumbers = listNumbers;\n    }\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtRQUNYLElBQUksQ0FBQ0ksV0FBVyxHQUFHQTtJQUNyQjtBQWtGRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb3JlL0xpc3RhU2VxdWVuY2lhbC50cz9hNWRkIl0sInNvdXJjZXNDb250ZW50IjpbImludGVyZmFjZSBMaXN0SW50ZXJmYWNlIHtcbiAgbWF4OiBudW1iZXI7XG4gIG5FbGVtZW50czogbnVtYmVyO1xuICBsaXN0TnVtYmVyczogbnVtYmVyW107XG4gIGFkZEluTGlzdDogKG51bTogbnVtYmVyLCBwb3M6IG51bWJlcikgPT4gdm9pZDtcbiAgcmVtb3ZlSW5MaXN0OiAobnVtPzogbnVtYmVyLCBwb3M/OiBudW1iZXIpID0+IHZvaWQ7XG4gIHNlYXJjaEluTGlzdDogKG51bT86IG51bWJlciwgcG9zPzogbnVtYmVyKSA9PiB2b2lkO1xufVxuICBcbmV4cG9ydCBjbGFzcyBMaXN0YVNlcXVlbmNpYWwgaW1wbGVtZW50cyBMaXN0SW50ZXJmYWNlIHtcbiAgbWF4OiBudW1iZXI7XG4gIGxpc3ROdW1iZXJzOiBudW1iZXJbXTtcbiAgbkVsZW1lbnRzOiBudW1iZXIgPSAwO1xuXG4gIGNvbnN0cnVjdG9yKG1heDogbnVtYmVyLCBsaXN0TnVtYmVyczogbnVtYmVyW10pIHtcbiAgICB0aGlzLm1heCA9IG1heDtcbiAgICB0aGlzLmxpc3ROdW1iZXJzID0gbGlzdE51bWJlcnM7XG4gIH1cblxuICBwcml2YXRlIGxpc3RJc2Z1bGwoKSB7XG4gICAgcmV0dXJuIHRoaXMubkVsZW1lbnRzID09PSAwO1xuICB9XG5cbiAgYWRkSW5MaXN0KG51bTogbnVtYmVyLCBwb3M6IG51bWJlcikge1xuICAgIFxuICAgIGlmKHBvcyA+IHRoaXMubkVsZW1lbnRzICsgMSl7IC8vIFZlcmlmaWNhw6fDo28gZGUgcG9zacOnw6NvIDFcbiAgICAgIGFsZXJ0KCdQb3Npw6fDo28gaW52w6FsaWRhLicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmxpc3RJc2Z1bGwoKSkge1xuICAgICAgYWxlcnQoJ0EgbGlzdGEgasOhIGF0aW5naXUgc2V1IHRhbWFuaG8gbcOheGltby4nKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBpbmRleCA9IHBhcnNlSW50KFN0cmluZyhwb3MpKSAtIDE7XG4gICAgaWYgKGluZGV4ID49IDAgJiYgaW5kZXggPCB0aGlzLm1heCkgeyAvLyBWZXJpZmljYcOnw6NvIGRlIHBvc2nDp8OjbyAyXG4gICAgfWVsc2V7XG4gICAgICBhbGVydCgnUG9zacOnw6NvIGludsOhbGlkYS4nKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLm5FbGVtZW50cysrO1xuICAgIC8vIEFkaWNpb25hIG8gZWxlbWVudG8gbmFcbiAgfVxuICBcbiAgcmVtb3ZlSW5MaXN0KG51bT86IG51bWJlciwgcG9zPzogbnVtYmVyKSB7XG4gICAgaWYgKHBvcyAhPT0gdW5kZWZpbmVkICYmIG51bSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBhbGVydCgnSW5mb3JtZSBhcGVuYXMgYSBwb3Npw6fDo28gb3UgbyBuw7ptZXJvIGEgc2VyIHJlbW92aWRvLicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmKHBvcyA9PT0gdW5kZWZpbmVkICYmIG51bSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBhbGVydCgnSW5mb3JtZSBhIHBvc2nDp8OjbyBvdSBvIG7Dum1lcm8gYSBzZXIgcmVtb3ZpZG8uJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IG5ld0xpc3QgPSBbXTtcblxuICAgIGlmIChwb3MgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3QgaW5kZXggPSBwYXJzZUludChTdHJpbmcocG9zKSkgLSAxO1xuICAgICAgaWYgKGluZGV4ID49IDAgJiYgaW5kZXggPCB0aGlzLmxpc3ROdW1iZXJzLmxlbmd0aCkge1xuICAgICAgICBuZXdMaXN0ID0gWy4uLnRoaXMubGlzdE51bWJlcnMuc2xpY2UoMCwgaW5kZXgpLCAuLi50aGlzLmxpc3ROdW1iZXJzLnNsaWNlKGluZGV4ICsgMSldO1xuICAgICAgICB0aGlzLmxpc3ROdW1iZXJzID0gbmV3TGlzdDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFsZXJ0KCdQb3Npw6fDo28gaW52w6FsaWRhLicpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAobnVtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5saXN0TnVtYmVycy5pbmRleE9mKG51bSk7XG4gICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICBuZXdMaXN0ID0gWy4uLnRoaXMubGlzdE51bWJlcnMuc2xpY2UoMCwgaW5kZXgpLCAuLi50aGlzLmxpc3ROdW1iZXJzLnNsaWNlKGluZGV4ICsgMSldO1xuICAgICAgICB0aGlzLmxpc3ROdW1iZXJzID0gbmV3TGlzdDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFsZXJ0KGBPIG7Dum1lcm8gJHtudW19IG7Do28gZXhpc3RlIG5hIGxpc3RhLmApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNlYXJjaEluTGlzdChudW0/OiBudW1iZXIsIHBvcz86IG51bWJlcikge1xuICAgIGlmIChudW0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmxpc3ROdW1iZXJzLmluZGV4T2YobnVtKTtcbiAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgIGFsZXJ0KGBPIG7Dum1lcm8gJHtudW19IGV4aXN0ZSBuYSBsaXN0YSBlIGVzdMOhIG5hIHBvc2nDp8OjbyAke2luZGV4ICsgMX0hYCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhbGVydChgTyBuw7ptZXJvICR7bnVtfSBuw6NvIGV4aXN0ZSBuYSBsaXN0YS5gKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHBvcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zdCBpbmRleCA9IHBhcnNlSW50KFN0cmluZyhwb3MpKSAtIDE7XG4gICAgICBpZiAoaW5kZXggPj0gMCAmJiBpbmRleCA8IHRoaXMubGlzdE51bWJlcnMubGVuZ3RoKSB7XG4gICAgICAgIGFsZXJ0KGBPIGVsZW1lbnRvIG5hIHBvc2nDp8OjbyAke3Bvc30gw6kgbyBuw7ptZXJvICR7dGhpcy5saXN0TnVtYmVyc1tpbmRleF19LmApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWxlcnQoJ1Bvc2nDp8OjbyBpbnbDoWxpZGEuJyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGFsZXJ0KCdJbmZvcm1lIGEgcG9zacOnw6NvIG91IG8gbsO6bWVybyBhIHNlciBwZXNxdWlzYWRvLicpO1xuICAgIH1cbiAgfVxuXG4gIFxufSJdLCJuYW1lcyI6WyJMaXN0YVNlcXVlbmNpYWwiLCJsaXN0SXNmdWxsIiwibkVsZW1lbnRzIiwiYWRkSW5MaXN0IiwibnVtIiwicG9zIiwiYWxlcnQiLCJpbmRleCIsInBhcnNlSW50IiwiU3RyaW5nIiwibWF4IiwicmVtb3ZlSW5MaXN0IiwidW5kZWZpbmVkIiwibmV3TGlzdCIsImxpc3ROdW1iZXJzIiwibGVuZ3RoIiwic2xpY2UiLCJpbmRleE9mIiwic2VhcmNoSW5MaXN0IiwiY29uc3RydWN0b3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/core/ListaSequencial.ts\n"));

/***/ })

});
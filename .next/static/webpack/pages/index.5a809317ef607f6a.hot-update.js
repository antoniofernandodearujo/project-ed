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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ListaSequencial\": function() { return /* binding */ ListaSequencial; }\n/* harmony export */ });\nclass ListaSequencial {\n    addInList(num, pos) {\n        const index = parseInt(String(pos)) - 1;\n        if (this.listNumbers.length >= this.max) {\n            alert(\"A lista j\\xe1 atingiu seu tamanho m\\xe1ximo.\");\n            return;\n        }\n        if (pos > this.listNumbers.length || pos < 1) {\n            alert(\"Posi\\xe7\\xe3o inv\\xe1lida.\");\n            return;\n        }\n        const newList = [\n            ...this.listNumbers.slice(0, index),\n            num,\n            ...this.listNumbers.slice(index)\n        ];\n        this.listNumbers = newList;\n    }\n    removeInList(num, pos) {\n        if (pos !== undefined && num !== undefined) {\n            alert(\"Informe apenas a posi\\xe7\\xe3o ou o n\\xfamero a ser removido.\");\n            return;\n        }\n        if (pos === undefined && num === undefined) {\n            alert(\"Informe a posi\\xe7\\xe3o ou o n\\xfamero a ser removido.\");\n            return;\n        }\n        let newList = [];\n        if (pos !== undefined) {\n            const index = parseInt(String(pos)) - 1;\n            if (index >= 0 && index < this.listNumbers.length) {\n                newList = [\n                    ...this.listNumbers.slice(0, index),\n                    ...this.listNumbers.slice(index + 1)\n                ];\n                this.listNumbers = newList;\n            } else {\n                alert(\"Posi\\xe7\\xe3o inv\\xe1lida.\");\n            }\n        } else if (num !== undefined) {\n            const index = this.listNumbers.indexOf(num);\n            if (index > -1) {\n                newList = [\n                    ...this.listNumbers.slice(0, index),\n                    ...this.listNumbers.slice(index + 1)\n                ];\n            } else {\n                alert(\"O n\\xfamero \".concat(num, \" n\\xe3o existe na lista.\"));\n            }\n        }\n    }\n    searchInList(num, pos) {\n        if (num !== undefined) {\n            const index = this.listNumbers.indexOf(num);\n            if (index > -1) {\n                alert(\"O n\\xfamero \".concat(num, \" existe na lista e est\\xe1 na posi\\xe7\\xe3o \").concat(index + 1, \"!\"));\n            } else {\n                alert(\"O n\\xfamero \".concat(num, \" n\\xe3o existe na lista.\"));\n            }\n        } else if (pos !== undefined) {\n            const index = parseInt(String(pos)) - 1;\n            if (index >= 0 && index < this.listNumbers.length) {\n                alert(\"O elemento na posi\\xe7\\xe3o \".concat(pos, \" \\xe9 o n\\xfamero \").concat(this.listNumbers[index], \".\"));\n            } else {\n                alert(\"Posi\\xe7\\xe3o inv\\xe1lida.\");\n            }\n        } else {\n            alert(\"Informe a posi\\xe7\\xe3o ou o n\\xfamero a ser pesquisado.\");\n        }\n    }\n    constructor(max, listNumbers){\n        this.max = max;\n        this.listNumbers = listNumbers;\n    }\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFHQTtJQUNyQjtBQXNFRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb3JlL0xpc3RhU2VxdWVuY2lhbC50cz9hNWRkIl0sInNvdXJjZXNDb250ZW50IjpbImludGVyZmFjZSBMaXN0SW50ZXJmYWNlIHtcbiAgbWF4OiBudW1iZXI7XG4gIGxpc3ROdW1iZXJzOiBudW1iZXJbXTtcbiAgYWRkSW5MaXN0OiAobnVtOiBudW1iZXIsIHBvczogbnVtYmVyKSA9PiB2b2lkO1xuICByZW1vdmVJbkxpc3Q6IChudW0/OiBudW1iZXIsIHBvcz86IG51bWJlcikgPT4gdm9pZDtcbiAgc2VhcmNoSW5MaXN0OiAobnVtPzogbnVtYmVyLCBwb3M/OiBudW1iZXIpID0+IHZvaWQ7XG59XG4gIFxuZXhwb3J0IGNsYXNzIExpc3RhU2VxdWVuY2lhbCBpbXBsZW1lbnRzIExpc3RJbnRlcmZhY2Uge1xuICBtYXg6IG51bWJlcjtcbiAgbGlzdE51bWJlcnM6IG51bWJlcltdO1xuXG4gIGNvbnN0cnVjdG9yKG1heDogbnVtYmVyLCBsaXN0TnVtYmVyczogbnVtYmVyW10pIHtcbiAgICB0aGlzLm1heCA9IG1heDtcbiAgICB0aGlzLmxpc3ROdW1iZXJzID0gbGlzdE51bWJlcnM7XG4gIH1cblxuICBhZGRJbkxpc3QobnVtOiBudW1iZXIsIHBvczogbnVtYmVyKSB7XG4gICAgY29uc3QgaW5kZXggPSBwYXJzZUludChTdHJpbmcocG9zKSkgLSAxO1xuXG4gICAgaWYodGhpcy5saXN0TnVtYmVycy5sZW5ndGggPj0gdGhpcy5tYXgpIHtcbiAgICAgIGFsZXJ0KCdBIGxpc3RhIGrDoSBhdGluZ2l1IHNldSB0YW1hbmhvIG3DoXhpbW8uJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICBcbiAgICBpZihwb3MgPiB0aGlzLmxpc3ROdW1iZXJzLmxlbmd0aCB8fCBwb3MgPCAxKSB7XG4gICAgICBhbGVydCgnUG9zacOnw6NvIGludsOhbGlkYS4nKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBuZXdMaXN0ID0gWy4uLnRoaXMubGlzdE51bWJlcnMuc2xpY2UoMCwgaW5kZXgpLCBudW0sIC4uLnRoaXMubGlzdE51bWJlcnMuc2xpY2UoaW5kZXgpXTtcbiAgXG4gICAgdGhpcy5saXN0TnVtYmVycyA9IG5ld0xpc3Q7XG4gIH1cbiAgXG4gIHJlbW92ZUluTGlzdChudW0/OiBudW1iZXIsIHBvcz86IG51bWJlcikge1xuICAgIGlmIChwb3MgIT09IHVuZGVmaW5lZCAmJiBudW0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgYWxlcnQoJ0luZm9ybWUgYXBlbmFzIGEgcG9zacOnw6NvIG91IG8gbsO6bWVybyBhIHNlciByZW1vdmlkby4nKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZihwb3MgPT09IHVuZGVmaW5lZCAmJiBudW0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgYWxlcnQoJ0luZm9ybWUgYSBwb3Npw6fDo28gb3UgbyBuw7ptZXJvIGEgc2VyIHJlbW92aWRvLicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBuZXdMaXN0ID0gW107XG5cbiAgICBpZiAocG9zICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gcGFyc2VJbnQoU3RyaW5nKHBvcykpIC0gMTtcbiAgICAgIGlmIChpbmRleCA+PSAwICYmIGluZGV4IDwgdGhpcy5saXN0TnVtYmVycy5sZW5ndGgpIHtcbiAgICAgICAgbmV3TGlzdCA9IFsuLi50aGlzLmxpc3ROdW1iZXJzLnNsaWNlKDAsIGluZGV4KSwgLi4udGhpcy5saXN0TnVtYmVycy5zbGljZShpbmRleCArIDEpXTtcbiAgICAgICAgdGhpcy5saXN0TnVtYmVycyA9IG5ld0xpc3Q7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhbGVydCgnUG9zacOnw6NvIGludsOhbGlkYS4nKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG51bSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zdCBpbmRleCA9IHRoaXMubGlzdE51bWJlcnMuaW5kZXhPZihudW0pO1xuICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgbmV3TGlzdCA9IFsuLi50aGlzLmxpc3ROdW1iZXJzLnNsaWNlKDAsIGluZGV4KSwgLi4udGhpcy5saXN0TnVtYmVycy5zbGljZShpbmRleCArIDEpXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFsZXJ0KGBPIG7Dum1lcm8gJHtudW19IG7Do28gZXhpc3RlIG5hIGxpc3RhLmApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNlYXJjaEluTGlzdChudW0/OiBudW1iZXIsIHBvcz86IG51bWJlcikge1xuICAgIGlmIChudW0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmxpc3ROdW1iZXJzLmluZGV4T2YobnVtKTtcbiAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgIGFsZXJ0KGBPIG7Dum1lcm8gJHtudW19IGV4aXN0ZSBuYSBsaXN0YSBlIGVzdMOhIG5hIHBvc2nDp8OjbyAke2luZGV4ICsgMX0hYCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhbGVydChgTyBuw7ptZXJvICR7bnVtfSBuw6NvIGV4aXN0ZSBuYSBsaXN0YS5gKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHBvcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zdCBpbmRleCA9IHBhcnNlSW50KFN0cmluZyhwb3MpKSAtIDE7XG4gICAgICBpZiAoaW5kZXggPj0gMCAmJiBpbmRleCA8IHRoaXMubGlzdE51bWJlcnMubGVuZ3RoKSB7XG4gICAgICAgIGFsZXJ0KGBPIGVsZW1lbnRvIG5hIHBvc2nDp8OjbyAke3Bvc30gw6kgbyBuw7ptZXJvICR7dGhpcy5saXN0TnVtYmVyc1tpbmRleF19LmApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWxlcnQoJ1Bvc2nDp8OjbyBpbnbDoWxpZGEuJyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGFsZXJ0KCdJbmZvcm1lIGEgcG9zacOnw6NvIG91IG8gbsO6bWVybyBhIHNlciBwZXNxdWlzYWRvLicpO1xuICAgIH1cbiAgfVxufSJdLCJuYW1lcyI6WyJMaXN0YVNlcXVlbmNpYWwiLCJhZGRJbkxpc3QiLCJudW0iLCJwb3MiLCJpbmRleCIsInBhcnNlSW50IiwiU3RyaW5nIiwibGlzdE51bWJlcnMiLCJsZW5ndGgiLCJtYXgiLCJhbGVydCIsIm5ld0xpc3QiLCJzbGljZSIsInJlbW92ZUluTGlzdCIsInVuZGVmaW5lZCIsImluZGV4T2YiLCJzZWFyY2hJbkxpc3QiLCJjb25zdHJ1Y3RvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/core/ListaSequencial.ts\n"));

/***/ })

});
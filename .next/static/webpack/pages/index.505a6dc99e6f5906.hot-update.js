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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ListaSequencial\": function() { return /* binding */ ListaSequencial; }\n/* harmony export */ });\nclass ListaSequencial {\n    listIsfull() {\n        return this.nElements === this.max;\n    }\n    addInList(num, pos) {\n        if (pos > this.nElements + 1) {\n            alert(\"Posi\\xe7\\xe3o inv\\xe1lida.\");\n            return;\n        }\n        if (this.listIsfull()) {\n            alert(\"A lista j\\xe1 atingiu seu tamanho m\\xe1ximo.\");\n            return;\n        }\n        const index = parseInt(String(pos)) - 1;\n        if (index >= 0 && index < this.max) {} else {\n            alert(\"Posi\\xe7\\xe3o inv\\xe1lida.\");\n            return;\n        }\n        this.nElements++;\n        // Adiciona o elemento na\n        this.listNumbers = [\n            ...this.listNumbers.slice(0, index),\n            num,\n            ...this.listNumbers.slice(index)\n        ];\n    }\n    removeInList(num, pos) {\n        if (pos !== undefined && num !== undefined) {\n            alert(\"Informe apenas a posi\\xe7\\xe3o ou o n\\xfamero a ser removido.\");\n            return;\n        }\n        if (pos === undefined && num === undefined) {\n            alert(\"Informe a posi\\xe7\\xe3o ou o n\\xfamero a ser removido.\");\n            return;\n        }\n        let newList = [];\n        if (pos !== undefined) {\n            const index = parseInt(String(pos)) - 1;\n            if (index >= 0 && index < this.listNumbers.length) {\n                newList = [\n                    ...this.listNumbers.slice(0, index),\n                    ...this.listNumbers.slice(index + 1)\n                ];\n                this.listNumbers = newList;\n            } else {\n                alert(\"Posi\\xe7\\xe3o inv\\xe1lida.\");\n            }\n        } else if (num !== undefined) {\n            const index = this.listNumbers.indexOf(num);\n            if (index > -1) {\n                newList = [\n                    ...this.listNumbers.slice(0, index),\n                    ...this.listNumbers.slice(index + 1)\n                ];\n                this.listNumbers = newList;\n            } else {\n                alert(\"O n\\xfamero \".concat(num, \" n\\xe3o existe na lista.\"));\n            }\n        }\n    }\n    searchInList(num, pos) {\n        if (num !== undefined) {\n            const index = this.listNumbers.indexOf(num);\n            if (index > -1) {\n                alert(\"O n\\xfamero \".concat(num, \" existe na lista e est\\xe1 na posi\\xe7\\xe3o \").concat(index + 1, \"!\"));\n            } else {\n                alert(\"O n\\xfamero \".concat(num, \" n\\xe3o existe na lista.\"));\n            }\n        } else if (pos !== undefined) {\n            const index = parseInt(String(pos)) - 1;\n            if (index >= 0 && index < this.listNumbers.length) {\n                alert(\"O elemento na posi\\xe7\\xe3o \".concat(pos, \" \\xe9 o n\\xfamero \").concat(this.listNumbers[index], \".\"));\n            } else {\n                alert(\"Posi\\xe7\\xe3o inv\\xe1lida.\");\n            }\n        } else {\n            alert(\"Informe a posi\\xe7\\xe3o ou o n\\xfamero a ser pesquisado.\");\n        }\n    }\n    constructor(max, listNumbers){\n        this.nElements = 3;\n        this.max = max;\n        this.listNumbers = listNumbers;\n    }\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU87Z0JBQ0xELE1BQU07WUFDUixDQUFDO1FBQ0gsT0FBTztZQUNMQSxNQUFNO1FBQ1IsQ0FBQztJQUNIO0lBbkZBWSxZQUFZaEIsR0FBVyxFQUFFUSxXQUFxQixDQUFFO2FBRmhEVCxZQUFvQjtRQUdsQixJQUFJLENBQUNDLEdBQUcsR0FBR0E7UUFDWCxJQUFJLENBQUNRLFdBQVcsR0FBR0E7SUFDckI7QUFtRkYsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29yZS9MaXN0YVNlcXVlbmNpYWwudHM/YTVkZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbnRlcmZhY2UgTGlzdEludGVyZmFjZSB7XG4gIG1heDogbnVtYmVyO1xuICBuRWxlbWVudHM6IG51bWJlcjtcbiAgbGlzdE51bWJlcnM6IG51bWJlcltdO1xuICBhZGRJbkxpc3Q6IChudW06IG51bWJlciwgcG9zOiBudW1iZXIpID0+IHZvaWQ7XG4gIHJlbW92ZUluTGlzdDogKG51bT86IG51bWJlciwgcG9zPzogbnVtYmVyKSA9PiB2b2lkO1xuICBzZWFyY2hJbkxpc3Q6IChudW0/OiBudW1iZXIsIHBvcz86IG51bWJlcikgPT4gdm9pZDtcbn1cbiAgXG5leHBvcnQgY2xhc3MgTGlzdGFTZXF1ZW5jaWFsIGltcGxlbWVudHMgTGlzdEludGVyZmFjZSB7XG4gIG1heDogbnVtYmVyO1xuICBsaXN0TnVtYmVyczogbnVtYmVyW107XG4gIG5FbGVtZW50czogbnVtYmVyID0gMztcblxuICBjb25zdHJ1Y3RvcihtYXg6IG51bWJlciwgbGlzdE51bWJlcnM6IG51bWJlcltdKSB7XG4gICAgdGhpcy5tYXggPSBtYXg7XG4gICAgdGhpcy5saXN0TnVtYmVycyA9IGxpc3ROdW1iZXJzO1xuICB9XG5cbiAgcHJpdmF0ZSBsaXN0SXNmdWxsKCkge1xuICAgIHJldHVybiB0aGlzLm5FbGVtZW50cyA9PT0gdGhpcy5tYXg7XG4gIH1cblxuICBhZGRJbkxpc3QobnVtOiBudW1iZXIsIHBvczogbnVtYmVyKSB7XG4gICAgXG4gICAgaWYocG9zID4gdGhpcy5uRWxlbWVudHMgKyAxKXsgLy8gVmVyaWZpY2HDp8OjbyBkZSBwb3Npw6fDo28gMVxuICAgICAgYWxlcnQoJ1Bvc2nDp8OjbyBpbnbDoWxpZGEuJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubGlzdElzZnVsbCgpKSB7XG4gICAgICBhbGVydCgnQSBsaXN0YSBqw6EgYXRpbmdpdSBzZXUgdGFtYW5obyBtw6F4aW1vLicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGluZGV4ID0gcGFyc2VJbnQoU3RyaW5nKHBvcykpIC0gMTtcbiAgICBpZiAoaW5kZXggPj0gMCAmJiBpbmRleCA8IHRoaXMubWF4KSB7IC8vIFZlcmlmaWNhw6fDo28gZGUgcG9zacOnw6NvIDJcbiAgICB9ZWxzZXtcbiAgICAgIGFsZXJ0KCdQb3Npw6fDo28gaW52w6FsaWRhLicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMubkVsZW1lbnRzKys7XG4gICAgLy8gQWRpY2lvbmEgbyBlbGVtZW50byBuYVxuICAgIHRoaXMubGlzdE51bWJlcnMgPSBbLi4udGhpcy5saXN0TnVtYmVycy5zbGljZSgwLCBpbmRleCksIG51bSwgLi4udGhpcy5saXN0TnVtYmVycy5zbGljZShpbmRleCldO1xuICB9XG4gIFxuICByZW1vdmVJbkxpc3QobnVtPzogbnVtYmVyLCBwb3M/OiBudW1iZXIpIHtcbiAgICBpZiAocG9zICE9PSB1bmRlZmluZWQgJiYgbnVtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGFsZXJ0KCdJbmZvcm1lIGFwZW5hcyBhIHBvc2nDp8OjbyBvdSBvIG7Dum1lcm8gYSBzZXIgcmVtb3ZpZG8uJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYocG9zID09PSB1bmRlZmluZWQgJiYgbnVtID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGFsZXJ0KCdJbmZvcm1lIGEgcG9zacOnw6NvIG91IG8gbsO6bWVybyBhIHNlciByZW1vdmlkby4nKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgbmV3TGlzdCA9IFtdO1xuXG4gICAgaWYgKHBvcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zdCBpbmRleCA9IHBhcnNlSW50KFN0cmluZyhwb3MpKSAtIDE7XG4gICAgICBpZiAoaW5kZXggPj0gMCAmJiBpbmRleCA8IHRoaXMubGlzdE51bWJlcnMubGVuZ3RoKSB7XG4gICAgICAgIG5ld0xpc3QgPSBbLi4udGhpcy5saXN0TnVtYmVycy5zbGljZSgwLCBpbmRleCksIC4uLnRoaXMubGlzdE51bWJlcnMuc2xpY2UoaW5kZXggKyAxKV07XG4gICAgICAgIHRoaXMubGlzdE51bWJlcnMgPSBuZXdMaXN0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWxlcnQoJ1Bvc2nDp8OjbyBpbnbDoWxpZGEuJyk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChudW0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmxpc3ROdW1iZXJzLmluZGV4T2YobnVtKTtcbiAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgIG5ld0xpc3QgPSBbLi4udGhpcy5saXN0TnVtYmVycy5zbGljZSgwLCBpbmRleCksIC4uLnRoaXMubGlzdE51bWJlcnMuc2xpY2UoaW5kZXggKyAxKV07XG4gICAgICAgIHRoaXMubGlzdE51bWJlcnMgPSBuZXdMaXN0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWxlcnQoYE8gbsO6bWVybyAke251bX0gbsOjbyBleGlzdGUgbmEgbGlzdGEuYCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc2VhcmNoSW5MaXN0KG51bT86IG51bWJlciwgcG9zPzogbnVtYmVyKSB7XG4gICAgaWYgKG51bSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zdCBpbmRleCA9IHRoaXMubGlzdE51bWJlcnMuaW5kZXhPZihudW0pO1xuICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgYWxlcnQoYE8gbsO6bWVybyAke251bX0gZXhpc3RlIG5hIGxpc3RhIGUgZXN0w6EgbmEgcG9zacOnw6NvICR7aW5kZXggKyAxfSFgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFsZXJ0KGBPIG7Dum1lcm8gJHtudW19IG7Do28gZXhpc3RlIG5hIGxpc3RhLmApO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAocG9zICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gcGFyc2VJbnQoU3RyaW5nKHBvcykpIC0gMTtcbiAgICAgIGlmIChpbmRleCA+PSAwICYmIGluZGV4IDwgdGhpcy5saXN0TnVtYmVycy5sZW5ndGgpIHtcbiAgICAgICAgYWxlcnQoYE8gZWxlbWVudG8gbmEgcG9zacOnw6NvICR7cG9zfSDDqSBvIG7Dum1lcm8gJHt0aGlzLmxpc3ROdW1iZXJzW2luZGV4XX0uYCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhbGVydCgnUG9zacOnw6NvIGludsOhbGlkYS4nKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgYWxlcnQoJ0luZm9ybWUgYSBwb3Npw6fDo28gb3UgbyBuw7ptZXJvIGEgc2VyIHBlc3F1aXNhZG8uJyk7XG4gICAgfVxuICB9XG5cbiAgXG59Il0sIm5hbWVzIjpbIkxpc3RhU2VxdWVuY2lhbCIsImxpc3RJc2Z1bGwiLCJuRWxlbWVudHMiLCJtYXgiLCJhZGRJbkxpc3QiLCJudW0iLCJwb3MiLCJhbGVydCIsImluZGV4IiwicGFyc2VJbnQiLCJTdHJpbmciLCJsaXN0TnVtYmVycyIsInNsaWNlIiwicmVtb3ZlSW5MaXN0IiwidW5kZWZpbmVkIiwibmV3TGlzdCIsImxlbmd0aCIsImluZGV4T2YiLCJzZWFyY2hJbkxpc3QiLCJjb25zdHJ1Y3RvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/core/ListaSequencial.ts\n"));

/***/ })

});
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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ListaSequencial\": function() { return /* binding */ ListaSequencial; }\n/* harmony export */ });\nclass ListaSequencial {\n    addInList(num, pos) {\n        if (this.listNumbers.length >= this.max) {\n            console.log(\"A lista j\\xe1 atingiu seu tamanho m\\xe1ximo.\");\n            return;\n        }\n        if (pos > this.listNumbers.length + 1 || pos < 1) {\n            console.log(\"Posi\\xe7\\xe3o inv\\xe1lida.\");\n            return;\n        }\n        const index = parseInt(String(pos)) - 1;\n        const newList = [\n            ...this.listNumbers.slice(0, index),\n            num,\n            ...this.listNumbers.slice(index)\n        ];\n        this.listNumbers = newList;\n    }\n    removeInList(num, pos) {\n        if (pos !== undefined && num !== undefined) {\n            console.log(\"Informe apenas a posi\\xe7\\xe3o ou o n\\xfamero a ser removido.\");\n            return;\n        }\n        if (pos === undefined && num === undefined) {\n            console.log(\"Informe a posi\\xe7\\xe3o ou o n\\xfamero a ser removido.\");\n            return;\n        }\n        let newList = [];\n        if (pos !== undefined) {\n            const index = parseInt(String(pos)) - 1;\n            if (index >= 0 && index < this.listNumbers.length) {\n                newList = [\n                    ...this.listNumbers.slice(0, index),\n                    ...this.listNumbers.slice(index + 1)\n                ];\n                this.listNumbers = newList;\n            } else {\n                alert(\"Posi\\xe7\\xe3o inv\\xe1lida.\");\n            }\n        } else if (num !== undefined) {\n            const number = parseInt(String(num));\n            if (this.listNumbers.includes(number)) {\n                newList = this.listNumbers.filter((n)=>n !== number);\n                this.listNumbers = newList;\n            } else {\n                alert(\"O n\\xfamero \".concat(number, \" n\\xe3o existe na lista.\"));\n            }\n        } else {\n            alert(\"Informe a posi\\xe7\\xe3o ou o n\\xfamero a ser removido.\");\n        }\n    }\n    searchInList(num, pos) {\n        if (num !== undefined) {\n            const index = this.listNumbers.indexOf(num);\n            if (index > -1) {\n                alert(\"O n\\xfamero \".concat(num, \" existe na lista e est\\xe1 na posi\\xe7\\xe3o \").concat(index + 1, \"!\"));\n            } else {\n                alert(\"O n\\xfamero \".concat(num, \" n\\xe3o existe na lista.\"));\n            }\n        } else if (pos !== undefined) {\n            const index = parseInt(String(pos)) - 1;\n            if (index >= 0 && index < this.listNumbers.length) {\n                alert(\"O elemento na posi\\xe7\\xe3o \".concat(pos, \" \\xe9 o n\\xfamero \").concat(this.listNumbers[index], \".\"));\n            } else {\n                alert(\"Posi\\xe7\\xe3o inv\\xe1lida.\");\n            }\n        } else {\n            alert(\"Informe a posi\\xe7\\xe3o ou o n\\xfamero a ser pesquisado.\");\n        }\n    }\n    constructor(max, listNumbers){\n        this.max = max;\n        this.listNumbers = listNumbers;\n    }\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFdBQXFCLENBQUU7UUFDOUMsSUFBSSxDQUFDRSxHQUFHLEdBQUdBO1FBQ1gsSUFBSSxDQUFDRixXQUFXLEdBQUdBO0lBQ3JCO0FBd0VGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvcmUvTGlzdGFTZXF1ZW5jaWFsLnRzP2E1ZGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW50ZXJmYWNlIExpc3RJbnRlcmZhY2Uge1xuICBtYXg6IG51bWJlcjtcbiAgbGlzdE51bWJlcnM6IG51bWJlcltdO1xuICBhZGRJbkxpc3Q6IChudW06IG51bWJlciwgcG9zOiBudW1iZXIpID0+IHZvaWQ7XG4gIHJlbW92ZUluTGlzdDogKG51bT86IG51bWJlciwgcG9zPzogbnVtYmVyKSA9PiB2b2lkO1xuICBzZWFyY2hJbkxpc3Q6IChudW0/OiBudW1iZXIsIHBvcz86IG51bWJlcikgPT4gdm9pZDtcbn1cbiAgXG5leHBvcnQgY2xhc3MgTGlzdGFTZXF1ZW5jaWFsIGltcGxlbWVudHMgTGlzdEludGVyZmFjZSB7XG4gIG1heDogbnVtYmVyO1xuICBsaXN0TnVtYmVyczogbnVtYmVyW107XG5cbiAgY29uc3RydWN0b3IobWF4OiBudW1iZXIsIGxpc3ROdW1iZXJzOiBudW1iZXJbXSkge1xuICAgIHRoaXMubWF4ID0gbWF4O1xuICAgIHRoaXMubGlzdE51bWJlcnMgPSBsaXN0TnVtYmVycztcbiAgfVxuXG4gIGFkZEluTGlzdChudW06IG51bWJlciwgcG9zOiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5saXN0TnVtYmVycy5sZW5ndGggPj0gdGhpcy5tYXgpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdBIGxpc3RhIGrDoSBhdGluZ2l1IHNldSB0YW1hbmhvIG3DoXhpbW8uJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICBcbiAgICBpZiAocG9zID4gdGhpcy5saXN0TnVtYmVycy5sZW5ndGggKyAxIHx8IHBvcyA8IDEpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdQb3Npw6fDo28gaW52w6FsaWRhLicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgXG4gICAgY29uc3QgaW5kZXggPSBwYXJzZUludChTdHJpbmcocG9zKSkgLSAxO1xuICAgIGNvbnN0IG5ld0xpc3QgPSBbLi4udGhpcy5saXN0TnVtYmVycy5zbGljZSgwLCBpbmRleCksIG51bSwgLi4udGhpcy5saXN0TnVtYmVycy5zbGljZShpbmRleCldO1xuICBcbiAgICB0aGlzLmxpc3ROdW1iZXJzID0gbmV3TGlzdDtcbiAgfVxuICBcbiAgcmVtb3ZlSW5MaXN0KG51bT86IG51bWJlciwgcG9zPzogbnVtYmVyKSB7XG4gICAgaWYgKHBvcyAhPT0gdW5kZWZpbmVkICYmIG51bSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zb2xlLmxvZygnSW5mb3JtZSBhcGVuYXMgYSBwb3Npw6fDo28gb3UgbyBuw7ptZXJvIGEgc2VyIHJlbW92aWRvLicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmKHBvcyA9PT0gdW5kZWZpbmVkICYmIG51bSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zb2xlLmxvZygnSW5mb3JtZSBhIHBvc2nDp8OjbyBvdSBvIG7Dum1lcm8gYSBzZXIgcmVtb3ZpZG8uJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IG5ld0xpc3QgPSBbXTtcblxuICAgIGlmIChwb3MgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3QgaW5kZXggPSBwYXJzZUludChTdHJpbmcocG9zKSkgLSAxO1xuICAgICAgaWYgKGluZGV4ID49IDAgJiYgaW5kZXggPCB0aGlzLmxpc3ROdW1iZXJzLmxlbmd0aCkge1xuICAgICAgICBuZXdMaXN0ID0gWy4uLnRoaXMubGlzdE51bWJlcnMuc2xpY2UoMCwgaW5kZXgpLCAuLi50aGlzLmxpc3ROdW1iZXJzLnNsaWNlKGluZGV4ICsgMSldO1xuICAgICAgICB0aGlzLmxpc3ROdW1iZXJzID0gbmV3TGlzdDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFsZXJ0KCdQb3Npw6fDo28gaW52w6FsaWRhLicpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAobnVtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IG51bWJlciA9IHBhcnNlSW50KFN0cmluZyhudW0pKTtcbiAgICAgIGlmICh0aGlzLmxpc3ROdW1iZXJzLmluY2x1ZGVzKG51bWJlcikpIHtcbiAgICAgICAgbmV3TGlzdCA9IHRoaXMubGlzdE51bWJlcnMuZmlsdGVyKChuKSA9PiBuICE9PSBudW1iZXIpO1xuICAgICAgICB0aGlzLmxpc3ROdW1iZXJzID0gbmV3TGlzdDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFsZXJ0KGBPIG7Dum1lcm8gJHtudW1iZXJ9IG7Do28gZXhpc3RlIG5hIGxpc3RhLmApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBhbGVydCgnSW5mb3JtZSBhIHBvc2nDp8OjbyBvdSBvIG7Dum1lcm8gYSBzZXIgcmVtb3ZpZG8uJyk7XG4gICAgfVxuICB9XG5cbiAgc2VhcmNoSW5MaXN0KG51bT86IG51bWJlciwgcG9zPzogbnVtYmVyKSB7XG4gICAgaWYgKG51bSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zdCBpbmRleCA9IHRoaXMubGlzdE51bWJlcnMuaW5kZXhPZihudW0pO1xuICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgYWxlcnQoYE8gbsO6bWVybyAke251bX0gZXhpc3RlIG5hIGxpc3RhIGUgZXN0w6EgbmEgcG9zacOnw6NvICR7aW5kZXggKyAxfSFgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFsZXJ0KGBPIG7Dum1lcm8gJHtudW19IG7Do28gZXhpc3RlIG5hIGxpc3RhLmApO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAocG9zICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gcGFyc2VJbnQoU3RyaW5nKHBvcykpIC0gMTtcbiAgICAgIGlmIChpbmRleCA+PSAwICYmIGluZGV4IDwgdGhpcy5saXN0TnVtYmVycy5sZW5ndGgpIHtcbiAgICAgICAgYWxlcnQoYE8gZWxlbWVudG8gbmEgcG9zacOnw6NvICR7cG9zfSDDqSBvIG7Dum1lcm8gJHt0aGlzLmxpc3ROdW1iZXJzW2luZGV4XX0uYCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhbGVydCgnUG9zacOnw6NvIGludsOhbGlkYS4nKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgYWxlcnQoJ0luZm9ybWUgYSBwb3Npw6fDo28gb3UgbyBuw7ptZXJvIGEgc2VyIHBlc3F1aXNhZG8uJyk7XG4gICAgfVxuICB9XG59Il0sIm5hbWVzIjpbIkxpc3RhU2VxdWVuY2lhbCIsImFkZEluTGlzdCIsIm51bSIsInBvcyIsImxpc3ROdW1iZXJzIiwibGVuZ3RoIiwibWF4IiwiY29uc29sZSIsImxvZyIsImluZGV4IiwicGFyc2VJbnQiLCJTdHJpbmciLCJuZXdMaXN0Iiwic2xpY2UiLCJyZW1vdmVJbkxpc3QiLCJ1bmRlZmluZWQiLCJhbGVydCIsIm51bWJlciIsImluY2x1ZGVzIiwiZmlsdGVyIiwibiIsInNlYXJjaEluTGlzdCIsImluZGV4T2YiLCJjb25zdHJ1Y3RvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/core/ListaSequencial.ts\n"));

/***/ })

});
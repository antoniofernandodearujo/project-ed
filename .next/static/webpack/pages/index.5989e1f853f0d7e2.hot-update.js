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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ListaSequencial\": function() { return /* binding */ ListaSequencial; }\n/* harmony export */ });\nclass ListaSequencial {\n    addInList(num, pos) {\n        const number = parseInt(String(num));\n        const position = parseInt(String(pos)) - 1;\n        //Verifica se a posição é válida\n        //retirar a condição do meio\n        if (position >= 0 && position <= this.listNumbers.length && this.listNumbers.length < this.max) {\n            // Verifica se o número já existe na lista\n            if (!this.listNumbers.includes(number)) {\n                const newList = [\n                    ...this.listNumbers.slice(0, position),\n                    number,\n                    ...this.listNumbers.slice(position)\n                ];\n                this.listNumbers = newList;\n            } else {\n                console.log(\"O n\\xfamero \".concat(number, \" j\\xe1 existe na lista.\"));\n            }\n        } else {\n            alert(\"Posi\\xe7\\xe3o inv\\xe1lida.\");\n        }\n    }\n    removeInList(num, pos) {\n        if (pos !== undefined && num !== undefined) {\n            console.log(\"Informe apenas a posi\\xe7\\xe3o ou o n\\xfamero a ser removido.\");\n            return;\n        }\n        if (pos === undefined && num === undefined) {\n            console.log(\"Informe a posi\\xe7\\xe3o ou o n\\xfamero a ser removido.\");\n            return;\n        }\n        let newList = [];\n        if (pos !== undefined) {\n            const index = parseInt(String(pos)) - 1;\n            if (index >= 0 && index < this.listNumbers.length) {\n                newList = [\n                    ...this.listNumbers.slice(0, index),\n                    ...this.listNumbers.slice(index + 1)\n                ];\n                this.listNumbers = newList;\n            } else {\n                console.log(\"Posi\\xe7\\xe3o inv\\xe1lida.\");\n            }\n        } else if (num !== undefined) {\n            const number = parseInt(String(num));\n            if (this.listNumbers.includes(number)) {\n                newList = this.listNumbers.filter((n)=>n !== number);\n                this.listNumbers = newList;\n            } else {\n                console.log(\"O n\\xfamero \".concat(number, \" n\\xe3o existe na lista.\"));\n            }\n        } else {\n            console.log(\"Informe a posi\\xe7\\xe3o ou o n\\xfamero a ser removido.\");\n        }\n    }\n    searchInList(num, pos) {\n        if (num !== undefined) {\n            const index = this.listNumbers.indexOf(num);\n            if (index > -1) {\n                console.log(\"O n\\xfamero \".concat(num, \" existe na lista e est\\xe1 na posi\\xe7\\xe3o \").concat(index + 1, \"!\"));\n            } else {\n                console.log(\"O n\\xfamero \".concat(num, \" n\\xe3o existe na lista.\"));\n            }\n        } else if (pos !== undefined) {\n            const index = parseInt(String(pos)) - 1;\n            if (index >= 0 && index < this.listNumbers.length) {\n                console.log(\"O elemento na posi\\xe7\\xe3o \".concat(pos, \" \\xe9 o n\\xfamero \").concat(this.listNumbers[index], \".\"));\n            } else {\n                console.log(\"Posi\\xe7\\xe3o inv\\xe1lida.\");\n            }\n        } else {\n            console.log(\"Informe a posi\\xe7\\xe3o ou o n\\xfamero a ser pesquisado.\");\n        }\n    }\n    constructor(max, listNumbers){\n        this.max = max;\n        this.listNumbers = listNumbers;\n    }\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQ1gsV0FBVyxDQUFDQyxNQUFNLEVBQUU7Z0JBQ2pESyxRQUFRQyxHQUFHLENBQUMsK0JBQTJDLE9BQWxCWixLQUFJLHNCQUFzQyxPQUF4QixJQUFJLENBQUNLLFdBQVcsQ0FBQ1csTUFBTSxFQUFDO1lBQ2pGLE9BQU87Z0JBQ0xMLFFBQVFDLEdBQUcsQ0FBQztZQUNkLENBQUM7UUFDSCxPQUFPO1lBQ0hELFFBQVFDLEdBQUcsQ0FBQztRQUNoQixDQUFDO0lBQ0g7SUE1RUFTLFlBQVlkLEdBQVcsRUFBRUYsV0FBcUIsQ0FBRTtRQUM5QyxJQUFJLENBQUNFLEdBQUcsR0FBR0E7UUFDWCxJQUFJLENBQUNGLFdBQVcsR0FBR0E7SUFDckI7QUEwRUYsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29yZS9MaXN0YVNlcXVlbmNpYWwudHM/YTVkZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbnRlcmZhY2UgTGlzdEludGVyZmFjZSB7XG4gIG1heDogbnVtYmVyO1xuICBsaXN0TnVtYmVyczogbnVtYmVyW107XG4gIGFkZEluTGlzdDogKG51bTogbnVtYmVyLCBwb3M6IG51bWJlcikgPT4gdm9pZDtcbiAgcmVtb3ZlSW5MaXN0OiAobnVtPzogbnVtYmVyLCBwb3M/OiBudW1iZXIpID0+IHZvaWQ7XG4gIHNlYXJjaEluTGlzdDogKG51bT86IG51bWJlciwgcG9zPzogbnVtYmVyKSA9PiB2b2lkO1xufVxuICBcbmV4cG9ydCBjbGFzcyBMaXN0YVNlcXVlbmNpYWwgaW1wbGVtZW50cyBMaXN0SW50ZXJmYWNlIHtcbiAgbWF4OiBudW1iZXI7XG4gIGxpc3ROdW1iZXJzOiBudW1iZXJbXTtcblxuICBjb25zdHJ1Y3RvcihtYXg6IG51bWJlciwgbGlzdE51bWJlcnM6IG51bWJlcltdKSB7XG4gICAgdGhpcy5tYXggPSBtYXg7XG4gICAgdGhpcy5saXN0TnVtYmVycyA9IGxpc3ROdW1iZXJzO1xuICB9XG5cbiAgYWRkSW5MaXN0KG51bTogbnVtYmVyLCBwb3M6IG51bWJlcikge1xuICAgIGNvbnN0IG51bWJlciA9IHBhcnNlSW50KFN0cmluZyhudW0pKTtcbiAgICBjb25zdCBwb3NpdGlvbiA9IHBhcnNlSW50KFN0cmluZyhwb3MpKSAtIDE7XG5cbiAgICAvL1ZlcmlmaWNhIHNlIGEgcG9zacOnw6NvIMOpIHbDoWxpZGFcbiAgICAvL3JldGlyYXIgYSBjb25kacOnw6NvIGRvIG1laW9cbiAgICBpZiAocG9zaXRpb24gPj0gMCAmJiBwb3NpdGlvbiA8PSB0aGlzLmxpc3ROdW1iZXJzLmxlbmd0aCAmJiAodGhpcy5saXN0TnVtYmVycy5sZW5ndGggPCB0aGlzLm1heCkpIHtcbiAgICAgIC8vIFZlcmlmaWNhIHNlIG8gbsO6bWVybyBqw6EgZXhpc3RlIG5hIGxpc3RhXG4gICAgICBpZiAoIXRoaXMubGlzdE51bWJlcnMuaW5jbHVkZXMobnVtYmVyKSkge1xuICAgICAgICBjb25zdCBuZXdMaXN0ID0gWy4uLnRoaXMubGlzdE51bWJlcnMuc2xpY2UoMCwgcG9zaXRpb24pLCBudW1iZXIsIC4uLnRoaXMubGlzdE51bWJlcnMuc2xpY2UocG9zaXRpb24pXTtcbiAgICAgICAgdGhpcy5saXN0TnVtYmVycyA9IG5ld0xpc3Q7XG4gICAgICB9IGVsc2UgeyAvL3JldGlyYXJcbiAgICAgICAgY29uc29sZS5sb2coYE8gbsO6bWVybyAke251bWJlcn0gasOhIGV4aXN0ZSBuYSBsaXN0YS5gKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgYWxlcnQoJ1Bvc2nDp8OjbyBpbnbDoWxpZGEuJyk7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlSW5MaXN0KG51bT86IG51bWJlciwgcG9zPzogbnVtYmVyKSB7XG4gICAgaWYgKHBvcyAhPT0gdW5kZWZpbmVkICYmIG51bSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zb2xlLmxvZygnSW5mb3JtZSBhcGVuYXMgYSBwb3Npw6fDo28gb3UgbyBuw7ptZXJvIGEgc2VyIHJlbW92aWRvLicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmKHBvcyA9PT0gdW5kZWZpbmVkICYmIG51bSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zb2xlLmxvZygnSW5mb3JtZSBhIHBvc2nDp8OjbyBvdSBvIG7Dum1lcm8gYSBzZXIgcmVtb3ZpZG8uJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IG5ld0xpc3QgPSBbXTtcblxuICAgIGlmIChwb3MgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3QgaW5kZXggPSBwYXJzZUludChTdHJpbmcocG9zKSkgLSAxO1xuICAgICAgaWYgKGluZGV4ID49IDAgJiYgaW5kZXggPCB0aGlzLmxpc3ROdW1iZXJzLmxlbmd0aCkge1xuICAgICAgICBuZXdMaXN0ID0gWy4uLnRoaXMubGlzdE51bWJlcnMuc2xpY2UoMCwgaW5kZXgpLCAuLi50aGlzLmxpc3ROdW1iZXJzLnNsaWNlKGluZGV4ICsgMSldO1xuICAgICAgICB0aGlzLmxpc3ROdW1iZXJzID0gbmV3TGlzdDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdQb3Npw6fDo28gaW52w6FsaWRhLicpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAobnVtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IG51bWJlciA9IHBhcnNlSW50KFN0cmluZyhudW0pKTtcbiAgICAgIGlmICh0aGlzLmxpc3ROdW1iZXJzLmluY2x1ZGVzKG51bWJlcikpIHtcbiAgICAgICAgbmV3TGlzdCA9IHRoaXMubGlzdE51bWJlcnMuZmlsdGVyKChuKSA9PiBuICE9PSBudW1iZXIpO1xuICAgICAgICB0aGlzLmxpc3ROdW1iZXJzID0gbmV3TGlzdDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBPIG7Dum1lcm8gJHtudW1iZXJ9IG7Do28gZXhpc3RlIG5hIGxpc3RhLmApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZygnSW5mb3JtZSBhIHBvc2nDp8OjbyBvdSBvIG7Dum1lcm8gYSBzZXIgcmVtb3ZpZG8uJyk7XG4gICAgfVxuICB9XG5cbiAgc2VhcmNoSW5MaXN0KG51bT86IG51bWJlciwgcG9zPzogbnVtYmVyKSB7XG4gICAgaWYgKG51bSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zdCBpbmRleCA9IHRoaXMubGlzdE51bWJlcnMuaW5kZXhPZihudW0pO1xuICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgY29uc29sZS5sb2coYE8gbsO6bWVybyAke251bX0gZXhpc3RlIG5hIGxpc3RhIGUgZXN0w6EgbmEgcG9zacOnw6NvICR7aW5kZXggKyAxfSFgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBPIG7Dum1lcm8gJHtudW19IG7Do28gZXhpc3RlIG5hIGxpc3RhLmApO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAocG9zICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gcGFyc2VJbnQoU3RyaW5nKHBvcykpIC0gMTtcbiAgICAgIGlmIChpbmRleCA+PSAwICYmIGluZGV4IDwgdGhpcy5saXN0TnVtYmVycy5sZW5ndGgpIHtcbiAgICAgICAgY29uc29sZS5sb2coYE8gZWxlbWVudG8gbmEgcG9zacOnw6NvICR7cG9zfSDDqSBvIG7Dum1lcm8gJHt0aGlzLmxpc3ROdW1iZXJzW2luZGV4XX0uYCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygnUG9zacOnw6NvIGludsOhbGlkYS4nKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygnSW5mb3JtZSBhIHBvc2nDp8OjbyBvdSBvIG7Dum1lcm8gYSBzZXIgcGVzcXVpc2Fkby4nKTtcbiAgICB9XG4gIH1cbn0iXSwibmFtZXMiOlsiTGlzdGFTZXF1ZW5jaWFsIiwiYWRkSW5MaXN0IiwibnVtIiwicG9zIiwibnVtYmVyIiwicGFyc2VJbnQiLCJTdHJpbmciLCJwb3NpdGlvbiIsImxpc3ROdW1iZXJzIiwibGVuZ3RoIiwibWF4IiwiaW5jbHVkZXMiLCJuZXdMaXN0Iiwic2xpY2UiLCJjb25zb2xlIiwibG9nIiwiYWxlcnQiLCJyZW1vdmVJbkxpc3QiLCJ1bmRlZmluZWQiLCJpbmRleCIsImZpbHRlciIsIm4iLCJzZWFyY2hJbkxpc3QiLCJpbmRleE9mIiwiY29uc3RydWN0b3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/core/ListaSequencial.ts\n"));

/***/ })

});
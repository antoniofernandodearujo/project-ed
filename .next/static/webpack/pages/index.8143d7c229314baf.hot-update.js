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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ListaSequencial\": function() { return /* binding */ ListaSequencial; }\n/* harmony export */ });\nclass ListaSequencial {\n    addInList(num, pos) {\n        const number = parseInt(String(num));\n        const position = parseInt(String(pos)) - 1;\n        //Verifica se a posição é válida\n        if (position >= 0 && position <= this.listNumbers.length && this.listNumbers.length < this.max) {\n            // Verifica se o número já existe na lista\n            if (!this.listNumbers.includes(number)) {\n                const newList = [\n                    ...this.listNumbers.slice(0, position),\n                    number,\n                    ...this.listNumbers.slice(position)\n                ];\n                this.listNumbers = newList;\n            } else {\n                console.log(\"O n\\xfamero \".concat(number, \" j\\xe1 existe na lista.\"));\n            }\n        } else {\n            console.log(\"Posi\\xe7\\xe3o inv\\xe1lida.\");\n        }\n    }\n    removeInList(num, pos) {\n        if (pos !== undefined && num !== undefined) {\n            console.log(\"Informe apenas a posi\\xe7\\xe3o ou o n\\xfamero a ser removido.\");\n            return;\n        }\n        if (pos !== undefined && num !== undefined) {\n            console.log(\"Informe apenas a posi\\xe7\\xe3o ou o n\\xfamero a ser removido.\");\n            return;\n        }\n        let newList = [];\n        if (pos !== undefined) {\n            const index = parseInt(String(pos)) - 1;\n            if (index >= 0 && index < this.listNumbers.length) {\n                newList = [\n                    ...this.listNumbers.slice(0, index),\n                    ...this.listNumbers.slice(index + 1)\n                ];\n                this.listNumbers = newList;\n            } else {\n                console.log(\"Posi\\xe7\\xe3o inv\\xe1lida.\");\n            }\n        } else if (num !== undefined) {\n            const number = parseInt(String(num));\n            if (this.listNumbers.includes(number)) {\n                newList = this.listNumbers.filter((n)=>n !== number);\n                this.listNumbers = newList;\n            } else {\n                console.log(\"O n\\xfamero \".concat(number, \" n\\xe3o existe na lista.\"));\n            }\n        } else {\n            console.log(\"Informe a posi\\xe7\\xe3o ou o n\\xfamero a ser removido.\");\n        }\n    }\n    searchInList(num, pos) {\n        if (num !== undefined) {\n            const index = this.listNumbers.indexOf(num);\n            if (index > -1) {\n                console.log(\"O n\\xfamero \".concat(num, \" existe na lista e est\\xe1 na posi\\xe7\\xe3o \").concat(index + 1, \"!\"));\n            } else {\n                console.log(\"O n\\xfamero \".concat(num, \" n\\xe3o existe na lista.\"));\n            }\n        } else if (pos !== undefined) {\n            const index = parseInt(String(pos)) - 1;\n            if (index >= 0 && index < this.listNumbers.length) {\n                console.log(\"O elemento na posi\\xe7\\xe3o \".concat(pos, \" \\xe9 o n\\xfamero \").concat(this.listNumbers[index], \".\"));\n            } else {\n                console.log(\"Posi\\xe7\\xe3o inv\\xe1lida.\");\n            }\n        } else {\n            console.log(\"Informe a posi\\xe7\\xe3o ou o n\\xfamero a ser pesquisado.\");\n        }\n    }\n    constructor(max, listNumbers){\n        this.max = max;\n        this.listNumbers = listNumbers;\n    }\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUNDLE1BQU0sRUFBRTtnQkFDL0NLLFFBQVFDLEdBQUcsQ0FBQywrQkFBMkMsT0FBbEJaLEtBQUksc0JBQXNDLE9BQXhCLElBQUksQ0FBQ0ssV0FBVyxDQUFDVSxNQUFNLEVBQUM7WUFDbkYsT0FBTztnQkFDSEosUUFBUUMsR0FBRyxDQUFDO1lBQ2hCLENBQUM7UUFDTCxPQUFPO1lBQ0hELFFBQVFDLEdBQUcsQ0FBQztRQUNoQixDQUFDO0lBQ0w7SUEzRUFRLFlBQVliLEdBQVcsRUFBRUYsV0FBcUIsQ0FBRTtRQUM5QyxJQUFJLENBQUNFLEdBQUcsR0FBR0E7UUFDWCxJQUFJLENBQUNGLFdBQVcsR0FBR0E7SUFDckI7QUF5RUosQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29yZS9MaXN0YVNlcXVlbmNpYWwudHM/YTVkZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbnRlcmZhY2UgTGlzdEludGVyZmFjZSB7XG4gICAgbWF4OiBudW1iZXI7XG4gICAgbGlzdE51bWJlcnM6IG51bWJlcltdO1xuICAgIGFkZEluTGlzdDogKG51bTogbnVtYmVyLCBwb3M6IG51bWJlcikgPT4gdm9pZDtcbiAgICByZW1vdmVJbkxpc3Q6IChudW0/OiBudW1iZXIsIHBvcz86IG51bWJlcikgPT4gdm9pZDtcbiAgICBzZWFyY2hJbkxpc3Q6IChudW0/OiBudW1iZXIsIHBvcz86IG51bWJlcikgPT4gdm9pZDtcbiAgfVxuICBcbmV4cG9ydCBjbGFzcyBMaXN0YVNlcXVlbmNpYWwgaW1wbGVtZW50cyBMaXN0SW50ZXJmYWNlIHtcbiAgICBtYXg6IG51bWJlcjtcbiAgICBsaXN0TnVtYmVyczogbnVtYmVyW107XG4gIFxuICAgIGNvbnN0cnVjdG9yKG1heDogbnVtYmVyLCBsaXN0TnVtYmVyczogbnVtYmVyW10pIHtcbiAgICAgIHRoaXMubWF4ID0gbWF4O1xuICAgICAgdGhpcy5saXN0TnVtYmVycyA9IGxpc3ROdW1iZXJzO1xuICAgIH1cbiAgXG4gICAgYWRkSW5MaXN0KG51bTogbnVtYmVyLCBwb3M6IG51bWJlcikge1xuICAgICAgY29uc3QgbnVtYmVyID0gcGFyc2VJbnQoU3RyaW5nKG51bSkpO1xuICAgICAgY29uc3QgcG9zaXRpb24gPSBwYXJzZUludChTdHJpbmcocG9zKSkgLSAxO1xuICBcbiAgICAgIC8vVmVyaWZpY2Egc2UgYSBwb3Npw6fDo28gw6kgdsOhbGlkYVxuICAgICAgaWYgKHBvc2l0aW9uID49IDAgJiYgcG9zaXRpb24gPD0gdGhpcy5saXN0TnVtYmVycy5sZW5ndGggJiYgdGhpcy5saXN0TnVtYmVycy5sZW5ndGggPCB0aGlzLm1heCkge1xuICAgICAgICAvLyBWZXJpZmljYSBzZSBvIG7Dum1lcm8gasOhIGV4aXN0ZSBuYSBsaXN0YVxuICAgICAgICBpZiAoIXRoaXMubGlzdE51bWJlcnMuaW5jbHVkZXMobnVtYmVyKSkge1xuICAgICAgICAgIGNvbnN0IG5ld0xpc3QgPSBbLi4udGhpcy5saXN0TnVtYmVycy5zbGljZSgwLCBwb3NpdGlvbiksIG51bWJlciwgLi4udGhpcy5saXN0TnVtYmVycy5zbGljZShwb3NpdGlvbildO1xuICAgICAgICAgIHRoaXMubGlzdE51bWJlcnMgPSBuZXdMaXN0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGBPIG7Dum1lcm8gJHtudW1iZXJ9IGrDoSBleGlzdGUgbmEgbGlzdGEuYCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdQb3Npw6fDo28gaW52w6FsaWRhLicpO1xuICAgICAgfVxuICAgIH1cbiAgXG4gICAgcmVtb3ZlSW5MaXN0KG51bT86IG51bWJlciwgcG9zPzogbnVtYmVyKSB7XG4gICAgICBpZiAocG9zICE9PSB1bmRlZmluZWQgJiYgbnVtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0luZm9ybWUgYXBlbmFzIGEgcG9zacOnw6NvIG91IG8gbsO6bWVybyBhIHNlciByZW1vdmlkby4nKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZihwb3MgIT09IHVuZGVmaW5lZCAmJiBudW0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zb2xlLmxvZygnSW5mb3JtZSBhcGVuYXMgYSBwb3Npw6fDo28gb3UgbyBuw7ptZXJvIGEgc2VyIHJlbW92aWRvLicpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gIFxuICAgICAgbGV0IG5ld0xpc3QgPSBbXTtcbiAgXG4gICAgICBpZiAocG9zICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSBwYXJzZUludChTdHJpbmcocG9zKSkgLSAxO1xuICAgICAgICBpZiAoaW5kZXggPj0gMCAmJiBpbmRleCA8IHRoaXMubGlzdE51bWJlcnMubGVuZ3RoKSB7XG4gICAgICAgICAgbmV3TGlzdCA9IFsuLi50aGlzLmxpc3ROdW1iZXJzLnNsaWNlKDAsIGluZGV4KSwgLi4udGhpcy5saXN0TnVtYmVycy5zbGljZShpbmRleCArIDEpXTtcbiAgICAgICAgICB0aGlzLmxpc3ROdW1iZXJzID0gbmV3TGlzdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnUG9zacOnw6NvIGludsOhbGlkYS4nKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChudW0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zdCBudW1iZXIgPSBwYXJzZUludChTdHJpbmcobnVtKSk7XG4gICAgICAgIGlmICh0aGlzLmxpc3ROdW1iZXJzLmluY2x1ZGVzKG51bWJlcikpIHtcbiAgICAgICAgICBuZXdMaXN0ID0gdGhpcy5saXN0TnVtYmVycy5maWx0ZXIoKG4pID0+IG4gIT09IG51bWJlcik7XG4gICAgICAgICAgdGhpcy5saXN0TnVtYmVycyA9IG5ld0xpc3Q7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5sb2coYE8gbsO6bWVybyAke251bWJlcn0gbsOjbyBleGlzdGUgbmEgbGlzdGEuYCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdJbmZvcm1lIGEgcG9zacOnw6NvIG91IG8gbsO6bWVybyBhIHNlciByZW1vdmlkby4nKTtcbiAgICAgIH1cbiAgICB9XG4gIFxuICAgIHNlYXJjaEluTGlzdChudW0/OiBudW1iZXIsIHBvcz86IG51bWJlcikge1xuICAgICAgICBpZiAobnVtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5saXN0TnVtYmVycy5pbmRleE9mKG51bSk7XG4gICAgICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBPIG7Dum1lcm8gJHtudW19IGV4aXN0ZSBuYSBsaXN0YSBlIGVzdMOhIG5hIHBvc2nDp8OjbyAke2luZGV4ICsgMX0hYCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBPIG7Dum1lcm8gJHtudW19IG7Do28gZXhpc3RlIG5hIGxpc3RhLmApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHBvcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHBhcnNlSW50KFN0cmluZyhwb3MpKSAtIDE7XG4gICAgICAgICAgICBpZiAoaW5kZXggPj0gMCAmJiBpbmRleCA8IHRoaXMubGlzdE51bWJlcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYE8gZWxlbWVudG8gbmEgcG9zacOnw6NvICR7cG9zfSDDqSBvIG7Dum1lcm8gJHt0aGlzLmxpc3ROdW1iZXJzW2luZGV4XX0uYCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdQb3Npw6fDo28gaW52w6FsaWRhLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0luZm9ybWUgYSBwb3Npw6fDo28gb3UgbyBuw7ptZXJvIGEgc2VyIHBlc3F1aXNhZG8uJyk7XG4gICAgICAgIH1cbiAgICB9XG59Il0sIm5hbWVzIjpbIkxpc3RhU2VxdWVuY2lhbCIsImFkZEluTGlzdCIsIm51bSIsInBvcyIsIm51bWJlciIsInBhcnNlSW50IiwiU3RyaW5nIiwicG9zaXRpb24iLCJsaXN0TnVtYmVycyIsImxlbmd0aCIsIm1heCIsImluY2x1ZGVzIiwibmV3TGlzdCIsInNsaWNlIiwiY29uc29sZSIsImxvZyIsInJlbW92ZUluTGlzdCIsInVuZGVmaW5lZCIsImluZGV4IiwiZmlsdGVyIiwibiIsInNlYXJjaEluTGlzdCIsImluZGV4T2YiLCJjb25zdHJ1Y3RvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/core/ListaSequencial.ts\n"));

/***/ })

});
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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ListaSequencial\": function() { return /* binding */ ListaSequencial; }\n/* harmony export */ });\nclass ListaSequencial {\n    listIsfull() {\n        return this.nElements === this.max;\n    }\n    listIsEmpty() {\n        if (this.nElements === 0) return true;\n        else return false;\n    }\n    size() {\n        return this.nElements;\n    }\n    addInList(num, pos) {\n        if (this.listIsfull()) {\n            alert(\"A lista j\\xe1 atingiu seu tamanho m\\xe1ximo.\");\n            return -1;\n        }\n        if (pos < 1 || pos > this.nElements + 1) {\n            alert(\"Posi\\xe7\\xe3o inv\\xe1lida.\");\n            return -1;\n        }\n        if (pos === this.nElements + 1) {\n            this.listNumbers.push(num);\n        } else {\n            this.listNumbers.splice(pos, 0, num);\n        }\n        this.nElements++;\n        return 1;\n    }\n    removeInList(num, pos) {\n        if (pos !== undefined && num !== undefined) {\n            alert(\"Informe apenas a posi\\xe7\\xe3o ou o n\\xfamero a ser removido.\");\n            return;\n        }\n        if (pos === undefined && num === undefined) {\n            alert(\"Informe a posi\\xe7\\xe3o ou o n\\xfamero a ser removido.\");\n            return;\n        }\n        let newList = [];\n        if (pos !== undefined) {\n            const index = parseInt(String(pos)) - 1;\n            if (index >= 0 && index < this.listNumbers.length) {\n                newList = [\n                    ...this.listNumbers.slice(0, index),\n                    ...this.listNumbers.slice(index + 1)\n                ];\n                this.listNumbers = newList;\n                this.nElements--;\n            } else {\n                alert(\"Posi\\xe7\\xe3o inv\\xe1lida.\");\n            }\n        } else if (num !== undefined) {\n            const index = this.listNumbers.indexOf(num);\n            if (index > -1) {\n                newList = [\n                    ...this.listNumbers.slice(0, index),\n                    ...this.listNumbers.slice(index + 1)\n                ];\n                this.listNumbers = newList;\n                this.nElements--;\n            } else {\n                alert(\"O n\\xfamero \".concat(num, \" n\\xe3o existe na lista.\"));\n            }\n        }\n    }\n    searchInList(num, pos) {\n        if (num !== undefined) {\n            const index = this.listNumbers.indexOf(num);\n            if (index > -1) {\n                alert(\"O n\\xfamero \".concat(num, \" existe na lista e est\\xe1 na posi\\xe7\\xe3o \").concat(index + 1, \"!\"));\n            } else {\n                alert(\"O n\\xfamero \".concat(num, \" n\\xe3o existe na lista.\"));\n            }\n        } else if (pos !== undefined) {\n            const index = parseInt(String(pos)) - 1;\n            if (index >= 0 && index < this.listNumbers.length) {\n                alert(\"O elemento na posi\\xe7\\xe3o \".concat(pos, \" \\xe9 o n\\xfamero \").concat(this.listNumbers[index], \".\"));\n            } else {\n                alert(\"Posi\\xe7\\xe3o inv\\xe1lida.\");\n            }\n        } else {\n            alert(\"Informe a posi\\xe7\\xe3o ou o n\\xfamero a ser pesquisado.\");\n        }\n    }\n    constructor(max, listNumbers){\n        this.max = max;\n        this.listNumbers = listNumbers;\n        this.nElements = 0;\n    }\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQ04sV0FBVyxDQUFDUyxNQUFNLEVBQUU7Z0JBQ2pEVixNQUFNLCtCQUEyQyxPQUFsQkQsS0FBSSxzQkFBc0MsT0FBeEIsSUFBSSxDQUFDRSxXQUFXLENBQUNNLE1BQU0sRUFBQztZQUMzRSxPQUFPO2dCQUNMUCxNQUFNO1lBQ1IsQ0FBQztRQUNILE9BQU87WUFDTEEsTUFBTTtRQUNSLENBQUM7SUFDSDtJQTlGQWMsWUFBWXBCLEdBQVcsRUFBRU8sV0FBcUIsQ0FBRTtRQUM5QyxJQUFJLENBQUNQLEdBQUcsR0FBR0E7UUFDWCxJQUFJLENBQUNPLFdBQVcsR0FBR0E7UUFDbkIsSUFBSSxDQUFDUixTQUFTLEdBQUc7SUFDbkI7QUE2RkYsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29yZS9MaXN0YVNlcXVlbmNpYWwudHM/YTVkZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbnRlcmZhY2UgTGlzdEludGVyZmFjZSB7XHJcbiAgYWRkSW5MaXN0OiAobnVtOiBudW1iZXIsIHBvczogbnVtYmVyKSA9PiB2b2lkO1xyXG4gIHJlbW92ZUluTGlzdDogKG51bT86IG51bWJlciwgcG9zPzogbnVtYmVyKSA9PiB2b2lkO1xyXG4gIHNlYXJjaEluTGlzdDogKG51bT86IG51bWJlciwgcG9zPzogbnVtYmVyKSA9PiB2b2lkO1xyXG59XHJcbiAgXHJcbmV4cG9ydCBjbGFzcyBMaXN0YVNlcXVlbmNpYWwgaW1wbGVtZW50cyBMaXN0SW50ZXJmYWNlIHtcclxuICBwcml2YXRlIG1heDogbnVtYmVyO1xyXG4gIHByaXZhdGUgbGlzdE51bWJlcnM6IG51bWJlcltdO1xyXG4gIHByaXZhdGUgbkVsZW1lbnRzOiBudW1iZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG1heDogbnVtYmVyLCBsaXN0TnVtYmVyczogbnVtYmVyW10pIHtcclxuICAgIHRoaXMubWF4ID0gbWF4O1xyXG4gICAgdGhpcy5saXN0TnVtYmVycyA9IGxpc3ROdW1iZXJzO1xyXG4gICAgdGhpcy5uRWxlbWVudHMgPSAwO1xyXG4gIH1cclxuXHJcbiAgbGlzdElzZnVsbCgpOiBhbnkge1xyXG4gICAgcmV0dXJuIHRoaXMubkVsZW1lbnRzID09PSB0aGlzLm1heDtcclxuICB9XHJcblxyXG4gIGxpc3RJc0VtcHR5KCk6IGJvb2xlYW4ge1xyXG4gICAgaWYodGhpcy5uRWxlbWVudHMgPT09IDApXHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgZWxzZVxyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBzaXplKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5uRWxlbWVudHM7XHJcbiAgfVxyXG5cclxuICBhZGRJbkxpc3QobnVtOiBudW1iZXIsIHBvczogbnVtYmVyKSB7XHJcbiAgICBpZiAodGhpcy5saXN0SXNmdWxsKCkpIHtcclxuICAgICAgYWxlcnQoJ0EgbGlzdGEgasOhIGF0aW5naXUgc2V1IHRhbWFuaG8gbcOheGltby4nKTtcclxuICAgICAgcmV0dXJuIC0xO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgaWYgKHBvcyA8IDEgfHwgcG9zID4gdGhpcy5uRWxlbWVudHMgKyAxKSB7XHJcbiAgICAgIGFsZXJ0KCdQb3Npw6fDo28gaW52w6FsaWRhLicpO1xyXG4gICAgICByZXR1cm4gLTE7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBpZiAocG9zID09PSB0aGlzLm5FbGVtZW50cyArIDEpIHtcclxuICAgICAgdGhpcy5saXN0TnVtYmVycy5wdXNoKG51bSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmxpc3ROdW1iZXJzLnNwbGljZShwb3MsIDAsIG51bSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHRoaXMubkVsZW1lbnRzKys7XHJcbiAgICByZXR1cm4gMTtcclxuICB9XHJcbiAgXHJcbiAgcmVtb3ZlSW5MaXN0KG51bT86IG51bWJlciwgcG9zPzogbnVtYmVyKSB7XHJcbiAgICBpZiAocG9zICE9PSB1bmRlZmluZWQgJiYgbnVtICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgYWxlcnQoJ0luZm9ybWUgYXBlbmFzIGEgcG9zacOnw6NvIG91IG8gbsO6bWVybyBhIHNlciByZW1vdmlkby4nKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKHBvcyA9PT0gdW5kZWZpbmVkICYmIG51bSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGFsZXJ0KCdJbmZvcm1lIGEgcG9zacOnw6NvIG91IG8gbsO6bWVybyBhIHNlciByZW1vdmlkby4nKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBuZXdMaXN0ID0gW107XHJcblxyXG4gICAgaWYgKHBvcyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gcGFyc2VJbnQoU3RyaW5nKHBvcykpIC0gMTtcclxuICAgICAgaWYgKGluZGV4ID49IDAgJiYgaW5kZXggPCB0aGlzLmxpc3ROdW1iZXJzLmxlbmd0aCkge1xyXG4gICAgICAgIG5ld0xpc3QgPSBbLi4udGhpcy5saXN0TnVtYmVycy5zbGljZSgwLCBpbmRleCksIC4uLnRoaXMubGlzdE51bWJlcnMuc2xpY2UoaW5kZXggKyAxKV07XHJcbiAgICAgICAgdGhpcy5saXN0TnVtYmVycyA9IG5ld0xpc3Q7XHJcbiAgICAgICAgdGhpcy5uRWxlbWVudHMtLTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBhbGVydCgnUG9zacOnw6NvIGludsOhbGlkYS4nKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChudW0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBjb25zdCBpbmRleCA9IHRoaXMubGlzdE51bWJlcnMuaW5kZXhPZihudW0pO1xyXG4gICAgICBpZiAoaW5kZXggPiAtMSkge1xyXG4gICAgICAgIG5ld0xpc3QgPSBbLi4udGhpcy5saXN0TnVtYmVycy5zbGljZSgwLCBpbmRleCksIC4uLnRoaXMubGlzdE51bWJlcnMuc2xpY2UoaW5kZXggKyAxKV07XHJcbiAgICAgICAgdGhpcy5saXN0TnVtYmVycyA9IG5ld0xpc3Q7XHJcbiAgICAgICAgdGhpcy5uRWxlbWVudHMtLTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBhbGVydChgTyBuw7ptZXJvICR7bnVtfSBuw6NvIGV4aXN0ZSBuYSBsaXN0YS5gKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2VhcmNoSW5MaXN0KG51bT86IG51bWJlciwgcG9zPzogbnVtYmVyKSB7XHJcbiAgICBpZiAobnVtICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmxpc3ROdW1iZXJzLmluZGV4T2YobnVtKTtcclxuICAgICAgaWYgKGluZGV4ID4gLTEpIHtcclxuICAgICAgICBhbGVydChgTyBuw7ptZXJvICR7bnVtfSBleGlzdGUgbmEgbGlzdGEgZSBlc3TDoSBuYSBwb3Npw6fDo28gJHtpbmRleCArIDF9IWApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGFsZXJ0KGBPIG7Dum1lcm8gJHtudW19IG7Do28gZXhpc3RlIG5hIGxpc3RhLmApO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKHBvcyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gcGFyc2VJbnQoU3RyaW5nKHBvcykpIC0gMTtcclxuICAgICAgaWYgKGluZGV4ID49IDAgJiYgaW5kZXggPCB0aGlzLmxpc3ROdW1iZXJzLmxlbmd0aCkge1xyXG4gICAgICAgIGFsZXJ0KGBPIGVsZW1lbnRvIG5hIHBvc2nDp8OjbyAke3Bvc30gw6kgbyBuw7ptZXJvICR7dGhpcy5saXN0TnVtYmVyc1tpbmRleF19LmApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGFsZXJ0KCdQb3Npw6fDo28gaW52w6FsaWRhLicpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhbGVydCgnSW5mb3JtZSBhIHBvc2nDp8OjbyBvdSBvIG7Dum1lcm8gYSBzZXIgcGVzcXVpc2Fkby4nKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIFxyXG59Il0sIm5hbWVzIjpbIkxpc3RhU2VxdWVuY2lhbCIsImxpc3RJc2Z1bGwiLCJuRWxlbWVudHMiLCJtYXgiLCJsaXN0SXNFbXB0eSIsInNpemUiLCJhZGRJbkxpc3QiLCJudW0iLCJwb3MiLCJhbGVydCIsImxpc3ROdW1iZXJzIiwicHVzaCIsInNwbGljZSIsInJlbW92ZUluTGlzdCIsInVuZGVmaW5lZCIsIm5ld0xpc3QiLCJpbmRleCIsInBhcnNlSW50IiwiU3RyaW5nIiwibGVuZ3RoIiwic2xpY2UiLCJpbmRleE9mIiwic2VhcmNoSW5MaXN0IiwiY29uc3RydWN0b3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/core/ListaSequencial.ts\n"));

/***/ })

});
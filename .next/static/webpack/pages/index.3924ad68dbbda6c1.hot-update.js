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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ListaSimplesmenteEncadeada\": function() { return /* binding */ ListaSimplesmenteEncadeada; }\n/* harmony export */ });\nclass ListaSimplesmenteEncadeada {\n    addInList(num, pos) {\n        const number = parseInt(String(num));\n        const position = parseInt(String(pos)) - 1;\n        // Verifica se a posição é válida\n        if (position >= 0 && position <= this.listNumbers.length && this.listNumbers.length < this.max) {\n            // Verifica se o número já existe na lista\n            if (!this.listNumbers.includes(number)) {\n                const newNode = {\n                    value: number,\n                    next: null\n                };\n                const newList = [\n                    ...this.listNumbers.slice(0, pos),\n                    number,\n                    ...this.listNumbers.slice(pos)\n                ];\n                this.listNumbers = newList;\n                if (position === 1) {\n                    // Insere no começo da lista\n                    newNode.next = this.head;\n                    this.head = newNode;\n                    if (!this.tail) {\n                        this.tail = newNode;\n                    }\n                } else if (position === this.length) {\n                    // Insere no final da lista\n                    this.tail.next = newNode;\n                    this.tail = newNode;\n                } else {\n                    // Insere no meio da lista\n                    let current = this.head;\n                    for(let i = 0; i < position - 1; i++){\n                        current = current.next;\n                    }\n                    newNode.next = current.next;\n                    current.next = newNode;\n                }\n                this.length++;\n            } else {\n                console.log(\"O n\\xfamero \".concat(number, \" j\\xe1 existe na lista.\"));\n            }\n        } else {\n            console.log(\"Posi\\xe7\\xe3o inv\\xe1lida.\");\n        }\n    }\n    removeInList(num, pos) {\n        if (pos !== undefined && num !== undefined) {\n            console.log(\"Informe apenas a posi\\xe7\\xe3o ou o n\\xfamero a ser removido.\");\n            return;\n        }\n        if (pos !== undefined) {\n            const index = parseInt(String(pos)) - 1;\n            if (index >= 0 && index < this.length) {\n                if (index === 0) {\n                    // Remove do começo da lista\n                    this.head = this.head.next;\n                    if (this.length === 1) {\n                        this.tail = null;\n                    }\n                } else if (index === this.length - 1) {\n                    // Remove do final da lista\n                    let current = this.head;\n                    while(current.next !== this.tail){\n                        current = current.next;\n                    }\n                    current.next = null;\n                    this.tail = current;\n                } else {\n                    // Remove do meio da lista\n                    let current = this.head;\n                    for(let i = 0; i < index - 1; i++){\n                        current = current.next;\n                    }\n                    current.next = current.next.next;\n                }\n                this.length--;\n            } else {\n                console.log(\"Posi\\xe7\\xe3o inv\\xe1lida.\");\n            }\n        } else if (num !== undefined) {\n            const number = parseInt(String(num));\n            let current = this.head;\n            let previous = null;\n            while(current){\n                if (current.value === number) {\n                    if (!previous) {\n                        // Remove do começo da lista\n                        this.head = current.next;\n                        if (this.length === 1) {\n                            this.tail = null;\n                        }\n                    } else if (current.next === null) {\n                        // Remove do final da lista\n                        previous.next = null;\n                        this.tail = previous;\n                    } else {\n                        // Remove do meio da lista\n                        previous.next = current.next;\n                    }\n                    this.length--;\n                    return;\n                }\n                previous = current;\n                current = current.next;\n            }\n            console.log(\"O n\\xfamero \".concat(number, \" n\\xe3o existe na lista.\"));\n        } else {\n            console.log(\"Informe a posi\\xe7\\xe3o ou o n\\xfamero a ser removido.\");\n        }\n    }\n    searchInList(num, pos) {\n        if (pos !== undefined && num !== undefined) {\n            console.log(\"Informe apenas a posi\\xe7\\xe3o ou o n\\xfamero a ser buscado.\");\n            return null;\n        }\n        if (pos !== undefined) {\n            const index = parseInt(String(pos)) - 1;\n            if (index >= 0 && index < this.length) {\n                let current = this.head;\n                for(let i = 0; i < index; i++){\n                    current = current.next;\n                }\n                console.log(\"O n\\xfamero na posi\\xe7\\xe3o \".concat(pos, \" \\xe9 \").concat(current.value, \".\"));\n                return current.value;\n            } else {\n                console.log(\"Posi\\xe7\\xe3o inv\\xe1lida.\");\n                return null;\n            }\n        } else if (num !== undefined) {\n            const number = parseInt(String(num));\n            let current = this.head;\n            let index = 0;\n            while(current){\n                if (current.value === number) {\n                    console.log(\"O n\\xfamero \".concat(number, \" est\\xe1 na posi\\xe7\\xe3o \").concat(index + 1, \".\"));\n                    return index + 1;\n                }\n                current = current.next;\n                index++;\n            }\n            console.log(\"O n\\xfamero \".concat(number, \" n\\xe3o est\\xe1 na lista.\"));\n            return null;\n        } else {\n            console.log(\"Informe a posi\\xe7\\xe3o ou o n\\xfamero a ser buscado.\");\n            return null;\n        }\n    }\n    constructor(max, listNumbers){\n        this.max = max;\n        this.listNumbers = listNumbers;\n        this.size = 0;\n        this.head = null;\n        this.tail = null;\n        this.length = 0;\n        for(let i = 0; i < listNumbers.length; i++){\n            if (this.size < this.max) {\n                this.addInList(listNumbers[i], this.size);\n            } else {\n                console.log(\"A lista j\\xe1 est\\xe1 cheia. O n\\xfamero \".concat(listNumbers[i], \" n\\xe3o foi adicionado.\"));\n            }\n        }\n    }\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29yZS9MaXN0YVNpbXBsZXNtZW50ZUVuY2FkZWFkYS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBY08sTUFBTUE7SUEwQlRDLFVBQVVDLEdBQVcsRUFBRUMsR0FBVyxFQUFFO1FBQ2hDLE1BQU1DLFNBQVNDLFNBQVNDLE9BQU9KO1FBQy9CLE1BQU1LLFdBQVdGLFNBQVNDLE9BQU9ILFFBQVE7UUFFekMsaUNBQWlDO1FBQ2pDLElBQUlJLFlBQVksS0FBS0EsWUFBWSxJQUFJLENBQUNDLFdBQVcsQ0FBQ0MsTUFBTSxJQUFJLElBQUksQ0FBQ0QsV0FBVyxDQUFDQyxNQUFNLEdBQUcsSUFBSSxDQUFDQyxHQUFHLEVBQUU7WUFDOUYsMENBQTBDO1lBQzFDLElBQUksQ0FBQyxJQUFJLENBQUNGLFdBQVcsQ0FBQ0csUUFBUSxDQUFDUCxTQUFTO2dCQUN0QyxNQUFNUSxVQUFvQjtvQkFDeEJDLE9BQU9UO29CQUNQVSxNQUFNLElBQUk7Z0JBQ1o7Z0JBRUEsTUFBTUMsVUFBVTt1QkFBSSxJQUFJLENBQUNQLFdBQVcsQ0FBQ1EsS0FBSyxDQUFDLEdBQUdiO29CQUFNQzt1QkFBVyxJQUFJLENBQUNJLFdBQVcsQ0FBQ1EsS0FBSyxDQUFDYjtpQkFBSztnQkFDM0YsSUFBSSxDQUFDSyxXQUFXLEdBQUdPO2dCQUVuQixJQUFJUixhQUFhLEdBQUc7b0JBQ2xCLDRCQUE0QjtvQkFDNUJLLFFBQVFFLElBQUksR0FBRyxJQUFJLENBQUNHLElBQUk7b0JBQ3hCLElBQUksQ0FBQ0EsSUFBSSxHQUFHTDtvQkFDWixJQUFJLENBQUMsSUFBSSxDQUFDTSxJQUFJLEVBQUU7d0JBQ2QsSUFBSSxDQUFDQSxJQUFJLEdBQUdOO29CQUNkLENBQUM7Z0JBQ0gsT0FBTyxJQUFJTCxhQUFhLElBQUksQ0FBQ0UsTUFBTSxFQUFFO29CQUNuQywyQkFBMkI7b0JBQzNCLElBQUksQ0FBQ1MsSUFBSSxDQUFFSixJQUFJLEdBQUdGO29CQUNsQixJQUFJLENBQUNNLElBQUksR0FBR047Z0JBQ2QsT0FB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STtnQkFDdEJXO1lBQ0Y7WUFDQUosUUFBUUMsR0FBRyxDQUFDLGVBQW1CLE9BQVBsQixRQUFPO1lBQy9CLE9BQU8sSUFBSTtRQUNiLE9BQU87WUFDTGlCLFFBQVFDLEdBQUcsQ0FBQztZQUNaLE9BQU8sSUFBSTtRQUNiLENBQUM7SUFFTDtJQWhMQU0sWUFBWWxCLEdBQVcsRUFBRUYsV0FBcUIsQ0FBRTtRQUM1QyxJQUFJLENBQUNFLEdBQUcsR0FBR0E7UUFDWCxJQUFJLENBQUNGLFdBQVcsR0FBR0E7UUFDbkIsSUFBSSxDQUFDcUIsSUFBSSxHQUFHO1FBQ1osSUFBSSxDQUFDWixJQUFJLEdBQUcsSUFBSTtRQUNoQixJQUFJLENBQUNDLElBQUksR0FBRyxJQUFJO1FBQ2hCLElBQUksQ0FBQ1QsTUFBTSxHQUFHO1FBRWQsSUFBSSxJQUFJVyxJQUFJLEdBQUdBLElBQUlaLFlBQVlDLE1BQU0sRUFBRVcsSUFBSztZQUN4QyxJQUFHLElBQUksQ0FBQ1MsSUFBSSxHQUFHLElBQUksQ0FBQ25CLEdBQUcsRUFBRTtnQkFDckIsSUFBSSxDQUFDVCxTQUFTLENBQUNPLFdBQVcsQ0FBQ1ksRUFBRSxFQUFFLElBQUksQ0FBQ1MsSUFBSTtZQUM1QyxPQUFPO2dCQUNIUixRQUFRQyxHQUFHLENBQUMsNENBQWtELE9BQWZkLFdBQVcsQ0FBQ1ksRUFBRSxFQUFDO1lBQ2xFLENBQUM7UUFDTDtJQUNKO0FBbUtKLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvcmUvTGlzdGFTaW1wbGVzbWVudGVFbmNhZGVhZGEudHM/ZWU2YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbnRlcmZhY2UgTGlzdE5vZGUge1xuICAgIHZhbHVlOiBudW1iZXI7XG4gICAgbmV4dDogTGlzdE5vZGUgfCBudWxsO1xuICB9XG4gIFxuICBpbnRlcmZhY2UgTGlzdEludGVyZmFjZSB7XG4gICAgbWF4OiBudW1iZXI7XG4gICAgbGlzdE51bWJlcnM6IG51bWJlcltdO1xuICAgIHNpemU6IG51bWJlcjtcbiAgICBhZGRJbkxpc3Q6IChudW06IG51bWJlciwgcG9zOiBudW1iZXIpID0+IHZvaWQ7XG4gICAgcmVtb3ZlSW5MaXN0OiAobnVtPzogbnVtYmVyLCBwb3M/OiBudW1iZXIpID0+IHZvaWQ7XG4gICAgc2VhcmNoSW5MaXN0OiAobnVtPzogbnVtYmVyLCBwb3M/OiBudW1iZXIpID0+IHZvaWQ7XG4gIH1cbiAgXG5leHBvcnQgY2xhc3MgTGlzdGFTaW1wbGVzbWVudGVFbmNhZGVhZGEgaW1wbGVtZW50cyBMaXN0SW50ZXJmYWNlIHtcbiAgICBtYXg6IG51bWJlcjtcbiAgICBsaXN0TnVtYmVyczogbnVtYmVyW107XG4gICAgc2l6ZTogbnVtYmVyO1xuXG4gICAgcHJpdmF0ZSBoZWFkOiBMaXN0Tm9kZSB8IG51bGw7XG4gICAgcHJpdmF0ZSB0YWlsOiBMaXN0Tm9kZSB8IG51bGw7XG4gICAgcHJpdmF0ZSBsZW5ndGg6IG51bWJlcjtcbiAgXG4gICAgY29uc3RydWN0b3IobWF4OiBudW1iZXIsIGxpc3ROdW1iZXJzOiBudW1iZXJbXSkge1xuICAgICAgICB0aGlzLm1heCA9IG1heDtcbiAgICAgICAgdGhpcy5saXN0TnVtYmVycyA9IGxpc3ROdW1iZXJzO1xuICAgICAgICB0aGlzLnNpemUgPSAwO1xuICAgICAgICB0aGlzLmhlYWQgPSBudWxsO1xuICAgICAgICB0aGlzLnRhaWwgPSBudWxsO1xuICAgICAgICB0aGlzLmxlbmd0aCA9IDA7XG5cbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGxpc3ROdW1iZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZih0aGlzLnNpemUgPCB0aGlzLm1heCkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkSW5MaXN0KGxpc3ROdW1iZXJzW2ldLCB0aGlzLnNpemUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgQSBsaXN0YSBqw6EgZXN0w6EgY2hlaWEuIE8gbsO6bWVybyAke2xpc3ROdW1iZXJzW2ldfSBuw6NvIGZvaSBhZGljaW9uYWRvLmApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICBcbiAgICBhZGRJbkxpc3QobnVtOiBudW1iZXIsIHBvczogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IG51bWJlciA9IHBhcnNlSW50KFN0cmluZyhudW0pKTtcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSBwYXJzZUludChTdHJpbmcocG9zKSkgLSAxO1xuICAgICAgXG4gICAgICAgIC8vIFZlcmlmaWNhIHNlIGEgcG9zacOnw6NvIMOpIHbDoWxpZGFcbiAgICAgICAgaWYgKHBvc2l0aW9uID49IDAgJiYgcG9zaXRpb24gPD0gdGhpcy5saXN0TnVtYmVycy5sZW5ndGggJiYgdGhpcy5saXN0TnVtYmVycy5sZW5ndGggPCB0aGlzLm1heCkge1xuICAgICAgICAgIC8vIFZlcmlmaWNhIHNlIG8gbsO6bWVybyBqw6EgZXhpc3RlIG5hIGxpc3RhXG4gICAgICAgICAgaWYgKCF0aGlzLmxpc3ROdW1iZXJzLmluY2x1ZGVzKG51bWJlcikpIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld05vZGU6IExpc3ROb2RlID0ge1xuICAgICAgICAgICAgICB2YWx1ZTogbnVtYmVyLFxuICAgICAgICAgICAgICBuZXh0OiBudWxsLFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY29uc3QgbmV3TGlzdCA9IFsuLi50aGlzLmxpc3ROdW1iZXJzLnNsaWNlKDAsIHBvcyksIG51bWJlciwgLi4udGhpcy5saXN0TnVtYmVycy5zbGljZShwb3MpXTtcbiAgICAgICAgICAgIHRoaXMubGlzdE51bWJlcnMgPSBuZXdMaXN0XG4gICAgICBcbiAgICAgICAgICAgIGlmIChwb3NpdGlvbiA9PT0gMSkge1xuICAgICAgICAgICAgICAvLyBJbnNlcmUgbm8gY29tZcOnbyBkYSBsaXN0YVxuICAgICAgICAgICAgICBuZXdOb2RlLm5leHQgPSB0aGlzLmhlYWQ7XG4gICAgICAgICAgICAgIHRoaXMuaGVhZCA9IG5ld05vZGU7XG4gICAgICAgICAgICAgIGlmICghdGhpcy50YWlsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50YWlsID0gbmV3Tm9kZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChwb3NpdGlvbiA9PT0gdGhpcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgLy8gSW5zZXJlIG5vIGZpbmFsIGRhIGxpc3RhXG4gICAgICAgICAgICAgIHRoaXMudGFpbCEubmV4dCA9IG5ld05vZGU7XG4gICAgICAgICAgICAgIHRoaXMudGFpbCA9IG5ld05vZGU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAvLyBJbnNlcmUgbm8gbWVpbyBkYSBsaXN0YVxuICAgICAgICAgICAgICBsZXQgY3VycmVudCA9IHRoaXMuaGVhZCE7XG4gICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcG9zaXRpb24gLSAxOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50ID0gY3VycmVudC5uZXh0ITtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBuZXdOb2RlLm5leHQgPSBjdXJyZW50Lm5leHQ7XG4gICAgICAgICAgICAgIGN1cnJlbnQubmV4dCA9IG5ld05vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5sZW5ndGgrKztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYE8gbsO6bWVybyAke251bWJlcn0gasOhIGV4aXN0ZSBuYSBsaXN0YS5gKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ1Bvc2nDp8OjbyBpbnbDoWxpZGEuJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFxuICBcbiAgICByZW1vdmVJbkxpc3QobnVtPzogbnVtYmVyLCBwb3M/OiBudW1iZXIpIHtcbiAgICAgIGlmIChwb3MgIT09IHVuZGVmaW5lZCAmJiBudW0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zb2xlLmxvZygnSW5mb3JtZSBhcGVuYXMgYSBwb3Npw6fDo28gb3UgbyBuw7ptZXJvIGEgc2VyIHJlbW92aWRvLicpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gIFxuICAgICAgaWYgKHBvcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gcGFyc2VJbnQoU3RyaW5nKHBvcykpIC0gMTtcbiAgICAgICAgaWYgKGluZGV4ID49IDAgJiYgaW5kZXggPCB0aGlzLmxlbmd0aCkge1xuICAgICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgLy8gUmVtb3ZlIGRvIGNvbWXDp28gZGEgbGlzdGFcbiAgICAgICAgICAgIHRoaXMuaGVhZCA9IHRoaXMuaGVhZCEubmV4dDtcbiAgICAgICAgICAgIGlmICh0aGlzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICB0aGlzLnRhaWwgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAoaW5kZXggPT09IHRoaXMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgLy8gUmVtb3ZlIGRvIGZpbmFsIGRhIGxpc3RhXG4gICAgICAgICAgICBsZXQgY3VycmVudCA9IHRoaXMuaGVhZCE7XG4gICAgICAgICAgICB3aGlsZSAoY3VycmVudC5uZXh0ICE9PSB0aGlzLnRhaWwpIHtcbiAgICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnQubmV4dCE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjdXJyZW50Lm5leHQgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy50YWlsID0gY3VycmVudDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gUmVtb3ZlIGRvIG1laW8gZGEgbGlzdGFcbiAgICAgICAgICAgIGxldCBjdXJyZW50ID0gdGhpcy5oZWFkITtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5kZXggLSAxOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50ID0gY3VycmVudC5uZXh0ITtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBjdXJyZW50Lm5leHQgPSBjdXJyZW50Lm5leHQhLm5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgdGhpcy5sZW5ndGgtLTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1Bvc2nDp8OjbyBpbnbDoWxpZGEuJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKG51bSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgY29uc3QgbnVtYmVyID0gcGFyc2VJbnQoU3RyaW5nKG51bSkpO1xuICAgICAgICAgIGxldCBjdXJyZW50ID0gdGhpcy5oZWFkO1xuICAgICAgICAgIGxldCBwcmV2aW91czogTGlzdE5vZGUgfCBudWxsID0gbnVsbDtcbiAgICAgICAgXG4gICAgICAgICAgd2hpbGUgKGN1cnJlbnQpIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50LnZhbHVlID09PSBudW1iZXIpIHtcbiAgICAgICAgICAgICAgaWYgKCFwcmV2aW91cykge1xuICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBkbyBjb21lw6dvIGRhIGxpc3RhXG4gICAgICAgICAgICAgICAgdGhpcy5oZWFkID0gY3VycmVudC5uZXh0O1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgdGhpcy50YWlsID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoY3VycmVudC5uZXh0ID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgLy8gUmVtb3ZlIGRvIGZpbmFsIGRhIGxpc3RhXG4gICAgICAgICAgICAgICAgcHJldmlvdXMubmV4dCA9IG51bGw7XG4gICAgICAgICAgICAgICAgdGhpcy50YWlsID0gcHJldmlvdXM7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gUmVtb3ZlIGRvIG1laW8gZGEgbGlzdGFcbiAgICAgICAgICAgICAgICBwcmV2aW91cy5uZXh0ID0gY3VycmVudC5uZXh0O1xuICAgICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgICB0aGlzLmxlbmd0aC0tO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgcHJldmlvdXMgPSBjdXJyZW50O1xuICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnQubmV4dDtcbiAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgIGNvbnNvbGUubG9nKGBPIG7Dum1lcm8gJHtudW1iZXJ9IG7Do28gZXhpc3RlIG5hIGxpc3RhLmApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdJbmZvcm1lIGEgcG9zacOnw6NvIG91IG8gbsO6bWVybyBhIHNlciByZW1vdmlkby4nKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNlYXJjaEluTGlzdChudW0/OiBudW1iZXIsIHBvcz86IG51bWJlcikge1xuICAgICAgICBpZiAocG9zICE9PSB1bmRlZmluZWQgJiYgbnVtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdJbmZvcm1lIGFwZW5hcyBhIHBvc2nDp8OjbyBvdSBvIG7Dum1lcm8gYSBzZXIgYnVzY2Fkby4nKTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgaWYgKHBvcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgY29uc3QgaW5kZXggPSBwYXJzZUludChTdHJpbmcocG9zKSkgLSAxO1xuICAgICAgICAgIGlmIChpbmRleCA+PSAwICYmIGluZGV4IDwgdGhpcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGxldCBjdXJyZW50ID0gdGhpcy5oZWFkITtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5kZXg7IGkrKykge1xuICAgICAgICAgICAgICBjdXJyZW50ID0gY3VycmVudC5uZXh0ITtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBPIG7Dum1lcm8gbmEgcG9zacOnw6NvICR7cG9zfSDDqSAke2N1cnJlbnQudmFsdWV9LmApO1xuICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnQudmFsdWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdQb3Npw6fDo28gaW52w6FsaWRhLicpO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKG51bSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgY29uc3QgbnVtYmVyID0gcGFyc2VJbnQoU3RyaW5nKG51bSkpO1xuICAgICAgICAgIGxldCBjdXJyZW50ID0gdGhpcy5oZWFkO1xuICAgICAgICAgIGxldCBpbmRleCA9IDA7XG4gICAgICAgICAgd2hpbGUgKGN1cnJlbnQpIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50LnZhbHVlID09PSBudW1iZXIpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coYE8gbsO6bWVybyAke251bWJlcn0gZXN0w6EgbmEgcG9zacOnw6NvICR7aW5kZXggKyAxfS5gKTtcbiAgICAgICAgICAgICAgcmV0dXJuIGluZGV4ICsgMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHQ7XG4gICAgICAgICAgICBpbmRleCsrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zb2xlLmxvZyhgTyBuw7ptZXJvICR7bnVtYmVyfSBuw6NvIGVzdMOhIG5hIGxpc3RhLmApO1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdJbmZvcm1lIGEgcG9zacOnw6NvIG91IG8gbsO6bWVybyBhIHNlciBidXNjYWRvLicpO1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cblxufSJdLCJuYW1lcyI6WyJMaXN0YVNpbXBsZXNtZW50ZUVuY2FkZWFkYSIsImFkZEluTGlzdCIsIm51bSIsInBvcyIsIm51bWJlciIsInBhcnNlSW50IiwiU3RyaW5nIiwicG9zaXRpb24iLCJsaXN0TnVtYmVycyIsImxlbmd0aCIsIm1heCIsImluY2x1ZGVzIiwibmV3Tm9kZSIsInZhbHVlIiwibmV4dCIsIm5ld0xpc3QiLCJzbGljZSIsImhlYWQiLCJ0YWlsIiwiY3VycmVudCIsImkiLCJjb25zb2xlIiwibG9nIiwicmVtb3ZlSW5MaXN0IiwidW5kZWZpbmVkIiwiaW5kZXgiLCJwcmV2aW91cyIsInNlYXJjaEluTGlzdCIsImNvbnN0cnVjdG9yIiwic2l6ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/core/ListaSimplesmenteEncadeada.ts\n"));

/***/ })

});
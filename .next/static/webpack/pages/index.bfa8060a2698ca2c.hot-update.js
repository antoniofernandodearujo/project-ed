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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ListaSimplesmenteEncadeada\": function() { return /* binding */ ListaSimplesmenteEncadeada; }\n/* harmony export */ });\nclass ListaSimplesmenteEncadeada {\n    addInList(num, pos) {\n        const number = parseInt(String(num));\n        const position = parseInt(String(pos)) - 1;\n        // Verifica se a posição é válida\n        if (position >= 0 && position <= this.listNumbers.length && this.listNumbers.length < this.max) {\n            // Verifica se o número já existe na lista\n            if (!this.listNumbers.includes(number)) {\n                const newNode = {\n                    value: number,\n                    next: null\n                };\n                if (position === 1) {\n                    // Insere no começo da lista\n                    newNode.next = this.head;\n                    this.head = newNode;\n                    if (!this.tail) {\n                        this.tail = newNode;\n                    }\n                } else if (position === this.length) {\n                    // Insere no final da lista\n                    this.tail.next = newNode;\n                    this.tail = newNode;\n                } else {\n                    // Insere no meio da lista\n                    let current = this.head;\n                    for(let i = 0; i < position - 1; i++){\n                        current = current.next;\n                    }\n                    newNode.next = current.next;\n                    current.next = newNode;\n                }\n                const newList = [\n                    ...this.listNumbers.slice(0, pos),\n                    number,\n                    ...this.listNumbers.slice(position)\n                ];\n                this.listNumbers = newList;\n            } else {\n                console.log(\"O n\\xfamero \".concat(number, \" j\\xe1 existe na lista.\"));\n            }\n        } else {\n            console.log(\"Posi\\xe7\\xe3o inv\\xe1lida.\");\n        }\n    }\n    removeInList(num, pos) {\n        if (pos !== undefined && num !== undefined) {\n            console.log(\"Informe apenas a posi\\xe7\\xe3o ou o n\\xfamero a ser removido.\");\n            return;\n        }\n        if (pos !== undefined) {\n            const index = parseInt(String(pos)) - 1;\n            if (index >= 0 && index < this.length) {\n                if (index === 0) {\n                    // Remove do começo da lista\n                    this.head = this.head.next;\n                    if (this.length === 1) {\n                        this.tail = null;\n                    }\n                } else if (index === this.length - 1) {\n                    // Remove do final da lista\n                    let current = this.head;\n                    while(current.next !== this.tail){\n                        current = current.next;\n                    }\n                    current.next = null;\n                    this.tail = current;\n                } else {\n                    // Remove do meio da lista\n                    let current = this.head;\n                    for(let i = 0; i < index - 1; i++){\n                        current = current.next;\n                    }\n                    current.next = current.next.next;\n                }\n                this.length--;\n            } else {\n                console.log(\"Posi\\xe7\\xe3o inv\\xe1lida.\");\n            }\n        } else if (num !== undefined) {\n            const number = parseInt(String(num));\n            let current = this.head;\n            let previous = null;\n            while(current){\n                if (current.value === number) {\n                    if (!previous) {\n                        // Remove do começo da lista\n                        this.head = current.next;\n                        if (this.length === 1) {\n                            this.tail = null;\n                        }\n                    } else if (current.next === null) {\n                        // Remove do final da lista\n                        previous.next = null;\n                        this.tail = previous;\n                    } else {\n                        // Remove do meio da lista\n                        previous.next = current.next;\n                    }\n                    this.length--;\n                    return;\n                }\n                previous = current;\n                current = current.next;\n            }\n            console.log(\"O n\\xfamero \".concat(number, \" n\\xe3o existe na lista.\"));\n        } else {\n            console.log(\"Informe a posi\\xe7\\xe3o ou o n\\xfamero a ser removido.\");\n        }\n    }\n    searchInList(num, pos) {\n        if (pos !== undefined && num !== undefined) {\n            console.log(\"Informe apenas a posi\\xe7\\xe3o ou o n\\xfamero a ser buscado.\");\n            return null;\n        }\n        if (pos !== undefined) {\n            const index = parseInt(String(pos)) - 1;\n            if (index >= 0 && index < this.length) {\n                let current = this.head;\n                for(let i = 0; i < index; i++){\n                    current = current.next;\n                }\n                console.log(\"O n\\xfamero na posi\\xe7\\xe3o \".concat(pos, \" \\xe9 \").concat(current.value, \".\"));\n                return current.value;\n            } else {\n                console.log(\"Posi\\xe7\\xe3o inv\\xe1lida.\");\n                return null;\n            }\n        } else if (num !== undefined) {\n            const number = parseInt(String(num));\n            let current = this.head;\n            let index = 0;\n            while(current){\n                if (current.value === number) {\n                    console.log(\"O n\\xfamero \".concat(number, \" est\\xe1 na posi\\xe7\\xe3o \").concat(index + 1, \".\"));\n                    return index + 1;\n                }\n                current = current.next;\n                index++;\n            }\n            console.log(\"O n\\xfamero \".concat(number, \" n\\xe3o est\\xe1 na lista.\"));\n            return null;\n        } else {\n            console.log(\"Informe a posi\\xe7\\xe3o ou o n\\xfamero a ser buscado.\");\n            return null;\n        }\n    }\n    constructor(max, listNumbers){\n        this.max = max;\n        this.listNumbers = listNumbers;\n        this.size = 0;\n        this.head = null;\n        this.tail = null;\n        this.length = 0;\n        for(let i = 0; i < listNumbers.length; i++){\n            if (this.size < this.max) {\n                this.addInList(listNumbers[i], this.size);\n            } else {\n                console.log(\"A lista j\\xe1 est\\xe1 cheia. O n\\xfamero \".concat(listNumbers[i], \" n\\xe3o foi adicionado.\"));\n            }\n        }\n    }\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29yZS9MaXN0YVNpbXBsZXNtZW50ZUVuY2FkZWFkYS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBY08sTUFBTUE7SUEwQlRDLFVBQVVDLEdBQVcsRUFBRUMsR0FBVyxFQUFFO1FBQ2hDLE1BQU1DLFNBQVNDLFNBQVNDLE9BQU9KO1FBQy9CLE1BQU1LLFdBQVdGLFNBQVNDLE9BQU9ILFFBQVE7UUFFekMsaUNBQWlDO1FBQ2pDLElBQUlJLFlBQVksS0FBS0EsWUFBWSxJQUFJLENBQUNDLFdBQVcsQ0FBQ0MsTUFBTSxJQUFJLElBQUksQ0FBQ0QsV0FBVyxDQUFDQyxNQUFNLEdBQUcsSUFBSSxDQUFDQyxHQUFHLEVBQUU7WUFDOUYsMENBQTBDO1lBQzFDLElBQUksQ0FBQyxJQUFJLENBQUNGLFdBQVcsQ0FBQ0csUUFBUSxDQUFDUCxTQUFTO2dCQUN0QyxNQUFNUSxVQUFvQjtvQkFDeEJDLE9BQU9UO29CQUNQVSxNQUFNLElBQUk7Z0JBQ1o7Z0JBRUEsSUFBSVAsYUFBYSxHQUFHO29CQUNsQiw0QkFBNEI7b0JBQzVCSyxRQUFRRSxJQUFJLEdBQUcsSUFBSSxDQUFDQyxJQUFJO29CQUN4QixJQUFJLENBQUNBLElBQUksR0FBR0g7b0JBQ1osSUFBSSxDQUFDLElBQUksQ0FBQ0ksSUFBSSxFQUFFO3dCQUNkLElBQUksQ0FBQ0EsSUFBSSxHQUFHSjtvQkFDZCxDQUFDO2dCQUNILE9BQU8sSUFBSUwsYUFBYSxJQUFJLENBQUNFLE1BQU0sRUFBRTtvQkFDbkMsMkJBQTJCO29CQUMzQixJQUFJLENBQUNPLElBQUksQ0FBRUYsSUFBSSxHQUFHRjtvQkFDbEIsSUFBSSxDQUFDSSxJQUFJLEdBQUdKO2dCQUNkLE9BQU87b0JBQ0wsMEJBQTBCO29CQUMxQixJQUFJSyxVQUFVLElBQUksQ0FBQ0YsSUFBSTtvQkFDdkIsSUFBSyxJQUFJRyxJQUFJLEdBQUdBLElBQUlYLFdBQVcsR0FBR1csSUFBSzt3QkFDckNELFVBQVVBLFFBQVFILElBQUk7b0JBQ3hCO29CQUNBRixRQUFR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QyxHQUFHLENBQUMsZUFBbUIsT0FBUGxCLFFBQU87WUFDL0IsT0FBTyxJQUFJO1FBQ2IsT0FBTztZQUNMaUIsUUFBUUMsR0FBRyxDQUFDO1lBQ1osT0FBTyxJQUFJO1FBQ2IsQ0FBQztJQUVMO0lBOUtBTSxZQUFZbEIsR0FBVyxFQUFFRixXQUFxQixDQUFFO1FBQzVDLElBQUksQ0FBQ0UsR0FBRyxHQUFHQTtRQUNYLElBQUksQ0FBQ0YsV0FBVyxHQUFHQTtRQUNuQixJQUFJLENBQUNxQixJQUFJLEdBQUc7UUFDWixJQUFJLENBQUNkLElBQUksR0FBRyxJQUFJO1FBQ2hCLElBQUksQ0FBQ0MsSUFBSSxHQUFHLElBQUk7UUFDaEIsSUFBSSxDQUFDUCxNQUFNLEdBQUc7UUFFZCxJQUFJLElBQUlTLElBQUksR0FBR0EsSUFBSVYsWUFBWUMsTUFBTSxFQUFFUyxJQUFLO1lBQ3hDLElBQUcsSUFBSSxDQUFDVyxJQUFJLEdBQUcsSUFBSSxDQUFDbkIsR0FBRyxFQUFFO2dCQUNyQixJQUFJLENBQUNULFNBQVMsQ0FBQ08sV0FBVyxDQUFDVSxFQUFFLEVBQUUsSUFBSSxDQUFDVyxJQUFJO1lBQzVDLE9BQU87Z0JBQ0hSLFFBQVFDLEdBQUcsQ0FBQyw0Q0FBa0QsT0FBZmQsV0FBVyxDQUFDVSxFQUFFLEVBQUM7WUFDbEUsQ0FBQztRQUNMO0lBQ0o7QUFnS0osQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29yZS9MaXN0YVNpbXBsZXNtZW50ZUVuY2FkZWFkYS50cz9lZTZiIl0sInNvdXJjZXNDb250ZW50IjpbImludGVyZmFjZSBMaXN0Tm9kZSB7XG4gICAgdmFsdWU6IG51bWJlcjtcbiAgICBuZXh0OiBMaXN0Tm9kZSB8IG51bGw7XG4gIH1cbiAgXG4gIGludGVyZmFjZSBMaXN0SW50ZXJmYWNlIHtcbiAgICBtYXg6IG51bWJlcjtcbiAgICBsaXN0TnVtYmVyczogbnVtYmVyW107XG4gICAgc2l6ZTogbnVtYmVyO1xuICAgIGFkZEluTGlzdDogKG51bTogbnVtYmVyLCBwb3M6IG51bWJlcikgPT4gdm9pZDtcbiAgICByZW1vdmVJbkxpc3Q6IChudW0/OiBudW1iZXIsIHBvcz86IG51bWJlcikgPT4gdm9pZDtcbiAgICBzZWFyY2hJbkxpc3Q6IChudW0/OiBudW1iZXIsIHBvcz86IG51bWJlcikgPT4gdm9pZDtcbiAgfVxuICBcbmV4cG9ydCBjbGFzcyBMaXN0YVNpbXBsZXNtZW50ZUVuY2FkZWFkYSBpbXBsZW1lbnRzIExpc3RJbnRlcmZhY2Uge1xuICAgIG1heDogbnVtYmVyO1xuICAgIGxpc3ROdW1iZXJzOiBudW1iZXJbXTtcbiAgICBzaXplOiBudW1iZXI7XG5cbiAgICBwcml2YXRlIGhlYWQ6IExpc3ROb2RlIHwgbnVsbDtcbiAgICBwcml2YXRlIHRhaWw6IExpc3ROb2RlIHwgbnVsbDtcbiAgICBwcml2YXRlIGxlbmd0aDogbnVtYmVyO1xuICBcbiAgICBjb25zdHJ1Y3RvcihtYXg6IG51bWJlciwgbGlzdE51bWJlcnM6IG51bWJlcltdKSB7XG4gICAgICAgIHRoaXMubWF4ID0gbWF4O1xuICAgICAgICB0aGlzLmxpc3ROdW1iZXJzID0gbGlzdE51bWJlcnM7XG4gICAgICAgIHRoaXMuc2l6ZSA9IDA7XG4gICAgICAgIHRoaXMuaGVhZCA9IG51bGw7XG4gICAgICAgIHRoaXMudGFpbCA9IG51bGw7XG4gICAgICAgIHRoaXMubGVuZ3RoID0gMDtcblxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbGlzdE51bWJlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmKHRoaXMuc2l6ZSA8IHRoaXMubWF4KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRJbkxpc3QobGlzdE51bWJlcnNbaV0sIHRoaXMuc2l6ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBBIGxpc3RhIGrDoSBlc3TDoSBjaGVpYS4gTyBuw7ptZXJvICR7bGlzdE51bWJlcnNbaV19IG7Do28gZm9pIGFkaWNpb25hZG8uYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gIFxuICAgIGFkZEluTGlzdChudW06IG51bWJlciwgcG9zOiBudW1iZXIpIHtcbiAgICAgICAgY29uc3QgbnVtYmVyID0gcGFyc2VJbnQoU3RyaW5nKG51bSkpO1xuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IHBhcnNlSW50KFN0cmluZyhwb3MpKSAtIDE7XG4gICAgICBcbiAgICAgICAgLy8gVmVyaWZpY2Egc2UgYSBwb3Npw6fDo28gw6kgdsOhbGlkYVxuICAgICAgICBpZiAocG9zaXRpb24gPj0gMCAmJiBwb3NpdGlvbiA8PSB0aGlzLmxpc3ROdW1iZXJzLmxlbmd0aCAmJiB0aGlzLmxpc3ROdW1iZXJzLmxlbmd0aCA8IHRoaXMubWF4KSB7XG4gICAgICAgICAgLy8gVmVyaWZpY2Egc2UgbyBuw7ptZXJvIGrDoSBleGlzdGUgbmEgbGlzdGFcbiAgICAgICAgICBpZiAoIXRoaXMubGlzdE51bWJlcnMuaW5jbHVkZXMobnVtYmVyKSkge1xuICAgICAgICAgICAgY29uc3QgbmV3Tm9kZTogTGlzdE5vZGUgPSB7XG4gICAgICAgICAgICAgIHZhbHVlOiBudW1iZXIsXG4gICAgICAgICAgICAgIG5leHQ6IG51bGwsXG4gICAgICAgICAgICB9O1xuICAgICAgXG4gICAgICAgICAgICBpZiAocG9zaXRpb24gPT09IDEpIHtcbiAgICAgICAgICAgICAgLy8gSW5zZXJlIG5vIGNvbWXDp28gZGEgbGlzdGFcbiAgICAgICAgICAgICAgbmV3Tm9kZS5uZXh0ID0gdGhpcy5oZWFkO1xuICAgICAgICAgICAgICB0aGlzLmhlYWQgPSBuZXdOb2RlO1xuICAgICAgICAgICAgICBpZiAoIXRoaXMudGFpbCkge1xuICAgICAgICAgICAgICAgIHRoaXMudGFpbCA9IG5ld05vZGU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAocG9zaXRpb24gPT09IHRoaXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIC8vIEluc2VyZSBubyBmaW5hbCBkYSBsaXN0YVxuICAgICAgICAgICAgICB0aGlzLnRhaWwhLm5leHQgPSBuZXdOb2RlO1xuICAgICAgICAgICAgICB0aGlzLnRhaWwgPSBuZXdOb2RlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy8gSW5zZXJlIG5vIG1laW8gZGEgbGlzdGFcbiAgICAgICAgICAgICAgbGV0IGN1cnJlbnQgPSB0aGlzLmhlYWQhO1xuICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvc2l0aW9uIC0gMTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnQubmV4dCE7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgbmV3Tm9kZS5uZXh0ID0gY3VycmVudC5uZXh0O1xuICAgICAgICAgICAgICBjdXJyZW50Lm5leHQgPSBuZXdOb2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBuZXdMaXN0ID0gWy4uLnRoaXMubGlzdE51bWJlcnMuc2xpY2UoMCwgcG9zKSwgbnVtYmVyLCAuLi50aGlzLmxpc3ROdW1iZXJzLnNsaWNlKHBvc2l0aW9uKV07XG4gICAgICAgICAgICB0aGlzLmxpc3ROdW1iZXJzID0gbmV3TGlzdFxuICAgICAgICAgICAgXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBPIG7Dum1lcm8gJHtudW1iZXJ9IGrDoSBleGlzdGUgbmEgbGlzdGEuYCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdQb3Npw6fDo28gaW52w6FsaWRhLicpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBcbiAgXG4gICAgcmVtb3ZlSW5MaXN0KG51bT86IG51bWJlciwgcG9zPzogbnVtYmVyKSB7XG4gICAgICBpZiAocG9zICE9PSB1bmRlZmluZWQgJiYgbnVtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0luZm9ybWUgYXBlbmFzIGEgcG9zacOnw6NvIG91IG8gbsO6bWVybyBhIHNlciByZW1vdmlkby4nKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICBcbiAgICAgIGlmIChwb3MgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zdCBpbmRleCA9IHBhcnNlSW50KFN0cmluZyhwb3MpKSAtIDE7XG4gICAgICAgIGlmIChpbmRleCA+PSAwICYmIGluZGV4IDwgdGhpcy5sZW5ndGgpIHtcbiAgICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgICAgIC8vIFJlbW92ZSBkbyBjb21lw6dvIGRhIGxpc3RhXG4gICAgICAgICAgICB0aGlzLmhlYWQgPSB0aGlzLmhlYWQhLm5leHQ7XG4gICAgICAgICAgICBpZiAodGhpcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgdGhpcy50YWlsID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKGluZGV4ID09PSB0aGlzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIC8vIFJlbW92ZSBkbyBmaW5hbCBkYSBsaXN0YVxuICAgICAgICAgICAgbGV0IGN1cnJlbnQgPSB0aGlzLmhlYWQhO1xuICAgICAgICAgICAgd2hpbGUgKGN1cnJlbnQubmV4dCAhPT0gdGhpcy50YWlsKSB7XG4gICAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHQhO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY3VycmVudC5uZXh0ID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMudGFpbCA9IGN1cnJlbnQ7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIFJlbW92ZSBkbyBtZWlvIGRhIGxpc3RhXG4gICAgICAgICAgICBsZXQgY3VycmVudCA9IHRoaXMuaGVhZCE7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGluZGV4IC0gMTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnQubmV4dCE7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgY3VycmVudC5uZXh0ID0gY3VycmVudC5uZXh0IS5uZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIHRoaXMubGVuZ3RoLS07XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdQb3Npw6fDo28gaW52w6FsaWRhLicpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChudW0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGNvbnN0IG51bWJlciA9IHBhcnNlSW50KFN0cmluZyhudW0pKTtcbiAgICAgICAgICBsZXQgY3VycmVudCA9IHRoaXMuaGVhZDtcbiAgICAgICAgICBsZXQgcHJldmlvdXM6IExpc3ROb2RlIHwgbnVsbCA9IG51bGw7XG4gICAgICAgIFxuICAgICAgICAgIHdoaWxlIChjdXJyZW50KSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudC52YWx1ZSA9PT0gbnVtYmVyKSB7XG4gICAgICAgICAgICAgIGlmICghcHJldmlvdXMpIHtcbiAgICAgICAgICAgICAgICAvLyBSZW1vdmUgZG8gY29tZcOnbyBkYSBsaXN0YVxuICAgICAgICAgICAgICAgIHRoaXMuaGVhZCA9IGN1cnJlbnQubmV4dDtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMudGFpbCA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnQubmV4dCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBkbyBmaW5hbCBkYSBsaXN0YVxuICAgICAgICAgICAgICAgIHByZXZpb3VzLm5leHQgPSBudWxsO1xuICAgICAgICAgICAgICAgIHRoaXMudGFpbCA9IHByZXZpb3VzO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBkbyBtZWlvIGRhIGxpc3RhXG4gICAgICAgICAgICAgICAgcHJldmlvdXMubmV4dCA9IGN1cnJlbnQubmV4dDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgICAgdGhpcy5sZW5ndGgtLTtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIHByZXZpb3VzID0gY3VycmVudDtcbiAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHQ7XG4gICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICBjb25zb2xlLmxvZyhgTyBuw7ptZXJvICR7bnVtYmVyfSBuw6NvIGV4aXN0ZSBuYSBsaXN0YS5gKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnSW5mb3JtZSBhIHBvc2nDp8OjbyBvdSBvIG7Dum1lcm8gYSBzZXIgcmVtb3ZpZG8uJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZWFyY2hJbkxpc3QobnVtPzogbnVtYmVyLCBwb3M/OiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHBvcyAhPT0gdW5kZWZpbmVkICYmIG51bSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnSW5mb3JtZSBhcGVuYXMgYSBwb3Npw6fDo28gb3UgbyBuw7ptZXJvIGEgc2VyIGJ1c2NhZG8uJyk7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIGlmIChwb3MgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGNvbnN0IGluZGV4ID0gcGFyc2VJbnQoU3RyaW5nKHBvcykpIC0gMTtcbiAgICAgICAgICBpZiAoaW5kZXggPj0gMCAmJiBpbmRleCA8IHRoaXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBsZXQgY3VycmVudCA9IHRoaXMuaGVhZCE7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGluZGV4OyBpKyspIHtcbiAgICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnQubmV4dCE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgTyBuw7ptZXJvIG5hIHBvc2nDp8OjbyAke3Bvc30gw6kgJHtjdXJyZW50LnZhbHVlfS5gKTtcbiAgICAgICAgICAgIHJldHVybiBjdXJyZW50LnZhbHVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnUG9zacOnw6NvIGludsOhbGlkYS4nKTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChudW0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGNvbnN0IG51bWJlciA9IHBhcnNlSW50KFN0cmluZyhudW0pKTtcbiAgICAgICAgICBsZXQgY3VycmVudCA9IHRoaXMuaGVhZDtcbiAgICAgICAgICBsZXQgaW5kZXggPSAwO1xuICAgICAgICAgIHdoaWxlIChjdXJyZW50KSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudC52YWx1ZSA9PT0gbnVtYmVyKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBPIG7Dum1lcm8gJHtudW1iZXJ9IGVzdMOhIG5hIHBvc2nDp8OjbyAke2luZGV4ICsgMX0uYCk7XG4gICAgICAgICAgICAgIHJldHVybiBpbmRleCArIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjdXJyZW50ID0gY3VycmVudC5uZXh0O1xuICAgICAgICAgICAgaW5kZXgrKztcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc29sZS5sb2coYE8gbsO6bWVybyAke251bWJlcn0gbsOjbyBlc3TDoSBuYSBsaXN0YS5gKTtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnSW5mb3JtZSBhIHBvc2nDp8OjbyBvdSBvIG7Dum1lcm8gYSBzZXIgYnVzY2Fkby4nKTtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG59Il0sIm5hbWVzIjpbIkxpc3RhU2ltcGxlc21lbnRlRW5jYWRlYWRhIiwiYWRkSW5MaXN0IiwibnVtIiwicG9zIiwibnVtYmVyIiwicGFyc2VJbnQiLCJTdHJpbmciLCJwb3NpdGlvbiIsImxpc3ROdW1iZXJzIiwibGVuZ3RoIiwibWF4IiwiaW5jbHVkZXMiLCJuZXdOb2RlIiwidmFsdWUiLCJuZXh0IiwiaGVhZCIsInRhaWwiLCJjdXJyZW50IiwiaSIsIm5ld0xpc3QiLCJzbGljZSIsImNvbnNvbGUiLCJsb2ciLCJyZW1vdmVJbkxpc3QiLCJ1bmRlZmluZWQiLCJpbmRleCIsInByZXZpb3VzIiwic2VhcmNoSW5MaXN0IiwiY29uc3RydWN0b3IiLCJzaXplIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/core/ListaSimplesmenteEncadeada.ts\n"));

/***/ })

});
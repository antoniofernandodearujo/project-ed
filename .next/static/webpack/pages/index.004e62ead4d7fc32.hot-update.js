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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ListaSimplesmenteEncadeada\": function() { return /* binding */ ListaSimplesmenteEncadeada; }\n/* harmony export */ });\nclass No {\n    constructor(valor){\n        this.valor = valor;\n        this.proximo = null;\n    }\n}\nclass ListaSimplesmenteEncadeada {\n    getCabeca() {\n        return this.cabeca;\n    }\n    getTamanho() {\n        return this.tamanho;\n    }\n    adicionar(valor, posicao) {\n        if (posicao <= 0 || posicao > this.tamanho + 1) {\n            throw new Error(\"Posi\\xe7\\xe3o inv\\xe1lida.\");\n        }\n        if (this.tamanho >= 8) {\n            throw new Error(\"A lista j\\xe1 atingiu o tamanho m\\xe1ximo de 8 elementos.\");\n        }\n        const novoNo = new No(valor);\n        if (posicao === 1) {\n            novoNo.proximo = this.cabeca;\n            this.cabeca = novoNo;\n        } else {\n            let anterior = null;\n            let atual = this.cabeca;\n            let indice = 1;\n            while(atual != null && indice < posicao){\n                anterior = atual;\n                atual = atual.proximo;\n                indice++;\n            }\n            novoNo.proximo = atual;\n            anterior.proximo = novoNo;\n        }\n        this.tamanho++;\n    }\n    /**\n   * Eu tive que criar 2 métodos para remoção e para a busca\n   * porque tava dando muito erro, se lembrar de alguma coisa\n   * ou fazer alguma validação.\n   */ removerPorPosicao(posicao) {\n        if (posicao <= 0 || posicao > this.tamanho) {\n            throw new Error(\"Posi\\xe7\\xe3o inv\\xe1lida.\");\n        }\n        if (posicao === 1) {\n            this.cabeca = this.cabeca.proximo;\n        } else {\n            let indice = 1;\n            let noAtual = this.cabeca;\n            let noAnterior = null;\n            while(indice < posicao){\n                noAnterior = noAtual;\n                noAtual = noAtual.proximo;\n                indice++;\n            }\n            noAnterior.proximo = noAtual.proximo;\n        }\n        this.tamanho--;\n    }\n    removerPorValor(valor) {\n        if (this.tamanho === 0) {\n            throw new Error(\"Lista vazia.\");\n        }\n        let noAtual = this.cabeca;\n        let noAnterior = null;\n        while(noAtual !== null){\n            if (noAtual.valor === valor) {\n                if (noAnterior === null) {\n                    this.cabeca = noAtual.proximo;\n                } else {\n                    noAnterior.proximo = noAtual.proximo;\n                }\n                this.tamanho--;\n                return;\n            }\n            noAnterior = noAtual;\n            noAtual = noAtual.proximo;\n        }\n        if (this.tamanho < 8 && noAtual === null) {\n            throw new Error(\"Valor n\\xe3o encontrado na lista.\");\n        }\n    }\n    buscarPorPosicao(posicao) {\n        if (posicao <= 0 || posicao > this.tamanho) {\n            return null;\n        }\n        let noAtual = this.cabeca;\n        let indice = 1;\n        while(indice < posicao){\n            noAtual = noAtual.proximo;\n            indice++;\n        }\n        return noAtual;\n    }\n    buscarPorValor(valor) {\n        let noAtual = this.cabeca;\n        while(noAtual !== null){\n            if (noAtual.valor === valor) {\n                return noAtual;\n            }\n            noAtual = noAtual.proximo;\n        }\n        return null;\n    }\n    toArray() {\n        const elementos = [];\n        let atual = this.cabeca;\n        while(atual != null){\n            elementos.push(atual.valor);\n            atual = atual.proximo;\n        }\n        return elementos;\n    }\n    constructor(){\n        this.cabeca = null;\n        this.tamanho = 0;\n    }\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29yZS9MaXN0YVNpbXBsZXNtZW50ZUVuY2FkZWFkYS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTUE7SUFJSkMsWUFBWUMsS0FBYSxDQUFFO1FBQ3pCLElBQUksQ0FBQ0EsS0FBSyxHQUFHQTtRQUNiLElBQUksQ0FBQ0MsT0FBTyxHQUFHLElBQUk7SUFDckI7QUFDRjtBQUVPLE1BQU1DO0lBU0pDLFlBQXVCO1FBQzVCLE9BQU8sSUFBSSxDQUFDQyxNQUFNO0lBQ3BCO0lBRU9DLGFBQXFCO1FBQzFCLE9BQU8sSUFBSSxDQUFDQyxPQUFPO0lBQ3JCO0lBRU9DLFVBQVVQLEtBQWEsRUFBRVEsT0FBZSxFQUFRO1FBQ3JELElBQUlBLFdBQVcsS0FBS0EsVUFBVSxJQUFJLENBQUNGLE9BQU8sR0FBRyxHQUFHO1lBQzlDLE1BQU0sSUFBSUcsTUFBTSw4QkFBcUI7UUFDdkMsQ0FBQztRQUVELElBQUksSUFBSSxDQUFDSCxPQUFPLElBQUksR0FBRztZQUNyQixNQUFNLElBQUlHLE1BQU0sNkRBQXVEO1FBQ3pFLENBQUM7UUFFRCxNQUFNQyxTQUFTLElBQUlaLEdBQUdFO1FBRXRCLElBQUlRLFlBQVksR0FBRztZQUNqQkUsT0FBT1QsT0FBTyxHQUFHLElBQUksQ0FBQ0csTUFBTTtZQUM1QixJQUFJLENBQUNBLE1BQU0sR0FBR007UUFDaEIsT0FBTztZQUNMLElBQUlDLFdBQVcsSUFBSTtZQUNuQixJQUFJQyxRQUFRLElBQUksQ0FBQ1IsTUFBTTtZQUN2QixJQUFJUyxTQUFTO1lBRWIsTUFBT0QsU0FBUyxJQUFJLElBQUlDLFNBQVNMLFFBQVM7Z0JBQ3hDRyxXQUFXQztnQkFDWEEsUUFBUUEsTUFBTVgsT0FBTztnQkFDckJZO1lBQ0Y7WUFFQUgsT0FBT1QsT0FBTyxHQUFHVztZQUNqQkQsU0FBVVYsT0FBTyxHQUFHUztRQUN0QixDQUFDO1FBRUQsSUFBSSxDQUFDSixPQUFPO0lBQ2Q7SUFHQTs7OztHQUlDLEdBRUMsa0JBQXlCRSxPQUFlLEVBQVE7UUFDOUMsSUFBSUEsV0FBVyxLQUFLQSxVQUFVLElBQUksQ0FBQ0YsT0FBTyxFQUFFO1lBQzFDLE1BQU0sSUFBSUcsTUFBTSw4QkFBcUI7UUFDdkMsQ0FBQztRQUVELElBQUlELFlBQVksR0FBRztZQUNqQixJQUFJLENBQUNKLE1BQU0sR0FBRyxJQUFJLENBQUNBLE1BQU0sQ0FBRUgsT0FBTztRQUNwQyxPQUFPO1lBQ0wsSUFBSVksU0FBUztZQUNiLElBQUlFLFVBQVUsSUFBSSxDQUFDWCxNQUFNO1lBQ3pCLElBQUlZLGFBQWEsSUFBSTtZQUVyQixNQUFPSCxTQUFTTCxRQUFTO2dCQUN2QlEsYUFBYUQ7Z0JBQ2JBLFVBQVVBLFFBQVFkLE9BQU87Z0JBQ3pCWTtZQUNGO1lBRUFHLFdBQVlmLE9BQU8sR0FBR2MsUUFBUWQsT0FBTztRQUN2QyxDQUFDO1FBQ0QsSUFBSSxDQUFDSyxPQUFPO0lBQ2Q7SUFHS1csZ0JBQWdCakIsS0FBYSxFQUFRO1FBQzFDLElBQUksSUFBSSxDQUFDTSxPQUFPLEtBQUssR0FBRztZQUN0QixNQUFNLElBQUlHLE1BQU0sZ0JBQWdCO1FBQ2xDLENBQUM7UUFFRCxJQUFJTSxVQUFVLElBQUksQ0FBQ1gsTUFBTTtRQUN6QixJQUFJWSxhQUFhLElBQUk7UUFFckIsTUFBT0QsWUFBWSxJQUFJLENBQUU7WUFDdkIsSUFBSUEsUUFBUWYsS0FBSyxLQUFLQSxPQUFPO2dCQUMzQixJQUFJZ0IsZUFBZSxJQUFJLEVBQUU7b0JBQ3ZCLElBQUksQ0FBQ1osTUFBTSxHQUFHVyxRQUFRZCxPQUFPO2dCQUMvQixPQUFPO29CQUNMZSxXQUFXZixPQUFPLEdBQUdjLFFBQVFkLE9BQU87Z0JBQ3RDLENBQUM7Z0JBRUQsSUFBSSxDQUFDSyxPQUFPO2dCQUNaO1lBQ0YsQ0FBQztZQUVEVSxhQUFhRDtZQUNiQSxVQUFVQSxRQUFRZCxPQUFPO1FBQzNCO1FBQ0UsSUFBSSxJQUFJLENBQUNLLE9BQU8sR0FBRyxLQUFLUyxZQUFZLElBQUksRUFBRTtZQUN4QyxNQUFNLElBQUlOLE1BQU0scUNBQWtDO1FBQ3BELENBQUM7SUFDTDtJQUdPUyxpQkFBaUJWLE9BQWUsRUFBYTtRQUNsRCxJQUFJQSxXQUFXLEtBQUtBLFVBQVUsSUFBSSxDQUFDRixPQUFPLEVBQUU7WUFDMUMsT0FBTyxJQUFJO1FBQ2IsQ0FBQztRQUVELElBQUlTLFVBQVUsSUFBSSxDQUFDWCxNQUFNO1FBQ3pCLElBQUlTLFNBQVM7UUFFYixNQUFPQSxTQUFTTCxRQUFTO1lBQ3ZCTyxVQUFVQSxRQUFTZCxPQUFPO1lBQzFCWTtRQUNGO1FBRUEsT0FBT0U7SUFDVDtJQUVPSSxlQUFlbkIsS0FBYSxFQUFhO1FBQzlDLElBQUllLFVBQVUsSUFBSSxDQUFDWCxNQUFNO1FBRXpCLE1BQU9XLFlBQVksSUFBSSxDQUFFO1lBQ3ZCLElBQUlBLFFBQVFmLEtBQUssS0FBS0EsT0FBTztnQkFDM0IsT0FBT2U7WUFDVCxDQUFDO1lBRURBLFVBQVVBLFFBQVFkLE9BQU87UUFDM0I7UUFFQSxPQUFPLElBQUk7SUFDYjtJQUVBbUIsVUFBaUI7UUFDZixNQUFNQyxZQUFtQixFQUFFO1FBQzNCLElBQUlULFFBQVEsSUFBSSxDQUFDUixNQUFNO1FBRXZCLE1BQU9RLFNBQVMsSUFBSSxDQUFFO1lBQ3BCUyxVQUFVQyxJQUFJLENBQUNWLE1BQU1aLEtBQUs7WUFDMUJZLFFBQVFBLE1BQU1YLE9BQU87UUFDdkI7UUFFQSxPQUFPb0I7SUFDVDtJQWpKQXRCLGFBQWM7UUFDWixJQUFJLENBQUNLLE1BQU0sR0FBRyxJQUFJO1FBQ2xCLElBQUksQ0FBQ0UsT0FBTyxHQUFHO0lBQ2pCO0FBK0lGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvcmUvTGlzdGFTaW1wbGVzbWVudGVFbmNhZGVhZGEudHM/ZWU2YiJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBObyB7XG4gIHB1YmxpYyB2YWxvcjogbnVtYmVyO1xuICBwdWJsaWMgcHJveGltbzogTm8gfCBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKHZhbG9yOiBudW1iZXIpIHtcbiAgICB0aGlzLnZhbG9yID0gdmFsb3I7XG4gICAgdGhpcy5wcm94aW1vID0gbnVsbDtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTGlzdGFTaW1wbGVzbWVudGVFbmNhZGVhZGEge1xuICBwcml2YXRlIGNhYmVjYTogTm8gfCBudWxsO1xuICBwcml2YXRlIHRhbWFuaG86IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmNhYmVjYSA9IG51bGw7XG4gICAgdGhpcy50YW1hbmhvID0gMDtcbiAgfVxuXG4gIHB1YmxpYyBnZXRDYWJlY2EoKTogTm8gfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5jYWJlY2E7XG4gIH1cblxuICBwdWJsaWMgZ2V0VGFtYW5obygpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnRhbWFuaG87XG4gIH1cblxuICBwdWJsaWMgYWRpY2lvbmFyKHZhbG9yOiBudW1iZXIsIHBvc2ljYW86IG51bWJlcik6IHZvaWQge1xuICAgIGlmIChwb3NpY2FvIDw9IDAgfHwgcG9zaWNhbyA+IHRoaXMudGFtYW5obyArIDEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUG9zacOnw6NvIGludsOhbGlkYS4nKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy50YW1hbmhvID49IDgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQSBsaXN0YSBqw6EgYXRpbmdpdSBvIHRhbWFuaG8gbcOheGltbyBkZSA4IGVsZW1lbnRvcy4nKTtcbiAgICB9XG4gIFxuICAgIGNvbnN0IG5vdm9ObyA9IG5ldyBObyh2YWxvcik7XG4gIFxuICAgIGlmIChwb3NpY2FvID09PSAxKSB7XG4gICAgICBub3ZvTm8ucHJveGltbyA9IHRoaXMuY2FiZWNhO1xuICAgICAgdGhpcy5jYWJlY2EgPSBub3ZvTm87XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBhbnRlcmlvciA9IG51bGw7XG4gICAgICBsZXQgYXR1YWwgPSB0aGlzLmNhYmVjYTtcbiAgICAgIGxldCBpbmRpY2UgPSAxO1xuICBcbiAgICAgIHdoaWxlIChhdHVhbCAhPSBudWxsICYmIGluZGljZSA8IHBvc2ljYW8pIHtcbiAgICAgICAgYW50ZXJpb3IgPSBhdHVhbDtcbiAgICAgICAgYXR1YWwgPSBhdHVhbC5wcm94aW1vO1xuICAgICAgICBpbmRpY2UrKztcbiAgICAgIH1cbiAgXG4gICAgICBub3ZvTm8ucHJveGltbyA9IGF0dWFsO1xuICAgICAgYW50ZXJpb3IhLnByb3hpbW8gPSBub3ZvTm87XG4gICAgfVxuICBcbiAgICB0aGlzLnRhbWFuaG8rKztcbiAgfVxuICBcblxuICAvKipcbiAgICogRXUgdGl2ZSBxdWUgY3JpYXIgMiBtw6l0b2RvcyBwYXJhIHJlbW/Dp8OjbyBlIHBhcmEgYSBidXNjYVxuICAgKiBwb3JxdWUgdGF2YSBkYW5kbyBtdWl0byBlcnJvLCBzZSBsZW1icmFyIGRlIGFsZ3VtYSBjb2lzYVxuICAgKiBvdSBmYXplciBhbGd1bWEgdmFsaWRhw6fDo28uXG4gICAqL1xuXG4gICAgcHVibGljIHJlbW92ZXJQb3JQb3NpY2FvKHBvc2ljYW86IG51bWJlcik6IHZvaWQge1xuICAgICAgaWYgKHBvc2ljYW8gPD0gMCB8fCBwb3NpY2FvID4gdGhpcy50YW1hbmhvKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignUG9zacOnw6NvIGludsOhbGlkYS4nKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHBvc2ljYW8gPT09IDEpIHtcbiAgICAgICAgdGhpcy5jYWJlY2EgPSB0aGlzLmNhYmVjYSEucHJveGltbztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBpbmRpY2UgPSAxO1xuICAgICAgICBsZXQgbm9BdHVhbCA9IHRoaXMuY2FiZWNhITtcbiAgICAgICAgbGV0IG5vQW50ZXJpb3IgPSBudWxsO1xuXG4gICAgICAgIHdoaWxlIChpbmRpY2UgPCBwb3NpY2FvKSB7XG4gICAgICAgICAgbm9BbnRlcmlvciA9IG5vQXR1YWw7XG4gICAgICAgICAgbm9BdHVhbCA9IG5vQXR1YWwucHJveGltbyE7XG4gICAgICAgICAgaW5kaWNlKys7XG4gICAgICAgIH1cblxuICAgICAgICBub0FudGVyaW9yIS5wcm94aW1vID0gbm9BdHVhbC5wcm94aW1vO1xuICAgICAgfVxuICAgICAgdGhpcy50YW1hbmhvLS07XG4gICAgfVxuXG4gIFxuICBwdWJsaWMgcmVtb3ZlclBvclZhbG9yKHZhbG9yOiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAodGhpcy50YW1hbmhvID09PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0xpc3RhIHZhemlhLicpO1xuICAgIH1cbiAgXG4gICAgbGV0IG5vQXR1YWwgPSB0aGlzLmNhYmVjYTtcbiAgICBsZXQgbm9BbnRlcmlvciA9IG51bGw7XG4gIFxuICAgIHdoaWxlIChub0F0dWFsICE9PSBudWxsKSB7XG4gICAgICBpZiAobm9BdHVhbC52YWxvciA9PT0gdmFsb3IpIHtcbiAgICAgICAgaWYgKG5vQW50ZXJpb3IgPT09IG51bGwpIHtcbiAgICAgICAgICB0aGlzLmNhYmVjYSA9IG5vQXR1YWwucHJveGltbztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBub0FudGVyaW9yLnByb3hpbW8gPSBub0F0dWFsLnByb3hpbW87XG4gICAgICAgIH1cbiAgXG4gICAgICAgIHRoaXMudGFtYW5oby0tO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gIFxuICAgICAgbm9BbnRlcmlvciA9IG5vQXR1YWw7XG4gICAgICBub0F0dWFsID0gbm9BdHVhbC5wcm94aW1vO1xuICAgIH1cbiAgICAgIGlmICh0aGlzLnRhbWFuaG8gPCA4ICYmIG5vQXR1YWwgPT09IG51bGwpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdWYWxvciBuw6NvIGVuY29udHJhZG8gbmEgbGlzdGEuJyk7XG4gICAgICB9XG4gIH1cblxuXG4gIHB1YmxpYyBidXNjYXJQb3JQb3NpY2FvKHBvc2ljYW86IG51bWJlcik6IE5vIHwgbnVsbCB7XG4gICAgaWYgKHBvc2ljYW8gPD0gMCB8fCBwb3NpY2FvID4gdGhpcy50YW1hbmhvKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIFxuICAgIGxldCBub0F0dWFsID0gdGhpcy5jYWJlY2E7XG4gICAgbGV0IGluZGljZSA9IDE7XG4gIFxuICAgIHdoaWxlIChpbmRpY2UgPCBwb3NpY2FvKSB7XG4gICAgICBub0F0dWFsID0gbm9BdHVhbCEucHJveGltbztcbiAgICAgIGluZGljZSsrO1xuICAgIH1cbiAgXG4gICAgcmV0dXJuIG5vQXR1YWw7XG4gIH1cblxuICBwdWJsaWMgYnVzY2FyUG9yVmFsb3IodmFsb3I6IG51bWJlcik6IE5vIHwgbnVsbCB7XG4gICAgbGV0IG5vQXR1YWwgPSB0aGlzLmNhYmVjYTtcbiAgXG4gICAgd2hpbGUgKG5vQXR1YWwgIT09IG51bGwpIHtcbiAgICAgIGlmIChub0F0dWFsLnZhbG9yID09PSB2YWxvcikge1xuICAgICAgICByZXR1cm4gbm9BdHVhbDtcbiAgICAgIH1cblxuICAgICAgbm9BdHVhbCA9IG5vQXR1YWwucHJveGltbztcbiAgICB9XG4gIFxuICAgIHJldHVybiBudWxsO1xuICB9XG4gICAgXG4gIHRvQXJyYXkoKTogYW55W10ge1xuICAgIGNvbnN0IGVsZW1lbnRvczogYW55W10gPSBbXTtcbiAgICBsZXQgYXR1YWwgPSB0aGlzLmNhYmVjYTtcblxuICAgIHdoaWxlIChhdHVhbCAhPSBudWxsKSB7XG4gICAgICBlbGVtZW50b3MucHVzaChhdHVhbC52YWxvcik7XG4gICAgICBhdHVhbCA9IGF0dWFsLnByb3hpbW87XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnRvcztcbiAgfVxufSJdLCJuYW1lcyI6WyJObyIsImNvbnN0cnVjdG9yIiwidmFsb3IiLCJwcm94aW1vIiwiTGlzdGFTaW1wbGVzbWVudGVFbmNhZGVhZGEiLCJnZXRDYWJlY2EiLCJjYWJlY2EiLCJnZXRUYW1hbmhvIiwidGFtYW5obyIsImFkaWNpb25hciIsInBvc2ljYW8iLCJFcnJvciIsIm5vdm9ObyIsImFudGVyaW9yIiwiYXR1YWwiLCJpbmRpY2UiLCJyZW1vdmVyUG9yUG9zaWNhbyIsIm5vQXR1YWwiLCJub0FudGVyaW9yIiwicmVtb3ZlclBvclZhbG9yIiwiYnVzY2FyUG9yUG9zaWNhbyIsImJ1c2NhclBvclZhbG9yIiwidG9BcnJheSIsImVsZW1lbnRvcyIsInB1c2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/core/ListaSimplesmenteEncadeada.ts\n"));

/***/ })

});
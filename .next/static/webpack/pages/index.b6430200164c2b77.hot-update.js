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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ListaSimplesmenteEncadeada\": function() { return /* binding */ ListaSimplesmenteEncadeada; }\n/* harmony export */ });\nclass No {\n    constructor(valor){\n        this.valor = valor;\n        this.proximo = null;\n    }\n}\nclass ListaSimplesmenteEncadeada {\n    getCabeca() {\n        return this.cabeca;\n    }\n    getTamanho() {\n        return this.tamanho;\n    }\n    adicionar(posicao, valor) {\n        if (posicao <= 0 || posicao > this.tamanho + 1) {\n            throw new Error(\"Posi\\xe7\\xe3o inv\\xe1lida.\");\n        }\n        // Subtrai 1 da posição caso ela seja maior do que 0\n        const posicaoAtualizada = posicao > 0 ? posicao - 1 : posicao;\n        const novoNo = new No(valor);\n        if (posicaoAtualizada === 0) {\n            novoNo.proximo = this.cabeca;\n            this.cabeca = novoNo;\n        } else {\n            let anterior = null;\n            let atual = this.cabeca;\n            let indice = 0;\n            while(atual != null && indice < posicaoAtualizada){\n                anterior = atual;\n                atual = atual.proximo;\n                indice++;\n            }\n            if (atual == null) {\n                anterior.proximo = novoNo;\n            } else {\n                novoNo.proximo = atual;\n                anterior.proximo = novoNo;\n            }\n        }\n        this.tamanho++;\n    }\n    /**\n   * Eu tive que criar 2 métodos para remoção e para a busca\n   * porque tava dando muito erro, se lembrar de alguma coisa\n   * ou fazer alguma validação.\n   */ removerPorPosicao(posicao) {\n        if (this.tamanho === 0) {\n            throw new Error(\"Lista vazia.\");\n        }\n        if (posicao <= 0 || posicao > this.tamanho) {\n            throw new Error(\"Posi\\xe7\\xe3o inv\\xe1lida.\");\n        }\n        if (posicao === 1) {\n            this.cabeca = this.cabeca.proximo;\n        } else {\n            let indice = 1;\n            let noAtual = this.cabeca;\n            let noAnterior = null;\n            while(indice < posicao){\n                noAnterior = noAtual;\n                noAtual = noAtual.proximo;\n                indice++;\n            }\n            noAnterior.proximo = noAtual.proximo;\n        }\n        this.tamanho--;\n    }\n    removerPorValor(valor) {\n        if (this.tamanho === 0) {\n            throw new Error(\"Lista vazia.\");\n        }\n        let noAtual = this.cabeca;\n        let noAnterior = null;\n        while(noAtual !== null){\n            if (noAtual.valor === valor) {\n                if (noAnterior === null) {\n                    this.cabeca = noAtual.proximo;\n                } else {\n                    noAnterior.proximo = noAtual.proximo;\n                }\n                this.tamanho--;\n                return;\n            }\n            noAnterior = noAtual;\n            noAtual = noAtual.proximo;\n        }\n        throw new Error(\"Valor n\\xe3o encontrado na lista.\");\n    }\n    buscarPorPosicao(posicao) {\n        if (posicao <= 0 || posicao > this.tamanho) {\n            return null;\n        }\n        let noAtual = this.cabeca;\n        let indice = 1;\n        while(indice < posicao){\n            noAtual = noAtual.proximo;\n            indice++;\n        }\n        return noAtual;\n    }\n    buscarPorValor(valor) {\n        let noAtual = this.cabeca;\n        while(noAtual !== null){\n            if (noAtual.valor === valor) {\n                return noAtual;\n            }\n            noAtual = noAtual.proximo;\n        }\n        return null;\n    }\n    toArray() {\n        const elementos = [];\n        let atual = this.cabeca;\n        while(atual != null){\n            elementos.push(atual.valor);\n            atual = atual.proximo;\n        }\n        return elementos;\n    }\n    constructor(){\n        this.cabeca = null;\n        this.tamanho = 0;\n    }\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29yZS9MaXN0YVNpbXBsZXNtZW50ZUVuY2FkZWFkYS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTUE7SUFJSkMsWUFBWUMsS0FBYSxDQUFFO1FBQ3pCLElBQUksQ0FBQ0EsS0FBSyxHQUFHQTtRQUNiLElBQUksQ0FBQ0MsT0FBTyxHQUFHLElBQUk7SUFDckI7QUFDRjtBQUVPLE1BQU1DO0lBU0pDLFlBQXVCO1FBQzVCLE9BQU8sSUFBSSxDQUFDQyxNQUFNO0lBQ3BCO0lBRU9DLGFBQXFCO1FBQzFCLE9BQU8sSUFBSSxDQUFDQyxPQUFPO0lBQ3JCO0lBRU9DLFVBQVVDLE9BQWUsRUFBRVIsS0FBYSxFQUFRO1FBRXJELElBQUlRLFdBQVcsS0FBS0EsVUFBVSxJQUFJLENBQUNGLE9BQU8sR0FBRyxHQUFHO1lBQzlDLE1BQU0sSUFBSUcsTUFBTSw4QkFBcUI7UUFDdkMsQ0FBQztRQUVELG9EQUFvRDtRQUNwRCxNQUFNQyxvQkFBb0JGLFVBQVUsSUFBSUEsVUFBVSxJQUFJQSxPQUFPO1FBRTdELE1BQU1HLFNBQVMsSUFBSWIsR0FBR0U7UUFDdEIsSUFBSVUsc0JBQXNCLEdBQUc7WUFDM0JDLE9BQU9WLE9BQU8sR0FBRyxJQUFJLENBQUNHLE1BQU07WUFDNUIsSUFBSSxDQUFDQSxNQUFNLEdBQUdPO1FBQ2hCLE9BQU87WUFDTCxJQUFJQyxXQUFXLElBQUk7WUFDbkIsSUFBSUMsUUFBbUIsSUFBSSxDQUFDVCxNQUFNO1lBQ2xDLElBQUlVLFNBQVM7WUFDYixNQUFPRCxTQUFTLElBQUksSUFBSUMsU0FBU0osa0JBQW1CO2dCQUNsREUsV0FBV0M7Z0JBQ1hBLFFBQVFBLE1BQU1aLE9BQU87Z0JBQ3JCYTtZQUNGO1lBRUEsSUFBSUQsU0FBUyxJQUFJLEVBQUU7Z0JBQ2pCRCxTQUFVWCxPQUFPLEdBQUdVO1lBQ3RCLE9BQU87Z0JBQ0xBLE9BQU9WLE9BQU8sR0FBR1k7Z0JBQ2pCRCxTQUFVWCxPQUFPLEdBQUdVO1lBQ3RCLENBQUM7UUFDSCxDQUFDO1FBRUQsSUFBSSxDQUFDTCxPQUFPO0lBQ2Q7SUFFQTs7OztHQUlDLEdBRUQsa0JBQXlCRSxPQUFlLEVBQVE7UUFDOUMsSUFBSSxJQUFJLENBQUNGLE9BQU8sS0FBSyxHQUFHO1lBQ3RCLE1BQU0sSUFBSUcsTUFBTSxnQkFBZ0I7UUFDbEMsQ0FBQztRQUVELElBQUlELFdBQVcsS0FBS0EsVUFBVSxJQUFJLENBQUNGLE9BQU8sRUFBRTtZQUMxQyxNQUFNLElBQUlHLE1BQU0sOEJBQXFCO1FBQ3ZDLENBQUM7UUFFRCxJQUFJRCxZQUFZLEdBQUc7WUFDakIsSUFBSSxDQUFDSixNQUFNLEdBQUcsSUFBSSxDQUFDQSxNQUFNLENBQUVILE9BQU87UUFDcEMsT0FBTztZQUNMLElBQUlhLFNBQVM7WUFDYixJQUFJRSxVQUFVLElBQUksQ0FBQ1osTUFBTTtZQUN6QixJQUFJYSxhQUFhLElBQUk7WUFFckIsTUFBT0gsU0FBU04sUUFBUztnQkFDdkJTLGFBQWFEO2dCQUNiQSxVQUFVQSxRQUFRZixPQUFPO2dCQUN6QmE7WUFDRjtZQUVBRyxXQUFZaEIsT0FBTyxHQUFHZSxRQUFRZixPQUFPO1FBQ3ZDLENBQUM7UUFFRCxJQUFJLENBQUNLLE9BQU87SUFDZDtJQUVPWSxnQkFBZ0JsQixLQUFhLEVBQVE7UUFDMUMsSUFBSSxJQUFJLENBQUNNLE9BQU8sS0FBSyxHQUFHO1lBQ3RCLE1BQU0sSUFBSUcsTUFBTSxnQkFBZ0I7UUFDbEMsQ0FBQztRQUVELElBQUlPLFVBQVUsSUFBSSxDQUFDWixNQUFNO1FBQ3pCLElBQUlhLGFBQWEsSUFBSTtRQUVyQixNQUFPRCxZQUFZLElBQUksQ0FBRTtZQUN2QixJQUFJQSxRQUFRaEIsS0FBSyxLQUFLQSxPQUFPO2dCQUMzQixJQUFJaUIsZUFBZSxJQUFJLEVBQUU7b0JBQ3ZCLElBQUksQ0FBQ2IsTUFBTSxHQUFHWSxRQUFRZixPQUFPO2dCQUMvQixPQUFPO29CQUNMZ0IsV0FBV2hCLE9BQU8sR0FBR2UsUUFBUWYsT0FBTztnQkFDdEMsQ0FBQztnQkFFRCxJQUFJLENBQUNLLE9BQU87Z0JBQ1o7WUFDRixDQUFDO1lBRURXLGFBQWFEO1lBQ2JBLFVBQVVBLFFBQVFmLE9BQU87UUFDM0I7UUFFQSxNQUFNLElBQUlRLE1BQU0scUNBQWtDO0lBQ3BEO0lBR09VLGlCQUFpQlgsT0FBZSxFQUFhO1FBQ2xELElBQUlBLFdBQVcsS0FBS0EsVUFBVSxJQUFJLENBQUNGLE9BQU8sRUFBRTtZQUMxQyxPQUFPLElBQUk7UUFDYixDQUFDO1FBRUQsSUFBSVUsVUFBVSxJQUFJLENBQUNaLE1BQU07UUFDekIsSUFBSVUsU0FBUztRQUViLE1BQU9BLFNBQVNOLFFBQVM7WUFDdkJRLFVBQVVBLFFBQVNmLE9BQU87WUFDMUJhO1FBQ0Y7UUFFQSxPQUFPRTtJQUNUO0lBRU9JLGVBQWVwQixLQUFhLEVBQWE7UUFDOUMsSUFBSWdCLFVBQVUsSUFBSSxDQUFDWixNQUFNO1FBRXpCLE1BQU9ZLFlBQVksSUFBSSxDQUFFO1lBQ3ZCLElBQUlBLFFBQVFoQixLQUFLLEtBQUtBLE9BQU87Z0JBQzNCLE9BQU9nQjtZQUNULENBQUM7WUFFREEsVUFBVUEsUUFBUWYsT0FBTztRQUMzQjtRQUVBLE9BQU8sSUFBSTtJQUNiO0lBRUFvQixVQUFpQjtRQUNmLE1BQU1DLFlBQW1CLEVBQUU7UUFDM0IsSUFBSVQsUUFBUSxJQUFJLENBQUNULE1BQU07UUFFdkIsTUFBT1MsU0FBUyxJQUFJLENBQUU7WUFDcEJTLFVBQVVDLElBQUksQ0FBQ1YsTUFBTWIsS0FBSztZQUMxQmEsUUFBUUEsTUFBTVosT0FBTztRQUN2QjtRQUVBLE9BQU9xQjtJQUNUO0lBckpBdkIsYUFBYztRQUNaLElBQUksQ0FBQ0ssTUFBTSxHQUFHLElBQUk7UUFDbEIsSUFBSSxDQUFDRSxPQUFPLEdBQUc7SUFDakI7QUFtSkYsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29yZS9MaXN0YVNpbXBsZXNtZW50ZUVuY2FkZWFkYS50cz9lZTZiIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIE5vIHtcbiAgcHVibGljIHZhbG9yOiBudW1iZXI7XG4gIHB1YmxpYyBwcm94aW1vOiBObyB8IG51bGw7XG5cbiAgY29uc3RydWN0b3IodmFsb3I6IG51bWJlcikge1xuICAgIHRoaXMudmFsb3IgPSB2YWxvcjtcbiAgICB0aGlzLnByb3hpbW8gPSBudWxsO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMaXN0YVNpbXBsZXNtZW50ZUVuY2FkZWFkYSB7XG4gIHByaXZhdGUgY2FiZWNhOiBObyB8IG51bGw7XG4gIHByaXZhdGUgdGFtYW5obzogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY2FiZWNhID0gbnVsbDtcbiAgICB0aGlzLnRhbWFuaG8gPSAwO1xuICB9XG5cbiAgcHVibGljIGdldENhYmVjYSgpOiBObyB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLmNhYmVjYTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRUYW1hbmhvKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMudGFtYW5obztcbiAgfVxuXG4gIHB1YmxpYyBhZGljaW9uYXIocG9zaWNhbzogbnVtYmVyLCB2YWxvcjogbnVtYmVyKTogdm9pZCB7XG5cbiAgICBpZiAocG9zaWNhbyA8PSAwIHx8IHBvc2ljYW8gPiB0aGlzLnRhbWFuaG8gKyAxKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Bvc2nDp8OjbyBpbnbDoWxpZGEuJyk7XG4gICAgfVxuICBcbiAgICAvLyBTdWJ0cmFpIDEgZGEgcG9zacOnw6NvIGNhc28gZWxhIHNlamEgbWFpb3IgZG8gcXVlIDBcbiAgICBjb25zdCBwb3NpY2FvQXR1YWxpemFkYSA9IHBvc2ljYW8gPiAwID8gcG9zaWNhbyAtIDEgOiBwb3NpY2FvO1xuICBcbiAgICBjb25zdCBub3ZvTm8gPSBuZXcgTm8odmFsb3IpO1xuICAgIGlmIChwb3NpY2FvQXR1YWxpemFkYSA9PT0gMCkge1xuICAgICAgbm92b05vLnByb3hpbW8gPSB0aGlzLmNhYmVjYTtcbiAgICAgIHRoaXMuY2FiZWNhID0gbm92b05vO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgYW50ZXJpb3IgPSBudWxsO1xuICAgICAgbGV0IGF0dWFsOiBObyB8IG51bGwgPSB0aGlzLmNhYmVjYTtcbiAgICAgIGxldCBpbmRpY2UgPSAwOyBcbiAgICAgIHdoaWxlIChhdHVhbCAhPSBudWxsICYmIGluZGljZSA8IHBvc2ljYW9BdHVhbGl6YWRhKSB7XG4gICAgICAgIGFudGVyaW9yID0gYXR1YWw7XG4gICAgICAgIGF0dWFsID0gYXR1YWwucHJveGltbztcbiAgICAgICAgaW5kaWNlKys7XG4gICAgICB9XG4gICAgXG4gICAgICBpZiAoYXR1YWwgPT0gbnVsbCkge1xuICAgICAgICBhbnRlcmlvciEucHJveGltbyA9IG5vdm9ObztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vdm9Oby5wcm94aW1vID0gYXR1YWw7XG4gICAgICAgIGFudGVyaW9yIS5wcm94aW1vID0gbm92b05vO1xuICAgICAgfVxuICAgIH1cbiAgXG4gICAgdGhpcy50YW1hbmhvKys7XG4gIH1cblxuICAvKipcbiAgICogRXUgdGl2ZSBxdWUgY3JpYXIgMiBtw6l0b2RvcyBwYXJhIHJlbW/Dp8OjbyBlIHBhcmEgYSBidXNjYVxuICAgKiBwb3JxdWUgdGF2YSBkYW5kbyBtdWl0byBlcnJvLCBzZSBsZW1icmFyIGRlIGFsZ3VtYSBjb2lzYVxuICAgKiBvdSBmYXplciBhbGd1bWEgdmFsaWRhw6fDo28uXG4gICAqL1xuXG4gIHB1YmxpYyByZW1vdmVyUG9yUG9zaWNhbyhwb3NpY2FvOiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAodGhpcy50YW1hbmhvID09PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0xpc3RhIHZhemlhLicpO1xuICAgIH1cbiAgXG4gICAgaWYgKHBvc2ljYW8gPD0gMCB8fCBwb3NpY2FvID4gdGhpcy50YW1hbmhvKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Bvc2nDp8OjbyBpbnbDoWxpZGEuJyk7XG4gICAgfVxuICBcbiAgICBpZiAocG9zaWNhbyA9PT0gMSkge1xuICAgICAgdGhpcy5jYWJlY2EgPSB0aGlzLmNhYmVjYSEucHJveGltbztcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGluZGljZSA9IDE7XG4gICAgICBsZXQgbm9BdHVhbCA9IHRoaXMuY2FiZWNhITtcbiAgICAgIGxldCBub0FudGVyaW9yID0gbnVsbDtcbiAgXG4gICAgICB3aGlsZSAoaW5kaWNlIDwgcG9zaWNhbykge1xuICAgICAgICBub0FudGVyaW9yID0gbm9BdHVhbDtcbiAgICAgICAgbm9BdHVhbCA9IG5vQXR1YWwucHJveGltbyE7XG4gICAgICAgIGluZGljZSsrO1xuICAgICAgfVxuICBcbiAgICAgIG5vQW50ZXJpb3IhLnByb3hpbW8gPSBub0F0dWFsLnByb3hpbW87XG4gICAgfVxuICBcbiAgICB0aGlzLnRhbWFuaG8tLTtcbiAgfVxuICBcbiAgcHVibGljIHJlbW92ZXJQb3JWYWxvcih2YWxvcjogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudGFtYW5obyA9PT0gMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdMaXN0YSB2YXppYS4nKTtcbiAgICB9XG4gIFxuICAgIGxldCBub0F0dWFsID0gdGhpcy5jYWJlY2E7XG4gICAgbGV0IG5vQW50ZXJpb3IgPSBudWxsO1xuICBcbiAgICB3aGlsZSAobm9BdHVhbCAhPT0gbnVsbCkge1xuICAgICAgaWYgKG5vQXR1YWwudmFsb3IgPT09IHZhbG9yKSB7XG4gICAgICAgIGlmIChub0FudGVyaW9yID09PSBudWxsKSB7XG4gICAgICAgICAgdGhpcy5jYWJlY2EgPSBub0F0dWFsLnByb3hpbW87XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbm9BbnRlcmlvci5wcm94aW1vID0gbm9BdHVhbC5wcm94aW1vO1xuICAgICAgICB9XG4gIFxuICAgICAgICB0aGlzLnRhbWFuaG8tLTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICBcbiAgICAgIG5vQW50ZXJpb3IgPSBub0F0dWFsO1xuICAgICAgbm9BdHVhbCA9IG5vQXR1YWwucHJveGltbztcbiAgICB9XG4gIFxuICAgIHRocm93IG5ldyBFcnJvcignVmFsb3IgbsOjbyBlbmNvbnRyYWRvIG5hIGxpc3RhLicpO1xuICB9XG5cblxuICBwdWJsaWMgYnVzY2FyUG9yUG9zaWNhbyhwb3NpY2FvOiBudW1iZXIpOiBObyB8IG51bGwge1xuICAgIGlmIChwb3NpY2FvIDw9IDAgfHwgcG9zaWNhbyA+IHRoaXMudGFtYW5obykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICBcbiAgICBsZXQgbm9BdHVhbCA9IHRoaXMuY2FiZWNhO1xuICAgIGxldCBpbmRpY2UgPSAxO1xuICBcbiAgICB3aGlsZSAoaW5kaWNlIDwgcG9zaWNhbykge1xuICAgICAgbm9BdHVhbCA9IG5vQXR1YWwhLnByb3hpbW87XG4gICAgICBpbmRpY2UrKztcbiAgICB9XG4gIFxuICAgIHJldHVybiBub0F0dWFsO1xuICB9XG5cbiAgcHVibGljIGJ1c2NhclBvclZhbG9yKHZhbG9yOiBudW1iZXIpOiBObyB8IG51bGwge1xuICAgIGxldCBub0F0dWFsID0gdGhpcy5jYWJlY2E7XG4gIFxuICAgIHdoaWxlIChub0F0dWFsICE9PSBudWxsKSB7XG4gICAgICBpZiAobm9BdHVhbC52YWxvciA9PT0gdmFsb3IpIHtcbiAgICAgICAgcmV0dXJuIG5vQXR1YWw7XG4gICAgICB9XG5cbiAgICAgIG5vQXR1YWwgPSBub0F0dWFsLnByb3hpbW87XG4gICAgfVxuICBcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICAgIFxuICB0b0FycmF5KCk6IGFueVtdIHtcbiAgICBjb25zdCBlbGVtZW50b3M6IGFueVtdID0gW107XG4gICAgbGV0IGF0dWFsID0gdGhpcy5jYWJlY2E7XG5cbiAgICB3aGlsZSAoYXR1YWwgIT0gbnVsbCkge1xuICAgICAgZWxlbWVudG9zLnB1c2goYXR1YWwudmFsb3IpO1xuICAgICAgYXR1YWwgPSBhdHVhbC5wcm94aW1vO1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50b3M7XG4gIH1cbn0iXSwibmFtZXMiOlsiTm8iLCJjb25zdHJ1Y3RvciIsInZhbG9yIiwicHJveGltbyIsIkxpc3RhU2ltcGxlc21lbnRlRW5jYWRlYWRhIiwiZ2V0Q2FiZWNhIiwiY2FiZWNhIiwiZ2V0VGFtYW5obyIsInRhbWFuaG8iLCJhZGljaW9uYXIiLCJwb3NpY2FvIiwiRXJyb3IiLCJwb3NpY2FvQXR1YWxpemFkYSIsIm5vdm9ObyIsImFudGVyaW9yIiwiYXR1YWwiLCJpbmRpY2UiLCJyZW1vdmVyUG9yUG9zaWNhbyIsIm5vQXR1YWwiLCJub0FudGVyaW9yIiwicmVtb3ZlclBvclZhbG9yIiwiYnVzY2FyUG9yUG9zaWNhbyIsImJ1c2NhclBvclZhbG9yIiwidG9BcnJheSIsImVsZW1lbnRvcyIsInB1c2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/core/ListaSimplesmenteEncadeada.ts\n"));

/***/ })

});
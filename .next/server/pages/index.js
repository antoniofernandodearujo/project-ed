"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405,229,662,621,832];
exports.modules = {

/***/ 343:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react-router-dom"
var external_react_router_dom_ = __webpack_require__(661);
// EXTERNAL MODULE: ./src/pages/home/index.tsx + 1 modules
var home = __webpack_require__(818);
// EXTERNAL MODULE: ./src/pages/welcome/index.tsx + 2 modules
var welcome = __webpack_require__(128);
// EXTERNAL MODULE: ./src/pages/listaSequencial/index.tsx + 5 modules
var listaSequencial = __webpack_require__(803);
// EXTERNAL MODULE: ./src/pages/listaSimplesmenteEncadeada/index.tsx + 5 modules
var listaSimplesmenteEncadeada = __webpack_require__(911);
// EXTERNAL MODULE: ./src/pages/listaDuplamenteEncadeada/index.tsx + 5 modules
var listaDuplamenteEncadeada = __webpack_require__(314);
;// CONCATENATED MODULE: ./src/routes/Routes.tsx


//pages





function Router() {
    if (typeof document !== "undefined") {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_router_dom_.Routes, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(external_react_router_dom_.Route, {
                    index: true,
                    path: "/",
                    element: /*#__PURE__*/ jsx_runtime_.jsx(home["default"], {})
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(external_react_router_dom_.Route, {
                    path: "/welcome",
                    element: /*#__PURE__*/ jsx_runtime_.jsx(welcome["default"], {})
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(external_react_router_dom_.Route, {
                    path: "/list-sequential",
                    element: /*#__PURE__*/ jsx_runtime_.jsx(listaSequencial["default"], {})
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(external_react_router_dom_.Route, {
                    path: "/list-simplesmente-encadeada",
                    element: /*#__PURE__*/ jsx_runtime_.jsx(listaSimplesmenteEncadeada["default"], {})
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(external_react_router_dom_.Route, {
                    path: "/list-duplamente-encadeada",
                    element: /*#__PURE__*/ jsx_runtime_.jsx(listaDuplamenteEncadeada["default"], {})
                })
            ]
        });
    } else {
        return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {});
    }
}
/* harmony default export */ const Routes = (Router);

;// CONCATENATED MODULE: ./src/pages/index.tsx
//routes


function Home() {
    if (typeof document !== "undefined") {
        return /*#__PURE__*/ jsx_runtime_.jsx(Routes, {});
    } else {
        return null;
    }
}


/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 989:
/***/ ((module) => {

module.exports = require("react-icons/io5");

/***/ }),

/***/ 931:
/***/ ((module) => {

module.exports = require("react-modal");

/***/ }),

/***/ 661:
/***/ ((module) => {

module.exports = require("react-router-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [254,99,715,314,676,743,128,818], () => (__webpack_exec__(343)));
module.exports = __webpack_exports__;

})();
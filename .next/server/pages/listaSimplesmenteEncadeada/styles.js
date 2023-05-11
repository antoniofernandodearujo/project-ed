"use strict";
(() => {
var exports = {};
exports.id = 581;
exports.ids = [581,662];
exports.modules = {

/***/ 639:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Container": () => (/* binding */ Container),
/* harmony export */   "ContainerButton": () => (/* binding */ ContainerButton),
/* harmony export */   "Footer": () => (/* binding */ Footer),
/* harmony export */   "Image": () => (/* binding */ Image)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Container = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100vw;
    height: 100vh;
`;
const Image = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().img)`
    width: 100vw;
    height: 40vh;
    margin-top: 4%;
`;
const Footer = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
    position: absolute;
    bottom: 0;

    display: flex;

    z-index: 1000;
`;
const ContainerButton = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
    position: absolute;
    bottom: 0;
    right: 0;
`;


/***/ }),

/***/ 518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(639));
module.exports = __webpack_exports__;

})();
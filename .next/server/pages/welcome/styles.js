"use strict";
(() => {
var exports = {};
exports.id = 519;
exports.ids = [519,662];
exports.modules = {

/***/ 740:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Container": () => (/* binding */ Container),
/* harmony export */   "Content": () => (/* binding */ Content),
/* harmony export */   "Image": () => (/* binding */ Image),
/* harmony export */   "Text": () => (/* binding */ Text)
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
const Content = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
    width: 80vw;
    height: 80vh;
    background-color: #fff;
    border-radius: 20px;
`;
const Text = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().h2)`
    background-color: #fff;

    margin-top: 12%;
    margin-left: 8%;
    font-size: 45pt;
`;
const Image = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().img)`
    margin-top: 4%;
    margin-left: 75%;
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
var __webpack_exports__ = (__webpack_exec__(740));
module.exports = __webpack_exports__;

})();
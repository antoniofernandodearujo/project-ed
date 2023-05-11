"use strict";
exports.id = 715;
exports.ids = [715];
exports.modules = {

/***/ 715:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Button": () => (/* binding */ Button),
/* harmony export */   "Container": () => (/* binding */ Container),
/* harmony export */   "ContainerButton": () => (/* binding */ ContainerButton),
/* harmony export */   "Content": () => (/* binding */ Content),
/* harmony export */   "Footer": () => (/* binding */ Footer),
/* harmony export */   "Image": () => (/* binding */ Image),
/* harmony export */   "Title": () => (/* binding */ Title)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Container = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const Content = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
    display: flex;
    margin-top: 8%;
`;
const Title = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().h1)`
    text-align: center;
    font-size: 40pt;
    background-color: #fff;

    width: 750px;
    border-radius: 18px;

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 18px;
`;
const ContainerButton = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
    margin-top: 8%;
`;
const Button = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().button)`
    width: 270px;
    height: 60px;

    cursor: pointer;
    border: none;
    border-radius: 15px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    font-size: 20pt;
    font-weight: bold;

    transition: all .3s ease-in;

    &:hover {
        background-color: #b37519;
        color: #fff;
    }

    background-color: #fff;
`;
const Footer = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().footer)`
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
`;
const Image = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().img)`
    width: 100vw;
    height: 35vh;
`;


/***/ })

};
;
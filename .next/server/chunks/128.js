"use strict";
exports.id = 128;
exports.ids = [128];
exports.modules = {

/***/ 128:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ welcome)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./src/pages/welcome/styles.ts
var styles = __webpack_require__(740);
// EXTERNAL MODULE: external "react-modal"
var external_react_modal_ = __webpack_require__(931);
var external_react_modal_default = /*#__PURE__*/__webpack_require__.n(external_react_modal_);
// EXTERNAL MODULE: ./src/components/button/index.tsx + 1 modules
var components_button = __webpack_require__(254);
;// CONCATENATED MODULE: ./src/components/modal/modalInitial/index.tsx


//styles
//react-modal

//component

const ModalInitial = ()=>{
    const [showModal, setShowModal] = (0,external_react_.useState)(false);
    const handleOpenModal = ()=>{
        setShowModal(true);
    };
    const handleCloseModal = ()=>{
        setShowModal(false);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_button/* default */.Z, {
                type: 1,
                onClick: handleOpenModal
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_modal_default()), {
                isOpen: showModal,
                contentLabel: "onRequestClose Example",
                onRequestClose: handleCloseModal,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "Modal text!"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        onClick: handleCloseModal,
                        children: "Close Modal"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const modalInitial = (ModalInitial);

// EXTERNAL MODULE: ./src/components/menu/index.tsx + 1 modules
var menu = __webpack_require__(99);
;// CONCATENATED MODULE: ./src/pages/assets/person.jpeg
/* harmony default export */ const person = ({"src":"/_next/static/media/person.42eed3b3.jpeg","height":347,"width":324,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgABwMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABwEBAQAAAAAAAAAAAAAAAAAAAQP/2gAMAwEAAhADEAAAAKGLP//EAB8QAAIBAgcAAAAAAAAAAAAAAAEDEQACBBITFSFigf/aAAgBAQABPwBTsBurmh41DZknmD18r//EABkRAQACAwAAAAAAAAAAAAAAAAEAAgMhMf/aAAgBAgEBPwC+Mqm3k//EABYRAAMAAAAAAAAAAAAAAAAAAAABIf/aAAgBAwEBPwB0/9k=","blurWidth":7,"blurHeight":8});
;// CONCATENATED MODULE: ./src/pages/welcome/index.tsx


//styles

//components


//img

const Welcome = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styles.Container, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styles.Content, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(menu/* default */.Z, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(styles.Text, {
                        children: "Hey! Escolha a Estrutura de Dados utilizando o Menu."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(styles.Image, {
                        src: person.src
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(modalInitial, {})
        ]
    });
};
/* harmony default export */ const welcome = (Welcome);


/***/ }),

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


/***/ })

};
;
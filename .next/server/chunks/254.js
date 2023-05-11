"use strict";
exports.id = 254;
exports.ids = [254];
exports.modules = {

/***/ 254:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_button)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/components/button/styles.ts

const ButtonQuestion = (external_styled_components_default()).button`
    position: absolute;
    top: 80%;
    left: 95%;
    transform: translate(-50%, -50%);
    z-index: 1;

    width: 90px;
    height: 90px;
    border: none;
    border-radius: 50%;

    font-size: 38pt;

    cursor: pointer;

    font-weight: bold;
    color: #fff;

    transition: all .3s ease-in;

    &:hover {
        background-color: #b37519;
    }
`;
const ButtonQuestionNew = (external_styled_components_default()).button`
    position: absolute;
    bottom: 0;
    right: 0;
    margin-top: 2%;
    transform: translate(-50%, -50%);

    width: 90px;
    height: 90px;
    border: none;
    border-radius: 50%;

    font-size: 38pt;

    cursor: pointer;

    font-weight: bold;
    color: #000;
    
    background-color: #fff;

    transition: all .3s ease-in;

    &:hover {
        background-color: #b37519;
        color: #fff;
    }
`;
const ButtonQuestionNewNew = (external_styled_components_default()).button`
    position: absolute;
    bottom: 0;
    right: 0;
    margin-top: 2%;
    transform: translate(-50%, -50%);

    width: 90px;
    height: 90px;
    border: none;
    border-radius: 50%;

    font-size: 38pt;

    cursor: pointer;

    font-weight: bold;
    color: #000;
    
    background-color: #868686;

    transition: all .3s ease-in;

    &:hover {
        background-color: #b37519;
        color: #fff;
    }
`;

;// CONCATENATED MODULE: ./src/components/button/index.tsx


//styles

const Button = ({ onClick , type  })=>{
    if (type === 1) return /*#__PURE__*/ jsx_runtime_.jsx(ButtonQuestionNew, {
        onClick: onClick,
        type: "button",
        children: "?"
    });
    if (type === 2) return /*#__PURE__*/ jsx_runtime_.jsx(ButtonQuestionNewNew, {
        onClick: onClick,
        type: "button",
        children: "?"
    });
    return /*#__PURE__*/ jsx_runtime_.jsx(ButtonQuestion, {
        onClick: onClick,
        type: "button",
        children: "?"
    });
};
/* harmony default export */ const components_button = (Button);


/***/ })

};
;
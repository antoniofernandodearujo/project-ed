"use strict";
exports.id = 818;
exports.ids = [818];
exports.modules = {

/***/ 818:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ home)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./src/pages/home/styles.ts
var styles = __webpack_require__(715);
;// CONCATENATED MODULE: ./src/pages/home/assets/Background-Wave-1.png
/* harmony default export */ const Background_Wave_1 = ({"src":"/_next/static/media/Background-Wave-1.09bb5228.png","height":377,"width":1440,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAQAAADPnVVmAAAAKklEQVR42mP4M+1PzAnm7/J/6v6+/3vnlyfDv///vv69+u/rv/8g8O8/AKK+Gvlw5wv9AAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":2});
// EXTERNAL MODULE: ./src/components/button/index.tsx + 1 modules
var components_button = __webpack_require__(254);
// EXTERNAL MODULE: external "react-router-dom"
var external_react_router_dom_ = __webpack_require__(661);
;// CONCATENATED MODULE: ./src/pages/home/index.tsx


//styles

//img

//components

//route

const Principal = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styles.Container, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(styles.Content, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(styles.Title, {
                    children: "ESTRUTURA DE DADOS"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(styles.ContainerButton, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_router_dom_.NavLink, {
                    to: "/welcome",
                    children: [
                        " ",
                        /*#__PURE__*/ jsx_runtime_.jsx(styles.Button, {
                            type: "button",
                            children: "Come\xe7ar"
                        }),
                        " "
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styles.Footer, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(styles.Image, {
                        src: Background_Wave_1.src
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(components_button/* default */.Z, {
                        type: 2
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const home = (Principal);


/***/ })

};
;
"use strict";
exports.id = 99;
exports.ids = [99];
exports.modules = {

/***/ 99:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ menu)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/components/menu/styles.ts

const MenuContainer = (external_styled_components_default()).div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    position: absolute;
    top: 0;
    left: 0;

    margin-top: 10px;
    margin-left: 10px;
`;
const ButtonMenu = (external_styled_components_default()).button`
    border: none;
    color: #fff;

    cursor: pointer;
    font-size: 45pt;
    transition: all .3s ease-in;

    &:hover {
        color: #b37519
    }
`;
const MenuListContainer = (external_styled_components_default()).div`
    width: 500px;
    height: 100vh;

    position: fixed;
    top: 0;
    left: 0;

    background-color: #fff;

    transition: all .3s ease-out;

    z-index: 2500;
`;
const MenuList = (external_styled_components_default()).ul`
    list-style-type: none;
    background-color:#fff;
    padding: 0;
    margin: 0;

    margin-top: 10%;
`;
const MenuItem = (external_styled_components_default()).button`
    font-size: 24px;
    padding: 10px;
    border-bottom: 1px solid #ccc;
    background-color:#fff;
    cursor: pointer;
    border: none;
    transition: all .3s ease-in;

    display: flex;
    align-items: center;

    &:hover{
        color: #FF9A02;
    }

    &:last-child {
        border-bottom: none;
    }
`;
const CloseButton = (external_styled_components_default()).button`
    position: absolute;
    top: 0;
    right: 0;
    padding: 10px;
    border: none;
    background: transparent;
    
    cursor: pointer;
    font-size: 36pt;

    color: #fff;

    transition: all .3s ease-out;

    &:hover {
        transform: scale(1.2);
    }
`;
const BoxInfo = (external_styled_components_default()).div`
    position: absolute;
    bottom: 0;
    margin-bottom: 5%;
`;

// EXTERNAL MODULE: external "react-icons/io5"
var io5_ = __webpack_require__(989);
// EXTERNAL MODULE: external "react-router-dom"
var external_react_router_dom_ = __webpack_require__(661);
;// CONCATENATED MODULE: ./src/components/menu/index.tsx


//styles

//icons

//route-dom

const Menu = ()=>{
    const [isMenuOpen, setIsMenuOpen] = (0,external_react_.useState)(false);
    const openMenu = ()=>{
        setIsMenuOpen(!isMenuOpen);
    };
    const handleCloseMenu = ()=>{
        setIsMenuOpen(false);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(MenuContainer, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(ButtonMenu, {
                onClick: openMenu,
                type: "button",
                children: /*#__PURE__*/ jsx_runtime_.jsx(io5_.IoMenu, {})
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(MenuListContainer, {
                style: {
                    left: isMenuOpen ? "0" : "-500px"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(CloseButton, {
                        onClick: handleCloseMenu,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(io5_.IoClose, {
                            style: {
                                backgroundColor: "#fff",
                                color: "#FF9A02"
                            }
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(MenuList, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_router_dom_.NavLink, {
                                to: "/list-sequential",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(MenuItem, {
                                    children: [
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx(io5_.IoRadioButtonOnOutline, {
                                            style: {
                                                backgroundColor: "#fff"
                                            }
                                        }),
                                        " Lista Sequencial"
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_router_dom_.NavLink, {
                                to: "/list-simplesmente-encadeada",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(MenuItem, {
                                    children: [
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx(io5_.IoRadioButtonOnOutline, {
                                            style: {
                                                backgroundColor: "#fff"
                                            }
                                        }),
                                        " Lista Simplesmente Encadeada"
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_router_dom_.NavLink, {
                                to: "/list-duplamente-encadeada",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(MenuItem, {
                                    children: [
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx(io5_.IoRadioButtonOnOutline, {
                                            style: {
                                                backgroundColor: "#fff"
                                            }
                                        }),
                                        " Lista Duplamente Encadeada"
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(BoxInfo, {
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(MenuItem, {
                                    children: [
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx(io5_.IoRadioButtonOnOutline, {
                                            style: {
                                                backgroundColor: "#fff"
                                            }
                                        }),
                                        " Mais informa\xe7\xf5es"
                                    ]
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const menu = (Menu);


/***/ })

};
;
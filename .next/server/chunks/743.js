"use strict";
exports.id = 743;
exports.ids = [743];
exports.modules = {

/***/ 803:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ listaSequencial)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./src/components/menu/index.tsx + 1 modules
var menu = __webpack_require__(99);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/components/form/styles.ts

const Container = (external_styled_components_default()).div`
    display: flex;
    flex-direction: column;
`;
const Content = (external_styled_components_default()).div`

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    width: 85vw;
    height: 200px;

    z-index: 2000;

    margin-top: 5%;

`;
const Area = (external_styled_components_default()).div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const AreaInput = (external_styled_components_default()).div`
    display: flex;
    flex-direction: row;
    
`;
const Input = (external_styled_components_default()).input`
    width: 95px;
    height: 55px;

    text-align: center;
    font-size: 30px;

    border: none;
    border-radius: 10px;

    outline: none;

    background-color: #fff;
`;
const ContainerButton = (external_styled_components_default()).div`
    position: absolute;
    margin-top: 20%;
`;
const Button = (external_styled_components_default()).button`
    border: none;
    border-radius: 6px;
    background-color: #fff;
    width: 170px;
    height: 45px;
    cursor: pointer;

    font-size: 22px;
    font-weight: bold;

    transition: all .3s ease-in;

    &:hover {
        background-color: #d9d9d9;
    }
`;

;// CONCATENATED MODULE: ./src/core/ListaSequencial.ts
class ListaSequencial {
    constructor(max, listNumbers){
        this.max = max;
        this.listNumbers = listNumbers;
        this.nElements = listNumbers.length;
    }
    listIsfull() {
        return this.nElements === this.max;
    }
    listIsEmpty() {
        if (this.nElements === 0) return true;
        else return false;
    }
    size() {
        return this.nElements;
    }
    getMax() {
        return this.max;
    }
    getListNumbers() {
        return this.listNumbers;
    }
    addInList(num, pos) {
        if (this.listIsfull()) {
            alert("A lista j\xe1 atingiu seu tamanho m\xe1ximo.");
            return -1;
        }
        if (pos < 1 || pos > this.nElements + 1) {
            alert("Posi\xe7\xe3o inv\xe1lida.");
            return -1;
        }
        if (pos === this.nElements + 1) {
            this.listNumbers.push(num);
        } else {
            this.listNumbers.splice(pos, 0, num);
        }
        this.nElements++;
        return 1;
    }
    addInListLog(num, pos) {
        if (this.listIsfull()) {
            // alert('A lista já atingiu seu tamanho máximo.');
            return -1;
        }
        if (pos < 1 || pos > this.nElements + 1) {
            // alert('Posição inválida.');
            return -1;
        }
        if (pos === this.nElements + 1) {
            this.listNumbers.push(num);
        } else {
            this.listNumbers.splice(pos, 0, num);
        }
        this.nElements++;
        return true;
    }
    removeInList(num, pos) {
        if (pos !== undefined && num !== undefined) {
            alert("Informe apenas a posi\xe7\xe3o ou o n\xfamero a ser removido.");
            return;
        }
        if (pos === undefined && num === undefined) {
            alert("Informe a posi\xe7\xe3o ou o n\xfamero a ser removido.");
            return;
        }
        let newList = [];
        if (pos !== undefined) {
            const index = parseInt(String(pos)) - 1;
            if (index >= 0 && index < this.listNumbers.length) {
                newList = [
                    ...this.listNumbers.slice(0, index),
                    ...this.listNumbers.slice(index + 1)
                ];
                this.listNumbers = newList;
                this.nElements--;
            } else {
                alert("Posi\xe7\xe3o inv\xe1lida.");
            }
        } else if (num !== undefined) {
            const index = this.listNumbers.indexOf(num);
            if (index > -1) {
                newList = [
                    ...this.listNumbers.slice(0, index),
                    ...this.listNumbers.slice(index + 1)
                ];
                this.listNumbers = newList;
                this.nElements--;
            } else {
                alert(`O número ${num} não existe na lista.`);
            }
        }
    }
    removeInListLog(num, pos) {
        if (pos !== undefined && num !== undefined) {
            return -1;
        }
        if (pos === undefined && num === undefined) {
            return -1;
        }
        let newList = [];
        if (pos !== undefined) {
            const index = parseInt(String(pos)) - 1;
            if (index >= 0 && index < this.listNumbers.length) {
                newList = [
                    ...this.listNumbers.slice(0, index),
                    ...this.listNumbers.slice(index + 1)
                ];
                this.listNumbers = newList;
                this.nElements--;
            } else {
                return -1;
            }
        } else if (num !== undefined) {
            const index = this.listNumbers.indexOf(num);
            if (index > -1) {
                newList = [
                    ...this.listNumbers.slice(0, index),
                    ...this.listNumbers.slice(index + 1)
                ];
                this.listNumbers = newList;
                this.nElements--;
            } else {
                return -1;
            }
            return 1;
        }
    }
    searchInList(num, pos) {
        if (num !== undefined) {
            const index = this.listNumbers.indexOf(num);
            if (index > -1) {
                alert(`O número ${num} existe na lista e está na posição ${index + 1}!`);
                return index + 1;
            } else {
                alert(`O número ${num} não existe na lista.`);
                return -1;
            }
        } else if (pos !== undefined) {
            const index = parseInt(String(pos)) - 1;
            if (index >= 0 && index < this.listNumbers.length) {
                alert(`O elemento na posição ${pos} é o número ${this.listNumbers[index]}.`);
                return this.listNumbers[index];
            } else {
                alert("Posi\xe7\xe3o inv\xe1lida.");
                return -1;
            }
        } else {
            alert("Informe a posi\xe7\xe3o ou o n\xfamero a ser pesquisado.");
            return -1;
        }
    }
    searchInListLog(num, pos) {
        if (num !== undefined) {
            const index = this.listNumbers.indexOf(num);
            if (index > -1) {
                // alert(`O número ${num} existe na lista e está na posição ${index + 1}!`);
                return index + 1;
            } else {
                // alert(`O número ${num} não existe na lista.`);
                return -1;
            }
        } else if (pos !== undefined) {
            const index = parseInt(String(pos)) - 1;
            if (index >= 0 && index < this.listNumbers.length) {
                // alert(`O elemento na posição ${pos} é o número ${this.listNumbers[index]}.`);
                return this.listNumbers[index];
            } else {
                // alert('Posição inválida.');
                return -1;
            }
        } else {
            // alert('Informe a posição ou o número a ser pesquisado.');
            return -1;
        }
    }
}

;// CONCATENATED MODULE: ./src/components/box/styles.ts

const styles_Container = (external_styled_components_default()).div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const Box = (external_styled_components_default()).div`
    position: absolute;
    top: 0;
    margin-top: 7%;

    width: 85vw;
    height: 25vh;

    background-color: #fff;
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const ContainerNumberMax = (external_styled_components_default()).div`
    position: absolute;
    right: 0;
    top: 0;
    margin-top: 6%;
    margin-right: 5%;
    z-index: 2000;
    border: 1px solid #fff;
    border-radius: 10px;

    background-color: #FF9A02;

    width: 85px;
    height: 50px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`;
const ContainerTitle = (external_styled_components_default()).div`
    position: absolute;
    top: 0;
    margin-top: 2%;
`;
const TitleList = (external_styled_components_default()).h2`
    font-weight: bold;
    font-size: 22pt;
    color: #fff;
`;
const styles_Content = (external_styled_components_default()).div`
    width: 80vw;
    height: 80px;

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    background-color: #fff;

`;
const Case = (external_styled_components_default()).div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 75px;
    height: 55px;
    border-radius: 8px;

`;
const ContainerAll = (external_styled_components_default()).div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fff;
`;
const BoxNumber = (external_styled_components_default()).h4`
    margin-bottom: 4%;
    color: #fff;
    font-size: 1.2rem;
`;
const Title = (external_styled_components_default()).h4`
    background-color: #fff;
`;

;// CONCATENATED MODULE: ./src/components/box/index.tsx


//styles

const box_Box = ({ myList  })=>{
    const max = myList.getMax();
    const list = myList.getListNumbers();
    const orangeBoxes = Array.from({
        length: max
    }, (_, i)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(ContainerAll, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Title, {
                    children: [
                        i + 1,
                        "\xb0"
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Case, {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(BoxNumber, {
                        children: [
                            "[ ",
                            list[i] ?? "null",
                            " ]"
                        ]
                    })
                })
            ]
        }, i));
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styles_Container, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(ContainerTitle, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(TitleList, {
                    children: "Lista Sequencial"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ContainerNumberMax, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Title, {
                    style: {
                        backgroundColor: "#FF9A02",
                        color: "#fff"
                    },
                    children: [
                        "MAX: ",
                        8
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Box, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(styles_Content, {
                    children: orangeBoxes
                })
            })
        ]
    });
};
/* harmony default export */ const box = (box_Box);

;// CONCATENATED MODULE: ./src/components/form/index.tsx


//style

//list-sequential

//components

const Form = ()=>{
    const [posAdd, setPosAdd] = (0,external_react_.useState)("");
    const [valueAdd, setValueAdd] = (0,external_react_.useState)("");
    const [posRemove, setPosRemove] = (0,external_react_.useState)("");
    const [valueRemove, setValueRemove] = (0,external_react_.useState)("");
    const [posSearch, setPosSearch] = (0,external_react_.useState)("");
    const [valueSearch, setValueSearch] = (0,external_react_.useState)("");
    const [myList, setMyList] = (0,external_react_.useState)(new ListaSequencial(8, []));
    const max = myList.getMax();
    const list = myList.getListNumbers();
    function handleAddNumber() {
        if (!valueAdd || !posAdd) {
            alert("Informe um n\xfamero e uma posi\xe7\xe3o.");
            return;
        }
        const num = parseInt(valueAdd);
        const pos = parseInt(posAdd);
        if (isNaN(num) || isNaN(pos)) {
            alert("Informe um n\xfamero e uma posi\xe7\xe3o v\xe1lidos.");
            return;
        }
        myList.addInList(num, pos);
        setValueAdd("");
        setPosAdd("");
    }
    function handleRemoveNumber() {
        const num = parseInt(valueRemove);
        const position = parseInt(posRemove);
        if (valueRemove !== "") myList.removeInList(num, undefined);
        if (posRemove !== "") myList.removeInList(undefined, position);
        setMyList(new ListaSequencial(max, list));
        setPosRemove("");
        setValueRemove("");
    }
    function handleSearchNumber() {
        const num = parseInt(valueSearch);
        const position = parseInt(posSearch);
        if (valueSearch !== "") myList.searchInList(num, undefined);
        if (posSearch !== "") myList.searchInList(undefined, position);
        setMyList(new ListaSequencial(max, list));
        setValueSearch("");
        setPosSearch("");
    }
    function reset() {
        setPosAdd("");
        setValueAdd("");
        setPosRemove("");
        setValueRemove("");
        setPosSearch("");
        setValueSearch("");
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(box, {
                myList: myList
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Container, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Content, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Area, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(AreaInput, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(Input, {
                                            type: "text",
                                            value: valueAdd,
                                            onChange: (e)=>setValueAdd(e.target.value)
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Input, {
                                            type: "text",
                                            value: posAdd,
                                            onChange: (e)=>setPosAdd(e.target.value),
                                            style: {
                                                marginLeft: "3%"
                                            }
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Button, {
                                    onClick: handleAddNumber,
                                    style: {
                                        marginTop: "4%",
                                        marginLeft: "1.2%"
                                    },
                                    type: "button",
                                    children: "Inserir"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Area, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(AreaInput, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(Input, {
                                            type: "text",
                                            value: valueRemove,
                                            onChange: (e)=>setValueRemove(e.target.value)
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Input, {
                                            type: "text",
                                            value: posRemove,
                                            onChange: (e)=>setPosRemove(e.target.value),
                                            style: {
                                                marginLeft: "3%"
                                            }
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Button, {
                                    style: {
                                        marginTop: "4%",
                                        marginLeft: "1.2%"
                                    },
                                    type: "button",
                                    onClick: handleRemoveNumber,
                                    children: "Remover"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Area, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(AreaInput, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Input, {
                                        value: posSearch,
                                        onChange: (e)=>setPosSearch(e.target.value),
                                        type: "text"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Button, {
                                    onClick: handleSearchNumber,
                                    style: {
                                        marginTop: "4%"
                                    },
                                    type: "button",
                                    children: "Buscar Posi\xe7\xe3o"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Area, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(AreaInput, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Input, {
                                        value: valueSearch,
                                        onChange: (e)=>setValueSearch(e.target.value),
                                        type: "text"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Button, {
                                    onClick: handleSearchNumber,
                                    style: {
                                        marginTop: "4%"
                                    },
                                    type: "button",
                                    children: "Buscar Valor"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(ContainerButton, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Button, {
                                onClick: reset,
                                style: {
                                    marginTop: "4%"
                                },
                                type: "button",
                                children: "Reset"
                            })
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const components_form = (Form);

// EXTERNAL MODULE: ./src/components/button/index.tsx + 1 modules
var components_button = __webpack_require__(254);
// EXTERNAL MODULE: ./src/pages/listaSequencial/styles.ts
var styles = __webpack_require__(396);
// EXTERNAL MODULE: ./src/pages/assets/vector.png
var vector = __webpack_require__(603);
;// CONCATENATED MODULE: ./src/pages/listaSequencial/index.tsx


//components



//styles

//img

const ListSequential = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styles.Container, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(menu/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(components_form, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styles.Footer, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(styles.Image, {
                        src: vector/* default.src */.Z.src
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(styles.ContainerButton, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(components_button/* default */.Z, {
                            type: 2
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const listaSequencial = (ListSequential);


/***/ }),

/***/ 396:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Container": () => (/* binding */ Container),
/* harmony export */   "ContainerButton": () => (/* binding */ ContainerButton),
/* harmony export */   "ContainerText": () => (/* binding */ ContainerText),
/* harmony export */   "Footer": () => (/* binding */ Footer),
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
const Footer = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
    position: absolute;
    bottom: 0;

    display: flex;

    z-index: 1000;
`;
const Image = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().img)`
    width: 100vw;
    height: 40vh;
    margin-top: 4%;
`;
const ContainerText = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
    display: flex;
    flex-direction: column;

    position: absolute;
    bottom: 0;

    margin-bottom: 10%;
`;
const Text = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().h4)`
`;
const ContainerButton = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
    position: absolute;
    bottom: 0;
    right: 0;
`;


/***/ })

};
;
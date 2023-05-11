"use strict";
exports.id = 676;
exports.ids = [676];
exports.modules = {

/***/ 911:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ listaSimplesmenteEncadeada)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./src/pages/listaSimplesmenteEncadeada/styles.ts
var styles = __webpack_require__(639);
// EXTERNAL MODULE: ./src/pages/assets/vector.png
var vector = __webpack_require__(603);
// EXTERNAL MODULE: ./src/components/menu/index.tsx + 1 modules
var menu = __webpack_require__(99);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/components/form/formLSE/styles.ts

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

;// CONCATENATED MODULE: ./src/core/ListaSimplesmenteEncadeada.ts
class No {
    constructor(valor){
        this.valor = valor;
        this.proximo = null;
    }
}
class ListaSimplesmenteEncadeada {
    constructor(){
        this.cabeca = null;
        this.tamanho = 0;
    }
    getCabeca() {
        return this.cabeca;
    }
    getTamanho() {
        return this.tamanho;
    }
    adicionar(valor, posicao) {
        if (posicao <= 0 || posicao > this.tamanho + 1) {
            alert("Posi\xe7\xe3o inv\xe1lida.");
        }
        if (this.tamanho >= 8) {
            alert("A lista j\xe1 atingiu o tamanho m\xe1ximo de 8 elementos.");
        }
        const novoNo = new No(valor);
        if (posicao === 1) {
            novoNo.proximo = this.cabeca;
            this.cabeca = novoNo;
        } else {
            let anterior = null;
            let atual = this.cabeca;
            let indice = 1;
            while(atual != null && indice < posicao){
                anterior = atual;
                atual = atual.proximo;
                indice++;
            }
            novoNo.proximo = atual;
            anterior.proximo = novoNo;
        }
        this.tamanho++;
    }
    /**
   * Eu tive que criar 2 métodos para remoção e para a busca
   * porque tava dando muito erro, se lembrar de alguma coisa
   * ou fazer alguma validação.
   */ removerPorPosicao(posicao) {
        if (posicao <= 0 || posicao > this.tamanho) {
            alert("Posi\xe7\xe3o inv\xe1lida.");
        }
        if (posicao === 1) {
            this.cabeca = this.cabeca.proximo;
        } else {
            let indice = 1;
            let noAtual = this.cabeca;
            let noAnterior = null;
            while(indice < posicao){
                noAnterior = noAtual;
                noAtual = noAtual.proximo;
                indice++;
            }
            noAnterior.proximo = noAtual.proximo;
        }
        this.tamanho--;
    }
    removerPorValor(valor) {
        if (this.tamanho === 0) {
            alert("Lista vazia.");
        }
        let noAtual = this.cabeca;
        let noAnterior = null;
        while(noAtual !== null){
            if (noAtual.valor === valor) {
                if (noAnterior === null) {
                    this.cabeca = noAtual.proximo;
                } else {
                    noAnterior.proximo = noAtual.proximo;
                }
                this.tamanho--;
                return;
            }
            noAnterior = noAtual;
            noAtual = noAtual.proximo;
        }
        if (this.tamanho < 8 && noAtual === null) {
            alert("Valor n\xe3o encontrado na lista.");
        }
    }
    buscarPorPosicao(posicao) {
        if (posicao <= 0 || posicao > this.tamanho) {
            return null;
        }
        let noAtual = this.cabeca;
        let indice = 1;
        while(indice < posicao){
            noAtual = noAtual.proximo;
            indice++;
        }
        return noAtual;
    }
    buscarPorPosicaoRI(posicao) {
        if (posicao <= 0 || posicao > this.tamanho) {
            return null;
        }
        let noAtual = this.cabeca;
        let indice = 1;
        while(indice < posicao){
            noAtual = noAtual.proximo;
            indice++;
        }
        return indice;
    }
    buscarPorValor(valor) {
        let noAtual = this.cabeca;
        while(noAtual !== null){
            if (noAtual.valor === valor) {
                return noAtual;
            }
            noAtual = noAtual.proximo;
        }
        return null;
    }
    toArray() {
        const elementos = [];
        let atual = this.cabeca;
        while(atual != null){
            elementos.push(atual.valor);
            atual = atual.proximo;
        }
        return elementos;
    }
}

;// CONCATENATED MODULE: ./src/components/box/boxListaSimplesmenteEncadeada/styles.ts

const styles_Container = (external_styled_components_default()).div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #FF9A02;
`;
const Header = (external_styled_components_default()).div`
    display: flex;
    position: absolute;
    top: 0;
    left: 0;

    margin-top: 1%;
    margin-left: .5%;
`;
const ContainerHeader = (external_styled_components_default()).div`
    background-color: #fff;
`;
const CaseHeader = (external_styled_components_default()).div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 80px;
    height: 55px;
    border-radius: 8px;
`;
const ContentHeader = (external_styled_components_default()).div`
    background-color: #fff;

    width: 95%;
    height: 75%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const BoxNumberHeader = (external_styled_components_default()).h4`
    background-color: #fff;
`;
const TitleHeader = (external_styled_components_default()).label`
    background-color: #fff;
    font-size: 12px;
`;
const Box = (external_styled_components_default()).div`
    position: absolute;
    top: 0;
    margin-top: 6%;

    width: 85vw;
    height: 20vh;

    background-color: #fff;
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const styles_Content = (external_styled_components_default()).div`
    width: 80vw;
    height: 80px;

    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 3%;

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
const ContainerIconHeader = (external_styled_components_default()).div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: absolute;
    top: 0;
    left: 0;
    margin-top: 90%;
    margin-left: 20%;
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
const ContainerArrowRight = (external_styled_components_default()).div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-left: -5%;
    margin-right: -5%;

    margin-top: .5%;
`;
const BoxNumber = (external_styled_components_default()).h4`
    margin-bottom: 4%;
    color: #fff;
    font-size: 1.2rem;
`;
const Title = (external_styled_components_default()).h4`
    background-color: #fff;
`;
const ContainerIcon = (external_styled_components_default()).div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fff;
`;

// EXTERNAL MODULE: external "react-icons/io5"
var io5_ = __webpack_require__(989);
;// CONCATENATED MODULE: ./src/components/box/boxListaSimplesmenteEncadeada/index.tsx


//styles

//icon

const BoxListaSimplesmenteEncadeada = ({ myList  })=>{
    let cabeca = myList.getCabeca();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styles_Container, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(ContainerTitle, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(TitleList, {
                    children: "Lista Simplesmente Encadeada"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Box, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Header, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(ContainerHeader, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(CaseHeader, {
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ContentHeader, {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(TitleHeader, {
                                                children: "Head Value"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(BoxNumberHeader, {
                                                children: [
                                                    " ",
                                                    cabeca?.valor,
                                                    " "
                                                ]
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(ContainerIconHeader, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(io5_.IoReturnDownForwardSharp, {
                                    style: {
                                        backgroundColor: "#fff"
                                    },
                                    size: 60,
                                    color: "#000"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(styles_Content, {
                        children: myList.toArray().map((value, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ContainerAll, {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Title, {
                                                children: [
                                                    index + 1,
                                                    "\xb0"
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(Case, {
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(BoxNumber, {
                                                    children: [
                                                        "[ ",
                                                        value,
                                                        " ]"
                                                    ]
                                                })
                                            })
                                        ]
                                    }, index),
                                    index + 1 < myList.getTamanho() ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(ContainerIcon, {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(io5_.IoArrowForwardOutline, {
                                                style: {
                                                    backgroundColor: "#fff"
                                                },
                                                size: 32
                                            })
                                        })
                                    }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {})
                                ]
                            }))
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const boxListaSimplesmenteEncadeada = (BoxListaSimplesmenteEncadeada);

;// CONCATENATED MODULE: ./src/components/form/formLSE/index.tsx


//style

//list-sequential

//components

const FormLSE = ()=>{
    const [posAdd, setPosAdd] = (0,external_react_.useState)("");
    const [valueAdd, setValueAdd] = (0,external_react_.useState)("");
    const [posRemove, setPosRemove] = (0,external_react_.useState)("");
    const [valueRemove, setValueRemove] = (0,external_react_.useState)("");
    const [posSearch, setPosSearch] = (0,external_react_.useState)("");
    const [valueSearch, setValueSearch] = (0,external_react_.useState)("");
    const [lista, setLista] = (0,external_react_.useState)(new ListaSimplesmenteEncadeada());
    function adicionarValor() {
        const valorNumerico = parseInt(valueAdd);
        if (!isNaN(valorNumerico)) {
            const posicaoNumerica = parseInt(posAdd);
            lista.adicionar(valorNumerico, posicaoNumerica);
            setLista(lista);
        }
        setValueAdd("");
        setPosAdd("");
    }
    function remove() {
        const position = posRemove;
        const val = valueRemove;
        if (position !== "") {
            if (!isNaN(parseInt(position))) {
                lista.removerPorPosicao(parseInt(position));
                setLista(lista);
                setPosRemove("");
            }
        } else if (val !== "") {
            if (!isNaN(parseInt(val))) {
                lista.removerPorValor(parseInt(val));
                setLista(lista);
                setValueRemove("");
            }
        }
    }
    function search() {
        const position = posSearch;
        const val = valueSearch;
        let no = null;
        let posi = null;
        if (position !== "") {
            if (!isNaN(parseInt(position))) {
                no = lista.buscarPorPosicao(parseInt(position));
                alert(`O valor da posição ${position} é ${no?.valor}`);
                setLista(lista);
                setPosSearch("");
            }
        } else if (val !== "") {
            if (!isNaN(parseInt(val))) {
                no = lista.buscarPorValor(parseInt(val));
                posi = lista.buscarPorPosicaoRI(parseInt(position));
                setLista(lista);
                setValueSearch("");
                if (no === null) {
                    alert(`O valor não está na lista!`);
                } else {
                    alert(`O valor ${val} está na lista!`);
                }
            }
        }
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
            /*#__PURE__*/ jsx_runtime_.jsx(boxListaSimplesmenteEncadeada, {
                myList: lista
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
                                    onClick: adicionarValor,
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
                                    onClick: remove,
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
                                    onClick: search,
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
                                    onClick: search,
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
/* harmony default export */ const formLSE = (FormLSE);

// EXTERNAL MODULE: ./src/components/button/index.tsx + 1 modules
var components_button = __webpack_require__(254);
;// CONCATENATED MODULE: ./src/pages/listaSimplesmenteEncadeada/index.tsx


//styles

//img

//components



const listaSimplesmenteEncadeada_ListaSimplesmenteEncadeada = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styles.Container, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(menu/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(formLSE, {}),
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
/* harmony default export */ const listaSimplesmenteEncadeada = (listaSimplesmenteEncadeada_ListaSimplesmenteEncadeada);


/***/ }),

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


/***/ })

};
;
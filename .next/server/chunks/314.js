"use strict";
exports.id = 314;
exports.ids = [314];
exports.modules = {

/***/ 603:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/vector.2399b166.png","height":356,"width":1440,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAQAAADPnVVmAAAAKklEQVR42mP4N/uf+j+Wf6L/3P41/Gv+Z8Xw7/+/L/8u/nv67/8/EPwDAIyvGeHlinZoAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":2});

/***/ }),

/***/ 314:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ listaDuplamenteEncadeada)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./src/pages/listaDuplamenteEncadeada/styles.ts
var styles = __webpack_require__(826);
// EXTERNAL MODULE: ./src/pages/assets/vector.png
var vector = __webpack_require__(603);
// EXTERNAL MODULE: ./src/components/menu/index.tsx + 1 modules
var menu = __webpack_require__(99);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/components/form/formLDE/styles.ts

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

;// CONCATENATED MODULE: ./src/core/ListaDuplamenteEncadeada.ts
//class Nó - 
class No {
    constructor(valor){
        this.valor = valor;
        this.proximo = null;
        this.anterior = null;
    }
}
class ListaDuplamenteEncadeada {
    constructor(){
        this.cabeca = null;
        this.cauda = null;
        this.tamanho = 0;
    }
    getCabeca() {
        return this.cabeca;
    }
    getCauda() {
        return this.cauda;
    }
    getTamanho() {
        return this.tamanho;
    }
    adicionar(valor, posicao) {
        if (posicao <= 0 || posicao > this.tamanho + 1) {
            alert("Posi\xe7\xe3o inv\xe1lida.");
        }
        if (this.tamanho >= 8) {
            alert("Tamanho m\xe1ximo da lista excedido.");
        }
        const novoNo = new No(valor);
        if (posicao === 1) {
            novoNo.proximo = this.cabeca;
            if (this.cabeca !== null) {
                this.cabeca.anterior = novoNo;
            }
            this.cabeca = novoNo;
            // atualizando referência da cauda se a lista estava vazia
            if (this.cauda === null) {
                this.cauda = novoNo;
            }
        } else {
            let anterior = this.buscarPorPosicao(posicao - 1);
            if (anterior === null) {
                throw new Error("Posi\xe7\xe3o inv\xe1lida.");
            }
            let atual = anterior.proximo;
            novoNo.proximo = atual;
            novoNo.anterior = anterior;
            anterior.proximo = novoNo;
            if (atual !== null) {
                atual.anterior = novoNo;
            }
            // atualizando referência da cauda se o novo nó foi adicionado ao final
            if (novoNo.proximo === null) {
                this.cauda = novoNo;
            }
        }
        this.tamanho++;
    }
    removerPorPosicao(posicao) {
        if (posicao <= 0 || posicao > this.tamanho) {
            alert("Posi\xe7\xe3o inv\xe1lida.");
        }
        if (this.tamanho <= 0) {
            alert("A lista est\xe1 vazia.");
        }
        if (this.tamanho === 8 && posicao === this.tamanho) {
            this.tamanho--;
            return;
        }
        let atual = this.buscarPorPosicao(posicao);
        if (atual === null) {
            throw new Error("Posi\xe7\xe3o inv\xe1lida.");
        }
        if (atual.anterior === null) {
            this.cabeca = atual.proximo;
        } else {
            atual.anterior.proximo = atual.proximo;
        }
        if (atual.proximo !== null) {
            atual.proximo.anterior = atual.anterior;
        }
        this.tamanho--;
        if (atual.proximo === null) {
            this.cauda = atual.anterior;
        }
    }
    removerPorValor(valor) {
        let atual = this.cabeca;
        while(atual !== null){
            if (atual.valor === valor) {
                if (atual.anterior === null) {
                    this.cabeca = atual.proximo;
                } else {
                    atual.anterior.proximo = atual.proximo;
                }
                if (atual.proximo !== null) {
                    atual.proximo.anterior = atual.anterior;
                }
                this.tamanho--;
                if (atual.proximo === null) {
                    this.cauda = atual.anterior;
                }
                break;
            }
            atual = atual.proximo;
        }
        if (this.tamanho < 8 && atual === null) {
            alert("O elemento n\xe3o foi encontrado na lista.");
        }
    }
    buscarPorPosicao(posicao) {
        if (posicao <= 0 || posicao > this.tamanho) {
            return null;
        }
        const metadeLista = Math.floor(this.tamanho / 2);
        if (posicao < metadeLista) {
            let atual = this.cabeca;
            for(let i = 1; i < posicao; i++){
                atual = atual.proximo;
            }
            return atual;
        }
        let atual = this.cauda;
        for(let i = this.tamanho; i > posicao; i--){
            atual = atual.anterior;
        }
        return atual;
    }
    buscarPorValor(valor) {
        let atual = this.cabeca;
        let index = 1;
        while(atual !== null){
            if (atual.valor === valor) {
                return index;
            }
            index++;
            atual = atual.proximo;
        }
        return null;
    }
    toArray() {
        const elementos = [];
        let atual = this.cabeca;
        while(atual !== null){
            elementos.push(atual.valor);
            atual = atual.proximo;
        }
        return elementos;
    }
}

;// CONCATENATED MODULE: ./src/components/box/boxListaDuplamenteEncadeada/styles.ts

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

    width: 90%;
    height: 85%;

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
//Cauda - style
const Cauda = (external_styled_components_default()).div`
    display: flex;
    position: absolute;
    top: 0;
    right: 0;

    margin-top: 1%;
    margin-right: .5%;
`;
const ContainerCauda = (external_styled_components_default()).div`
    background-color: #fff;
`;
const CaseCauda = (external_styled_components_default()).div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 80px;
    height: 55px;
    border-radius: 8px;
`;
const ContentCauda = (external_styled_components_default()).div`
    background-color: #fff;

    width: 90%;
    height: 85%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const TitleCauda = (external_styled_components_default()).label`
    background-color: #fff;
    font-size: 12px;
`;
const BoxNumberCauda = (external_styled_components_default()).h4`
    background-color: #fff;
`;
const ContainerIconCauda = (external_styled_components_default()).div`
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

// EXTERNAL MODULE: external "react-icons/io5"
var io5_ = __webpack_require__(989);
;// CONCATENATED MODULE: ./src/components/box/boxListaDuplamenteEncadeada/index.tsx


//styles

//icon

const BoxListaDuplamenteEncadeada = ({ myList  })=>{
    let cabeca = myList.getCabeca();
    let cauda = myList.getCauda();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styles_Container, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(ContainerTitle, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(TitleList, {
                    children: "Lista Duplamente Encadeada"
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
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styles_Content, {
                        children: [
                            myList.toArray().map((value, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
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
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(ContainerArrowRight, {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(io5_.IoRepeatSharp, {
                                                    style: {
                                                        backgroundColor: "#fff"
                                                    },
                                                    size: 30,
                                                    color: "#000"
                                                })
                                            })
                                        }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {})
                                    ]
                                })),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Cauda, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(ContainerCauda, {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(CaseCauda, {
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ContentCauda, {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(TitleCauda, {
                                                        children: "Tail Value"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(BoxNumberCauda, {
                                                        children: [
                                                            " ",
                                                            cauda?.valor,
                                                            " "
                                                        ]
                                                    })
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(ContainerIconCauda, {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(io5_.IoReturnDownBackSharp, {
                                            style: {
                                                backgroundColor: "#fff"
                                            },
                                            size: 60,
                                            color: "#000"
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const boxListaDuplamenteEncadeada = (BoxListaDuplamenteEncadeada);

;// CONCATENATED MODULE: ./src/components/form/formLDE/index.tsx


//style

//list-sequential

//components

const FormLDE = ()=>{
    const [posAdd, setPosAdd] = (0,external_react_.useState)("");
    const [valueAdd, setValueAdd] = (0,external_react_.useState)("");
    const [posRemove, setPosRemove] = (0,external_react_.useState)("");
    const [valueRemove, setValueRemove] = (0,external_react_.useState)("");
    const [posSearch, setPosSearch] = (0,external_react_.useState)("");
    const [valueSearch, setValueSearch] = (0,external_react_.useState)("");
    const [lista, setLista] = (0,external_react_.useState)(new ListaDuplamenteEncadeada());
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
        let posi = null;
        let no = null;
        if (position !== "") {
            if (!isNaN(parseInt(position))) {
                no = lista.buscarPorPosicao(parseInt(position));
                alert(`O valor da posição ${position} é ${no?.valor}`);
                setLista(lista);
                setPosSearch("");
            }
        } else if (val !== "") {
            if (!isNaN(parseInt(val))) {
                let index = lista.buscarPorValor(parseInt(val));
                setLista(lista);
                setValueSearch("");
                if (index === null) {
                    alert(`O valor ${val} não está na lista`);
                } else {
                    alert(`O valor ${val} está na lista na posição ${index.valueOf()}`);
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
            /*#__PURE__*/ jsx_runtime_.jsx(boxListaDuplamenteEncadeada, {
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
/* harmony default export */ const formLDE = (FormLDE);

// EXTERNAL MODULE: ./src/components/button/index.tsx + 1 modules
var components_button = __webpack_require__(254);
;// CONCATENATED MODULE: ./src/pages/listaDuplamenteEncadeada/index.tsx


//styles

//img

//components



const listaDuplamenteEncadeada_ListaDuplamenteEncadeada = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styles.Container, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(menu/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(formLDE, {}),
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
/* harmony default export */ const listaDuplamenteEncadeada = (listaDuplamenteEncadeada_ListaDuplamenteEncadeada);


/***/ }),

/***/ 826:
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
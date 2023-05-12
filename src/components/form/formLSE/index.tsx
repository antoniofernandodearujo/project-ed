import React, { useState } from "react"
//style
import * as S from "./styles"
//list-sequential
import { ListaSimplesmenteEncadeada } from "@/src/core/ListaSimplesmenteEncadeada"
//components
import BoxListaSimplesmenteEncadeada from "../../box/boxListaSimplesmenteEncadeada"

const FormLSE: React.FC = () => {
    const [posAdd, setPosAdd] = useState<string>("")
    const [valueAdd, setValueAdd] = useState<string>("")
    const [posRemove, setPosRemove] = useState<string>("")
    const [valueRemove, setValueRemove] = useState<string>("")
    const [posSearch, setPosSearch] = useState<string>("")
    const [valueSearch, setValueSearch] = useState<string>("")

    const [lista, setLista] = useState(new ListaSimplesmenteEncadeada());
    
    function adicionarValor() {
        const valorNumerico = parseInt(valueAdd);
    
        if(!isNaN(valorNumerico)) {
            const posicaoNumerica = parseInt(posAdd)
            lista.adicionar(valorNumerico, posicaoNumerica)
            setLista(lista)
        }
    
        setValueAdd("");
        setPosAdd("");
    }

    function remove() {
        const position = posRemove;
        const val = valueRemove;
    
        if(position !== "") {
            if(!isNaN(parseInt(position))) {
                lista.removerPorPosicao(parseInt(position))
                setLista(lista)
                setPosRemove("")
            }
        } else if(val !== "") {
            if(!isNaN(parseInt(val))) {
                lista.removerPorValor(parseInt(val));
                setLista(lista);
                setValueRemove("");
            }
        }
    }

    function search () {
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
        setPosAdd("")
        setValueAdd("")
        setPosRemove("")
        setValueRemove("")
        setPosSearch("")
        setValueSearch("")
    }
    
    return (
        <>
            <BoxListaSimplesmenteEncadeada myList={lista}/>
            <S.Container>
                <S.Content>          
                    <S.Area>
                        <S.AreaInput>
                            <S.AreaTextAndInput>
                                <S.Text>* Valor</S.Text>
                                <S.Input type="text" value={valueAdd} onChange={(e) => setValueAdd(e.target.value)}/>
                            </S.AreaTextAndInput>

                            <S.AreaTextAndInput>
                                <S.Text>* Posição</S.Text>
                                <S.Input type="text" value={posAdd} onChange={(e) => setPosAdd(e.target.value)} style={{ marginLeft: '3%' }} />
                            </S.AreaTextAndInput>
                        </S.AreaInput>
                        <S.Button 
                            onClick={adicionarValor}
                            style={{ marginTop: '4%', marginLeft: '1.2%' }} type="button"
                        >
                            Inserir
                        </S.Button>
                    </S.Area>

                    <S.Area>
                        <S.AreaInput>
                            <S.AreaTextAndInput>
                                <S.Text>Valor</S.Text>
                                <S.Input type="text" value={valueRemove} onChange={(e) => setValueRemove(e.target.value)}/>
                            </S.AreaTextAndInput>
                            <S.AreaTextAndInput>
                                <S.Text>Posição</S.Text>
                                <S.Input type="text" value={posRemove} onChange={(e) => setPosRemove(e.target.value)} style={{ marginLeft: '3%' }} />
                            </S.AreaTextAndInput>
                        </S.AreaInput>
                        <S.Button 
                            style={{ marginTop: '4%', marginLeft: '1.2%' }} type="button"
                            onClick={remove}
                        >
                            Remover
                        </S.Button>
                    </S.Area>

                    <S.Area>
                        <S.AreaInput>
                            <S.AreaTextAndInput>
                                <S.Text>* Posição</S.Text>
                                <S.Input value={posSearch} onChange={(e) => setPosSearch(e.target.value)} type="text"/>
                            </S.AreaTextAndInput>
                        </S.AreaInput>
                        <S.Button onClick={search} style={{ marginTop: '4%' }} type="button">Buscar Posição</S.Button>
                    </S.Area>

                    <S.Area>
                            <S.AreaTextAndInput>
                                <S.Text>* Valor</S.Text>
                                <S.Input value={valueSearch} onChange={(e) => setValueSearch(e.target.value)} type="text"/>
                            </S.AreaTextAndInput>
                        <S.Button onClick={search} style={{ marginTop: '4%' }} type="button">Buscar Valor</S.Button>    
                    </S.Area>
                
                    <S.ContainerButton>
                        <S.Button onClick={reset} style={{ marginTop: '4%' }} type="button">Reset</S.Button>
                    </S.ContainerButton>        
                </S.Content>
            </S.Container>
        </>
    )
}

export default FormLSE
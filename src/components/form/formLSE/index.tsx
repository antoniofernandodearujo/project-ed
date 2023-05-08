import React, { useState } from "react"
//style
import * as S from "./styles"
//list-sequential
import { ListaSimplesmenteEncadeada } from "@/src/core/ListaSimplesmenteEncadeada"
//components
import BoxListaSimplesmenteEncadeada from "../../box/boxListaSimplesmenteEncadeada"

const FormLSE: React.FC = () => {
    const [pos, setPos] = useState<string>("")
    const [value, setValue] = useState<string>("")
    const [lista, setLista] = useState(new ListaSimplesmenteEncadeada());
    
    function adicionarValor() {
        const valorNumerico = parseInt(value);
    
        if (!isNaN(valorNumerico)) {
            const posicaoNumerica = parseInt(pos)
            lista.adicionar(valorNumerico, posicaoNumerica)
            setLista(lista)
        }
    
        setValue("");
        setPos("");
    }

    function remove() {
        const position = pos;
        const val = value;
    
        if(position !== "") {
            if(!isNaN(parseInt(position))) {
                lista.removerPorPosicao(parseInt(position))
                setLista(lista)
                setPos("")
            }
        } else if(val !== "") {
            if(!isNaN(parseInt(val))) {
                lista.removerPorValor(parseInt(val));
                setLista(lista);
                setValue("");
            }
        }
    }

    function search () {
        const position = pos;
        const val = value;
        let no = null;
    
        if (position !== "") {
            if (!isNaN(parseInt(position))) {
                no = lista.buscarPorPosicao(parseInt(position));
                console.log(`O valor da posição ${position} é ${no?.valor}`);
                setLista(lista);
                setPos("");
            }
        } else if (val !== "") {
            if (!isNaN(parseInt(val))) {
                no = lista.buscarPorValor(parseInt(val));
                setLista(lista);
                setValue("");
    
                if (no === null) {
                    console.log(`O valor ${val} não está na lista`);
                } else {
                    console.log(`O valor ${val} está na lista`);
                }
            }
        }
    }
    
    return (
        <>
            <BoxListaSimplesmenteEncadeada myList={lista}/>
            <S.Container>
                <S.Content>          
                    <S.Area>
                        <S.AreaInput>
                            <S.Input type="text" onChange={(e) => setValue(e.target.value)}/>
                            <S.Input type="text" onChange={(e) => setPos(e.target.value)} style={{ marginLeft: '3%' }} />
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
                            <S.Input type="text" onChange={(e) => setValue(e.target.value)}/>
                            <S.Input type="text" onChange={(e) => setPos(e.target.value)} style={{ marginLeft: '3%' }} />
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
                            <S.Input onChange={(e) => setPos(e.target.value)} type="text"/>
                        </S.AreaInput>
                        <S.Button onClick={search} style={{ marginTop: '4%' }} type="button">Buscar Posição</S.Button>
                    </S.Area>

                    <S.Area>
                        <S.AreaInput>
                            <S.Input onChange={(e) => setValue(e.target.value)} type="text"/>
                        </S.AreaInput>
                        <S.Button onClick={search} style={{ marginTop: '4%' }} type="button">Buscar Valor</S.Button>    
                    </S.Area>
                
                    <S.ContainerButton>
                        <S.Button style={{ marginTop: '4%' }} type="button">Reset</S.Button>
                    </S.ContainerButton>        
                </S.Content>
            </S.Container>
        </>
    )
}

export default FormLSE
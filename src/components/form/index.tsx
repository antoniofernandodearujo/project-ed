import React, { useState } from "react"
//style
import * as S from "./styles"
//list-sequential
import { ListaSequencial } from "@/src/core/ListaSequencial"
//components
import Box from "../box"

const Form: React.FC = () => {
    const [posAdd, setPosAdd] = useState<string>("")
    const [valueAdd, setValueAdd] = useState<string>("")
    const [posRemove, setPosRemove] = useState<string>("")
    const [valueRemove, setValueRemove] = useState<string>("")
    const [posSearch, setPosSearch] = useState<string>("")
    const [valueSearch, setValueSearch] = useState<string>("")

    const [myList, setMyList] = useState(new ListaSequencial(8, [1, 3, 5, 4, 5, 6, 8, 7]))

    function handleAddNumber() {
 
        if(valueAdd === "" && posAdd === ""){
            alert("Digite um valor válido")
            return
        }

        if(isNaN(parseInt(valueAdd)) || isNaN(parseInt(posAdd))) {
            alert("Digite um valor válido")
            return
        }

        const num = parseInt(valueAdd)
        const position = parseInt(posAdd)

        myList.addInList(num, position)
        setMyList(new ListaSequencial(myList.max, myList.listNumbers))
        setPosAdd("")
        setValueAdd("")
        console.log(myList)
    }

    function handleRemoveNumber() {
        const num = parseInt(valueRemove)
        const position = parseInt(posRemove) 
        
        if(valueRemove !== "")
            myList.removeInList(num, undefined)
        
        if(posRemove !== "") 
            myList.removeInList(undefined, position)

        setMyList(new ListaSequencial(myList.max, myList.listNumbers))
        setPosRemove("")
        setValueRemove("")
    }

    function handleSearchNumber() {

        const num = parseInt(valueSearch)
        const position = parseInt(posSearch)

        if(isNaN(num) || isNaN(position)) {
            alert("Digite um valor válido")
            return
        }

        if(valueSearch !== "")
            myList.searchInList(num, undefined)
        
        if(posSearch !== "") 
            myList.searchInList(undefined, position)

        setMyList(new ListaSequencial(myList.max, myList.listNumbers))
        setValueSearch("")
        setPosSearch("")
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
            <Box myList={myList}/>
            <S.Container>
                <S.Content>          
                    <S.Area>
                        <S.AreaInput>
                            <S.Input type="text" value={valueAdd} onChange={(e) => setValueAdd(e.target.value)}/>
                            <S.Input type="text" value={posAdd} onChange={(e) => setPosAdd(e.target.value)} style={{ marginLeft: '3%' }} />
                        </S.AreaInput>
                        <S.Button 
                            onClick={handleAddNumber} 
                            style={{ marginTop: '4%', marginLeft: '1.2%' }} type="button"
                        >
                            Inserir
                        </S.Button>
                    </S.Area>

                    <S.Area>
                        <S.AreaInput>
                            <S.Input type="text" value={valueRemove} onChange={(e) => setValueRemove(e.target.value)}/>
                            <S.Input type="text" value={posRemove} onChange={(e) => setPosRemove(e.target.value)} style={{ marginLeft: '3%' }} />
                        </S.AreaInput>
                        <S.Button 
                            style={{ marginTop: '4%', marginLeft: '1.2%' }} type="button"
                            onClick={handleRemoveNumber}
                        >
                            Remover
                        </S.Button>
                    </S.Area>

                    <S.Area>
                        <S.AreaInput>
                            <S.Input value={posSearch} onChange={(e) => setPosSearch(e.target.value)} type="text"/>
                        </S.AreaInput>
                        <S.Button onClick={handleSearchNumber} style={{ marginTop: '4%' }} type="button">Buscar Posição</S.Button>
                    </S.Area>

                    <S.Area>
                        <S.AreaInput>
                            <S.Input value={valueSearch} onChange={(e) => setValueSearch(e.target.value)} type="text"/>
                        </S.AreaInput>
                        <S.Button onClick={handleSearchNumber} style={{ marginTop: '4%' }} type="button">Buscar Valor</S.Button>    
                    </S.Area>
                
                    <S.ContainerButton>
                        <S.Button  onClick={reset} style={{ marginTop: '4%' }} type="button">Reset</S.Button>
                    </S.ContainerButton>        
                </S.Content>
            </S.Container>
        </>
    )
}

export default Form
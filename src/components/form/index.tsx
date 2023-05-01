import React, { useState } from "react"
//style
import * as S from "./styles"
//list-sequential
import { ListaSequencial } from "@/src/core/ListaSequencial"
//components
import Box from "../box"

const Form: React.FC = () => {
    const [pos, setPos] = useState<string>("")
    const [value, setValue] = useState<string>("")
    const [myList, setMyList] = useState(new ListaSequencial(8, [1, 3, 5]))

    function handleAddNumber() {
        const num = parseInt(value)
        const position = parseInt(pos)
        myList.addInList(num, position)
        setMyList(new ListaSequencial(myList.max, myList.listNumbers))
        setPos("")
        setValue("")
        console.log(myList)
    }

    function handleRemoveNumber() {
        const num = parseInt(value)
        const position = parseInt(pos) 
        
        if(value !== "")
            myList.removeInList(num, undefined)
        
        if(pos !== "") 
            myList.removeInList(undefined, position)

        setMyList(new ListaSequencial(myList.max, myList.listNumbers))
        setPos("")
        setValue("")
    }

    function handleSearchNumber() {
        const num = parseInt(value)
        const position = parseInt(pos)
        if(value !== "")
            myList.searchInList(num, undefined)
        
        if(pos !== "") 
            myList.searchInList(undefined, position)

        setMyList(new ListaSequencial(myList.max, myList.listNumbers))
        setPos("")
        setValue("")
    }

    return (
        <>
            <Box myList={myList}/>
            <S.Container>
                <S.Content>          
                    <S.Area>
                        <S.AreaInput>
                            <S.Input type="text" onChange={(e) => setValue(e.target.value)}/>
                            <S.Input type="text" onChange={(e) => setPos(e.target.value)} style={{ marginLeft: '3%' }} />
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
                            <S.Input type="text" onChange={(e) => setValue(e.target.value)}/>
                            <S.Input type="text" onChange={(e) => setPos(e.target.value)} style={{ marginLeft: '3%' }} />
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
                            <S.Input onChange={(e) => setPos(e.target.value)} type="text"/>
                        </S.AreaInput>
                        <S.Button onClick={handleSearchNumber} style={{ marginTop: '4%' }} type="button">Buscar Posição</S.Button>
                    </S.Area>

                    <S.Area>
                        <S.AreaInput>
                            <S.Input onChange={(e) => setValue(e.target.value)} type="text"/>
                        </S.AreaInput>
                        <S.Button onClick={handleSearchNumber} style={{ marginTop: '4%' }} type="button">Buscar Valor</S.Button>    
                    </S.Area>
                
                    <S.ContainerButton>
                        <S.Button style={{ marginTop: '4%' }} type="button">Reset</S.Button>
                    </S.ContainerButton>        
                </S.Content>
            </S.Container>
        </>
    )
}

export default Form
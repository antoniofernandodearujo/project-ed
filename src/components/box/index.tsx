import React, { useState } from "react"
//styles
import * as S from "./styles"
//list-sequential
import { ListaSequencial } from "@/src/core/ListaSequencial";

const Box: React.FC<{ myList: ListaSequencial }> = ({myList}) => {

    const orangeBoxes = Array.from({length: myList.max}, (_, i) => (
        <S.ContainerAll key={i}>
            <S.Title>{i + 1}°</S.Title>
            <S.Case>
                <S.BoxNumber>[ {myList.listNumbers[i] ?? "null"} ]</S.BoxNumber>
            </S.Case>
        </S.ContainerAll>
    ))

    return (
        <S.Container>

            <S.ContainerTitle>
                <S.TitleList>Lista Sequencial</S.TitleList>
            </S.ContainerTitle>

            <S.ContainerNumberMax>
                <S.Title style={{ backgroundColor: '#FF9A02', color: '#fff' }}>MAX: {myList.listNumbers.length}</S.Title>
            </S.ContainerNumberMax>

            <S.Box>
                <S.Content>
                    {orangeBoxes}
                </S.Content>
            </S.Box>
        </S.Container>
    )
}

export default Box
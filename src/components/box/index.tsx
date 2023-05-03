import React, { useState } from "react"
//styles
import * as S from "./styles"
//list-sequential
import { ListaSequencial } from "@/src/core/ListaSequencial";

const Box: React.FC<{ myList: ListaSequencial }> = ({myList}) => {

    return (
        <S.Container>

            <S.ContainerTitle>
                <S.TitleList>Lista Sequencial</S.TitleList>
            </S.ContainerTitle>

            <S.Box>
                <S.Content>
                    {myList.listNumbers.map((num, index) => (
                        <S.ContainerAll key={index}>
                        <S.Title>{index + 1}°</S.Title>
                            <S.Case>
                                <S.BoxNumber>[ {num} ]</S.BoxNumber>
                            </S.Case>
                        </S.ContainerAll>
                    ))}
                </S.Content>
            </S.Box>
        </S.Container>
    )
}

export default Box
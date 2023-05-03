import React, { useState } from "react"
//styles
import * as S from "./styles"
//icon
import { IoArrowForwardOutline, IoReturnDownForwardSharp } from "react-icons/io5";
//class LSE
import { ListaSimplesmenteEncadeada } from "@/src/core/ListaSimplesmenteEncadeada";
//animation
import { animated, useSpring } from "react-spring"

const BoxListaSimplesmenteEncadeada: React.FC<{ myList: ListaSimplesmenteEncadeada }> = ({ myList }) => {

    let cabeca = myList.getCabeca()
    const [showArrow, setShowArrow] = useState<boolean>(false)

    return(
        <S.Container>
            <S.Box>
                <S.Header>
                    <S.ContainerHeader>
                        <S.CaseHeader>
                            <S.ContentHeader>
                                <S.TitleHeader>Head Value</S.TitleHeader>
                                <S.BoxNumberHeader> { cabeca?.valor } </S.BoxNumberHeader>    
                            </S.ContentHeader>
                        </S.CaseHeader>
                    </S.ContainerHeader>

                    <S.ContainerIconHeader>
                        <IoReturnDownForwardSharp style={{ backgroundColor: '#fff' }} size={95} color="#000"  />
                    </S.ContainerIconHeader>

                </S.Header>

                <S.Content>
               
                    {myList.toArray().map((value, index) => (
                        <>
                            <S.ContainerAll key={index}>
                                <S.Title>{index + 1}°</S.Title>
                                <S.Case>
                                    <S.BoxNumber>[ {value} ]</S.BoxNumber>
                                </S.Case>
                                
                            </S.ContainerAll>

                            {
                                index + 1 <= 1 ?
                                    null
                                :
                                    <IoArrowForwardOutline />
                            }

                            
                        </>
                    ))}

                </S.Content>
            </S.Box>
        </S.Container>
    )
}

export default BoxListaSimplesmenteEncadeada
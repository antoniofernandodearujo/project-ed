import React from "react"
//styles
import * as S from "./styles"
//icon
import { IoArrowForwardOutline, IoReturnDownForwardSharp } from "react-icons/io5";

const BoxListaSimplesmenteEncadeada: React.FC = () => {

    return(
        <S.Container>
            <S.Box>
                <S.Header>
                    <S.ContainerHeader>
                        <S.CaseHeader>
                            <S.ContentHeader>
                                <S.TitleHeader>Head Value</S.TitleHeader>
                                <S.BoxNumberHeader> 10 </S.BoxNumberHeader>    
                            </S.ContentHeader>
                        </S.CaseHeader>
                    </S.ContainerHeader>

                    <S.ContainerIconHeader>
                        <IoReturnDownForwardSharp style={{ backgroundColor: '#fff' }} size={95} color="#000"  />
                    </S.ContainerIconHeader>

                </S.Header>

                <S.Content>
                    <S.ContainerAll>
                        <S.Title>1°</S.Title>
                        <S.Case>
                            <S.BoxNumber>[ 10 ]</S.BoxNumber>
                        </S.Case>
                    </S.ContainerAll>

                    <S.ContainerArrowRight>
                        <IoArrowForwardOutline style={{ backgroundColor: '#fff' }} size={30} color="#000" />
                    </S.ContainerArrowRight>

                    <S.ContainerAll>
                        <S.Title>1°</S.Title>
                        <S.Case>
                            <S.BoxNumber>[ 10 ]</S.BoxNumber>
                        </S.Case>
                    </S.ContainerAll>

                    <S.ContainerArrowRight>
                        <IoArrowForwardOutline style={{ backgroundColor: '#fff' }} size={30} color="#000" />
                    </S.ContainerArrowRight>

                    <S.ContainerAll>
                        <S.Title>1°</S.Title>
                        <S.Case>
                            <S.BoxNumber>[ 10 ]</S.BoxNumber>
                        </S.Case>
                    </S.ContainerAll>

                    <S.ContainerArrowRight>
                        <IoArrowForwardOutline style={{ backgroundColor: '#fff' }} size={30} color="#000" />
                    </S.ContainerArrowRight>

                    <S.ContainerAll>
                        <S.Title>1°</S.Title>
                        <S.Case>
                            <S.BoxNumber>[ 10 ]</S.BoxNumber>
                        </S.Case>
                    </S.ContainerAll>

                    <S.ContainerArrowRight>
                        <IoArrowForwardOutline style={{ backgroundColor: '#fff' }} size={30} color="#000" />
                    </S.ContainerArrowRight>

                    <S.ContainerAll>
                        <S.Title>1°</S.Title>
                        <S.Case>
                            <S.BoxNumber>[ 10 ]</S.BoxNumber>
                        </S.Case>
                    </S.ContainerAll>

                    <S.ContainerArrowRight>
                        <IoArrowForwardOutline style={{ backgroundColor: '#fff' }} size={30} color="#000" />
                    </S.ContainerArrowRight>

                    <S.ContainerAll>
                        <S.Title>1°</S.Title>
                        <S.Case>
                            <S.BoxNumber>[ 10 ]</S.BoxNumber>
                        </S.Case>
                    </S.ContainerAll>

                    <S.ContainerArrowRight>
                        <IoArrowForwardOutline style={{ backgroundColor: '#fff' }} size={30} color="#000" />
                    </S.ContainerArrowRight>

                    <S.ContainerAll>
                        <S.Title>1°</S.Title>
                        <S.Case>
                            <S.BoxNumber>[ 10 ]</S.BoxNumber>
                        </S.Case>
                    </S.ContainerAll>

                    <S.ContainerArrowRight>
                        <IoArrowForwardOutline style={{ backgroundColor: '#fff' }} size={30} color="#000" />
                    </S.ContainerArrowRight>

                    <S.ContainerAll>
                        <S.Title>1°</S.Title>
                        <S.Case>
                            <S.BoxNumber>[ 10 ]</S.BoxNumber>
                        </S.Case>
                    </S.ContainerAll>
                </S.Content>
            </S.Box>
        </S.Container>
    )
}

export default BoxListaSimplesmenteEncadeada
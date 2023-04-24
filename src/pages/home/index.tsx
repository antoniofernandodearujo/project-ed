import React from 'react'
//styles
import * as S from './styles'
//img
import img from "./assets/Background-Wave-1.png"
//components
import Button from "../../components/button"

const Principal: React.FC = () => {
    return (
        <S.Container>
            <S.Content>
                <S.Title>ESTRUTURA DE DADOS</S.Title>
            </S.Content>

            <S.ContainerButton>
                <S.Button type="button">Começar</S.Button>
            </S.ContainerButton>
            
            <S.Footer>
                <S.Image src={img.src}/>
                <Button />
            </S.Footer>
        </S.Container>
    )
}

export default Principal
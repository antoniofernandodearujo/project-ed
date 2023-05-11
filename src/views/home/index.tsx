import React from 'react'
//styles
import * as S from './styles'
//img
import img from "./assets/Background-Wave-1.png"
//components
import Button from "../../components/button"
//route
import { NavLink } from "react-router-dom"

const Principal: React.FC = () => {
    return (
        <S.Container>
            <S.Content>
                <S.Title>ESTRUTURA DE DADOS</S.Title>
            </S.Content>

            <S.ContainerButton>
                <NavLink to="/welcome"> <S.Button type="button">Começar</S.Button> </NavLink>
            </S.ContainerButton>
            
            <S.Footer>
                <S.Image src={img.src}/>
                <Button type={2} />
            </S.Footer>
        </S.Container>
    )
}

export default Principal
import React from 'react'
//styles
import * as S from './styles'
//components
import ModalInitial from '@/src/components/modal/modalInitial'
import Menu from '@/src/components/menu'
//img
import img from "./assets/person.jpeg"

const Welcome: React.FC = () => {
    
    return (
        <S.Container>
            <S.Content>
                <Menu />
                
                <S.Text> 
                    Hey! Escolha a Estrutura de Dados
                    utilizando o Menu.
                </S.Text>

                <S.Image src={img.src}/>

            </S.Content>

            <ModalInitial />

        </S.Container>
    )
}

export default Welcome
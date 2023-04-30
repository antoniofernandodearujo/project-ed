import React, { useState } from "react"
//style
import * as S from "./styles"

const Form: React.FC = () => {

    const [pos, setPos] = useState<string>("")
    const [value, setValue] = useState<string>("")

    return (
        <S.Container>
            <S.Content>          
                <S.Area>
                    <S.AreaInput>
                        <S.Input type="text"/>
                        <S.Input style={{ marginLeft: '3%' }} type="text"/>
                    </S.AreaInput>
                    <S.Button style={{ marginTop: '4%', marginLeft: '1.2%' }} type="button">Inserir</S.Button>
                </S.Area>

                <S.Area>
                    <S.AreaInput>
                        <S.Input type="text"/>
                        <S.Input style={{ marginLeft: '3%' }} type="text"/>
                    </S.AreaInput>
                    <S.Button style={{ marginTop: '4%', marginLeft: '1.2%' }} type="button">Remover</S.Button>
                </S.Area>

                <S.Area>
                    <S.AreaInput>
                        <S.Input type="text"/>
                    </S.AreaInput>
                    <S.Button style={{ marginTop: '4%' }} type="button">Buscar Posição</S.Button>
                </S.Area>

                <S.Area>
                    <S.AreaInput>
                        <S.Input type="text"/>
                    </S.AreaInput>
                    <S.Button style={{ marginTop: '4%' }} type="button">Buscar Valor</S.Button>    
                </S.Area>
            
                <S.ContainerButton>
                    <S.Button style={{ marginTop: '4%' }} type="button">Reset</S.Button>
                </S.ContainerButton>        
            </S.Content>
        </S.Container>
    )
}

export default Form
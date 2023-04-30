import React from "react"

//components
import Menu from "@/src/components/menu"
import Box from "@/src/components/box"
import Form from "@/src/components/form"
import Button from "@/src/components/button"
//styles
import * as S from "./styles"
//img
import img from "./assets/vector.png"

const ListSequential: React.FC = () => {
    return (
        <S.Container>
            <Menu />
            <Box />
            <Form />
            <S.Footer>
                <S.Image src={img.src}/>
                <S.ContainerButton>
                    <Button type={2}/>
                </S.ContainerButton>
            </S.Footer>
        </S.Container>
    )
}

export default ListSequential
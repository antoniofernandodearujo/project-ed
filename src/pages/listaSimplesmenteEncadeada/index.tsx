import React from "react"
//styles
import * as S from "./styles"
//img
import img from "../assets/vector.png"
//components
import Menu from "@/src/components/menu"
import BoxListaSimplesmenteEncadeada from "@/src/components/box/boxListaSimplesmenteEncadeada"
import Form from "@/src/components/form"
import Button from "@/src/components/button"

const ListaSimplesmenteEncadeada: React.FC = () => {
  return (
    <S.Container>
      <Menu />
      <BoxListaSimplesmenteEncadeada />
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

export default ListaSimplesmenteEncadeada

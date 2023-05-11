import React from "react"
//styles
import * as S from "./styles"
//img
import img from "../assets/vector.png"
//components
import Menu from "@/src/components/menu"
import FormLSE from "@/src/components/form/formLSE"
import Button from "@/src/components/button"

const ListaSimplesmenteEncadeada: React.FC = () => {
  return (
    <S.Container>
      <Menu />
      <FormLSE />
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

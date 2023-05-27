// Pilha.tsx
import React, { useState } from "react"
//styles
import * as S from "./styles";
//img
import img from "../assets/vector.png";
//components
import BoxPilha from "@/src/components/box/boxPilha/"
import FormPilha from "@/src/components/form/formPilha/"
import Menu from "@/src/components/menu/"
import Button from "@/src/components/button/"

const Pilha: React.FC = () => {

  const [pilha, setPilha] = useState<number[]>([]);

  const adicionarValor = (valor: number) => {
    setPilha((prevPilha) => [...prevPilha, valor]);
  };

  const removerValor = () => {
    setPilha((prevPilha) => prevPilha.slice(0, -1));
  };

  return (
    <S.Container>
      <Menu />
      <S.ContainerPilha>
        <BoxPilha pilha={pilha} />
        <FormPilha pilha={pilha} adicionarValor={adicionarValor} removerValor={removerValor} />
      </S.ContainerPilha>
      <S.Footer>
        <S.Image src={img.src} />
        <S.ContainerButton>
          <Button type={2} />
        </S.ContainerButton>
      </S.Footer>
    </S.Container>
  );
};

export default Pilha;

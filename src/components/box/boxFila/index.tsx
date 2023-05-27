import React, { useState } from "react";
import { useTransition, animated } from "react-spring";
import * as S from "./styles";
import { IoRepeatSharp, IoReturnDownForwardSharp, IoReturnDownBackSharp } from "react-icons/io5";

interface BoxFilaProps {
  fila: number[];
}

const BoxFila: React.FC<BoxFilaProps> = ({ fila }) => {
  const transitions = useTransition(fila, {
    from: { opacity: 0, transform: "translate3d(0, 10px, 0)" },
    enter: { opacity: 1, transform: "translate3d(0, 0, 0)" },
    leave: { opacity: 0, transform: "translate3d(0, -10px, 0)" },
  });

  return (
    <S.Container>
      <S.ContainerTitle>
        <S.TitleList>Fila</S.TitleList>
      </S.ContainerTitle>

      <S.Box>
        <S.Header>
          <S.ContainerHeader>
            <S.CaseHeader>
              <S.ContentHeader>
                <S.TitleHeader>Initial Value</S.TitleHeader>
                <S.BoxNumberHeader>{fila.length > 0 ? fila[0] : ""}</S.BoxNumberHeader>
              </S.ContentHeader>
            </S.CaseHeader>
          </S.ContainerHeader>

          <S.ContainerIconHeader>
            <IoReturnDownForwardSharp style={{ backgroundColor: '#fff' }} size={60} color="#000" />
          </S.ContainerIconHeader>
        </S.Header>

        <S.Content>
          {transitions((style, item) => (
            <animated.div style={style}>
              <S.Elemento>{item}</S.Elemento>
            </animated.div>
          ))}

          <S.Cauda>
            <S.ContainerCauda>
              <S.CaseCauda>
                <S.ContentCauda>
                  <S.TitleCauda>End Value</S.TitleCauda>
                  <S.BoxNumberCauda> {fila[fila.length - 1] || "?"} </S.BoxNumberCauda>
                </S.ContentCauda>
              </S.CaseCauda>
            </S.ContainerCauda>

            <S.ContainerIconCauda>
              <IoReturnDownBackSharp style={{ backgroundColor: '#fff' }} size={60} color="#000"  />
            </S.ContainerIconCauda>
          </S.Cauda>

        </S.Content>
      </S.Box>
    </S.Container>
  );
};

export default BoxFila;

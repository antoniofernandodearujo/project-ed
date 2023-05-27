import React, { useEffect, useState } from "react";
import { useTransition, animated } from "react-spring";
import * as S from "./styles";

interface BoxPilhaProps {
  pilha: number[];
}

const BoxPilha: React.FC<BoxPilhaProps> = ({ pilha }) => {
  const [topo, setTopo] = useState<number | null>(null);

  useEffect(() => {
    if (pilha.length > 0) {
      setTopo(pilha[pilha.length - 1]);
    } else {
      setTopo(null);
    }
  }, [pilha]);

  const reversedPilha = [...pilha].reverse(); // Inverte a ordem dos elementos da pilha

  const transitions = useTransition(reversedPilha, {
    key: (item: any) => item,
    from: { opacity: 0, transform: "translate3d(0, -10px, 0)" },
    enter: { opacity: 1, transform: "translate3d(0, 0, 0)" },
    leave: { opacity: 0, transform: "translate3d(0, -10px, 0)" },
    update: { opacity: 1, transform: "translate3d(0, 0, 0)" }
  })

  

  return (
    <S.Container>
      <S.ContainerTitle>
        <S.TitleList>Pilha</S.TitleList>
      </S.ContainerTitle>

      <S.Box>

        {topo !== null && (
          <S.TopoPilha>
            <S.TopoPilhaText>Topo: {topo}</S.TopoPilhaText>
          </S.TopoPilha>
        )}

        {transitions((style, item) => (
          <animated.div
            style={{
              ...style,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "70px",
              height: "50px",
              backgroundColor: "#FF9A02",
              borderRadius: "10px",
              marginBottom: "5px",
            }}
            key={item}
          >
            <h3 style={{ color: '#fff' }}>{item}</h3>
          </animated.div>
        ))}
      </S.Box>
    </S.Container>
  );
};

export default BoxPilha;

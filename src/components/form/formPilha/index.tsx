// FormPilha.tsx
import React, { useState } from "react";
import { useTransition, animated } from "react-spring";
import * as S from "./styles";

interface FormPilhaProps {
  pilha: number[];
  adicionarValor: (valor: number) => void;
  removerValor: () => void;
}

const FormPilha: React.FC<FormPilhaProps> = ({ pilha, adicionarValor, removerValor }) => {
  const [valor, setValor] = useState<number>(0);

  const transitions = useTransition(pilha, {
    from: { opacity: 0, transform: "translate3d(0, -10px, 0)" },
    enter: { opacity: 1, transform: "translate3d(0, 0, 0)" },
    leave: { opacity: 0, transform: "translate3d(0, -10px, 0)" },
  });

  const handleAdicionarValor = () => {
    adicionarValor(valor);
    setValor(0); // Limpa o valor do campo de entrada
  };

  const handleRemoverValor = () => {
    removerValor();
  };

  return (
    <S.Container>
      <S.Content>        
        <S.Area>
          <S.AreaInput>
            <S.AreaTextAndInput>
              <S.Text>* Valor</S.Text>
              <S.Input type="text" value={valor} onChange={(e) => setValor(Number(e.target.value))} />
            </S.AreaTextAndInput>
          </S.AreaInput>
          <S.Button onClick={handleAdicionarValor} style={{ marginTop: "4%", marginLeft: "1.2%" }} type="button">
            Inserir
          </S.Button>
          <S.Button style={{ marginTop: "4%", marginLeft: "1.2%" }} type="button" onClick={handleRemoverValor}>
            Remover
          </S.Button>
        </S.Area>
      </S.Content>
    </S.Container>
  );
};

export default FormPilha;

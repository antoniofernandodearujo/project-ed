import React, { useState } from "react"
//style
import * as S from "./styles"
//fila

//components
import BoxFila from "../../box/boxFila"

const FormFila: React.FC = () => {
    const [fila, setFila] = useState<number[]>([]);
    const [valorInput, setValorInput] = useState("");


    const adicionarElemento = () => {
        if (valorInput) {
          const novoValor = parseInt(valorInput);
          setFila([...fila, novoValor]);
          setValorInput(""); // Limpar o valor do input após adicionar o elemento
        }
    };

    const removerElemento = () => {
        if (fila.length > 0) {
            const novaFila = fila.slice(1);
            setFila(novaFila);
        }
    };

    return (
        <>
            <BoxFila fila={fila} />
            <S.Container>
                <S.Content>          
                    <S.Area>
                        <S.AreaInput>
                            <S.AreaTextAndInput>
                                <S.Text>* Valor</S.Text>
                                <S.Input 
                                    type="text"
                                    value={valorInput}
                                    onChange={(e) => setValorInput(e.target.value)}
                                />
                            </S.AreaTextAndInput>
                        </S.AreaInput>
                        <S.Button 
                            onClick={() => adicionarElemento()} // Substitua o valor 0 pelo valor inserido no input
                            style={{ marginTop: '4%', marginLeft: '1.2%' }} type="button"
                        >
                            Inserir
                        </S.Button>

                        <S.Button 
                            onClick={() => removerElemento()}
                            style={{ marginTop: '4%', marginLeft: '1.2%' }} type="button"
                        >
                            Remover
                        </S.Button>
                    </S.Area>
                </S.Content>
            </S.Container>
        </>
    )
}

export default FormFila

import React, { useState } from "react";
import { ListaSimplesmenteEncadeada } from "@/src/core/ListaSimplesmenteEncadeada";

export default function ListaSimplesmenteEncadeadaComponent() {
  const [valor, setValor] = useState("");
  const [posicao, setPosicao] = useState("");
  const [lista, setLista] = useState(new ListaSimplesmenteEncadeada());

  const adicionarValor = () => {
    const valorNumerico = parseInt(valor);

    if (!isNaN(valorNumerico)) {
      const posicaoNumerica = parseInt(posicao);
      lista.adicionar(posicaoNumerica, valorNumerico);
      setLista(lista);
    }

    setValor("");
    setPosicao("");
  };

  const removerValor = () => {
    const valorNumerico = parseInt(valor);
  
    if (!isNaN(valorNumerico)) {
      lista.remover(valorNumerico);
    } else {
      const posicaoNumerica = parseInt(posicao);
      lista.remover(posicaoNumerica);
    }
  
    setLista(lista);
    setValor("");
    setPosicao("");
  };

  return (
    <div>
      <div>
        <label htmlFor="valor">Valor:</label>
        <input
          id="valor"
          type="number"
          value={valor}
          onChange={(event) => setValor(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="posicao">Posição:</label>
        <input
          id="posicao"
          type="number"
          value={posicao}
          onChange={(event) => setPosicao(event.target.value)}
        />
      </div>
      <button onClick={adicionarValor}>Adicionar</button>
      <ul>
        {lista.toArray().map((valor, index) => (
          <li key={index}>{valor}</li>
        ))}
      </ul>

      <br />
      <br />

      <button onClick={removerValor}>Remover</button>

    </div>
  );
}

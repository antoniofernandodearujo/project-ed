import React, { useState } from "react";
import { ListaSimplesmenteEncadeada } from "@/src/core/ListaSimplesmenteEncadeada";

export default function ListaSimplesmenteEncadeadaComponent() {
  const [valor, setValor] = useState("");
  const [posicao, setPosicao] = useState("");
  const [lista, setLista] = useState(new ListaSimplesmenteEncadeada());

  /**
   * As 3 funções básicas estão funcionando aparentemente
   */

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
    const pos = posicao;
    const val = valor;

    if(pos !== "") {
      if(!isNaN(parseInt(pos))) {
        lista.removerPorPosicao(parseInt(pos));
        setLista(lista);
        setPosicao("");
      }
    } else if(val !== "") {
      if(!isNaN(parseInt(val))) {
        lista.removerPorValor(parseInt(val));
        setLista(lista);
        setValor("");
      }
    }
  };

  const procurarValor = () => {
    const pos = posicao;
    const val = valor;
    let no = null

    if(pos !== "") {
      if(!isNaN(parseInt(pos))) {
        no = lista.buscarPorPosicao(parseInt(pos));
        console.log(`O valor da posição ${pos} é ${no?.valor}`);
        setLista(lista);
        setPosicao("");
      }
    } else if(val !== "") {
      if(!isNaN(parseInt(val))) {
        lista.buscarPorValor(parseInt(val));
        setLista(lista);
        setValor("");
        console.log(`O valor ${val} está na lista`)
      }
    }
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
      <br />
      <button onClick={procurarValor}>Buscar</button>

    </div>
  );
}

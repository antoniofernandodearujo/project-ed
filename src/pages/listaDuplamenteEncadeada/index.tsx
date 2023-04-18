import React, { useState } from "react"
//styles
//class
import { ListaDuplamenteEncadeada } from "@/src/core/ListaDuplamenteEncadeada"

const DoublyLinkedList: React.FC = () => {

    const [valor, setValor] = useState("");
    const [posicao, setPosicao] = useState("");
    const [lista, setLista] = useState(new ListaDuplamenteEncadeada());

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

    </div>
    )
}

export default DoublyLinkedList
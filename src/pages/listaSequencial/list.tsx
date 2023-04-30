import React, { useState } from "react"
//styles
//class
import { ListaSequencial } from "@/src/core/ListaSequencial";

const SequentialList: React.FC = () => {

    const [newNumber, setNewNumber] = useState(""); // cria um estado para armazenar o valor do input
    const [newNumberPos, setNewNumberPos] = useState(""); // cria um estado para armaz
    const [myList, setMyList] = useState(new ListaSequencial(5, [1, 3, 5])); // cria um estado para armazenar a lista

    function handleAddNumber() {
        const num = parseInt(newNumber)
        const pos = parseInt(newNumberPos)
        myList.addInList(num, pos); //adiciona o número na lista
        setMyList(myList); // atualiza o estado da lista
        setNewNumber(""); // limpa o input
        setNewNumberPos(""); //limpa o input
    }

    function handleRemoveNumber() {
        const num = parseInt(newNumber)
        const pos = parseInt(newNumberPos)
        myList.removeInList(num, undefined); //remove o número no final da lista
        setMyList(myList); //atualiza o estado da lista
        setNewNumber(""); //limpa o input
        setNewNumberPos(""); //limpa o input
    }

    function handleSearchNumber() {
        const num = parseInt(newNumber)
        const pos = parseInt(newNumberPos)
        myList.searchInList(undefined, pos); // adiciona o número no final da lista
        setMyList(myList); // atualiza o estado da lista
        setNewNumber(""); // limpa o input
        setNewNumberPos(""); //limpa o input
    }

    function handleChange(event) {
        setNewNumber(event.target.value) // atualiza o estado do input com o valor digitado
    }

    return (
        <div>
            <ul>
                {myList.listNumbers.map((num, index) => (
                <li key={index}>{num}</li>
                ))}
            </ul>

            <input 
                style={{borderColor: '#000'}} 
                type="text" 
                value={newNumber} 
                onChange={handleChange} 
            />

            <br />
            <br />

            <input 
                type="text" 
                value={newNumberPos} 
                onChange={(e) => setNewNumberPos(e.target.value)}
            />
            <br />

            <button onClick={handleAddNumber}>Adicionar número</button>
            <br />

            <button onClick={handleRemoveNumber}>Remover número</button>
            <br />

            <button onClick={handleSearchNumber}>Procurar número</button>
            <br />
      
      </div>
    )
}

export default SequentialList
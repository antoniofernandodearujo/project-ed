import React, { FC, useState } from "react"

const Filas: FC = () => {
    const [valueRadio, setValueRadio] = useState('')
  const [num, setNum] = useState('')

  //Nesse caso para as 'Filas'
  const [listNumbers, setListNumbers] = useState<number[]>([1, 2, 4, 5, 7, 8, 10])
  const max = 10

  function addInList() {

    /**
     * 
     *  Nesta solução, a verificação é feita para garantir que o número não está vazio (num não é uma string vazia), que o número ainda não está na lista (numbers.indexOf(parseInt(num)) === -1) e que ainda há espaço na lista para adicioná-lo (numbers.length < max). Se estas condições forem atendidas, o número é adicionado ao final da lista por meio do setNumbers, que utiliza o spread operator ... para preservar os valores anteriores e adiciona o novo número.
        Em seguida, a função setNum é utilizada para limpar o campo de entrada após a adição. Este processo é realizado pela atribuição de uma string vazia para num.
        Por fim, você precisa chamar a função actionsEstructDates quando o botão de confirmação for clicado, adicionando o onClick handler na tag <button> com o código onClick={actionsEstructDates}.
        Espero que esta solução seja mais clara e ajude a atingir o seu objetivo.
     * 
     */

    if (num && listNumbers.indexOf(parseInt(num)) === -1 && listNumbers.length < max) {
      setListNumbers([...listNumbers, parseInt(num)])
      setNum('')
    } else {
      alert('No puede')
    }
  }

  function removeInList() {

    //No código acima, verificamos se a lista tem pelo menos um elemento antes de removê-lo usando o método slice(). Se a lista estiver vazia, uma mensagem de alerta é exibida. Caso contrário, a nova lista é armazenada em uma nova constante newList e o estado é atualizado usando o setListNumbers(newList). Note que usamos slice(1) para remover o primeiro elemento da lista.

    if (listNumbers.length > 0) {
      const newList = listNumbers.slice(1)
      setListNumbers(newList)
    } else {
      alert('No puede')
    }
  }

  function searchInList() {

    //Para verificar se um número existe na lista, você pode usar o método includes em vez de indexOf, que retorna um valor booleano indicando se o valor existe ou não na lista. Para mostrar uma mensagem diferente dependendo do resultado, você pode usar um if para verificar o valor retornado pelo includes e exibir a mensagem apropriada. Aqui está um exemplo de como você pode implementar a função searchInList para verificar se um número existe na lista:
    
    if (num && listNumbers.includes(parseInt(num))) {
      alert('O número ' + num + ' existe na lista!')
    } else {
      alert('O número ' + num + ' não existe na lista.')
    }
  }

  function actionsEstructDates() {

    if(valueRadio === 'op1') {
      addInList()
    } else if(valueRadio === 'op2') {
      removeInList()
    } else {
      searchInList()
    }
  }


  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100vw',
        height: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >

      <div>

        <label style={{ fontSize: 35 }}>

          {
            listNumbers.map((i, number) => (

              <>
                <label key={i} htmlFor=""> {i} -  </label>
              </>

            ))
          }

        </label>


        <br />

        <hr />

        <br />

        <div style={{ display: 'flex', flexDirection:'column', justifyContent: 'center', alignItems: 'center' }}>
          <input 
            style={{ width: 320, height: 50, borderRadius: 8, paddingLeft: 12 }} 
            type="number" 
            placeholder="Escolha um número"
            value={num}
            onChange={e => setNum(e.target.value)}
          />
        </div>

        <br />

        <hr />

        <br />
        
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>

          <input 
            style={{ marginRight: 5 }} 
            type="radio" 
            name="Adicionar" 
            value="op1"
            checked={valueRadio === 'op1'}
            onChange={e => setValueRadio(e.target.value)}
          /> <label style={{ marginRight: 22 }}> Adicionar</label>

          <input 
            style={{ marginRight: 5 }} 
            type="radio" 
            name="Remover" 
            value="op2"
            checked={valueRadio === 'op2'}
            onChange={e => setValueRadio(e.target.value)}
          />  <label style={{ marginRight: 22 }}> Remover</label>

          <input 
            style={{ marginRight: 5 }} 
            type="radio" 
            name="Buscar" 
            checked={valueRadio === 'op3'}
            value="op3"
            onChange={e => setValueRadio(e.target.value)}
          /> <label> Buscar</label>

        </div>

        <br />

        <hr />

        <br />

        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
          <button
            style={{
              backgroundColor: '#311b1b',
              width: 150,
              height: 40,
              borderRadius: 12,
            }}
            onClick={actionsEstructDates}
          >
            Confirmar
          </button>
        </div>

      </div>
      
    </div>
    )
}

export default Filas
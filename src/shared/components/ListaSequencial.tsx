const [valueRadio, setValueRadio] = useState('op1')
  const [pos, setPos] = useState('')
  const [num, setNum] = useState('')

  const [listNumbers, setListNumbers] = useState<number[]>([1, 2, 4, 5, 7, 8, 10])
  const max = 10

  function addInList() {

    /**
     * Nessa implementação, primeiro é feita a conversão dos valores de num e pos para números inteiros. Em seguida, é verificado se a posição é válida (não pode ser menor que 0 nem maior que o tamanho da lista). Além disso, é verificado se o número já existe na lista. Se a posição e o número forem válidos e o número ainda não existir na lista, é criada uma nova lista com o número inserido na posição desejada, e a lista atual é atualizada com setListNumbers(). Caso o número já exista na lista, uma mensagem de alerta é exibida. Se a posição for inválida, uma mensagem de alerta é exibida. Por fim, os estados num e pos são resetados para vazio com setNum('') e setPos('').
     */

    const number = parseInt(num)
    const position = parseInt(pos) - 1

    // Verificar se a posição é válida
    if (position >= 0 && position <= listNumbers.length && listNumbers.length < max) {
      // Verificar se o número já existe na lista
      if (!listNumbers.includes(number)) {
        const newList = [...listNumbers.slice(0, position), number, ...listNumbers.slice(position)]
        setListNumbers(newList)
        setNum('')
        setPos('')
      } else {
        alert(`O número ${number} já existe na lista.`)
      }
    } else {
      alert('Posição inválida.')
    }
  }

  function removeInList() {

    /**
     * Nesse código, a função removeInList() recebe como parâmetros a posição (pos) ou o número (num) a ser removido. Se os dois parâmetros forem informados, uma mensagem de alerta é exibida informando que apenas um dos dois deve ser informado.
      Se apenas a posição for informada, é verificado se ela é válida e, se for, é criada uma nova lista sem o elemento correspondente àquela posição. Se o número informado não existir na lista, uma mensagem de alerta é exibida.
      Se apenas o número for informado, é verificado se ele existe na lista e, se existir, é criada uma nova lista sem o elemento correspondente àquele número. Se a posição informada for inválida, uma mensagem de alerta é exibida.
      Se nenhum parâmetro for informado, uma mensagem de alerta é exibida informando que a posição ou o número a ser removido deve ser informado.
      Em ambos os casos, a nova lista é atualizada no estado com setListNumbers() e a posição ou o número informado é resetado com setPos('') ou setNum(''), respectivamente.
     */

    if (pos && num) {
      alert('Informe apenas a posição ou o número a ser removido.')
      return
    }
  
    let newList = []
  
    if (pos) {
      const index = parseInt(pos) - 1
      if (index >= 0 && index < listNumbers.length) {
        newList = [...listNumbers.slice(0, index), ...listNumbers.slice(index + 1)]
        setListNumbers(newList)
        setPos('')
      } else {
        alert('Posição inválida.')
      }
    } else if (num) {
      const number = parseInt(num)
      if (listNumbers.includes(number)) {
        newList = listNumbers.filter((n) => n !== number)
        setListNumbers(newList)
        setNum('')
      } else {
        alert(`O número ${number} não existe na lista.`)
      }
    } else {
      alert('Informe a posição ou o número a ser removido.')
    }

  }

  function searchInList() {
    if (num) {
      const index = listNumbers.indexOf(parseInt(num))
      if (index > -1) {
        alert(`O número ${num} existe na lista e está na posição ${index + 1}!`)
      } else {
        alert(`O número ${num} não existe na lista.`)
      }
    } else if (pos) {
      const index = parseInt(pos) - 1
      if (index >= 0 && index < listNumbers.length) {
        alert(`O elemento na posição ${pos} é o número ${listNumbers[index]}.`)
      } else {
        alert('Posição inválida.')
      }
    } else {
      alert('Informe a posição ou o número a ser buscado.')
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

  //

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

        {
          valueRadio === 'op1' ?
            <>
              <br />

              <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <label htmlFor="">E</label>
              </div>

              <br />
              <div style={{ display: 'flex', flexDirection:'column', justifyContent: 'center', alignItems: 'center' }}>
                <input 
                  style={{ width: 320, height: 50, borderRadius: 8, paddingLeft: 12 }} 
                  type="number" 
                  placeholder="Escolha a posição"
                  value={pos}
                  onChange={e => setPos(e.target.value)}
                />
            </div>
            </>
          :
            null
        }

        {
          valueRadio === 'op2' ?
            <>
              <br />

              <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <label htmlFor="">Ou</label>
              </div>

              <br />            
            
              <div style={{ display: 'flex', flexDirection:'column', justifyContent: 'center', alignItems: 'center' }}>
                <input 
                  style={{ width: 320, height: 50, borderRadius: 8, paddingLeft: 12 }} 
                  type="number" 
                  placeholder="Escolha a posição"
                  value={pos}
                  onChange={e => setPos(e.target.value)}
                />
            </div>
            </>
          :
            null
        }

        {
          valueRadio === 'op3' ?
            <>
              <br />

              <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <label htmlFor="">Ou</label>
              </div>

              <br />            
            
              <div style={{ display: 'flex', flexDirection:'column', justifyContent: 'center', alignItems: 'center' }}>
                <input 
                  style={{ width: 320, height: 50, borderRadius: 8, paddingLeft: 12 }} 
                  type="number" 
                  placeholder="Escolha a posição"
                  value={pos}
                  onChange={e => setPos(e.target.value)}
                />
            </div>
            </>
          :
            null
        }

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
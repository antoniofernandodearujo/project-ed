interface ListInterface {
  max: number;
  nElements: number;
  listNumbers: number[];
  addInList: (num: number, pos: number) => void;
  removeInList: (num?: number, pos?: number) => void;
  searchInList: (num?: number, pos?: number) => void;
}
  
export class ListaSequencial implements ListInterface {
  max: number;
  listNumbers: number[];
  nElements: number;

  constructor(max: number, listNumbers: number[], nElements: number) {
    this.max = max;
    this.listNumbers = listNumbers;
    this.nElements = nElements;
  }

  private listIsfull(): any {
    return this.nElements === this.max;
  }

  private listIsEmpty(): boolean {
    return this.nElements === 0;
  }

  private size(): number {
    return this.nElements;
  }

  addInList(num: number, pos: number) {

    /*if(pos > this.nElements + 1 || pos <= 0){
      alert('Posição inválida.');
      return;
    }*/

    if(pos > this.nElements + 1 || pos <= 0){
      alert('Posição inválida.');
      return;
    }

    if(this.listIsfull()) {
      alert('A lista já atingiu seu tamanho máximo.');
      return;
    }

    const index = parseInt(String(pos)) - 1;

    if (index >= 0 && index < this.max ) { // Verificação de posição 2
      
    } else {
      alert('Posição inválida.');
      return;
    }

    this.nElements++;

    this.listNumbers = [...this.listNumbers.slice(0, index), num, ...this.listNumbers.slice(index)]

    /*for(let i = this.nElements; i >= pos; i--){
      this.listNumbers[i] = this.listNumbers[i - 1];
    }

    this.listNumbers[pos - 1] = num;*/
    

    console.log(this.nElements);
    

    /*const index = parseInt(String(pos)) - 1;
    
    if(pos > this.nElements + 1){ // Verificação de posição 1
      alert('Posição inválida.');
      return;
    }

    if (this.listIsfull()) {
      alert('A lista já atingiu seu tamanho máximo.');
      return;
    }


    if (index >= 0 && index < this.max) { // Verificação de posição 2
    }else{
      alert('Posição inválida.');
      return;
    }

    this.nElements++;
    // Adiciona o elemento na*/
    
  }
  
  removeInList(num?: number, pos?: number) {
    if (pos !== undefined && num !== undefined) {
      alert('Informe apenas a posição ou o número a ser removido.');
      return;
    }

    if(pos === undefined && num === undefined) {
      alert('Informe a posição ou o número a ser removido.');
      return;
    }

    let newList = [];

    if (pos !== undefined) {
      const index = parseInt(String(pos)) - 1;
      if (index >= 0 && index < this.listNumbers.length) {
        newList = [...this.listNumbers.slice(0, index), ...this.listNumbers.slice(index + 1)];
        this.listNumbers = newList;
        this.nElements--;
      } else {
        alert('Posição inválida.');
      }
    } else if (num !== undefined) {
      const index = this.listNumbers.indexOf(num);
      if (index > -1) {
        newList = [...this.listNumbers.slice(0, index), ...this.listNumbers.slice(index + 1)];
        this.listNumbers = newList;
        this.nElements--;
      } else {
        alert(`O número ${num} não existe na lista.`);
      }
    }
  }

  searchInList(num?: number, pos?: number) {
    if (num !== undefined) {
      const index = this.listNumbers.indexOf(num);
      if (index > -1) {
        alert(`O número ${num} existe na lista e está na posição ${index + 1}!`);
      } else {
        alert(`O número ${num} não existe na lista.`);
      }
    } else if (pos !== undefined) {
      const index = parseInt(String(pos)) - 1;
      if (index >= 0 && index < this.listNumbers.length) {
        alert(`O elemento na posição ${pos} é o número ${this.listNumbers[index]}.`);
      } else {
        alert('Posição inválida.');
      }
    } else {
      alert('Informe a posição ou o número a ser pesquisado.');
    }
  }

  
}
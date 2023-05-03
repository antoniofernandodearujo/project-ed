interface ListInterface {
  max: number;
  listNumbers: number[];
  addInList: (num: number, pos: number) => void;
  removeInList: (num?: number, pos?: number) => void;
  searchInList: (num?: number, pos?: number) => void;
}
  
export class ListaSequencial implements ListInterface {
  max: number;
  listNumbers: number[];
  nElements: number;

  constructor(max: number, listNumbers: number[]) {
    this.max = max;
    this.listNumbers = listNumbers;
    this.nElements = listNumbers.length;
  }

  addInList(num: number, pos: number) {
    
    if(pos > this.nElements + 1){ // Verificação de posição 1
      alert('Posição inválida.');
      return;
    }

    if (this.listIsfull()) {
      alert('A lista já atingiu seu tamanho máximo.');
      return;
    }

    const index = parseInt(String(pos)) - 1;
    if (index >= 0 && index < this.max) { // Verificação de posição 2
    }else{
      alert('Posição inválida.');
      return;
    }

    this.nElements++;
    // Adiciona o elemento na posição informada e move os demais elementos para a direita
    this.listNumbers = [...this.listNumbers.slice(0, index), num, ...this.listNumbers.slice(index)];
  }
  removeInList(num?: number, pos?: number) {
    if (pos !== undefined && num !== undefined) {//
      console.log('Informe apenas a posição ou o número a ser removido.');
      return;
    }

    if(pos === undefined && num === undefined) {
      console.log('Informe a posição ou o número a ser removido.');
      return;
    }

    let newList = [];

    if (pos !== undefined) {
      const index = parseInt(String(pos)) - 1;
      if (index >= 0 && index < this.listNumbers.length) {
        newList = [...this.listNumbers.slice(0, index), ...this.listNumbers.slice(index + 1)];
        this.listNumbers = newList;
      } else {
        alert('Posição inválida.');
      }
    } else if (num !== undefined) {
      const number = parseInt(String(num));
      if (this.listNumbers.includes(number)) {
        newList = this.listNumbers.filter((n) => n !== number);
        this.listNumbers = newList;
      } else {
        alert(`O número ${number} não existe na lista.`);
      }
    } else {
      alert('Informe a posição ou o número a ser removido.');
    }

    this.nElements--;
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
 
  private listIsfull() {
    return this.listNumbers.length >= this.max;
  }
} 
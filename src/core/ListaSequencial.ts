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

  constructor(max: number, listNumbers: number[]) {
    this.max = max;
    this.listNumbers = listNumbers;
  }

  addInList(num: number, pos: number) {
    const index = parseInt(String(pos)) - 1;

    if(this.listNumbers.length >= this.max) {
      alert('A lista já atingiu seu tamanho máximo.');
      return;
    }
  
    if(pos > this.listNumbers.length || pos < 1) {
      alert('Posição inválida.');
      return;
    }

    const newList = [...this.listNumbers.slice(0, index), num, ...this.listNumbers.slice(index)];
  
    this.listNumbers = newList;
  }
  
  removeInList(num?: number, pos?: number) {
    if (pos !== undefined && num !== undefined) {
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
      const index = this.listNumbers.indexOf(num);
      if (index > -1) {
        this.listNumbers.splice(index, 1);
      } else {
        alert(`O número ${num} não existe na lista.`);
      }
    } else {
      alert('Informe a posição ou o número a ser removido.');
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
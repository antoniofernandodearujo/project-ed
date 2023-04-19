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
    const number = parseInt(String(num));
    const position = parseInt(String(pos)) - 1;

    //Verifica se a posição é válida
    //retirar a condição do meio
    if (position >= 0 && position <= this.listNumbers.length && this.listNumbers.length < this.max) {
      // Verifica se o número já existe na lista
      if (!this.listNumbers.includes(number)) {
        const newList = [...this.listNumbers.slice(0, position), number, ...this.listNumbers.slice(position)];
        this.listNumbers = newList;
      } else { //retirar
        console.log(`O número ${number} já existe na lista.`);
      }
    } else {
      console.log('Posição inválida.');
    }
  }

  removeInList(num?: number, pos?: number) {
    if (pos !== undefined && num !== undefined) {
      console.log('Informe apenas a posição ou o número a ser removido.');
      return;
    }

    if(pos === undefined && num === undefined) {
      console.log('Informe apenas a posição ou o número a ser removido.');
      return;
    }

    let newList = [];

    if (pos !== undefined) {
      const index = parseInt(String(pos)) - 1;
      if (index >= 0 && index < this.listNumbers.length) {
        newList = [...this.listNumbers.slice(0, index), ...this.listNumbers.slice(index + 1)];
        this.listNumbers = newList;
      } else {
        console.log('Posição inválida.');
      }
    } else if (num !== undefined) {
      const number = parseInt(String(num));
      if (this.listNumbers.includes(number)) {
        newList = this.listNumbers.filter((n) => n !== number);
        this.listNumbers = newList;
      } else {
        console.log(`O número ${number} não existe na lista.`);
      }
    } else {
      console.log('Informe a posição ou o número a ser removido.');
    }
  }

  searchInList(num?: number, pos?: number) {
      if (num !== undefined) {
        const index = this.listNumbers.indexOf(num);
        if (index > -1) {
          console.log(`O número ${num} existe na lista e está na posição ${index + 1}!`);
        } else {
          console.log(`O número ${num} não existe na lista.`);
        }
      } else if (pos !== undefined) {
        const index = parseInt(String(pos)) - 1;
        if (index >= 0 && index < this.listNumbers.length) {
          console.log(`O elemento na posição ${pos} é o número ${this.listNumbers[index]}.`);
        } else {
          console.log('Posição inválida.');
        }
      } else {
          console.log('Informe a posição ou o número a ser pesquisado.');
      }
  }
}
interface ListInterface {
  addInList: (num: number, pos: number) => void;
  removeInList: (num?: number, pos?: number) => void;
  searchInList: (num?: number, pos?: number) => void;
}
  
export class ListaSequencial implements ListInterface {
  private max: number;
  private listNumbers: number[];
  private nElements: number;

  constructor(max: number, listNumbers: number[]) {
    this.max = max;
    this.listNumbers = listNumbers;
    this.nElements = 0;
  }

  listIsfull(): any {
    return this.nElements === this.max;
  }

  listIsEmpty(): boolean {
    return this.nElements === 0;
  }

  size(): number {
    return this.nElements;
  }

  addInList(num: number, pos: number) {
    if (this.listIsfull()) {
      alert('A lista já atingiu seu tamanho máximo.');
      return -1;
    }
  
    if (pos < 1 || pos > this.nElements + 1) {
      alert('Posição inválida.');
      return -1;
    }
  
    if (pos === this.nElements + 1) {
      this.listNumbers.push(num);
    } else {
      this.listNumbers.splice(pos, 0, num);
    }
    
    this.nElements++;
    return 1;
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
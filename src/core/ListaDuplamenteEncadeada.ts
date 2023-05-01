//class Nó - 
class No {
  public valor: number;
  public proximo: No | null;
  public anterior: No | null;

  constructor(valor: number) {
    this.valor = valor;
    this.proximo = null;
    this.anterior = null;
  }
}

export class ListaDuplamenteEncadeada {
  private cabeca: No | null;
  private tamanho: number;

  constructor() {
    this.cabeca = null;
    this.tamanho = 0;
  }

  public getCabeca(): No | null {
    return this.cabeca;
  }

  public getTamanho(): number {
    return this.tamanho;
  }

  public adicionar(valor: number, posicao: number): void {
    if (posicao <= 0 || posicao > this.tamanho + 1) {
      throw new Error('Posição inválida.');
    }

    const novoNo = new No(valor);

    if (posicao === 1) {
      novoNo.proximo = this.cabeca;
      if (this.cabeca !== null) {
        this.cabeca.anterior = novoNo;
      }
      this.cabeca = novoNo;
    } else {
      let anterior = this.buscarPorPosicao(posicao - 1);
      if (anterior === null) {
        throw new Error('Posição inválida.');
      }
      let atual = anterior.proximo;

      novoNo.proximo = atual;
      novoNo.anterior = anterior;
      anterior.proximo = novoNo;
      if (atual !== null) {
        atual.anterior = novoNo;
      }
    }

    this.tamanho++;
  }

  public removerPorPosicao(posicao: number): void {
    if (posicao <= 0 || posicao > this.tamanho) {
      throw new Error('Posição inválida.');
    }
  
    let atual = this.buscarPorPosicao(posicao);
  
    if (atual === null) {
      throw new Error('Posição inválida.');
    }
  
    if (atual.anterior === null) {
      this.cabeca = atual.proximo;
    } else {
      atual.anterior.proximo = atual.proximo;
    }
  
    if (atual.proximo !== null) {
      atual.proximo.anterior = atual.anterior;
    }
  
    this.tamanho--;
  }

  public removerPorValor(valor: number): void {
    let atual = this.cabeca;
  
    while (atual !== null) {
      if (atual.valor === valor) {
        if (atual.anterior === null) {
          this.cabeca = atual.proximo;
        } else {
          atual.anterior.proximo = atual.proximo;
        }
  
        if (atual.proximo !== null) {
          atual.proximo.anterior = atual.anterior;
        }
  
        this.tamanho--;
  
        break;
      }
  
      atual = atual.proximo;
    }
  }

  public buscarPorPosicao(posicao: number): No | null {
    if (posicao <= 0 || posicao > this.tamanho) {
      return null;
    }

    let atual = this.cabeca;
    for (let i = 1; i < posicao; i++) {
      atual = atual!.proximo;
    }

    return atual;
  }

  public buscarPorValor(valor: number): No | null {
    let atual = this.cabeca;
  
    while (atual !== null) {
      if (atual.valor === valor) {
        return atual;
      }
  
      atual = atual.proximo;
    }
  
    return null;
  }

  public toArray(): any[] {
    const elementos: any[] = [];
    let atual = this.cabeca;
    while (atual !== null) {
      elementos.push(atual.valor);
      atual = atual.proximo;
    }
    return elementos;
  }
}
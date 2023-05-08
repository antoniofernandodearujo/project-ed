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
  private cauda: No | null; 
  private tamanho: number;

  constructor() {
    this.cabeca = null;
    this.cauda = null;
    this.tamanho = 0;
    
  }

  public getCabeca(): No | null {
    return this.cabeca;
  }

  public getCauda(): No | null {
    return this.cauda;
  }

  public getTamanho(): number {
    return this.tamanho;
  }

  public adicionar(valor: number, posicao: number): void {
    if (posicao <= 0 || posicao > this.tamanho + 1) {
      alert('Posição inválida.');
    }

    if (this.tamanho >= 8) {
      alert('Tamanho máximo da lista excedido.');
    }

    const novoNo = new No(valor);

    if (posicao === 1) {
      novoNo.proximo = this.cabeca;
      if (this.cabeca !== null) {
        this.cabeca.anterior = novoNo;
      }
      this.cabeca = novoNo;

       // atualizando referência da cauda se a lista estava vazia
       if(this.cauda === null) {
        this.cauda = novoNo;
      }

    } else {
      let anterior = this.buscarPorPosicao(posicao - 1);
      if (anterior === null) {
        alert('Posição inválida.');
      }
      let atual = anterior.proximo;

      novoNo.proximo = atual;
      novoNo.anterior = anterior;
      anterior.proximo = novoNo;
      if (atual !== null) {
        atual.anterior = novoNo;
      }

       // atualizando referência da cauda se o novo nó foi adicionado ao final
       if (novoNo.proximo === null) {
        this.cauda = novoNo;
      }
    }

    this.tamanho++;
  }

  public removerPorPosicao(posicao: number): void {
    if (posicao <= 0 || posicao > this.tamanho) {
      alert('Posição inválida.');
    }
  
    if (this.tamanho <= 0) {
      alert('A lista está vazia.');
    }
  
    if (this.tamanho === 8 && posicao === this.tamanho) {
      this.tamanho--;
      return;
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

    if (atual.proximo === null) {
      this.cauda = atual.anterior;
    }
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

        if (atual.proximo === null) {
          this.cauda = atual.anterior;
        }
  
        break;
      }
  
      atual = atual.proximo;
    }
    
    if (this.tamanho < 8 && atual === null) {
      alert('O elemento não foi encontrado na lista.');
    }
  }

  

  public buscarPorPosicao(posicao: number): No | null {
    if (posicao <= 0 || posicao > this.tamanho) {
      return null;
    }
    const metadeLista = Math.floor(this.tamanho / 2);

    if(posicao < metadeLista) {

      let atual = this.cabeca;

      for (let i = 1; i < posicao; i++) {
        atual = atual!.proximo;
      }

      return atual;
    }

    let atual = this.cauda;

    for (let i = this.tamanho; i > posicao; i--) {
      atual = atual!.anterior;
    }

    return atual;
    
  }

  public buscarPorValor(valor: number): number | null {
    let atual = this.cabeca;
    let index = 1;
    while (atual !== null) {
      if(atual.valor === valor) {
        return index;
      }
      index++;
  
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
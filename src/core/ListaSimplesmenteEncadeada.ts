class No {
  public valor: number;
  public proximo: No | null;

  constructor(valor: number) {
    this.valor = valor;
    this.proximo = null;
  }
}

export class ListaSimplesmenteEncadeada {
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
      alert('Posição inválida.');
    }

    if (this.tamanho >= 8) {
      alert('A lista já atingiu o tamanho máximo de 8 elementos.');
    }
  
    const novoNo = new No(valor);
  
    if (posicao === 1) {
      novoNo.proximo = this.cabeca;
      this.cabeca = novoNo;
    } else {
      let anterior = null;
      let atual = this.cabeca;
      let indice = 1;
  
      while (atual != null && indice < posicao) {
        anterior = atual;
        atual = atual.proximo;
        indice++;
      }
  
      novoNo.proximo = atual;
      anterior!.proximo = novoNo;
    }
  
    this.tamanho++;
  }
  

  /**
   * Eu tive que criar 2 métodos para remoção e para a busca
   * porque tava dando muito erro, se lembrar de alguma coisa
   * ou fazer alguma validação.
   */

    public removerPorPosicao(posicao: number): void {
      if (posicao <= 0 || posicao > this.tamanho) {
        alert('Posição inválida.');
      }

      if (posicao === 1) {
        this.cabeca = this.cabeca!.proximo;
      } else {
        let indice = 1;
        let noAtual = this.cabeca!;
        let noAnterior = null;

        while (indice < posicao) {
          noAnterior = noAtual;
          noAtual = noAtual.proximo!;
          indice++;
        }

        noAnterior!.proximo = noAtual.proximo;
      }
      this.tamanho--;
    }

  
  public removerPorValor(valor: number): void {
    if (this.tamanho === 0) {
      alert('Lista vazia.');
    }
  
    let noAtual = this.cabeca;
    let noAnterior = null;
  
    while (noAtual !== null) {
      if (noAtual.valor === valor) {
        if (noAnterior === null) {
          this.cabeca = noAtual.proximo;
        } else {
          noAnterior.proximo = noAtual.proximo;
        }
  
        this.tamanho--;
        return;
      }
  
      noAnterior = noAtual;
      noAtual = noAtual.proximo;
    }
      if (this.tamanho < 8 && noAtual === null) {
        alert('Valor não encontrado na lista.');
      }
  }


  public buscarPorPosicao(posicao: number): No | null {
    if (posicao <= 0 || posicao > this.tamanho) {
      return null;
    }
  
    let noAtual = this.cabeca;
    let indice = 1;
  
    while (indice < posicao) {
      noAtual = noAtual!.proximo;
      indice++;
    }
  
    return noAtual;
  }

  public buscarPorValor(valor: number): No | null {
    let noAtual = this.cabeca;
  
    while (noAtual !== null) {
      if (noAtual.valor === valor) {
        return noAtual;
      }

      noAtual = noAtual.proximo;
    }
  
    return null;
  }
    
  toArray(): any[] {
    const elementos: any[] = [];
    let atual = this.cabeca;

    while (atual != null) {
      elementos.push(atual.valor);
      atual = atual.proximo;
    }

    return elementos;
  }
}
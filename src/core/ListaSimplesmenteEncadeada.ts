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

  public adicionar(posicao: number, valor: number): void {

    if (posicao <= 0 || posicao > this.tamanho + 1) {
      throw new Error('Posição inválida.');
    }

    // Verifica se o valor já existe na lista
    let atual = this.cabeca;
    while (atual != null) {
      if (atual.valor === valor) {
        throw new Error('Valor duplicado.');
      }
      atual = atual.proximo;
    }
  
    // Subtrai 1 da posição caso ela seja maior do que 0
    const posicaoAtualizada = posicao > 0 ? posicao - 1 : posicao;
  
    const novoNo = new No(valor);
    if (posicaoAtualizada === 0) {
      novoNo.proximo = this.cabeca;
      this.cabeca = novoNo;
    } else {
      let anterior = null;
      let atual: No | null = this.cabeca;
      let indice = 0; 
      while (atual != null && indice < posicaoAtualizada) {
        anterior = atual;
        atual = atual.proximo;
        indice++;
      }
    
      if (atual == null) {
        anterior!.proximo = novoNo;
      } else {
        novoNo.proximo = atual;
        anterior!.proximo = novoNo;
      }
    }
  
    this.tamanho++;
  }

  
  public remover(posicaoOuValor: number): void {
    if (this.tamanho === 0) {
      throw new Error('A lista está vazia.');
    }

    // remover pela posição
    if (Number.isInteger(posicaoOuValor)) {
      const posicao = posicaoOuValor as number;
      if (posicao < 0 || posicao >= this.tamanho) {
        throw new Error('Posição inválida.');
      }
      if (posicao === 0) {
        this.cabeca = this.cabeca!.proximo;
      } else {
        let anterior = null;
        let atual: No | null = this.cabeca;
        let indice = 0;
        while (atual != null && indice < posicao) {
          anterior = atual;
          atual = atual.proximo;
          indice++;
        }
        if (atual != null) {
          anterior!.proximo = atual.proximo;
        }
      }
      this.tamanho--;
      return;
    }

    // remover pelo valor
    let anterior = null;
    let atual: No | null = this.cabeca;
    while (atual != null) {
      if (atual.valor === posicaoOuValor) {
        if (anterior == null) {
          this.cabeca = atual.proximo;
        } else {
          anterior.proximo = atual.proximo;
        }
        this.tamanho--;
        return;
      }
      anterior = atual;
      atual = atual.proximo;
    }
    throw new Error('Valor não encontrado.');
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

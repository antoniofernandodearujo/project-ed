/*                                    Árvores Binárias de Pesquisa (ABP)
   
  Árvores são Estruturas de Dados típicas que permitem armazenar dados de forma organizada,
  hierárquica e eficiente. Uma ABP é uma árvore binária que possui a seguinte propriedade:
  para cada nó, todos os nós da subárvore esquerda possuem valores menores que o valor do nó
  e todos os nós da subárvore direita possuem valores maiores que o valor do nó. Isto permite
  que os dados sejam armazenados de forma ordenada, facilitando a busca por um determinado conteúdo.

*/

class No {
  private valor: number | null;
  private esquerdo: No | null;
  private direito: No | null;

  constructor() {
    this.esquerdo = null
    this.direito = null
    this.valor = null
  }

  public getValor(): number | null {
    return this.valor;
  }

  public setValor(valor: number | null): void {
    this.valor = valor;
  }

  public getEsquerdo(): No | null {
    return this.esquerdo;
  }

  public setEsquerdo(esquerdo: No | null): void {
    this.esquerdo = esquerdo;
  }

  public getDireito(): No | null {
    return this.direito;
  }

  public setDireito(direito: No | null): void {
    this.direito = direito;
  }

}

export class ArvoreBinariaPesquisa {
  
  private raiz: No | null;
  constructor() {
    this.raiz = null;
  }

  
  /* Retorna True caso a árvore esteja vazia, caso não esteja, retorna False. */
  public getIsEmpty(): boolean {
    return this.raiz === null;
  }

  /* Esta é uma busca recursiva a partir da raiz.
     Caso seja encontrado, é retornado o endereço, caso não, é retornado null */
  private buscarRecursivoIntern(valor: number, noAtual: No | null): No | null {
    if (noAtual === null) {
      return null; // Conteúdo do nó inicial é nulo.
    }

    if (valor === noAtual.getValor()) {
      return noAtual; // Valor encontrado.
    } 

    if (valor < (noAtual.getValor() ?? Number.NEGATIVE_INFINITY)) {
      return this.buscarRecursivoIntern(valor, noAtual.getEsquerdo()); // Busca na subárvore esquerda.
    } else {
      return this.buscarRecursivoIntern(valor, noAtual.getDireito()); // Busca na subárvore direita.
    }
  }

  public buscarRecursivo(valor: number): No | null {
    return this.buscarRecursivoIntern(valor, this.raiz);
  }
  
  

  /* 
    Esta busca é iterativa, ou seja, é feita através de um laço de repetição.
    Para entender essa busca, considere a seguinte propriedade de uma ABP:
    Para cada nó, todos os nós da subárvore esquerda possuem valores menores que o valor do nó
    e todos os nós da subárvore direita possuem valores maiores que o valor do nó.
    A partir disso, podemos fazer a seguinte busca:
    1. Começamos a busca a partir da raiz.
    2. Se o valor buscado for igual ao valor do nó atual, retornamos o nó atual.
    3. Se o valor buscado for menor que o valor do nó atual, vamos para a subárvore esquerda.
    4. Se o valor buscado for maior que o valor do nó atual, vamos para a subárvore direita.
    5. Se o nó atual for nulo, retornamos null.

    A busca recursiva é mais simples de entender, mas a busca iterativa é mais eficiente.
    Afinal, ao considerar apenas um desvio, é possível escolher apenas o caminho possível de ter o valor buscado.
  */
    private buscaIterativa(valor: number): No | null {
      if (this.getIsEmpty()) {
        return null;
      }
  
      let noAtual: No | null = this.raiz;
      while (noAtual !== null) {
        if (valor === noAtual.getValor()) {
          return noAtual;
        }
  
        if (valor < (noAtual.getValor() ?? Number.NEGATIVE_INFINITY)) {
          noAtual = noAtual.getEsquerdo();
        } else {
          noAtual = noAtual.getDireito();
        }
      }
  
      return null;
    }

  /*
    Esta é uma função de apresentação in-order, ou seja, os nós são apresentados em ordem crescente.
    Para isso, é feita uma busca recursiva na subárvore esquerda, depois é apresentado o valor do nó atual
    e depois é feita uma busca recursiva na subárvore direita.
  */
  public exibe(){
      if(this.getIsEmpty()){
        console.log("Arvore vazia!");
      }
      else{
        this.exibeIntern(this.raiz);
      }
  }
  private exibeIntern(no: No | null): void {
    if(no != null) {
      this.exibeIntern(no.getEsquerdo());
      console.log("%d ", no.getValor());
      this.exibeIntern(no.getDireito());
    }
  }
  
  

  /* Eixbe os valores da árvore em ordem decrescente. */
  private exibeDecIntern(no: No | null): void {
    if(no != null) {
      this.exibeDecIntern(no.getDireito());
      console.log("%d ", no.getValor());
      this.exibeDecIntern(no.getEsquerdo());
    }
  }

  public exibeDec(){
    if(this.getIsEmpty()){
      console.log("Arvore vazia!");
    }
    else{
      this.exibeDecIntern(this.raiz);
    }
  }

  /*  Insere um nó na ABP
      Retorna True em caso de sucesso, caso contrário retorna NULL.
  */
  public inserir(valor: number): boolean {
    const novoNo = new No();
    novoNo.setValor(valor);
    novoNo.setEsquerdo(null);
    novoNo.setDireito(null);

    if (this.getIsEmpty()) {
      this.raiz = novoNo;
      return true;
    }

    let noAtual: No | null = this.raiz;
    let p: No | null = null;
    while (noAtual !== null) {
      p = noAtual;

      if (valor === noAtual.getValor()) {
        return false;
      }

      if (valor < (noAtual.getValor() ?? Number.NEGATIVE_INFINITY)) {
        noAtual = noAtual.getEsquerdo();
      } else {
        noAtual = noAtual.getDireito();
      }
    }

    if (p !== null) {
      if (valor < (p.getValor() ?? Number.NEGATIVE_INFINITY)) {
        p.setEsquerdo(novoNo);
      } else {
        p.setDireito(novoNo);
      }
    }

    return true;
  }

  /* Exibe os valores da árvore em ordem crescente. (In-Order)
  */
  public exibirEmOrdem(): void {
    this.exibirEmOrdemRecursivo(this.raiz);
  }
  
  private exibirEmOrdemRecursivo(no: No | null): void {
    if (no !== null) {
      this.exibirEmOrdemRecursivo(no.getEsquerdo());
      console.log(no.getValor());
      this.exibirEmOrdemRecursivo(no.getDireito());
    }
  }

  /* Exibe os valores da árvore em pré-ordem. (Pre-Order)
  */
  public exibirPreOrdem(): void {
    if (this.getIsEmpty()) {
      console.log("Árvore vazia!");
    } else {
      this.exibirPreOrdemIntern(this.raiz);
    }
  }
  
  private exibirPreOrdemIntern(no: No | null): void {
    if (no !== null) {
      console.log(no.getValor());
      this.exibirPreOrdemIntern(no.getEsquerdo());
      this.exibirPreOrdemIntern(no.getDireito());
    }
  }

  /* Exibe os valores da árvore em pós-ordem. (Post-Order) 
  */

  public exibirPosOrdem(): void {
    if (this.getIsEmpty()) {
      console.log("Árvore vazia!");
    } else {
      this.exibirPosOrdemIntern(this.raiz);
    }
  }
  
  private exibirPosOrdemIntern(no: No | null): void {
    if (no !== null) {
      this.exibirPosOrdemIntern(no.getEsquerdo());
      this.exibirPosOrdemIntern(no.getDireito());
      console.log(no.getValor());
    }
  }

}
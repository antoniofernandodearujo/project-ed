import { ListaSimplesmenteEncadeada } from './ListaSimplesmenteEncadeada';

export class Pilha extends ListaSimplesmenteEncadeada {
  constructor() {
    super();
  }

  public push(valor: number): void {
    this.adicionar(valor, 1); // Adiciona o valor no topo da pilha (posição 1).
  }

  public pop(): number | null {
    if (this.getTamanho() === 0) {
      return null; // Pilha vazia, retorna null.
    }

    const valorTopo = this.getCabeca()!.valor; // Obtém o valor do topo da pilha.

    this.removerPorPosicao(1); // Remove o elemento do topo (posição 1).

    return valorTopo;
  }

  public peek(): number | null {
    if (this.getTamanho() === 0) {
      return null; // Pilha vazia, retorna null.
    }

    return this.getCabeca()!.valor; // Retorna o valor do topo da pilha.
  }

  public size(): number {
    return this.getTamanho(); // Retorna o tamanho da pilha.
  }

  public empty(): boolean {
    return this.getTamanho() === 0; // Retorna true se a pilha estiver vazia, caso contrário, retorna false.
  }
}

import { ListaSimplesmenteEncadeada } from './ListaSimplesmenteEncadeada';

export class Fila extends ListaSimplesmenteEncadeada {
  public enqueue(valor: number): void {
    this.adicionar(valor, this.getTamanho() + 1);
  }

  public dequeue(): void {
    if (this.getTamanho() > 0) {
      this.removerPorPosicao(1);
    } else {
      console.log('A fila está vazia.');
    }
  }

  public front(): number | null {
    if (this.getTamanho() > 0) {
      return this.getCabeca()!.valor;
    } else {
      console.log('A fila está vazia.');
      return null;
    }
  }

  public isEmpty(): boolean {
    return this.getTamanho() === 0;
  }

  public size(): number {
    return this.getTamanho();
  }
}

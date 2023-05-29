import { Fila } from '../core/Fila';

describe('Fila', () => {
  let fila: Fila;

  beforeEach(() => {
    fila = new Fila();
  });

  it('deve enfileirar elementos corretamente', () => {
    fila.enqueue(1);
    fila.enqueue(2);
    fila.enqueue(3);

    expect(fila.toArray()).toEqual([1, 2, 3]);
  });

  it('deve desenfileirar elementos corretamente', () => {
    fila.enqueue(1);
    fila.enqueue(2);
    fila.enqueue(3);

    fila.dequeue();
    expect(fila.toArray()).toEqual([2, 3]);

    fila.dequeue();
    expect(fila.toArray()).toEqual([3]);

    fila.dequeue();
    expect(fila.toArray()).toEqual([]);
  });

  it('deve retornar o elemento no início da fila corretamente', () => {
    fila.enqueue(1);
    fila.enqueue(2);
    fila.enqueue(3);

    expect(fila.front()).toBe(1);
  });

  it('deve verificar corretamente se a fila está vazia', () => {
    expect(fila.isEmpty()).toBe(true);

    fila.enqueue(1);
    expect(fila.isEmpty()).toBe(false);

    fila.dequeue();
    expect(fila.isEmpty()).toBe(true);
  });
});

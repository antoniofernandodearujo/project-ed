import { Pilha } from '../core/Pilha';

describe('Pilha', () => {
  let pilha: Pilha;

  beforeEach(() => {
    pilha = new Pilha();
  });

  test('Adicionar elementos à pilha', () => {
    pilha.push(1);
    pilha.push(2);
    pilha.push(3);

    // A pilha deve ter tamanho 3 após adicionar os elementos.
    expect(pilha.size()).toBe(3);
    
    // A pilha não deve estar vazia após adicionar os elementos.
    expect(pilha.empty()).toBe(false);
  });

  test('Remover elementos da pilha', () => {
    pilha.push(1);
    pilha.push(2);
    pilha.push(3);

    // O valor removido deve ser o último adicionado (LIFO).
    expect(pilha.pop()).toBe(3);
    
    // A pilha deve ter tamanho 2 após remover um elemento.
    expect(pilha.size()).toBe(2);

    expect(pilha.pop()).toBe(2);
    expect(pilha.size()).toBe(1);

    expect(pilha.pop()).toBe(1);
    expect(pilha.size()).toBe(0);
    
    // A pilha deve estar vazia após remover todos os elementos.
    expect(pilha.empty()).toBe(true);
    
    // Ao tentar remover de uma pilha vazia, deve retornar null.
    expect(pilha.pop()).toBe(null);
    expect(pilha.size()).toBe(0);
    expect(pilha.empty()).toBe(true);
  });

  test('Obter valor do topo da pilha', () => {
    pilha.push(1);
    pilha.push(2);
    pilha.push(3);

    // O valor do topo deve ser o último adicionado.
    expect(pilha.peek()).toBe(3);

    // Tamanho deve ser 3
    expect(pilha.size()).toBe(3);

    pilha.pop(); // Remove o ultimo elemento adicionado (3).

    expect(pilha.peek()).toBe(2); // O novo topo deve ser o último adicionado (2).
    expect(pilha.size()).toBe(2); // Tamanho deve ser 2.

    pilha.pop();

    expect(pilha.peek()).toBe(1);
    expect(pilha.size()).toBe(1);

    pilha.pop();

    // Ao tentar obter o valor do topo de uma pilha vazia, deve retornar null.
    expect(pilha.peek()).toBe(null);
    expect(pilha.size()).toBe(0);
  });

  test('Verificar pilha vazia', () => {
    // A pilha deve estar vazia após a criação.
    expect(pilha.empty()).toBe(true);

    pilha.push(1);
    // A pilha não deve estar vazia após adicionar um elemento.
    expect(pilha.empty()).toBe(false);

    pilha.pop();
    // A pilha deve estar vazia após remover o único elemento.
    expect(pilha.empty()).toBe(true);
  });
});
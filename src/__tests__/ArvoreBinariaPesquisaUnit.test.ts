import { ArvoreBinariaPesquisa } from '../core/ArvoresBinariasDePesquisa';

describe('ArvoreBinariaPesquisa', () => {
  let arvore: ArvoreBinariaPesquisa;

  beforeEach(() => {
    arvore = new ArvoreBinariaPesquisa();
  });

  test('inserir valor na árvore vazia', () => {
    expect(arvore.inserir(5)).toBe(true);
    expect(arvore.getIsEmpty()).toBe(false);
  });

  test('inserir valor repetido na árvore', () => {
    arvore.inserir(5);
    expect(arvore.inserir(5)).toBe(false);
  });

  test('buscar valor existente na árvore', () => {
    arvore.inserir(5);
    arvore.inserir(3);
    arvore.inserir(7);
    expect(arvore.buscarRecursivo(3)).not.toBeNull();
  });

  test('buscar valor inexistente na árvore', () => {
    arvore.inserir(5);
    arvore.inserir(3);
    arvore.inserir(7);
    expect(arvore.buscarRecursivo(10)).toBeNull();
  });

  it('insere um valor menor que a raiz corretamente', () => {
    arvore.inserir(5);
    arvore.inserir(3);
    expect(arvore.buscarRecursivo(3)).not.toBeNull();
  });

  it('insere um valor maior que a raiz corretamente', () => {
    arvore.inserir(5);
    arvore.inserir(7);
    expect(arvore.buscarRecursivo(7)).not.toBeNull();
  });

  it('rejeita a inserção de um valor repetido', () => {
    arvore.inserir(5);
    expect(arvore.inserir(5)).toBe(false);
  });

  it('deve exibir os valores da árvore em ordem crescente', () => {
    const arvore = new ArvoreBinariaPesquisa();
    arvore.inserir(50);
    arvore.inserir(30);
    arvore.inserir(70);
    arvore.inserir(20);
    arvore.inserir(40);

    const consoleMock = jest.spyOn(console, 'log');
    const expectedOutput = [20, 30, 40, 50, 70];

    arvore.exibirEmOrdem();

    expect(consoleMock.mock.calls.map(args => args[0])).toEqual(expectedOutput);
    consoleMock.mockRestore();
  });

  it('deve exibir os valores da árvore em ordem pré-ordem', () => {
    const arvore = new ArvoreBinariaPesquisa();
    arvore.inserir(50);
    arvore.inserir(30);
    arvore.inserir(70);
    arvore.inserir(20);
    arvore.inserir(40);

    const consoleMock = jest.spyOn(console, 'log');
    const expectedOutput = [50, 30, 20, 40, 70];

    arvore.exibirPreOrdem();

    expect(consoleMock.mock.calls.map(args => args[0])).toEqual(expectedOutput);
    consoleMock.mockRestore();
  });

  it('deve exibir os valores da árvore em ordem pós-ordem', () => {
    const arvore = new ArvoreBinariaPesquisa();
    arvore.inserir(50);
    arvore.inserir(30);
    arvore.inserir(70);
    arvore.inserir(20);
    arvore.inserir(40);

    const consoleMock = jest.spyOn(console, 'log');
    const expectedOutput = [20, 40, 30, 70, 50];

    arvore.exibirPosOrdem();

    expect(consoleMock.mock.calls.map(args => args[0])).toEqual(expectedOutput);
    consoleMock.mockRestore();
  });
});

 
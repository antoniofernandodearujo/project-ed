import {ListaSimplesmenteEncadeada} from  "../core/ListaSimplesmenteEncadeada";

// Valores
const VALOR_ZERO = 0;
const VALOR_UM = 1;
const VALOR_DOIS = 2;
const VALOR_OITO = 8;
const VALOR_NOVE = 9;

// Posições
const POSICAO_ZERO = 0;
const POSICAO_UM = 1;
const POSICAO_DOIS = 2;
const POSICAO_SETE = 7;
const POSICAO_OITO = 8;
const POSICAO_NOVE = 9;

// Descrição dos testes
const SEM_RETORNO = -1; // Não deve retornar nada
const NAO_ENCONTRADO = -1; // Não deve encontrar

describe("Testes Unitários da Lista Sequencial", () => {

    test("Um lista simplismente encadeada deve ser instanciada corretamente", () => {
        
        const list = new ListaSimplesmenteEncadeada();
        // Lista deve ter tamanho 0 (vazia)
        expect(list.getTamanho()).toBe(0); 
       
    });
    
    test("Busca por valor e posição deve funcionar corretamente", () => {
        
        const list = defaultList();
        // Por posição
        expect(list.buscarPorPosicao(POSICAO_UM)).toBe(VALOR_UM); // Com posição deve encontrar o valor 1 na pos 1
        expect(list.buscarPorPosicao(POSICAO_OITO)).toBe(VALOR_OITO); // Com posição deve encontrar o valor 8 na pos 8
        expect(list.buscarPorPosicao(POSICAO_NOVE)).toBe(SEM_RETORNO); // Na posição 9 não deve ter retorno
        expect(list.buscarPorPosicao(POSICAO_ZERO)).toBe(SEM_RETORNO); // Na posição 0 não deve ter retorno

        // Por valor
        expect(list.buscarPorValor(VALOR_OITO)).toBe(POSICAO_OITO); // Por valor deve encontar o 1 na posição 1
        expect(list.buscarPorValor(VALOR_NOVE)).toBe(SEM_RETORNO); // Com número não deve encontar o valor 9
        
    });

    test("Remover um elemento da lista deve funcionar corretamente", () => {
        const list = defaultList();
        
        list.removerPorValor(VALOR_UM); // Remove o número 1 da lista
        expect(list.buscarPorValor(VALOR_UM)).toBe(NAO_ENCONTRADO); // A busca com número não deve encontrar o valor 1

        // Se a lista está se movendo corretamente, o número 2 deve estar na posição 1      
        expect(list.buscarPorPosicao(POSICAO_UM)).toBe(VALOR_DOIS); // A busca com posição deve encontrar o valor 2 na pos 1
        expect(list.buscarPorPosicao(POSICAO_SETE)).toBe(VALOR_OITO); // A busca com posição deve encontrar o valor 8 na pos 7
    });

    test("Inserir um elemento na lista deve funcionar corretamente", () => {
        const list = defaultList();
        list.removerPorPosicao(POSICAO_UM); // Remove o número 1 da lista

        //Pre-check na lista incompleta
        list.buscarPorPosicao(POSICAO_OITO).; 
        list.buscarPorPosicao(POSICAO_UM).toBe(VALOR_DOIS); 
        list.getTamanho().toBe(7);

        // Inserindo o número 1 na lista
        list.adicionar(VALOR_UM, POSICAO_UM).toBe(true);
        list.getTamanho().toBe(8); // A lista deve ter tamanho 8 agora

        // O valor 1 deve ser encontrado na posição 1 em ambas as buscas
        expect(list.searchInList(POSICAO_UM)).toBe(VALOR_UM);
        expect(list.searchInList(VALOR_UM).toBe(POSICAO_UM);

        // Se estiver movendo corretamente, o valor 2 deve estar na posição 2 e o 8 na posicao 8
        expect(list.searchInList(POSICAO_DOIS)).toBe(VALOR_DOIS);
        expect(list.searchInList(POSICAO_OITO)).toBe(VALOR_OITO);

        // Não deve ser possível inserir um valor em uma posição fora do range
        list.addInList(VALOR_NOVE, POSICAO_NOVE).toBe(SEM_RETORNO);
        list.addInList(VALOR_NOVE, POSICAO_ZERO).toBe(SEM_RETORNO);

        // Não deve ser possível inserir em posicao > size + 1
        const emptyList = new ListaSimplesmenteEncadeada();
        emptyList.addInList(VALOR_UM, POSICAO_DOIS).toBe(SEM_RETORNO);
        emptyList.addInList(VALOR_UM, POSICAO_OITO).toBe(SEM_RETORNO);

    });
    // Retorna uma Lista Simplesmente Encadeada com 8 posições e os valores de 1 a 8
    function defaultList(): ListaSimplesmenteEncadeada {
        const list = new ListaSimplesmenteEncadeada();
        // For
        for (let i = 1; i <= 8; i++) {
            list.adicionar(i, i);
        }
        return list;
    }



        
});

   

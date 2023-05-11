import {ListaSequencial} from "../core/ListaSequencial";

// Tamanho máximo da lista
const TAM_MAX = 8; 

// Utilizada inicializar com valores pré-definidos
const defaultList = [1, 2, 3, 4, 5, 6, 7, 8]

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
const POSICAO_OITO = 8;
const POSICAO_NOVE = 9;

// Descrição dos testes
const SEM_RETORNO = -1; // Não deve retornar nada
const NAO_ENCONTRADO = -1; // Não deve encontrar

describe("Testes Unitários da Lista Sequencial", () => {

    test("Um lista deve ser instanciada corretamente", () => {
        
        const list = new ListaSequencial(8, []);

        // Lista deve estar vazia
        expect(list.listIsEmpty()).toBe(true); 
        // Lista deve ter tamanho 0 (vazia)
        expect(list.size()).toBe(0); 
        // Lista não pode estar cheia
        expect(list.listIsfull()).toBe(false); 
    });
    test("A lista default deve estar correta", () => {
        
        const list = new ListaSequencial(TAM_MAX, defaultList);
        
        // Lista não deve estar vazia
        expect(list.listIsEmpty()).toBe(false); 
        // Lista deve ter tamanho 8
        expect(list.size()).toBe(TAM_MAX); 
        // Lista deve estar cheia
        expect(list.listIsfull()).toBe(true); 
        
    });

    test("Busca por valor e posição deve funcionar corretamente", () => {
        const list = new ListaSequencial(8, defaultList);

        // Por posição
        expect(list.searchInListLog(undefined, POSICAO_UM)).toBe(VALOR_UM); // Com posição deve encontrar o valor 1 na pos 1
        expect(list.searchInListLog(undefined, POSICAO_OITO)).toBe(VALOR_OITO); // Com posição deve encontrar o valor 8 na pos 8
        expect(list.searchInListLog(undefined, POSICAO_NOVE)).toBe(SEM_RETORNO); // Na posição 9 não deve ter retorno
        expect(list.searchInListLog(undefined, POSICAO_ZERO)).toBe(SEM_RETORNO); // Na posição 0 não deve ter retorno

        // Por valor
        expect(list.searchInListLog(VALOR_OITO)).toBe(POSICAO_OITO); // Por valor deve encontar o 1 na posição 1
        expect(list.searchInListLog(VALOR_NOVE)).toBe(SEM_RETORNO); // Com número não deve encontar o valor 9
        
        // Tratamento de erro
        expect(list.searchInListLog(undefined, undefined)).toBe(SEM_RETORNO); // Valor ou posição deve ser informado
        expect(list.searchInListLog(VALOR_ZERO, POSICAO_UM)).toBe(SEM_RETORNO); // Valor OU posição deve ser informado, nunca os dois
    });

    test("Remover um elemento da lista deve funcionar corretamente", () => {
        const list = new ListaSequencial(8, defaultList);
        
        list.removeInListLog(VALOR_UM); // Remove o número 1 da lista
        expect(list.searchInListLog(VALOR_UM)).toBe(NAO_ENCONTRADO); // A busca com número não deve encontrar o valor 1

        // Se a lista está se movendo corretamente, o número 2 deve estar na posição 1, e a pos 8 deve ser undefined
        expect(list.searchInListLog(undefined, POSICAO_UM)).toBe(VALOR_DOIS); // A busca com posição deve encontrar o valor 2 na pos 1
        expect(list.searchInListLog(undefined, POSICAO_OITO)).toBe(NAO_ENCONTRADO); // A busca com posição deve retornar undefined na pos 8
    });
        
});

   

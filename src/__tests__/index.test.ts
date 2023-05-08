import {ListaSequencial} from  "../core/ListaSequencial";

// Utilizada inicializar com valores pré-definidos
const defaultList = [1, 2, 3, 4, 5, 6, 7, 8]

describe("Lista Sequencial", () => {
    test("Deve criar uma lista vazia", () => {
        const list = new ListaSequencial(8, []); // Cria lista com tamanho máximo de 8 elementos
        expect(list.listIsEmpty()).toBe(true); // Lista deve estar vazia
        expect(list.listSize()).toBe(0); // Lista deve ter tamanho 0 (vazia)
        expect(list.listIsfull()).toBe(false); // Lista não pode estar cheia
        
    });

    test("Deve adicionar um elemento na lista", () => {
        const list = new ListaSequencial(8, []);
        const pos = 1;
        const num = 2;
        list.addInList(num, pos); // Adiciona o número 1 na posição 1
        
        // Quanto à estrutra da lista
        expect(list.listIsEmpty()).toBe(false); // Lista não deve estar vazia
        expect(list.listSize()).toBe(1); // Lista deve ter tamanho 1
        expect(list.listIsfull()).toBe(false); // Lista não pode estar cheia
       
        // Quanto ao conteúdo da lista
        expect(list.searchInList(undefined, pos)).toBe(num); // A busca com posição deve retornar o valor dois (num)
        expect(list.searchInList(num)).toBe(pos); // A busca com número deve retornar a posição 1
    });

    test("A lista default deve estar ")

    test("Deve remover um elemento da lista", () => {
        const list = new ListaSequencial(8, defaultList);
        const pos = 1;
        const num = 2;

        list.removeInList(num); // Remove o número 2 da lista
        expect(list.listIsEmpty()).toBe(false); // Lista não deve estar vazia


});

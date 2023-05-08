import {ListaSequencial} from  "../core/ListaSequencial";

describe("Lista Sequencial", () => {
    test("Deve criar uma lista vazia", () => {
        const lista = new ListaSequencial(8, []);
        expect(lista).not.toBeNull(); // A lista não deve ser nula
        expect(lista.max).toBe(8); // O tamanho máximo da lista deve ser 10
        expect(lista.listNumbers).toEqual([]); // A lista deve estar vazia
        expect(lista.nElements).toBe(0); // O número de elementos deve ser 0.
    });

});

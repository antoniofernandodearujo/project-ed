//components
import LinkendList from "../pages/listaSimplesmenteEncadeada/";
import DoublyLinkedList from "./listaDuplamenteEncadeada/";
import SequentialList from "./listaSequencial";

export default function Home() {

  return (
    <>
      <SequentialList />

      <br />
      <br />

      <LinkendList />

      <br />
      <br />

      <DoublyLinkedList />

    </>
  );
}

import {  Routes, Route } from "react-router-dom";
//pages
import Principal from "../views/home/"
import Welcome from "../views/welcome/"
import ListSequential from "../views/listaSequencial/"
import ListaSimplesmenteEncadeada from "../views/listaSimplesmenteEncadeada/"
import ListaDuplamenteEncadeada from "../views/listaDuplamenteEncadeada/"
import Pilha from "../views/pilha/"
import Arvore from "../views/arvore";
import Fila from "../views/fila/";

function Router() {
    if (typeof document !== "undefined") {
        return (
          <Routes>
            <Route index path="/" element={<Principal />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/list-sequential" element={<ListSequential />} />
            <Route path="/list-simplesmente-encadeada" element={<ListaSimplesmenteEncadeada />} />
            <Route path="/list-duplamente-encadeada" element={<ListaDuplamenteEncadeada />} />
            <Route path="/pilha" element={<Pilha />} />
            <Route path="/arvore" element={<Arvore />} />
            <Route path="/fila" element={<Fila />} />
          </Routes>
        );
    } else {
        return <></>;
    }
}

export default Router;
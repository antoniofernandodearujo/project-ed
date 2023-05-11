import {  Routes, Route } from "react-router-dom";
//pages
import Principal from "../views/home/"
import Welcome from "../views/welcome/"
import ListSequential from "../views/listaSequencial/"
import ListaSimplesmenteEncadeada from "../views/listaSimplesmenteEncadeada/"
import ListaDuplamenteEncadeada from "../views/listaDuplamenteEncadeada/"

function Router() {
    if (typeof document !== "undefined") {
        return (
          <Routes>
            <Route index path="/" element={<Principal />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/list-sequential" element={<ListSequential />} />
            <Route path="/list-simplesmente-encadeada" element={<ListaSimplesmenteEncadeada />} />
            <Route path="/list-duplamente-encadeada" element={<ListaDuplamenteEncadeada />} />
          </Routes>
        );
    } else {
        return <></>;
    }
}

export default Router;
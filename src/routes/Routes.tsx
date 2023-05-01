import {  Routes, Route } from "react-router-dom";
//pages
import Principal from "../pages/home/"
import Welcome from "../pages/welcome/"
import ListSequential from "../pages/listaSequencial/"
import ListaSimplesmenteEncadeada from "../pages/listaSimplesmenteEncadeada/"
import ListaDuplamenteEncadeada from "../pages/listaDuplamenteEncadeada/"

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
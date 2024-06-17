import React from "react";
import Aterrizaje from "./components/landingpage/aterrizaje";
import Contenido from "./components/landingpage/contenido";

const Landingpage = () => {
    return (
        <>
        <Aterrizaje />
        <img class="separadorLinea" src="./imagenes/usadas/separadorlinea.png" alt="Linea separador" />
        <Contenido />
        </>
    )
}

export default Landingpage;

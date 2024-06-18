import React from "react";
import Aterrizaje from "./aterrizaje";
import Contenido from "./contenido";

const Landingpage = () => {
    return (
        <>
        <Aterrizaje />
        <img class="separadorLinea" src="/assets/images/usadas/separadorlinea.png" alt="Linea separador" />
        <Contenido />
        </>
    )
}

export default Landingpage;

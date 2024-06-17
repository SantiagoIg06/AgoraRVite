import { useEffect, useState } from "react";

export function getUser() {

    const [usuario, setUsuario]  = useState({})


    useEffect(() => {
        fetch("json/usuario.json")
        .then (response  => response.json())
        .then (response => {
            // console.log ("datos desde el servicio  " + JSON.stringify(response))  
             setUsuario(response)
        })

    }, [])

   return usuario


}
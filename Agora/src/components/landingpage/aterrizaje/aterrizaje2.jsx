import React from "react";
import './aterrizaje2.css';

const Aterrizaje2 = () => {
return (
    <>
        <section className="aterrizaje2">
        <br />
        <h2>¿Quieres ganar dinero por tu experiencia?</h2>
        <br />
        <div className="contentInfBasic">
        <div>
            <div className="infBasic">
                <img className="imgSmall" src="./imagenes/logosSimbolos/conocimiento.png" alt="Conocimiento" />
                <h4>Postula tu conocimiento</h4>
                <img className="imgSmall" src="./imagenes/logosSimbolos/conocimiento.png" alt="Conocimiento" />
            </div>
            <div className="InfBasicParrafo">
                <p>Con agora puedes publicar tus habilidades de manera rapida y gratuita. Solo con llenar los datos que te requerimos puedes postularte a mas de 1000 trabajos</p>
            </div>   
        </div>
        <div>
            <div className="infBasic">
                <img className="imgSmall" src="./imagenes/logosSimbolos/precio.png" alt="Precio" />
                <h4>El dialogo es el precio</h4>
                <img className="imgSmall" src="./imagenes/logosSimbolos/precio.png" alt="Precio" />
            </div>
            <div className="InfBasicParrafo">
                <p>Como trabajador independiente tendras la opcion de dialogar con la empresa atravez del chat en el cual escojeran el precio</p>
            </div>  
        </div>
        <div>
            <div className="infBasic">
                <img className="imgSmall" src="./imagenes/logosSimbolos/seguridad.png" alt="Seguridad" />
                <h4>Tu seguridad es primero</h4>
                <img className="imgSmall" src="./imagenes/logosSimbolos/seguridad.png" alt="Seguridad" />
            </div>
                <div className="InfBasicParrafo">
                    <p>En agora nos importa tu seguridad por eso manejamos un ftro el cual nos permite analizar si las empresas registradas son seguras para los usuarios</p>
                </div>  
            </div>
        </div>   
    </section>
    </>
)
}

export default Aterrizaje2;
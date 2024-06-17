import React from "react";
import './informacion.css';

const Informacion = () => {
return (
    <>
        <section>
        <br />
        <h2>¿Necesitas a un trabajador?</h2>
        <div class="contentInfBasic">
            <div>
                <div class="infBasic">
                    <img class="imgSmall" src="./imagenes/logosSimbolos/trabajos.png" alt="Trabajos" />
                    <h4>Trabajos para todo</h4>
                    <img class="imgSmall" src="./imagenes/logosSimbolos/trabajos.png" alt="Trabajos" />
                </div>
            <div class="InfBasicParrafo">
                <p>En agora tenemos la idea de cumplir con las necesidades de las entidades que entren a nuestra pagina es por eso que manejamos una amplia categoria de trabajos para poder escojer</p>
            </div>
        </div>
        <div>
            <div class="infBasic">
                <img class="imgSmall" src="./imagenes/logosSimbolos/actualizacion.png" alt="Actualizacion" />
                <h4>Actualizacion continua</h4>
                <img class="imgSmall" src="./imagenes/logosSimbolos/actualizacion.png" alt="Actualizacion" />
            </div>
            <div class="InfBasicParrafo">
                <p>Tambien nos preocupádos del rendimineto de tu empresa es por eso que les pedimos a los usuarios que actualicen de manera continua sus perfes laborales.</p>
            </div>
        </div>
        <div>
            <div class="infBasic">
                <img class="imgSmall" src="./imagenes/logosSimbolos/solo.png" alt="Solo" />
                <h4>No estas solo</h4>
                <img class="imgSmall" src="./imagenes/logosSimbolos/solo.png" alt="Solo" />
            </div>
            <div class="InfBasicParrafo">
                <p>Nuestro equipo detras de la pagina web esta pendiente las 24 horas para cualquier inquietud o problema que se presente en nuestra pagina.</p>
            </div>
        </div>
        </div>
        </section>
    </>
)
}
export default Informacion;
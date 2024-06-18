import React from "react";
import './navegation.css';

const Navegation = () => {

return (
    <nav className="fixed-top navcompleta navbar navbar-expand-lg navbar-light bg-body-tertiary">
        <div className="container">
            <a>
                <img className="imgMode" src="/assets/images/usadas/modeDarkOrWhite.png" alt="Modo de visualizacion" />
            </a>
            <a className="navbar-brand me-2" href="../index.html">
                <img className="logos" src="/assets/images/logosSimbolos/logo2.png" alt="Logo" height="16" loading="lazy" style={{marginTop: "-1px"}} />
            </a>
            <div className="collapse navbar-collapse" id="navbarButtonsExample">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link" href="#"></a>
                    </li>
                </ul>          
                {<div className="d-flex align-items-center">
                    <button data-mdb-ripple-init type="button" className="btn btn-link px-3 me-2">
                        <a className="nav_lg_sg2 log" href="/login.html">Login</a>
                    </button>
                    <button data-mdb-ripple-init type="button" className="btn btn2 btn-primary me-3">
                        <a className="nav_lg_sg log2" href="#">Sign up</a>
                    </button>
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btnBuscar btn btn-outline-success" type="submit">Search</button>
                </div>}
            </div>
        </div>
    </nav>
)
}

export default Navegation;
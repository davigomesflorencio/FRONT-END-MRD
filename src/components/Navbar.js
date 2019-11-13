import React from 'react';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">MRD - Advogados</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/"> Inicio </a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="/substituiradvogado"><span className="sr-only">(current)</span>substituir advogado</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/"> Custas </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/"> Processos </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
import React from 'react';
import Busqueda from './navbar/Busqueda';
import CartWidget from './navbar/CartWidget';
import Dropdown from './navbar/Dropdown';
import Secciones from './navbar/Secciones';

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">icono empresa</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse " id="navbarColor02">
                    <ul className="navbar-nav me-auto">
                    <Secciones/>
                    <Dropdown/>
                    </ul>
                    <Busqueda/>
                    <CartWidget/>
                    
                    
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;

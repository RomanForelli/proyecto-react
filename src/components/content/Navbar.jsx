import React from 'react';
import {Link} from 'react-router-dom';
import Dropdown from '../layouts/dropdown';


const Navbar = ({contador}) => {

    const listaDropdown = ["Electrodomesticos", "Muebles", "Habitación"];


    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse " id="navbarColor02">
                    <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                    <Link className="nav-link active" to="/" alt='Siempre Vendo'> Home </Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link active" to="/Contacto"> Contacto</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link active" to="/Ofertas"> Ofertas </Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link active" to="/Nosotros">Nosotros</Link>
                    </li> 
                    <Dropdown lista = {listaDropdown}/>
                    </ul>
                    <Link className="btn btn-primary my-2 my-sm-0 m-2" to="/Carrito"><i className="fa-sharp fa-solid fa-cart-shopping"></i> </Link>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;


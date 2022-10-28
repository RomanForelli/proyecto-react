import React, { useContext} from 'react';
import {Link} from 'react-router-dom';
import { CarritoContext } from '../../CarritoContext';
import Dropdown from '../layouts/dropdown';
import "../../styles/App.css"





const Navbar = ({contador}) => {

    const listaDropdown = ["Electrodomesticos", "Muebles", "Habitación", "Otros"];

    const {carrito} = useContext(CarritoContext)

    
    const itemCount = carrito.reduce((counter, producto) => counter += producto.cantidad, 0)

    return (
        <>
        <div className='row'>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid ">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse  " id="navbarColor02">
                    <ul className="navbar-nav me-auto d-flex align-items-center bd-highlight">
                    <li className="nav-item">
                    <Link className="" to="/" alt='Siempre Vendo'> 
                    <img className='logo' src="https://firebasestorage.googleapis.com/v0/b/proyectoreact-forelli.appspot.com/o/imagenes%2Flogo1.png?alt=media&token=c4ed3b44-12ac-4d84-8435-f29bc64f0859" alt="Siempre Vendo" />
                    </Link>
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
                    <Link className="btn_carrito btn btn-primary my-2 my-sm-0 m-2" to="/Carrito">{itemCount}   <i className="fa-sharp fa-solid fa-cart-shopping"></i> </Link>
                    </div>
                </div>
            </nav>
        </div>    
        </>
    );
}

export default Navbar;


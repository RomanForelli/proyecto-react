import React from 'react';

const Secciones = () => {
    return (
        <>
        <li className="nav-item">
          <a className="nav-link active" href="#"> Home
            <span className="visually-hidden">(current)</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contacto</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Ofertas</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Nosotros</a>
        </li> 
        </>
    );
}

export default Secciones;

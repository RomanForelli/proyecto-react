import React from 'react';

const Dropdown = () => {
    return (
        <>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Productos</a>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">Cocina</a>
            <a class="dropdown-item" href="#">Electrodomesticos</a>
            <a class="dropdown-item" href="#">Muebles</a>
            <a class="dropdown-item" href="#">Baño</a>
            <a class="dropdown-item" href="#">Dormitorio</a>
            <a class="dropdown-item" href="#">Colchones</a>
            {/* <div class="dropdown-divider"></div> */}
            {/* <a class="dropdown-item" href="#">Separated link</a> */}
          </div>
        </li> 
        </>
    );
}

export default Dropdown;

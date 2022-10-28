import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import "../../styles/App.css"



const Dropdown = ({lista}) => {
    const [list, setList] = useState ([])
    useEffect(() => {
    const listaDrop = lista.map((categoria, indice) =>
    <Link key={indice} className='dropdown-item' to={`/categoria/${categoria}/${indice + 1}`}>{categoria}</Link>
    )  
    setList(listaDrop)  
    }, []);




    return (
        <>
            <li className="nav-item dropdown">
            <button className="nav-link active dropdown-toggle btn" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
            Categorias</button>
            <div className="dropdown-menu ">
            {list}
            </div>
            </li>  
        </>
    );
}

export default Dropdown;

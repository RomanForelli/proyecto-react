import {useState, useEffect} from 'react';
import React from 'react';
import { consultarBDD } from '../layouts/consultarBDD';
import { Link, useParams } from 'react-router-dom';

const Categoria = () => {

    const [productos, setProductos] = useState([])
    const {id} = useParams()
    useEffect ( () => {        
        consultarBDD("/productos.json").then(productos => {
            const productosCategoria = productos.filter( producto => producto.idCategoria === parseInt(id)) 
            const productosCards = productosCategoria.map( producto =>             
                <div className="card p-2 m-2" key={producto.id} style={{width: '22rem'}}>
                    <img className="card-img-top" src={"../img/" + producto.img} alt={producto.nombre} />
                    <div className="card-body">
                    <h4 className="card-title">{producto.nombre}</h4>
                    <p className="card-text"><strong>Precio:</strong>  {producto.precio}</p>
                    <p className="card-text"><strong>Marca:</strong>  {producto.marca}</p>
                    <p className="card-text"><strong>Stock:</strong>  {producto.stock}</p>
                    <Link to={"/ItemDetail/" + producto.id} className="btn btn-primary">Ver Producto</Link>
                    </div>
                </div>)
                setProductos(productosCards)
        })

    }, [id]);


    return (
        <>
        <div className='row'>
        {productos}
        </div> 
        </>
    );
}

export default Categoria;

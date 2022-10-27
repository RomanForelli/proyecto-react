import {useState, useEffect, useContext} from 'react';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { getProductos } from '../layouts/firebase';

const Categoria = () => {

    const [productos, setProductos] = useState([])
    const {id} = useParams()
    useEffect ( () => {        
        getProductos().then(productos => {
            const productosCategoria = productos.filter( producto => producto[1].idCategoria === parseInt(id)) 
            const productosCards = productosCategoria.map( producto =>             
                <div className="card tarjera col-md-4 m-4" key={producto[0]} /*style={{width: '15rem'}}*/>
                    <img className="card-img-top img-fluid" src={producto[1].img} alt={producto[1].nombre} />
                    <div className="card-body flex">
                    <h4 className="card-title text-wrap">{producto.nombre}</h4>
                    <p className="card-text"><strong>Precio:</strong>  {producto[1].precio}</p>
                    <p className="card-text"><strong>Marca:</strong>  {producto[1].marca}</p>
                    <p className="card-text"><strong>Stock:</strong>  {producto[1].stock}</p>
                    
                    <div className='justify-content-center align-item-center d-flex'>
                        <Link to={"/Producto/" + producto[0]} className="btn btn-primary">Ver Producto</Link></div>
                    </div>
                </div>)
                setProductos(productosCards)
                
        })

    }, [id]);


    return (
        <>
        <div className='container d-flex justify-content-center h-100'>
            <div className='row'>
                {productos}
            </div>
        </div>
        </>
    );
}

export default Categoria;

import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import "../../styles/App.css"
import { consultarBDD } from './consultarBDD';



const ItemList = () => {
    const [productos, setProductos] = useState([]);
    
    useEffect(() => {
        consultarBDD('/productos.json').then(productos => {
            const productosCards = productos.map( producto =>             
                <div className="card tarjera col-md-4 m-4" key={producto.id} /*style={{width: '15rem'}}*/>
                    <img className="card-img-top img-fluid" src={"./img/" + producto.img} alt={producto.nombre} />
                    <div className="card-body flex">
                    <h4 className="card-title text-wrap">{producto.nombre}</h4>
                    <p className="card-text"><strong>Precio:</strong>  {producto.precio}</p>
                    <p className="card-text"><strong>Marca:</strong>  {producto.marca}</p>
                    <p className="card-text"><strong>Stock:</strong>  {producto.stock}</p>
                    <div className='justify-content-center align-item-center d-flex'>
                    <Link to={"/Producto/" + producto.id} className="btn btn-primary">Ver Producto</Link>
                    </div>
                    </div>
                </div>)
        setProductos(productosCards)
        })
    }, []);


    return (
        <>
        {productos}  
        </>
    );
}

export default ItemList;


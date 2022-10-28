import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import "../../styles/App.css"
import { getProductos } from './firebase';



const ItemList = () => {
    const [productos, setProductos] = useState([]);

    
    
    useEffect(() => {
        getProductos().then(productos => {
            const productosCards = productos.map( producto =>             
                <div className="card tarjera col-md-4 m-4" key={producto[0]} style={{width: '20rem'}}>
                    <img className="card-img-top img-fluid" src={producto[1].img} alt={producto[1].nombre} />
                    <div className="card-body flex">
                    <h4 className="card-title text-wrap">{producto[1].nombre}</h4>
                    <p className="card-text"><strong>Precio:</strong>  {producto[1].precio}</p>
                    <p className="card-text"><strong>Marca:</strong>  {producto[1].marca}</p>
                    <p className="card-text"><strong>Stock:</strong>  {producto[1].stock}</p>
                    <div className='justify-content-center align-item-center d-flex'>
                    <Link to={"/Producto/" + producto[0]} className="btn btn-primary">Ver Producto</Link>
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


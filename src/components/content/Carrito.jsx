import React, {useState, useContext, useEffect} from 'react';
import { CarritoContext } from '../../CarritoContext';
import { Link } from 'react-router-dom';


const Carrito = () => {

    const {carrito, agregarProducto, eliminarProducto} = useContext(CarritoContext)

    const [carritoLocal, setCarritoLocal] = useState();

    useEffect(() => {
        const prodMostrar = carrito.map((producto) => 
                <div className="card tarjera col-md-4 m-4" key={producto.id} /*style={{width: '15rem'}}*/>
                    <img className="card-img-top img-fluid" src={producto.img} alt={producto.nombre} />
                    <div className="card-body flex">
                    <h4 className="card-title text-wrap">{producto.nombre}</h4>
                    <p className="card-text"><strong>Precio:</strong>  {producto.precio}</p>
                    <p className="card-text"><strong>Cantidad:</strong>  {producto.cantidad}</p>
                    <p className="card-text"><strong>Precio Total:</strong>  {producto.precio * producto.cantidad}</p>
                    <button className='btn btn-dark' onClick={() => eliminarProducto(producto)}>Eliminar</button>
                    </div>
                </div>)
        setCarritoLocal(prodMostrar)
    }, [carrito]);


    const app = (carrito.length != 0) ? <div className='row'> {carritoLocal} </div> : <> <h1>No existen elementos en el carrito</h1><Link className="btn btn-primary" to="/" alt='Siempre Vendo'> Home </Link></>

    return app
}

export default Carrito; 

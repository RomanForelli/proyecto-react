import React, {useState, useContext, useEffect} from 'react';
import { CarritoContext } from '../../CarritoContext';
import { Link } from 'react-router-dom';


const Carrito = () => {

    const {carrito, agregarProducto, eliminarProducto, vaciarCarrito} = useContext(CarritoContext)

    const [carritoLocal, setCarritoLocal] = useState();

    const total = carrito.reduce((counter, producto) => counter += producto.precio * producto.cantidad, 0)

    useEffect(() => {
        const prodMostrar = carrito.map((producto) => 
                <div className="card tarjera col-md-4 m-4" key={producto.id} /*style={{width: '15rem'}}*/>
                    <img className="card-img-top img-fluid" src={producto.img} alt={producto.nombre} />
                    <div className="card-body flex">
                    <h4 className="card-title text-wrap">{producto.nombre}</h4>
                    <p className="card-text"><strong>Precio:</strong>  {producto.precio}</p>
                    <p className="card-text"><strong>Cantidad:</strong>  {producto.cantidad}</p>
                    <p className="card-text"><strong>Subtotal:</strong>  {producto.precio * producto.cantidad}</p>
                    <button className='btn btn-dark' onClick={() => eliminarProducto(producto)}>Eliminar</button>
                    </div>
                </div>)
        setCarritoLocal(prodMostrar)
    }, [carrito]);


    if (carrito.length != 0) {
        return (
            <>
            <div className='row'> 
            {carritoLocal}
            <h4>{total}</h4>
            </div>
            <div className='m-2'>
            <Link className="btn btn-primary m-2" onClick={ () => vaciarCarrito()} alt='Siempre Vendo'> Vaciar Carrito </Link>
            <Link className="btn btn-primary m-2" to="/" alt='Siempre Vendo'> Home </Link>
            <Link className="btn btn-primary m-2" to="/Check" alt='Check out'> Finalizar Compra </Link>
            </div>
            </>
        )
    } else {
        return (
            <>
            <h1>No existen elementos en el carrito</h1>
            <Link className="btn btn-primary" to="/" alt='Siempre Vendo'> Volver al Home</Link>
            </>
        )
    }
}

export default Carrito; 

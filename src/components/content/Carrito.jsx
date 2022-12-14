import React, {useState, useContext, useEffect} from 'react';
import { CarritoContext } from '../../CarritoContext';
import { Link } from 'react-router-dom';


const Carrito = () => {

    const {carrito, agregarProducto, eliminarProducto, vaciarCarrito} = useContext(CarritoContext)

    const [carritoLocal, setCarritoLocal] = useState();

    const total = carrito.reduce((counter, producto) => counter += producto.precio * producto.cantidad, 0)

    useEffect(() => {
        const prodMostrar = carrito.map((producto) => 
                <div className="card tarjera col-12 " key={producto.id} /*style={{width: '15rem'}}*/>
                    <img className="card-img-top img-fluid" src={producto.img} alt={producto.nombre} />
                    <div className="card-body flex">
                    <h4 className="card-title text-wrap">{producto.nombre}</h4>
                    <p className="card-text"><strong>Precio:</strong>  ${producto.precio}</p>
                    <p className="card-text"><strong>Cantidad:</strong>  {producto.cantidad}</p>
                    <p className="card-text"><strong>Subtotal:</strong>  ${producto.precio * producto.cantidad}</p>
                    <div className='justify-content-center align-item-center d-flex'>
                    <button className='btn btn-dark' onClick={() => eliminarProducto(producto)}>Eliminar</button>
                    </div>
                    </div>
                </div>)
        setCarritoLocal(prodMostrar)
    }, [carrito]);


    if (carrito.length != 0) {
        return (
            <>
            <div className='container'>
                <div className="">
                    <div className='row d-flex justify-content-center align-item-center text-center '> 
                        {carritoLocal}
                        <h4 className='text-center' >Total: ${total}</h4>
                    </div>
                    <div className='d-flex justify-content-center text-center'>
                        <Link className="btn btn-primary m-2" onClick={ () => vaciarCarrito()} alt='Siempre Vendo'> Vaciar Carrito </Link>
                        <Link className="btn btn-primary m-2" to="/" alt='Siempre Vendo'> Home </Link>
                        <Link className="btn btn-primary m-2" to="/Check" alt='Check out'> Finalizar Compra </Link>
                    </div>
                </div>
            </div>
            
            </>
        )
    } else {
        return (
            <>
            <div className='row' style={{height: '70vh',}}>
            <div className="row d-flex justify-content-center align-items-center text-center" >
            <h1>No existen elementos en el carrito</h1>
            <div className='d-flex justify-content-center align-items-center text-center'>
            <Link className="btn btn-primary " to="/" alt='Siempre Vendo'> Volver al Home</Link>
            </div>         
            </div>
            </div>
            </>
        )
    }
}

export default Carrito; 

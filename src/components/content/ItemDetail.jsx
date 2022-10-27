import React from 'react';
import { useState,useContext } from 'react';
import { CarritoContext } from '../../CarritoContext';


const ItemDetail = ({producto}) => {
    const [cantidad, setCantidad] = useState(1);

    const {carrito, agregarProducto, eliminarProducto} = useContext(CarritoContext) 

    const cantProducto = (operacion) => {
        if(operacion == "+"){
            if(cantidad < producto[1].stock) {
                setCantidad(cantidad + 1)
            }
        } else {
            if (cantidad > 1) {
                setCantidad(cantidad - 1)
            }
        }

    }
    
    return (
        <>
        
            <div className='row align-item-center'>
                <div className="card tarjeraproducto col-md-8 m-4 text-center " style={{width: '80vh',}}>
                    <div className="">
                        <img src={producto[1].img} className="img-fluid rounded-start" alt={producto[1].nombre} />
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">{producto[1].nombre}</h4>
                        <p className="card-text"><strong>Precio:</strong> {producto[1].precio}</p>
                        <p className="card-text"><strong>Marca:</strong> {producto[1].marca}</p>
                        <p className="card-text"><strong>Stock:</strong> {producto[1].stock}</p>
                        <p className="card-text">{producto[1].descripcion}</p>
                        <div className="counter">
                        <p className='card-text'>{cantidad}</p>
                        <button className="btn btn-primary" onClick={() => cantProducto("-")}> - </button>
                        <button className="btn btn-primary"  onClick={() => cantProducto("+")}> + </button>
                        <div>
                        <button className="btn btn-primary" onClick={ () => agregarProducto(producto, cantidad)} > Agregar al carrito</button>
                        </div>
                        </div>
                    </div>                    
                </div>
            </div>
        </>
    );
}

export default ItemDetail;
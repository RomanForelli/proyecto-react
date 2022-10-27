import "../../styles/App.css";
import React, {useContext, useState} from 'react';
import { CarritoContext } from '../../CarritoContext';


const ItemCount = ({stock, producto}) => {

    const {carrito, agregarProducto, eliminarProducto} = useContext(CarritoContext) 

    const [cantidad, setCantidad] = useState(1);
    const cantProducto = (operacion) => {
        if(operacion == "+"){
            if(cantidad < stock) {
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
            <div className="counter">
                        <button className="btn btn-primary" onClick={() => cantProducto("-")}> - </button>
                        <p className='card-text m-3'>{cantidad}</p>
                        <button className="btn btn-primary"  onClick={() => cantProducto("+")}> + </button>
                        <div>
                        <button className="btn btn-primary" onClick={ () => agregarProducto(producto, cantidad)} > Agregar al carrito</button>
                        </div>
            </div>
            
        </>
    );
}

export default ItemCount;
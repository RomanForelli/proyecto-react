import "../../styles/App.css";
import React, {useContext, useState} from 'react';
import { CarritoContext } from '../../CarritoContext';


const ItemCount = ({producto}) => {

    const {carrito, agregarProducto, eliminarProducto} = useContext(CarritoContext) 

    const [cantidad, setCantidad] = useState(1);
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
            <div className="counter">
                        <p className='card-text'>{cantidad}</p>
                        <button className="btn btn-primary" onClick={() => cantProducto("-")}> - </button>
                        <button className="btn btn-primary"  onClick={() => cantProducto("+")}> + </button>
                        <div>
                        <button className="btn btn-primary" onClick={ () => agregarProducto(producto, cantidad)} > Agregar al carrito</button>
                        </div>
            </div>
            
        </>
    );
}

export default ItemCount;

import "../../styles/App.css";
import React, {useState} from 'react';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CarritoContext } from "../../CarritoContext";



const ItemCount = ({stock, producto,}) => {

    const {agregarProducto} = useContext(CarritoContext)

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
            <div className="row">
                        <div className="d-flex justify-content-center text-center">
                        <button className="btn btn-primary " onClick={() => cantProducto("-")}> - </button>
                        <p className='card-text m-3'>{cantidad}</p>
                        <button className="btn btn-primary"  onClick={() => cantProducto("+")}> + </button>
                        </div>
                        <div className="text-center">
                        <Link className="btn btn-primary m-2" to="/" alt='Siempre Vendo'> Volver al Home</Link>
                        <button className="btn btn-primary m.2" onClick={ () => agregarProducto(producto, cantidad)} > Agregar al carrito</button>
                        </div>
            </div>
        </>
    );
}

export default ItemCount;
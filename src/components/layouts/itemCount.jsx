import "../../styles/App.css";

import React, {useEffect, useState} from 'react';

const ItemCount = ({initial, stock, onAdd}) => {
    const [contador, setContador] = useState(parseInt(initial));

const sumar = () => {
    setContador(contador + 1)
}
const restar = () => {
    setContador(contador - 1)
}

useEffect( () => {
    setContador(parseInt(initial))

}, [initial])


    return (
        <>
            <div className="counter">
                <button disabled={contador <= 0} onClick={restar}> - </button>
                <span> {contador} </span>
                <button disabled={contador >= stock} onClick={sumar}> + </button>
                <div>
                <button disabled={contador <= 0} onClick={ () => onAdd(contador)} > Agregar al carrito</button>
                </div>
            </div>
            
        </>
    );
}

export default ItemCount;

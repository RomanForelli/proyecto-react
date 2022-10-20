import React from 'react';
import { useState } from 'react';


const ItemDetail = ({producto}) => {
    const [cantidad, setCantidad] = useState(1);

    const carrito = []

    const agregarAlCarrito = (prod, cant) => {
        let indice = carrito.findIndex(producto => producto.id === parseInt(prod.id))

        const prodCarrito = { id: producto.id, cantidad: cant}

        if(indice != -1) {
            carrito[indice] = prodCarrito
        } else {
            carrito.push(prodCarrito)
        }
        console.log(carrito)
    }

    

    const cantProducto = (operacion) => {
        if(operacion == "+"){
            if(cantidad < producto.stock) {
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
                        <img src={"/img/" + producto.img} className="img-fluid rounded-start" alt={producto.nombre} />
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">{producto.nombre}</h4>
                        <p className="card-text"><strong>Precio:</strong> {producto.precio}</p>
                        <p className="card-text"><strong>Marca:</strong> {producto.marca}</p>
                        <p className="card-text"><strong>Stock:</strong> {producto.stock}</p>
                        <p className="card-text">{producto.descripcion}</p>
                        <div className="counter">
                        <p className='card-text'>{cantidad}</p>
                        <button className="btn btn-primary" onClick={() => cantProducto("-")}> - </button>
                        <button className="btn btn-primary"  onClick={() => cantProducto("+")}> + </button>
                        <div>
                        <button className="btn btn-primary" onClick={ () => agregarAlCarrito(producto, cantidad)} > Agregar al carrito</button>
                        </div>
                        </div>
                    </div>                    
                </div>
            </div>
        

        </>
    );
}

export default ItemDetail;
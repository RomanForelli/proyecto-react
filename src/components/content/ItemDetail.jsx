import React from 'react';
import ItemCount from '../layouts/itemCount';
import "../../styles/App.css"


const ItemDetail = ({producto}) => {


    return (
        <>
            <div className="card tarjetaDetalle"  style={{width: '150vh',}}>
            <div className="row">
                <div className="col-md-5 d-flex align-items-center justify-content-center">
                <img src={producto[1].img} className="img-fluid tarjetaDetalle_img" alt={producto[1].nombre} />
                </div>
                <div className="col-md-7">
                <div className="card-body">
                <h2 className="card-title">{producto[1].nombre}</h2>
                        <p className="card-text"><strong>Precio:</strong> ${producto[1].precio}</p>
                        <p className="card-text"><strong>Marca:</strong> {producto[1].marca}</p>
                        <p className="card-text"><strong>Stock:</strong> {producto[1].stock}</p>
                        <p className="card-text"><strong>Caracteristicas:</strong></p>
                        <p className="card-text">{producto[1].descripcion}</p>
                        <ItemCount stock={producto[1].stock} producto={producto}/>
                </div>
                </div>
            </div>
            </div>

        </>
    );
}

export default ItemDetail;
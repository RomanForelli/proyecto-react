import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ItemCount from '../layouts/itemCount';

const ItemDetail = () => {
    const [detalle, setDetalle] = useState ([]);
    const {id} = useParams()
    useEffect(() => {
        fetch('/productos.json')
        .then(response => response.json())
        .then(productos => {
            const producto = productos.find(productoArray => productoArray.id == id)
            setDetalle(producto)
            
        })
}, []);

    
const onAdd = (cantidad) => {
    console.log(`compraste ${cantidad} unidades`)
}    
    
    
    return (
        <>
        <div className='container d-flex justify-content-center h-100'>
            <div className='row align-item-center'>
                <div className="card tarjeraDetalle col-md-8 m-4 text-center " style={{width: '80vh',}}>
                    <div className="">
                        <img src={`/img/${detalle.img}`} className="img-fluid rounded-start" alt={detalle.nombre} />
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">{detalle.nombre}</h4>
                        <p className="card-text"><strong>Precio:</strong> {detalle.precio}</p>
                        <p className="card-text"><strong>Marca:</strong> {detalle.marca}</p>
                        <p className="card-text"><strong>Stock:</strong> {detalle.stock}</p>
                        <p className="card-text">{detalle.descripcion}</p>
                        <ItemCount initial={0} stock={detalle.stock} onAdd={onAdd}/>
                    </div>                    
                </div>
            </div>
        </div>

        </>
    );
}

export default ItemDetail;

import React from 'react';
import ItemCount from '../layouts/itemCount';


const ItemDetail = ({producto}) => {
    console.log(producto)
    

const onAdd = (cantidad) => {
    console.log(`compraste ${cantidad} unidades`)
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
                        <ItemCount initial={0} stock={producto.stock} onAdd={onAdd}/>
                    </div>                    
                </div>
            </div>
        

        </>
    );
}

export default ItemDetail;
import React from 'react';
import ItemCount from '../layouts/itemCount';


const ItemDetail = ({producto}) => {
    
    
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
                        <ItemCount stock={producto[1].stock} producto={producto}/>
                    </div>                    
                </div>
            </div>
        </>
    );
}

export default ItemDetail;
import React from 'react';
import MostrarProductos from '../layouts/itemList';
import "../../styles/App.css"


const ItemListContainer = () => {

    const onAdd = (cantidad) => {
        console.log(`compraste ${cantidad} unidades`)
    }

    return (
    <>
        <div className='container d-flex justify-content-center h-100'>
            <div className='row'>
                <MostrarProductos/>
            </div>
        </div>
    </>
    );
}

export default ItemListContainer;

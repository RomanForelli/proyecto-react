import React from 'react';
import ItemList from '../layouts/itemList';
import "../../styles/App.css"


const ItemListContainer = () => {


    return (
    <>
        <div className='container d-flex justify-content-center h-100'>
            <div className='row'>
                <ItemList/>
            </div>
        </div>
    </>
    );
}

export default ItemListContainer;

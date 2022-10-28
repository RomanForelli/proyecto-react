import React, {useContext} from 'react';
import ItemList from '../layouts/itemList';
import "../../styles/App.css"


const ItemListContainer = () => {


    return (
    <>
        <div className='container'>
            <div className='row d-flex justify-content-center align-item-center text-center'>
                <ItemList/>
            </div>
        </div>
    </>
    );
}

export default ItemListContainer;

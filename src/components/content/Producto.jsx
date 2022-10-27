import React, {useState, useEffect, useContext} from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { getProducto } from '../layouts/firebase';


const Producto = () => {
    const [producto, setProducto] = useState ([]);
    const {id} = useParams()
    useEffect(() => {

        getProducto(id).then(prod => 
            {setProducto(prod)
    })
    }, [id]);


    if (producto.length != 0){
    return (
        <>
        
        <div className='container d-flex justify-content-center h-100'>
            <ItemDetail producto={producto}/>
        </div>

        </>
    );
}}

export default Producto;
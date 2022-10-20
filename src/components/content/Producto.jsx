import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { consultarBDD } from '../layouts/consultarBDD';


const Producto = () => {
    const [producto, setProducto] = useState ([]);
    const {id} = useParams()
    useEffect(() => {

        consultarBDD("/productos.json").then(productos =>{
            
            const producto1 = productos.find(productoArray => productoArray.id === parseInt(id))
            setProducto(producto1)
            
        })
}, [id]);

    return (
        <>
        
        <div className='container d-flex justify-content-center h-100'>
            <ItemDetail producto={producto}/>
        </div>

        </>
    );
}

export default Producto;
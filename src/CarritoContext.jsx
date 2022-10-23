import React, {useState, createContext} from 'react';



const CarritoContext = createContext()

const CarritoProvider = (props) => {

    const [carrito, setCarrito] = useState([]);

    const agregarProducto = (prod, cant) => {
        
        const aux = carrito
        let indice = aux.findIndex(producto => producto.id === parseInt(prod.id))

        const prodCarrito = {...prod, cantidad: cant}

        if(indice != -1) {
            aux[indice].cantidad = cant
        } else {
            aux.push(prodCarrito)
        }
        setCarrito(structuredClone(aux))
        console.log(carrito)
    }           
    
    const eliminarProducto = (prod) => {
        const aux = carrito
        
        let indice = aux.findIndex(producto => producto.id === parseInt(prod.id))

        aux.splice(indice, 1)
        setCarrito(structuredClone(aux))
    }

    
    return (
        <>
            <CarritoContext.Provider value={{carrito, agregarProducto, eliminarProducto}}>
                {props.children}
            </CarritoContext.Provider>
        </>   
            
    );
}

export {CarritoContext, CarritoProvider};

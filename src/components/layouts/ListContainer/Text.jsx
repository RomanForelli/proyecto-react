import React from 'react';

const Text = () => {
    return (
        <>
            <div className="col-md-8">
                <div className="card-body">
                <h5 className="card-title">Nombre Del Producto</h5>
                <h6 className="card-title">Precio $</h6>
                <p className="card-text">Dato 1</p>
                <p className="card-text">Dato 2</p>
                <p className="card-text">Dato 3</p>
                <p className="card-text">Dato 4</p>
                <a href="#" class="btn btn-primary m-1">Comprar Ahora</a>
                <a href="#" class="btn btn-primary m-1">Agregar al Carrito</a>
                </div>
            </div>
        </>
    );
}

export default Text;

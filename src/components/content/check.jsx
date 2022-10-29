import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { CarritoContext } from '../../CarritoContext';
import swal from "sweetalert2";


const Check = () => {

    const { vaciarCarrito } = useContext(CarritoContext)

    const finalizarCompra = () => {

        swal.fire (
            'Compra Realizada', 'Gracias por confiar en nosotros!', 'success'
        )

        vaciarCarrito()

    }

    const datosFormulario = React.useRef()

    const consultarFormulario = (e) => {
        e.preventDefault()
        console.log(datosFormulario)
        const datosForm = new FormData(datosFormulario.current)
        console.log(Object.fromEntries(datosForm))


    } 



    return (
        <>
        <div className='row justify-content-center m-5'>
            

        <form onSubmit={consultarFormulario} ref={datosFormulario} className="col-md-4 check">
            

            <h3 className='text-center p-2 m-2 '> Para finalizar la compra complete el siguiente formulario con sus datos:</h3>
            
            
        <div className="mb-3">
            <label htmlFor="Nombre" className="form-label">Nombre:</label>
            <input type="text" className="form-control" name="Nombre" aria-describedby="Nombre" required />
        </div>
        <div className="mb-3">
            <label htmlFor="Apellido" className="form-label">Apellido:</label>
            <input type="text" className="form-control" name="Apellido" aria-describedby="Apellido" required />
        </div>
        <div className="mb-3">
            <label htmlFor="email" className="form-label">Email:</label>
            <input type="email" className="form-control" name="email" required/>
        </div>
        <div className="mb-3">
            <label htmlFor="Telefono" className="form-label">Telefono</label>
            <input type="number" className="form-control" name="Telefono" aria-describedby="Telefono" required/>
        </div>
        <div className="mb-3">
            <label htmlFor="Direccion" className="form-label">Direccion:</label>
            <input type="text" className="form-control" name="Direccion" aria-describedby="Direccion" required/>
        </div>
        <div className='mb-3 justify-content-center text-center'>
            <Link className="btn btn-primary m-2" to="/" alt='Siempre Vendo'> Volver al Home</Link>
            <Link className="btn btn-primary m-2" onClick={() => finalizarCompra() } to="/" alt='Siempre Vendo'> Finalizar Compra</Link>
        </div>  
        </form>

        </div>  

        </>
    );
}

export default Check;

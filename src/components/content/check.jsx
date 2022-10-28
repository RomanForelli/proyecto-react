import React from 'react';

const Check = () => {

    const datosFormulario = React.useRef()

    const consultarFormulario = (e) => {
        e.preventDefault()
        console.log(datosFormulario)
        const datosForm = new FormData(datosFormulario.current)
        console.log(Object.fromEntries(datosForm))


    } 


    return (
        <>
    <div className="container">  
        <form onSubmit={consultarFormulario} ref={datosFormulario} className="col-md-6">
        
        <div className="mb-3">
            <label htmlFor="Nombre" className="form-label">Nombre:</label>
            <input type="text" className="form-control" name="Nombre" aria-describedby="Nombre" />
        </div>
        <div className="mb-3">
            <label htmlFor="Apellido" className="form-label">Apellido:</label>
            <input type="text" className="form-control" name="Apellido" aria-describedby="Apellido" />
        </div>
        <div className="mb-3">
            <label htmlFor="email" className="form-label">Email:</label>
            <input type="email" className="form-control" name="email" />
        </div>
        <div className="mb-3">
            <label htmlFor="email2" className="form-label">Repita su Email:</label>
            <input type="email" className="form-control" name="email2" />
        </div>
        <div className="mb-3">
            <label htmlFor="Telefono" className="form-label">Telefono</label>
            <input type="number" className="form-control" name="Telefono" aria-describedby="Telefono" />
        </div>
        <div className="mb-3">
            <label htmlFor="Direccion" className="form-label">Direccion:</label>
            <input type="text" className="form-control" name="Direccion" aria-describedby="Direccion" />
        </div>
        <button type="submit" className="btn btn-primary">Enviar Consulta</button>
        </form>
    </div>  

        </>
    );
}

export default Check;

import React from 'react';


const Contacto = () => {

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
            <label htmlFor="email" className="form-label">Email:</label>
            <input type="email" className="form-control" name="email" />
        </div>
        <div className="mb-3">
            <label for="textarea" className="form-label">Consulta:</label>
            <textarea className="form-control" name="Consulta" rows={5} cols={2}></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Enviar Consulta</button>
        </form>
    </div>  

        </>
    );
}

export default Contacto;

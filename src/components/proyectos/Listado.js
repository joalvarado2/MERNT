import React from 'react'
import Proyecto from "./Proyecto"

const Listado = () => {

    const proyectos =[
        {nombre:"tienda virtual"},
        {nombre:"intranet"},
        {nombre:"Diseño de Sitio Web"}
    ]
    return (
        <ul className="listado-proyectos">
            {proyectos.map(proyecto => (
                <Proyecto
                    proyecto={proyecto}
                />
            ))}
        </ul>
    )
}

export default Listado

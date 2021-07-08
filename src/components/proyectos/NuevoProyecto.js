import React, {useState} from "react";

const NuevoProyecto = () => {

    const [nuevoProyect, setNuevoProyect] = useState({
        nombre: ""
    })

    //extraer nombre de proyecto
    const {nombre} = nuevoProyect

    // Lee contenidos del input
    const onChangeProyecto = () => {
        setNuevoProyect({
            ...proyecto,
                [e.target.name] : e.target.value
        })
    }

    // cuando se envia un proyecto por medio del input
    const onSumitProject = (e) => {
        e.preventDefault()
    }
  return (
    <>
      <button type="button" className="btn btn-block btn-primario">
        Nueva Proyecto
      </button>

      <form 
        className="formulario-nuevo=proyecto"
        onSubmit={onSumitProject}
        >
        <input
          type="text"
          className="input-text"
          placeholder="Nombre Proyecto"
          name="nombre"
          value={nombre}
          onChange={onChangeProyecto}
        />
        <input
          text="submit"
          className="btn btn-primario btn-block"
          value="Agregar Tarea"
        />
      </form>
    </>
  );
};

export default NuevoProyecto;

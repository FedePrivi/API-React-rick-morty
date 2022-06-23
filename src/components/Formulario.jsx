import Swal from 'sweetalert2'
import { useFormulario } from "../hooks/useFormulario";

const Formulario = (props) => { //props.setNombrePersonaje lo podriamos haber destructurado es decir: PintarDatos = ({setNombrePersonaje})

    const [inputs, handleChange, reset] = useFormulario({
        nombre: "",
    });
    // console.log(inputs);
    // console.log(inputs.nombre);
    const {nombre} = inputs;
    // console.log(nombre);

    

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(nombre);

        if (!nombre.trim()) {
            return Swal.fire({
                title: 'Error!',
                text: 'Busque un personaje valido',
                icon: 'error',
                confirmButtonText: 'Aceptar'
              })
        }
        // console.log(props);
        // console.log(nombre.trim().toLowerCase());
        props.setNombrePersonaje(nombre.trim().toLowerCase())
        reset()
    }
   

  return (
      <form onSubmit={handleSubmit}>
          
        <input
          type="text" 
          placeholder="Ingrese personaje"
          className="form-control mb-2"
          value={nombre}
          onChange={handleChange}
          name="nombre"
          />

    <button 
    type="submit"
    className="btn btn-dark"
    >
        Buscar
    </button>
    </form>
  )
}

export default Formulario
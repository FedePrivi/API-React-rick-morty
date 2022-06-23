import Swal from 'sweetalert2'
import { useEffect, useState } from "react";
import Personaje from './Personaje';
import Paginacion from './Paginacion';
import Loading from './Loading';


const PintarDatos = (props) => {  //props.nombrePersonaje lo podriamos haber destructurado es decir: PintarDatos = ({nombrePersonaje})

    const [personajes, setPersonajes] = useState([]);
    const [loading, setLoading]= useState(false)
  
    

    useEffect(() => {
        consumirApi(props.nombrePersonaje)
    },[props.nombrePersonaje])


    //props.nombrePersonaje = nombre proque lo estoy pasando en la llamada de la funcion consumirApi(--> nombre <--) = consumirApi(--> props.nombrePersonaje <--)

    const consumirApi = async (nombre) => {

        setLoading(true)

        try {

            const res = await fetch(`https://rickandmortyapi.com/api/character/?name=${nombre}&status=alive`)
            // console.log(res);


           //ok es una propiedad de la respuesta a la solicitud q nos devuelve true si se encuentra o false si no se encuentra entonces si res.ok es falso (!) mostrar la alerta
           if (!res.ok) {      
                return  Swal.fire({
                    title: 'Error!',
                    text: 'Personaje no encontrado',
                    icon: 'error',
                    confirmButtonText: 'Aceptar'
                  })
            }
            //si no entra al if lo que hacemos con la respuesta es:
        const datos = await res.json()
        // console.log(datos.results);
        // console.log(...datos.results);
        setPersonajes(datos.results)
        // setPersonajes((old) => [...old, ...datos.results]) //si quiero concatenar la busqueda es decir que me queden los personajes d ela busqueda anterior mas lo de la busqueda nueva

        
        
               
        } catch (error) {

            console.log(error);

        }finally{

            setLoading(false)

        }
    }

  

/////////////////////////////////////
    // INICIO PAGINACION
/////////////////////////////////////


const [pagina, setPagina] = useState(1);
const [porPagina, setPorPagina] = useState(5);
  
  const maximo = personajes.length / porPagina  //cantidad de personajes dividido cuantos personajes van por apgina = cantidad de paginas
//   console.log(maximo);

/////////////////////////////////////
//FIN PAGINACION
/////////////////////////////////////

if (loading) {
    return <Loading />;
}

return (
    <div className='row mt-2'>
        {
            personajes.slice(
            (pagina - 1) * porPagina, 
            (pagina -1) * porPagina + porPagina)
            .map(item => (
                <Personaje key={item.id} personaje={item}/>
            ))
        }

        <Paginacion pagina={pagina} setPagina={setPagina} maximo={maximo}/>
    </div>
  )
}

export default PintarDatos
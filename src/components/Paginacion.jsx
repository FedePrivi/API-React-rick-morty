

import Swal from 'sweetalert2'
const Paginacion = ({pagina, setPagina, maximo}) => {

// console.log(pagina);
// console.log(maximo);






    const nextPage = () => {
       
        if (pagina >= 4) {
            return Swal.fire({
                title: 'Lo siento!',
                text: 'No existen mas personajes',
                icon: 'warning',
                confirmButtonText: 'Aceptar'
              })
        }else{
            setPagina(pagina + 1)
            
        }
       
    }

    const previousPage = (e) => {
    //    console.log(e.target);
        if (pagina === 1) {
            setPagina(1)
        }else{
           
            setPagina( pagina - 1 )

        }
        
    }

        
  

    const numPage = (e) => {
        // console.log(e.target.innerText);
        console.log();
        setPagina(Number(e.target.innerText))  //lo transforme a number porque si tocaba en un numero y despues en next me renderizaba en blanco
       
    }

    



  return (
      <>
        <nav aria-label="..." >
            <ul className="pagination justify-content-center mb-5 mt-2">

                <li className={`page-item`}>
                    <a
                      name="prev"
                      className="page-link "
                      href="#"
                      onClick={previousPage}
                      >
                        Previous</a>
                </li>
            
                <li className="page-item">
                    <a className="page-link"  href="#"  onClick={numPage}>1</a>
                </li>

                <li className="page-item " aria-current="page">
                    <a className="page-link" href="#" onClick={numPage}>2</a>
                </li>

                <li className="page-item">
                    <a className="page-link" href="#" onClick={numPage}>3</a>
                </li>

                <li className="page-item">
                    <a className="page-link" href="#" onClick={numPage}>4</a>
                </li>
            
                <li className="page-item">
                   <a
                      className="page-link"
                      href="#"
                      onClick={nextPage}
                      >Next</a>
                </li>
                
            </ul>
        </nav>
    
    </>
  )
}

export default Paginacion
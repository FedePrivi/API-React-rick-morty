import React, { useEffect, useState } from 'react'
import Formulario from "./components/Formulario.jsx";
import PintarDatos from './components/PintarDatos.jsx';

const App = () => {

  const [nombrePersonaje, setNombrePersonaje] = useState('')


  //////////////////////////
  //LOCALSTORAGE
  /////////////////////////
  useEffect(() => {
    // console.log(localStorage.getItem("nombreApi"));
    if (localStorage.getItem("nombreApi")) {
      setNombrePersonaje(JSON.parse(localStorage.getItem("nombreApi")))
    }
  },[])

  useEffect(() => {
    localStorage.setItem("nombreApi", JSON.stringify(nombrePersonaje))
    console.log(nombrePersonaje);
  }, [nombrePersonaje])
  
  //////////////////////////
  //LOCALSTORAGE
  /////////////////////////

  
  return (
    <div className='container'>

        <h1>APP-Rick and Morty</h1>
        <Formulario setNombrePersonaje={setNombrePersonaje}/>
        <PintarDatos nombrePersonaje={nombrePersonaje}/>
        

    </div>
  )
}  

export default App

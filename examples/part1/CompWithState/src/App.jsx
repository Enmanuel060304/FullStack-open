// import { useState } from "react";
import './App.css'

const App = () => {
  const persona = {
    nombre: 'jose',
    edad: 25
  }
  
  
  const newPerson = {...persona, nombre:'Enmanuel', edad: 26}
  
  console.log(newPerson);
  console.log(persona);
  return (
    <h1>hola mundo</h1>
  )
}

export default App;
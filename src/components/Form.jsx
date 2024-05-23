import { useState } from "react"
import Card from "./Card"
import ErrorMessage from "./ErrorMessage"

const Form = () => {
  
  const [datos, setDatos] = useState({
    nombre: "",
    color: "",
    libro: "",
    mascotas: ""
  })
  const [show, setShow] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    if(datos.nombre.trim().length > 2 && datos.color.length > 5 && datos.libro && datos.mascotas){
      setError(false)
      setShow(true)
    } else{
      setShow(false)
      setError(true)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Ingresa tu nombre: </label>
          <input type="text" value={datos.nombre} onChange={e => setDatos({...datos, nombre: e.target.value})}/>
        </div>
        <div>
          <label>Ingresa un color de al menos 6 letras: </label>
          <input type="text" value={datos.color} onChange={e => setDatos({...datos, color: e.target.value})}/>
        </div>
        <div>
          <label>Ingresa el último libro que has leído: </label>
          <input type="text" value={datos.libro} onChange={e => setDatos({...datos, libro: e.target.value})}/>
        </div>
        <div>
          <label>Ingresa el número de mascotas que tienes: </label>
          <input type="number" value={datos.mascotas} onChange={e => setDatos({...datos, mascotas: e.target.value})}/>
        </div>
        <button type="submit">Enviar</button>
      </form>
      {show && <Card datos={datos}/>}
      {error && <ErrorMessage text="Por favor chequea que la información sea correcta"/>}
    </>
  )
}

export default Form
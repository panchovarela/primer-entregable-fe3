const Card = ({datos}) => {
  
  const {nombre, color, libro, mascotas} = datos

  return (
    <div>
      <h1>Carta de {nombre}</h1>
      <h3>Su color favorito es el {color}</h3>
      <h3>El último libro que ha leído es {libro}</h3>
      <h3>Tiene {mascotas} mascotas</h3>
    </div>
  )
}

export default Card
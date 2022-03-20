import React from 'react'
import "../statics/css/Producto.css"

const Producto = props => {
  const {nombre, foto, descripcion} = props

  return (
    <>
      <div className="Card">
      <img src={"https://odorem.herokuapp.com"+foto[0].formats.thumbnail.url} alt="" className='Card-img'/>
      <h4>{nombre}</h4>
      <p>{descripcion}</p>
      <button>Ver más...</button>
      </div>
    </>
  )
}

export default Producto
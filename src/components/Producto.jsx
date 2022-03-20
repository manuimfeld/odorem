import React from 'react'
import "../statics/css/Producto.css"

const Producto = props => {
  const {nombre, foto} = props

  return (
    <>
    <li className='Producto-card'>
      <img width="230" height="345" src={"https://odorem.herokuapp.com"+foto[0].formats.thumbnail.url} alt="" className='Card-img'/>
      <p className="Producto-name">{nombre}</p>
    </li>
    </>
  )
}

export default Producto
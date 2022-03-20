import React from 'react'
import "../statics/css/Producto.css"

const Seleccionado = props => {
  const {nombre, foto, descripcion} = props
  const handleClick = ()=>{
      let compra = localStorage.getItem('compras')
      if (compra === null){
        compra = nombre
      } else {
        compra = compra + ',' + nombre
      }
      localStorage.setItem('compras', compra)
  }

  return (
    <>
      <div className="Card">
      <img src={"https://odorem.herokuapp.com"+foto[0].formats.thumbnail.url} alt="" className='Card-img'/>
      <h4>{nombre}</h4>
      <p>{descripcion}</p>
      <button onClick={handleClick}>Ver más...</button>
      </div>
    </>
  )
}

export default Seleccionado
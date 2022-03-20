import React, {useState, useEffect} from 'react'
import Seleccionado from '../components/Seleccionado'

const Carrito = () => {
  let url = "https://odorem.herokuapp.com/productos"
  const [compra, setCompra] = useState(0)
  useEffect(() => {
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      let compra = localStorage.getItem('compras')
      let compraArray = compra.split(",")
      let seleccion = []
      for ( let ite of compraArray){
        for(let prod of data){
          if (prod.nombre === ite){
            seleccion.push(prod)
          }
        }
      }
      setCompra(seleccion)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <>
    <div className="container">
        {compra.length > 0 && compra.map((item, i) => <Seleccionado key={item.id+i} {...item}></Seleccionado>)}
    </div>
    </>
  )
}

export default Carrito
import React, {useState, useEffect} from 'react'
import Producto from "../components/Producto"
import '../statics/css/Productos.css'

const Productos = () => {
  let url = "https://odorem.herokuapp.com/productos"
  const [productos, setProductos] = useState(0)
  useEffect(() => {
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      setProductos(data)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    <div className="Productos-div">
      <br></br>
      <ul className='Productos-grid'>
      {productos.length > 0 && productos.map((item, i) => <Producto key={item.id} {...item}></Producto>)}
      </ul>
    </div>
  )
}
export default Productos
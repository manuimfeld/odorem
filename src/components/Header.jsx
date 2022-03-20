import React from 'react'
import {Link} from "react-router-dom"
import "../statics/css/Header.css"

const Header = () => {
  return (
    <header>
      <ul className='Header-list'>
        <li>
        <Link to="/">Home</Link>
        </li>
        <li>
        <Link to="/Productos">Productos</Link> 
        </li>
        <li>
        <Link to="/Carrito">Carrito</Link> 
        </li>
    </ul>
    </header>
  )
}

export default Header
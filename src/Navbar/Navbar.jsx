import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './Navbar.css'


const Navbar = () => {
  return (
    <div className='navbar'> 
        <h1>Koala Shop</h1>
        <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Productos</a></li>
            <li><a href="#">Nosotros</a></li>
            <li><a href="#">Contacto</a></li>
        </ul>
        <CartWidget />
    </div>
  )
}

export default Navbar

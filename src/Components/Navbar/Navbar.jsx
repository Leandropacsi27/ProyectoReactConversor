import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <header className="header" id='home'>
      <a href="/" className='logo'>CONVERSOR.</a>

      <nav className="navbar">
        <a href="#euro">Inicio</a>
        <a href="#euro">Euro a dólar</a>
        <a href="#soles">Soles a dólar</a>
        <a href="#formulario">Contacto</a>
        <a href="#contact">Acerca de</a>
      </nav>
    </header>
  )
}

export default Navbar
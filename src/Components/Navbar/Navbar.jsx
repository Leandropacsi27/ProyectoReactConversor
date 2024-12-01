import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <header className="header" id='home'>
      <a href="/" className='logo'>CONVERSOR</a>

      <nav className="navbar">
        <a href="#euro" className="navbar-link">Inicio</a>
        <a href="#euro" className="navbar-link">Euro a dólar</a>
        <a href="#soles" className="navbar-link">Soles a dólar</a>
        <a href="#formulario" className="navbar-link">Contacto</a>
        <a href="#contact" className="navbar-link">Acerca de</a>
      </nav>
    </header>
  )
}

export default Navbar

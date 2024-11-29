import React from 'react'
import './Section.css'

const Section = () => {
  return (
    <section className='form-register' id="formulario">
        <h4>Formulario</h4>
        <input className="controls" type="text" name="nombres" id="nombres" placeholder="ingrese sus nombres"/>
        <input className="controls" type="text" name="apellidos" id="apellidos" placeholder="ingrese sus apellidos"/>
        <input className="controls" type="email" name="correo" id="correo" placeholder="ingrese su correo"/>
        <input className="controls" type="password" name="contraseña" id="contraseña" placeholder="ingrese su contraseña"/>
        <p>Estoy de acuerdo con <a href="#">Términos y condiciones</a></p>
        <input className="botons" type="submit" value="Registrar"/>
        <p><a href="#">¿Ya tengo cuenta?</a></p>
    </section>
  )
}

export default Section

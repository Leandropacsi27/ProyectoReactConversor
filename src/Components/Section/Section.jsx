import React from 'react'
import './Section.css'

const Section = () => {
  return (
    <section className='form-register' id="formulario">
        <h4>Formulario</h4>
        <input class="controls" type="text" name="nombres" id="nombres" placeholder="ingrese sus nombres"/>
        <input class="controls" type="text" name="apellidos" id="apellidos" placeholder="ingrese sus apellidos"></input>
        <input class="controls" type="text" name="apellidos" id="apellidos" placeholder="ingrese sus apellidos"></input>
        <input class="controls" type="password" name="contraseña" id="contraseña" placeholder="ingrese su contraseña"></input>
        <p>Estoy de acuerdo con <a href="#">Terminos y condiciones</a></p>
        <input class="botons" type="submit" value="Registrar"/>
        <p><a href="#">¿Ya tengo cuenta?</a></p>
      
    </section>
  )
}

export default Section
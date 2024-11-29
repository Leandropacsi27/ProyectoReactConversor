import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
        <a href="#home" id="contact" className="arriba">
            <i className="fa-solid fa-angles-up"></i>
        </a>
        <div className="redes">
            <a href="https://google.com/" target="_blank" rel="noopener noreferrer"><i
                    className="fa-brands fa-github"></i></a>
            <a href="https://google.com/" target="_blank" rel="noopener noreferrer"><i
                    className="fa-brands fa-linkedin-in"></i></a>
            <a href="https://google.com/" target="_blank" rel="noopener noreferrer"><i
                    className="fa-brands fa-whatsapp"></i></a>
        </div>

        <div className="footer-contenido">
            <p>Este sitio utiliza recursos de terceros. Los derechos de autor pertenecen a sus respectivos autores.</p>
            <p>Íconos proporcionados por <a href="https://fontawesome.com" target="_blank">Font Awesome</a>, <a
                    href="https://iconos8.es/icons" target="_blank">Icons</a> y <a href="https://www.vectorlogo.zone/"
                    target="_blank"> VectorLogoZone</a></p>

            <ul className="footer-enlaces">
                <li><a href="#">Términos y Condiciones</a></li>
                <li><a href="#">Política de Privacidad</a></li>
                <li><a href="#">Contáctanos</a></li>
                <li><a href="#">Ayuda</a></li>
            </ul>
        </div>

    </footer>
 )
}

export default Footer

import React from 'react'
import './SectionConversor.css'
import {useRef, useState, useEffect} from "react"

const SectionConversor = () => {

    const [valorCambioEuro, setValorCambioEuro] = useState(null);
    const [valorCambioSoles, setValorCambioSoles] = useState(null);
    const eurosRef = useRef();
    const solesRef = useRef();
    const resultadoEuroRef = useRef();
    const resultadoSolesRef = useRef();

    useEffect(() => {

      const llamaApiCambio = async () => {
        try {
          const respuestaEuro = await fetch("https://v6.exchangerate-api.com/v6/ce7fd8607496861f96a8a833/latest/EUR");
          const datosEuro = await respuestaEuro.json();
          setValorCambioEuro(datosEuro.conversion_rates.USD);

          const respuestaSoles = await fetch("https://v6.exchangerate-api.com/v6/ce7fd8607496861f96a8a833/latest/PEN");
          const datosSoles = await respuestaSoles.json();
          setValorCambioSoles(datosSoles.conversion_rates.USD);

        } catch (error) {
          console.error("Error al acceder a la API: ", error);
        }
      };

      llamaApiCambio();

    }, []);

    const calcularEuro = () => {
      const eurosValor = parseFloat(eurosRef.current.value);

      if (valorCambioEuro !== null && !isNaN(eurosValor)) {
        const dolares = eurosValor * valorCambioEuro; 
        resultadoEuroRef.current.innerHTML = dolares.toFixed(2) + " $"; 
      } else {
        resultadoEuroRef.current.innerHTML = "Por favor ingresa un valor válido"; 
      }
    }

    const calcularSoles = () => {
      const solesValor = parseFloat(solesRef.current.value);

      if (valorCambioSoles !== null && !isNaN(solesValor)) {
        const dolares = solesValor * valorCambioSoles; 
        resultadoSolesRef.current.innerHTML = dolares.toFixed(2) + " $"; 
      } else {
        resultadoSolesRef.current.innerHTML = "Por favor ingresa un valor válido"; 
      }
    }

  return (
    <>
    <div className='container-conversor' id="euro">
      <h1>Conversor Euro-Dolar</h1>
      <input className='conversor-controls' type="text" ref={eurosRef} />
      <button className='conversor-controls btn' onClick={calcularEuro}>Convertir</button>
      <div className='conversor resultados' ref={resultadoEuroRef}></div>
    </div>

    <div className='container-conversor' id='soles'>
      <h1>Conversor Soles-Dolar</h1>
      <input className='conversor-controls' type="text" ref={solesRef} />
      <button className='conversor-controls btn' onClick={calcularSoles}>Convertir</button>
      <div className='conversor resultados' ref={resultadoSolesRef}></div>
    </div>
    </>
  );
}

export default SectionConversor;

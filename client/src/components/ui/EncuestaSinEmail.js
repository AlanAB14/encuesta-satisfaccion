import React, { useState } from 'react'
import { EncuestaCheck } from './EncuestaCheck'
import { EncuestaComentario } from './EncuestaComentario'
import { EncuestaValoracion } from './EncuestaValoracion'
import { Header } from './Header'
import estrellaGrande from './../../assets/estrella-grande.png'


export const EncuestaSinEmail = () => {
  const [checkValuesTemplate, setCheckValuesTemplate] = useState({
    calidadDeAtencion: false,
    conformidadEnLaResolucion: false,
    tiempoDeResolucion: false,
    facilidadParaRealizarTramite: false,
    otro: false,
    otroText: ''
})

  return (
    <div>
        <Header />
        <div className='sin-email'><h1 className='titilium-regular sin-email-text'>Debes ingresar al sitio desde el correo electrónico</h1></div>
        <div className="block_title"><p className="titilium-bold title_valoracion">Como valorás la atención recibida</p><img className='img_estrella' src={ estrellaGrande } alt="img_estrella" /></div>
        <EncuestaValoracion disableButton={true} />
        <EncuestaCheck disableButton={true} checkValuesTemplate={checkValuesTemplate} setCheckValuesTemplate={setCheckValuesTemplate} />
        <EncuestaComentario disableButton={true} />
    </div>
  )
}

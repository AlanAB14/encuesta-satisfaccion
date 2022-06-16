import React from 'react'

export const EncuestaOpcion = ({estrella, disableButton, texto}) => {
  return (
        <div className={ disableButton ? "box_rta box_rta-disabled" : "box_rta"}>
            <img src={estrella} className="estrellas_puntuacion" alt="img_estrella_rta " />
            <p className="titilium-regular texto-respuesta">{texto}</p>
        </div>
  )
}

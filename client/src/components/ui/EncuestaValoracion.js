import React, { useState } from 'react';
import { EncuestaOpcion } from './EncuestaOpcion';
import imagenUnaEstrella from './../../assets/1estre.svg'
import imagenDosEstrellas from './../../assets/2estre.svg'
import imagenTresEstrellas from './../../assets/3estre.svg'
import imagenCuatroEstrellas from './../../assets/4estre.svg'
import imagenCincoEstrellas from './../../assets/5estre.svg'

export const EncuestaValoracion = ({disableButton, valoracion, setValoracion, setErrorValoracion}) => {
    const [classValoracion, setClassValoracion] = useState('')


    const cambiarValoracion = (valoracionSeleccionada, claseSeleccionada) => {
        setValoracion(valoracionSeleccionada)
        setClassValoracion(claseSeleccionada)
        setErrorValoracion(false)
    }

  return (
    <div className="block_respuestas">
        <div className={`${classValoracion === 'excelente' ? 'activo' : ''} box_rta-margin`} onClick={(e) => !disableButton && cambiarValoracion('Excelente', 'excelente')}>
            <EncuestaOpcion estrella={imagenCincoEstrellas} disableButton={disableButton}  texto={"Excelente"}/>
        </div>
        <div className={`${classValoracion === 'muy-buena' ? 'activo' : ''} box_rta-margin`} onClick={() => !disableButton && cambiarValoracion('Muy Buena', 'muy-buena')}>
            <EncuestaOpcion estrella={imagenCuatroEstrellas} disableButton={disableButton}  texto={"Muy Buena"}/>
        </div>
        <div className={`${classValoracion === 'buena' ? 'activo' : ''} box_rta-margin`} onClick={() => !disableButton && cambiarValoracion('Buena', 'buena')}>
            <EncuestaOpcion estrella={imagenTresEstrellas} disableButton={disableButton}  texto={"Buena"}/>
        </div>
        <div className={`${classValoracion === 'insatisfactoria' ? 'activo' : ''} box_rta-margin`} onClick={() => !disableButton && cambiarValoracion('Insatisfactoria', 'insatisfactoria')}>
            <EncuestaOpcion estrella={imagenDosEstrellas} disableButton={disableButton}  texto={"Insatisfactoria"}/>
        </div>
        <div className={`${classValoracion === 'muy-insatisfactoria' ? 'activo' : ''} box_rta-margin`} onClick={() => !disableButton && cambiarValoracion('Muy Insatisfactoria', 'muy-insatisfactoria')}>
            <EncuestaOpcion estrella={imagenUnaEstrella} disableButton={disableButton}  texto={"Muy Insatisfactoria"}/>
        </div>
    </div>
  )
}

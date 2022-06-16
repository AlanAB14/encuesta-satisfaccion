import React from 'react'
import imageCooperacion from './../../assets/logo_cooperacion.png'

export const Header = () => {
  return (
    <div>
        <div className="fondo-celeste"></div>
        <div className="fondo-azul">
            <img src={imageCooperacion} className="fondo-azul__img" alt="img_cooperacion" />
        </div>
    </div>
  )
}

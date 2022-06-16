import React from 'react'
import imageOK from './../../assets/OK-grande.png'

export const MuchasGracias = () => {
  return (
      <div className='section_muchas-gracias'>
        <div className='block-muchas-gracias'>
            <div className='muchas-gracias-text'>
                <p className='titilium-bold muchas-gracias-title'>Muchas Gracias!</p>
                <p className='titilium-regular'>por responder la encuesta</p>
            </div>
            <div className='muchas-gracias-img'>
                <img src={imageOK} className="ok-image" alt='-ok'/>
            </div>
        </div>

      </div>
  )
}

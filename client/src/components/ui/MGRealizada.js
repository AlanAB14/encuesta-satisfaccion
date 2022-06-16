import React from 'react'
import imageOK from './../../assets/OK-grande.png'

export const MGRealizada = () => {
  return (
    <div className='section_encuesta-realizada'>
        <div className='box_encuesta-realizada'>
            <img className='ok-image' src={imageOK} alt="OK-"/>
            <p className='titilium-bold text-realizada-title'>Te agradecemos tu interés por participar.</p>
            <p className='titilium-regular text-realizada'>Según nuestros registros ya realizaste la encuesta <br></br>y el cuestionario puede responderse solo una vez.</p>
        </div>
    </div>
  )
}

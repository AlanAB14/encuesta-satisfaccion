import React from 'react'
import dialogo from './../../assets/dialogo-grande.png'

export const EncuestaComentario = ({ disableButton, comentario, setComentario }) => {
  return (
      <div className='section_comentario'>
        <div className='block-comentario'>
            <div className='block-title-comentario'>
                <p className='title_comentario titilium-regular'>Tenés algún otro <br></br> comentario o sugerencia?</p>
                <img className='text_image' src={dialogo} alt="img-dialogo" />
            </div>
            <div className='block-text-comentario'>
                <textarea disabled={disableButton} onChange={(e) => setComentario(e.target.value)}  value={comentario} className='comentario_text-area titilium-regular'/>
            </div>
        </div>
    </div>
  )
}

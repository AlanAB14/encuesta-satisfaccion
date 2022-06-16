import React from 'react'
import imageOK from './../../assets/OK-grande.png'


export const MSPlus = () => {

  return (
    <div className='section_muchas-gracias'>
        
        <div className='muchas-gracias_box-plus'>
            <div className='muchas-gracias_section'>
                <div className='block-muchas-gracias-plus'>
                    <div className='muchas-gracias-text'>
                        <p className='titilium-bold muchas-gracias-title'>Muchas Gracias!</p>
                        <p className='titilium-regular'>por responder la encuesta</p>
                    </div>
                    <div className='muchas-gracias-img'>
                        <img src={imageOK} className="ok-image" alt='-ok'/>
                    </div>
                </div>  
                <div className='block-muchas-gracias-button'>
                    <p className='titilium-regular text_MSPlus'>Queremos invitarte a que conozcas <br></br> nuestras coberturas y sus diferenciales.</p>
                        <button type='button' className='btn-muchas-gracias titilium-regular'><a className='cooperacion_href' href='https://www.cooperacionseguros.com.ar'>Podés cotizar y contratar tu <br></br> seguro <span className='button_text-bold'>haciendo click acá</span></a></button>
                </div>
            </div>
        </div>
    </div>
  )
}

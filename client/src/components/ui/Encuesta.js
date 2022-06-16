import React, { useEffect, useState } from 'react';
import estrellaGrande from './../../assets/estrella-grande.png'
import loadImage from './../../assets/load.gif'
import { EncuestaCheck } from './EncuestaCheck';
import { EncuestaComentario } from './EncuestaComentario';
import { MuchasGracias } from './MuchasGracias';
import { MSPlus } from './MSPlus';
import { MGRealizada } from './MGRealizada';
import { EncuestaValoracion } from './EncuestaValoracion';
import validator from 'validator'
import { convertirCheckValues } from '../../helpers/convertirCheckValues';
import { insertDatos } from '../../helpers/insertDatos';
import { consultarEmail } from '../../helpers/consultarEmail';


export const Encuesta = ( {email} ) => {



    useEffect (() => {
        const fetchData = async() => {
            const data =  await consultarEmail(email)
            setExisteEmail(data)
            setDisableButton(data)
        }
        fetchData()
    }, [email])
    

    
    

    const [errorValoracion, setErrorValoracion] = useState(false)
    const [errorCheck, setErrorCheck] = useState(false)
    const [errorOtro, setErrorOtro] = useState(false)



    const [valoracion, setValoracion] = useState('')
    const [checkValuesTemplate, setCheckValuesTemplate] = useState({
        calidadDeAtencion: false,
        conformidadEnLaResolucion: false,
        tiempoDeResolucion: false,
        facilidadParaRealizarTramite: false,
        otro: false,
        otroText: ''
    })
    const [comentario, setComentario] = useState('')

    const [load, setLoad] = useState(false)
    const [calificacionSeleccionada, setCalificacionSeleccionada] = useState('')
    const [existeEmail, setExisteEmail] = useState(false)
    const [disableButton, setDisableButton] = useState(false)

    const insertarDatosEncuesta = async(e) => {
        e.preventDefault();

        if (existeEmail) {
            return
        }

        if (valoracion === "") {
            setErrorValoracion(true)
            return
        }

        const valuesCheck = Object.values(checkValuesTemplate);
        if (!valuesCheck.includes(true)) {
            setErrorCheck(true)
            return          
        }

        if (checkValuesTemplate.otro && checkValuesTemplate.otroText === "") {
            setErrorOtro(true)
            return
        }

        if (!validator.isEmail( email )) {
            email = 'Email no disponible'
        }

        const check_values = convertirCheckValues(checkValuesTemplate)


        setLoad(true)
        setDisableButton(true)

        const response = await insertDatos(email, valoracion, check_values, comentario)
        
        setLoad(false)
        setDisableButton(false)

        if (response.ok) {
            setCalificacionSeleccionada(response.calificacion)
            setDisableButton(true)
        }

    }
    
    
  return (
    <>
        <div className="block_title"><p className="titilium-bold title_valoracion">Como valorás la atención recibida</p><img className='img_estrella' src={ estrellaGrande } alt="img_estrella" /></div>
        <form onSubmit={insertarDatosEncuesta}>
            <EncuestaValoracion disableButton={disableButton} valoracion={valoracion} setValoracion={setValoracion} setErrorValoracion={setErrorValoracion} />
            {
                errorValoracion &&
                <div className='box_error animate__animated animate__bounceIn'>
                    <p className='error-valoracion titilium-bold'>Debes seleccionar una valoración</p>
                </div>
            }
            
            <EncuestaCheck disableButton={disableButton} checkValuesTemplate={checkValuesTemplate} setCheckValuesTemplate={setCheckValuesTemplate} setErrorCheck={setErrorCheck} setErrorOtro={setErrorOtro} />
            {
                errorCheck &&
                <div className='box_error animate__animated animate__bounceIn'>
                    <p className='error-valoracion titilium-bold'>Debes seleccionar al menos una opción</p>
                </div>
            }

            {
                errorOtro &&
                <div className='box_error animate__animated animate__bounceIn'>
                    <p className='error-valoracion titilium-bold'>Debes especificar el motivo</p>
                </div>
            }

            <EncuestaComentario disableButton={disableButton} comentario={comentario} setComentario={setComentario} />

            { 
                existeEmail &&
                    <MGRealizada />
            }

            {
               calificacionSeleccionada === 'Excelente' || calificacionSeleccionada === 'Muy Buena' || calificacionSeleccionada === 'Buena' ? (
                    <MSPlus />
               ) : calificacionSeleccionada === 'Insatisfactoria' || calificacionSeleccionada === 'Muy Insatisfactoria' ? (
                    <MuchasGracias />
               ) : <></>
            }

        
        {
            load &&
            (
                <div className='load-box'>
                    <img className='load-image' src={loadImage} alt='load-icon' />
                </div>
            )
        }
        

        {
            !load &&
                (<div className='box_button'>
                    <button
                        type='submit'
                        className={disableButton ? 'titilium-regular disable-button' : 'btn-enviar titilium-regular'}
                        disabled={disableButton}
                    >
                        Enviar
                    </button>
                </div>)
        }

       
        </form>
        
    </>
  )
}

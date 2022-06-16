import React from 'react'

export const EncuestaCheck = ({disableButton, checkValuesTemplate, setCheckValuesTemplate, setErrorCheck, setErrorOtro}) => {



    const handleInputOtroText = (e) => { 

        if (e.target.checked) { 
            setCheckValuesTemplate({
                ...checkValuesTemplate,
                otro: e.target.checked
            })
            setErrorCheck(false)
        }else {
            setCheckValuesTemplate({
                ...checkValuesTemplate,
                otro: e.target.checked,
                otroText: ''
            })
        }

    }


  return (
    <div className='block_check'>
        <div className='block-title-check'>
            <p className='title_check titilium-semibold'>La calificación anterior la realizaste por:</p>
        </div>
        <div className='block-inputs-checks'>
            <div className='inputs-left'>
                <div className='input_container'>
                    <input disabled={disableButton} onChange={(e) =>{setCheckValuesTemplate({...checkValuesTemplate, calidadDeAtencion: e.target.checked}); setErrorCheck(false)}} checked={checkValuesTemplate.calidadDeAtencion}  value="La calidad de la atencion" className='input_check' type="checkbox" /><p className='input_check-paragraph input_spacer titilium-regular'>La calidad de la atencion</p>
                </div>
                <div className='input_container'>
                    <input disabled={disableButton} onChange={(e) =>{setCheckValuesTemplate({...checkValuesTemplate, tiempoDeResolucion: e.target.checked}); setErrorCheck(false)}} checked={checkValuesTemplate.tiempoDeResolucion} value="El tiempo de resolución" className='input_check' type="checkbox" /><p className='input_check-paragraph titilium-regular'>El tiempo de resolución</p>
                </div>
                <div className='input_container'>
                    <input disabled={disableButton} onChange={(e) =>handleInputOtroText(e)} checked={checkValuesTemplate.otro}  className='input_check' type="checkbox" /><p className='input_check-paragraph titilium-regular'>Otro</p>
                </div>
            </div>
            <div className='inputs-right'>
                <div className='input_container'>
                        <input disabled={disableButton} onChange={(e) =>{setCheckValuesTemplate({...checkValuesTemplate, conformidadEnLaResolucion: e.target.checked}); setErrorCheck(false)}} checked={checkValuesTemplate.conformidadEnLaResolucion} value="Conformidad en la resolución" className='input_check' type="checkbox" /><p className='input_check-paragraph titilium-regular'>Conformidad en la resolución</p>
                </div>
                <div className='input_container'>
                        <input disabled={disableButton} onChange={(e) =>{setCheckValuesTemplate({...checkValuesTemplate, facilidadParaRealizarTramite: e.target.checked}); setErrorCheck(false)}} checked={checkValuesTemplate.facilidadParaRealizarTramite} value="Facilidad para realizar el trámite" className='input_check' type="checkbox" /><p className='input_check-paragraph titilium-regular'>Facilidad para realizar el trámite</p>
                </div>
                <div className='input_container input_container-text'>
                    <input disabled={!checkValuesTemplate.otro} onChange={(e) => {setCheckValuesTemplate({...checkValuesTemplate, otroText: e.target.value}); setErrorOtro(false)}} value={checkValuesTemplate.otroText} className={!checkValuesTemplate.otro ? 'disabled input_text titilium-regular' : 'input_text titilium-regular'} type="text" />
                </div>
            </div>
        </div>
    </div>
  )
}

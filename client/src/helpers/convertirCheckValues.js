export const convertirCheckValues = (checkValuesTemplate) => {
    let check_values = "";
    if (checkValuesTemplate.calidadDeAtencion) {
        check_values += `La calidad de la atención`
    }
    if (checkValuesTemplate.conformidadEnLaResolucion) {
        if (check_values === "") {
        check_values += `Conformidad en la resolución`
            
        }else {
            check_values += `, Conformidad en la resolución`
        }
    }
    if (checkValuesTemplate.tiempoDeResolucion) {
        if (check_values === "") {
            check_values += `El tiempo de resolución`
        }else {
            check_values += `, El tiempo de resolución`
        }
    }
    if (checkValuesTemplate.facilidadParaRealizarTramite) {
        if (check_values === "") {
        check_values += `Facilidad para realizar el trámite`
            
        }else {
            check_values += `, Facilidad para realizar el trámite`
        }
    }
    if (checkValuesTemplate.otro) {
        if (check_values === "") {
            check_values += `${checkValuesTemplate.otroText}`
        }else {
            check_values += `, ${checkValuesTemplate.otroText}`
        }
    }
    return check_values;
}
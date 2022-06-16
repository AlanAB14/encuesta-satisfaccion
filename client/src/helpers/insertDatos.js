import axios from 'axios'

export const insertDatos = async(email, valoracion, check_values, comentario) => {
  console.log('ingreso')
    const resp = await axios.post('http://localhost:3001/api/insert', {
        email,
        calificacion: valoracion,
        check_values,
        comentario
      })
      .then( (response) => {
        console.log(response)
        return response
      })
      .catch(function (error) {
        return error.response
      });
      return resp.data



}
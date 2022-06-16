import axios from 'axios'

export const consultarEmail = async(email) => {

  const resp = await axios.post('http://localhost:3001/api/getEmail', {
      email
    })
    .then( (response) => {
      console.log(response.data.ok)
      return response.data.ok
    })
    .catch(function (error) {
      return error.response
    });
    
    return resp
}
const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response => {
    let funcionarios = response.data

    const pais = func => func.pais == 'China'
    const genero = func => func.genero == 'M'
  
   const funcChinesas = funcionarios.filter(pais).filter(genero)

    console.log(funcChinesas.sort())
   
})





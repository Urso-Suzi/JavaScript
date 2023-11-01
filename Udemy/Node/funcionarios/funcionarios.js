const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response => {
    let funcionarios = response.data

    const pais = func => func.pais == 'China'
    const genero = func => func.genero == 'F'
    const menorSalario = (func, funcAtual) => {
        return func.salario < funcAtual.salario ? func : funcAtual
    } 
  
   const funcChinesas = funcionarios.filter(pais).filter(genero).reduce(menorSalario)

    console.log(funcChinesas)
   
})





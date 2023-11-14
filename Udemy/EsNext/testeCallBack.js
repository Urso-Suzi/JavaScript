// sem promise..

const http = require('http')

const getTurma = (letra, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    http.get(url, res => {
        let resultado = ''

        res.on('data', dados => {
            resultado += dados
        })

        res.on('end', () => {
            callback(JSON.parse(resultado))
        })
    })
}

let nome = []
getTurma('A', alunos => {
    nomes = alunos.filter(alunos.map(a =>a.nome).map(a => a.id))

    

    console.log(nomes)

    
   
})
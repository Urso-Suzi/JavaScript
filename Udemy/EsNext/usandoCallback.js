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
    nomes = nome.concat(alunos.map(a => `A: ${a.nome}`))
    console.log(nomes)
    getTurma('B', alunos => {
        nomes = nome.concat(alunos.map(a => `B ${a.nome}`))
        console.log(nomes)
    })
})
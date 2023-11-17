function funcionarOuNao(valor, chanceDeErro) {
    return new Promise ((resolve, reject) => {
        if(Math.random() < chanceDeErro) {
            reject('Ocorreu um erro')
        } else {
            resolve(valor)
        }
    })
}


funcionarOuNao('Testando', 0.1)
    .then(v => console.log(`Valor: ${v}`))
    .catch(err => console.log(`Erro: ${err}`))
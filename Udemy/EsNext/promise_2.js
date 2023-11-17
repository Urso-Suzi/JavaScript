function Esperarpor(tempo = 2000) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            console.log('Executando promise...')
            resolve('Vishhh')
        }, tempo)
    } )
}



Esperarpor()
    .then(() => Esperarpor())
    .then(() => Esperarpor())
    .then(console.log)
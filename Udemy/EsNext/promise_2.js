function Esperarpor(tempo = 2000) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            console.log('Executando promise...')
            resolve('Vishhh')
        }, tempo)
    } )
}



let p = Esperarpor(3000).then(texto => console.log(texto))
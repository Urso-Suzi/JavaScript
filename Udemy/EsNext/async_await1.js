function Esperarpor(tempo = 2000) {
    return new Promise(function (resolve) {
        setTimeout(() => resolve(), tempo)
    })
}


function retornarValor() {
    return new Promise(resolve => {
        setTimeout(() => {resolve(10)}, 5000)
    })
}

async function executar() {

    let valor = await retornarValor()

    await Esperarpor(2000)    
    console.log(`Async/Await ${valor}...`)
    
    await Esperarpor(2000)
    console.log(`Async/Await ${valor + 1}...`)
    
    await Esperarpor(2000)
    console.log(`Async/Await ${valor + 2}...`)
}

executar()
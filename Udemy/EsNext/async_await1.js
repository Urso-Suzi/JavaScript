function Esperarpor(tempo = 2000) {
    return new Promise(function (resolve) {
        setTimeout(() => resolve(), tempo)
    })
}


function retornarValor() {
    return new Promise(resolve => {
        setTimeout(() => {resolve(10)}, 5000)
    })
} //aqui fazemos uma função promise que espera 5 sec, antes de retornar a resposta 


async function executarRapido() {
    return 20
} //neste caso a promise já está resolvida e não precisa esperar

async function executar() {

    let valor = await retornarValor() // executarRapido()
// é necessário usar o await, para que a função promise, consiga acessar os valor contigos, do contrário ela só vai acessar o tipo 
    await Esperarpor(2000)    
    console.log(`Async/Await ${valor}...`)
    
    await Esperarpor(2000)
    console.log(`Async/Await ${valor + 1}...`)
    
    await Esperarpor(2000)
    console.log(`Async/Await ${valor + 2}...`)

    return valor + 3
}

async    function executarDeVerdade(){
    const valor = await executar()
    console.log(valor)
}

executarDeVerdade()



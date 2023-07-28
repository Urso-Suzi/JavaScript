// par nome/valor
const saudacao = 'Opa' //contexto léxico, foi definida em um local fisico.

function exec() {
    const saudacao = 'Falaaaa' //contexto léxico 2 - a saudacao dentro da funcao, não acessa a saudacao fora, pois está num contexto mais restrito, (dentro da função)
    return saudacao
}


// objetos são grupos aninhados de pares nome/valor

const cliente = {
    nome: 'Pedro',
    idade: 23,
    peso: 70,
    endereço: {
        logradouro: 'Rua Muito Legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)


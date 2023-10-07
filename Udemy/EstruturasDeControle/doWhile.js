function numeroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor (valor)
}

let opcao 

do {
    opcao = numeroAleatorioEntre(-1, 10)
    console.log(`O resultado é: ${opcao}.`)
} while (opcao != -1)

console.log('Fim!')
// Função sem retorno

function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3) //imprimir a função padrão
imprimirSoma(2) //imprimi um Not a number, pois a segunda variavel não foi incluida e está "Undefined"
imprimirSoma(2, 3, 4, 5, 6) //imprime apenas a + b, e ignora os demais números adicionados.
imprimirSoma() //imprime Not a number.
// Note, o JS, chamou todas as situações, mesmo não havendo variavéis ou havendo vars de mais.
console.log('.')
//funcao com retorno
function soma(a, b = 0){
    return a + b
}

soma(2, 3) //como a função está definida como um "return", só é possível imprir-la usando o comando console.log()

console.log(soma(3, 2)) //retorno padrão
console.log(soma(2)) // retorna  o primeiro número mais "0" pois o valor definido na função é: b = 0.
console.log() //retorna Not a number.
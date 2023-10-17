const soma = function (x , y ) {
    return x + y
}

const imprimirresultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirresultado(3, 4)
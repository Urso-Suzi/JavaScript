const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) {
        case 10:
        case 9:
            console.log('Quadro de Honra')
            break // para finalizar um case, coloque obrigatóreamente um break
        case 8:
        case 7:
            console.log('Aprovado')
            break
        case 6:
        case 5:
        case 4:
            console.log('Recuperação')
            break
        case 3:
        case 2:
        case 1:
            console.log('Reprovado')
            break
        default:
            console.log('Nota Inválida')
    }  console.log('----------')
}

imprimirResultado(9.1) 
imprimirResultado(8)
imprimirResultado(5.8)
imprimirResultado(2.5)
imprimirResultado(12)
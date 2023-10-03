function rand({min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min 
    return Math.floor(valor)
}

const obj = {max:50, min:40} //puxou os valores e trocou
console.log(rand(obj)) // chamou os valores trocados por meio da constante
console.log(rand({min: 955})) //definiu apenas o minimo na função declarada, chamando um valor, sem alterar a função original.
console.log(rand({})) //chamou a função acessando seu valor por chamada


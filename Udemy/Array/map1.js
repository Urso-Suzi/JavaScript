const nums = [1, 2, 3, 4, 5,]

// map é apenas um for, com propósito.

let resultado = nums.map(function(i) {
    return i * 2
})

console.log(resultado)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `RS ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)

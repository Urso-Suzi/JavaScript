let a = 1 
console.log(a)


let p = new Promise(function (cumprirPromessa) {
    cumprirPromessa(
        [
            'Ana', 'Beatriz', 'Jorge', 'Bernardo'
        ]
    )
})

p
.then(valor => valor[1])
.then(primeiro => primeiro[0])
.then(letra => letra.toLowerCase())
.then(letraMinuscula => console.log(letraMinuscula))

p
.then(valor => valor[3])
.then(nome => nome + ' Tá fácil de mais mim.')
.then(minuscula => minuscula.toLowerCase())
.then(frase => console.log(frase))



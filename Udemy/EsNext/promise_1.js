let p = new Promise(function (cumprirPromessa) {
    cumprirPromessa(
        [
            'Ana', 'Beatriz', 'Jorge', 'Bernardo'
        ]
    )
})

const primeiroElemento = arrayOuString => arrayOuString[0]
const letraMinuscula = letra => letra.toLowerCase()

p
.then(primeiroElemento)
.then(primeiroElemento)
.then(letraMinuscula)
.then(console.log)

p
.then(valor => valor[3])
.then(nome => nome + ' Tá fácil de mais mim.')
.then(minuscula => minuscula.toLowerCase())
.then(frase => console.log(frase))



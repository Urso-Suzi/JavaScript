var numero = 1

{
    var numero = 2
    console.log('dentro = ', numero)
}

console.log('fora = ', numero)

// nesse caso, como o escopo é global, os dois logs irão acessar o número 2.

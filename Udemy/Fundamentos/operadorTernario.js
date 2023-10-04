const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'

console.log(resultado(6.9))
console.log(resultado(8))

const calc = valor => !(valor%2) ? 'Par' : 'Impar' //o modulo responde entre 1 e 0, que para o node são valores booleam.

console.log(calc(10))
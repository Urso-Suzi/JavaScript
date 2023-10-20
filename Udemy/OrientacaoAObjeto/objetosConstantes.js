// pessoa - 123 -> {...}
/*
const pessoa = {nome: 'Joao'}
console.log(pessoa)
pessoa.nome = 'Pedro'
console.log(pessoa)


Object.freeze(pessoa)

pessoa.nome = 'Maria'
pessoa.end = "Rua ABC"
console.log(pessoa.nome)
console.log(pessoa)
*/


const pessoaConstante = Object.freeze({nome: 'Joao'}) 
pessoaConstante.nome = "Maria"
console.log(pessoaConstante)
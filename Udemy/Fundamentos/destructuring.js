// aqui vemos um operador de desestruturação, ele retira num elemento de seu lugar de referência
// é usado para tirar um dado de uma array, mas não retira o espaço da memória aonde o array se encontra.

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const  { nome, idade} = pessoa // tire de pessoa, o nome e a idade
console.log(nome, idade)

const {nome: n, idade: i} = pessoa
console.log(n, i)

const {sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)

const {endereco: { logradouro, numero, cep} } = pessoa
console.log(logradouro, numero, cep)


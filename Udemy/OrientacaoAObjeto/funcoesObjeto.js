const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13,
}


Object.entries(pessoa).forEach(([chave, valor]) =>{
    console.log(`${chave}: ${valor}`)
})


Object.defineProperty(pessoa, 'dataDeNascimento', {
    enumerable: false,
    writable: false,
    value: '01/01/2019'
}) 


pessoa.dataDeNascimento = '01/01/2017'
console.log(pessoa.dataDeNascimento)

console.log(Object.keys(pessoa))

//Object.assingn (ECMAScript 2015)

const dest = {a: 1}
const a1 = {b: 2}
const a2 = {c:3, a:4}

const obj = Object.assign(dest, a1, a2)

Object.freeze(obj)
obj.c = 1234
console.log(obj)
const pai = {nome: 'Pedro', corCabelo:'Preto', corOlho:'Verde'}

const filha1 = Object.create(pai)
filha1.nome = 'Ana'
console.log(filha1.corOlho)

const filha2 = Object.create(pai, 
    {nome:{value: 'Bia', writable: false, enumerable: true}
})

console.log(pai.nome, ", tem o cabelo: ",pai.corCabelo, ", e o olho: ", pai.corOlho)
console.log(filha2.nome)
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem o olho ${filha2.corOlho}`)


console.log(Object.keys(filha1))
console.log(Object.keys(filha2))
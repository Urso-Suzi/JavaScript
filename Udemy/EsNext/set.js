// não aceita repetição e não é indexado

const times = new Set()

times.add('Vasco')
times.add('São Paulo ').add('Palmeiras').add('Corinthians')
times.add('Flamento')
times.add('Vasco')

console.log(times)
console.log(times.size)
console.log(times.has('vasco'))
console.log(times.has('Vasco')) 
times.delete('Flamento')
console.log(times.has('Flamento'))

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const nomeSet = new Set(nomes)
console.log(nomeSet)
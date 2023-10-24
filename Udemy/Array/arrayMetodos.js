const pilotos = ['Vettel', 'Alono', 'Ralkkonen', 'Massa']
pilotos.pop() //remove um item no último índice.
console.log(pilotos)


pilotos.push('Verstappen') //adiciona um item no último índice.
console.log(pilotos)

pilotos.shift() // remove um item no  primeiro índice
console.log(pilotos)


pilotos.unshift('Hamilton') // adiciona um item no primeiro índice
console.log(pilotos)


//adicionou a partir do índice [2]
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//removeu o item [3], um só item.
pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2)
console.log(algunsPilotos1) //criou um array, a partir do pindice 2

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2) // criou um array a partir do índice 1, até o 3.
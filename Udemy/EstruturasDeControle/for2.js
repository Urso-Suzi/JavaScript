const notas = [8.4, 9.4, 7.4, 9.5, 9.1]

for (let i in notas) { //serve para imprimir os indices do array
    console.log(i, '- ' + notas[i])
}



const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64

}

for (let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}


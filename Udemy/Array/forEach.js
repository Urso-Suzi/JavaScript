const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice){
    console.log(`${indice + 1} ${nome}`)
})

console.log('----------------------------------')

aprovados.forEach((nome, indice) => console.log( indice + 1, nome))

console.log('----------------------------------')

const exibirAprovados = ((nome, indice) => console.log( indice + 1, nome))
aprovados.forEach(exibirAprovados)
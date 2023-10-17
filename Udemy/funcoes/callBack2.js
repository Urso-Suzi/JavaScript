const notas = [7.7, 6.5, 8.5, 5.2, 3.6, 9.0]

// sem o callback

const notasBaixas1 = []
for (let [i] in notas) {
    if (notas[i] < 7) {
        notasBaixas1.push(notas[i])
    }
}

console.log(notasBaixas1)

// com callBack
const notasBaixas2 = notas.filter(function (nota) {
    return nota < 7
})

console.log(notasBaixas2)

//arrow
const notasMenorQue7 = nota => nota < 7
const notasBaixas3 = notas.filter(notasMenorQue7)
console.log(`Tipo arrow: ${notasBaixas3}`)
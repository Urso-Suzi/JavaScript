// processa o template string dentro e uma função

function tag (partes, ...valores) {
    console.log(partes)
    console.log(valores)

    return 'Outra String'
}

const aluno = 'Gru'
const situacao = 'aprovado'
console.log(tag `${aluno} está ${situacao}`)


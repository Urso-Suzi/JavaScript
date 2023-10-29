const mesesDoAno = ['Janeiro', 'Fevereiro', 'Março']

const acharMEs = function (numero) {
    this.numero = --numero
    return console.log(mesesDoAno[numero])
}

acharMEs(1)
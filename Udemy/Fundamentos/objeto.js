const prod1 = {} //objeto notação literal
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['DescontoLegal'] = 0.40 // atributo para aplicação de desconto, por função


// En JS, é possível manipular objetos sem acessar eles

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    objeto: {            // é possível por objetos dentro de objetos, lembrar de usar vírgulas
        cor: 'Vermelha'
    }
}

prod2['DescontoLegal'] = 0.40 //mesmo criando um objeto manual, é possível manipular ele por fora
 
console.log(prod2)


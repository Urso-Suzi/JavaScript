// Função em JS é First-Class  Object (Citizens)
// Higher-order function

// criar de forma literal
function fun1 () { 

}// NÃO PODEMOS OMITIR BLOCOS EM FUNÇÕES.

// Armazenar em uma variavel

const fun2 = function () {

}

//Armazenar dentro de um Array

const array = [function (a, b) {return a + b}, fun1, fun2] // é possível criar ela dentro do arrey, e colocar ela no array, por sua referência (preferir 2 opção.)
console.log(array[0](2,3))

//Armazenar em um atributo de objeto
const obj = {}
obj.falar = function () {return 'Opa'}
console.log(obj.falar())

// Passar função como parametro

function run (fun) {
    fun()
}

run(function () {console.log('Executando...')}) 

// Uma função pode retornar / conter uma função. :D

function soma(a, b) {
    return function(c) {
        console.log(a + b + c)
    }
}
soma(2, 3)(7)
const cincoMais =  soma (2, 3)
cincoMais(7)
console.log('a =', a) // log 1 
var a = 2
console.log('a =', a) // log 2 


//hoisting é o conceito, de issar um comando para cima, neste exemplo a variável "a", foi lançada para o topo do código mesmo não existindo no primeiro log,
// o que deveria accarretar em um erro, resulta em um "undefined", o que não acontece quando executamos com let, que resultaria em um erro logo a primeira linha.


function teste() {
console.log('a =', a) // log 1 
var a = 2
console.log('a =', a) // log 2 
}

teste()

console.log('b =', b) // log 1  - o erro é gerado, pois Let não 
let b = 2
console.log('b =', b) // log 2 
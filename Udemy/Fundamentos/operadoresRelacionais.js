console.log ('01)', '1' == 1) // 1 string é igual a 1 number ? True
console.log ('02)', '1' === 1) // 1 string é estritamente igual a 1 number ? False

console.log ('03)', '3' != 3) // 3 string é diferente de 3 number ? False

console.log ('03)', '3' !== 3) // 3 string é estritamente diferente de 3 number ? True

console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('07)', 3 <= 2)
console.log('08)', 3 >= 2)

const d1 = new Date(0)
const d2 = new Date(0)

console.log('09)', d1 === d2) // ao comparar constantes, não se compara os valores, e sim seu lugar na memória, por isso o resultado será false.
console.log('10)', d1 == d2) // pois d1 e d2, ocupam lugares diferentes na memória.
console.log('11)', d1.getTime() === d2.getTime()) // ao fazer a chamada dos valores pela notação ".", então sim comparamos os valores, e não seus lugares na memória.
console.log('12)', undefined == null)
console.log('13)', undefined === null) // por via de regra, em JS, é mais interessante utilizar  "===", para que seja usado em consideração, não apenas o valor mas o tipo da variável.



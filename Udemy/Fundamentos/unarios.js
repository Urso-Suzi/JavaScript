let num1 = 1
let num2 = 2

num1++ // pós fixado (executa depois da operação)

console.log(num1)

--num1 //pre fixado (executa antes da operação)
console.log(num1)

console.log(++num1 === num2--) //a comparação é executada antes da subtração.

console.log(num1 === num2)
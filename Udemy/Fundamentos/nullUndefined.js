let valor //não iniciada
console.log(valor)


valor = null //ausência de valor
console.log(valor)
// console.log(valor.toString()) // não é possívela cessar algo que está nulo.

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50

console.log(produto)

produto.preco = undefined //evitar usar undefined
console.log(!!produto.preco)
//delete produto.preco  // é a melhor forma de excluir um item de um objeto
console.log(produto)

produto.preco = null // sem preço (é a melhor forma de definir algo que está sem preço, e não com preço R$0,00)
console.log(!!produto.preco)
console.log(produto)

//quando se tem uma atribuição por valor, cada valor tera o seu, de forma independente, mas quando fazemos uma atribuição por memória, estamos copiando o endereço daquela memória
// as duas variaveis ou const, apontam para o mesmo lugar, caso queira que uma var ou const, não aponte para nenhum lugar, use NULL.
// quando uma var, está definida como NULL, não podemos acessa-lá, como no exemplo toString().
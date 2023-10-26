Array.prototype.filter2 = function(callbakc) {
    const newArray = []
    for(let i = 0; i < this.length; i++) {
        if(callbakc(this [i], i, this)) {
            newArray.push(this[i])
        }    
    }
    return newArray
}

const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plástico', preco: 18.99, fragil: false}
]



const barato = item => item.preco < 200
const fragil = item => item.fragil || item.fragil == false

console.log(produtos.filter2(barato).filter2(fragil))
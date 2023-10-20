/*
const sequencia = {
    _valor: 1, // convenção 
    get valor() {return this._valor++},
    set valor(valor) {
        if (valor > this._valor) {
            this._valor = valor
        }
    }
}


console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor) */

const test = {
    _valor: 1,
    
    get valor() {return this._valor++},
    set valor(valor) {
        if(valor > this._valor) {
            this._valor = valor
        } 
    }
}

test.valor = 100
console.log(test.valor, test.valor)
test.valor = 99
console.log(test._valor)

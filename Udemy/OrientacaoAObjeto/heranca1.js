const Ferrari = {
    modelo: 'F40',
    velmax: 324
}

const volvo = {
    modelo: 'V40',
    velmax: 200
}


console.log(Ferrari.__proto__)
console.log(Ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)


function meuObjeto () {}
console.log(typeof Object, typeof meuObjeto)
console.log(Object.prototype, meuObjeto.prototype)




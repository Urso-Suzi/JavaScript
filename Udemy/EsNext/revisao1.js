//let e const

{
    var a = 2
    let b = 3
    console.log(b)
}

console.log(a)

// Template String

const produto = 'iPad'
console.log(`${produto} é caro!
Sabia ?`)

// Desctructuring

const [l, e, ...tras] = "Coder"
console.log(l, e, tras)

const [x, ,y] = [1, 3, 4]
console.log(x, y)


const  {idade, nome: i} = {nome: 'Ana', idade: 9 }
console.log(i, idade)
class Pessoa {
    constructor(nome){
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João')
p1.falar()


function criarPessoa (nome) {
    return {
        nome
        
    }
   
}

const p2 = new criarPessoa('Joao')
console.log(`Meu nome é ${p2.nome}`)



function criarPessoa2 (nome){
   this.nome = nome

   this.falar = function(){
    console.log(`Meu nome é ${this.nome}`)
   }
}

const p3 = new criarPessoa2('João')
p3.falar()

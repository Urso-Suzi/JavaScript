function Carro(velocidadeMaxima = 200, delta = 5){
    //atributo privado
    let velocidadeAtual = 0

    //metodo publico
    this.acelerar = function() {
        if(velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeMaxima += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }
    
    //metodo público
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

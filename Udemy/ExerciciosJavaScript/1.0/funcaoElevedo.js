const elevador = function (base = 0, expoente = 0){

    this.base = base
    this.expoente = expoente

     this.elevado = function () {
        console.log(`A elevação de ${base} e ${expoente} é igual à ${Math.pow(base, expoente)}`)

     }
    

    

}

const p1 = new elevador(3, 2)
p1.elevado()

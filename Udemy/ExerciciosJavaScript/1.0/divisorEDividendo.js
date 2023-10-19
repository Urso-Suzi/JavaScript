const div = function (dividendo, divisor) {

    this.dividendo
    this.divisor

    this.imprimir = function () {
        console.log(`Dividendo: ${dividendo}, e Divisor: ${divisor}, O resultado é: ${dividendo / divisor}. O resto é: ${dividendo % divisor} `)
    }

   
}

const p1 = new div(4, 2)
p1.imprimir()
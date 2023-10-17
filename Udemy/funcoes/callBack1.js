const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice}. ${nome}`)
}


fabricantes.forEach(imprimir)
fabricantes.forEach(function (fabricante) {
    console.log(fabricante)
    //em arrow = fabricantes.forEach(fabricante => console.log(fabricante)
})
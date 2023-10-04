function compras (trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2 //OU
    const comprarTv50 = trabalho1 && trabalho2 // E
    const comprarTv32 = trabalho1 != trabalho2 // Diferente
    const manterSaudavel = !comprarSorvete //Contrátio

    return {comprarSorvete, comprarTv50, comprarTv32, manterSaudavel} //só possível fazer a chamada das funções apoés criar um objeto para cada uma delas.
}

console.log(compras(true, false))


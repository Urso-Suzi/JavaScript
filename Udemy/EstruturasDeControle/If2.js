function teste1(num) {
    if (num > 7){
        console.log(num)
    }
     console.log('final')
}  // em JS os blocos são importantes, um if só executa as funções dentro de seu bloco.

teste1(6)
teste1(8)



function teste2(num) {
    if (num > 7);  // não use " ; " em estruturas de controle
    
    {
        console.log(num)
    }
    
}

teste2(6)
teste2(8)  


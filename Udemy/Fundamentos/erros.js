function tratarErroLancar(error) {
   // throw new Error ('Ocorreu um erro')
   
}

function imprimirNomeGritado(obj) {
    try{
        console.log(obj.name.toUpperCase() + "!!!")
    } catch (e) {
        tratarErroLancar(e)
    } // try cath, lança um erro, se hoouver um problema na conclusão do código.
     finally {
        console.log('final')//é passado mesmo se o código for concluido
    }
}

const obj= { nome: 'Roberto'}
imprimirNomeGritado(obj)

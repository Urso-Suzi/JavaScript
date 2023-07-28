{
    {
        {
            { 
                var sera = 'Será ???'
                // console.log(sera) (EX: 1)
            } // a quantidade de blocos (que não sejam uma função), não influiência no acesso á variável VAR. 

        }
    }
}

/* O conceito de escopo em outras linguagens, define até aonde uma variável é visivel, neste caso "sera" só seria visivel, dentro do seu próprio bloco. (EX: 1) */ 

console.log(sera)

function teste() {
    var local = 123 
    console.log(local)   
}

teste()
//console.log(local) //variáveis incluídas, dentro de funções, não são acessíveis.

//Uma variável Var, definida fora de uma função é acessível por todo o código, correndo o risco de ser sobreescrita, quando solicitada em outra parte.

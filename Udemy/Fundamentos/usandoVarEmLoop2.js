var funcs = []

for (var i = 0; i < 10; i++ ){
    funcs.push(function() {
       console.log(i) 
    })
}

funcs[2] ()
funcs[8] ()

//neste sentido a variável responde sempre o último número definido para i que é 10, pois foi a última atribuição dada para a variável, não respondendo á posição que a 
// array se encontra.
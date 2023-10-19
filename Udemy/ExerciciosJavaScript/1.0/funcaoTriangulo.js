const test = function (a = 0, b = 0, c = 0) {
   if (a == b && a == c)  {
        console.log('Este triângulo é um Equilátero')
   } else if (a == b || a == c) {
        console.log('Este triângulo é um Isósceles')
   } else {console.log('Este triângulo é um Escaleno')}
}

test(3, 3, 3)
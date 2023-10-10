const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nums) {
    if(x == 5)  {
        break
    }
    console.log(`${x} = ${nums[x]}`)
} //o break quebra o laço, para fora do block mais próximo

for (y in nums) {
    if (y==5){
        continue
    }
    console.log(`${y} = ${nums[y]}`)
} // o continue gera o código até este ponto, e depois o pula.
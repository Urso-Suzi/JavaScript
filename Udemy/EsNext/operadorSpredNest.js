// operador ... rest(juntar)/ spread(espalhar)


const funcionario = {nome: 'Maria', salario: 12348.99}
const clone = {ativo: true, ...funcionario} 
console.log(clone) /* spread (espalhou em clone, os atributos de funcionario, porém isso não gerará impacto em funcionario) */

// Usar spread com array

const grupoA = ['João', 'Maria', 'Gloria']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela']
console.log(grupoFinal)
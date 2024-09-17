// 1. Crie um vetor de três números inteiros. Multiplique cada elemento por 2 e exiba o vetor resultante.

var prompt = require('prompt-sync')()

let vet = []
let vetB = []
let x,i

for( i = 0 ; i < 3 ; i++ ){
    x =Number(prompt("Insira um numero: "))
    vet.push(x)
   vetB[i] = vet[i] * 2
}
console.log(vet)
console.log(vetB)



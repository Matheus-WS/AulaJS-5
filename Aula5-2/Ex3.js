// 3. Crie um vetor de números e determine o maior número presente no vetor.

var prompt = require('prompt-sync')()
let vetor = []
let x

for (i = 0; i < 5; i++) {
    x = Number(prompt("digite um valor: "))
    vetor.push(x)
    
}
console.log(vetor)
vetor.sort((a,b) => a - b)
console.log(vetor[4])
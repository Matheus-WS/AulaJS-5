// 4. Crie um vetor de números inteiros. Crie um novo vetor contendo apenas os números pares.
var prompt = require('prompt-sync')();
vetor = []
let x
let i

for (i = 0; i < 5; i++) {
    x = Number(prompt('digite um valor: '))
    vetor.push(x)
}   
console.log(vetor)

let vetorPares = [];
for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] % 2 === 0) {
        vetorPares.push(vetor[i]);
    }
}

console.log(`Vetor com números pares: ${vetorPares}`);
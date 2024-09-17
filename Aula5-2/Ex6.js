// 6. Crie um script que recebe um vetor de números e retorna o maior número presente no vetor.
var prompt = require('prompt-sync')();

let vetor = [];
let x;
let b = Number(prompt("Digite a quantidade do vetor: "));

for (let i = 0; i < b; i++) {
    x = Number(prompt("Digite um valor: "));
    vetor.push(x);
}
console.log(`Vetor: ${vetor}`);

let maior = vetor[0]; 

for (let i = 1; i < vetor.length; i++) {
    if (vetor[i] > maior) {
        maior = vetor[i];
    }
}

console.log(`Maior número: ${maior}`);
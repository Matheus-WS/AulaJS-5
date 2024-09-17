// 9. Preencher um vetor de n elementos com "Ímpar" se o índice do elemento for ímpar, e "Par" se for par. Escrever o vetor após o seu total preenchimento.

var prompt = require('prompt-sync')();

let vetor = [];
let x;

for (let i = 0; i < 3; i++) {
    x = Number(prompt('Digite um valor: '));
   
    if (x % 2 === 0) {
        vetor.push("par");
    } else {
        vetor.push("ímpar");
    }
}   

console.log(vetor);
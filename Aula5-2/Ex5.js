// Crie um vetor de números, crie um novo vetor com os elementos na ordem inversa.

var prompt = require('prompt-sync')()
 let x 
let a = []
let a2 = []
for ( i = 0; i <= 2; i++) {
    x = Number(prompt("digite um valor: "))
    a.push(x)
}
a2= a.reverse()
console.log(a2) 


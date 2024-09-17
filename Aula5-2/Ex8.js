// 8. Crie um script que recebe um vetor e um elemento, e retorna true se o elemento estiver presente no vetor, caso contrário, retorna false.

var prompt = require('prompt-sync')()
let x
let elemento
let num, i 
let resultado = 0 
let vetor = []

x = Number(prompt("digite a quantidade: "))
elemento = Number(prompt("digite o elemento a conferir: "))

for (i = 0; i < x; i++) {
    num = Number(prompt("digite um valor: "))
    vetor.push(num)
}
for (i = 0; i < x; i++) {
    if (vetor[i] == elemento) {
        resultado = 1
    }
}
if (resultado == 1) {
    console.log("true")
}
else {
    console.log("false")
}
// 7. Crie um script que recebe um vetor de qualquer tamanho e qual número e retorna a média dos seus elementos.
var prompt = require('prompt-sync')()
let vetor = []
let x 
let media 
let soma = 0

let y = Number(prompt("Digite a quantidade do vetor: "))
for (i = 0; i < y; i++) {
    x = Number(prompt("digite um valor: "))
    vetor.push(x)

}
for (i = 0; i < y; i++) {
    soma = soma + vetor[i]      
    media = soma / y
}    
console.log(` A media do vetor é ${media}`)
// 10. Ler um vetor de 10 nomes. Entrar com o nome de uma pessoa pelo prompt. Escrever a mensagem “ACHEI” se o nome estiver no vetor e “NÃO ACHEI” caso contrário.
var prompt = require('prompt-sync')()
let vetC = []
let A,i,nome
let aux

A = prompt("Qual o nome que voce procura: ").toLowerCase()
for(i=0;i<3;i++){
    nome = prompt("Insira os nomes: ").toLowerCase()
    vetC.push(nome)
}
  console.log(vetC)
for(i=0;i<3;i++){
    if(vetC[i]==A){
        aux=1
    }
     
}
if(aux==1){
    console.log("Achei")
}
else{
    console.log("Não achei")
}
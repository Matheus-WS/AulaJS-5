//  2. Calcular a média de idade. Dado um vetor de objetos com pessoas (com `nome`, `idade` e `profissao`), utilize `reduce` para calcular a média de idade das pessoas.

let pessoas = [
    { nome: "Matheus", idade: 22, profissao: "Estudante" },
    { nome: "Erick", idade: 24, profissao: "Estudante" },
    { nome: "Marlon", idade: 22, profissao: "Estudante" }
];

let somaIdades = pessoas.reduce((acumulador, pessoa) => acumulador + pessoa.idade, 0);

let mediaIdade = somaIdades / pessoas.length;

console.log(mediaIdade.toFixed(1));

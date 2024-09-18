// 13. Transformar lista de objetos em string. Usando `map`, transforme um vetor de objetos (com `nome` e `idade`) em um vetor de strings formatadas como `"Nome: X, Idade: Y"`.

let pessoas = [{nome: 'Matheus', idade: 22}, 
    {nome: 'Marlon', idade: 21}, 
    {nome: 'Anna', idade: 18}
]
let pessoasFormatadas = pessoas.map((pessoa) => {
    return `Nome: ${pessoa.nome}, Idade: ${pessoa.idade}`
})
console.log(pessoasFormatadas)


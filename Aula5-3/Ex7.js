// 7. Filtrar alunos aprovados. Dado um vetor de objetos representando alunos (com `nome` e `nota`), use `filter` para retornar apenas os alunos com nota maior que 7.

let alunos = [
    { nome: 'Matheus', nota: 5 },
    { nome: 'Marlon', nota: 8 },
    { nome: 'Erick', nota: 7 },
    { nome: 'Anna', nota: 9 }
]
let apenasAprovados = alunos.filter((aluno) => {
    return aluno.nota > 7
})
console.log(apenasAprovados)
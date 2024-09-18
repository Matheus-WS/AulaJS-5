// 3. Adicionar um desconto aos produtos. Usando `map`, adicione um desconto de 10% a todos os produtos de um vetor de objetos (com `nome` e `preco`), criando um novo vetor com os produtos  
// descontados.

let produtos = [ 
    {produto:"Chiclete", preço: 2.00 },
    {produto:"Bala", preço:3.00 },
    {produto:"Pirulito", preço: 2.50 }

]

let desconto = produtos.map((produto)  => {
    return { nome: produto.produto,  preço: produto.preço * 0.9} })


console.log(desconto)

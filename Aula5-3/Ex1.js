// 1. Filtrar produtos caros. Dado um vetor de objetos representando produtos (com `nome`, `preco` e `categoria`), use `filter` para retornar os produtos que custam mais de R$100.

let produtos = [
    {nome: "agua", preço: 5.00, categoria: "bebida" },
    {nome: "ingresso", preço: 130.00, categoria: "ingresso"},
    {nome: "chocolate", preço: 12.00, categoria:"doce"}

]
let  produtosCaros = produtos.filter((produto) => {
    return produto.preço > 100
})
console.log(produtosCaros)
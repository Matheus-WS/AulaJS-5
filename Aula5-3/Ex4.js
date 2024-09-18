// 4. Contar a ocorrência de categorias. Dado um vetor de objetos com produtos (com `nome`, `preco` e `categoria`), use `reduce` para contar quantos produtos existem em
//cada categoria.

let produtos = [ 
    {nome: 'Notebook', preco: 3500, categoria: 'Eletrônicos'},
    {nome: 'Celular', preco: 2000, categoria: 'Eletrônicos'},
    {nome: 'Geladeira', preco: 1000, categoria: 'Eletrodomésticos'},
    {nome: 'Televisão', preco: 1700, categoria: 'Eletrônicos'}
]
  
let categorias = produtos.reduce((acumulador, produto) => {
if(acumulador[produto.categoria] === undefined){
acumulador[produto.categoria] = 1
} else {
acumulador[produto.categoria]++
}
return acumulador
}, {})
console.log(categorias)

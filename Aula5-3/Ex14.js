// 14. Agrupar produtos por preço. Dado um vetor de objetos representando produtos, utilize `reduce` para agrupar os produtos em duas categorias: os que custam mais de R$50 e os que custam 
//menos ou igual a R$50.

let produtos = [
    { nome: 'Camiseta', preco: 40 }, 
    { nome: 'Tênis', preco: 130 }, 
    { nome: 'Calça', preco: 80 }, 
    { nome: 'Bermuda', preco: 70 },
    { nome: 'Chinelo', preco: 30}

]

let agrupados = produtos.reduce((acumulador, produto) => {
    if (produto.preco > 50) {
        acumulador.caros.push(produto)
    } else {
        acumulador.baratos.push(produto)
    }
    return acumulador
}, { caros: [], baratos: [] })
console.log(agrupados)

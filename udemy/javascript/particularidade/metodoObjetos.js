const produto_caneta = {
    nome: 'Caneta',
    quantidade: 64,
    estoque: function(qtd) {
        if (qtd > this.quantidade) {
            console.log(`Quantidade insuficiente. Há ${this.quantidade} itens no estoque`)
        }
        this.quantidade -= qtd
    }
}
let comprar = 20
produto_caneta.estoque(comprar)
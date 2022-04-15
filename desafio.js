let clienteLilit = [
    {produto: 'Bolsa pequena', valor: 49.0}, 
    {produto: 'Cinto preto', valor: 22.0}, 
    {produto: 'Jaqueta Jeans', valor: 300.0}, 
    {produto: 'Calça preta', valor: 100.0}, 
    {produto: 'Blusa simples', valor: 35.0}, 
    {produto: 'Calça jeans clara', valor: 130.0}, 
    {produto: 'Blusa preta gola alta', valor: 60.0}, 
    {produto: 'Short verde canelado', valor: 80.0}, 
    {produto: 'Salto agulha 39', valor: 250.0}, 
    {produto: 'Tênis casual preto', valor: 120.0}, 
    {produto: 'meia calça transparente', valor: 30.0}]
    
let clienteBeth = [
    {produto: 'Cinto preto', valor: 22.0}, 
    {produto: 'Bolsa pequena', valor: 49.0}, 
    {produto: 'Calça preta', valor: 100.0}, 
    {produto: 'Jaqueta Jeans', valor: 300.0}, 
    {produto: 'Blusa simples', valor: 35.0} ]
    
let clienteYolanda = [
    {produto: 'Blusa preta gola alta', valor: 60.0}, 
    {produto: 'Short verde canelado', valor: 80.0}, 
    {produto: 'Salto agulha 39', valor: 250.0}, 
    {produto: 'Tênis casual preto', valor: 120.0}, 
    {produto: 'meia calça transparente', valor: 30.0}]    


function calcularCompras(cliente) {
    let valorTotal = 0
    let valorDesconto = 0
    let valorFinal = 0
    let quantidadeProdutos = cliente.length
    
    for(let item of cliente) {
        valorTotal = cliente.reduce((acesso, produto) => acesso + produto.valor, 0)    
        if(item.valor >= 200) {
            valorDesconto += (item.valor*0.5) 
            valorFinal += (item.valor - valorDesconto)
        }else if(item.valor >= 100) {
            valorDesconto += (item.valor*0.2)
            valorFinal += (item.valor - valorDesconto)
        }else if(item.valor >=80) {
            valorDesconto += (item.valor*0.1)
            valorFinal += (item.valor - valorDesconto)
        }else if(item.valor >= 50) {
            valorDesconto += (item.valor*0.05)
            valorFinal += (item.valor - valorDesconto)
        }else {
            valorFinal += item.valor
        }
    }

let dataCompra = new Date()

let notaFiscal = {
    "Valor Total" : `R$${valorTotal.toFixed(2).replace('.', ',')}`,
    "Valor Desconto" : `R$${valorDesconto.toFixed(2).replace('.', ',')}`,
    "Valor Final" : `R$${valorFinal.toFixed(2).replace('.', ',')}`,
    "Data de Compra": dataCompra.toLocaleDateString('pt-BR', {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    })
    
}

// Ultimo cupom
    if(quantidadeProdutos > 10 || valorFinal > 800.0) {
        return console.table ({
            ...notaFiscal,
            "Bonus" : "Você ganhou um cupom de R$50,00 para sua próxima compra"})

    } else{
        return console.table(notaFiscal)
    }
}
console.log("Compras cliente Lilit")
calcularCompras(clienteLilit)
console.log("Compras cliente Beth")
calcularCompras(clienteBeth)
console.log("Compras cliente Yolanda")
calcularCompras(clienteYolanda)
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
    
let cliente2 = [
    {produto: 'Cinto preto', valor: 22.0}, 
    {produto: 'Bolsa pequena', valor: 49.0}, 
    {produto: 'Calça preta', valor: 100.0}, 
    {produto: 'Jaqueta Jeans', valor: 300.0}, 
    {produto: 'Blusa simples', valor: 35.0} ]
    
let cliente3 = [
    {produto: 'Blusa preta gola alta', valor: 60.0}, 
    {produto: 'Short verde canelado', valor: 80.0}, 
    {produto: 'Salto agulha 39', valor: 250.0}, 
    {produto: 'Tênis casual preto', valor: 120.0}, 
    {produto: 'meia calça transparente', valor: 30.0}]    

// var para definir qual cliente deseja calcular dentro de todas funções    
let cliente = cliente2

// valorTotal
function calcularTotal(cliente){
    let valorTotal=0
    valorTotal = cliente.reduce((acesso, produto) => acesso + produto.valor, 0)
        return valorTotal
    
    } 

// valorDesconto

function calcularDesconto(cliente){
    let valorDesconto = 0
    
    for(let item of cliente){
        if(item.valor >= 200){
            valorDesconto += (item.valor*0.5) 
        }else if(item.valor >= 100){
            valorDesconto += (item.valor*0.2)
        }else if(item.valor >=80){
            valorDesconto += (item.valor*0.1)
        }else if(item.valor >= 50){
            valorDesconto += (item.valor*0.05)
        }else{
            "Essa peça não possui desconto"            
        }
    }
        return valorDesconto
}
 
//valor Final com descontos

let valorFinal = calcularTotal(cliente) - calcularDesconto(cliente)
let dataCompra = new Date()

// let dataCompra = new Date() 

let notaFiscal = {
    "Valor Total" : `R$${calcularTotal(cliente).toFixed(2).replace('.', ',')}`,
    "Valor Desconto" : `R$${calcularDesconto(cliente).toFixed(2).replace('.', ',')}`,
    "Valor Final" : `R$${valorFinal.toFixed(2).replace('.', ',')}`,
    "Data de Compra": dataCompra.toLocaleDateString('pt-BR', {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    })
    
}

// Ultimo cupom
function receberCupom(cliente){
    if (cliente.length > 10 || valorFinal > 800.0){
        return console.table ({
            ...notaFiscal,
            "Bonus" : "Você ganhou um cupom de R$50,00 para sua próxima compra"})

    }else{
        return console.table(notaFiscal)
    }
}

receberCupom(cliente)
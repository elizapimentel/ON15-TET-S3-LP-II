// switch/case

let regiao = 'sudoeste'

switch (regiao) {
    case 'nordeste': 
        console.log('possui 9 estados')
        break;
    case 'norte':
        console.log('possui 7 estados')
        break;
    case 'centro-oeste':
        console.log('possui 3 estados e o DF')
        break;
    case 'sudeste':
        console.log('possui 4 estados')
        break;
    case 'sul':
        console.log('possui 3 estados')
        break;
    default:
        console.log('essa região não existe no Brasil')
}

console.log('--------------------------------------------------------------')

let horario = 4

if (horario >= 0 && horario < 6) { 
    console.log("madrugada");
} else if (horario >= 6 && horario < 12) { 
    console.log("manhã");
} else if (horario >= 12 && horario < 18) {
    console.log("tarde");
} else if (horario >= 18 &&  horario < 24) {
    console.log("noite");
} else {
    console.log("horário inválido"); 
}

// construindo o mesmo caso do if...else acima com switch e limitações de uso!

console.log('--------------------------------------------------------------')

switch (horario) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("madrugada")
        break;
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
        console.log("manhã")
        break;
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
        console.log("tarde")
        break;
    case 18:
    case 19:
    case 20:
    case 21:
    case 22:
    case 23:
        console.log("noite")
        break;
    default:
        console.log("horário inválido");
}

console.log('--------------------------------------------------------------')

// EXERCÍCIO DE REVISÃO DE IF...ELSE
/*
escala de IDH

muitoBaixo 0 - 0.499
baixo .5 - 0.599
medio 0.6 - 0.699
alto .7 - .799
muitoAlto 0.8 - 1
*/

let noruega = 0.944
let qatar = 0.850
let canada = 0.913
let brasil = 0.755
let japao = 0.891
let vietna = 0.666
let afeganistao = 0.465
let camaroes = 0.512

let idh = 1.2

if(idh >= 0 && idh < 0.5) {
    console.log(`IDH muito baixo`)
} else if (idh >= 0.5 && idh <= 0.599) {
    console.log(`IDH baixo`)
} else if (idh >= .6 && idh < .7) {
    console.log(`IDH médio`)
} else if (idh >= .7 && idh < .8) {
    console.log(`IDH alto`)
} else if (idh >= .8 && idh <= 1) {
    console.log(`IDH muito alto`)
} else {
    console.log('IDH inválido')
}

//Desafio

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

function realizarCompra(comprasDaCliente) {
    let valorTotal = 0 // variável com a soma de todos os valores dos produtos sem desconto
    let descontoAplicado = 0 // variável com a soma de todos os descontos aplicados
    let valorFinal = 0 // variável com a soma de todos os valores dos produtos com desconto
    let quantidadeDeProdutos = comprasDaCliente.length

    for(let item of comprasDaCliente) {
        valorTotal += item.valor
        if (item.valor >= 200.0) {
            descontoAplicado += (item.valor * 0.5)
            valorFinal += (item.valor * 0.5)
        } else if (item.valor >= 100.0) {
            descontoAplicado += (item.valor * 0.2)
            valorFinal += (item.valor * 0.8)
        } else if (item.valor >= 80.0) {
            descontoAplicado += (item.valor * 0.1)
            valorFinal += (item.valor * 0.9)
        } else if (item.valor >= 50.0) {
            descontoAplicado += (item.valor * 0.05)
            valorFinal += (item.valor * 0.95)
        } else {
            valorFinal += item.valor
        }
    }

    let dataDaCompra = new Date()
    console.log(dataDaCompra)

    let notaFiscal = {
        "Valor Total": `R$${valorTotal.toFixed(2).replace('.', ',')}`,
        "Desconto Aplicado": `R$${descontoAplicado.toFixed(2).replace('.', ',')}`,
        "Valor Final": `R$${valorFinal.toFixed(2).replace('.', ',')}`,
        "Data de Compra": dataDaCompra.toLocaleDateString('pt-BR', {
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        })
    }

    if(quantidadeDeProdutos > 10 || valorFinal > 800.0) {
        return console.table({
            ...notaFiscal,
            "Bônus": 'Você ganhou um cupom de R$50,00 para a sua prõxima compra'
        })
    } else {
        return console.table(notaFiscal)
    }
}

realizarCompra(clienteLilit)
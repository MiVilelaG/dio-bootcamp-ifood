//faça um programa declarando o valor do Hamburguer e da bebida, e a quantidade que foi comprado, e o valor pago pelo cliente
// após isso calcular o preço final e o troco. Imprima a saida. 

const valorHamburguer = 15;
const quantidadeHamburguer = 2;
const valorBebida = 10;
const quantidadeBebida = 3;
const valorPago = 70;

//Calcular o preço final do pedido (total dos hambúrgueres + total das bebidas).
let totalHamburguer = valorHamburguer * quantidadeHamburguer
let totalBebida = valorBebida * quantidadeBebida
let precoFinal = totalBebida + totalHamburguer
//Calcular o troco do pedido, considerando o preço final e o valor pago pelo usuário.
let troco = valorPago - precoFinal

console.log(`O preço final do pedido é R$ ${precoFinal.toFixed(2)}. Seu troco é R$ ${troco.toFixed(2)}.`)
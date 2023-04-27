//Faça um programa que leia a quantidade de pedidos, o nome do pedido e o valor e qual cupom de desconto o cliente quer, 10% ou 20%.
// Este programa possui funções GET e PRINT
function calcularValorTotal(n, pedidos, cupom) {
    let total = 0;
    for (let i = 0; i < n; i++) {
      let [nome, valor] = pedidos[i].split(' ');
      valor = parseFloat(valor);
      total += valor;
    }
    
    // Aplica o cupom de desconto
    if (cupom === '10%') {
      total *= 0.9;
    } else if (cupom === '20%') {
      total *= 0.8;
    }
    
    return `Valor total: ${total.toFixed(2)}`;
  }
  
  //Recupera os valores de entrada, criando um array para os pedidos:
  const n = parseInt(gets());
  const pedidos = [];
  for (let i = 0; i < n; i++) {
    pedidos.push(gets());
  }
  const cupom = gets();
  
  console.log(calcularValorTotal(n, pedidos, cupom));
  
// EXERCÍCIO DO DIA 
// Um comerciante quer vender seus produtos com um lucro de 45% caso o valor da compra for menor que R$30,00.
// Caso contrário, o lucro deverá ser de 30%. Faça um programa que recebe o valor do produto e devolve o valor da venda.

let valorCompra = parseFloat(prompt("Digite um número"));
let valorFinal;

    if (valorCompra < 30){
        valorFinal = valorCompra + (valorCompra * 0.45);
    } else {
        valorFinal = valorCompra + (valorCompra * 0.3);
    }
// console.log(`O valor final do produto foi de ${valorFinal}`);

const resultado = document.querySelector('#resultado');

resultado.innerHTML =  `O valor final do produto foi de ${valorFinal}`








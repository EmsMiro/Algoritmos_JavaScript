/* Uma empresa de computadores possui clientes em diversos estados. 
Para realizar a venda é necessário calcular o imposto do produto, onde cada estado aplica uma alíquota variada. 
Construa um programa que receba o valor do produto e o estado de venda, calcule o valor do imposto e 
exiba o valor final do produto conforme a tabela abaixo:
MG -> 7%
SP -> 12%
RJ -> 15%
MS -> 8%
ES -> 12%
SC -> 18%*/

//solução 1:
function porcentagem(valor, estado){
    let numValor = parseFloat(valor);
    const estados = ["SP",'MG','RJ','MS','ES','SC']
    let estadoConvertido = estado.toUpperCase();
    if(estados.includes(estadoConvertido) ){
        if((!numValor) || (numValor <= 0)){
            console.log("O valor é inválido")
            return;
        }else{
            switch (estadoConvertido){
            case "SP":
                console.log("valor total com imposto R$" + numValor*1.12);
                break;
            case "MG":
                console.log("valor total com imposto R$" + numValor*1.07);
                break;
            case "RJ":
                console.log("valor total com imposto R$" + numValor*1.15);
                break;
            case "SC":
                console.log("valor total com imposto R$" + numValor*1.18);
                break;
            case "ES":
                console.log("valor total com imposto R$" + numValor*1.12);
                break;
            case "MS":
                console.log("valor total com imposto R$" + numValor*1.08);
                break;
            }
        }
    }else{
        console.log("O estado é inválido!");
        return;        
    }
}

//solução 2:
function productTaxBasedInState(value, stateTax) {
    const statesTax = {
      'MG': 0.07, 'SP': 0.12,
      'RJ': 0.15, 'MS': 0.08,
      'ES': 0.12, 'SC': 0.18,
    }
    
    if (!statesTax.hasOwnProperty([stateTax.toUpperCase()])) {
      return "Este estado não existe na base de dados.";
    } else if (!/[0-9]/.test(value)) {
      return "Este valor não é um número.";
    }
  
    const result = (+value * statesTax[stateTax.toUpperCase()]) + +value;
  
    return `O valor final do produto é: ${result}`
  }
  console.log(productTaxBasedInState(10,"SC")+"\n"+productTaxBasedInState(20,"sp")+"\n"+productTaxBasedInState(50, "Rj")+"\n"+productTaxBasedInState(100, "MS"));
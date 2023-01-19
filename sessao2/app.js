//sistema cadrastro de cliente
let nome ="Leonardo";
let sobrenome ="Costa";
let idade = 24;
const numCliente = 0983921;
let ValorEmprestimo = 15000;
let taxaDeJuros = 0.10;
let numAnos = 6
let ehBomPagador = true;

//console.log("Boa tarde Sr. " + nome +" " + sobrenome + ", sua idade é:" + idade );

/* Montante = valoremprestado + juros 
  juros = valoremprestimos * taxaJuros * numAnos
*/

//let juros = ValorEmprestimo * taxaDeJuros * numAnos;
//let montante = ValorEmprestimo + juros;
//console.log("Valor do montanntante:" + montante);

/* Estrutura Condicionais 
Bom pagador ou não 


if(ehBomPagador){
   console.log("O cliente " + nome + " é um bom pagador")
}else{
  console.log("O cliente " + nome + " não é um bom pagador")
}
*/
console.log("O cliente " + nome + (ehBomPagador ? " é bom pagador. " : " não é bom pagador. "));

/* ElSE IF taxa de juros por idade 
18-25 anos -> 9%
26-35 anos -> 8%
36-50 anos -> 7%
51 ou mais -> 6%  

let nome ="Leonardo";
let sobrenome ="Costa";
let idade = 65;
const numCliente = 0983921;
let ValorEmprestimo = 15000;
let taxaDeJuros = 0.10;
let numAnos = 6
let ehBomPagador = true;

if(idade >= 18 && idade <=25){
   taxaDeJuros = 0.09;
}else if(idade >= 26 && idade <= 35){
  taxaDeJuros = 0.08;
}else if(idade >= 36 && idade <= 50){
  taxaDeJuros = 0.07;
}else{
  taxaDeJuros = 0.06
}

console.log(taxaDeJuros);
*/
/*
Empresa de desenvolvimento de software

Programador Junnior -> 4mil 
Programador Pleno -> 5 mil
Programador Sênior -> 6 mil 
Testador -> 5 mil 
Arquiteto -> 8 mil
Analista -> 7 mil
Gerente -> 10 mil
*/

let cargo = "Programador Junior";

switch(cargo){
case "Programador Junior":
    console.log("O Programador Junior recebe R$3.000")
    break;
case "Programador Pleno":
    console.log("O Programador Pleno recebe R$4.000")
    break;    
case "Programador Senior":
    console.log("O Programador Senior recebe R$5.000")
    break;       
case "Testador":
    console.log("O Testador recebe R$5.000")
    break;
case "Arquiteto":
    console.log("O Arquiteto recebe R$8.000")
    break;
case "Analista":
    console.log("O Analista recebe R$7.000")
    break;
case "Gerente":
    console.log("O Gerente recebe R$10.000")
    break;
default:
    console.log("Cargo nao cadastrado no sistema")
}

import readline from 'readline-sync';

let valorA;
let valorB;
let valorC;
let somaValor; 

valorA = readline.questionInt("Digite o valor A: ");
valorB = readline.questionInt("Digite o valor B: ");
valorC = readline.questionInt("Digite o valor C: ");

somaValor = valorA + valorB

if(somaValor > valorC){
    console.log("A soma de A + B é maior do que C!");
} else if(somaValor < valorC){
    console.log("A soma de A + B é menor do que C!");
} else{
    console.log("A soma de A + B é igual a C!");
}
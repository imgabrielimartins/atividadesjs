import readline from 'readline-sync';

let continua = true;   
let numero;
let somaPositivos = 0;

do {
    numero = readline.questionInt("Digite um numero: ");
    
    if (numero === 0) {
        continua = false;  
    } else if (numero > 0) {
        somaPositivos += numero; // soma positivos
    }
} while (continua);

console.log(`\nA soma dos numeros positivos é: ${somaPositivos}`);
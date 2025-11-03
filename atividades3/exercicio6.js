import readline from 'readline-sync';

let continua = true;   
let numero;
let somaMultiplos = 0;
let mediaMultiplos = 0;
let contMultiplos = 0;

do {
    numero = readline.questionInt("Digite um numero: ");
    
    if (numero === 0) {
        continua = false;  
    } else if (numero % 3 === 0) {
       somaMultiplos += numero;
        contMultiplos++;
    }
} while (continua);

mediaMultiplos = contMultiplos > 0 ? (somaMultiplos / contMultiplos).toFixed(2) : 0;

console.log(`\nA media de todos os numeros multiplos por 3 é: ${mediaMultiplos}`);
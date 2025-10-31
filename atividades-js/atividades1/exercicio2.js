import readline from 'readline-sync';

let nota1;
let nota2;
let nota3;
let nota4;
let mediaFinal;

nota1 = readline.questionFloat("Digite sua primeira nota: ");
nota2 = readline.questionFloat("Digite sua segunda nota: ");
nota3 = readline.questionFloat("Digite sua terceira nota: ");
nota4 = readline.questionFloat("Digite sua quarta nota: ");

mediaFinal = (nota1 + nota2 + nota3 + nota4) / 4;

console.log(`\n Sua média final: ${mediaFinal.toFixed(1)}`);

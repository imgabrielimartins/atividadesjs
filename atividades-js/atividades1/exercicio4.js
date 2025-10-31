import readline from 'readline-sync';

let n1;
let n2;
let n3;
let n4;
let calculo;

n1 = readline.questionFloat("Digite um numero: ");
n2 = readline.questionFloat("Digite mais um numero: ");
n3 = readline.questionFloat("Digite mais um numero: ");
n4 = readline.questionFloat("Digite mais um numero: ");

calculo = (n1 * n2) - (n3 * n4);

console.log(`Diferença: ${calculo.toFixed(1)}`);
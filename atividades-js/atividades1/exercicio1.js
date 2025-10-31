import readline from 'readline-sync';

let salario;
let abono;

salario = readline.questionFloat("Digite o salario: ");
abono = readline.questionFloat("Digite o abono: ");

let novoSalario = salario + abono;

console.log(`Seu novo salário é ${novoSalario.toFixed(2)}`);
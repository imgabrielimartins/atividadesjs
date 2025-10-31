import readline from 'readline-sync';

let salarioBruto;
let adcNoturno;
let horasExtras;
let descontos;
let salarioLiquido;

salarioBruto = readline.questionFloat("Digite seu salario: ");
adcNoturno = readline.questionFloat("Digite seu adcional noturno: ");
horasExtras = readline.questionFloat("Digite suas horas extras: ")
descontos = readline.questionFloat("Digite seus descontos: ");

salarioLiquido = salarioBruto + adcNoturno + (horasExtras * 5) - descontos;

console.log(`Salário líquido: ${salarioLiquido.toFixed(2)}`);
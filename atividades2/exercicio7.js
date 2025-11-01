import readline from 'readline-sync';

let numero1;
let numero2;
let codigoOperacao;
let resultado;

console.log("# ## ### #### #########   Calculadora   ########## #### ### ## #");
console.log("--Digite 1 para Soma--");
console.log("--Digite 2 para Subtração--");
console.log("--Digite 3 para Multiplicação--");
console.log("--Digite 4 para Divisão--");

codigoOperacao = readline.questionInt("Digite o codigo da operacao: ");
numero1 = readline.questionFloat("Digite o primeiro numero: ");
numero2 = readline.questionFloat("Digite o segundo numero: ");

switch(codigoOperacao){
    case 1:
        resultado = numero1 + numero2;
        console.log(`${numero1.toFixed(1)} + ${numero2.toFixed(1)} = ${resultado.toFixed(1)}`);
        break;
    case 2:
        resultado = numero1 - numero2;
        console.log(`${numero1.toFixed(1)} - ${numero2.toFixed(1)} = ${resultado.toFixed(1)}`);
        break;
    case 3:
        resultado = numero1 * numero2;
        console.log(`${numero1.toFixed(1)} * ${numero2.toFixed(1)} = ${resultado.toFixed(1)}`);
        break;
    case 4:
        resultado = numero1 / numero2;
        console.log(`${numero1.toFixed(1)} / ${numero2.toFixed(1)} = ${resultado.toFixed(1)}`);
        break;
    default:
        console.log("Operação inválida!");
}
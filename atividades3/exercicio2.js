import readline from 'readline-sync';

let numero = [];
let totalPares = 0;
let totalImpares = 0;


numero[0] = readline.questionInt("Digite o primeiro numero: ");
numero[1] = readline.questionInt("Digite o segundo numero: ");
numero[2] = readline.questionInt("Digite o terceiro numero: ");
numero[3] = readline.questionInt("Digite o quarto numero: ");
numero[4] = readline.questionInt("Digite o quinto numero: ");
numero[5] = readline.questionInt("Digite o sexto numero: ");
numero[6] = readline.questionInt("Digite o setimo numero: ");
numero[7] = readline.questionInt("Digite o oitavo numero: ");
numero[8] = readline.questionInt("Digite o nono numero: ");
numero[9] = readline.questionInt("Digite o decimo numero: ");

for (let i = 0; i < numero.length; i++) {
    if (numero[i] % 2 === 0) {
        totalPares++;
    } else {
        totalImpares++;
    }
}

console.log(`Total de números pares: ${totalPares}`);
console.log(`Total de números ímpares: ${totalImpares}`);

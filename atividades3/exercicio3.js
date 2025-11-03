import readline from 'readline-sync';

const cadastroIdade = [];
let maiores50 = 0;
let menores21 = 0;
let i = 0;

while (true) {
    let idade = readline.questionInt("Digite uma idade: ");
    
    if (idade <= 0) {
        break;
    }

    cadastroIdade[i] = idade;
    i++;

    if (idade > 50) {
        maiores50++;
    }
    if (idade < 21) {
        menores21++;
    }
}

console.log(`\nTotal de pessoas menores de 21 anos: ${menores21}\n
    Total de pessoas maiores de 50 anos: ${maiores50}`);


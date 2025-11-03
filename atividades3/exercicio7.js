import readline from 'readline-sync';

const vetorNumero = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];
let encontrarNumero = readline.questionInt("Digite o numero que voce deseja encontrar: ");

const i = vetorNumero.indexOf(encontrarNumero);

if(i !== -1){
    console.log(`O número ${encontrarNumero} está localizado na posição: ${i}`);
} else {
    console.log(`O número ${encontrarNumero} não foi encontrado!`);
}

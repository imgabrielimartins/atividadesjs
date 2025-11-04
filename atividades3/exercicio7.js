import readline from 'readline-sync';

const vetorNumero = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];
let encontrarNumero = readline.questionInt("Digite o numero que voce deseja encontrar: ");
let numeroEncontrado = false;

for (let i = 0; i < vetorNumero.length; i++) {
    if (vetorNumero[i] === encontrarNumero) {
        console.log(`O número ${encontrarNumero} está localizado na posição: ${i}`);
        numeroEncontrado = true;
        break;
    }
}

if (!numeroEncontrado) {
    console.log(`O número ${encontrarNumero} não foi encontrado!`);
}


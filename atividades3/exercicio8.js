import readline from 'readline-sync';

const vetorNumero = new Array(10);
let indicesImpares = [];
let elementosPares = [];

for (let i = 0; i < 10; i++) {
    vetorNumero[i] = readline.questionInt(`Digite o numero ${i + 1}: `);
}

let soma = vetorNumero.reduce((valorAcumulado, elementoAtual) => valorAcumulado + elementoAtual, 0);

for (let i = 0; i < vetorNumero.length; i++) {
    if (i % 2 !== 0) {
        indicesImpares.push(vetorNumero[i]);
    }
    if (vetorNumero[i] % 2 === 0) { 
        elementosPares.push(vetorNumero[i]);
    }
}

console.log("Elementos nos indices impares:");
console.log(indicesImpares);
console.log("Elementos pares:");
console.log(elementosPares);
console.log(`Soma: ${soma}`);
console.log(`Media: ${(soma / 10).toFixed(2)}`);

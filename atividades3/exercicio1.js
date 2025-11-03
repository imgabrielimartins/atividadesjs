import readline from 'readline-sync';

let numero1, numero2, numeroMenor, numeroMaior;

numero1 = readline.questionInt("Digite o primeiro numero do intervalo: ");
numero2 = readline.questionInt("Digite o ultimo numero do intervalo: ");

numeroMenor = Math.min(numero1, numero2);
numeroMaior = Math.max(numero1, numero2);

if(numero1 > numero2){ 
    console.log("Intervalo Inválido!");
} else {
    console.log(`No intervalo entre ${numeroMenor} e ${numeroMaior}:\n`);
    for (let i = numeroMenor; i <= numeroMaior; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(`${i} é múltiplo de 3 e 5`);
        }
    }
}
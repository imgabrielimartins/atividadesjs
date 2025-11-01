import readlineSync from 'readline-sync';

let nomeDoador;
let idadeDoador;
let primeiraDoacao;
let sexoDoador;

nomeDoador = readlineSync.question("Digite o nome do doador: ");
idadeDoador = readlineSync.questionInt("Digite a idade do doador: ");
primeiraDoacao = readlineSync.question("Primeira doacao de sangue? (S/N): ").toUpperCase();
sexoDoador = readlineSync.question("Digite o sexo do doador (M/F): ").toUpperCase();

if (idadeDoador >= 18 && idadeDoador <= 59) {
    console.log(`${nomeDoador}, você está apt${sexoDoador === 'F' ? 'a' : 'o'} a doar sangue!`);
} else if (idadeDoador >= 60 && idadeDoador <= 69) {
    // entre 60 e 69 só pode doar se NÃO for a primeira doação
    if (primeiraDoacao === 'S') {
        console.log(`${nomeDoador}, você não está apt${sexoDoador === 'F' ? 'a' : 'o'} a doar sangue!`);
    } else {
        console.log(`${nomeDoador}, você está apt${sexoDoador === 'F' ? 'a' : 'o'} a doar sangue!`);
    }
} else {
    console.log(`${nomeDoador}, você não está apt${sexoDoador === 'F' ? 'a' : 'o'} a doar sangue!`);
}
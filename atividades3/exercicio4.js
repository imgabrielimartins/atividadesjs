import readline from 'readline-sync';

//variaveis
let cadastro = [];
let backendTotal = 0;
let frontendMulheres = 0;
let mobileMaiores40 = 0;
let fullstackNBMenores30 = 0;
let totalPessoas = 0;
let mediaIdade;
let idade;

//inicio para cadastro
let continua = readline.keyInYN("Voce gostaria de realizar o seu cadastro? ");

//inicio while que realiza as perguntas e salva no vetor
while (continua) {
    idade = readline.questionInt("Digite sua idade: ");

    console.log("\n# ## ### #### ######### ########## #### ### ## #");
    console.log("--Digite 1 - mulher cis --");
    console.log("--Digite 2 - homem cis --");
    console.log("--Digite 3 - não binário --");
    console.log("--Digite 4 - mulher trans --");
    console.log("--Digite 5 - homem trans --");
    console.log("--Digite 6 - outros --");

    let generoID = readline.questionInt("Identidade de genero: ");

    console.log("\n# ## ### #### ######### ########## #### ### ## #");
    console.log("--Digite 1 - backend --");
    console.log("--Digite 2 - frontend --");
    console.log("--Digite 3 - mobile --");
    console.log("--Digite 4 - fullstack --");

    let pessoaDev = readline.questionInt("Pessoa desenvolvedora: ");

    //envia para o vetor
    cadastro.push({ idade, generoID, pessoaDev });

    //para finalizar while
    continua = readline.keyInYN("Deseja continuar? ");
}

//separar parametros
for (const p of cadastro) {
    const { idade, generoID, pessoaDev } = p;

    if (pessoaDev === 1) {
        backendTotal++;
    }

    if ((generoID === 1 || generoID === 4) && pessoaDev === 2) {
        frontendMulheres++;
    }

    if ((generoID === 2 || generoID === 5) && pessoaDev === 3 && idade > 40) {
        mobileMaiores40++;
    }

    if (generoID === 3 && pessoaDev === 4 && idade < 30) {
        fullstackNBMenores30++;
    }
}

//contagem de cadastros
totalPessoas = cadastro.length;
//media idades (corrigido: soma todas as idades e divide pelo total)
const somaIdades = cadastro.reduce((s, p) => s + p.idade, 0);
mediaIdade = totalPessoas ? (somaIdades / totalPessoas).toFixed(2) : "0.00";

//saida
console.log(`\nTotal de pessoas desenvolvedoras Backend: ${backendTotal}\n
    Total de mulheres cis e trans desenvolvedoras Frontend: ${frontendMulheres}\n
    Total de homens cis e trans desenvolvedores Mobile maiores de 40 anos: ${mobileMaiores40}\n
    Total de pessoas não binarias desenvolvedoras Fullstack menores de 30 anos: ${fullstackNBMenores30}\n
    O numero total de pessoas que responderam a pesquisa: ${totalPessoas}\n
    A média de idade das pessoas que responderam a pesquisa: ${mediaIdade}`);
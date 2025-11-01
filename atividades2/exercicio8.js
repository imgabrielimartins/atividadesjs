import readline from 'readline-sync';

let tipoOperacao;
let saldo = 1000.00;
let valorSaqueDeposito;
let novoSaldo;


console.log("# ## ### #### #########   Bem-vindo a sua conta bancária!   ########## #### ### ## #");
console.log("--Digite 1 para saldo--");
console.log("--Digite 2 para saque--");
console.log("--Digite 3 para deposito--");

tipoOperacao = readline.questionInt("Digite o numero da operacao desejada: ");

if(tipoOperacao >= 2){
    valorSaqueDeposito = readline.questionFloat("Valor: R$ ");
}

switch(tipoOperacao){
    case 1:
    console.log(`Operacao - saldo \n
        Saldo: R$ ${saldo.toFixed(2)}`)
    break;
     case 2:
    if(saldo < valorSaqueDeposito){
        console.log("Operação - Saque \nSaldo Insuficiente!");
    }else{
        novoSaldo = saldo - valorSaqueDeposito;
        console.log(`Operacao - Saque \n
            Novo Saldo: R$ ${novoSaldo.toFixed(2)}`);
    }
    break;
    case 3:
        novoSaldo = saldo + valorSaqueDeposito;
        console.log(`Operacao - Deposito \n
            Novo Saldo: R$ ${novoSaldo.toFixed(2)}`);
    break;
    default:
     console.log("Operação Inválida!");
}

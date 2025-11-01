import readline from 'readline-sync';

let nomeColaborador;
let codigoCargo;
let salarioAtual;
let cargo;
let novoSalario;
let reajuste;

nomeColaborador = readline.question("Nome do colaborador: ");
codigoCargo = readline.questionInt("Cargo: ");
salarioAtual = readline.questionFloat("Salario: ");

console.log(`Nome do colaborador: ${nomeColaborador}\n`);

switch (codigoCargo) {
  case 1:
    cargo = "gerente";
    reajuste = 0.10;
    novoSalario = salarioAtual + (reajuste * salarioAtual);
    console.log(`Cargo: ${cargo}\n
        Salario: R$ ${novoSalario.toFixed(2)}`);
    break;
  case 2:
    cargo = "vendedor";
    reajuste = 0.07;
    novoSalario = salarioAtual + (reajuste * salarioAtual);
    console.log(`Cargo: ${cargo}\n
        Salario: R$ ${novoSalario.toFixed(2)}`);
    break;
  case 3:
    cargo = "supervisor";
    reajuste = 0.09;
    novoSalario = salarioAtual + (reajuste * salarioAtual);
    console.log(`Cargo: ${cargo}\n
        Salario: R$ ${novoSalario.toFixed(2)}`);
    break;
  case 4:
    cargo = "motorista";
    reajuste = 0.06;
    novoSalario = salarioAtual + (reajuste * salarioAtual);
    console.log(`Cargo: ${cargo}\n
        Salario: R$ ${novoSalario.toFixed(2)}`);
    break;
  case 5:
    cargo = "estoquista";
    reajuste = 0.05;
    novoSalario = salarioAtual + (reajuste * salarioAtual);
    console.log(`Cargo: ${cargo}\n
        Salario: R$ ${novoSalario.toFixed(2)}`);
    break;
  case 6:
    cargo = "tecnico de TI";
    reajuste = 0.08;
    novoSalario = salarioAtual + (reajuste * salarioAtual);
    console.log(`Cargo: ${cargo}\n
        Salario: R$ ${novoSalario.toFixed(2)}`);
    break;
}
import readline from 'readline-sync';

let codigoDoProduto;
let quantComprada;
let produto;
let precoProduto = 0;
let valorTotal;

codigoDoProduto = readline.questionInt("Codigo do produto: ");
quantComprada = readline.questionInt("Quantidade: ");

switch(codigoDoProduto){
    case 1:
        if(codigoDoProduto === 1){
            produto = "Cachorro Quente";
            precoProduto = 10.00;
            valorTotal = quantComprada * precoProduto;
        }
        console.log(`Produto: ${produto}\n
            Preço: R$ ${valorTotal.toFixed(2)}`);
        break;
    case 2:
        if(codigoDoProduto === 2){
            produto = "X-salada";
            precoProduto = 15.00;
            valorTotal = quantComprada * precoProduto;
        }
        console.log(`Produto: ${produto}\n
            Preço: R$ ${valorTotal.toFixed(2)}`);
        break;
    case 3:
        if(codigoDoProduto === 3){
            produto = "X-bacon";
            precoProduto = 18.00;
            valorTotal = quantComprada * precoProduto;
        }
        console.log(`Produto: ${produto}\n
            Preço: R$ ${valorTotal.toFixed(2)}`);
        break;
    case 4:
        if(codigoDoProduto === 4){
            produto = "Bauru";
            precoProduto = 12.00;
            valorTotal = quantComprada * precoProduto;
        }
        console.log(`Produto: ${produto}\n
            Preço: R$ ${valorTotal.toFixed(2)}`);
        break; 
    case 5:
        if(codigoDoProduto === 5){
            produto = "Refrigerante";
            precoProduto = 8.00;
            valorTotal = quantComprada * precoProduto;
        }
        console.log(`Produto: ${produto}\n
            Preço: R$ ${valorTotal.toFixed(2)}`);
        break; 
    case 6:
         if(codigoDoProduto === 6){
            produto = "Suco de laranja";
            precoProduto = 13.00;
            valorTotal = quantComprada * precoProduto;
        }
        console.log(`Produto: ${produto}\n
            Preço: R$ ${valorTotal.toFixed(2)}`);
        break;  
}
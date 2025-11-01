import readline from 'readline-sync';

let tipoAnimal1;
let tipoAnimal2;
let tipoAnimal3;

tipoAnimal1 = readline.question("Digite uma caracteristica de um animal: ").toLowerCase();
tipoAnimal2 = readline.question("Digite mais uma: ").toLowerCase();
tipoAnimal3 = readline.question("Digite a ultima: ").toLowerCase();

if(tipoAnimal1 === "vertebrado"){
  if(tipoAnimal2 === "ave"){
    if(tipoAnimal3 === "carnivoro"){
        console.log("Águia");
    }else{
        console.log("Pomba");
    }
  }else{
    if(tipoAnimal3 === "onivoro"){
        console.log("Homem");
    }else{
        console.log("Vaca");
    }
  }
}else{
    if(tipoAnimal2 === "inseto"){
        if(tipoAnimal3 === "hematofago"){
              console.log("Pulga");
        }else{
              console.log("Lagarta");
        }
    }else{
         if(tipoAnimal3 === "hematofago"){
              console.log("Sanguessuga");
        }else{
              console.log("Minhoca");
    }
    }
}
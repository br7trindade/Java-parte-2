var prompt = require("prompt-sync")()

let bebida = Number(prompt("Qual bebida você deseja?"));

switch(bebida) {
    case 1:
        console.log("Aqui está sua Água");
        break;

    case 2: 
    console.log("Aqui está seu suco");
    break;

case 3:
    console.log("Aqui está seu Refrigerante");
    break;

    case 4:
        console.log("Aqui está seu café");
break;

        default: console.log("número invalido");

}


const nome = "Thailon";
const idade = 26;
const bebidaMaior = "cerveja";
const bebidaMenor = "suco";
//exemplo tradicional
//if (idadeCliente >= idadeMinima) {
//console.log("cerveja")
//}// else {
// console.log("suco")
//}

// o ternario é bom utilizar quando for fazer comparações curtas, caso tenha algo mais complexo utilizar o if else

const pedido = `${nome} diz: "por favor, quero beber ${idade >= 18 ? bebidaMaior : bebidaMenor}"`
console.log(pedido)
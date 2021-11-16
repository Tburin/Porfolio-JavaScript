//conversão é a alteração de um dado em outro, no JS existem dois tipos.

//conversão implicita
const numero = 456;
const numeroString = "456";

//console.log(numero===numeroString) === esta comparando uma variavel com a outra, ou seja, um numero com um texto retorna false
console.log(numero == numeroString)//na conversão implicita utilizar somente == nesse caso ele esta covertendo e comparando os dois retorna true


//conversão explicita
//Number()
//String()
console.log(numero + Number(numeroString))
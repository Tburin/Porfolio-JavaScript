// tipo Number

//variaveis do tipo const, lembrando que temos 3 maneiras de declarar as variaveis
//var, const, let. Recomenda-se usar o let. 
const meuNumero = 3;

const primeiroNumero = 1;
const segundoNumero = 2;

const operacaoMatematica = primeiroNumero + segundoNumero;//apenas para exemplificar uma operaçãod e adição.

console.log(operacaoMatematica)//apresenta o resultado no terminal.

//ponto flutuante

const numeroPontoFlutuante = 3.3;
const pontoFlutuanteSemZerp = .5;


const novaOperacao = primeiroNumero / numeroPontoFlutuante;

console.log(novaOperacao)


//exemplo de NaN (Not a Number)

const testeNan = 'Not a Number';

console.log(primeiroNumero * testeNan)


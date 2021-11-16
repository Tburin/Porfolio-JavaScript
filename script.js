//tipos de variaveis
//var, let, const
//recomendavel sempre utilizar o let, pois o const como o próprio nome já diz é uma constante
//então não tem como deixar ela para receber algum valor futuro, e o var é muito amplo, muito solto,
//no caso se futuramente no código você declarar duas var igual pode dar bug no sistema.

//exemplo var
//var altura = 5;
//var comprimento = 8;
//area = altura * comprimento;
//console.log(area)

let forma = 'retangulo'
let area;
let altura = 5;
let comprimento = 8;

if (forma === 'retangulo') {
    area = altura * comprimento;
} else {
    area = (altura * comprimento) / 2;
}
area = altura * comprimento;
console.log(area)

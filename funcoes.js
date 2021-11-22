//No JS existem três maneiras de excutar as funcões.
//Normalmente segue a mesma regra abaixo;

//1º Declara a função
//2º Executa a função

//Declarando a função

function imprimeTexto(texto) { //saida do valor da soma, no caso foi incerido na variavel texto;
    console.log(texto);
}

//Executando a função 1 + vezes
imprimeTexto(soma());//estou atribuindo o valor de soma no imprimeTexto.

function soma() {
    //outras funções
    return 2 + 2;//lembrando que o return tem que ser a ultima coisa antes de fechar o bloco.
}


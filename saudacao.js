//Declarção da função com parâmetro
function saudacao(nomeJogador) {
    console.log("Bem vindo ao jogo, " + nomeJogador + "!")
};

saudacao("Franklin");

//Função que recebe uma valor, soma 1 número e retorna
function subirDeNivel(nivelAtual) {
    return nivelAtual + 1
};

let meuNivel = 776;

let nivelAtualizado = subirDeNivel(meuNivel);
console.log("Seu nível atual é: " + nivelAtualizado);

//Função que soma dois números
function soma(numero1, numero2) {
    return numero1 * numero2
};

console.log(soma(7,7));
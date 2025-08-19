const prompt = require('prompt-sync')();
let contador = 0;
while(contador < 10) {
    console.log('JAQUES');
    contador = contador + 1;
}

let multiplicando = 0;
let multiplicador = Number(prompt('Escolha o número da Tabuada: '));

while(multiplicando <= 10) {
    console.log(`${multiplicando} * ${multiplicador} = ${multiplicando * multiplicador}`);
    multiplicando++
}

let cont = 10;
while(cont >=0) {
    console.log(cont);
    cont--  
}

let contt = 0;
let soma = 0;
let resposta = null;
while (resposta !== 0) {
    resposta = Number(prompt('Informe as médias (Para calcular a média digite 0) :'));
    soma += resposta
    contt++
}

let mediaFinal = soma/(contt-1)
console.log(`A média final é: ${mediaFinal}`);

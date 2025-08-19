const prompt = require('prompt-sync')();
let contt = 0;
let soma = 0;
let resposta = 0;

do {
    resposta = Number(prompt('Informe as médias (Para calcular a média digite 0) :'));
    soma += resposta
    if (resposta !== 0) {
        contt++
    }

} while (resposta !== 0);

let mediaFinal = soma / (contt)
console.log(`A média final é: ${mediaFinal}`);


do {
    console.log(contador, contador++);

} while (contador < 10)


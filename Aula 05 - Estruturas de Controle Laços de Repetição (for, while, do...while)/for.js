const prompt = require('prompt-sync')();
// Inicialização, Condição e Incremento
for (let contador = 0; contador <= 10; contador++) {
    console.log('contador');
}

let multiplicador = Number(prompt('Escolha o número da Tabuada: '));
for (let multiplicando = 0; multiplicando <= 10; multiplicando++) {
    console.log(`${multiplicando} * ${multiplicador} = ${multiplicando * multiplicador}`);
}


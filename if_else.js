const prompt = require('prompt-sync')()

let valor1 = Number(prompt("Digite o primeiro número: "));
let valor2 = Number(prompt("Digite o segundo número: "));
let op = prompt('Digite a operação desejada: (+, -, *, /): ');
let resultado;

if (op === '+') {
    resultado = valor1 + valor2;
} else if (op === '-') {
    resultado = valor1 - valor2;
} else if (op === '*') {
    resultado = valor1 * valor2;
} else if (op === '/') {
    if(valor2 !== 0) {
        resultado = valor1 / valor2;
    } else {
        console.log("Erro: Divisão por zero");
    }
} else {
    console.log("Operação Inválida");
    resultado = undefined;
}

if (resultado !== undefined) {
    console.log(`Resultado: ${resultado}`);
}



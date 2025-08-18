const prompt = require('prompt-sync')()

let valor1 = Number(prompt("Digite o primeiro número: "));
let valor2 = Number(prompt("Digite o segundo número: "));
let op = prompt('Escolha a operação desejada: (+, -, *, /): ')
let resultado;

switch (op) {
    case '+':
        resultado = valor1 + valor2;
        break;
    case '-':
        resultado = valor1 - valor2;
        break;
    case '*':
        resultado = valor1 * valor2;
        break;
    case '/':
        if (valor2 !== 0) {
            resultado = valor1 / valor2;
        } else {
            console.log("Erro: Divisão por zero");
            resultado = undefined;
        }
        break;
    default:
        console.log('Operação Inválida!');
        resultado = undefined;
        break;
}


if (resultado !== undefined) {
    console.log(resultado);
}



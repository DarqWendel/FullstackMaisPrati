// Escreva um código que leia uma temporada em graus Celsius e devolva em fahrenheit
const prompt = require('prompt-sync')();
let grausCelsius = Number(prompt('Insira um valor em graus Celsius: '));
let fahrenheit = (grausCelsius * 9/5) + 32
console.log(`Temperatura Celsius: ${grausCelsius}° = Temperatura Fahrenheit: ${fahrenheit}°F`);


/* Escreva um algoritmo para ler o múmero de eleitores de um município, o número de votos brancos, nulos e válidos. Calcular
e escrever o percentual que cada um representa em relação ao total de eleitores
*/
let eleitores = Number(prompt("Digite a quantidade de eleitores: "));
let brancos = Number(prompt("Digite a quantidade de brancos: "));
let nulos = Number(prompt("Digite a quantidade de nulos: "));
let validos = Number(prompt("Digite a quantidade de validos: "));

let percBrancos = (brancos / eleitores) * 100;
let percNulos = (nulos / eleitores) * 100;
let percValidos = (validos / eleitores) * 100;

console.log("Percentual de votos brancos: " + percBrancos.toFixed(2) + "%");
console.log("Percentual de votos nulos: " + percNulos.toFixed(2) + "%");
console.log("Percentual de votos válidos: " + percValidos.toFixed(2) + "%");


/* A turma C é composta de 60 alunos, e a turma D de 20 alunos. Escreva um algoritmo que leia o percentual de alunos reprovados na turma C, o percentual de aprovados na turma D, calcule e escreva:

a) O número de alunos reprovados na turma C.
b) O número de alunos reprovados na turma D.
c) A porcentagem de alunos reprovados em relação ao total de alunos das duas turmas.

Exemplo de dados de entrada:

10 (percentual de alunos reprovados na turma C)

85 (percentual de alunos aprovados na turma D)

Saída para os dados de entrada acima:

6 (quantidade de alunos reprovados na turma C)

3 (quantidade de alunos reprovados na turma D)

11,25% (percentual de alunos reprovados em relação ao total de alunos das duas turmas) */

let turmaC = 60;
let turmaD = 20;

let percentualReprovadosC = Number(prompt('Escreva o percentual de alunos reprovados na turma C: '));
let percentualAprovadosD = Number(prompt('Escreva o percentual de alunos aprovados na turma D: '));

let qtdReprovadoC = (turmaC = percentualReprovadosC)/100
let qtdReprovadoD = ((100 - percentualAprovadosD) * turmaD)

let totalAlunos = turmaC + turmaD;

let relacaoReprovadosTotal = ((qtdReprovadoC + qtdReprovadoD)/totalAlunos) * 100

console.log('A quantidade de alunos reprovados na turma C é de: ', qtdReprovadoC);
console.log('A quantidade de alunos reprovados na turma D é de: ', qtdReprovadoD);
console.log('Percentual de alunos reprovados em relação ao total de alunos das duas é de? ', relacaoReprovadosTotal);

// Faça um programa que leia o dia da semana (Domingo, Segunda, Terça, Quarta, Quinta, Sexta e Sábado). Esse dia deve ser um texto.
//  Se for Sábado ou Domingo imprimir "Final de Semana", senão imprimir "Dia Útil".

let dia = prompt("Escolha um dia da semana: ");
switch (dia) {
    case "Sabado":
        console.log("Final de Semana");
        break;
    case "Domingo": 
     console.log("Final de Semana");
       break;
    
    default:
        console.log("Dia Útil");
        break;
}

// Escreva um algoritmo para repetir a leitura de um número enquanto o valor
// fornecido for diferente de 0. Para cada número fornecido, imprimir se ele é
// NEGATIVO ou POSITIVO. Quando o número 0 for fornecido a repetição deve ser
// encerrada sem imprimir mensagem alguma.

let valor

do {
    valor = Number(prompt('Informe um valor: '))

    if (valor > 0) {
        console.log('Positivo!')
    } else if (valor == 0) {
        break
    } else {
        console.log('Negativo!')
    }

} while (valor !== 0)
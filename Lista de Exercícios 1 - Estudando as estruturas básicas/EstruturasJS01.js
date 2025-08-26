/* 1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
utilizando uma estrutura de controle if. */
const prompt = require('prompt-sync')();

let verificador = Number(prompt('Bem-vindo ao Verificador de Números Pares e Ímpares! Digite o número: '));
if (verificador % 2 === 0) {
    console.log(`Número ${verificador} é par`);
} else {
    console.log(`Número: ${verificador} é ímpar`);
}

/* 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
controle if-else. */

let idade = prompt('Bem-vindo ao Verificador de Idade! Digite uma idade: ');

if (idade < 1) {
    console.log(`Idade: ${idade} - Récem Nascido`);
} else if (idade > 0 && idade <= 12) {
    console.log(`Idade: ${idade} - Criança`);
} else if (idade > 12 && idade <= 17) {
    console.log(`Idade: ${idade} - Adolescente`);
} else if (idade > 17 && idade < 60) {
    console.log(`Idade: ${idade} - Adulto`);
} else {
    console.log(`Idade: ${idade} - Idoso`);
}

/* 3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como
"Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if. */

let verificadorDeNota = parseFloat(prompt('Bem-vindo ao Verificador de Notas! Digite uma nota: '));
if (verificadorDeNota < 3) {
    console.log(`Nota: ${verificadorDeNota} - Reprovado`);
} else if (verificadorDeNota < 6) {
    console.log(`Nota: ${verificadorDeNota} - Recuperação`);
} else if (verificadorDeNota >= 6) {
    console.log(`Nota: ${verificadorDeNota} - Aprovado`);
} else {
    console.log(console.log("Nota Inválida!"));
}

/*  4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
Utilize switch-case para implementar a lógica de cada opção selecionada. */

let menu = prompt('Qual sua operação preferida? selecione uma operação: (+, -, *): ')
switch (menu) {
    case '+':
        console.log('Parabéns, você escolheu +');
        break
    case '-':
        console.log('Parabéns, você escolheu -');
        break
    case '*':
        console.log('Parabéns, você escolheu *');
        break
    default:
        console.log('Operação Inválida');
        break
}

/* 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
  determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
  utilizando if-else */

let peso = Number(prompt("Bem vindo ao Verificador de IMC! Digite o peso: "));
let altura = Number(prompt("Bem vindo ao Verificador de IMC! Digite o altura: "));
let imc = peso / (altura * altura)
console.log(imc.toFixed(2));

if (imc < 18.5) {
    console.log("Baixo Peso!");
} else if (imc >= 18.5 && imc <= 24.9) {
    console.log("Peso Normal");
} else if (imc >= 25 && imc <= 29.9) {
    console.log("Sobrepeso");
} else {
    console.log("Obesidade");
}

/*  6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
  formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
  Isósceles, escaleno ou eqüilátero. */

console.log("Bem vindo ao Verificador de Triângulos!");

let A = Number(prompt("Digite um valor: "));
let B = Number(prompt("Digite um valor: "));
let C = Number(prompt("Digite um valor: "));

let verificadorDeTriangulo = (A < B + C && B < A + C && C < A + B);
let ternario = verificadorDeTriangulo == true ? "Sim" : "Não";
console.log(`É um Triângulo? ${ternario}`);
if (!verificadorDeTriangulo) {
    console.log("Não é um triângulo!");
} else {
    if (A == B && A == C) {
        console.log(`A = ${A}\nB = ${B}\nC = ${C}\nClassificação do Triângulo: Equilátero`);
    } else if ((A == B || A == C || B == C)) {
        console.log(`A = ${A}\nB = ${B}\nC = ${C}\nClassificação do Triângulo: Isósceles`);
    } else {
        console.log(`A = ${A}\nB = ${B}\nC = ${C}\nClassificação do Triângulo: Escaleno`);
    }
}

/* 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, eR$0,25se
 forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
 compradas, calcule e escreva o valor total da compra. */

let quantidade = Number(prompt("Digite o número de maçãs compradas:"));
let preco;

if (quantidade < 12) {
    preco = 0.30;
} else {
    preco = 0.25;
}

let total = quantidade * preco;
console.log(`O valor total da compra é R$ ${total.toFixed(2)}`);

/* 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
 e escreve-los em ordem crescente */

let algoritmo1 = Number(prompt('Digite um valor: '));
let algoritmo2 = Number(prompt('Digite um valor: '));

if (algoritmo1 == algoritmo2) {
    console.log('Não são lidos valores iguais');
} else {
    if (algoritmo1 < algoritmo2) {
        for (let i = algoritmo1; i <= algoritmo2; i++) {
            console.log(i);
        }
    } else {
        for (let i = algoritmo2; i <= algoritmo1; i++) {
            console.log(i);
        }
    }
}

/*  9. Implemente um programa que exibe uma contagem regressiva de 10 até 1 noconsole
 utilizando um loop for */

const inicializador = 10;
for (let i = inicializador; i >= 1; i--) {
    console.log(i);
}

/*  10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes. */

let numeroInteiro = Number(prompt('Escreva um número inteiro: '));
for (let i = 1; i <= 10; i++) {
    console.log(numeroInteiro);
}

/* 11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total
 utilizando um loop for. */

let soma = 0;

for (let i = 1; i <= 5; i++) {
    let numero = Number(prompt(`Digite o ${i}º número:`));
    soma += numero;
}

console.log(`A soma total é: ${soma}`);

/* 12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
 10) utilizando um loop for. */

let multiplicador = Number(prompt('Escolha a tabuada: '));
for (let i = 1; i <= 10; i++) {
    let tabuada = (i * multiplicador)
    console.log(`${i} * ${multiplicador} = ${tabuada}`);
}

/*  13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
 a média aritmética desses números. */
let somaA = 0;
let quantidadeA = 0;
let numero;

do {
    numero = Number(prompt("Digite um número (0 para sair):"));

    if (numero !== 0) {
        somaA += numero;
        quantidadeA++;
    }

} while (numero !== 0);

if (quantidadeA > 0) {
    let media = somaA / quantidadeA;
    console.log(`A média aritmética é: ${media}`);
} else {
    console.log("Nenhum número válido foi digitado.");
}

/*  14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
 utilizando um loop for ou while. */

let num = Number(prompt("Digite um número:"));
let fatorial = 1;

for (let i = 1; i <= numero; i++) {
    fatorial *= i; // fatorial = fatorial * i
}

console.log(`O fatorial de ${numero} é ${fatorial}`);

/* 15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
 Fibonacci utilizando um loop for */
let n1 = 0;
let n2 = 1;

console.log(n1);
console.log(n2);

for (let i = 3; i <= 10; i++) {
    let proximo = n1 + n2;
    console.log(proximo);
    n1 = n2;
    n2 = proximo;
}


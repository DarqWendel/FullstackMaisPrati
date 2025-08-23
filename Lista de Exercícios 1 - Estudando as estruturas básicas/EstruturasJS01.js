// /* 1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
// utilizando uma estrutura de controle if. */
const prompt = require('prompt-sync')();

let verificador = Number(prompt('Bem-vindo ao Verificador de Números Pares e Ímpares! Digite o número: '));
if (verificador % 2 === 0) {
    console.log(`Número ${verificador} é par`);
} else {
    console.log(`Número: ${verificador} é ímpar`);
}

// /* 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
// adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
// controle if-else. */

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
 
  if(imc < 18.5) {
    console.log("Baixo Peso!");
  } else if(imc >= 18.5 && imc <= 24.9) {
    console.log("Peso Normal");
  } else if(imc >= 25 && imc <= 29.9) {
    console.log("Sobrepeso");
  } else {
    console.log("Obesidade");
  }

/*  6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
 formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
 Isósceles, escaleno ou eqüilátero. */

 let A = Number(prompt("Digite um valor: "));
 let B = Number(prompt("Digite um valor: "));
 let C = Number(prompt("Digite um valor: "));

 let verificadorDeTriangulo = (A < B + C && B < A + C && C < A + B)
 let ternario = verificadorDeTriangulo == true ? "Sim" : "Não";
 console.log(`É um Triângulo? ${ternario}`);
 if(!verificadorDeTriangulo) {

 } else {
    if(A == B && A == C) {
    console.log(`A = ${A}\nB = ${B}\nC = ${C}\nClassificação do Triângulo: Equilátero`);
} else if ((A == B && A != C) || (A == C && A != B) || (B == C && B != A)) {
    console.log(`A = ${A}\nB = ${B}\nC = ${C}\nClassificação do Triângulo: Isósceles`);
} else {
     console.log(`A = ${A}\nB = ${B}\nC = ${C}\nClassificação do Triângulo: Escaleno`);
}
 }
 
/* 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, eR$0,25se
 forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
 compradas, calcule e escreva o valor total da compra. */


console.log("Hello World"); // Aspas Duplas
console.log('Hello World'); // Aspas Simples
console.log(`Hello World`); // Crase = Template String
console.log(typeof("Hello World!")); // typeof = Visualizar o tipo da variável
console.log(typeof(1.5)); // typeof = Visualizar o tipo da variável

// 3 Formas para inicializar uma variável em Javascript
let name = 'Jaques'; 
console.log(name);

var anotherName = 'Hyago';
console.log(anotherName);

const City = "Alagoas";

// Undefined / Null
let test;
console.log(test);

let testNull = null;
console.log(testNull);

// Operações Matemáticas

let num1 = 2;
let num2 = 4;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 ** num2);
console.log(num1 % num2);

// Ordem Matemática
// ()
// **
// * /
// + - 

// Transformar String em Número
let num = typeof('10');
console.log(num);
console.log(typeof(parseInt(num) + 10));

// Contador

let counter = 1;
console.log(counter++); // Primeiro apresenta o counter depois incrementa
console.log(++counter); // Primeiro incrementa e depois apresenta o counter

console.log(--counter);  
console.log(counter--);
console.log(counter);

let step = 2;
counter += step;
counter += step;
counter += step;
console.log(counter);

// Valores Booleanos (True or False)

console.log(10 == 10);
console.log(10 > 10);
console.log(10 == '10');
console.log(10 === '10');
console.log(10 !== '10'); // Diferente restrito

// && e Or

console.log((10 < 5)) && ((10 > 2));
console.log((10 > 2) || (10 < 5));

// Estrutura de If/Else

const nota = 100;
if(nota < 60) {
    console.log('Reprovado');
} else if(nota > 90){
    console.log('Magistral');
} else {
    console.log('Aprovado');
    
}

const notaOperadorTernario = 50 < 60 ? console.log('Reprovado') : console.log('Aprovado'); // Estrutura de If/Else Condensada a uma linha

// Exercício 1: Verificar se um número é par ou ímpar

let numParOuImpar = 10;

if(numParOuImpar % 2 === 0) {
    console.log('Par');
} else {
    console.log('Impar');
    
}

// Exercício 2: Encontrar o maior entre três números

let n1 = 100;
let n2 = 11;
let n3 = 33;

if(n1 > n2 && n1 > n3) {
    console.log(`O maior número é ${n1}`);
} else if(n2 > n1 && n2 > n3) {
    console.log(`O maior número é ${n2}`);
} else {
    console.log(`O maior número é ${n3}`);
}

// Exercício 3: Faça uma calculadora simples utlizando entrada de usuário

let calc1 = parseFloat(prompt('Digite o Primeiro Número: '));
let operacao = prompt ('Digite a operação: (+, -, *, /');
let calc2 = parseFloat(prompt('Digite o Segundo Número: '));
let resultado;

if(operacao === '+') {
    resultado = calc1 + calc2;
} else if(operacao === '-') {
    resultado = calc1 - calc2;
} else if(operacao === '*'){
    resultado = cal1 * calc2;
} else if(operacao === '/') {
    resultado = calc1 / calc2
}else {
    console.log("Operação Inválida");
    
}
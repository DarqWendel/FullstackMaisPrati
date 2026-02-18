// Crie Um Array chamado "Números" contendo 10 valores numéricos à sua escolha.

let Numeros = [1,2,3,4,5,6,7,8,9,10];

// Use métodos de array para calcular:


// A Soma de todos os elementos

let soma = 0;

for(let i = 0; i < Numeros.length; i++) {
 soma += Numeros[i];
}

console.log(soma);


// A média dos elementos:

let media = soma / Numeros.length;
console.log(media);


// Gere um novo array chamado pares que contenha apenas os números pares:

let Pares = [];

for(let i = 0; i < Numeros.length; i++){
    if(Numeros[i] % 2 === 0) {
        Pares.push(Numeros[i])
    }
}

console.table(Pares);


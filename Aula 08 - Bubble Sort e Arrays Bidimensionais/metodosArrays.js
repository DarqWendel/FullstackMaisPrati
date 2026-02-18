// let Numeros = [1,2,3,4,5,6,7,8,9,10];
// let soma = Numeros.reduce((acumulador, valor) => acumulador + valor, 0);
// let media = soma / Numeros.length;
// let pares = Numeros.filter(i => i % 2 === 0 )
// console.log(soma);
// console.log(media);
// console.log(pares);

// Ordene o Array números em ordem crescente e decrescente usando o Bubble Sort


// Crescente
let ArrayDesordenado = [2,3,4,6,7,8,1,5,10,9];
let a = ArrayDesordenado.length

for(let i = 0; i < a; i++) {

    for(let j = 0; j < a - i; j++) {
        if(ArrayDesordenado[j] > ArrayDesordenado[j +1]) {
            let temp = ArrayDesordenado[j]
            ArrayDesordenado[j] = ArrayDesordenado[j + 1]
            ArrayDesordenado[j + 1] = temp
        }


    }

}

console.log(ArrayDesordenado);


// Decrescente
console.log(ArrayDesordenado.sort((a,b) => b - a));


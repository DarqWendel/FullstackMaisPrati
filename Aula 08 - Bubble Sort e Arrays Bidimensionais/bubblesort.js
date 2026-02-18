let numerosDesordenados = [2,5,8,10,4];
console.log(numerosDesordenados);

for(let i = 0; i < numerosDesordenados.length - 1; i++) {

    for(let j = 0; j < numerosDesordenados.length - 1; j++) {
        if(numerosDesordenados[j] > numerosDesordenados [j + 1]) {
            let temp = numerosDesordenados[j];
            numerosDesordenados[j] = numerosDesordenados[j +1];
            numerosDesordenados[j + 1] = temp;
        }
    }

}

console.log(numerosDesordenados);


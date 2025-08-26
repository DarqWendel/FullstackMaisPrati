let listaFrutas = Array();
let listaNomes = ['Giovanna', 'Augusto'];
listaFrutas[0] = 'Maça';
listaFrutas[1] = 'Morango';
listaFrutas['adocicadas'] = 'pera';
console.log(listaFrutas);

for(let i = 0; i < listaFrutas.length; i++) {
    console.log(listaFrutas[i]);
}

// Quatro Métodos Comuns
listaFrutas.push('melancia'); // adicionando no final do array
listaFrutas.unshift('Laranja'); // adicionar no começo do array
listaFrutas.pop(); // exclusão no final do array
listaFrutas.shift(); // exclusão no começo do array

console.table(listaFrutas);
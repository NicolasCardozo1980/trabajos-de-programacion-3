import * as readline from 'readline-sync';

let n: number = parseInt(readline.question("Ingresa el tamaño del arreglo: "));
let numeros: number[] = [];

for (let i = 0; i < n; i++) {
    let num: number = parseInt(readline.question(`Ingresa el número ${i + 1}: `));
    numeros.push(num);
}

console.log("Números en orden inverso: ");
for (let i = n - 1; i >= 0; i--) {
    console.log(numeros[i]);
}
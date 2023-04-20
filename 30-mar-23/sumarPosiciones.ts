import * as readline from 'readline-sync';

const n: number = 6;
let array1: number[] = [];
let array2: number[] = [];
let result: number[] = [];

console.log("Ingresa los números del primer arreglo:");
for (let i = 0; i < n; i++) {
    let num: number = parseInt(readline.question(`Ingresa el número ${i + 1}: `));
    array1.push(num);
}

console.log("Ingresa los números del segundo arreglo:");
for (let i = 0; i < n; i++) {
    let num: number = parseInt(readline.question(`Ingresa el número ${i + 1}: `));
    array2.push(num);
}

for (let i = 0; i < n; i++) {
    result.push(array1[i] + array2[i]);
}

console.log("Resultado de la suma de los dos arreglos:");
for (let i = 0; i < n; i++) {
    console.log(result[i]);
}
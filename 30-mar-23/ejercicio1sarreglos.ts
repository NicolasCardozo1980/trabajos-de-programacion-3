import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingresa los números separados por comas: ', (input) => {
    let numeros: number[] = input.split(',').map(Number);
    let positivos: number = 0;
    let negativos: number = 0;
    let ceros: number = 0;

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > 0) {
            positivos++;
        } else if (numeros[i] < 0) {
            negativos++;
        } else {
            ceros++;
        }
    }

    console.log(positivos + " positivos");
    console.log(negativos + " negativos");
    console.log(ceros + " ceros");

    rl.close();
});
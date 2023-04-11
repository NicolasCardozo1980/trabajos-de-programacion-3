"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
function esMultiplo(num1, num2) {
    return num1 % num2 === 0;
}
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.question('Ingrese el primer número: ', function (input1) {
    rl.question('Ingrese el segundo número: ', function (input2) {
        var num1 = parseInt(input1);
        var num2 = parseInt(input2);
        if (isNaN(num1) || isNaN(num2)) {
            console.log('Por favor, ingrese números válidos.');
            rl.close();
        }
        else {
            var resultado = esMultiplo(num1, num2);
            console.log(resultado);
            rl.close();
        }
    });
});

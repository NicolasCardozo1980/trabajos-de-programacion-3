"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
function esMultiplo(num, divisor) {
    return num % divisor === 0;
}
function cantidadDeDivisores(num) {
    var cantidad = 0;
    var divisores = [];
    for (var i = 1; i <= num; i++) {
        if (esMultiplo(num, i)) {
            cantidad++;
            divisores.push(i);
        }
    }
    console.log("El n\u00FAmero ".concat(num, " tiene ").concat(cantidad, " divisores:"));
    console.log(divisores);
}
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Ingresa un número: ', function (answer) {
    var num = parseInt(answer);
    if (isNaN(num)) {
        console.log('Debes ingresar un número válido.');
        rl.close();
        return;
    }
    cantidadDeDivisores(num);
    rl.close();
});

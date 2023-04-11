"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
function calcularPotencia(base, exponente) {
    if (exponente === 0) {
        return 1;
    }
    else {
        return base * calcularPotencia(base, exponente - 1);
    }
}
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Ingrese la base: ', function (base) {
    rl.question('Ingrese el exponente: ', function (exponente) {
        var baseNum = parseFloat(base);
        var exponenteNum = parseFloat(exponente);
        if (isNaN(baseNum) || isNaN(exponenteNum) || exponenteNum < 0) {
            console.log('Debe ingresar números válidos y un exponente mayor o igual a cero.');
        }
        else {
            var resultado = calcularPotencia(baseNum, exponenteNum);
            console.log("".concat(baseNum, " elevado a ").concat(exponenteNum, " es igual a ").concat(resultado));
        }
        rl.close();
    });
});

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function scalarProduct(a, b) {
    if (a.length !== b.length) {
        throw new Error('Los arreglos deben tener la misma longitud');
    }
    var result = 0;
    for (var i = 0; i < a.length; i++) {
        result += a[i] * b[i];
    }
    return result;
}
rl.question('Ingrese la longitud de los arreglos: ', function (n) {
    var length = parseInt(n, 10);
    var arr1 = [];
    var arr2 = [];
    console.log("Ingrese los ".concat(length, " n\u00FAmeros del primer arreglo:"));
    rl.on('line', function (line) {
        arr1.push(parseInt(line, 10));
        if (arr1.length === length) {
            console.log("Ingrese los ".concat(length, " n\u00FAmeros del segundo arreglo:"));
            rl.removeAllListeners('line');
            rl.on('line', function (line) {
                arr2.push(parseInt(line, 10));
                if (arr2.length === length) {
                    rl.close();
                    console.log("El producto escalar es ".concat(scalarProduct(arr1, arr2)));
                }
            });
        }
    });
});

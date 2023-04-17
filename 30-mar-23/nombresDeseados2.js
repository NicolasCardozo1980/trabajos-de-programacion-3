"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// Pedimos al usuario que nos indique la dimensión deseada para el arreglo
rl.question('Ingrese la dimensión del arreglo: ', function (dimension) {
    var nombres = [];
    // Creamos un arreglo de esa dimensión y lo llenamos con los nombres que el usuario indique
    for (var i = 0; i < Number(dimension); i++) {
        rl.question("Ingrese el nombre para la posici\u00F3n ".concat(i, ": "), function (nombre) {
            nombres.push(nombre);
            // Si se han ingresado todos los nombres, pedimos las posiciones deseadas
            if (nombres.length === Number(dimension)) {
                rl.question('Ingrese las posiciones deseadas (separadas por comas): ', function (posicionesString) {
                    var posiciones = posicionesString.split(',');
                    var personas = [];
                    // Creamos un arreglo con los nombres de las personas en esas posiciones
                    for (var _i = 0, posiciones_1 = posiciones; _i < posiciones_1.length; _i++) {
                        var posicion = posiciones_1[_i];
                        var nombre_1 = nombres[Number(posicion)];
                        personas.push(nombre_1);
                    }
                    // Mostramos el resultado
                    console.log('Arreglo de nombres:', nombres);
                    console.log("Nombres en posiciones [".concat(posiciones, "]:"), personas);
                    // Cerramos la interfaz de lectura
                    rl.close();
                });
            }
        });
    }
});

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
// Pide al usuario que ingrese un número para el cual se mostrará la tabla de multiplicación.
var numero = rls.questionInt("Ingrese un número para mostrar su tabla de multiplicación: ");
// Pide al usuario que ingrese el número máximo de la tabla de multiplicación.
var maximo = rls.questionInt("Ingrese el n\u00FAmero m\u00E1ximo de la tabla de multiplicaci\u00F3n para ".concat(numero, ": "));
// Usa un bucle for para iterar desde 1 hasta el número máximo ingresado.
for (var i = 1; i <= maximo; i++) {
    // Muestra la multiplicación de "numero" por el número actual del bucle for (i).
    console.log("".concat(numero, " x ").concat(i, " = ").concat(numero * i));
}

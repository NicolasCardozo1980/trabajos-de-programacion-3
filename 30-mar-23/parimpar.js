"use strict";
/* Realizar un algoritmo que dado un número entero ingresado por el usuario, imprima  en pantalla si el número es par o impar.
En el caso de ingresar un cero, se debe volver a pedir el número por teclado (hasta que se ingrese un número mayor que cero).
*/
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var inputNum = 0;
while (inputNum <= 0) {
    inputNum = rls.questionInt("ingrese un número mayor que cero: ");
}
if (inputNum % 2 === 0) {
    console.log("El número es par");
}
else {
    console.log("El número es impar");
}

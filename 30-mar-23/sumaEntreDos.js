"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
Escriba un programa que pida al usuario dos números enteros, y luego retorne la suma de todos los números que están entre ellos.
Por ejemplo, si los números son 2 y 7, debe entregar como resultado  2 + 3 + 4 + 5 + 6 + 7 = 27.
Si el primer número es mayor que el segundo, deben garantizar que el algoritmos funcione correctamente de todos modos.
*/
var rls = require("readline-sync");
var num1 = rls.questionInt("Ingrese el primer número : ");
var num2 = rls.questionInt("Ingrese un segundo número : ");
var result = 0;
//esto se conoce como reducer o función reductora, recibe n argumentos y devuelve el valor acumulado
for (var i = num1; i <= num2; i++) {
    result = result + i;
}
console.log(result);

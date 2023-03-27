import * as rls from "readline-sync";
let num1 = 0;
let num2 = 0;
num1 = rls.questionInt("Ingrese el primer numero entero: ");
num2 = rls.questionInt("Ingrese el segundo numero entero: ");
console.log("El resultado de la suma es:", num1 + num2);



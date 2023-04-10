/*
Escriba un programa que pida al usuario dos números enteros, y luego retorne la suma de todos los números que están entre ellos.
Por ejemplo, si los números son 2 y 7, debe entregar como resultado  2 + 3 + 4 + 5 + 6 + 7 = 27.
Si el primer número es mayor que el segundo, deben garantizar que el algoritmos funcione correctamente de todos modos.
*/
import * as rls from "readline-sync";
const num1: number = rls.questionInt("Ingrese el primer número : ");
const num2: number = rls.questionInt("Ingrese un segundo número : ");
let result: number = 0;


//esto se conoce como reducer o función reductora, recibe n argumentos y devuelve el valor acumulado

for (let i: number = num1; i <= num2; i++) {
  result = result + i;
}
console.log(result);


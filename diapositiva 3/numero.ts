// Pedimos al usuario que ingrese un número y lo almacenamos en la variable 'numero'
import * as rls from "readline-sync"
const numero: string | null = prompt("Ingrese un número para mostrar su tabla de multiplicación:");

// Pedimos al usuario que ingrese el número hasta el cual desea mostrar la tabla de multiplicación
const hasta: string | null = prompt("Ingrese el número hasta el que desea mostrar la tabla de multiplicación:");

// Verificamos que ambos valores ingresados sean válidos y numéricos
if (isNaN(Number(numero)) || isNaN(Number(hasta))) {
  console.log("Debe ingresar valores numéricos válidos.");
} else {
  // Convertimos los valores ingresados a números
  const numeroParseado: number = parseInt(numero as string);
  const hastaParseado: number = parseInt(hasta as string);
  
  // Iteramos desde 1 hasta el número ingresado por el usuario
  for (let i = 1; i <= hastaParseado; i++) {
    // Calculamos el resultado de la multiplicación y lo mostramos en la consola
    const resultado: number = numeroParseado * i;
    console.log(numeroParseado + " x " + i + " = " + resultado);
  }
}


import * as rls from "readline-sync";

// Pide al usuario que ingrese un número para el cual se mostrará la tabla de multiplicación.
const numero: number = rls.questionInt("Ingrese un número para mostrar su tabla de multiplicación: ");

// Pide al usuario que ingrese el número máximo de la tabla de multiplicación.
const maximo: number = rls.questionInt(`Ingrese el número máximo de la tabla de multiplicación para ${numero}: `);

// Usa un bucle for para iterar desde 1 hasta el número máximo ingresado.
for (let i = 1; i <= maximo; i++) {
  // Muestra la multiplicación de "numero" por el número actual del bucle for (i).
  console.log(`${numero} x ${i} = ${numero * i}`);
}

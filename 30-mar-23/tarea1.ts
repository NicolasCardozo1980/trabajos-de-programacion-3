import * as rls from "readline-sync";

// Pide al usuario que ingrese un número y lo asigna a la variable "Nro".
let Nro: number = rls.questionInt("Ingrese un número: ");

// Inicializa la variable "I" a cero para encontrar el número máximo.
let I: number = 0;

// Mientras el número ingresado por el usuario no sea cero, seguirá solicitando números.
while (Nro !== 0) {
  // Si el número ingresado por el usuario es mayor que el número máximo actual (I), actualiza I.
  if (I <= Nro) {
    I = Nro;
  }

  // Pide al usuario que ingrese otro número y lo asigna a la variable "Nro".
  Nro = rls.questionInt("Ingrese otro número: ");
}

// Muestra el número máximo encontrado al usuario.
console.log("El número máximo es: " + I);

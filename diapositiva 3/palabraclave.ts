import * as rls from "readline-sync";
import { Process } from "node";

const clave = "eureka";
const MAX_INTENTOS = 3;

let intentos = 0;

while (intentos < MAX_INTENTOS) {
  const entrada = rls.question("Introduce la clave: ");

  if (entrada === clave) {
    console.log("¡Clave correcta!");
    process.exit(0); // Salimos del programa con código de éxito
  } else {
    console.log("Clave incorrecta. Intenta de nuevo.");
    intentos++;
  }
}

console.log("Has agotado todos los intentos. Adiós.");




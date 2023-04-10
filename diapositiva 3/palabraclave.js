"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var clave = "eureka";
var MAX_INTENTOS = 3;
var intentos = 0;
while (intentos < MAX_INTENTOS) {
    var entrada = rls.question("Introduce la clave: ");
    if (entrada === clave) {
        console.log("¡Clave correcta!");
        process.exit(0); // Salimos del programa con código de éxito
    }
    else {
        console.log("Clave incorrecta. Intenta de nuevo.");
        intentos++;
    }
}
console.log("Has agotado todos los intentos. Adiós.");

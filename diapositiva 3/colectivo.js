"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var llegoElColectivo = rls.question("¿esta viniendo el colectivo?");
//Asumamos que el usuario solo puede ingresar "S" para si o "N" para no.
while (llegoElColectivo == "N") {
    console.log("sigo esperando el colectivo");
    llegoElColectivo = rls.question("¿ya vino el colectivo");
    if (llegoElColectivo == "S") {
        console.log("llego el colectivo");
    }
    else {
        console.log("ingrese una respuesta valida");
        llegoElColectivo = rls.question("¿cual es tu nueva respuesta?");
    }
}
;

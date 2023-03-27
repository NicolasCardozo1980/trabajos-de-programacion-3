// uso de condiciones multiples
import * as readlineSync from "readline-sync";
let tengoMuchaPlata: boolean = false;
let esFinDeSemana: boolean = true;
let meSobranUnosPesos: boolean = true;
let estaLloviendo: boolean = false;

//  condiciones para salir de joda :
// 1 - tiene que ser fin de semana Y me tienen que sobrar unos pesos Y no tiene que estar lloviendo.
// 2 - Salvo que me sobre mucha plata y no este lloviendo

if ((esFinDeSemana && meSobranUnosPesos && !estaLloviendo) || (tengoMuchaPlata && !estaLloviendo)) {
    console.log("hoy salgo de joda")
} else {
    console.log("lamentablemente hoy no salgo")
}
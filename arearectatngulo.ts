import * as rls from "readline-sync";
const base:number = rls.questionInt("ingrese la base: ");
const altura:number = rls.questionInt("ingrese la altura: ");
const area: number = base * altura;
console.log("EL AREA ES: " + area);


import * as rls from "readline-sync";

let base: number = rls.questionInt("Ingrese base:");
let altura: number = rls.questionInt("Ingrese altura:");
let area: number;
 
function calcularAreaTriangulo(base:number, altura:number){
    area = (base * altura) / 2;
    console.log("el area del triangulo es",area);
}
calcularAreaTriangulo(base, altura);
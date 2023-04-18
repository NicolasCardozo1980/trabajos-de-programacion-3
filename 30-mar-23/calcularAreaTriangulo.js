"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var base = rls.questionInt("Ingrese base:");
var altura = rls.questionInt("Ingrese altura:");
var area;
function calcularAreaTriangulo(base, altura) {
    area = (base * altura) / 2;
    console.log("el area del triangulo es", area);
}
calcularAreaTriangulo(base, altura);

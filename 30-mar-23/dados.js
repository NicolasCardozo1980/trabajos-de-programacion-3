"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var dados = rls.questionInt("ingrese cantidad de dados: ");
var result = 0;
var casosposibles = Math.pow(6, dados);
var casosfavorables = 1;
result = casosfavorables / casosposibles;
console.log(result);

"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
Escriba un programa que pida al usuario dos números enteros, y luego retorne la suma de todos los números que están entre ellos.
Por ejemplo, si los números son 2 y 7, debe entregar como resultado  2 + 3 + 4 + 5 + 6 + 7 = 27.
Si el primer número es mayor que el segundo, deben garantizar que el algoritmos funcione correctamente de todos modos.
*/
const rls = __importStar(require("readline-sync"));
const num1 = rls.questionInt("Ingrese el primer número : ");
const num2 = rls.questionInt("Ingrese un segundo número : ");
let result = 0;
//esto se conoce como reducer o función reductora, recibe n argumentos y devuelve el valor acumulado
for (let i = num1; i <= num2; i++) {
    result = result + i;
}
console.log(result);
//# sourceMappingURL=sumaEntreDos.js.map
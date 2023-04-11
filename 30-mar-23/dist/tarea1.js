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
const rls = __importStar(require("readline-sync"));
// Pide al usuario que ingrese un número y lo asigna a la variable "Nro".
let Nro = rls.questionInt("Ingrese un número: ");
// Inicializa la variable "I" a cero para encontrar el número máximo.
let I = 0;
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
//# sourceMappingURL=tarea1.js.map
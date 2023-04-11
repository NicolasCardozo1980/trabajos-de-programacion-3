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
// Pide al usuario que ingrese un número para el cual se mostrará la tabla de multiplicación.
const numero = rls.questionInt("Ingrese un número para mostrar su tabla de multiplicación: ");
// Pide al usuario que ingrese el número máximo de la tabla de multiplicación.
const maximo = rls.questionInt(`Ingrese el número máximo de la tabla de multiplicación para ${numero}: `);
// Usa un bucle for para iterar desde 1 hasta el número máximo ingresado.
for (let i = 1; i <= maximo; i++) {
    // Muestra la multiplicación de "numero" por el número actual del bucle for (i).
    console.log(`${numero} x ${i} = ${numero * i}`);
}
//# sourceMappingURL=multiplica.js.map
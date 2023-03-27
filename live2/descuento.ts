import * as rls from "readline-sync";
const precio: number = rls.questionFloat("ingrese precio del producto: ");
const porcentajedescuento: number = 0.1;
const descuento: number = precio * porcentajedescuento;
const preciocondescuento: number = precio - descuento;
console.log("el precio con descuento es: " + preciocondescuento);

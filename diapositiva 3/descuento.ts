// Ejercicio aplicar descuento
import * as readlineSync from "readline-sync";
let precioFinal: number;
let precioProductoUno: number = 200;
let precioProductoDos: number = 350;
let subtotal: number = 0;
let valorDescuento: number = 0;
let cantidadProductoUno: number = readlineSync.questionInt("cantidad de producto 1 que compró el usuario: ");
let cantidadProductoDos: number = readlineSync.questionInt("cantidad de producto 2 que compró el usuario: ");
subtotal = (cantidadProductoUno * precioProductoUno) + (cantidadProductoDos * precioProductoDos);

console.log("cantidad producto 1: ", cantidadProductoUno, "\ncantidad de producto 2: ", cantidadProductoDos, "\nsubtotal: ", subtotal);

if (subtotal > 1000) {
    valorDescuento = subtotal * 0.1;
    precioFinal = (subtotal - valorDescuento);
    console.log("uds ahorra: $", valorDescuento, "por haber comprado mas de $1000 \nel precio final es de: ", precioFinal)
} else {
    precioFinal = subtotal;
    console.log("gracias por confiar en nosotros.\nel precio final es de: $", precioFinal)
}


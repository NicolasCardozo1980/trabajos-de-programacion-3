// Pedimos al usuario que ingrese un número y lo almacenamos en la variable 'numero'
var numero = prompt("Ingrese un número para mostrar su tabla de multiplicación:");
// Pedimos al usuario que ingrese el número hasta el cual desea mostrar la tabla de multiplicación
var hasta = prompt("Ingrese el número hasta el que desea mostrar la tabla de multiplicación:");
// Verificamos que ambos valores ingresados sean válidos y numéricos
if (isNaN(Number(numero)) || isNaN(Number(hasta))) {
    console.log("Debe ingresar valores numéricos válidos.");
}
else {
    // Convertimos los valores ingresados a números
    var numeroParseado = parseInt(numero);
    var hastaParseado = parseInt(hasta);
    // Iteramos desde 1 hasta el número ingresado por el usuario
    for (var i = 1; i <= hastaParseado; i++) {
        // Calculamos el resultado de la multiplicación y lo mostramos en la consola
        var resultado = numeroParseado * i;
        console.log(numeroParseado + " x " + i + " = " + resultado);
    }
}

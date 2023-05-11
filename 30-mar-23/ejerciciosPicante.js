"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var alumnos = [];
function cargarAlumno(nombre, notas) {
    var alumno = { nombre: nombre, notas: notas };
    alumnos.push(alumno);
    var promedio = obtenerPromedioAnual(nombre);
    console.log("El promedio anual de ".concat(nombre, " es ").concat(promedio));
}
function obtenerPromedioAnual(nombre) {
    var alumno = alumnos.find(function (alumno) { return alumno.nombre === nombre; });
    if (alumno) {
        var sumaNotas = alumno.notas.reduce(function (a, b) { return a + b; });
        return sumaNotas / alumno.notas.length;
    }
}
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Ingrese el nombre del alumno: ', function (nombre) {
    rl.question('Ingrese las notas del alumno separadas por comas: ', function (notasString) {
        var notas = notasString.split(',').map(function (nota) { return parseInt(nota); });
        cargarAlumno(nombre, notas);
        rl.close();
    });
});

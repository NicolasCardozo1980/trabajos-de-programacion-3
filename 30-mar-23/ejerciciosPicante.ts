import * as readline from 'readline';

interface Alumno {
    nombre: string;
    notas: number[];
}

let alumnos: Alumno[] = [];

function cargarAlumno(nombre: string, notas: number[]) {
    let alumno: Alumno = {nombre, notas};
    alumnos.push(alumno);
    let promedio = obtenerPromedioAnual(nombre);
    console.log(`El promedio anual de ${nombre} es ${promedio}`);
}

function obtenerPromedioAnual(nombre: string): number | undefined {
    let alumno = alumnos.find(alumno => alumno.nombre === nombre);
    if (alumno) {
        let sumaNotas = alumno.notas.reduce((a, b) => a + b);
        return sumaNotas / alumno.notas.length;
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese el nombre del alumno: ', (nombre) => {
    rl.question('Ingrese las notas del alumno separadas por comas: ', (notasString) => {
        let notas = notasString.split(',').map(nota => parseInt(nota));
        cargarAlumno(nombre, notas);
        rl.close();
    });
});
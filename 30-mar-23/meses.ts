import * as rls from 'readline-sync';

let nroMes: number = rls.questionInt("Indique el número de mes que le interesa: ");

switch (nroMes) {
    case 1:
        console.log("El mes es Enero");
        break;
    case 2:
        console.log("El mes es Febrero");
        break;
    case 3:
        console.log("El mes es Marzo");
        break;
    case 4:
        console.log("El mes es Abril");
        break;
    case 5:
        console.log("El mes es Mayo");
        break;
    case 6:
        console.log("El mes es Junio");
        break;
    case 7:
        console.log("El mes es Julio");
        break;
    case 8:
        console.log("El mes es Agosto");
        break;
    case 9:
        console.log("El mes es Septiembre");
        break;
    case 10:
        console.log("El mes es Octubre");
        break;
    case 11:
        console.log("El mes es Noviembre");
        break;
    case 12:
        console.log("El mes es Diciembre");
        break;
    default:
        console.log("Ud no ha escrito un número de mes válido");
}

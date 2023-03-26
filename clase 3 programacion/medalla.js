function determinarMedalla(posicion) {
    if (posicion === 1) {
        return "Medalla de Oro";
    }
    else if (posicion === 2) {
        return "Medalla de Plata";
    }
    else if (posicion === 3) {
        return "Medalla de Bronce";
    }
    else {
        return "Certificado de Participación";
    }
}
// Ejemplo de uso
var medalla = determinarMedalla(2); // Medalla de Plata
console.log(medalla);

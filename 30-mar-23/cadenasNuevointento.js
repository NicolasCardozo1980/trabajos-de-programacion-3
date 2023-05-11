var cadenaDeTexto = "El éxito es aprender a ir de fracaso en fracaso sin desesperarse. La vida es un 10% lo que nos pasa y un 90% cómo reaccionamos ante ello. La creatividad es la inteligencia divirtiéndose. En la vida no se trata de esperar a que pase la tormenta, se trata de aprender a bailar bajo la lluvia. Si lo puedes soñar, lo puedes hacer. La felicidad no es la ausencia de problemas, es la habilidad de lidiar con ellos. La educación es el arma más poderosa que puedes usar para cambiar el mundo. Todo lo que puedas imaginar es real. La verdad nunca daña una causa que es justa. El fracaso es una gran oportunidad para empezar otra vez con más inteligencia. El secreto de la creatividad es saber cómo esconder tus fuentes. No tengas miedo de renunciar a lo bueno para perseguir lo grandioso. La paciencia es amarga, pero su fruto es dulce. La única forma de hacer un gran trabajo es amar lo que haces. Lo que no te mata, te hace más fuerte. El éxito no es la clave de la felicidad, la felicidad es la clave del éxito. Si buscas resultados distintos, no hagas siempre lo mismo. Siempre parece imposible hasta que se hace. La simplicidad es la máxima sofisticación.";
var contarVocales = function (cadena) {
    var vocales = ["a", "e", "i", "o", "u"];
    var acentos = ["á", "é", "í", "ó", "ú"];
    var apostrofes = ["'", "’"];
    var resultado = new Map();
    // Inicializar las vocales en el mapa con valor cero
    vocales.forEach(function (vocal) { return resultado.set(vocal, 0); });
    // Recorrer cada caracter de la cadena
    for (var i = 0; i < cadena.length; i++) {
        var caracter = cadena[i].toLowerCase();
        // Sumar 1 a la vocal correspondiente en el mapa
        if (vocales.includes(caracter)) {
            resultado.set(caracter, resultado.get(caracter) + 1);
        }
        else if (acentos.includes(caracter)) {
            // Sumar 1 a la vocal correspondiente con acento en el mapa
            var indiceAcento = acentos.indexOf(caracter);
            resultado.set(vocales[indiceAcento], resultado.get(vocales[indiceAcento]) + 1);
        }
        else if (apostrofes.includes(caracter)) {
            // Ignorar los apostrofes
            continue;
        }
    }
    return resultado;
};
// Llamar a la función contarVocales y mostrar el resultado
var resultado = contarVocales(cadenaDeTexto);
resultado.forEach(function (cantidad, vocal) { return console.log("".concat(vocal, ": ").concat(cantidad)); });

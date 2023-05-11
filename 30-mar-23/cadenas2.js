var cadenaDeTexto = "El éxito es aprender a ir de fracaso en fracaso sin desesperarse. La vida es un 10% lo que nos pasa y un 90% cómo reaccionamos ante ello. La creatividad es la inteligencia divirtiéndose. En la vida no se trata de esperar a que pase la tormenta, se trata de aprender a bailar bajo la lluvia. Si lo puedes soñar, lo puedes hacer. La felicidad no es la ausencia de problemas, es la habilidad de lidiar con ellos. La educación es el arma más poderosa que puedes usar para cambiar el mundo. Todo lo que puedas imaginar es real. La verdad nunca daña una causa que es justa. El fracaso es una gran oportunidad para empezar otra vez con más inteligencia. El secreto de la creatividad es saber cómo esconder tus fuentes. No tengas miedo de renunciar a lo bueno para perseguir lo grandioso. La paciencia es amarga, pero su fruto es dulce. La única forma de hacer un gran trabajo es amar lo que haces. Lo que no te mata, te hace más fuerte. El éxito no es la clave de la felicidad, la felicidad es la clave del éxito. Si buscas resultados distintos, no hagas siempre lo mismo. Siempre parece imposible hasta que se hace. La simplicidad es la máxima sofisticación.";
var contadorVocalesTotales = 0;
var contadorVocalesSinAcento = 0;
var contadorVocalesConAcento = 0;
var contadorVocalesConDiaeresis = 0;
for (var i = 0; i < cadenaDeTexto.length; i++) {
    var caracterActual = cadenaDeTexto[i].toLowerCase();
    if (caracterActual === 'a' || caracterActual === 'e' || caracterActual === 'i' || caracterActual === 'o' || caracterActual === 'u') {
        contadorVocalesTotales++;
        contadorVocalesSinAcento++;
    }
    else if (caracterActual === 'á' || caracterActual === 'é' || caracterActual === 'í' || caracterActual === 'ó' || caracterActual === 'ú') {
        contadorVocalesTotales++;
        contadorVocalesConAcento++;
    }
    else if (caracterActual === 'ü') {
        contadorVocalesTotales++;
        contadorVocalesConDiaeresis++;
    }
}
console.log("La cadena de texto tiene un total de ".concat(contadorVocalesTotales, " vocales, de las cuales ").concat(contadorVocalesSinAcento, " son sin acento, ").concat(contadorVocalesConAcento, " tienen acento y ").concat(contadorVocalesConDiaeresis, " tienen di\u00E9resis."));

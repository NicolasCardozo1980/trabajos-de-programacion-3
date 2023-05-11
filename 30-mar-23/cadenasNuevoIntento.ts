const cadenaDeTexto = `El éxito es aprender a ir de fracaso en fracaso sin desesperarse. La vida es un 10% lo que nos pasa y un 90% cómo reaccionamos ante ello. La creatividad es la inteligencia divirtiéndose. En la vida no se trata de esperar a que pase la tormenta, se trata de aprender a bailar bajo la lluvia. Si lo puedes soñar, lo puedes hacer. La felicidad no es la ausencia de problemas, es la habilidad de lidiar con ellos. La educación es el arma más poderosa que puedes usar para cambiar el mundo. Todo lo que puedas imaginar es real. La verdad nunca daña una causa que es justa. El fracaso es una gran oportunidad para empezar otra vez con más inteligencia. El secreto de la creatividad es saber cómo esconder tus fuentes. No tengas miedo de renunciar a lo bueno para perseguir lo grandioso. La paciencia es amarga, pero su fruto es dulce. La única forma de hacer un gran trabajo es amar lo que haces. Lo que no te mata, te hace más fuerte. El éxito no es la clave de la felicidad, la felicidad es la clave del éxito. Si buscas resultados distintos, no hagas siempre lo mismo. Siempre parece imposible hasta que se hace. La simplicidad es la máxima sofisticación.`;

const contarVocales = (cadena: string): { [key: string]: number } => {
  const vocales = { a: 0, e: 0, i: 0, o: 0, u: 0 };
  for (let i = 0; i < cadena.length; i++) {
    const letra = cadena[i].toLowerCase();
    if (letra === "a" || letra === "á") vocales.a++;
    else if (letra === "e" || letra === "é") vocales.e++;
    else if (letra === "i" || letra === "í") vocales.i++;
    else if (letra === "o" || letra === "ó") vocales.o++;
    else if (letra === "u" || letra === "ú") vocales.u++;
  }
  return vocales;
};

console.log(contarVocales(cadenaDeTexto));

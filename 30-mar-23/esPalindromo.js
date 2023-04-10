function esPalindromo(texto) {
    var textoReverso = '';
    for (var i = texto.length - 1; i >= 0; i--) {
        textoReverso += texto[i];
    }
    return texto.toLowerCase() === textoReverso.toLowerCase();
}

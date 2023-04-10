function esPalindromo(texto) {
    var textoReverso = texto.split('').reverse().join('').toLowerCase();
    return texto.toLowerCase() === textoReverso;
}

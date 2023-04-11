"use strict";
function esPalindromo(texto) {
    let textoReverso = '';
    for (let i = texto.length - 1; i >= 0; i--) {
        textoReverso += texto[i];
    }
    return texto.toLowerCase() === textoReverso.toLowerCase();
}
//# sourceMappingURL=esPalindromo.js.map
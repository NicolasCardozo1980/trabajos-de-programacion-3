function esPalindromo(texto: string): boolean {
    const textoReverso = texto.split('').reverse().join('').toLowerCase();
    return texto.toLowerCase() === textoReverso;
  }
  
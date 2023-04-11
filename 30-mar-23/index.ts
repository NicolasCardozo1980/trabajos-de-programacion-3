function esPalindromo(texto: string): boolean {
    const textoReverso = texto.split('').reverse().join('').toLowerCase();
    return texto.toLowerCase() === textoReverso;
  }
  
  const texto1 = 'anita lava la tina';
  const texto2 = 'oso';
  const texto3 = 'hola mundo';
  
  console.log(esPalindromo(texto1)); // true
  console.log(esPalindromo(texto2)); // true
  console.log(esPalindromo(texto3)); // false
  
import * as readline from 'readline';

function calcularPotencia(base: number, exponente: number): number {
  if (exponente === 0) {
    return 1;
  } else {
    return base * calcularPotencia(base, exponente - 1);
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingrese la base: ', (base: string) => {
  rl.question('Ingrese el exponente: ', (exponente: string) => {
    const baseNum = parseFloat(base);
    const exponenteNum = parseFloat(exponente);

    if (isNaN(baseNum) || isNaN(exponenteNum) || exponenteNum < 0) {
      console.log('Debe ingresar números válidos y un exponente mayor o igual a cero.');
    } else {
      const resultado = calcularPotencia(baseNum, exponenteNum);
      console.log(`${baseNum} elevado a ${exponenteNum} es igual a ${resultado}`);
    }

    rl.close();
  });
});

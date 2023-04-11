import * as readline from 'readline';
function esMultiplo(num: number, divisor: number): boolean {
  return num % divisor === 0;
}

function cantidadDeDivisores(num: number): void {
  let cantidad = 0;
  let divisores = [];

  for (let i = 1; i <= num; i++) {
    if (esMultiplo(num, i)) {
      cantidad++;
      divisores.push(i);
    }
  }

  console.log(`El número ${num} tiene ${cantidad} divisores:`);
  console.log(divisores);
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingresa un número: ', (answer) => {
  const num = parseInt(answer);

  if (isNaN(num)) {
    console.log('Debes ingresar un número válido.');
    rl.close();
    return;
  }

  cantidadDeDivisores(num);
  rl.close();
});

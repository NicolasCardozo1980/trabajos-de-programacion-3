import * as readline from 'readline';

function esMultiplo(num1: number, num2: number): boolean {
  return num1 % num2 === 0;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Ingrese el primer número: ', (input1: string) => {
  rl.question('Ingrese el segundo número: ', (input2: string) => {
    const num1 = parseInt(input1);
    const num2 = parseInt(input2);
    if (isNaN(num1) || isNaN(num2)) {
      console.log('Por favor, ingrese números válidos.');
      rl.close();
    } else {
      const resultado = esMultiplo(num1, num2);
      console.log(resultado);
      rl.close();
    }
  });
});

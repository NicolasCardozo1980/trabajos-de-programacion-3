import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Pedimos al usuario que nos indique la dimensión deseada para el arreglo
rl.question('Ingrese la dimensión del arreglo: ', (dimension) => {
  const nombres: string[] = [];

  // Creamos un arreglo de esa dimensión y lo llenamos con los nombres que el usuario indique
  for (let i = 0; i < Number(dimension); i++) {
    rl.question(`Ingrese el nombre para la posición ${i}: `, (nombre) => {
      nombres.push(nombre);

      // Si se han ingresado todos los nombres, pedimos las posiciones deseadas
      if (nombres.length === Number(dimension)) {
        rl.question('Ingrese las posiciones deseadas (separadas por comas): ', (posicionesString) => {
          const posiciones = posicionesString.split(',');

          const personas: string[] = [];

          // Creamos un arreglo con los nombres de las personas en esas posiciones
          for (const posicion of posiciones) {
            const nombre = nombres[Number(posicion)];
            personas.push(nombre);
          }

          // Mostramos el resultado
          console.log('Arreglo de nombres:', nombres);
          console.log(`Nombres en posiciones [${posiciones}]:`, personas);

          // Cerramos la interfaz de lectura
          rl.close();
        });
      }
    });
  }
});

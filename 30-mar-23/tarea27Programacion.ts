import readlineSync from 'readline-sync';

function calcularProductoEscalar(v1: number[], v2: number[]): number {
  let productoEscalar = 0;
  for (let i = 0; i < v1.length; i++) {
    productoEscalar += v1[i] * v2[i];
  }
  return productoEscalar;
}

function cargarArreglo(n: number): number[] {
  const arreglo: number[] = [];
  for (let i = 0; i < n; i++) {
    const numero = readlineSync.questionInt(`Ingrese el número ${i + 1}: `);
    arreglo.push(numero);
  }
  return arreglo;
}

function main() {
  const n = readlineSync.questionInt("Ingrese la dimensión de los arreglos: ");
  const v1 = cargarArreglo(n);
  const v2 = cargarArreglo(n);
  const productoEscalar = calcularProductoEscalar(v1, v2);
  console.log(`El producto escalar de los arreglos es: ${productoEscalar}`);
}

main();

let contadorA: number = 0, contadorE: number = 0, contadorI: number = 0, contadorO: number = 0, contadorU: number = 0, textoNormalizado: string = "";

for (let i = 0; i < cadenaDeTexto.length; i++) {
  textoNormalizado = normalizarCadena(cadenaDeTexto[i]);
  switch (textoNormalizado) {
    case "a":
      contadorA++;
      break;
    case "e":
      contadorE++;
      break;
    case "i":
      contadorI++;
      break;
    case "o":
      contadorO++;
      break;
    case "u":
      contadorU++;
      break;
    default:
      break;
  }
}

console.log(`La cantidad de a son:  ${contadorA}, la cantidad de e son:  ${contadorE}, la cantidad de i son:  ${contadorI}, la cantidad de o son: ${contadorO}, la cantidad de u son: ${contadorU}`);
function normalizarCadena(arg0: string): string {
    throw new Error("Function not implemented.");
}


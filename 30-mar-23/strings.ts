const name1: string = "Marcelo";
const name2: string = "Sergio";
const name3: string = "Javier";
const role: string = "profesores";
const institute: string = "EMIT San Cayetano";

console.log("Ellos son: " + name1 + ", " + name2 + " y " + name3 + ". " + "Son " + role + " de " + institute + ".");
// string interpolation permite mezclar texto y variables de un modo más eficiente. Utiliza backticks o comillas invertidas. Indicaremos código (variables, operaciones, etc) con ${}
console.log(`Ellos son: ${name1}, ${name2} y ${name3}. Son ${role} de ${institute}.`);

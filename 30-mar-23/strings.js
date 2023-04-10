var name1 = "Marcelo";
var name2 = "Sergio";
var name3 = "Javier";
var role = "profesores";
var institute = "EMIT San Cayetano";
console.log("Ellos son: " + name1 + ", " + name2 + " y " + name3 + ". " + "Son " + role + " de " + institute + ".");
// string interpolation permite mezclar texto y variables de un modo más eficiente. Utiliza backticks o comillas invertidas. Indicaremos código (variables, operaciones, etc) con ${}
console.log("Ellos son: ".concat(name1, ", ").concat(name2, " y ").concat(name3, ". Son ").concat(role, " de ").concat(institute, "."));

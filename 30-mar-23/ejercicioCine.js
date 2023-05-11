var butacas = [true, false, true, false, false];
function contarButacasDesocupadas(butacas) {
    var butacasDesocupadas = 0;
    for (var _i = 0, butacas_1 = butacas; _i < butacas_1.length; _i++) {
        var butaca = butacas_1[_i];
        if (!butaca) {
            butacasDesocupadas++;
        }
    }
    return butacasDesocupadas;
}
var butacasDesocupadas = contarButacasDesocupadas(butacas);
console.log("Hay ".concat(butacasDesocupadas, " butacas desocupadas en la sala de cine"));

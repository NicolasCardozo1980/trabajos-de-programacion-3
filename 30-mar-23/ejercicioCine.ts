let butacas: boolean[] = [true, false, true, false, false];

function contarButacasDesocupadas(butacas: boolean[]): number {
    let butacasDesocupadas = 0;
    for (let butaca of butacas) {
        if (!butaca) {
            butacasDesocupadas++;
        }
    }
    return butacasDesocupadas;
}

let butacasDesocupadas = contarButacasDesocupadas(butacas);
console.log(`Hay ${butacasDesocupadas} butacas desocupadas en la sala de cine`);
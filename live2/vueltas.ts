import * as rls from "readline-sync";
const lap1: number = rls.questionFloat("ingrese tiempo de la 1ra vuelta");
const lap2: number =rls.questionFloat("ingrese tiempo 2sa vuelta");
const lap3: number =rls.questionFloat("ingrese timepo de la 3ra vuelta");
const lap4: number =rls.questionFloat("ingrese tiempo de la 4ta vuelta");

const totaltime: number = lap1+lap2+lap3+lap4;
const media: number = totaltime /4;

console.log("el tiempo total es de ",totaltime);
console.log("el promedio de vuelta es",media);
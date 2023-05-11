function normalizarCadena(caracter : string):string 
{
    let resul :string = "";
    if(caracter != "")
    {
        resul  = caracter.toLowerCase();
        resul = resul.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    }
    return resul;
}
​
​
const cadenaDeTexto: string = "El éxito es aprender a ir de fracaso en fracaso sin desesperarse. La vida es un 10% lo que nos pasa y un 90% cómo reaccionamos ante ello. La creatividad es la inteligencia divirtiéndose. En la vida no se trata de esperar a que pase la tormenta, se trata de aprender a bailar bajo la lluvia. Si lo puedes soñar, lo puedes hacer. La felicidad no es la ausencia de problemas, es la habilidad de lidiar con ellos. La educación es el arma más poderosa que puedes usar para cambiar el mundo. Todo lo que puedas imaginar es real. La verdad nunca daña una causa que es justa. El fracaso es una gran oportunidad para empezar otra vez con más inteligencia. El secreto de la creatividad es saber cómo esconder tus fuentes. No tengas miedo de renunciar a lo bueno para perseguir lo grandioso. La paciencia es amarga, pero su fruto es dulce. La única forma de hacer un gran trabajo es amar lo que haces. Lo que no te mata, te hace más fuerte. El éxito no es la clave de la felicidad, la felicidad es la clave del éxito. Si buscas resultados distintos, no hagas siempre lo mismo. Siempre parece imposible hasta que se hace. La simplicidad es la máxima sofisticación.";
let contadorA:number=0 , contadorE:number=0 , contadorI:number=0 , contadorO:number=0 , contadorU:number=0 , textoNormalizado:string="";
let cadenanormalizada: string = normalizarCadena(cadenaDeTexto);​
let arregloA:number[] = [];
let arregloE:number[] = [];
let arregloI:number[] = [];
let arregloO:number[] = [];
let arregloU:number[] = [];
​
for(let i=0 ; i<=cadenaDeTexto.length ; i++){
    if(i != cadenaDeTexto.length)
    {
        textoNormalizado = normalizarCadena(cadenaDeTexto[i]);
    }
  
    switch((textoNormalizado)) {
        case "a":
            contadorA++;
            ;
            arregloA.push(i);
        break;
        case "e":
            contadorE++;
            
            arregloE.push(i);
        break;
        case "i":
            contadorI++;
            
            arregloI.push(i);
        break;
        case "o":
            contadorO++;
            
            arregloO.push(i);
        break;
        case "u":
            contadorU++;
           
            arregloU.push(i);
​
        break;
        default:
            break;
    }
}
console.log(`La cantidad de a son:  ${contadorA},la cantidad de e son:  ${contadorE},la cantidad de i son:  ${contadorI},la cantidad de o son: ${contadorO},la cantidad de u son: ${contadorU}`); 
//​console.log(cadenanormalizada);
console.log("Las posiciones de las letras A son: "+arregloA);
console.log("Las posiciones de las letras E son: "+arregloE);
console.log("Las posiciones de las letras I son: "+arregloI);
console.log("Las posiciones de las letras O son: "+arregloO);
console.log("Las posiciones de las letras U son: "+arregloU);
​
​
​
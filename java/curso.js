
/**let nombre = prompt("nombre");
let edad = prompt("edad");
let sexo = prompt("indica tu sexo");
let estadoCivil = prompt("Indique su estado civil");

function saludar(){

    if (edad >= 54) {
        console.log(`Hola ${nombre}`);
        let ciudad = prompt("Indicar la ciudad donde desea viajar")
    } else if (edad < 54) {
        alert("usted no cumple la edad requerida para los viajes de personas mayores ")
        
    }

}
*/

let edad = parseInt( prompt("Ingresar Edad"))
let valor = false

while (valor === false){
    if( edad >65){
        valor = true
    } else {
        edad = parseInt( prompt("Ingresar Edad"))
    }
}

let nombre = prompt("ingrese su nombre")
    
function ingreso(nombre){
    console.log(`Hola ${nombre}`);
}

class  Viaje{
    constructor(lugar,precio){
        this.lugar = lugar;
        this.precio = precio;
    }
}

const Peru = new Viaje("Peru",200),
Holanda = new Viaje("Holanda",500),
Japon = new Viaje("Japon", 800);

console.log(Peru);
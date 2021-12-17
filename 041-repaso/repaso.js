/* 

FUNCIONES:

bloques de código reutilizables, 
en donde dentro de los paréntesis hay parámetros

*/

function procesadorDeFrutas(manzanas, naranjas) {
    let jugo = 'Jugo de ' + manzanas + ' manzanas y ' + 
    naranjas + ' naranjas.';
    return jugo;
} 

let jugoDeManzana = procesadorDeFrutas(4, 0);
console.log(jugoDeManzana);

let jugoDeNaranja = procesadorDeFrutas(0, 5);
console.log(jugoDeNaranja);
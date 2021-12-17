/* ------ Arreglos ------ */

const comidas = ['Pozole', 'Quesadillas', 'Tacos'];
console.log(comidas); // 'Pozole', 'Quesadillas', 'Tacos'

/* ------ length -------*/
console.log(comidas[0].length); // 'Pozole' --> 6 letras
/* ------ 

Push: agregar un elemento al final
pop: quitar elemento al final
unshift: añadir elemento al inicio
shift: quitar elemento al inicio

-------*/

comidas.push('Torta'); //'Pozole', 'Quesadillas', 'Tacos', 'Torta'
console.log(comidas);

comidas.unshift('Pancita'); // 'Pancita', 'Pozole', 'Quesadillas', 'Tacos'
console.log(comidas);

comidas.pop(); // 'Pancita', 'Pozole', 'Quesadillas', 'Tacos'
console.log(comidas);

comidas.shift(); // 'Pozole', 'Quesadillas', 'Tacos'
console.log(comidas);

/* ------- forEach ----------
Nos puede ayudar a realizar una acción por cada elemento de 
nuestro arreglo

Es como si creara un nuevo arreglo para poder utilizar cada elemento y modificarlo
PERO sin modificar el arreglo original

 */

console.log(comidas[0]);
console.log(comidas[1]);
console.log(comidas[2]);

// uso de forEach con el array 'comidas'

// 'funciones expresadas' o 'funciones anónimas'
comidas.forEach(function (el) {
    console.log(el);
})

const numeros = [1, 4, 7, 8];
console.log('Arreglo inicial:');
console.log(numeros);

console.log('Arreglo usando forEach: ');
numeros.forEach(function (el){
    let suma = el + 1;
    console.log(suma);
})
console.log(numeros);

/* ejercicio */
const arr = [];

function suma(num) {
    let sumNum = num + 1;
    return arr.unshift(sumNum);
}

suma(3);
suma(5);
suma(6);
suma(2);
suma(78);

console.log(arr);
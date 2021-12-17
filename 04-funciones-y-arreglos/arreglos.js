/*

<----------- ARREGLOS -----------> (arrays)
1. Son una colección de elementos 
2. Tienen métodos o funciones que nos permiten
ordenar o manipular los datos almacenados.

*/

// manera 1
const arreglo1 = [4, 'hola', true, [1, 2, ]];
console.log(arreglo1);

// manera 2 ==> nueva manera de escribir ARRAYS
const arreglo2 = Array.of();

// manera 3 ==> es la forma MÁS ANTIGUA de declarar un arreglo
const arreglo3 = new Array(3, true, 'adiós');
console.log(arreglo3);

const frutas = ['manzana', 'naranjas', 'uvas', 'sandías', [1, 2, 3, 4, 5, ['A', 'B', 'C']]];

// notación de corchetes
console.log(frutas[1]); // naranjas
console.log(frutas[3]); // sandías
console.log(frutas[4]); // array --> [1, 2, 3, 4, 5]

// acceder al 5 del array (que está en la posisión 4)
console.log(frutas[4][4]); // número 5

// mostrar la letra B
console.log(frutas[4][5][1]);


// <---------------------- MÉTODOS --------------------------->
//  Son funciones predeterminadas

/* Length = Longitud */
const letras = ['A', 'B', 'C', 'D'];
console.log(letras.length);

/* push = añade un elemento al final de nuestro arreglo */
letras.push('E');
console.log(letras);

/* pop = elimina el último elemento del arreglo */
letras.pop();
console.log(letras);

/* unshift = agrega elemento al inicio del arreglo */
letras.unshift(1);
console.log(letras);

/* shift = elimina elemento al inicio del arreglo */
letras.shift();
console.log(letras);
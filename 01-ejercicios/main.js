//alert("Hola Mundo"); comentario de una línea
//otro comentario

/* 
este es un 
comentario
multilínea */

let miNombre = "Iris";
console.log(miNombre);

/*
number
10
10.0
-50
 */

let numero1 = 10;
let numero2 = 10.5;
let numero3 = -50;

console.log(numero1, numero2, numero3);
console.log("El valor de numero 1 es: " + numero1);
console.log("El valor de numero2 es: " + numero2);
console.log("El valor de numero3 es: " + numero3);

/*
Boolean
true => verdadero
false => falso
*/

let miBoolean1 = true;
let miBoolean2 = false;

console.log("El valor de número de la variable 1 es: " + miBoolean1);
console.log("El valor de número la variable 2 es: " + miBoolean2);

/*
null
la variable está vacía
*/

let variableVacia = null;

console.log(variableVacia);

/*
undefined => indica que una variable está vacía
*/

let variable;   // aquí no está asignado el valor y por eso va a 
// dar en console "indefinido"
console.log(variable); 

variable = "hola"; // pero aquí ya se asigna
console.log(variable);
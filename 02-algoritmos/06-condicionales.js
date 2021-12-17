/*

CONDICIONALES:

Se utilizan para tomar decisiones dentro de un 
programa evaluando la condición.

*/

/* ------------------- IF ---------------------- */
/* --- estructura ---

if(condición) {

}
*/

let edad = parseInt(prompt('Ingresa tu edad:'));

if(edad >= 18 && edad < 30) {  // 18-29 : joven
    document.write('Eres un joven');
} else if(edad >= 30 && edad < 60) {
    document.write('Eres un adulto'); // 30-59: adulto
} else if(edad >= 60) {
    document.write('Eres un adulto mayor'); //
} else {
    document.write('Eres un niño');
}
// document.write --> para imprimir algo en el HTML

/* ------------------------------------------------------- */
/* --- SIN LLAVES -----
let edad = parseInt(prompt('Ingresa tu edad:'));

if(edad >= 18 && edad < 30) document.write('Eres un joven');
else if(edad >= 30 && edad < 60) document.write('Eres un adulto'); // 30-59: adulto
else if(edad >= 60) document.write('Eres un adulto mayor'); //
else document.write('Eres un niño');

*/
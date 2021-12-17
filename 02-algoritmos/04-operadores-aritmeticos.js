/* 

Operadores aritméticos para realizar operaciones:

    + sumar / concatenar (unir cadenas de texto)
    - restar
    * multiplicar
    / división
    % módulo (obtener el residuo de una división)

*/


// Parseo o conversión de datos; cambia el tipo de dato de 'string' a 'number'
// ----- Uso de parseInt() -----

const numero1 = parseInt(prompt('Ingresa el número 1'));
const numero2 = parseInt(prompt('Ingresa el número 2'));

const suma = numero1 + numero2;
const resta = numero1 - numero2;
const multiplicacion = numero1 * numero2;
const division = numero1 / numero2;
const modulo = numero1 % numero2;

console.log('Ingresaste: ' + numero1 + ' y ' + numero2);
console.log('Suma: ' + suma);
console.log('Resta: ' + resta);
console.log('Multiplicación: ' + multiplicacion);
console.log('División: ' + division);
console.log('Módulo: ' + modulo);


/*
Variable var se utilizaba anteriormente, son variables globales.
Variable let es una variable de contexto, solo vive en un bloque de código.
*/

/* Usando VAR */ // de carácter GLOBAL

var numero = 40;
console.log(numero); // 40

if(true) {
    var numero = 50;
    console.log(numero); // 50
}

console.log(numero); // 50 

/*<------------------------------------------------------------------------>*/

/* Usando LET */  // variable LOCAL - variable de SCOPE

var texto = 'Bootcamp Java';
console.log(texto); // Bootcamp Java

if(true) {
    let texto = 'Cohorte 8';
    console.log(texto); // Cohorte 8
    let numeroFavorito = 76;
    console.log(numeroFavorito);

}

console.log(numeroFavorito); // undefined -> porque la variable 'let' solo existe 
// dentro del 'if'
console.log(texto); // Cohorte 8
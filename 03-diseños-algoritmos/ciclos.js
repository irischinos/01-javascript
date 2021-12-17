/*
Ciclos - Bucles - Loops

while
do while
for

*/
/*
<---------------- WHILE ------------------> 
let condicion = 1; ---> valor inicial

// estructura: 

while(condicion){
    ---> tu código
    --->modificación a nuestro valor inicial
}
*/

//............................


// imprimir todos los números del 1 - 10
/* let condicion = 1;

while(condicion <= 10) {
    console.log(condicion);
    //condicion = condicion + 1; ----> se puede usar también <-- condicion+= 1;-->
    condicion++;
}  */

/* 
let numero = 1;
numero++; // 2
numero++; // 3
numero++; // 4
numero--; // 3
numero--; // 1
numero--; // 1
console.log(numero); 
*/

/* <----------------- DO WHILE --------------------> */
// primero ejecuta el bloque de código y después se evalúa la condición
// se detiene después de la comprobación de la condición

/* let numero = 1;

do {
    console.log(numero);
    numero++;
} while (numero < 10);
 */


/* <---------------------  FOR --------------------> */
/* utiliza un contador para realizar las acciones el número de veces 
que se cumpla la sentencia 
   
 */
/* for (let control = 1; control <= 10; control++) {
    console.log(control);
} */


const comidas = ['Pozole', 'Tacos', 'Tamales', 'Tortas'];

for(let i = 0; i < comidas.length; i++){
    /* console.log(comidas); // se imprime 5 veces el array */
    console.log(comidas[i]); // se imprime Pozole Tacos Tamales y Tortas
    
}
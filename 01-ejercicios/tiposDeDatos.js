let saludo = "Hola Mundo"; // Tipo de dato : string
console.log(typeof(saludo));


// ** typeof ** se usa para conocer el tipo de dato del valor de una variable

let edad = 24; // number
console.log(typeof edad);
console.log("El tipo de dato es: " + typeof(edad)); //uso de typeof CON paréntesis
/* console.log("El tipo de dato es: " + typeof edad) //uso de typeof SIN paréntesis */

let nombre = "Luis"; // string
console.log("El tipo de dato es: " + typeof(nombre)); // CON paréntesis
/* console.log("El tipo de dato es: " + typeof nombre); // SIN paréntesis */

let mayor18 = true; // boolean
console.log("El tipo de dato es: " + typeof(mayor18));

let x; //undefined -> no se le asignó valor
console.log("El tipo de dato es: " + typeof(x));

let bateria = "25"; //string
console.log("El tipo de dato es: " + typeof(bateria));

let tienesMascotas = "false"; // string
console.log("El tipo de dato es: " + typeof(tienesMascotas));

let promedio = 238.90; // number -> float
console.log("El tipo de dato es: " + typeof(promedio));

let nada = null; // null (variable con valor vacío)
console.log("El tipo de dato es: " + typeof(nada));

let y; // undefined -> no se le asignó valor
console.log("El tipo de dato es: " + typeof(y));

/*
typeof
dice el tipo de dato
*/

//manera 1 typeof(variable)
//manera 2 typeof variable
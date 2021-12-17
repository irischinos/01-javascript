/*
INSTRUCCIONES

Crea una función que calcule el descuento que se le va a 
hacer a un cliente 
según el valor de su compra.

Si es una compra de menos de 100, se le hará un descuento 
del 10%. (0-99)
Si es una compra de 100 hasta menos de 200 se le hará un
 descuento del 20%.(100 - 199)
y si es una compra de más de 200 se le hará un descuento 
del 30%. (200 =>)

Utiliza prompt, funciones, condicionales y 
operadores de comparación.

La función debe pedir el precio al cliente, 
e imprimir el resultado del precio menos el descuento
 ya sea en pantalla o en consola.

(Se guardará en un archivo nuevo llamado ejercicioFunciones.js)

*/

// <-------------------------------------------------------------------->

// ESTE EL MISMO CÓDIGO CON MENOS LÍNEAS :D

let compra = parseInt(prompt('Ingresa tu pago para aplicar tu descuento'));

function precioFinal(compra) {
    if(compra < 100) descuentoAplicado = compra * 0.9;
    else if(compra >= 100 && compra < 200) descuentoAplicado = compra * 0.8;
    else if(compra >= 200) descuentoAplicado = compra * 0.7;
    document.write('Pagarás ya con el descuento: ' + '$' + descuentoAplicado);
}
precioFinal(compra); 



// <-------------------------------------------------------------------->

// =====> ESTE EL CÓDIGO QUE HICIMOS EN EQUIPO :D <=====

/* let compra = parseInt(prompt('Ingresa el dinero gastado'));

function precioFinal(compra) {
    if(compra < 100) {
        descuentoAplicado = compra * 0.9;
    }else if(compra >= 100 && compra < 200){
        descuentoAplicado = compra * 0.8;
    }else if(compra >= 200){
        descuentoAplicado = compra * 0.7;
    }
    document.write('El precio final ya con el descuento es: ' + 
    descuentoAplicado);
}
precioFinal(compra); */
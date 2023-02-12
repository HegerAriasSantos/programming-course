// Usar bucles para hacer un programa que le pida la altura del arbol y crear el arbol a base de string ej:

/*

*
**
***
****
*****
******

*/

// const altura = Number(prompt("Dame la cantidad de iteraciones") || "");

// let texto = "*";

// for (let i = 1; i <= altura; i++) {
// 	console.log(texto);
// 	texto += 1;
// }

// reforzar el ejercicio mejorando la intesidad del arbol pidiendo la altura pero cambiando la forma.

/*
    *
   ***
  *****
 *******
*********

*/

const altura = Number(prompt("Dame la cantidad de iteraciones") || "");

let texto = "*";
let espacio = " ";
let ultimaLinea = altura * 2 - 1;
let numeroEspacios = (ultimaLinea - 1) / 2;

// forma imperactiva
for (let i = 1; i <= altura; i++) {
	let espaciosLinea = "";
	for (let espacios = 1; espacios <= numeroEspacios; espacios++)
		espaciosLinea += espacio;
	console.log(espaciosLinea + texto + espaciosLinea);
	texto += "**";
	numeroEspacios--;
}

// forma rara
for (let i = 1; i <= altura; i++) {
	let espaciosLinea = new Array(numeroEspacios).fill(" ").join("");
	console.log(espaciosLinea + texto + espaciosLinea);
	texto += "**";
	numeroEspacios--;
}

// reforzar el ejercicio mejorando la intesidad del arbol pidiendo la altura pero cambiando la forma.

/*
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *

*/

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
// 	texto += "*";
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
	let espaciosLinea: string = ""; 
	for (let espacios = 1; espacios <= numeroEspacios; espacios++) espaciosLinea += espacio;
	console.log(espaciosLinea + texto + espaciosLinea);
	texto += "**";
	numeroEspacios--;
}

// numeroEspacios = 1;

// for (let i = 1; i <= altura; i++) {
// 	let espaciosLinea: string = ""; 
// 	for (let espacios = 1; espacios <= numeroEspacios; espacios++) espaciosLinea += espacio;
// 	console.log(espaciosLinea + texto + espaciosLinea);
// 	texto = texto.slice(0,-2);
// 	numeroEspacios++;
// }


// // forma rara
// for (let i = 1; i <= altura; i++) {
// 	let espaciosLinea = new Array(numeroEspacios).fill(" ").join("");
// 	console.log(espaciosLinea + texto + espaciosLinea);
// 	texto += "**";
// 	numeroEspacios--;
// }

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


// const altura = Number(prompt("Dame la cantidad de iteraciones") ?? "") 

// let texto = "*";
// let espacio = " ";
// let ultimaLinea = altura * 2 - 1;
// let numeroEspacios = 10;

// console.log('hola' + "hola") // holahola

// let algo = ""
// algo += "otra cosa";
// console.log(algo) // otra cosa

// // forma imperactiva
// for (let i = 1; i <= altura; i++) {
// 	let espaciosLinea: string = ""; 
// 	for (let espacios = 1; espacios <= numeroEspacios; espacios++) espaciosLinea += espacio;
// 	console.log(espaciosLinea + texto + espaciosLinea);
// 	if(texto.length !== ultimaLinea) texto += "**";
// 	numeroEspacios--;
// }

// numeroEspacios = 1;
// texto = texto.slice(0, -2);

// for (let i = 1; i <= altura - 1; i++) {
// 	let espaciosLinea: string = ""; 
// 	for (let espacios = 1; espacios <= numeroEspacios; espacios++) espaciosLinea += espacio;
// 	console.log(espaciosLinea + texto + espaciosLinea);
// 	texto = texto.slice(0,-2);
// 	numeroEspacios++;
// }


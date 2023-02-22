// let algo2 = null;
// if (algo2 !== 0) console.log("algo");
// else if (algo2 || false) console.log("algo2");
// else console.log("algo3");

// truesly
// cualquier numero que no sea 0
// cualquier array
// cualquier objeto
// cualquier string que tenga al menos un caracter

// falsy
// null
// undenfined
// NaN
// ""
// 0

// Ejemplo

// const datoUsuario = prompt("dame un dato");
// const numeroDadoUsuario = datoUsuario ? Number(datoUsuario) : 0;

// java !== javascript

// Camel case

// buscar usuario = buscarUsuario

// function sumar(a: number, b: number): number {
// 	return a + b;
// }
// function restar(a: number, b: number): number {
// 	return a - b;
// }
// function multiplicar(a: number, b: number): number {
// 	return a * b;
// }

// function dividir(a: number, b: number): number {
// 	return a / b;
// }

// cambiar de hard coded a funcion

// reforzar el ejercicio mejorando la intesidad del arbol pidiendo la altura pero cambiando la forma.

/*
    *
   ***
  *****
 *******
*********

*/

// function crearTriangulo(altura: number, texto: string, espacio: string) {
// 	let ultimaLinea = altura * 2 - 1;
// 	let numeroEspacios = (ultimaLinea - 1) / 2;
// 	let textoDoble = texto + texto;

// 	for (let i = 1; i <= altura; i++) {
// 		let espaciosLinea: string = "";
// 		for (let espacios = 1; espacios <= numeroEspacios; espacios++)
// 			espaciosLinea += espacio;
// 		console.log(espaciosLinea + texto + espaciosLinea);
// 		texto += textoDoble;
// 		numeroEspacios--;
// 	}
// }
// crearTriangulo(7, "0", " ");

// Hoisting: es el proceso en el cual el interprete de typescript/javascript al momento de empezar a leer un archivo analiza si hay alguna funcion creada con la palabra reservada function y alguna variable con la palabra reservada var y los declara al principio

// codigo sin hoisting;

// var algo = 2;

// function crearTriangulo(altura: number, texto: string, espacio: string) {
// 	let ultimaLinea = altura * 2 - 1;
// 	let numeroEspacios = (ultimaLinea - 1) / 2;
// 	let textoDoble = texto + texto;

// 	// forma imperactiva
// 	for (let i = 1; i <= altura; i++) {
// 		let espaciosLinea: string = "";
// 		for (let espacios = 1; espacios <= numeroEspacios; espacios++)
// 			espaciosLinea += espacio;
// 		console.log(espaciosLinea + texto + espaciosLinea);
// 		texto += textoDoble;
// 		numeroEspacios--;
// 	}
// }

// codigo con hoisting (ejemplo de lo que hace internamente)
//  como podemos ver algo empieza arriba pero sin valor osea con undefined y la function pasa al principio del archivo para poder ser utilizada en cualquier parte del mismo;

// var algo;
// function crearTriangulo(altura: number, texto: string, espacio: string) {
// 	let ultimaLinea = altura * 2 - 1;
// 	let numeroEspacios = (ultimaLinea - 1) / 2;
// 	let textoDoble = texto + texto;

// 	// forma imperactiva
// 	for (let i = 1; i <= altura; i++) {
// 		let espaciosLinea: string = "";
// 		for (let espacios = 1; espacios <= numeroEspacios; espacios++)
// 			espaciosLinea += espacio;
// 		console.log(espaciosLinea + texto + espaciosLinea);
// 		texto += textoDoble;
// 		numeroEspacios--;
// 	}
// }

// algo = 2;

// diferentes tipos de fuciones

// function sumar(a: number, b: number): number {
// 	return a + b;
// }

// const sumarArrow = (a: number, b: number): number => {
// 	return a + b;
// };

// const sumarArrowCorto = (a: number, b: number): number => a + b;

// console.log(sumar(1, 1), sumarArrow(1, 1), sumarArrowCorto(1, 1));

// creacion de un callback

function algo(fn) {
	console.log("algo");
	fn("hola", "mundo");
}

function callback(texto1: string, texto2: string) {
	console.log(texto1 + texto2);
}

console.log(algo(callback));

// uso de un callback real

// let arr = [1,2,3,4,5,6];

// arr.forEach((item, index, arr2) => console.log(item, index, arr2))

// forma corta de hacer un log de todos los datos que te pase el callback
// arr.forEach( console.log )

///////////////////////////////// TAREA /////////////////////////////////////

/* Crear una calculadora la cual le pida al usuario que elija una opcion de un menu, el programa estara dentro de un while en el cual se repetira hasta que el usuario selecione la opcion cerrar programa y asi podra salir del while, pero mientras no lo haga podra utilizar tantas opciones como el usuario quiera.

ej del menu:

0 - cerrar programa.
1 - sumar
2 - restar
3 - multiplicar
4 - dividir
5 - crear triangulo e imprimirlo por consola.

*/

// console.log("Hello World"); // Console.log("mensaje") es para imprimir un mensaje en consola

// // tipos de datos;

// type Persona = {
// 	name: string;
// 	age: number;
// 	isMarry: boolean;
// };
// //  datos primitivos

// let numerico: number = 10;
// let texto: string = "hola mundo";
// let boleano: boolean = true;
// let indefinido: undefined = undefined;
// let vacio: null = null;

// // datos complejos

// let arreglo: number[] = [4, 6, 7, 2, 3, 1, 5, 6, 8, 8, 10, 12];
// let arreglo2: Array<number | string> = [
// 	4,
// 	6,
// 	"hola mundo",
// 	2,
// 	3,
// 	1,
// 	5,
// 	6,
// 	8,
// 	8,
// 	10,
// 	12,
// ];

// let persona: Persona = {
// 	name: "",
// 	age: 0,
// 	isMarry: false,
// };

// // Opearadores

// // Numericos
// console.log(5 + 5); // + operador suma
// console.log("hola " + "mundo");

// // - resta
// // * multiplicacion
// // / division
// // ** potencia
// // % modulo
// // ejemplos de moudlo
// console.log(12 % 2); // 0
// console.log(24 % 8); // 5
// // para saber si es par
// console.log(20 % 2); // 0

// // comparacion
// // para igualdad  ==
// // console.log(5 === 10)

// // mayor que  >=
// // menor que  <=

// // Logicos
// let isAraay: boolean = false;
// let isAlgo: boolean = false;

// // ambos && And
// // uno u otro || OR

// console.log(isAlgo && isAraay);

// Estructura de control

// let a = 10; variable
// const b = 20; constante

// a = 20;
// b= 30

////// condicionales

// if (isAlgo) {
// 	if (isAraay) {
// 		console.log("es array");
// 	} else {
// 		console.log("no es array");
// 	}
// 	console.log("algo");
// } else {
// 	console.log("no algo");
// }

// if (isAlgo) console.log("es algo");
// else console.log("no es algo");

// if (isAlgo) {
// 	console.log("algo");
// }
// else if (isArray) {
// console.log('es array')
// }

// if (isAlgo || isAraay) {
// 	console.log("no algo2");
// } else {
// 	console.log("no algo3");
// }

// let valorSeleccionado = 2;
// let diasDeLaSemana = [
// 	"lunes",
// 	"martes",
// 	"miercoles",
// 	"jueves",
// 	"viernes",
// 	"sabado",
// 	"domingo",
// ];

// diasDeLaSemana[valorSeleccionado];

// switch (valorSeleccionado) {
// 	case 0:
// 		console.log("lunes");
// 		break;
// 	case 1:
// 		console.log("martes");
// 		break;
// 	case 2:
// 		console.log("miercoles");
// 		break;
// 	case 3:
// 		console.log("jueves");
// 		break;
// 	case 4:
// 		console.log("viernes");
// 		break;
// 	case 5:
// 		console.log("sabado");
// 		break;
// 	case 6:
// 		console.log("domingo");
// 		break;

// 	default:
// 		console.log("no es un dia de la semana");
// 		break;
// }

///// Ciclicas

//  i = i + 1  === i++  === i += 1
// i = i * 1 === i *= 1
// i = i / 1 === i /= 1

// Se usa for cuando quiero utilizar la variable iteradora en cada iteracion del codigo ademas de saber la cantidad de veces que quiero repetir el codigo.

for (let i = 0; i < 6; i++) {
	console.log(i);
}

// Se usa while cuando no conozco la cantidad de veces que quiero repetir el codigo.

let condicion = 1;
while (condicion !== 0) {
	condicion = Number(prompt("eligir condicion"));
}

// la funcion consta de 3 partes: inputs (datos que se le da o parametros), proceso (lo que sucede dentro de la funcion), salida: valor que se retorna de la funcion

function sumar(a: number, b: number): number {
	return a + b;
}

console.log(sumar(5, 5));

// probando

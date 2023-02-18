// function normal
// function sumar(a: number, b: number): number {
// 	return a + b;
// }
// arrow function
// const sumarFlecha = (a: number, b: number): number => a + b;

/// Function anonima

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// arr.forEach(function () {
// 	console.log("Hola");
// });

// let obj = {
// 	func: function () {
// 		return 10;
// 	},
// 	functArrow: () => 10,
// };

// obj.func();

// Function Recursivas
function factorial(n: number): number {
	// Condicion de cierre/fin/salida
	if (n == 0) return 1;
	// Accion recursiva
	return n * factorial(n - 1);
}

console.log(factorial(5));

// Function pura

//  una funcion pura es una funcion que no afecta el exterior y no es afectada por el exterior ademas de que siempre retorna el mismo valor para los mismos parametros.

function sumarPura(a: number, b: number): number {
	return a + b;
}

// Function de orden superio o HOF

//  una funcion de orden superior es una funcion que recibe como parametro otra funcion o retorna una funcion.

// function de orden superior
function ejecutarCalculo(
	a: number,
	b: number,
	fn: (a: number, b: number) => number,
): number {
	return fn(a, b);
}

// function normal pero en este uso son llamadas callbacks o funciones de orden inferior
function sumar(a: number, b: number): number {
	return a + b;
}

function restar(a: number, b: number): number {
	return a - b;
}
function multiplicar(a: number, b: number): number {
	return a * b;
}

console.log(ejecutarCalculo(10, 20, sumar));

// Tarea

// 1. Crear una funcion de orden superior la cual reciba como parametro una cadena de texto y una function para cambiar el texto y debe retornar dicha cadena de texto en (mayusculas, minusculas, capitalizado).

// 2. Crear una funcion de orden superior la cual reciba como parametro un arreglo de numeros y una function para filtrar los numeros impares y debe retornar un nuevo arreglo con los numeros filtrados.

// 3. Crear una funcion que reciba como parametro un arreglo de numeros y retorne un nuevo arreglo con los numeros ordenados de menor a mayor.

// OJO: el profesor lo hara con recursion, metodos del array, programacion imperactiva.

// function normal
function sumar(a: number, b: number): number {
	return a + b;
}
// arrow function
const sumarFlecha = (a: number, b: number): number => a + b;

/**
 * hola bobo
 * @param {number} a - number -&gt; The first parameter is a number
 * @param {number} b - number
 * @returns The function sumarFlecha2 is being returned.
 */
const sumarFlecha2 = (a: number, b: number): number => {
	return a + b;
};

sumarFlecha2;
/// Function anonima

const sumar2 = function () {
	return 10;
};

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr.forEach(function () {
	console.log("Hola");
});

let obj = {
	func: function () {
		return 10;
	},
	functArrow: () => 10,
};
obj.func();

obj.func();

// Function Recursivas
function factorial(n: number): number {
	// Condicion de cierre/fin/salida
	if (n == 0) return 1;
	// Accion recursiva
	return n * factorial(n - 1); // (5 x (4 x (3 x (2 x (1 x (1)))) )
}

console.log(factorial(5));

// function impura
let algK = 10;
function impura(a: number, b: number): number {
	console.log("🚀 ~ file: 17_2_2023.ts:53 ~ impura ~ a:", a);

	return a + b + Math.random() * algK++;
}

impura(10, 20);

// Function pura

//  una funcion pura es una funcion que no afecta el exterior y no es afectada por el exterior ademas de que siempre retorna el mismo valor para los mismos parametros.

function sumarPura(a: number, b: number): number {
	return a + b;
}

console.log(sumarPura(10, 20)); // 30

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

// function normal pero en este uso son  llamadas callbacks o funciones de orden inferior

// function sumar(a: number, b: number): number {
// 	return a + b;
// }

function restar(a: number, b: number): number {
	return a - b;
}
function multiplicar(a: number, b: number): number {
	return a * b;
}

console.log(`hola ${ejecutarCalculo(10, 20, restar)}`);

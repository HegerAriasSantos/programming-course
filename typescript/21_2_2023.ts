// Tarea

// 0. Crear una funcion de orden superior la cual reciba como parametro una cadena de texto y una function para cambiar el texto y debe retornar dicha cadena de texto en (mayusculas, minusculas, capitalizado).

const mayusculas = {
	a: "A",
	b: "B",
	c: "C",
	d: "D",
	e: "E",
	f: "F",
	g: "G",
	h: "H",
	i: "I",
	j: "J",
	k: "K",
	l: "L",
	m: "M",
	n: "N",
	ñ: "Ñ",
	o: "O",
	p: "P",
	q: "Q",
	r: "R",
	s: "S",
	t: "T",
	u: "U",
	v: "V",
	w: "W",
	x: "X",
	y: "Y",
	z: "Z",
};
const minusculas = {
	A: "a",
	B: "b",
	C: "c",
	D: "d",
	E: "e",
	F: "f",
	G: "g",
	H: "h",
	I: "i",
	J: "j",
	K: "k",
	L: "l",
	M: "m",
	N: "n",
	Ñ: "ñ",
	O: "o",
	P: "p",
	Q: "q",
	R: "r",
	S: "s",
	T: "t",
	U: "u",
	V: "v",
	W: "w",
	X: "x",
	Y: "y",
	Z: "z",
};
function executeMethod(text, fn) {
	return fn(text);
}

function minusculasfn(text) {
	let newText = "";
	for (let i = 0; i < text.length; i++) {
		if (text[i] in minusculas) newText += minusculas[text[i]];
		else newText += text[i];
	}
	return newText;
}

function mayusculasfn(text) {
	let newText = "";
	for (let i = 0; i < text.length; i++) {
		if (text[i] in mayusculas) newText += mayusculas[text[i]];
		else newText += text[i];
	}
	return newText;
}

function capitalizarfn(text) {
	let newText = "";
	let wasLastSpace = true;
	for (let i = 0; i < text.length; i++) {
		if (wasLastSpace) {
			newText += mayusculasfn(text[i]);
			wasLastSpace = false;
		} else {
			newText += text[i];
			if (text[i] === " ") wasLastSpace = true;
		}
	}
	return newText;
}

console.log(executeMethod("hola mundo", capitalizarfn));

// 1. Crear una funcion de orden superior la cual reciba como parametro un arreglo de numeros y una function para filtrar los numeros impares y debe retornar un nuevo arreglo con los numeros filtrados.

function parOrImpar(
	arrNumber: number[],
	fn: (arrNumber: number[]) => number[],
) {
	return fn(arrNumber);
}

function par(arrNumber: number[]) {
	let newArr: number[] = [];
	for (let i = 0; i < arrNumber.length; i++)
		if (arrNumber[i] % 2 === 0) newArr.push(arrNumber[i]);
	return newArr;
}

function impar(arrNumber: number[]) {
	let newArr: number[] = [];
	for (let i = 0; i < arrNumber.length; i++)
		if (arrNumber[i] % 2 !== 0) newArr.push(arrNumber[i]);
	return newArr;
}

console.log(parOrImpar([1, 2, 3, 4, 5, 6, 7], par));
console.log(parOrImpar([1, 2, 3, 4, 5, 6, 7], impar));

// 2. Crear una funcion que reciba como parametro un arreglo de numeros y retorne un nuevo arreglo con los numeros ordenados de menor a mayor.

// OJO si se pone arr[0] lo que este entre corchete se refiere al indice y de esta manera se busca el valor que yase en dicho indice. ej:

// let text = "hola" // text[1] // o
// let arr = [1,2,3,4,5,6] // arr[2] // 3
// Ojo las posiciones comienzan desde el 0.

function getOrderedArr(arr: number[]) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 1; j < arr.length; j++) {
			if (arr[j] < arr[j - 1]) {
				let aux = arr[j];
				arr[j] = arr[j - 1];
				arr[j - 1] = aux;
			}
		}
	}
	return arr;
}
//  7 * 6 = 42
console.log(getOrderedArr([10, 6, 3, 2, 7, 9, 1]));

// OJO: el profesor lo hara con recursion, metodos del array, programacion imperactiva.
let a = 0;
a.toExponential;

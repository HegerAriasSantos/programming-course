// type excuteCalculate = (a: number, b: number) => number;

// interface IexcuteCalculate {
// 	(a: number, b: number): number;
// }

// const sumar: excuteCalculate = (a, b) => a + b;
// const restar: excuteCalculate = (a, b) => a - b;
// const multiplicar: excuteCalculate = (a, b) => a * b;
// const dividir: excuteCalculate = (a, b) => a / b;
// const excCal = (operacion: excuteCalculate, a: number, b: number) =>
// 	operacion(a, b);

// type Option = "sumar" | "restar" | "multiplicar" | "dividir";
// const option: Option | "Cerrar" = "Cerrar";

interface IPerson {
	name: string;
	age: number;
}

class Person {
	constructor(public name: string, private age: number) {}
}
const persona: Person = new Person("algo", 2);
persona.name;

type personSinName = Omit<IPerson, "name">;

// interface IPro extends IPerson {
// 	profesion: string;
// }

// const profesionalConPadre: IPro & { padreNombre: string } = {
// 	name: "",
// 	age: 0,
// 	profesion: "",
// 	padreNombre: "",
// };

// const persona: IPerson = {
// 	name: "",
// 	age: 0,
// };
// const updatePerson: Partial<IPerson> = {
// 	name: "nuevo nombre",
// };

// // persona.age
// // persona['name']

// interface IGPPerson {
// 	[key: string]: IPerson;
// }

// const grupoPersonas: IGPPerson = {
// 	heger: {
// 		name: "heger",
// 		age: 19,
// 	},
// 	popa: {
// 		name: "popa",
// 		age: 19,
// 	},
// 	juan: {
// 		name: "juan",
// 		age: 20,
// 	},
// 	javier: {
// 		name: "javier",
// 		age: 21,
// 	},
// };

// grupoPersonas["popa"];

// const arr: number[] = [1, 2, 3, 4, 6];
// const arr2: Array<number | string | boolean | Object | Function> = [
// 	1,
// 	"",
// 	false,
// ];

// function algoGeneric<T>(algo: T) {
// 	return algo;
// }
// console.log(algoGeneric<Partial<IPerson>>({}));

// const util: Omit<IPerson, "name" | "age"> = {
// 	name: "algo",
// 	age: "asdf",
// };

enum dias {
	lunes = 3,
	martes,
	miercoles,
	jueves = 10,
	viernes = 5,
	sabado,
	domingo,
}

const person = {
	name: "algo",
	age: "tal cosa",
} as const;

console.log(person);

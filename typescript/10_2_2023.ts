// condiciones 

// 01- programa para saber si  el usuario es mayor de edad.

let edad = prompt('Cual es tu edad?');

// forma larga
if (edad != null && parseInt(edad) >= 18) {
  console.log('eres mayor de edad');
} else {
  if (edad != null && parseInt(edad) <= 18) {
    console.log('eres menor de edad')
  }
}

// forma corta
if (edad != null && parseInt(edad) >= 18) console.log('eres mayor de edad')
else if (edad != null && parseInt(edad) <= 18) console.log('eres menor de edad')


// programa que imprima por consola los numeros del 1 al 100. si el numero es divisible por 3
// en vez del numero se mande por consola la palabra fizz y si es divisible por 5 en vez del
// numero imprimir la palabra buzz y si es divisible por ambos imprimir fizzbuzz.

// 1, 2, fizz, 4 , buzz, fizz, 7, 8, fizz, buzz, 11, fizz, 13, 14, fizzbuzz, ...
for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) console.log('fizzbuzz')
  else if (i % 5 == 0) console.log('buzz')
  else if (i % 3 == 0) console.log('fizz')
  else console.log(i)
}



// programa que pida al usuario un numero el cual sera cantidad de pasos que dara la succesion
// fibonacii.

// 0 1 1 2 3 5 8 13

// Number("4") sirve para transformar texto a numero.

// let a = null || "hola"
// template literal  `asdfssff ${a}`
 
// let n = Number(prompt("Dame la cantidad de iteraciones") || "")

//   let a = 0; 
//   let b = 1;
//   let c = 0;
//   let result = ""

//   // 0 1


// for (let i = 1; i <= n; i++) {
//   c  = a + b;
//   a  = b;
//   b  = c;
  
//   result += `${a} -> `
//   console.log(`a = ${a}, b = ${b}, c = ${c}`)
// }


// Hecho con recursividad

// const nTerms = Number(prompt('Enter the number of terms: ') || "");
// const fibonacci = (num: number): number => num < 2 ? num : fibonacci(num - 1) + fibonacci(num - 2)
// for (let i = 0; i < nTerms; i++) console.log(fibonacci(i))
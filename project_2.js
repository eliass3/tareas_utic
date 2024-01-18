// Convertidor de millas a kilómetros:
const millas = 130
const factor_conversion = 1.60934
const kilometros = millas * factor_conversion
console.log(`La distancia de ${millas} millas es igual a ${kilometros.toFixed(4)} Km`);

// Calculadora IMC (Índice de Masa Corporal):
const peso = parseFloat(prompt("Ingrese su peso en Kg:"))
const altura = parseFloat(prompt("Ingrese su altura en metros:"))
const imc = peso / (altura * altura)
console.log(`Su índice de masa corporal (IMC) es: ${imc.toFixed(2)}`)

// Prueba:
// ¿Qué tipo de dato tiene la siguiente variable?
const c1 = "5"
console.log(typeof c1)

// ¿Qué tipo de dato tiene la siguiente variable?
const c2 = 91
console.log(typeof c2)

// ¿Cuál de los dos es mejor?, línea 1 or línea 2?
let empty1 = undefined //line 1
let empty2 = null //line 2

// ¿Qué salida producen en consola?
let a1 = "Hello"
a1 = "world"
console.log(a1)

// ¿Qué se mostrará en la consola?
let a2 = "world"
let b2 = `Hello ${a2}!`
console.log(b2)

// ¿Cuál es el valor de a?
let a3 = "Hello"
a3 = prompt("world")
console.log(a3)

// ¿Cuál es el valor de b en la consola?
let a4 = 5
let b4 = 70
let c4 = "5"
b4++
console.log(b4)

// ¿Cuál es el valor de este resultado?
let result = 3 + 4 * 2 / 8;

// ¿Cuál es el valor de total y total2?
let firstNum = 5;
let secondNum = 10;
firstNum++;
secondNum--;
let total = ++firstNum + secondNum;
console.log(total);
let total2 = 500 + 100 / 5 + total--;
console.log(total2);

// ¿Qué se mostrará en la consola aquí?
const a5 = 5;
const b5 = 10;
console.log(a5 > 0 && b5 > 0);
console.log(a5 == 5 && b5 == 4);
console.log(true || false);
console.log(a5 == 3 || b5 == 10);
console.log(a5 == 3 || b5 == 7);

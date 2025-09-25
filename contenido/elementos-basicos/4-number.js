/*
*
*       Tipo de dato number 'number'
*
*/

// 1.entero y decimal
const enter = 33
const decimal = 3.34

// 2. notacion cientifica
const cientifica = 5e4

// 3. Infinito y NaN(no es un numero)
// usanndo infinito
const Infinito = Infinity
// usando el NaN
const noEsNumero = NaN

//Operaciones aritmeticas

// 1. suma, resta, multiplicacion y division
const suma = 5 + 6
const resta = 10 - 10
const multiplicacion = 3 * 4
const division = 16/4

//2. modulo y exponenciación
const modulo = 16 % 8 //residuo = 0
const exponenciación = 2 ** 4

// La presición en javascript
const resultado = 0.1 + 0.2 // resultado = 0.3
//console.log(resultado)
//console.log(resultado.toFixed(1))
//console.log(resultado.toFixed(1) == 0.3) // false

//OPERACIONES AVANZADAS
const raizCuadrada = Math.sqrt(16)
const valorAbsoluto = Math.abs(-7)
const aleatorio = Math.trunc(Math.random()*20+5)
//console.log(raizCuadrada)
//console.log(valorAbsoluto)
//console.log(aleatorio)

// Lenguajes de programación

                            //Runtime Exception

//Compilados: java (JVM -> .java _-_> .class). C, C++
//Interpretados: javascript --> lee>ejecuta

const numero = 2
const boolean = true
//Conversión implicita
console.log(numero+boolean)




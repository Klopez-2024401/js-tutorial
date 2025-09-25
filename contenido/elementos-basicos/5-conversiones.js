/** 
 * 
 * 
 *      CONVERSIONES -> EXPLICITAS e IMPLICITAS
 * 
 * 
 */
//Conversion Explicit Type Casting
const string = '54'
const integer = parseInt(string)

//console.log(typeof string)
//console.log(typeof integer)

const float = parseFloat("3.14")
//console.log(typeof float)//number
               //8020
const binario = '1010' //10
const decimal = parseInt(binario, 2)
//console.log(decimal)


const hexa = 'CAFE' //51966
const decimalhex = parseInt(hexa, 16)
//console.log(decimalhex)


//Conversion Implicit Type Casting
const resultado = '5' + 3 //8
//console.log(typeof resultado)

const sumaConBoolean = '3' + true
//console.log(sumaConBoolean)

const sumaConNumero = 2 + true
//console.log(sumaConNumero) //3

const valorString = '20'
const valorNumber = 10 
const valorBoolean = true

console.log(valorString+valorString) //Concatenar
console.log(valorString+valorNumber) // Concatenar
console.log(valorString+valorBoolean)//Concatenar

console.log(valorNumber+valorNumber) //Sumar
console.log(valorNumber+valorString) //Concatenar
console.log(valorNumber+valorBoolean) //sumar

console.log(valorBoolean+valorBoolean)//sumar
console.log(valorBoolean+valorString)//sumar
console.log(valorBoolean+valorNumber)//concatenar








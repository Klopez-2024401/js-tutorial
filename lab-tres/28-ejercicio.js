/**
 * 
 * Crea una función que reciba un número y 
 * determine si es un número primo.
 * 
 */

// Kevin Ritter Calvin López Aceytuno - 2024401

function esPrimo(num) {
  if (num <= 1) return false; 
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false; 
    }
  }
  return true;
}

console.log(esPrimo(7));  
console.log(esPrimo(10));
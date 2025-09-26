/**
 * 
 * Crea una función que invierta una cadena de texto 
 * (ej. "hola" ->"aloh").
 * 
 */

// Kevin Ritter Calvin López Aceytuno - 2024401

function invertirTextoFor(texto) {
  let invertido = "";
  for (let i = texto.length - 1; i >= 0; i--) {
    invertido += texto[i];
  }
  return invertido;
}

console.log(invertirTextoFor("hola"));

function invertirTextoWhile(texto) {
  let invertido = "";
  let i = texto.length - 1;
  while (i >= 0) {
    invertido += texto[i];
    i--;
  }
  return invertido;
}

console.log(invertirTextoWhile("hola"));
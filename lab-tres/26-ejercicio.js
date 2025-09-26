/**
 * 
 * Crea una función que reciba una cadena de texto y 
 * cuente la cantidad de vocales que contiene.
 * 
 */

// Kevin Ritter Calvin López Aceytuno - 2024401

function contarVocales(texto) {
  let contador = 0;

  for (let i = 0; i < texto.length; i++) {
    let letra = texto[i].toLowerCase();
    if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u") {
      contador++;
    }
  }

  return contador;
}

console.log(contarVocales("Hola como estas"));
console.log(contarVocales("Javascript basico"));
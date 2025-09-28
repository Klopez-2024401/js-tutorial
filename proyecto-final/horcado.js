/**
 * 
 *      Es un ahorcado el proyecto
 * 
 */

const readline = require("readline");

const palabras = ["gato", "perro", "casa", "programa", "escuela", "local", "internet", "computadora", "telefono", "mesa", "laptop", "ventana", "impresora"];

const dibujos = [
  `
   +---+
   |   |
       |
       |
       |
       |
  =========`,
  `
   +---+
   |   |
   O   |
       |
       |
       |
  =========`,
  `
   +---+
   |   |
   O   |
   |   |
       |
       |
  =========`,
  `
   +---+
   |   |
   O   |
  /|   |
       |
       |
  =========`,
  `
   +---+
   |   |
   O   |
  /|\\  |
       |
       |
  =========`,
  `
   +---+
   |   |
   O   |
  /|\\  |
  /    |
       |
  =========`,
  `
   +---+
   |   |
   O   |
  /|\\  |
  / \\  |
       |
  =========`
];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let palabra;
let intentos;
let usadas;
let descubiertas;

function iniciarJuego() {
  palabra = palabras[Math.floor(Math.random() * palabras.length)];
  intentos = 6;
  usadas = [];
  descubiertas = Array(palabra.length).fill("_");

  console.log("\n=== Juego del Ahorcado (Con dibujo ASCII) ===");
  preguntar();
}

function mostrar() {
  console.log(dibujos[6 - intentos]); 
  console.log("\nPalabra: " + descubiertas.join(" "));
  console.log("Intentos restantes: " + intentos);
  console.log("Letras usadas: " + usadas.join(", "));
}

function preguntar() {
  mostrar();
  rl.question("Escribe una letra: ", (letra) => {
    letra = letra.toLowerCase();

    if (usadas.includes(letra)) {
      console.log("Ya usaste esa letra.");
    } else {
      usadas.push(letra);

      if (palabra.includes(letra)) {
        for (let i = 0; i < palabra.length; i++) {
          if (palabra[i] === letra) {
            descubiertas[i] = letra;
          }
        }
        console.log("¡Bien! La letra está.");
      } else {
        intentos--;
        console.log("Mal :(");
      }
    }

    if (!descubiertas.includes("_")) {
      console.log("\n🎉 ¡Ganaste! La palabra era: " + palabra);
      volverAJugar();
      return;
    }

    if (intentos === 0) {
      mostrar();
      console.log("\n💀 Perdiste. La palabra era: " + palabra);
      volverAJugar();
      return;
    }

    preguntar();
  });
}

function volverAJugar() {
  rl.question("\n¿Quieres jugar otra vez? (si/no): ", (respuesta) => {
    if (respuesta.toLowerCase() === "si") {
      iniciarJuego();
    } else {
      console.log("¡Gracias por jugar! 👋");
      rl.close();
    }
  });
}

iniciarJuego();
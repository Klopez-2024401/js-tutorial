/**
 * 
 * 
 *      CICLO FOR -> PARA
 * 
 * 
 */

/*
for (let i = 0; i < array.length; i++){
    const element = array[i]
}
*/

let lista = ["comer", "dormir", "code", "repedir"];

for(let i = 0; i < lista.length; i++){
    //console.log(lista[i])
} 

// FOR-OF --------------------> FOR EACH

let canasta = ["manzana", "naranjas", "mangos", "uvas"]
for (fruta of canasta) {
    //console.log(fruta)
}

// FOR-IN
// Definicion -> itera sobre las propiedades de un objeto

const canastaDeFrutas = {
    nombre : "manzana",
    precio : 5.0,
    tipo : "verde",
    marca : "Chanita's apples"
}

for (fruta in canastaDeFrutas) {
    //console.log(fruta)
    
}

for (fruta in canastaDeFrutas){
    console.log(`${fruta} : ${canastaDeFrutas[fruta]}`) 
}

for (fruta of canastaDeFrutas){
    console.log(fruta)
}

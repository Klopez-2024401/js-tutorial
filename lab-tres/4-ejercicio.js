/**
 * 
 * Escribe una función que tome una cadena de texto y 
 * verifique si su longitud es mayor a 5 caracteres.
 * 
 */

// Kevin Ritter Calvin López Aceytuno - 2024401

function verificarLongitud(texto){
    if(texto.length > 5 ){
        return "La cadena es mayor a 5 caracteres";
    }else{
        return "La cadena tiene 5 o menos caracteres";
    }
}


console.log(verificarLongitud("soyrelmejor"));
console.log(verificarLongitud("Programar"));

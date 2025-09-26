/**
 * 
 * Escribe una función que reciba un número 
 * y calcule su factorial.
 * 
 */

// Kevin Ritter Calvin López Aceytuno - 2024401

function factorialConFor(n){
    let resultado = 1;
    for(let i = 1; i <= n; i++){
        resultado *= i;
    }
    return resultado;
}

console.log(factorialConFor(5));

function factorialConWhile(n){
    let resultado = 1;
    let i= 1;
    while (i <= n){
        resultado *= i;
        i++;
    }
    return resultado;
}

console.log(factorialConWhile(5));
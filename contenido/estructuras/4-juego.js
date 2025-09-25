/*
se solite un numero a usuario para adivinar un numero secreto
que sera generado aleatoriamente entre el rango de 1 a10
*/

const numeroSecreto = Math.floor(Math.random()*11-1)
const numeroJugador = parseInt(prompt("Adivina el numero entre el 1 y 10"))

console.log(`El numero que ingresaste fue: ${numeroJugador}`)

if(numeroJugador === numeroSecreto){
    console.log("Felicidades ganastes adivinastes el numero secreto")
}else if(numeroJugador < numeroSecreto){
    console.log("El numero secroto es mayor")
}else{
    console.log("El numero secreto es menor al ingresado")
}


console.log(`El numero secreto era: ${numeroSecreto}`)

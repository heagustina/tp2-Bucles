//1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que 
// ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.

const edad = parseInt(prompt("Ingrese su edad:"))
if( edad >= 18){
document.writeln("Ya puedes conducir")
}else if( isNaN(edad)){
    document.writeln("Edad no válida. Debes ingresar un número")
}else{
    document.writeln("Aún no puedes conducir")
}


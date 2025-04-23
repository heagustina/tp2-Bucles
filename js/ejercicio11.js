//11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *

let nombre1 = prompt("Introduce el primer nombre:");
let edad1 = parseInt(prompt("Introduce la edad de " + nombre1));

let nombre2 = prompt("Introduce el segundo nombre:");
let edad2 = parseInt(prompt("Introduce la edad de " + nombre2));

let nombre3 = prompt("Introduce el tercer nombre:");
let edad3 = parseInt(prompt("Introduce la edad de " + nombre3));

let mayorNombre;
let mayorEdad;

if (edad1>=edad2 && edad1>=edad3) {
  mayorNombre = nombre1;
  mayorEdad = edad1;
} else if (edad2>=edad1 && edad2>=edad3) {
  mayorNombre = nombre2;
  mayorEdad = edad2;
} else {
  mayorNombre = nombre3;
  mayorEdad = edad3;
}

document.writeln("La persona con mayor edad es: " + mayorNombre + " (" + mayorEdad + " años)");
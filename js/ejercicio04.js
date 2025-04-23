//4- Realiza un script que pida números hasta que se pulse “cancelar”.
// Si no es un número deberá indicarse con un «alert» y seguir pidiendo números.
// Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.

let suma = 0;

while (true) {
  const inicio = prompt("Introduce un número (pulsa Cancelar para salir):");

  if (inicio === null) {
    break;
  }

  const numero = Number(inicio);

  if (isNaN(numero)) {
    alert("Eso no es un número. Por favor, introduce un número válido.");
    continue;
  }

  suma += numero;
}

document.writeln("La suma total de los números introducidos es: " + suma);

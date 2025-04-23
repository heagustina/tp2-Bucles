/*8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

1
12
123
1234
12345
123456
……
*/

let numero = parseInt(prompt("Escribe un número (máximo hasta el 50):"));

if (isNaN(numero) || numero < 1 || numero > 50) {
  document.writeln("Número inválido. Debe ser un número entre 1 y 50.");
} else {
  for (let i=1; i<=numero; i++) {
    let linea = "";
    for (let j=1; j<=i; j++) {
      linea += i;
    }
    document.writeln(linea + "<br>");
  }
}
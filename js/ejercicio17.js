/*17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.

Ejemplo:



Input: Hola mundo

Output: la vocal ‘o’ está en la posición 1
*/

let texto = prompt("Introduce un texto:");

const vocales = "aeiouáéíóúAEIOUÁÉÍÓÚ";

let encontrada = false;
for (let i = 0; i < texto.length; i++) {
    if (vocales.includes(texto[i])) {
        document.writeln(`La vocal '${texto[i]}' está en la posición ${i + 1}`);
        encontrada = true;
        break;
    }
}

if (!encontrada) {
    document.writeln("No se encontró ninguna vocal en el texto.");
}
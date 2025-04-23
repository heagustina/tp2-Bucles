//15- Realiza un script que cuente el número de vocales que tiene un texto.

const texto = prompt("Introduce un texto:");
let contadorVocales = 0;
const vocales = "aeiouAEIOU";

for(let i=0; i<texto.length; i++) {
    if (vocales.includes(texto[i])) {
        contadorVocales++;
    }
}

document.writeln("El texto tiene " + contadorVocales + " vocales.");
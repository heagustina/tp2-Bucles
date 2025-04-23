/*10- Realiza un script que pida número de filas y columnas y escriba una tabla. 
Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. 
Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.
*/

const filas = parseInt(prompt("Ingresa un numero de filas"))
const columnas = parseInt(prompt("Ingresa un numero de columnas"))
document.writeln("<table><tbody>");

for(let indiceFilas =0; indiceFilas < filas; indiceFilas++){
    document.writeln("<tr>")
    for(let indiceColumnas=0; indiceColumnas< columnas; indiceColumnas++){
        document.writeln("<td>35</td>")
    }
    document.writeln("</tr>")
}
document.writeln("</table></tbody>")
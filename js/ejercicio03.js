//3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. 
// Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

let oracionFinal = "";
let inicio = true

while (true){
    const texto = prompt("Introduce una cadena de texto: ");

    if (texto === null) {
      break;
    }


if (inicio) {
    oracionFinal += texto;
    inicio = false;
}else {
    oracionFinal += "-" + texto;
  }

const continuar = confirm("¿Quieres seguir introduciendo texto?");
      if (!continuar){
        break;
    }
}

document.writeln("resultado final: " + oracionFinal)
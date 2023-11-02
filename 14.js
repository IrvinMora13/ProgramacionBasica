/*14.- Hacer un programa que imprima el mayor y el menor de una serie de cinco números que
vamos introduciendo por teclado. */
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function encontrarMayorYMenor() {
  let contador = 0;
  let numeroMayor = 0;
  let numeroMenor = 0;

  function ingresarNumero() {
    rl.question("Introduce un número: ", function(numeroUsuario) {
      let numero = numeroUsuario;

      if (!isNaN(numero)) {
        contador++;
        if (numero > numeroMayor) {
          numeroMayor = numero;
        }
        if (numero < numeroMenor || numeroMenor == 0) {
          numeroMenor = numero;
        }
        
        if (contador < 5) {
          ingresarNumero();
        } else {
          console.log("El número mayor es: " + numeroMayor);
          console.log("El número menor es: " + numeroMenor);
          rl.close();
        }
      } else {
        console.log("Debes introducir un número válido.");
        ingresarNumero();
      }
    });
  }

  ingresarNumero();
}

encontrarMayorYMenor();

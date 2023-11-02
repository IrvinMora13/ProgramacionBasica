/*15.- Introducir dos números por teclado. Imprimir los números naturales que hay entre ambos
números empezando por el más pequeño, contar cuántos hay y cuántos de ellos son pares.
Calcular la suma de los impares. */
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function numerosNaturalesEntreDos() {
  let contador = 0
  let primerNumero = 0
  let segundoNumero = 0
  let sumaImpares = 0
  let sumaPar = 0

  function ingresarNumero() {
    rl.question("Introduce un número: ", function(numeroUsuario) {
      const numero = parseInt(numeroUsuario);

      if (!isNaN(numero)) {
        contador++;
        if (contador == 1) {
          primerNumero = numero;
          segundoNumero = numero;
        } else {
          if (numero < primerNumero) {
            primerNumero = numero;
          }
          if (numero > segundoNumero) {
            segundoNumero = numero;
          }
        }

        if (contador < 2) {
          ingresarNumero();
        } else {
          console.log("Los numeros naturales entre ",primerNumero," y ",segundoNumero," son:");
          for (let i = primerNumero; i <= segundoNumero; i++) {
            console.log(i);
            if (i % 2 == 1) {
              sumaImpares += i
            }
            if (i % 2 == 0) {
                sumaPar += 1
            }
          }
          console.log("Total de números naturales: ",(segundoNumero - primerNumero + 1))
          console.log("Total de números pares: ",sumaPar)
          console.log("Suma de números impares: ",sumaImpares)
          rl.close();
        }
      } else {
        console.log("Debes introducir un número válido.")
        ingresarNumero();
      }
    });
  }

  ingresarNumero();
}

numerosNaturalesEntreDos();

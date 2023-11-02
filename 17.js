/*17.- Imprimir, contar y sumar los múltiplos de 2 que hay entre una serie de números, tal que el
segundo sea mayor o igual que el primero. */
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function multiploDeDosOperaciones() {
  let primerNumero = 0;
  let segundoNumero = 0;
  let contador = 0;
  let suma = 0;

  rl.question("Introduce el primer número: ", function(numero1) {
    rl.question("Introduce el segundo número (debe ser mayor o igual que el primero): ", function(numero2) {
      primerNumero = parseInt(numero1);
      segundoNumero = parseInt(numero2);

      if (!isNaN(primerNumero) && !isNaN(segundoNumero) && primerNumero <= segundoNumero) {
        for (let i = primerNumero; i <= segundoNumero; i++) {
          if (i % 2 === 0) {
            console.log(i)
            contador++
            suma += i
          }
        }

        console.log("Total de múltiplos de 2: " + contador)
        console.log("Suma de los múltiplos de 2: " + suma)
        rl.close()
      } else {
        console.log("El segundo numero no es mayor o igual al primero")
        rl.close()
      }
    });
  });
}

multiploDeDosOperaciones()

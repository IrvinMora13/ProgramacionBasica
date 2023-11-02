/*18.- Hacer un programa que cuente las veces que aparece una determinada letra en una frase
que introduciremos por teclado*/
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function contarLetraEnFrase() {
  rl.question("Introduce una frase:", function(frase) {
    rl.question("Letra a buscar: ", function(letra) {
      const letraBuscada = letra.toLowerCase();
      const fraseMinuscula = frase.toLowerCase();

      let contador = 0
      for (let i = 0; i < fraseMinuscula.length; i++) {
        if (fraseMinuscula[i] == letraBuscada) {
          contador++
        }
      }

      console.log("La letra ",letra," aparece ", contador, "veces en la frase.")
      rl.close();
    });
  });
}

contarLetraEnFrase();

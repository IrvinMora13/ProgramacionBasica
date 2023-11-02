/*22.- Introducir una frase por teclado. Imprimirla cinco veces en filas consecutivas, pero cada
impresión ir desplazada cuatro columnas hacia la derecha. */
const { log } = require('console');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function fraseDesplazada() {
  rl.question("Introduce una frase: ", function(frase) {
    for (let i = 0; i < 5; i++) {
      if (i == 0) {
        console.log(frase);
      }else{
        frase = "    " + frase
        console.log(frase);
      }
    }
    rl.close();
  });
}

fraseDesplazada();

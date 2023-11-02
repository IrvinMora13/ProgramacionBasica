//7.- Introducir tantas frases como queramos y contarlas. 
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let count = 0;

function ingresarFrase() {
  rl.question("Introduce una frase o exit para terminar el programa: ", function(frase) {
    if (frase.toLowerCase() === 'exit') {
      console.log("Numero de frases ingresadas " + count);
      rl.close();
    } else {
        count++;
      ingresarFrase();
    }
  });
}

ingresarFrase();

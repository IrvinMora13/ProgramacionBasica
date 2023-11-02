// 8. Hacer un programa que solo nos permita introducir S o N. 
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function soloSoN() {
  rl.question("Selecciona 'S' o 'N': ", function(respuesta) {
    if (respuesta.toUpperCase() === 'S' || respuesta.toUpperCase() === 'N') {
      console.log("Seleccionaste: ",respuesta);
      rl.close();
    } else {
      console.log("Solo puedes seleccionar 'S' o 'N'.");
      soloSoN();
    }
  });
}

soloSoN();

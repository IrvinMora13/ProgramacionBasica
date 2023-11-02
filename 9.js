//9.- Introducir un número por teclado y que nos diga si es positivo o negativo. 
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function positivoNegativo() {
  rl.question("Introduce un numero: ", function(respuesta) {
    if (!isNaN(respuesta)) {
        if (respuesta > 0) {
        console.log("Es positivo");
        rl.close();
        } 
        else{
            console.log("Es negativo");
            rl.close();
        } 
        if (respuesta == 0) {
            console.log("Seleccionaste 0");
        }
    }else{
        console.log("Debes introducir un numero");
        positivoNegativo();
    }
  });
}

positivoNegativo();

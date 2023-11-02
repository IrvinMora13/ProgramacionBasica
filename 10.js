//10.- Introducir un número por teclado y que nos diga si es par o impar
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function esParImpar() {
  rl.question("Introduce un numero: ", function(respuesta) {
    if (!isNaN(respuesta)) {
        if (respuesta % 2 == 0) {
        console.log("Es par");
        rl.close();
        } 
        else{
            console.log("Es impar");
            rl.close();
        } 
        if (respuesta == 0) {
            console.log("Seleccionaste 0");
        }
    }else{
        console.log("Debes introducir un numero");
        esParImpar();
    }
  });
}

esParImpar();
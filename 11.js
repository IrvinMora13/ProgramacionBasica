//11.- Imprimir y contar los múltiplos de 3 desde el uno hasta un número que introducimos por teclado
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function multi3() {
  rl.question("Introduce un numero: ", function(respuesta) {
    if (!isNaN(respuesta)) {
        let multi = 3
        while (multi <= respuesta) {
            console.log(multi);
            multi +=3
        }  
        rl.close();
    }else{
        console.log("Debes introducir un numero");
        multi3();
    }
  });
}

multi3();
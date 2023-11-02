// 27.- Realizar la tabla de multiplicar de un numero entre 0 y 10
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Numero del 0 y 10 para mostrar la tabla de multiplicar: ", function(numero) {

  if (numero >= 0 && numero <= 10) {
    console.log("Tabla de multiplicar del",numero);
    for (let i = 1; i <= 10; i++) {
      const resultado = numero * i;
      console.log(numero, " x ", i , " = ", resultado);
    }
  } else {
    console.log("Número fuera del rango permitido.");
  }

  rl.close();
});

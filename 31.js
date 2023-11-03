/*31.- Hacer un programa que nos permita introducir un número por teclado y sobre él se realicen
las siguientes operaciones: comprobar si es primo, hallar su factorial o imprimir su tabla de
multiplicar. */
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Ingresa un numero para saber si es primo, encontrar su factorial y tabla de multiplicar: ", function(numero) {
    let factorial = 1;
    if (numero % 2 == 0) {
        console.log(numero, " es par");
    }else{
        console.log(numero, " es impar");
    }
    console.log("Factorial");
    if (numero < 0) {
        console.log("El numero es negativo");
    } else if (numero == 0 || numero == 1) {
        console.log("El factorial es:1");
    } else {
        for (let i = 2; i <= numero; i++) {
            factorial *= i
        }
        console.log("El factorial de ", numero, "es ",factorial);
    }

    console.log("Tabla de multiplicar del",numero);
    for (let i = 1; i <= 10; i++) {
      const resultado = numero * i;
      console.log(numero, " x ", i , " = ", resultado);
    }
  rl.close();
});
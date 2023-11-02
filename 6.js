/*6.- Hacer un programa que imprima todos los números naturales que hay desde el uno hasta un
número que introducimos por teclado. 
Esto fue buscado en internet para encontrar como leer el teclado link= https://es.stackoverflow.com/questions/445091/esperar-respuesta-de-readline-en-un-loop-en-javascript*/
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Introduce un número límite: ", function(numeroUsuario) {
  const numero = parseInt(numeroUsuario);
  let ini = 1
  do{
    if (ini <= numero) {
      console.log(ini);
      ini += 1
    }
  }
  while (numero > 0 && ini <= numero) 
  
  if(numero < 0){
    console.log("No se permiten numeros negativos");
  }

  rl.close();
});

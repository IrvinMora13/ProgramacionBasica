//26.- Introducir una frase por teclado e imprimirla en el centro de la pantalla. 
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Introduce una frase: ', (frase) => {
  const anchoPantalla = process.stdout.columns;
  const espaciosEnBlanco = Math.floor((anchoPantalla - frase.length) / 2);
  const fraseCentrada = ' '.repeat(espaciosEnBlanco) + frase;
  console.log(fraseCentrada);
  rl.close();
});


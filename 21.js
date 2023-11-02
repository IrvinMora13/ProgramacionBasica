/*21.- Hacer un programa que calcule independientemente la suma de los pares y los impares de
los números entre 1 y 1000. */

function sumaParesEImpares() {
    let sumaPar = 0;
    let sumaImpar = 0;
  
    for (let i = 0; i <= 1000; i++) {
      if (i % 2 == 0) {
        sumaPar += i;
      } else {
        sumaImpar += i;
      }
    }
  
    console.log("Suma de números pares: ", sumaPar);
    console.log("Suma de números impares: ",sumaImpar);
  }
  
  sumaParesEImpares();
  
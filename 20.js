//20.- Calcular el factorial de un número, mediante funciones. 
function calcularFactorial(numero) {
    let factorial = 1;
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
  }
  

calcularFactorial(5)
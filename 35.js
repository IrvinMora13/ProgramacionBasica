/*35.- Generar una matriz de 4 filas y 5 columnas con números aleatorios entre 1 y 100, e
imprimirla. */
function generarMatriz() {
    const matriz = [];
  
    for (let i = 0; i < 4; i++) {
      const fila = [];
      for (let j = 0; j < 5; j++) {
        const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
        fila.push(numeroAleatorio);
      }
      matriz.push(fila);
    }
  
    return matriz;
  }
  
  function imprimirMatriz(matriz) {
    for (let i = 0; i < matriz.length; i++) {
      console.log(matriz[i].join("\t"));
    }
  }
  
  const matrizAleatoria = generarMatriz();
  imprimirMatriz(matrizAleatoria);
  
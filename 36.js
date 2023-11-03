/*36.- Generar una matriz de 4 filas y 5 columnas con números aleatorios entre 1 y 100, y hacer su
matriz transpuesta. */
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
  
  function calcularMatrizTranspuesta(matriz) {
    const filas = matriz.length;
    const columnas = matriz[0].length;
    const matrizTranspuesta = [];
  
    for (let j = 0; j < columnas; j++) {
      const filaTranspuesta = [];
      for (let i = 0; i < filas; i++) {
        filaTranspuesta.push(matriz[i][j]);
      }
      matrizTranspuesta.push(filaTranspuesta);
    }
  
    return matrizTranspuesta;
  }
  
  function imprimirMatriz(matriz) {
    for (let i = 0; i < matriz.length; i++) {
      console.log(matriz[i].join("\t"));
    }
  }
  
  const matrizAleatoria = generarMatriz();
  console.log("Matriz Aleatoria:");
  imprimirMatriz(matrizAleatoria);
  
  const matrizTranspuesta = calcularMatrizTranspuesta(matrizAleatoria);
  console.log("\nMatriz Transpuesta:");
  imprimirMatriz(matrizTranspuesta);
  
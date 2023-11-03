/*38.-Ordenar una matriz de M filas y N columnas por la primera columna utilizando el método
SHELL (por inserción). */

function ordenarMatrizPorPrimeraColumna(matriz) {
    const filas = matriz.length;

    for (let gap = Math.floor(filas / 2); gap > 0; gap = Math.floor(gap / 2)) {
      for (let i = gap; i < filas; i++) {
        const temp = matriz[i];
        let j;
        for (j = i; j >= gap && matriz[j - gap][0] > temp[0]; j -= gap) {
          matriz[j] = matriz[j - gap];
        }
        matriz[j] = temp;
      }
    }
    
    return matriz;
  }
  const matriz = [
    [4, 2, 6],
    [1, 8, 3],
    [5, 7, 9],
    [2, 4, 8],
    [3, 6, 1]
  ];
  const matrizOrdenada = ordenarMatrizPorPrimeraColumna(matriz);
  
  console.log("Matriz ordenada por la primera columna:");
  console.log(matrizOrdenada);
  
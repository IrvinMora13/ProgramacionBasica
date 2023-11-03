/*39.- Crear una tabla de 3 paginas, 4 filas y 5 columnas donde el primer elemento valga 1, el
segundo 2, el tercero 3 y así sucesivamente. */

const paginas = 3;
const filas = 4;
const columnas = 5;
let numero = 1;


function generarTabla() {
  for (let pagina = 0; pagina < paginas; pagina++) {
    console.log(`Página ${pagina + 1}:`);
    for (let fila = 0; fila < filas; fila++) {
      const filaActual = [];
      for (let columna = 0; columna < columnas; columna++) {
        filaActual.push(numero);
        numero++;
      }
      console.log(filaActual.join("\t"));
    }
    console.log("\n");
  }
}

generarTabla();

  
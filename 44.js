/*44.- Con el archivo DATOS.DAT listar todos los registros cuyo estado sea uno determinado que
introduciremos por teclado. */
const fs = require('fs');
const readline = require('readline');
const archivoDatos = 'DATOS.DAT';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function listarRegistrosPorEstado(estado) {
  fs.readFile(archivoDatos, 'utf8', (err, data) => {
    if (err) {
      console.error('Error al leer el archivo:', err);
      rl.close();
    } else {
      const lineas = data.split('\n');
      let registrosEncontrados = false;

      console.log(`Registros con estado "${estado}":`);
      for (let i = 0; i < lineas.length; i++) {
        const campos = lineas[i].split(',');
        const estadoRegistro = campos[4].trim();

        if (estadoRegistro === estado) {
          registrosEncontrados = true;
          console.log(lineas[i]);
        }
      }

      if (!registrosEncontrados) {
        console.log(`No se encontraron registros con estado "${estado}".`);
      }

      rl.close();
    }
  });
}

rl.question('Ingrese el estado para listar los registros: ', (estado) => {
  listarRegistrosPorEstado(estado);
});


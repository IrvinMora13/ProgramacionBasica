/*45.- Tenemos el archivo DATOS.DAT con la misma estructura anterior, que esta indexado por el
campo ID. Crear un programa que nos permita consultar un registro siempre que queramos.*/
const fs = require('fs');
const readline = require('readline');
const archivoDatos = 'DATOS.DAT';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function consultarRegistroPorID(id) {
  fs.readFile(archivoDatos, 'utf8', (err, data) => {
    if (err) {
      console.error('Error al leer el archivo:', err);
      rl.close();
    } else {
      const lineas = data.split('\n');
      let registroEncontrado = false;

      for (let i = 0; i < lineas.length; i++) {
        const campos = lineas[i].split(',');
        const idRegistro = parseInt(campos[0], 10);

        if (idRegistro === id) {
          registroEncontrado = true;
          console.log('Registro encontrado:');
          console.log(lineas[i]);
          break;
        }
      }

      if (!registroEncontrado) {
        console.log(`No se encontró un registro con ID ${id}.`);
      }

      rl.question('¿Desea realizar otra consulta? (S/N): ', (respuesta) => {
        if (respuesta.toLowerCase() === 's') {
          consultarNuevoRegistro();
        } else {
          rl.close();
        }
      });
    }
  });
}

function consultarNuevoRegistro() {
  rl.question('Ingrese el ID del registro que desea consultar: ', (id) => {
    id = parseInt(id);
    consultarRegistroPorID(id);
  });
}


consultarNuevoRegistro();

/*43.- Dado el archivo DATOS.DAT, realizar un programa que nos permita realizar modificaciones
cuantas veces deseemos. */
const fs = require('fs');
const readline = require('readline');

const archivoDatos = 'DATOS.DAT';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function realizarModificaciones() {
  rl.question('Ingrese el ID de la entrada que desea modificar: ', (id) => {
    id = parseInt(id);

    fs.readFile(archivoDatos, 'utf8', (err, data) => {
      if (err) {
        console.error('Error al leer el archivo:', err);
        rl.close();
      } else {
        const lineas = data.split('\n');
        let nuevaData = '';

        let entradaEncontrada = false;
        for (let i = 0; i < lineas.length; i++) {
          const campos = lineas[i].split(',');
          const idEntrada = parseInt(campos[0], 10);

          if (idEntrada === id) {
            entradaEncontrada = true;
            rl.question('Ingrese la nueva información (ID, NOMBRE, APELLIDOS, DIRECCIÓN, ESTADO): ', (nuevaInfo) => {
              nuevaData += nuevaInfo + '\n';
              rl.close();
              for (let j = i + 1; j < lineas.length; j++) {
                nuevaData += lineas[j] + '\n';
              }
              fs.writeFile(archivoDatos, nuevaData, (err) => {
                if (err) {
                  console.error('Error al realizar la modificación:', err);
                } else {
                  console.log(`Entrada con ID ${id} modificada con éxito.`);
                }
              });
            });
            break;
          } else {
            nuevaData += lineas[i] + '\n';
          }
        }

        if (!entradaEncontrada) {
          console.log(`No se encontró una entrada con ID ${id}.`);
          rl.close();
        }
      }
    });
  });
}

realizarModificaciones();

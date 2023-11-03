//42.- Hacer un programa que nos permita dar bajas en el fichero DATOS.DAT. 

const fs = require('fs');
const idEntradaABaja = 1; 

const archivoDatos = 'DATOS.DAT';

function darDeBajaEntrada(id) {
  fs.readFile(archivoDatos, 'utf8', (err, data) => {
    if (err) {
      console.error('Error al leer el archivo:', err);
    } else {
      const lineas = data.split('\n');
      let nuevaData = '';

      for (let i = 0; i < lineas.length; i++) {
        const campos = lineas[i].split(',');
        const idEntrada = parseInt(campos[0], 10);

        if (idEntrada !== id) {
          nuevaData += lineas[i] + '\n';
        }
      }

      fs.writeFile(archivoDatos, nuevaData, (err) => {
        if (err) {
          console.error('Error al dar de baja la entrada:', err);
        } else {
          console.log(`Entrada con ID ${id} dada de baja con éxito.`);
        }
      });
    }
  });
}

darDeBajaEntrada(idEntradaABaja);

/*41. Hacer un programa que nos permita dar altas en el archivo DATOS.DAT, cuyos campos son:
ID, NOMBRE, APELLIDOS, DIRECCIÓN y ESTADO*/

const fs = require('fs');

const nuevaEntrada = {
  ID: 1,
  NOMBRE: "Juan",
  APELLIDOS: "Pérez",
  DIRECCIÓN: "Calle Principal",
  ESTADO: "Activo",
};

const nuevaEntradaTexto = `${nuevaEntrada.ID}, ${nuevaEntrada.NOMBRE}, ${nuevaEntrada.APELLIDOS}, ${nuevaEntrada.DIRECCIÓN}, ${nuevaEntrada.ESTADO}\n`;

const archivoDatos = 'DATOS.DAT';

function darDeAltaEntrada() {
  fs.appendFile(archivoDatos, nuevaEntradaTexto, (err) => {
    if (err) {
      console.error('Error al dar de alta la entrada:', err);
    } else {
      console.log('Nueva entrada dada de alta con éxito.');
    }
  });
}

darDeAltaEntrada();

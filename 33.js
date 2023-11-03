/*33.- Hacer un programa que lea las calificaciones de un alumno en 10 asignaturas, las almacene
en y calcule e imprima su media*/

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const calificaciones = [];

function leerCalificacion(numeroAsignatura) {
  if (numeroAsignatura <= 10) {
    rl.question("Ingresa la calificación de la asignatura " + numeroAsignatura + ":", (calificacion) => {
      calificaciones.push(parseFloat(calificacion));
      leerCalificacion(numeroAsignatura + 1)
    });
  } else {
    calcularMedia()
  }
}

function calcularMedia() {
  let sumaCalificaciones = calificaciones.reduce((acumulador, calificacion) => acumulador + calificacion, 0);
  let media = sumaCalificaciones / calificaciones.length;
  console.log("La media de las calificaciones es:",media);
  rl.close();
}

leerCalificacion(1);



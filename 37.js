/*37.-Cargar las notas de los alumnos de un colegio en función del número de cursos y del número
de alumnos por curso. */

const numeroDeCursos = 3;
const alumnosPorCurso = 5;
const notasColegio = [];

for (let curso = 1; curso <= numeroDeCursos; curso++) {
  const notasCurso = [];
  for (let alumno = 1; alumno <= alumnosPorCurso; alumno++) {
    const nota = Math.floor(Math.random() * 101);
    notasCurso.push(nota);
  }
  notasColegio.push(notasCurso);
}

console.log("Notas de los alumnos del colegio:");
for (let curso = 0; curso < notasColegio.length; curso++) {
  console.log(`Curso ${curso + 1}:`);
  for (let alumno = 0; alumno < notasColegio[curso].length; alumno++) {
    console.log(`  Alumno ${alumno + 1}: ${notasColegio[curso][alumno]}`);
  }
}

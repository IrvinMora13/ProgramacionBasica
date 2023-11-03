/*30.- Introducir dos números por teclado y mediante un menú, calcule su suma, su resta, su
multiplicación o su división. */

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calcularOperacion() {
    console.log("Selecciona la operación:");
    console.log("1. Suma");
    console.log("2. Resta");
    console.log("3. Multiplicación");
    console.log("4. División");
    rl.question("Elije una opción (1/2/3/4): ", function(opcion) {
        const operacion = parseInt(opcion);
        switch (operacion) {
            case 1:
                rl.question("Introduce el primer número: ", function(num1) {
                    rl.question("Introduce el segundo número: ", function(num2) {
                        const n1 = parseFloat(num1);
                        const n2 = parseFloat(num2);
                        console.log("Suma:",(n1 + n2));
                        rl.close();
                   });
                 });
            break;
            case 2:
                rl.question("Introduce el primer número: ", function(num1) {
                    rl.question("Introduce el segundo número: ", function(num2) {
                        const n1 = parseFloat(num1);
                        const n2 = parseFloat(num2);
                        console.log("Resta:",(n1 - n2));
                        rl.close();
                   });
                 });
            break;
            case 3:
                rl.question("Introduce el primer número: ", function(num1) {
                    rl.question("Introduce el segundo número: ", function(num2) {
                        const n1 = parseFloat(num1);
                        const n2 = parseFloat(num2);
                        console.log("multuplicacion:",(n1 * n2));
                        rl.close();
                   });
                 });
            break;
            case 4:
                rl.question("Introduce el primer número: ", function(num1) {
                    rl.question("Introduce el segundo número: ", function(num2) {
                        const n1 = parseFloat(num1);
                        const n2 = parseFloat(num2);
                        if (n2 !== 0) {
                            console.log("Division:",(n1 / n2));
                            rl.close();
                        } else {
                            console.log("No se puede dividir por cero.");
                            rl.close();
                        }
                   });
                 });
            break;
            default:
            console.log("Opción no válida.");
        }
    });
}

calcularOperacion();

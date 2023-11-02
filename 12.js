/*12.- Hacer un programa que imprima los números del 1 al 100 y que calcule la suma de todos los
números pares por un lado, y por otro, la de todos los impares. */

function sumaParImpar() {
    let ini = 0
    let sumaPar = 0
    let sumaImpar = 0
    while (ini <= 100) {
        console.log(ini);
        if (ini % 2 == 0) {
            sumaPar += ini
            ini += 1
        }else{
            sumaImpar += ini
            ini += 1
        }
    }
    console.log("La suma de los numeros par es: ",sumaPar);
    console.log("La suma de los numeros Impar es: ",sumaImpar);
}

sumaParImpar()
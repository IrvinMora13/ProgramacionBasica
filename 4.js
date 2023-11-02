//4.- Hacer un programa que imprima la suma de los 100 primeros números.
function suma100() {
    let ini = 0
    let suma = 0
    while (ini <= 100) {
        if (ini >=0 && ini <= 100) {
            suma += ini
            ini += 1
        }
    }
    console.log(suma);
}

suma100()
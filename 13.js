//13.- Imprimir y contar los números que son múltiplos de 2 o de 3 que hay entre 1 y 100

function contar2o3() {
    let ini = 1;
    let suma2 = 0;
    let suma3 = 0;
    
    while (ini <= 100) {
        if (ini % 2 == 0) {
            suma2 += ini;
        }
        if (ini % 3 == 0) {
            suma3 += ini;
        }
        console.log(ini);
        ini += 1;
    }
    console.log("La suma de los numeros 2 es: ",suma2);
    console.log("La suma de los numeros 3 es: ",suma3);
}

contar2o3()
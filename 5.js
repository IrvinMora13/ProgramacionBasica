/*5.-Hacer un programa que imprima los números impares hasta el 100 y que imprima cuantos
impares hay. */
function imparesAndCount() {
    let numero = 0
    let count = 0
    while (numero >=0 && numero <= 100 ) {
        if (numero % 2 == 1) {
            console.log(numero);
            numero += 1
            count += 1
        }
        numero += 1
    }
    console.log("Cantidad de numeros impares son: ",count);
}

imparesAndCount()
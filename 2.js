//2.- Hacer un programa que imprima los números del 100 al 0, en orden decreciente. 
function print100dec(ini) {
    while (ini >= 0) {
        if (ini >=0 && ini <= 100) {
            console.log(ini);
        }
        ini -= 1
    }
}

print100dec(100)
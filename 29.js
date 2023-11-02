// 29.- Simular cien tiradas de dos dados y contar las veces que entre los dos suman 10. 

function lanzarDados() {
    let contador = 0;

    for (let i = 0; i < 100; i++) {
        let dado1 = Math.floor(Math.random() * 6) + 1; // Tirada del primer dado (números del 1 al 6)
        let dado2 = Math.floor(Math.random() * 6) + 1; // Tirada del segundo dado (números del 1 al 6)
        
        if (dado1 + dado2 == 10) {
        contador++;
        }
    }

    console.log("Numero de veces que suman 10: ", contador);
        
}

lanzarDados()
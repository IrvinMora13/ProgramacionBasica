//25.- Introducir un número menor de 5000 y pasarlo a numero romano
function NumeroRomano(numero) {
    if (numero < 1 || numero >= 5000) {
      return "El numero es demasiado grande o pequeño";
    }
    const valoresRomanos = [
      ["M", 1000],
      ["CM", 900],
      ["D", 500],
      ["CD", 400],
      ["C", 100],
      ["XC", 90],
      ["L", 50],
      ["XL", 40],
      ["X", 10],
      ["IX", 9],
      ["V", 5],
      ["IV", 4],
      ["I", 1]
    ];
  
    let numeroRomano = "";
  
    for (const [romano, valor] of valoresRomanos) {
      while (numero >= valor) {
        numeroRomano += romano;
        numero -= valor;
      }
    }
  
    return numeroRomano;
  }
  
  console.log(NumeroRomano(1500));
  
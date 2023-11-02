// 28.- Simular el lanzamiento de una moneda al aire e imprimir cara o cruz. 
function lanzarMoneda() {
    const resultado = Math.random();
  
    if (resultado < 0.5) {
      console.log("Cara");
    } else {
      console.log("Cruz");
    }
  }
  
  lanzarMoneda();
  
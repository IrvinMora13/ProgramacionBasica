/*40.- Una empresa guarda las ventas realizadas por sus tres representantes a lo largo de doce
meses de sus cuatro productos, VENTAS( representante, mes, producto ). Queremos proyectar el
total de ventas, TOTAL ( mes, producto ), para lo cual sumamos las ventas de cada producto de
cada mes de todos los representantes. Imprimir toda la información. */

const ventas = [
    { representante: "R1", mes: 1, producto: "A", cantidad: 100 },
    { representante: "R1", mes: 2, producto: "A", cantidad: 150 },
    { representante: "R3", mes: 12, producto: "D", cantidad: 80 },
  ];
  

const totalVentas = {};

ventas.forEach((venta) => {
const { mes, producto, cantidad } = venta;
    if (!totalVentas[mes]) {
      totalVentas[mes] = {};
    }
    if (!totalVentas[mes][producto]) {
      totalVentas[mes][producto] = 0;
    }
    totalVentas[mes][producto] += cantidad;
  });

console.log("Total de ventas por mes y producto:");
for (const mes in totalVentas) {
    for (const producto in totalVentas[mes]) {
      console.log(`Mes ${mes}, Producto ${producto}: ${totalVentas[mes][producto]}`);
    }
}
  
// 8. Búsqueda de elementos en un arreglo: 
// Crea un arreglo de nombres y dada una cadena con un nombre,  verifica si ese nombre está presente en el arreglo y muestra un mensaje apropiado.
const nombres = ["Alan","Luis","Airam","Violeta","Dulce","Lucas"];
const buscarNombre = "Luis";
if (nombres.includes(buscarNombre)) {
  console.log("8. El nombre '"+buscarNombre+"' está presente en el arreglo");
} else {
  console.log("8. El nombre '"+buscarNombre+"' no está presente en el arreglo");
}
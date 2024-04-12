function saludar(nombre) {
  return ` Hola ${nombre}`
}

// invocar la funcion
console.log(saludar('Juan'))
saludar("Emerson")
saludar("Eisten")

// creando funciones como clases
function Inventario(nombre) {
  this.nombre = nombre;
  this.articulos = [];
}
Inventario.prototype.getNombre = function () {
  return this.nombre;
}
Inventario.prototype.getArticulos = function (articulo, cantidad) {
  this.articulos[articulo] = cantidad;
}




const miArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// función sin flecha 
miArray.forEach(function (item, index) {
  console.log("El valor de la posición " + index + " es:  " + item);
});

// función con flecha 
miArray.forEach((item, index) => {
  console.log(` El valor de la posición ${index} es:  ${item}`);
})

// otro ejemplos con libros 
const libros = {
  titulo: "Aprendiendo JavaScript",
  autor: "Emerson Espinoza",
  edicion: 2019,
  precio: 1000
}
const props = Object.getOwnPropertyNames(libros);
props.forEach(name => {
  let valor = Object.getOwnPropertyDescriptor(libros, name).value;
  console.log(`la prop ${name} contiene:  ${valor}`);
})

// ahora con for in
for (let prop in libros) {
  console.log(`la prop ${prop} contiene:  ${libros[prop]}`);
}
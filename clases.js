// objeto es: colección de variables
// variables son propiedades 
// y los metodos son funciones

const libro = {
  titulo: "Aprendiendo JavaScript",
  autor: "Emerson Espinoza",
  numPaginas: 100,
  editorial: "emersonimprent",
  edicion: 2019,
  precio: 1000,
  leer: function () {
    console.log("he leido el libro")
  }
}

// acceder al objeto
libro.titulo
libro["numPaginas"]
libro.titulo = "Desarollo web con React"

// comparando cuando tienen mismas propiedades 
const conche1 = { marca: "tesla", modelo: "X" }
const conche2 = { marca: "tesla", modelo: "X" }
// acceder a esto y comparar
conche1 === conche2 // false 
conche1.marca === conche2.marca  // true

// raiz cuadrada de un array 
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let raices = array.map(function (a) { return Math.sqrt(a) })
console.log(raices)

// ahora usando raiz cuadrada con array function 
let miarrayy = [2, 3, 4, 5]
let raices2 = miarrayy.map((item) => Math.sqrt(item))
console.log(raices2)

// filtrar multiplos de de 3
let miarreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
let resultado = miarreglo.filter(item => item % 2 === 0 && item % 3 === 0)

console.log(resultado)

// trosear array partirlos
let separar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
let resultado2 = separar.slice(15)
console.log(resultado2)
let resultado3 = separar.slice(8, -10)
console.log(resultado3)


// clase string 
"javascript"[2]
"javascript".charAt(2)
"javascript".charCodeAt(2)
"javascript".indexOf("a")
"javascript".lastIndexOf("a")
"javascript".substring(2)
"javascript".substring(2, 5)
"javascript".toLowerCase()
"javascript".toUpperCase()
"javascript".trim()
"javascript".replace("a", "b")
"javascript".match(/a/)
"javascript".match(/a/)[0]
"javascript".match(/a/)[1]
"javascript".match(/a/)[2]
"javascript".match(/a/)[3]
"javascript".split(" ")
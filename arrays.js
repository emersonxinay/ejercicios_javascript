// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

// const obj = {
//   unArray: new Array(1000)
// }
// const unArray = obj.unArray;

// for (let i = 0; i < array.length; i++) {
//   console.log(array[i])
// }


// ejemplos 2- funciones : 
const obj = {
  unArray: new Array(10000)
}
function badPerformance() {
  console.time("bad");
  for (let i = 0; i < obj.unArray.length; i++) {
    obj.unArray[i] = 'Hola';

  }
  console.timeEnd("bad");
}
function goodPerformance() {
  console.time('good');
  let unArray = obj.unArray;
  for (let i = 0, longitud = unArray.length; i < longitud; i++) {
    unArray[i] = 'Hola';
  }
  console.timeEnd('good');
}

// llamando a las funciones 
badPerformance();
goodPerformance();

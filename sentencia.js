// sentencia if 
let operacion = 800;
if (operacion >= 18 && operacion <= 100) {
  console.log('Es mayor de edad')
}
else if (operacion <= 18 && operacion >= 0) {
  console.log('Eres menor de edad')
}
else {
  console.log('ya no existes o aun no existes en este mundo')
}

// sentencia switch 
let edad = 18;
switch (edad) {
  case 18:
    console.log('Es mayor de edad')
    break;
  case 0:
    console.log('Eres menor de edad')
    break;
  default:
    console.log('ya no existes o aun no existes en este mundo')
    break;
}

// sentencia while
let contador = 1;
while (contador <= 10) {
  console.log(contador);
  contador++;
}
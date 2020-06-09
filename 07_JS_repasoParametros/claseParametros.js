// Enviar parametros
// Parametros -> Datos que enviamos a una función

// Función -> Conjunto de instrucciones

function nombreFuncion (/* PARAMETROS */) {
  // Aquí va el conjunto de instrucciones
}


// Funcion que saque el doble de un número
// Yo te voy a dar un número
// La función me va a decir cual es el doble del número
function dobleDelNumero(numero) {
  let doble = numero*2
  return doble
}
console.log('el doble de 3 es', dobleDelNumero(3))
/*-----------------------------------------------------*/

// Función que me regrese el producto de 2 números
function producto(numero, numero2) {
  let resultado = numero * numero2
  return resultado
}
console.log(producto(12, 6)) // 72


/*--------------------------------------------------*/
// funcion que obtenga el cubo de un numero
function cubo(numero) {
  let respuesta = numero * numero * numero
  return respuesta
}
console.log('el cubo de 5 es:', cubo(5))
/*----------------------------------------------------*/

let numeroAleatorio = Math.floor(Math.random() * 10)

console.log(numeroAleatorio, cubo(numeroAleatorio))

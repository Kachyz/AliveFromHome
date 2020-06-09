// Recibir una cadena de texto como parametro
function saludar(nombre) {
  console.log('Hola ' + nombre)
}

saludar("Kachyz")
saludar("Juan")


// Recibir un número
function duplicar(numero) {
  let total = numero * 2
  return total
}

console.log('el doble de 6 es ' + duplicar(6))

// Multiples parametros
function imprimeNLineas(cantidad, texto) {
  for(let i=0; i < cantidad; i++) {
    console.log(i + texto)
  }
}

imprimeNLineas(8, "Veamos que pasa")
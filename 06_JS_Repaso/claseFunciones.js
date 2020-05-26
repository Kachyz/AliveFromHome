let numero1 = 0
let numero2 = 0





function suma() {
  // numero1 = 0 + 0
  numero1 = numero1 + numero2

  let botonSuma = document.getElementById("numero1").value
  console.log('botonSuma = ', botonSuma)
  let resultado = 8
  // resultado = 0 + 0
  resultado = numero1 + numero2
  document.getElementById("resultado").innerHTML = resultado
}









function resta(){
  numero1 = numero1 - numero2

  let botonResta = document.getElementById("numero1").innerHTML = numero1
}

function multiplicacion() {
  numero1 = numero1 * numero2

  let botonMultiplicacion = document.getElementById("numero1").innerHTML = numero1
}

function division() {
  numero1 = numero1 / numero2

  let botonDivision = document.getElementById("numero1").innerHTML = numero1
}
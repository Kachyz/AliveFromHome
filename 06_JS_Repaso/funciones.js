function sumar() {
  let primerNumero = +document.getElementById("n1").value
  let segundoNumero = parseInt(document.getElementById("n2").value)

  document.getElementById("resultado").innerHTML = primerNumero + segundoNumero
}

function restar() {
  let primerNumero = +document.getElementById("n1").value
  let segundoNumero = +document.getElementById("n2").value

  document.getElementById("resultado").innerHTML = primerNumero - segundoNumero
}

function multiplicar() {
  let primerNumero = +document.getElementById("n1").value
  let segundoNumero = +document.getElementById("n2").value

  document.getElementById("resultado").innerHTML = primerNumero * segundoNumero
}

function dividir() {
  let primerNumero = +document.getElementById("n1").value
  let segundoNumero = +document.getElementById("n2").value

  let resultado = "ERROR!"

  if(segundoNumero !== 0)
    resultado = primerNumero / segundoNumero

  document.getElementById("resultado").innerHTML = resultado
}
function inicio() {
  let numeroGanador = Math.floor(Math.random() * 10);
  console.log(numeroGanador)
  let mensaje = 'Has perdido!!';
  for(let fallos=0; fallos<3; fallos++) {
    let intento = prompt("Adivina el número!! :D");
    if (intento != numeroGanador) {
      alert('ERROR!!');
    } else {
      mensaje = 'has ganado!!';
      break
    }
  }
  alert(mensaje);
}
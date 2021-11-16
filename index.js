var numero = parseInt(prompt('Informe um número positivo.'))

function listaDecrescente(numero) {
  while (numero >= 0) {
    document.write(numero + '<br>')
    numero--
  }
}
listaDecrescente(numero)

function fizz(numero) {
  var contador = 1
  while (contador <= numero) {
    if (contador % 3 == 0) {
      document.write('fizz' + '<br>')
    } else {
      document.write(contador + '<br>')
    }
    contador++
  }
}
fizz(numero)

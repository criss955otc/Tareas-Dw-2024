function multiplicador() {
  var valor1 = document.getElementById("inputnum1").value;
  var valor2 = document.getElementById("inputnum2").value;
  var resultado = valor1 * valor2;
  document.getElementById("result").textContent = resultado;
}

function sumar() {
  var valor1 = parseFloat(document.getElementById("inputnum1").value);
  var valor2 = parseFloat(document.getElementById("inputnum2").value);
  var resultado = valor1 + valor2;
  document.getElementById("result").textContent = resultado;
}

function resta() {
  var valor1 = document.getElementById("inputnum1").value;
  var valor2 = document.getElementById("inputnum2").value;
  var resultado = valor1 - valor2;
  document.getElementById("result").textContent = resultado;
}

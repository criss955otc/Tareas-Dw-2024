const formulario = document.getElementById("formu");
document.addEventListener("submit", function (event) {
  event.preventDefault();

  const temperatura = document.getElementById("temperatura").value;
  const desde = document.getElementById("desde").value;
  const hasta = document.getElementById("hasta").value;
  const resultado = convertirTemperatura(temperatura, desde, hasta);

  mostrarResultado(resultado, hasta);
});

function convertirTemperatura(temperatura, desde, hasta) {
  let temp;

  switch (desde) {
    case "Celsios":
      temp = temperatura;
      break;
    case "Fahrenheit":
      temp = ((temperatura - 32) * 5) / 9;
      break;
    case "Kelvin":
      temp = temperatura - 273.15;
      break;
  }

  let resultado;
  switch (hasta) {
    case "Celsios":
      resultado = temp;
      break;
    case "Fahrenheit":
      resultado = (temp * 9) / 5 + 32;
      break;
    case "Kelvin":
      resultado = temp + 273.15;
      break;
  }

  return resultado;
}

function mostrarResultado(resultado, unidad) {
  const Resul = document.getElementById("result");
  Resul.innerHTML = resultado + "º " + unidad;
}

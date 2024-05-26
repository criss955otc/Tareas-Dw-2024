document.getElementById("ingreso_datos")
document.addEventListener("submit", function(event) {
    event.preventDefault();

    const filas = document.getElementById("filas").value;
    const columnas = document.getElementById("columnas").value;

    cuadricula(filas, columnas);
  });

function cuadricula(filas, columnas) {
  const seccion = document.getElementById("cuadricula");
  const table = document.createElement("table");

  for (let i = 0; i < filas; i++) {
    const tr = document.createElement("tr");
    for (let j = 0; j < columnas; j++) {
      const td = document.createElement("td");
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }

  seccion.appendChild(table);
}


const boton = document.getElementById("generar");
boton.addEventListener("click", tableroA);


function tableroA() {
  const seccion = document.getElementById("tablero");
  const tabla = document.createElement("table");
  let contador = 0

  for (let i = 0; i < 8; i++) {
    const filas = document.createElement("tr");
    for (let j = 0; j < 8; j++) {
      const colum = document.createElement("td");
      filas.appendChild(colum);
      let sum = i + j;

      if (sum % 2 == 0) {
        colum.style.backgroundColor = "rgb(86, 83, 83)";
      }
      contador++;

      // colum.innerText = contador;

      colum.onclick = function(){
        var imagen = document.createElement("img");
        imagen.src = "img/My_first_design_1-removebg-preview-(1).png";
        colum.appendChild(imagen);        
      }
      
    }
    
    tabla.appendChild(filas);
  }
  seccion.appendChild(tabla);
}


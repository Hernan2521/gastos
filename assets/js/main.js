var gastoTotal = 0; 

function asignarEventos() {
  var txtPresupuesto = document.getElementById("txtPresupuesto");
  var parrafoPresupuesto = document.getElementById("parrafoPresupuesto");
  var parrafoGasto = document.getElementById("parrafoGasto");
  var parrafoSaldo = document.getElementById("parrafoSaldo");


  var btnCalcular = document.getElementById("btnCalcular");
  btnCalcular.addEventListener("click", function() {
    var presupuesto = parseFloat(txtPresupuesto.value);
    parrafoPresupuesto.textContent = presupuesto.toFixed(0);

    var saldo = presupuesto - gastoTotal;
    parrafoSaldo.textContent = "$" + saldo.toFixed(0);
  });

  
  var btnAnadirGasto = document.getElementById("btnAnadirGasto");
  btnAnadirGasto.addEventListener("click", function() {
    var nombreGasto = document.getElementById("txtNombreGasto").value;
    var cantidadGasto = parseFloat(document.getElementById("txtCantidadGasto").value);

    if (cantidadGasto >= 0) {
      gastoTotal += cantidadGasto;
      parrafoGasto.textContent = "$" + gastoTotal.toFixed(0);

      var presupuesto = parseFloat(parrafoPresupuesto.textContent);
      var saldo = presupuesto - gastoTotal;
      parrafoSaldo.textContent = "$" + saldo.toFixed(0);

      
      var registrosDiv = document.querySelector(".fondoRegistro2 .container");
      var nuevoRegistro = document.createElement("div");
      nuevoRegistro.className = "row";
      nuevoRegistro.innerHTML = `
        <div class="col-md-4">
          <p class="gasto-nombre">${nombreGasto}</p>
        </div>
        <div class="col-md-4">
          <p class="gasto-resultado">$${cantidadGasto.toFixed(0)}</p>
        </div>
        <div class="col-md-4">
          <button class="eliminar-gasto">Eliminar</button>
        </div>
      `;
      registrosDiv.appendChild(nuevoRegistro);

 
      var btnEliminar = nuevoRegistro.querySelector(".eliminar-gasto");
      btnEliminar.addEventListener("click", function() {
        var gastoEliminado = parseFloat(nuevoRegistro.querySelector(".gasto-resultado").textContent.substring(1));
        nuevoRegistro.remove();
        gastoTotal -= gastoEliminado;
        parrafoGasto.textContent = "$" + gastoTotal.toFixed(0);
        var presupuesto = parseFloat(parrafoPresupuesto.textContent);
        var saldo = presupuesto - gastoTotal;
        parrafoSaldo.textContent = "$" + saldo.toFixed(0);
      });

  
      document.getElementById("txtNombreGasto").value = "";
      document.getElementById("txtCantidadGasto").value = "";
    } else {
      alert("La cantidad del gasto no puede ser un número negativo.");
    }
  });
}


window.onload = asignarEventos;

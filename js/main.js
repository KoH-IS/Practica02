
function obtenerDatos(){
  var titulo =document.getElementById("Titulo").value;
  var texto =document.getElementById('Texto').value;

      
      document.registro.obtenerTitulo.value = titulo;
      document.registro.obtenerTexto.value = texto;

    }

    function cambiarColorTexto() {
      document.registro.obtenerTexto.style.color = "orange";
    }

    function cambiarColorTitulo() {
      document.registro.obtenerTitulo.style.color = "white";
    }

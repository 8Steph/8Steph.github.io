document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
  });
  
  function validarFormulario(evento) {
    evento.preventDefault();
    var usuario = document.getElementById('usuario').value;
    if(usuario.length < 4) {
      alert('El usuario debe contener mínimo 4 caracteres');
      return;
    }

    var nombre = document.getElementById('nombre').value;
    if(nombre.length == 0) {
      alert('Por favor ingrese el nombre');
      return;
    }

    var password = document.getElementById('password').value;
    if(password.length < 6) {
      alert('la contraseña debe conteneder mínimo 6 caracteres');
      return;
    }


    var password2 = document.getElementById('password2').value;
    if (password2 != password) {
      alert('No coincide con la contraseña anterior');
      return;
    } 
  

    var correo = document.getElementById('correo').value;
    if (correo == "") {
        alert('Ingrese un correo valido');
        return;
    }

    var telefono = document.getElementById('telefono').value;
    telefono = validarNumero(telefono);
    if (telefono == "") {
        alert('Debe ingresar un número');
        return;
    }

    var consulta = document.getElementById('consulta').value;
    if(consulta.length > 200) {
      alert('El comentario debe ser máximo de 200 caracteres');
      return;
    }
    
    this.submit();
    alert("Su consulta ha sido enviada con éxito");

  }

 
  function validarNumero(valor){
      valor = parseInt(valor)
      if (isNaN (valor)){
          return ""
      }
      else {
          return valor
      }
  }
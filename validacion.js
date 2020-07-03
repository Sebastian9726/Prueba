window.onload = iniciar;

function iniciar() {
    document.getElementById("enviar").addEventListener('click', validar, false);
}

function validaNombre() {
    var elemento = document.getElementById("nombre");
    console.log(elemento)
    if (!elemento.checkValidity()) {
        if (elemento.validity.valueMissing) {
            error2(elemento, "Debe introducir un nombre")
        }
        if (elemento.validity.patternMismatch) {
            error2(elemento, "El nombre debe tener entre 2 y 15 caracteres");
        }
        //error(elemento);
        return false;
    }
    return true;
}

function validaCorreo(correo) {
    var elemento = document.getElementById("email");
    if (!elemento.checkValidity()) {
        if (elemento.validity.valueMissing) {
            error2(elemento, "Debe introducir un Correo")
        }
              re=/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
               if(!re.exec(elemento)){
                error2(elemento, "Email no valido")
            }
            
        return false;
    }
    return true;
}

function validaTelefono() {
    var elemento = document.getElementById("telefono");
    if (!elemento.checkValidity()) {
        if (elemento.validity.valueMissing) {
            error2(elemento, "Debe introducir un teléfono")
        }
        if (elemento.validity.patternMismatch) {
            error2(elemento, "El telefono debe tener 9 numeros");
        } //error(elemento);
        return false;
    }
    return true;
}



function validar(e) {
  
 
   borrarError(); 
    /* confirm("Pulsa aceptar si deseas enviar el formulario") */
   if (validaNombre() && validaCorreo() && validaTelefono()) {
    var name = document.getElementById("nombre")
    var iden = document.getElementById("telefono")
    var correo = document.getElementById("email")
        let users = Array({
            usuario: name.value,
            identificacion: iden.value,
            correo: correo.value
        }
        );
        window.location.href = "/historial.html";
       localStorage.setItem('Usuario', JSON.stringify(users))

    }
      else {
       
        return false;
    }   
    e.preventDefault();
}

function error(elemento) {
    document.getElementById("mensajeError").innerHTML = elemento.validationMessage;
    elemento.className = "error";
    elemento.focus();
}

function error2(elemento, mensaje) {
    document.getElementById("mensajeError").innerHTML = mensaje;
    elemento.className = "error";
    elemento.focus();
}

function borrarError() {
    var formulario = document.forms[0];
    for (var i = 0; i < formulario.elements.length; i++) {
        formulario.elements[i].className = "";
    }
}


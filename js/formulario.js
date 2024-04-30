//valida datos del formulario
function validarFormulario() {
     console.log("hola");
     let nombre = document.getElementById("Nombre").value.trim()
     let apellido = document.getElementById("Apellido").value.trim()
     let edad = document.getElementById("Edad").value.trim()
     let correo = document.getElementById("Correo_electronico").value.trim()
    
     let incompleto = false;

     Nombre.style.borderColor = "#8d8b8b";
     Apellido.style.borderColor = "#8d8b8b";
     Edad.style.borderColor = "#8d8b8b";
     Correo_electronico.style.borderColor = "#8d8b8b";
     

   


     if (nombre === "") {
         marcarIncompleto(Nombre);
     }

     if (apellido === "") {
        marcarIncompleto(Apellido);
     }

     if (edad === "") {
         marcarIncompleto(Edad);
     }

     if (correo === "") {
         marcarIncompleto(Correo_electronico);
     }

    


     if (incompleto === true) {
         alert("Complete el formulario")
         return false;
     }


     function marcarIncompleto(item) {
         item.style.borderColor = "red";
         incompleto = true;
     }


    return true;

}


document.addEventListener("DOMContentLoaded", function() {
    const botonBorrar = document.querySelector("#res");
  
  
    botonBorrar.addEventListener("click", function() {
        Nombre.style.borderColor = "#8d8b8b";
     Apellido.style.borderColor = "#8d8b8b";
     Edad.style.borderColor = "#8d8b8b";
     Correo_electronico.style.borderColor = "#8d8b8b";
     
      
       
    });
  });
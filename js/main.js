const btnGuardar = document.getElementById("guardarNombre");
const txtNombre = document.getElementById("Nombre");
const alertValidaciones = document.getElementById("alert")

btnGuardar.addEventListener("click",function(event){
    event.preventDefault();
       if(txtNombre.value.length<3){
        alertValidaciones.innerHTML="El nombre no es correcto";
        alertValidaciones.style.display="block";
        return false;
       }
    
    //Almacenar de manera local al navegador
       localStorage.setItem("Nombre", txtNombre.value);
})

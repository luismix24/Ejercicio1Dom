const guardarNombre = document.getElementById("guardarNombre");
const txtNombre = document.getElementById("nombre");
const alertValidaciones = document.getElementById("alert")

guardarNombre.addEventListener("click",function(event){
    event.preventDefault();
    alertValidaciones.innerHTML="";
    alertValidaciones.style.display="none";
       if(txtNombre.value.length<3){
        alertValidaciones.innerHTML="El nombre no es correcto";
        alertValidaciones.style.display="block";
        return false;
       }
    
    //Almacenar de manera local al navegador
       localStorage.setItem("nombre", txtNombre.value);
})

// primero la captura del elemento que capturara 
const btnLogin = document.querySelector("#btn-login");
//-------------------------------------------------

//la funcion y el evento
btnLogin.onclick = function(event){
    event.preventDefault ();

    const inputs = document.querySelectorAll("input");
    //insertar unvalor una claor a almacenar al localstorage

    inputs.forEach((input)=>{
        console.log(inputs)
        localStorage.setItem(input.name,input.value);
    })
    login();

}

//esta es la forma de capturar del local Storage
const email = localStorage.getItem("email");
const password = localStorage.getItem("password");

function login(){
    const email = localStorage.getItem("email");
    const password = localStorage.getItem("password");
    form.style.display = "none";
    usuarioSection.style.display = "block";
    titleEmail.innerHTML = email;
    titlePassword.innerHTML = password;
    
}

const form = document.querySelector("#section-login");
const titleEmail = document.querySelector("#email");
const titlePassword = document.querySelector("#password");

const btnCerrarSesion = document.querySelector("#cerrar-sesion");
const usuarioSection = document.querySelector("#usuario-logged");

if(email !== null && password !== null){
    //el usuario ya esta logeado
    //si el usuario esta logeado va ocultar el form
}else{
    usuarioSection.style.display = "none";
}
btnCerrarSesion.onclick = function(){
    //vamos a eliminar las variables del local storage
    localStorage.clear();

    form.style.display = "block";
    usuarioSection.style.display = "none";
    
}
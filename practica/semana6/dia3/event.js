

const btnPrueba = document.querySelector("#btn-prueba");

// atrape el boton
btnPrueba.onclick = function(){
    console.log("click desde el boton");
    console.log(event);
    Swal.fire("hola mundo")
}


// const btnPregunta = document.querySelector("#btn-pregunta");
// btnPregunta.onclick = function(){
//     Swal.fire(
//         'The Internet?',
//         'That thing is still around?',
//         'question'
//       )
// }


function showAlert(icon,title,text){
    Swal.fire({
        icon,
        title,
        text,
        footer:"<a href='https://www.google.com/'> link de footer "
    })
}




 const btnError = document.querySelector("#btn-error");
 btnError.onclick = function(){
     showAlert("error","hubo un error","email or password erroneos")
    
 }

 const btnWarning = document.querySelector("#btn-warning");

 btnWarning.onclick = function(){
     showAlert("warning","ALERTA PELIGRO","Peligro esta cerca")
    
 }



// const btnWarning = document.querySelector("#btn-warning");
// btnWarning.onclick = function(){
//     Swal.fire("Alerta de peligo");
// }

// const btnSuccess = document.querySelector("#btn-success");
// btnSuccess.onclick = function(){
//     Swal.fire({
//         position: 'top-end',
//         icon: 'success',
//         title: 'Your work has been saved',
//         showConfirmButton: false,
//         timer: 1500
//       })
// }


const btnAlertBotones = document.querySelector("#btn-alert-botones");
btnAlertBotones.onclick = function(){
    Swal.fire({
        title:"Alert",
        text: "texto de alerta",
        showDenyButton: true,
        showCancelButton:true,
        confirmButtonText: "guardas",
        denyButtonText: "negar"
    }).then((resultado)=>{
        console.log("resultado",resultado);
        if(resultado.isConfirmed){
            showAlert("success","confirmado","se confirmo la operacion")
            console.log("marco la confirmacion")
        }
        if(resultado.isDenied){
            showAlert("error","negado","se nego la operacion")
            console.log("nego la operacion")
        }
        if(resultado.isDismissed){
            showAlert("warning","Cancelado","se cancelo la operacion")
            console.log("se cancelo la operacion")


        }
    })
}

const btnAlertaImagen = document.querySelector("#btn-alerta-imagen");
const urlPortafolio= "https://i.postimg.cc/9QxZz1Jj/page-person.png"

btnAlertaImagen.onclick = function(){
    Swal.fire({
        title: "Potafolio",
        text: "Alerta con imagen",
        imageUrl: urlPortafolio,
        imageWidth : 200,
        imageHeight : 200,
    })
}

const btnAlertCustom = document.querySelector("#btn-alerta-custom");

btnAlertCustom.onclick = function(){
    Swal.fire({
        title: "cuntom Alert",
        text: "Alerta personalizada",
        background: `url(${urlPortafolio})`,
        color: "#fff",
        backdrop:'rgba(0,0,0,0,3)url(https://media.giphy.com/media/l2ZE0926SJlGc11Ek/giphy.gif)',
    })
}


const btnAlertinputs = document.querySelector("#btn-alerta-inputs");

btnAlertinputs.onclick = function(){
    Swal.fire({
        title: "input para Email",
        input: "email", //tipo de imput (number,text,email,etc.)
        inputLabel: "ingrese su correo",
        inputPlaceholder : "el correo debe ser valido",
    }).then((resultado)=>{
        //obtengo el resultado de lo uqe escribio el usuaio
        console.log(resultado.value)
    })
}

const paises = document.querySelector("#select-options");
// onchange sirve para detectar si hay un cambio en el elemnto

paises.onchange = function(event){
    //de evento quiero capturar el value y option
    const{value,options} = event.target;
    
    console.log("valor de value",value)
    const index = options.selectedIndex;

    console.log("index", index);
    console.log("texto",options[index].text);
}

const usurio = {
    nombre: "kevin",
    apellido: "morillo",
    edad: 30,
    direccion: {
        calle: "calle siempre viva",
        numero: 123,
        ciudad: "lima"
    }
}


//nosotros podemos destructurar

const{nombre,apellido,edad,direccion} = usurio;

console.log(nombre,direccion)
// existe dentro de js en docuemnt ...este atributo me permite obtenmer elementos de html

//para obtener elementos segun el nombre de su eqtiqueta
//tag= etiqueta en ingles
//h1-div-div


// const inputs=document.getElementsByTagName("input")
// console.log("input",inputs);

// //para poder recorrer elñ html collection tenemos que convertilo a array
// //array.from esto convierte un html collection a un arrays.

// //convertir un html a array
// const newInputs = Array.from(inputs);
// console.log("newinputs", newInputs)

// //bucle map
// newInputs.map((newInput)=>{
//     console.log("nueva forma", newInput.value)
// })

// //bucle for
// for(let i = 0; i < inputs.length; i++){
//     console.log("input", inputs[i].value);
// }


// const password = document.getElementById("input_password")

// console.log ("password",password)


// //vamos a acceder al elentos seleccionada al id el value

// password.style.backgroundColor = "#000";
// password.style.color = "#fff";
// password.style.fontFamily ="arial"
// password.style.fontSize = "50px"




// const nombre = document.getElementById("nombre")

// console.log ("name",nombre)

// nombre.style.backgroundColor = "red";
// nombre.style.color = "#000";
// nombre.style.fontFamily ="arial"
// nombre.style.fontSize = "50px"




// const from = document.getElementById("from")

// console.log ("from",from)


// from.style.backgroundColor = "pink";



// const input_email = document.getElementById("input_email")

// console.log ("input_email",input_email)

// input_email.style.color = "#000";
// input_email.style.fontFamily ="arial"
// input_email.style.fontSize = "50px"
// input_email.style.backgroundColor = "green";

// const input_name = document.querySelector(".input_name");

// input_name.style.color = "#fff";
// input_name.style.fontFamily ="arial"
// input_name.style.fontSize = "50px"
// input_name.style.backgroundColor = "rgba(0,0,255,0.3)";



// // por clase

// const inputsName = document.getElementsByClassName("last_name");

// const inputName = Array.from(inputsName);
// console.log(inputName)


// inputsName.forEach((input) => {
//     console.log(input.value)
    
// });


// const form = document.getElementsByTagName('form')
// console.log(form)


const input2 = document.querySelectorAll('.input2')
console.log(input2)


input2.forEach((input) => {
    console.log(input.value)
        
});



document.write("Hola gente")
document.write("Hola gente con tembloresss")

// crear una lista usando js y insertar en el html


//createElement("li")
const input = Array.from (document.querySelectorAll("input"));

//obtener el cotenedor
const contenedor = document.querySelector("#container-list");

//vamos a crear el ul desde el js
const ul = document.createElement("ul")
//ahora debo llenar mi lista debemos recorrer el input nodelist

input.map((element)=>{
    //en la iteracion debo crear cada elemento de la lista
    const li = document.createElement("li");
    //crear el valor de mi li, es input value
    //createTextNode : crea los valores de mi elemntos html
    const elementText = document.createTextNode(element.value);
    li.appendChild(elementText);
    //debo agregarlo a mi lista
    ul.appendChild(li);
})
contenedor.appendChild(ul);

console.log(ul)

const body = document.body;
body.style.backgroundColor="black"
body.style.fontFamily="helvetica"
body.style.color="#fff"


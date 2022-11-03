//una funcionn es un conjunto de soluciones o ejecuciones para poder realizar tareas
//funcion expresiva

function nombreDeLaFuncion(){
    
    console.log("primera funcion")
    
}
nombreDeLaFuncion();

//funcion anonima

//funcion flecha
const nombreFuncion =() =>{

}

//una funcion es creada para poder reutilizart un codigo
//

function sumar (number1 , number2){
    //primero convertir los párametros a numerros
    const converNumero1 = +number1;
    const converNumero2 = +number2;

    const suma = converNumero1 + converNumero2;
    console.log("El resultado es ",suma)
    

}

sumar(20 , 20)

//return
//es la palabra calse, la que encarga de retornarnos un valor

const suma2 = (a,b,c,d,e)=>{
    return (a+b+c+d+e)
}
console.log("otra suma ",suma2(30,30,40,10,10))


//

let nombre = "kevin"; //string
let age = 34 ; //number
let talla = 1.76 //numer float
let boll = true; //booleano
let indefinido; 
let nulo = null;
let simbolo = Symbol("zcd");
let object = {};

console.log(nombre,typeof(nombre))
console.log(age,typeof(age));
console.log(boll,typeof(boll));

console.log(age,typeof toString(age));
console.log(nombre,typeof parseInt(nombre));
console.log(talla,typeof parseInt(talla));

//funcion expresiva
function suma3 (a,b){
    return a+b
}
//funcion anonima
let resta = function(x,y){
    return x-y
}
//funcion flecha

let multiplicar =(x,y)=>{
    return x*y
}
console.log("funcion exprtesiva" , suma3(10,10))
console.log("funcion anonima" , resta(10,10))
console.log("funcion flecha" , multiplicar(10,10))


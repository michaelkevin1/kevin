//bucles es estructura que se repite 
// los bucles son mayormente usados para poder recorrer array, objeto.
//lee los ELEMENTOS DE MANERA INDEPENDIENTES
// bucle mas usado for = tod

//iterador => indice
//i++, i=1+1
// for (let i = 0; i<=10 ; i++){
//     console.log("iterador ",i)
// }

// for (let j = 10; j <=20 ; j=j+2){
//     console.log("ejemplo2", j)
// }


//como recorree con bucles

// const numeros = [1,2,3,4,5,6,7,8,9,10];
// for (let j = 0; j< numeros.length; j++){
//     //imprimir numeros pares
//     if (numeros [j] % 2 ===0){
//         console.log(numeros[j])
//     }
// }


// const alumnos = ["pepe","jose","yovana","diego","pedro"];

// for(let i = 0; i < alumnos.length; i++){

//     console.log(alumnos[i]);
// }


// const laptops = [
//     {
//         marca : "hp",
//         precio : 2500,
//         nombre : "android",
//     },
//     {
//         marca : "mac",
//         precio : 3000,
//         nombre : "android",
//     },
//     {
//         marca : "acer",
//         precio : 5000,
//         nombre : "android",
//     }
    

// ]
    


// for (o = 0; o < laptops.length; o++){
//     console.log(laptops[o].marca)
// }

// //------------------------
// //map
// //

// const productos =[
//     {
//         name: "tv",
//         price: 1800,
//     },
//     {
//         name: "celular",
//         price: 3500,
//     },
//     {
//         name: "monitor",
//         price: 1200,
//     }
// ]

// productos.map((productos,index)=>{
//     console.log("indice",index);
//     console.log("productos", productos.price)
// })


 for (p = 0; p < laptops.length; p++){
     console.log("precio productos",productos[p].price)
 }


//----------------------------------
//bucle WHILE

// let contador = 0;
// while(contador <= 5){
//     console.log("contador",contador)
//     contador++;
// }


//escribir un programa que pida al usuario una palabra y la muestre 10 veces

// function imprimir10Veces  (palabra){
//     let contador = 0;
//     while(contador <10){
//         console.log(palabra);
//         contador++;
//     }

// }
// imprimir10Veces("hola chicos");



//----for each

//es un bucle como una mecla de map y for
//recorre array

const numeros2=[1,2,3,4,5,6,7,8,9,10];

numeros2.forEach((numero,index)=>{
    console.log("inicio ",index)
    console.log("que hace ",numeros2)
})


const productos2 =[
    {
        name: "kevin",
        price: 2000000
    },
    {
        name: "juan",
        price: 2000000,
        
    },
    {
        name: "david",
        price: 2000000,
    }

];


productos2.forEach((productos2)=>{
    console.log(productos2)
})

productos2.forEach((productos2)=>console.log(productos2.price))
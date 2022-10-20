const ham = document.querySelector('.ham');
const enlace = document.querySelector('.link-menu');
const barras = document.querySelector('.ham span');

ham.addEventListener('click',()=>{
    enlace.classList.toggle('activado');
    barras.forEach(child => {child.classList.toggle('animado')});
    ham.classList.toggle('girar')

});


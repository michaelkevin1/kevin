const colors = ["green","red","rgba(133,122,200)","#f15025","hsl(205,86%,17%","#222","https://i.postimg.cc/9QxZz1Jj/page-person.png"];


const btn = document.getElementById("btn");
const color = document.querySelector(".color");


btn.addEventListener("click", function(){
    const randomNumber = getRandomNumber();

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length)
}

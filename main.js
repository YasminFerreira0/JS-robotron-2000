/*const robotron = document.querySelector('#robotron');
robotron.addEventListener("click", function() {
    console.log("Cliquei no robo!!")
});*/

const subitrair = document.querySelector('#subtrair');
const braco = document.querySelector('#braco');
const somar = document.querySelector('#somar');

subitrair.addEventListener("click", (evento) => {
    braco.value = parseInt(braco.value) + 1;
});

somar.addEventListener("click", (evento) => {
    braco.value = parseInt(braco.value) - 1;
});
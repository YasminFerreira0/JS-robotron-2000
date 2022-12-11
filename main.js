/*const robotron = document.querySelector('#robotron');
robotron.addEventListener("click", function() {
    console.log("Cliquei no robo!!")
});*/
//const subitrair = document.querySelector('#subtrair');
//const somar = document.querySelector('#somar');
//const braco = document.querySelector('#braco');


const controle = document.querySelectorAll("[data-controle]");

controle.forEach((elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
    });
    
});

function manipulaDados(operacao, controle) {
    const peca = controle.querySelector("[data-contador]");

    if(operacao === "-") {
        peca.value = parseInt(peca.value) - 1;
    }else {
        peca.value = parseInt(peca.value) + 1;
    }
}


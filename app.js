// capturar
// os 3 botões
// os containers de  numeros de placar
// o container do placar

const paperBubtton = document.getElementById('paperButton');
const rockButton = document.getElementById('rockButton');
const scissorsButton = document.getElementById('scissorsButton');
const scores = document.getElementById('scores');
const userScore = document.getElementById('userScores');
const compScore = document.getElementById('compScores');
const resetButton = document.getElementById('resetButton');
 

paperBubtton.onclick = onButtonClick;
rockButton.onclick = onButtonClick;
scissorsButton.onclick = onButtonClick;

function onButtonClick (evento) {
  console.log(evento.target.getAttribute('id'));
  
}
/*
// E se o elemento não tiver id? Use os seletores css!
const buttonsContainer = document.querySelector("div");
console.log(buttonsContainer);


//imprimindo todo elemento...
console.log(paperBubtton);

// Capturar um determinado elemento...

console.log(paperBubtton.getAttribute("alt"));

// Alterando um atributo
// Facam com que o src do paperButton seja o ícone de pedra (./images/rock.pdg)
paperBubtton.setAttribute("src", "./images/rock.png");*/

//Alterando a cor do fundo quando a tela for clicada
/*document.querySelector('body').onclick = () => {
  document.querySelector('body').style.backgroundColor = "#F00";
}*/

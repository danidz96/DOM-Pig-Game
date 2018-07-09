/*
REGLAS DEL JUEGO:

- El juego tiene 2 jugadores, jugando en rondas
- En cada turno, un jugador tira un dado tantas veces como desee. Cada resultado se agrega a la cuenta de la ronda.
- Pero, si el jugador saca un 1, se pierde toda su puntuación de la ronda. Después de eso, es el turno del siguiente jugador.
- El jugador puede elegir 'Mantener', lo que significa que su puntuación de la ronda se agrega a su puntuación Global. Después de eso, es el turno del siguiente jugador.
- El primer jugador en alcanzar los 100 puntos en el global gana el juego.
*/

var scores, roundScore, activePlayer, gameActive;

//DOM variables
var score_0 = document.getElementById('score-0');
var score_1 = document.getElementById('score-1');
var current_0 = document.getElementById('current-0');
var current_1 = document.getElementById('current-1');
var player_1 = document.getElementById('name-0');
var player_2 = document.getElementById('name-1');
var player_1_panel = document.querySelector('.player-0-panel');
var player_2_panel = document.querySelector('.player-1-panel');

init();


document.querySelector('.btn-roll').addEventListener('click', function () {
    if (gameActive) {
        //Tirar dado
        var dice = Math.floor(Math.random() * 6) + 1;

        //Mostrar el dado
        var diceSelector = document.querySelector('.dice');
        diceSelector.style.visibility = 'visible';
        diceSelector.src = ('assets/dice-' + dice + '.png');

        //Añadir puntuación al jugador
        if(dice != 1) {
            roundScore += dice;
            document.getElementById('current-' + activePlayer).textContent = roundScore;
        } else {
            nextPlayer();
        }
    }

    
});

document.querySelector('.btn-hold').addEventListener('click', function () {
    if (gameActive) {
        //Añadir el resultado de la ronda al contador global
        scores[activePlayer] += roundScore;

        //Actualizar el contador en pantalla
        document.getElementById("score-" + activePlayer).textContent = scores[activePlayer];

        //Comprobar si el jugador ha ganado
        if (scores[activePlayer] >= 100) {
            document.querySelector('#name-' + activePlayer).textContent = 'Ganador!';
            document.querySelector('.dice').style.visibility = 'hidden';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gameActive = false;
        } else {
            nextPlayer();
        }
    }

});

function nextPlayer() {

    //Comprobar jugador actual y cambiar al siguiente
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

    //Igualar a 0 el resultado de la ronda
    roundScore = 0;

    //Cambiar los estilos
    current_0.textContent = '0';
    current_1.textContent = '0';
    player_1_panel.classList.toggle('active');
    player_2_panel.classList.toggle('active');

}

function init() {
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gameActive = true;

    document.querySelector('.dice').style.visibility = 'hidden';

    score_0.textContent = '0';
    score_1.textContent = '0';
    current_0.textContent = '0';
    current_1.textContent = '0';
    player_1.textContent = 'Jugador 1';
    player_2.textContent = 'Jugador 2';
    player_1_panel.classList.remove('winner');
    player_2_panel.classList.remove('winner');
    player_1_panel.classList.remove('active');
    player_2_panel.classList.remove('active');
    player_1_panel.classList.add('active');
}

document.querySelector('.btn-new').addEventListener('click', init);

//Mostrar reglas
document.querySelector('.btn-rules').addEventListener('click', function () {
    document.querySelector('.rules').style.visibility = 'visible';
});

//Cerrar reglas
document.querySelector('.btn-close').addEventListener('click', function () {
    document.querySelector('.rules').style.visibility = 'hidden';
});
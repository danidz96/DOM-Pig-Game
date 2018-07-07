/*
REGLAS DEL JUEGO:

- El juego tiene 2 jugadores, jugando en rondas
- En cada turno, un jugador tira un dado tantas veces como desee. Cada resultado se agrega a la cuenta de la ronda.
- Pero, si el jugador saca un 1, se pierde toda su puntuación de la ronda. Después de eso, es el turno del siguiente jugador.
- El jugador puede elegir 'Mantener', lo que significa que su puntuación de la ronda se agrega a su puntuación Global. Después de eso, es el turno del siguiente jugador.
- El primer jugador en alcanzar los 100 puntos en el global gana el juego.
*/

var scores, roundScore, activePlayer, dice, gameActive;

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


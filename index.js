const Player = require('./player');
const Game = require('./game');

const playerA = new Player(50, 5, 10);
const playerB = new Player(100, 10, 5);
const game = new Game(playerA, playerB);

game.startBattle();


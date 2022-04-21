// uppercase modules
const Player = require('./player');
const Game = require('./game');
const RandomGenerator = require('./random');

// wire things up
const guessGenerator = RandomGenerator(1, 10);
Game.setPlayer(Player);
Game.setGuessGenerator(guessGenerator);

const playersState = [
    Player.newPlayer('Ricardo'),
    Player.newPlayer('Audrey'),
    Player.newPlayer('Sergio'),
    Player.newPlayer('Antoninho')
];

const gameState = Game.getNewGame(playersState);

console.log('### Game Start ###');
const endGameState = Game.play(gameState);
console.log('### Game End ###');

console.log(
    `Winner is ${endGameState.winner.name} with ${Player.tries(endGameState.winner)} tries`
);

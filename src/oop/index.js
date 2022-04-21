const Player = require('./player');
const Game = require('./game');
const RandomGenerator = require('./random');

const guessGenerator = new RandomGenerator(1, 10);

const players = [
    new Player('Arki', guessGenerator),
    new Player('Chamas', guessGenerator),
    new Player('Antonio', guessGenerator),
    new Player('Patricia', guessGenerator)
];

const game = new Game(players, guessGenerator);

console.log('### Game Start ###');
game.start();
console.log('### Game End ###');

const winner = game.winner;
console.log(`Winner is ${winner.name} with ${winner.tries} attempts`);

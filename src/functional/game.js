const { Identity, Pipe, Tap } = require('./fp');

let guessGenerator, Player;
const setGuessGenerator = injected => (guessGenerator = injected);
const setPlayer = injected => (Player = injected);

const getNewGame = playersState => ({ players: playersState, houseGuess: guessGenerator() });

const getPlayerGuesses = gameState => ({
    ...gameState,
    players: gameState.players.map(playerState => Player.acceptGuess(playerState, guessGenerator()))
});

const printPlayersGuesses = gameState => ({
    ...gameState,
    players: Tap.of(gameState.players).fold(playerState => Player.printGuess(playerState))
});

const findWinner = gameState => ({
    ...gameState,
    winner: gameState.players.reduce(
        (winner, playerState) =>
            winner != null ? winner : playerState.guessedNumber === gameState.houseGuess ? playerState : null,
        null
    )
});

const playRound = gameState => Pipe(gameState, getPlayerGuesses, printPlayersGuesses, findWinner);

const play = gameState =>
    Identity.of(gameState)
        .map(state => playRound(state))
        .fold(state => (state.winner ? state : play(state)));

module.exports = { setPlayer, setGuessGenerator, getNewGame, play };

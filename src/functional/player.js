// build a new player state
const newPlayer = name => ({ name, numbers: [] });

const tries = playerState => playerState.numbers.length;

const acceptGuess = (playerState, guessedNumber) => ({
    ...playerState,
    numbers: [...playerState.numbers, guessedNumber],
    guessedNumber
});

const printGuess = playerState =>
    console.log(`Player ${playerState.name} guesses ${playerState.guessedNumber}`);

module.exports = { newPlayer, tries, acceptGuess, printGuess };

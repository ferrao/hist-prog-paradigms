const players = [
    { name: 'Rui', numbers: [] },
    { name: 'Francisco', numbers: [] },
    { name: 'Catarina', numbers: [] },
    { name: 'Gustavo', numbers: [] }
];

let winner = null;
const houseGuess = makeGuess();

console.log('### Game Start ###');
startGame();
console.log('### Game End ###');
announceWinner();

function makeGuess() {
    return Math.floor(Math.random() * 10) + 1;
}

function startGame() {
    while (!winner) {
        for (let i = 0; i < players.length; i++) {
            let guess = makeGuess();
            players[i].numbers.push(guess);

            console.log(`Player ${players[i].name} guesses ${guess}`);

            if (guess === houseGuess) {
                winner = players[i];
                break;
            }
        }
    }
}

function announceWinner() {
    const tries = winner.numbers.length;
    console.log(`Winner is ${winner.name} with ${tries} tries `);
}

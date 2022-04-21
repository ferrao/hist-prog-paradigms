class Game {
    #players;
    #winner = null;
    #houseGuess;

    constructor(players, guessGenerator) {
        this.#players = players;
        this.#houseGuess = guessGenerator.generate();
    }

    get winner() {
        return this.#winner;
    }

    start() {
        while (!this.#winner) {
            for (let i = 0; i < this.#players.length; i++) {
                this.#players[i].guess();
                this.#players[i].printGuessed();

                if (this.#players[i].guessedNumber === this.#houseGuess) {
                    this.#winner = this.#players[i];
                    break;
                }
            }
        }
    }
}

module.exports = Game;

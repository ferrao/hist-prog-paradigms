class Player {
    #guessGenerator;
    #name;
    #numbers = [];
    #guessedNumber;

    constructor(name, guessGenerator) {
        this.#name = name;
        this.#guessGenerator = guessGenerator;
    }

    get name() {
        return this.#name;
    }

    get guessedNumber() {
        return this.#guessedNumber;
    }

    get tries() {
        return this.#numbers.length;
    }

    guess() {
        this.#guessedNumber = this.#guessGenerator.generate();
        this.#numbers.push(this.#guessedNumber);
    }

    printGuessed() {
        console.log(`Player ${this.#name} guesses ${this.#guessedNumber}`);
    }
}

module.exports = Player;

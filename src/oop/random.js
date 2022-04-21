class RandomGenerator {
    #min;
    #max;

    constructor(min, max) {
        this.#min = min;
        this.#max = max;
    }

    generate() {
        return Math.floor(Math.random() * (this.#max - this.#min + 1) + this.#min);
    }
}

module.exports = RandomGenerator;

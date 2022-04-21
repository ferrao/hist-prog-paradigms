/*
 * A simple implementation of some Monadic data structures
 * to support the History of Programming Paradigms talk
 */

/*
 * Elegant function composition
 * Pipe(state, f, g, h) = f(g(h(state)))
 */
const Pipe = (state, ...fns) => fns.reduce((res, fn) => fn(res), state);

/*
 * Identity Monad
 */
const Identity = {
    of: x => ({
        map: f => Identity.of(f(x)),
        fold: f => f(x),
        valueOf: () => x,
        inspect: () => `Identity(${x})`
    })
};

/*
 * IO Monad
 */
const IO = {
    of: effect => ({
        map: f => IO.of(() => f(effect())),
        fold: f => f(effect()),
        inspect: () => `IO(${effect.toString()})`
    })
};

/*
 * Tap Monad
 */
const Tap = {
    of: arr =>
        Array.isArray(arr)
            ? {
                  map: effect => {
                      arr.forEach(e => effect(e));
                      return Tap.of(arr);
                  },
                  fold: effect => {
                      arr.forEach(e => effect(e));
                      return arr;
                  },
                  inspect: () => `Tap(${arr})`
              }
            : Tap.of([arr])
};

module.exports = {
    Identity,
    Pipe,
    IO,
    Tap
};

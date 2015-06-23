# es6-experiments

> Various experiments with some of the new features introduced in ECMAScript 6. Repo exists for learning purposes.

Most of the experiments are stolen shamelessly from Axel Rauschmayers exelent book [Exploring ES6](https://leanpub.com/exploring-es6) (which is free to read online).

## Install
```bash
$ npm install
```

## Running the examples
```bash
$ node_modules/.bin/babel-node data/number_and_math.js
```

Or you can install [Babel](https://babeljs.io/) (which is used for compilation) globally `npm install babel -g` and then:
```bash
$ babel-node data/number_and_math.js
```

Change a `log` function call to a `focus` call to highlight that experiment in the terminal:
```js
// change this (default colors, blends in):
log(`My name is ${first} ${last}!`);

// to this (red background, sticks out):
focus(`My name is ${first} ${last}!`);
```

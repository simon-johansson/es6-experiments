
import {log, heading, focus} from "../utils";

heading('Symbol');
// ECMAScript 6 introduces a new primitive type: symbols.
// They are tokens that serve as unique IDs.

// You create symbols via the factory function Symbol()
let symbol1 = Symbol();

// optional string-valued parameter that lets you give
// the newly created Symbol a description:
let symbol2 = Symbol('another symbol');
log(symbol2.toString()); // Symbol(symbol number two)

// symbols returned by Symbol() are unique
log(Symbol() === Symbol()); // false

// typeof operator shows that symbols are primitive types
log(typeof Symbol()); // 'symbol'

// symbols can be used as property keys
const MY_KEY = Symbol();
let obj1 = {};

obj1[MY_KEY] = 'string';
log(obj1[MY_KEY]); // 'string'

// symbols can be used as computed property keys
let obj2 = {
    [MY_KEY]: 123
}
log(obj2[MY_KEY]); // 123

// symbols can be used as computed keys for a method definitions
let obj3 = {
    [MY_KEY]() {
        return 'foo';
    }
};
log(obj3[MY_KEY]()); // foo


heading('Enumerating own property keys');
let obj4 = {
    [Symbol('key')]: 1,
    enum: 2,
};
// Object.getOwnPropertyNames() ignores symbol-valued property keys
log(Object.getOwnPropertyNames(obj4)); // enum

// Object.getOwnPropertySymbols() ignores string-valued property keys
log(Object.getOwnPropertySymbols(obj4)); // Symbol(key)

// Reflect.ownKeys() considers all kinds of keys
log(Reflect.ownKeys(obj4)); // enum,Symbol(key)

// Object.keys() only considers enumerable property keys that are strings
log(Object.keys(obj4)); // enum


heading('Using symbols to represent concepts');
const COLOR_RED    = Symbol();
const COLOR_ORANGE = Symbol();
const COLOR_YELLOW = Symbol();

function getComplement(color) {
  switch (color) {
    case COLOR_RED:
      return '#FF0000';
    case COLOR_ORANGE:
      return '#FF6000';
    case COLOR_YELLOW:
      return '#FFFF00';
    default:
      throw new Exception(`Unknown color: ${color}`);
  }
}
log(getComplement(COLOR_ORANGE)); // #FF6000


heading('Symbols as keys of internal properties');
const _counter = Symbol();
const _action = Symbol();

class Countdown {
    constructor(counter) {
        this[_counter] = counter;
        this[_action] = 'Hanny New Year!';
    }
    dec() {
        let counter = this[_counter];
        if (counter < 1) return;
        counter--;
        this[_counter] = counter;
        if (counter === 0) {
            log(this[_action]);
        }
    }
}
let countdown = new Countdown(3);
countdown.dec()
countdown.dec()
countdown.dec()


import {log} from "../utils";

log(`
  Integers in binary and octal notation
  `, 'magenta');

log(0xFF); // 255
log(0b11); // 3
log(0o10); // 8

log(`
  Number.EPSILON specifies a reasonable margin
  of error when comparing floating point numbers.
  `, 'magenta');

log((0.1 + 0.2) === 0.3); // false

function epsEqu(x, y) {
  return Math.abs(x - y) < Number.EPSILON;
}
log(epsEqu(0.1 + 0.2, 0.3)); // true

log(`
  The Number.isSafeInteger property help
  determine whether a JavaScript integer is safe
  `, 'magenta');

log(Number.isSafeInteger(3)); // true
log(Number.isSafeInteger(9007199254740992)); // false

log(`
  Returns the sign of x as -1 or +1. Unless x is either NaN or zero; then x is returned.
  `, 'magenta');

log(Math.sign(-8)) // -1
log(Math.sign(3)) // 1

log(Math.sign(0)) // 0
log(Math.sign(NaN)) // NaN

log(Math.sign(-Infinity)) // -1
log(Math.sign(Infinity)) // 1

log(`
  ${'Math.trunc'.red} removes the decimal fraction of x. Complements the other
  rounding methods Math.floor(), Math.ceil() and Math.round().
  `);

log(Math.trunc(3.1)); // 3
log(Math.trunc(3.9)); // 3
log(Math.trunc(-3.1)); // -3
log(Math.trunc(-3.9)); // -3

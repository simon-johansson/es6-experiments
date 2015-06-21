
import {log, heading, focus} from "../utils";


heading('Binary & octal numbers');
// Integers in binary and octal notation
log(0xFF); // 255
log(0b11); // 3
log(0o10); // 8


heading('Number.EPSILON')
// specifies a reasonable margin of error
// when comparing floating point numbers.
function epsEqu(x, y) {
  return Math.abs(x - y) < Number.EPSILON;
}
log((0.1 + 0.2) === 0.3); // false
log(epsEqu(0.1 + 0.2, 0.3)); // true


heading('Number.isSafeInteger');
// property help determine whether a JavaScript integer is safe
log(Number.isSafeInteger(3)); // true
log(Number.isSafeInteger(9007199254740992)); // false


heading('Math.sign');
// returns the sign of x as -1 or +1. Unless x is
// either NaN or zero; then x is returned.
log(Math.sign(-8)) // -1
log(Math.sign(3)) // 1

log(Math.sign(0)) // 0
log(Math.sign(NaN)) // NaN

log(Math.sign(-Infinity)) // -1
log(Math.sign(Infinity)) // 1


heading('Math.trunc');
// removes the decimal fraction of x. Complements the other
// rounding methods Math.floor(), Math.ceil() and Math.round().
log(Math.trunc(3.1)); // 3
log(Math.trunc(3.9)); // 3
log(Math.trunc(-3.1)); // -3
log(Math.trunc(-3.9)); // -3


heading('Trigonometric methods');
log(Math.sinh(5)); // Computes the hyperbolic sine of x.
log(Math.cosh(5)); // Computes the hyperbolic cosine of x.
log(Math.tanh(5)); // Computes the hyperbolic tangent of x.
log(Math.asinh(5)); // Computes the inverse hyperbolic sine of x.
log(Math.acosh(5)); // Computes the inverse hyperbolic cosine of x.
log(Math.atanh(0.5)); // Computes the inverse hyperbolic tangent of x.
log(Math.hypot(5, 10, 11)); // Computes the square root of the sum of the squares of its arguments.

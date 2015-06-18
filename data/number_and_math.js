// Integers in binary and octal notation
console.log(0xFF); // 255
console.log(0b11); // 3
console.log(0o10); // 8

// Number.EPSILON specifies a reasonable margin of error when comparing floating point numbers.
function epsEqu(x, y) {
    return Math.abs(x - y) < Number.EPSILON;
}
console.log(epsEqu(0.1+0.2, 0.3)); // true

// The Number.isSafeInteger property help determine whether a JavaScript integer is safe
console.log(Number.isSafeInteger(3));
console.log(Number.isSafeInteger(9007199254740992));


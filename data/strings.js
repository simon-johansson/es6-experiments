
import {log, heading, focus} from "../utils";


heading('Unicode escape');
// New kind of Unicode escape that lets you specify any code point
log('\u{1F680}'); // rocket emoji
log([...'x\u{1F680}y'].length) // 3


heading('String interpolation');
let first = 'Simon';
let last = 'Johansson';
log(`My name is ${first} ${last}!`); // My name is Simon Johansson!


heading('Multi-line string literals');
let multiLine = `This is
  a string
  with multiple
  lines`;
log(multiLine);


heading('Raw string literals');
// The backslash is not a special character and escapes
// such as \n are not interpreted
let raw = String.raw`Not a newline: \n`;
log(raw === 'Not a newline: \\n'); // true


heading('String.startsWith, String.endsWith & String.includes');
// Three new methods check whether a string exists within another string
log('hello'.startsWith('hell')); // true
log('hello'.endsWith('ello')); // true
log('hello'.includes('ell')); // true

// position as an optional second parameter, which specifies
// where the string to be searched starts or ends
log('hello'.startsWith('ello', 1)); // true
log('hello'.endsWith('hell', 4)); // true
log('hello'.includes('ell', 1)); // true
log('hello'.includes('ell', 2)); // false


heading('String.repeat()');
log(`${'NaNa '.repeat(4)}Batman!`);

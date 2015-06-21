var colors = require('colors');

function heading (string) {
  console.log(`\n${string}`.cyan);
}

function log (string, color = 'reset') {
  console.log(`  ${string}  `[color]);
}

function focus (string) {
  log(string, 'bgRed');
}

module.exports = {
  log, heading, focus
};

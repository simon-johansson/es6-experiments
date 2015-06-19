var colors = require('colors');

module.exports = {
  log(string, color = 'white') {
    console.log(`${string}`[color]);
  },
};

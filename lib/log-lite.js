var colors = require('colors');

var LEVELS = {
  log: {
    color: 'green'
  },
  info: {
    color: 'cyan'
  },
  warn: {
    color: 'yellow'
  },
  error: {
    color: 'red'
  },
  debug: {
    color: 'red',
    style: 'inverse'
  }
};

parseLevels();

module.exports = LogLite;

function LogLite(options) {
  options = options || {};
  var level = process.env.LOG_LEVEL || options.level || 'log';

  this._level = LEVELS[level].number;

  return this;
}

function makePrototype(level) {
  LogLite.prototype[level.name] = function (message) {
    if (this._level >= level.number) {
      message = stringify(message);
      message = message[level.color];
      if (level.style)
        message = message[level.style];
      console.log(time() + ' ' + message);
    }
  }
}

function time() {
  return '[' + (new Date().toLocaleTimeString()).green + ']';
}

function parseLevels() {
  var i = 0;
  for (var l in LEVELS) {
    var level = LEVELS[l];
    level.name = l;
    level.color = level.color || 'green';
    level.number = i;
    makePrototype(level);
    i += 1;
  }
}

function stringify(message) {
  if (typeof message === 'function')
    return message.toString();
  else if (typeof message === 'string')
    return message;
  else if (typeof message === 'number')
    return '' + message;
  else if (typeof message === 'object')
    return JSON.stringify(message);
  else
    return 'undefined';
}

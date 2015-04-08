'use strict';

var walrus = require('walrus').Walrus;

exports.name = 'walrus';
exports.inputFormats = ['walrus', 'wal'];
exports.outputFormat = 'html';

exports.compile = function (str, options) {
  var template = walrus.Parser.parse(str);
  return function (locals) {
    return template.compile(locals);
  };
};

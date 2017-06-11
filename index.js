'use strict'

const walrus = require('walrus').Walrus

exports.name = 'walrus'
exports.inputFormats = ['walrus', 'wal']
exports.outputFormat = 'html'

exports.compile = function (str) {
  const template = walrus.Parser.parse(str)
  return locals => {
    return template.compile(locals)
  }
}

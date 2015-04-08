# jstransformer-walrus

[Walrus](https://github.com/jeremyruppel/walrus) support for [JSTransformers](https://github.com/jstransformers/jstransformer).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-walrus/master.svg)](https://travis-ci.org/jstransformers/jstransformer-walrus)
[![Coverage Status](https://img.shields.io/coveralls/jstransformers/jstransformer-walrus/master.svg)](https://coveralls.io/r/jstransformers/jstransformer-walrus?branch=master)
[![NPM version](https://img.shields.io/npm/v/jstransformer-walrus.svg)](https://www.npmjs.org/package/jstransformer-walrus)

## Installation

    npm install jstransformer-walrus

## API

```js
var transform = require('jstransformer')(require('jstransformer-walrus'))
var template = 'Hello {{name}}!';
var data = { name: 'World' };
transform.render(template, data).body
// => 'Hello World!'
```

## License

MIT

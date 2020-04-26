# jstransformer-walrus

[Walrus](https://github.com/jeremyruppel/walrus) support for [JSTransformers](https://github.com/jstransformers/jstransformer).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-walrus/master.svg)](https://travis-ci.org/jstransformers/jstransformer-walrus)
[![Coverage Status](https://img.shields.io/codecov/c/github/jstransformers/jstransformer-walrus/master.svg)](https://codecov.io/gh/jstransformers/jstransformer-walrus)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-walrus/master.svg)](http://david-dm.org/jstransformers/jstransformer-walrus)

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

# NPM Boilerplate Node Browser

[![Build Status](https://badgen.net/travis/risan/npm-boilerplate-node-browser)](https://travis-ci.org/risan/npm-boilerplate-node-browser)
[![Test Covarage](https://badgen.net/codecov/c/github/risan/npm-boilerplate-node-browser)](https://codecov.io/gh/risan/npm-boilerplate-node-browser)
[![Greenkeeper](https://badges.greenkeeper.io/risan/npm-boilerplate-node-browser.svg)](https://greenkeeper.io)
[![Latest Version](https://badgen.net/npm/v/npm-boilerplate-node-browser)](https://www.npmjs.com/package/npm-boilerplate-node-browser)

Boilerplate for creating an NPM module for Node and browser environments.

## Installation

```bash
$ npm install npm-boilerplate-node-browser
```

### CDN

The library is available over a CDN:

```html
<script src="https://unpkg.com/npm-boilerplate-node-browser@latest/dist/npm-boilerplate-node-browser.umd.js"></script>

<!-- Or the minified version -->
<script src="https://unpkg.com/npm-boilerplate-node-browser@latest/dist/npm-boilerplate-node-browser.umd.min.js"></script>
```

## Usage

```js
import foo from "npm-boilerplate-node-browser";

(async () => {
  const result = foo("bar");

  console.log(result);
})();
```

## API

```js
foo(bar, [baz])
```

### Parameters

* `bar` (`String`): Requires string.
* `baz` (optional `Object`): Optional object, default to `{}`.

### Returns

It returns a `Promise` which when resolved contains something.

## Related

* [npm-boilerplate-node](https://github.com/risan/npm-boilerplate-node): Boilerplate for creating an NPM module for Node environment.

## License

[MIT](https://github.com/risan/npm-boilerplate-node-browser/blob/master/LICENSE) © [Risan Bagja Pradana](https://bagja.net)

## Using the Boilerplate

Download the boilerpate:

```bash
wget https://github.com/risan/npm-boilerplate-node-browser/archive/master.zip \
    -O master.zip && \
    unzip master.zip && \
    mv npm-boilerplate-node-browser-master my-package && \
    rm master.zip
```

Toolings:

* [Rollup](https://rollupjs.org/) for module bundler.
* [Babel](https://babeljs.io/) for transforming ES2015+ code.
* [Jest](https://jestjs.io/) for testing.
* [ESLint](https://eslint.org/) for linting.
* [Prettier](https://prettier.io/) for code formatting.

Available scripts:

* `npm run build`: Run the module bundler.
* `npm run lint`: Run the linter.
* `npm run lint-fix`: Apply the linter fixes.
* `npm run test`: Run the tests.

Third-party services:

* [Travis CI](https://travis-ci.org/) for continous integration.
* [Codecov](https://codecov.io/) for test coverage report.
* [Greenkeeper](https://greenkeeper.io/) for automated dependency management.

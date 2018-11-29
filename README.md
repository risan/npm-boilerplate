# NPM Boilerplate

[![Build Status](https://flat.badgen.net/travis/risan/npm-boilerplate-node-browser)](https://travis-ci.org/risan/npm-boilerplate-node-browser)
[![Test Coverage](https://flat.badgen.net/codeclimate/coverage/risan/npm-boilerplate-node-browser)](https://codeclimate.com/github/risan/npm-boilerplate-node-browser)
[![Maintainability](https://flat.badgen.net/codeclimate/maintainability/risan/npm-boilerplate-node-browser)](https://codeclimate.com/github/risan/npm-boilerplate-node-browser)
[![Latest Stable Version](https://flat.badgen.net/npm/v/npm-boilerplate-node-browser)](https://www.npmjs.com/package/npm-boilerplate-node-browser)
[![Node Version](https://flat.badgen.net/npm/node/npm-boilerplate-node-browser)](https://www.npmjs.com/package/npm-boilerplate-node-browser)
[![Code Style: Prettier](https://flat.badgen.net/badge/code%20style/prettier/ff69b4)](https://github.com/prettier/prettier)
[![License](https://flat.badgen.net/npm/license/npm-boilerplate-node-browser)](https://github.com/risan/npm-boilerplate-node-browser/blob/master/LICENSE)

Boilerplate for creating an NPM module both for Node and browser environments.

## Install

```bash
$ npm install npm-boilerplate-node-browser

# Or if you use Yarn
$ yarn add npm-boilerplate-node-browser
```

Use this library directly on the browser:

```html
<!-- For development -->
<script src="https://unpkg.com/npm-boilerplate-node-browser@latest/dist/foo.umd.js"></script>

<!-- Minified version for production -->
<script src="https://unpkg.com/npm-boilerplate-node-browser@latest/dist/foo.umd.min.js"></script>
```

## Quick Start

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

## Scripts

Available scripts:

* `yarn build`: Build the module.
* `yarn lint`: Run the linter.
* `yarn lint-fix`: Apply the linter fixes.
* `yarn test`: Run the tests.

## Related

* [npm-boilerplate-node](https://github.com/risan/npm-boilerplate-node): Boilerplate for creating an NPM module for Node environment.

## License

MIT © [Risan Bagja Pradana](https://bagja.net)

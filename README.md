# NPM Boilerplate

[![Build Status](https://flat.badgen.net/travis/risan/npm-boilerplate)](https://travis-ci.org/risan/npm-boilerplate)
[![Test Coverage](https://flat.badgen.net/codeclimate/coverage/risan/npm-boilerplate)](https://codeclimate.com/github/risan/npm-boilerplate)
[![Maintainability](https://flat.badgen.net/codeclimate/maintainability/risan/npm-boilerplate)](https://codeclimate.com/github/risan/npm-boilerplate)
[![Latest Stable Version](https://flat.badgen.net/npm/v/npm-boilerplate)](https://www.npmjs.com/package/npm-boilerplate)
[![Node Version](https://flat.badgen.net/npm/node/npm-boilerplate)](https://www.npmjs.com/package/npm-boilerplate)
[![Code Style: Prettier](https://flat.badgen.net/badge/code%20style/prettier/ff69b4)](https://github.com/prettier/prettier)
[![License](https://flat.badgen.net/npm/license/npm-boilerplate)](https://github.com/risan/send-request/blob/master/LICENSE)

Boilerplate for creating an NPM module both for Node and browser environments.

## Install

```bash
$ npm install npm-boilerplate

# Or if you use Yarn
$ yarn add npm-boilerplate
```

Use this library directly on the browser:

```html
<!-- For development -->
<script src="https://unpkg.com/npm-boilerplate@latest/dist/foo.umd.js"></script>

<!-- Minified version for production -->
<script src="https://unpkg.com/npm-boilerplate@latest/dist/foo.umd.min.js"></script>
```

## Quick Start

```js
import foo from "npm-boilerplate";

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

* [npm-boilerplate-node](https://github.com/risan/npm-boilerplate-node): NPM module boilerplate for Node environment.

## License

MIT © [Risan Bagja Pradana](https://bagja.net)

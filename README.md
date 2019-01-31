# @wkovacs64/eslint-config

This is my personal ESLint configuration.

### Install

```
yarn add --dev eslint @wkovacs64/eslint-config
```

### Usage

Extend in your `.eslintrc.js`:

##### Base (e.g. Node.js)

```js
module.exports = {
  extends: ['@wkovacs64/eslint-config'],
};
```

##### React

```js
module.exports = {
  extends: ['@wkovacs64/eslint-config/react'],
};
```

##### TypeScript

```js
module.exports = {
  extends: ['@wkovacs64/eslint-config/ts'],
};
```

##### TypeScript + React

```js
module.exports = {
  extends: ['@wkovacs64/eslint-config/ts/react'],
};
```

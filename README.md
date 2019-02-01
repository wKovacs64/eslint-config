# @wkovacs64/eslint-config

This is my personal ESLint configuration.

### Install

```
npx install-peerdeps --dev --yarn @wkovacs64/eslint-config
```

> Drop the `--yarn` when using `npm`.

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

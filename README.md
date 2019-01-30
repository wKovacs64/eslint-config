# @wkovacs64/eslint-config

This is my personal ESLint configuration for JavaScript projects. See
[@wkovacs64/eslint-config-ts][@wkovacs64/eslint-config-ts] for TypeScript
projects.

### Install

```
npx install-peerdeps --yarn --dev @wkovacs64/eslint-config
yarn add --dev @wkovacs64/eslint-config
```

### Usage

`.eslintrc.js`

```js
module.exports = {
  extends: ['@wkovacs64/eslint-config'],
};
```

For React projects, append `/react` to the end.

```js
module.exports = {
  extends: ['@wkovacs64/eslint-config/react'],
};
```

[@wkovacs64/eslint-config-ts]: https://github.com/wKovacs64/eslint-config-ts

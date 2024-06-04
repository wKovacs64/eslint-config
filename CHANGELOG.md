# Change Log

## 7.1.0

### Minor Changes

- [#11](https://github.com/wKovacs64/eslint-config/pull/11) [`1e9e1e3`](https://github.com/wKovacs64/eslint-config/commit/1e9e1e37390fc252f2975aca4297524fa2da22d8) Thanks [@wKovacs64](https://github.com/wKovacs64)! - Bring in recommended rules from `react` and `jsx-a11y` plugins.

### Patch Changes

- [#12](https://github.com/wKovacs64/eslint-config/pull/12) [`79f7ea9`](https://github.com/wKovacs64/eslint-config/commit/79f7ea9c444db8f99e71d65959c03c0fa9098f21) Thanks [@wKovacs64](https://github.com/wKovacs64)! - Enable `alwaysTryTypes` in `import/resolver` settings.

## 7.0.2

### Patch Changes

- [#5](https://github.com/wKovacs64/eslint-config/pull/5) [`0e2b627`](https://github.com/wKovacs64/eslint-config/commit/0e2b62793fd106c966ad96de8c4ee54da3e9f93b) Thanks [@wKovacs64](https://github.com/wKovacs64)! - Remove `eslint` from `peerDependencies` and revert to ESLint v8. Consumers can use v9 if they want, but they'll get a ton of warnings (if they don't use legacy peer deps) as most of the plugins don't explicitly support it yet.

## 7.0.1

### Patch Changes

- [#3](https://github.com/wKovacs64/eslint-config/pull/3) [`795ec88`](https://github.com/wKovacs64/eslint-config/commit/795ec88fcb41f94684b0860075051dfb28a0a206) Thanks [@wKovacs64](https://github.com/wKovacs64)! - Flatten module `exports` to provide a better error message if consumed from CJS.

## 7.0.0

### Major Changes

- [`250baa4`](https://github.com/wKovacs64/eslint-config/commit/250baa4ee7016ab6757f2e66ad17e0be95f3b9c5) Thanks [@wKovacs64](https://github.com/wKovacs64)! - Initial (re)release of personal ESLint flat config

# Change Log

## 7.2.2

### Patch Changes

- [#20](https://github.com/wKovacs64/eslint-config/pull/20) [`a04e4b4`](https://github.com/wKovacs64/eslint-config/commit/a04e4b460a0a5c8e8fd4a26cd6baca21d69587f1) Thanks [@wKovacs64](https://github.com/wKovacs64)! - Apply Playwright rules when `@playwright/test` is present rather than `playwright`.

## 7.2.1

### Patch Changes

- [#17](https://github.com/wKovacs64/eslint-config/pull/17) [`f771d66`](https://github.com/wKovacs64/eslint-config/commit/f771d664b59f0bac87f4f9306796b3cd6575017d) Thanks [@wKovacs64](https://github.com/wKovacs64)! - Add `package.json` to package exports.

- [#19](https://github.com/wKovacs64/eslint-config/pull/19) [`b3847b3`](https://github.com/wKovacs64/eslint-config/commit/b3847b30e4736758e75af0758b2a88f78953c8c7) Thanks [@wKovacs64](https://github.com/wKovacs64)! - Disable `@typescript-eslint/consistent-type-imports` rule as it conflicts with `verbatimModuleSyntax` in `tsconfig.json`. Disable `import/consistent-type-specifier-style` rule as well.

## 7.2.0

### Minor Changes

- [#15](https://github.com/wKovacs64/eslint-config/pull/15) [`1346c39`](https://github.com/wKovacs64/eslint-config/commit/1346c39349e41e7159eb670dd160fc78c74be021) Thanks [@wKovacs64](https://github.com/wKovacs64)! - Apply JS-specific rules to `.cjs` files too.

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

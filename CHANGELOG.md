# Change Log

## 7.3.0

### Minor Changes

- [#31](https://github.com/wKovacs64/eslint-config/pull/31) [`36a47e3`](https://github.com/wKovacs64/eslint-config/commit/36a47e3d60fbc5b38fe4413841340c7676625d83) Thanks [@renovate](https://github.com/apps/renovate)! - Update `eslint-plugin-import-x` to v4.

### Patch Changes

- [#35](https://github.com/wKovacs64/eslint-config/pull/35) [`f4df1c7`](https://github.com/wKovacs64/eslint-config/commit/f4df1c718d01cb633938cb8fefa24d7378483ddb) Thanks [@wKovacs64](https://github.com/wKovacs64)! - Update several dependencies.

  ```
  @eslint/compat                          ^1.1.1  →    ~1.1.1
  @eslint/js                              ^9.7.0  →   ^9.12.0
  eslint-plugin-import-x                  ^4.0.0  →    ^4.3.1
  eslint-plugin-jsx-a11y                  ^6.9.0  →   ^6.10.0
  eslint-plugin-playwright                ^1.6.2  →    ^1.7.0
  eslint-plugin-react                    ^7.34.3  →   ^7.37.1
  eslint-plugin-testing-library           ^6.2.2  →    ^6.3.0
  globals                                ^15.8.0  →  ^15.11.0
  typescript-eslint              ^8.0.0-alpha.41  →    ^8.9.0
  ```

- [#34](https://github.com/wKovacs64/eslint-config/pull/34) [`b4cd99f`](https://github.com/wKovacs64/eslint-config/commit/b4cd99f8f2e4da87f7a336f3df2fbec790cdf376) Thanks [@renovate](https://github.com/apps/renovate)! - Update `eslint-plugin-react-hooks` to v5. Ignore all Playwright files as they conventionally name one of their functions `use`, which triggers false positives.

- [#33](https://github.com/wKovacs64/eslint-config/pull/33) [`9780245`](https://github.com/wKovacs64/eslint-config/commit/97802454e35a514612e4a910005117c9af44d915) Thanks [@renovate](https://github.com/apps/renovate)! - Replace `eslint-plugin-vitest` with `@vitest/eslint-plugin`.

## 7.2.5

### Patch Changes

- [#29](https://github.com/wKovacs64/eslint-config/pull/29) [`d9e9528`](https://github.com/wKovacs64/eslint-config/commit/d9e9528306993e58f416c4ee0ef7c3d2cc10e9e9) Thanks [@wKovacs64](https://github.com/wKovacs64)! - Fix `eslint-plugin-react-hooks` and `eslint-plugin-testing-library` consumption with `@eslint/compat`. This should also enable ESLint v9 compatibility (untested).

- [#28](https://github.com/wKovacs64/eslint-config/pull/28) [`93fa45f`](https://github.com/wKovacs64/eslint-config/commit/93fa45f05090eb1b18bcc0aa8840c347533b23b7) Thanks [@wKovacs64](https://github.com/wKovacs64)! - Update `@eslint/js` to v9.7.0, `eslint-plugin-jsx-a11y` to v6.9.0, `eslint-plugin-react` to v7.34.3, and `globals` to v15.8.0.

- [#26](https://github.com/wKovacs64/eslint-config/pull/26) [`a783712`](https://github.com/wKovacs64/eslint-config/commit/a7837128394bc8be4fb8db58997d624c62fb0565) Thanks [@renovate](https://github.com/apps/renovate)! - Update `eslint-plugin-import-x` to v3.

- [#30](https://github.com/wKovacs64/eslint-config/pull/30) [`79eea98`](https://github.com/wKovacs64/eslint-config/commit/79eea98aff6a6a79fba441e2311e12ff33744e32) Thanks [@wKovacs64](https://github.com/wKovacs64)! - Update `typescript-eslint` to v8.0.0-alpha.41. May contain some minor breaking changes, see https://typescript-eslint.io/blog/announcing-typescript-eslint-v8-beta if necessary.

## 7.2.4

### Patch Changes

- [#24](https://github.com/wKovacs64/eslint-config/pull/24) [`89f27f9`](https://github.com/wKovacs64/eslint-config/commit/89f27f9644fb1920985140865b5299d8dedd71fe) Thanks [@wKovacs64](https://github.com/wKovacs64)! - Use the platform to perform package detection (and remove the `resolve-from` dependency).

## 7.2.3

### Patch Changes

- [#22](https://github.com/wKovacs64/eslint-config/pull/22) [`a179a07`](https://github.com/wKovacs64/eslint-config/commit/a179a071a581e24e1fea61aa8e16914bbad0cce6) Thanks [@wKovacs64](https://github.com/wKovacs64)! - Fix detection of installed packages in consuming projects.

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

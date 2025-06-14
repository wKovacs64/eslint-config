# Change Log

## 7.8.0

### Minor Changes

- [#61](https://github.com/wKovacs64/eslint-config/pull/61) [`4690abe`](https://github.com/wKovacs64/eslint-config/commit/4690abed7a9fe1139753c9ef7d3a277fb4f40e08) Thanks [@wKovacs64](https://github.com/wKovacs64)! - Add actual Astro support. It was sort of unlocked in v7.6.0 but this adds the `eslint-plugin-astro` plugin with their recommended config.

### Patch Changes

- [#63](https://github.com/wKovacs64/eslint-config/pull/63) [`cf48f5d`](https://github.com/wKovacs64/eslint-config/commit/cf48f5d1b718e6d5d67b15a51cbe51183bb96a32) Thanks [@wKovacs64](https://github.com/wKovacs64)! - Update various dependencies.

  ```
  @eslint/js                     ^9.28.0  →  ^9.29.0
  @vitest/eslint-plugin           ^1.2.1  →   ^1.2.5
  eslint-plugin-import-x         ^4.15.0  →  ^4.15.2
  eslint-plugin-testing-library   ^7.3.0  →   ^7.5.3
  typescript-eslint              ^8.33.1  →  ^8.34.0
  ```

## 7.7.0

### Minor Changes

- [#59](https://github.com/wKovacs64/eslint-config/pull/59) [`aeb42d1`](https://github.com/wKovacs64/eslint-config/commit/aeb42d1f6ecc9d86c911ae539d1fb7ca2d6f7e4a) Thanks [@wKovacs64](https://github.com/wKovacs64)! - Ignore `.vercel` and `.next` directories.

## 7.6.0

### Minor Changes

- [#56](https://github.com/wKovacs64/eslint-config/pull/56) [`445f83e`](https://github.com/wKovacs64/eslint-config/commit/445f83edf991c48f0d7c8260e95b9f6e2903dc6e) Thanks [@wKovacs64](https://github.com/wKovacs64)! - Ignore `.astro` directory. This effectively adds support for Astro.

### Patch Changes

- [#58](https://github.com/wKovacs64/eslint-config/pull/58) [`2292b7b`](https://github.com/wKovacs64/eslint-config/commit/2292b7bde6255212d5ebcdebb56b21be8eb025ec) Thanks [@wKovacs64](https://github.com/wKovacs64)! - Update various dependencies.

  ```
  @eslint/js                     ^9.21.0  →  ^9.28.0
  @vitest/eslint-plugin          ^1.1.36  →   ^1.2.1
  eslint-plugin-import-x          ^4.6.1  →  ^4.15.0
  eslint-plugin-react            ^7.37.4  →  ^7.37.5
  eslint-plugin-testing-library   ^7.1.1  →   ^7.3.0
  globals                        ^16.0.0  →  ^16.2.0
  typescript-eslint              ^8.26.0  →  ^8.33.1
  ```

## 7.5.2

### Patch Changes

- [#54](https://github.com/wKovacs64/eslint-config/pull/54) [`523b07c`](https://github.com/wKovacs64/eslint-config/commit/523b07c5913845ec65e7289bd83c14e2357ddc25) Thanks [@wKovacs64](https://github.com/wKovacs64)! - Update various dependencies.

  ```
  @vitest/eslint-plugin      ^1.1.31  →  ^1.1.36
  eslint-plugin-react-hooks   ^5.1.0  →   ^5.2.0
  typescript-eslint          ^8.24.1  →  ^8.26.0
  ```

## 7.5.1

### Patch Changes

- [#52](https://github.com/wKovacs64/eslint-config/pull/52) [`2c9061a`](https://github.com/wKovacs64/eslint-config/commit/2c9061a4492b192392d58d84445e9d715fd80a1b) Thanks [@wKovacs64](https://github.com/wKovacs64)! - Update various dependencies.

  ```
  @eslint/js                ^9.17.0  →  ^9.21.0
  @vitest/eslint-plugin     ^1.1.24  →  ^1.1.31
  eslint-plugin-playwright   ^2.1.0  →   ^2.2.0
  eslint-plugin-react       ^7.37.3  →  ^7.37.4
  typescript-eslint         ^8.19.0  →  ^8.24.1
  ```

- [#49](https://github.com/wKovacs64/eslint-config/pull/49) [`985e03c`](https://github.com/wKovacs64/eslint-config/commit/985e03c9650f06a466f6f18c72162497e0538041) Thanks [@renovate](https://github.com/apps/renovate)! - Update `globals` to v16.

## 7.5.0

### Minor Changes

- [#48](https://github.com/wKovacs64/eslint-config/pull/48) [`fd170ef`](https://github.com/wKovacs64/eslint-config/commit/fd170efb7ecb595df5236c72152345bf3c2ae0b9) Thanks [@wKovacs64](https://github.com/wKovacs64)! - Ignore the `.react-router` directory. This effectively adds support for React Router v7.

### Patch Changes

- [#46](https://github.com/wKovacs64/eslint-config/pull/46) [`69c5e9e`](https://github.com/wKovacs64/eslint-config/commit/69c5e9e1937145257c8a3ce59bb361d6dbb835da) Thanks [@wKovacs64](https://github.com/wKovacs64)! - Update various dependencies.

  ```
  @eslint/js                      ^9.15.0  →   ^9.17.0
  @vitest/eslint-plugin           ^1.1.10  →   ^1.1.24
  eslint-plugin-import-x           ^4.4.3  →    ^4.6.1
  eslint-plugin-react             ^7.37.2  →   ^7.37.3
  eslint-plugin-react-hooks        ^5.0.0  →    ^5.1.0
  eslint-plugin-testing-library    ^7.0.0  →    ^7.1.1
  globals                        ^15.12.0  →  ^15.14.0
  typescript-eslint               ^8.15.0  →   ^8.19.0
  ```

## 7.4.0

### Minor Changes

- [#6](https://github.com/wKovacs64/eslint-config/pull/6) [`0be1c5f`](https://github.com/wKovacs64/eslint-config/commit/0be1c5fef4e00b16893626bd115850012e45b351) Thanks [@renovate](https://github.com/apps/renovate)! - Update `eslint` to v9. The config now supports ESLint v9 in consuming projects.

### Patch Changes

- [#41](https://github.com/wKovacs64/eslint-config/pull/41) [`60c83cb`](https://github.com/wKovacs64/eslint-config/commit/60c83cb3acb4c66a563181d14b2a1f5a59a08609) Thanks [@renovate](https://github.com/apps/renovate)! - Update `eslint-plugin-testing-library` to v7.

- [#42](https://github.com/wKovacs64/eslint-config/pull/42) [`dc1b73b`](https://github.com/wKovacs64/eslint-config/commit/dc1b73bf80cab31299dcfac1a417719ea7e48505) Thanks [@wKovacs64](https://github.com/wKovacs64)! - Update several dependencies.

  ```
  eslint-plugin-import-x     ^4.4.2  →   ^4.4.3
  eslint-plugin-jest-dom     ^5.4.0  →   ^5.5.0
  eslint-plugin-playwright   ^2.0.1  →   ^2.1.0
  typescript-eslint         ^8.14.0  →  ^8.15.0
  ```

## 7.3.1

### Patch Changes

- [#40](https://github.com/wKovacs64/eslint-config/pull/40) [`e3acf85`](https://github.com/wKovacs64/eslint-config/commit/e3acf8518be8726f0f7e1dfc0df9e3b007cf82a0) Thanks [@wKovacs64](https://github.com/wKovacs64)! - Update several dependencies.

  ```
  @eslint/js                      ^9.12.0  →   ^9.15.0
  @vitest/eslint-plugin            ^1.1.7  →   ^1.1.10
  eslint-plugin-import-x           ^4.3.1  →    ^4.4.2
  eslint-plugin-jsx-a11y          ^6.10.0  →   ^6.10.2
  eslint-plugin-playwright         ^2.0.0  →    ^2.0.1
  eslint-plugin-react             ^7.37.1  →   ^7.37.2
  eslint-plugin-testing-library    ^6.3.0  →    ^6.4.0
  globals                        ^15.11.0  →  ^15.12.0
  typescript-eslint                ^8.9.0  →   ^8.14.0
  ```

- [#37](https://github.com/wKovacs64/eslint-config/pull/37) [`a1c4f5f`](https://github.com/wKovacs64/eslint-config/commit/a1c4f5f9897342d7e4ecd5b03d17d1696fd6990e) Thanks [@renovate](https://github.com/apps/renovate)! - Update `eslint-plugin-playwright` to v2.

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

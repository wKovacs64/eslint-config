//
// Forked from https://github.com/epicweb-dev/config
//
import globals from 'globals';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import reactPlugin from 'eslint-plugin-react';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import playwright from 'eslint-plugin-playwright';

const ERROR = 'error';
const WARN = 'warn';
const OFF = 'off';

function has(pkgName) {
  try {
    import.meta.resolve(pkgName, import.meta.url);
    return true;
  } catch {
    return false;
  }
}

const hasTypeScript = has('typescript');
const hasReact = has('react');
const hasTestingLibrary = has('@testing-library/dom');
const hasJestDom = has('@testing-library/jest-dom');
const hasVitest = has('vitest');
const hasPlaywright = has('@playwright/test');

const vitestFiles = ['**/__tests__/**/*', '**/*.test.*'];
const testFiles = ['**/tests/**', '**/#tests/**', ...vitestFiles];
const allPlaywrightFiles = ['**/playwright/**'];
const playwrightTestFiles = ['**/playwright/**/*.spec.*'];

export const config = [
  {
    ignores: [
      '**/.astro/**',
      '**/.cache/**',
      '**/.react-router/**',
      '**/node_modules/**',
      '**/build/**',
      '**/public/build/**',
      '**/playwright-report/**',
      '**/playwright-results/**',
      '**/playwright/report/**',
      '**/playwright/results/**',
      '**/server-build/**',
      '**/dist/**',
      '**/coverage/**',
    ],
  },

  // all files
  eslint.configs.recommended,
  {
    plugins: {
      import: (await import('eslint-plugin-import-x')).default,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      'import/no-duplicates': [WARN, { 'prefer-inline': true }],
      'import/order': [
        WARN,
        {
          pathGroups: [
            { pattern: '#*/**', group: 'internal' },
            { pattern: '~/**', group: 'internal' },
          ],
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        },
      ],
    },
  },

  // JSX/TSX files
  hasReact
    ? {
        files: ['**/*.tsx', '**/*.jsx'],
        plugins: {
          react: reactPlugin,
          'jsx-a11y': jsxA11yPlugin,
        },
        languageOptions: {
          parserOptions: {
            ecmaFeatures: {
              jsx: true,
            },
          },
        },
        rules: {
          ...reactPlugin.configs.recommended.rules,
          ...jsxA11yPlugin.configs.recommended.rules,
          'react/function-component-definition': [
            'error',
            {
              namedComponents: 'function-declaration',
              unnamedComponents: 'arrow-function',
            },
          ],
          'react/react-in-jsx-scope': OFF,
          'react/prop-types': OFF,
          'jsx-a11y/label-has-associated-control': [
            ERROR,
            {
              assert: 'either',
            },
          ],
        },
        settings: {
          react: {
            version: 'detect',
          },
        },
      }
    : null,

  // react-hook rules are applicable in ts/js/tsx/jsx, but only with React as a dep
  hasReact
    ? {
        files: ['**/*.ts?(x)', '**/*.js?(x)'],
        ignores: [...allPlaywrightFiles],
        plugins: {
          'react-hooks': (await import('eslint-plugin-react-hooks')).default,
        },
        rules: {
          'react-hooks/rules-of-hooks': ERROR,
          'react-hooks/exhaustive-deps': ERROR,
        },
      }
    : null,

  // JS, JSX, and CJS files
  {
    files: ['**/*.{js,jsx,cjs}'],
    // most of these rules are useful for JS but not TS because TS handles these better
    rules: {
      // Blocked by https://github.com/import-js/eslint-plugin-import/issues/2132
      // 'import/no-unresolved': [
      //   ERROR,
      //   {
      //     ignore: ['^#icons/icon', '^~/icons/icon', './icons-sprite.svg'],
      //   },
      // ],
      'no-unused-vars': [
        WARN,
        {
          args: 'after-used',
          argsIgnorePattern: '^_',
          ignoreRestSiblings: true,
          varsIgnorePattern: '^ignored',
        },
      ],
    },
  },

  // TS and TSX files
  ...(hasTypeScript
    ? [
        // TODO: figure out how to switch to type-checked configs
        ...tseslint.configs.recommended,
        ...tseslint.configs.stylistic,
        {
          files: ['**/*.ts?(x)'],
          languageOptions: {
            parserOptions: {
              parser: tseslint.parser,
              projectService: true,
            },
          },
          plugins: {
            '@typescript-eslint': tseslint.plugin,
          },
          rules: {
            '@typescript-eslint/ban-ts-comment': OFF,
            '@typescript-eslint/consistent-type-assertions': [
              ERROR,
              {
                assertionStyle: 'as',
                objectLiteralTypeAssertions: 'allow-as-parameter',
              },
            ],
            '@typescript-eslint/consistent-type-definitions': OFF,
            // Note: use this rule _OR_ verbatimModuleSyntax in tsconfig.json - not both
            // '@typescript-eslint/consistent-type-imports': [
            //   ERROR,
            //   {
            //     prefer: 'type-imports',
            //     disallowTypeAnnotations: true,
            //     fixStyle: 'inline-type-imports',
            //   },
            // ],
            '@typescript-eslint/explicit-module-boundary-types': OFF,
            '@typescript-eslint/naming-convention': [
              ERROR,
              {
                selector: 'typeLike',
                format: ['PascalCase'],
                custom: { regex: '^I[A-Z]', match: false },
              },
            ],
            '@typescript-eslint/no-confusing-void-expression': [
              ERROR,
              {
                ignoreArrowShorthand: true,
              },
            ],
            '@typescript-eslint/no-explicit-any': OFF,
            '@typescript-eslint/no-floating-promises': [
              ERROR,
              {
                ignoreIIFE: true,
              },
            ],
            '@typescript-eslint/no-import-type-side-effects': ERROR,
            'no-invalid-this': OFF,
            '@typescript-eslint/no-invalid-this': ERROR,
            'no-redeclare': OFF,
            '@typescript-eslint/no-non-null-assertion': OFF,
            '@typescript-eslint/no-redeclare': ERROR,
            'no-shadow': OFF,
            '@typescript-eslint/no-shadow': ERROR,
            '@typescript-eslint/no-unnecessary-type-constraint': 'warn',
            '@typescript-eslint/no-unused-vars': [
              ERROR,
              {
                vars: 'all',
                args: 'after-used',
                argsIgnorePattern: '^_',
                ignoreRestSiblings: true,
              },
            ],
            'no-use-before-define': OFF,
            '@typescript-eslint/no-use-before-define': [
              ERROR,
              {
                functions: false,
                classes: true,
                variables: true,
              },
            ],
            '@typescript-eslint/prefer-nullish-coalescing': OFF,
            '@typescript-eslint/restrict-template-expressions': [
              ERROR,
              {
                allowBoolean: true,
                allowNullish: true,
              },
            ],
            '@typescript-eslint/require-await': OFF,
            '@typescript-eslint/unified-signatures': 'warn',
          },
          settings: {
            'import/resolver': {
              typescript: {
                alwaysTryTypes: true,
              },
            },
          },
        },
      ]
    : []),

  // This assumes test files are those which are in the test directory or have
  // *.test.* in the filename. If a file doesn't match this assumption, then it
  // will not be allowed to import test files.
  {
    files: ['**/*.ts?(x)', '**/*.js?(x)'],
    ignores: testFiles,
    rules: {
      'no-restricted-imports': [
        ERROR,
        {
          patterns: [
            {
              group: testFiles,
              message: 'Do not import test files in source files',
            },
          ],
        },
      ],
    },
  },

  hasTestingLibrary
    ? {
        files: testFiles,
        ignores: [...playwrightTestFiles],
        plugins: {
          'testing-library': (await import('eslint-plugin-testing-library')).default,
        },
        rules: {
          'testing-library/await-async-events': ERROR,
          'testing-library/await-async-queries': ERROR,
          'testing-library/await-async-utils': ERROR,
          'testing-library/consistent-data-testid': OFF,
          'testing-library/no-await-sync-events': ERROR,
          'testing-library/no-await-sync-queries': ERROR,
          'testing-library/no-container': ERROR,
          'testing-library/no-debugging-utils': OFF,
          'testing-library/no-dom-import': [ERROR, 'react'],
          'testing-library/no-global-regexp-flag-in-query': ERROR,
          'testing-library/no-manual-cleanup': ERROR,
          'testing-library/no-node-access': ERROR,
          'testing-library/no-promise-in-fire-event': ERROR,
          'testing-library/no-render-in-lifecycle': ERROR,
          'testing-library/no-unnecessary-act': ERROR,
          'testing-library/no-wait-for-multiple-assertions': ERROR,
          'testing-library/no-wait-for-side-effects': ERROR,
          'testing-library/no-wait-for-snapshot': ERROR,
          'testing-library/prefer-explicit-assert': ERROR,
          'testing-library/prefer-find-by': ERROR,
          'testing-library/prefer-presence-queries': ERROR,
          'testing-library/prefer-query-by-disappearance': ERROR,
          'testing-library/prefer-query-matchers': OFF,
          'testing-library/prefer-screen-queries': ERROR,
          'testing-library/prefer-user-event': ERROR,
          'testing-library/render-result-naming-convention': ERROR,
        },
      }
    : null,

  hasJestDom
    ? {
        files: testFiles,
        ignores: [...playwrightTestFiles],
        plugins: {
          'jest-dom': (await import('eslint-plugin-jest-dom')).default,
        },
        rules: {
          'jest-dom/prefer-checked': ERROR,
          'jest-dom/prefer-empty': ERROR,
          'jest-dom/prefer-enabled-disabled': ERROR,
          'jest-dom/prefer-focus': ERROR,
          'jest-dom/prefer-in-document': ERROR,
          'jest-dom/prefer-required': ERROR,
          'jest-dom/prefer-to-have-attribute': ERROR,
          'jest-dom/prefer-to-have-class': ERROR,
          'jest-dom/prefer-to-have-style': ERROR,
          'jest-dom/prefer-to-have-text-content': ERROR,
          'jest-dom/prefer-to-have-value': ERROR,
        },
      }
    : null,

  hasVitest
    ? {
        files: testFiles,
        ignores: [...playwrightTestFiles],
        plugins: {
          vitest: (await import('@vitest/eslint-plugin')).default,
        },
        rules: {
          // you don't want the editor to autofix this, but we do want to be
          // made aware of it
          'vitest/no-focused-tests': [WARN, { fixable: false }],
        },
      }
    : null,

  hasPlaywright
    ? {
        files: playwrightTestFiles,
        ...playwright.configs['flat/recommended'],
      }
    : null,
].filter(Boolean);

// this is for backward compatibility
export default config;

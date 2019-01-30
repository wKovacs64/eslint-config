const baseRules = require('../base/rules');
const reactRules = require('./rules');

module.exports = {
  extends: ['../../react/index.js', '../common/index.js'],
  rules: Object.assign({}, baseRules, reactRules),
  overrides: [
    {
      files: ['**/*.tsx'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
      },
    },
  ],
};

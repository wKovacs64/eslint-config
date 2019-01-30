const baseRules = require('../base/rules');
const reactRules = require('./rules');

module.exports = {
  extends: ['../base/index.js', 'airbnb', 'prettier', 'prettier/react'],
  env: {
    browser: true,
  },
  plugins: ['react-hooks'],
  rules: Object.assign({}, baseRules, reactRules),
};

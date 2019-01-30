const rules = require('./rules');

module.exports = {
  extends: ['airbnb-base'],
  env: {
    jest: true,
  },
  parser: 'babel-eslint',
  rules,
};

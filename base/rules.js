module.exports = {
  'import/prefer-default-export': 'off',
  'no-nested-ternary': 'off',
  'no-unused-expressions': ['error', { allowTaggedTemplates: true }],
  'valid-jsdoc': [
    'error',
    {
      prefer: {
        arg: 'param',
        argument: 'param',
        return: 'returns',
      },
    },
  ],
};

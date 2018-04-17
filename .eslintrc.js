module.exports = {
  extends: ['airbnb'],
  parser: 'babel-eslint',
  rules: {
    'arrow-parens': ['error', 'always'],
    'function-paren-newline': 'off',

    'import/no-extraneous-dependencies': ['error', { peerDependencies: true}],

    'react/jsx-filename-extension': ['error', { extensions: ['.js'] }]
  },
};

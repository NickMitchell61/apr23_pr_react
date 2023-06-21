module.exports = {
  extends: ['@mate-academy/eslint-config-react', 'plugin:cypress/recommended'],
  rules: {
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: true,
      optionalDependencies: false,
      peerDependencies: false,
    }],
    'react/prop-types': 0,
    'max-len': 0,
    'jsx-a11y/label-has-associated-control': ['error', {
      assert: 'either',
    }],
    'jsx-a11y/control-has-associated-label': 'off',
    'jsx-a11y/accessible-emoji': 'off',
  },
};

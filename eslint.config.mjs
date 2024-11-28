import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: true,
  rules: {
    'antfu/top-level-function': 'off',
    'func-style': ['error', 'expression'],
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    'no-console': 'off',
  },
})

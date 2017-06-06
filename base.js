'use strict'

module.exports = {
  'plugins': [
    'eslint-comments',
  ],
  'rules': {
    'comma-dangle': ['error', 'only-multiline'],

    'eslint-comments/disable-enable-pair': 'error',
    'eslint-comments/no-duplicate-disable': 'error',
    'eslint-comments/no-unlimited-disable': 'error',
    'eslint-comments/no-unused-disable': 'error',
    'eslint-comments/no-unused-enable': 'error',
  },
}

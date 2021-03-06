'use strict'

// https://github.com/Gozala/eslint-config-standard-flow
module.exports = {
  'plugins': [
    'flowtype',
    'import',
  ],
  'rules': {
    'space-infix-ops': 0,
    'no-duplicate-imports': 0,
    'import/no-duplicates': 1,
    'flowtype/define-flow-type': 1,
    'flowtype/space-before-type-colon': [
      1,
      'never'
    ],
    'flowtype/use-flow-type': 1,
    'flowtype/valid-syntax': 1,
    'flowtype/type-id-match': [
      2,
      '^([A-Z]+[a-z0-9A-Z]*)$',
    ],
  },
  'settings': {
    'flowtype': {
      'onlyFilesWithFlowAnnotation': false,
    },
  },
}

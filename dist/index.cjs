
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./rainbow-token-list-test.production.min.cjs')
} else {
  module.exports = require('./rainbow-token-list-test.development.cjs')
}

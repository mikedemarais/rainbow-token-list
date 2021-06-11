
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./rainbow-token-list-test.cjs.production.min.js')
} else {
  module.exports = require('./rainbow-token-list-test.cjs.development.js')
}

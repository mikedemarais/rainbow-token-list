#!/usr/bin/env node
'use strict';

const { NODE_ENV } = process.env;
if (NODE_ENV === 'production')
  module.exports = require('./rainbow-token-list-test.production.min.cjs');
else
  module.exports = require('./rainbow-token-list-test.development.cjs');

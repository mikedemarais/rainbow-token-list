#!/usr/bin/env node

/**
 * Library imports and exports.
 */
import * as Types from './constants';
import { build } from './lib/build';
import { write } from './lib/write';

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
/**
 * Make TS definitions available.
 */
export { Types };
/**
 * Export all methods we want to make publicly available.
 */
export { build, write };

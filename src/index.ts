#!/usr/bin/env node

/**
 * Disable certificate validation.
 *
 * @see https://nodejs.org/api/cli.html#cli_node_tls_reject_unauthorized_value
 */
/**
 * Library imports and exports.
 */
import * as Types from './constants';
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
/**
 * Make TS definitions available.
 */
export { Types };
/**
 * Expose as much of the library as possible to consumers.
 */
export * from './constants';
export * from './lib/build';
export * from './lib/load';
export * from './lib/parse';
export * from './lib/write';
